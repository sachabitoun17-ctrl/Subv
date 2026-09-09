#!/usr/bin/env node
// ---------------------------------------------------------------------------
// scripts/seo-audit.mjs — contrôle qualité SEO d'Opti-CDS, versionné.
//
// S'exécute APRÈS `npm run build`, sur le dossier `out/` produit par le
// static export. Aucune dépendance externe : Node pur.
//
// DEUX ÉTAGES, volontairement séparés :
//
//   BLOQUANT — de la casse réelle, jamais acceptable en production.
//     - <title> absent, ou > 60 caractères (suffixe " · Opti-CDS" inclus)
//     - meta description absente
//     - og:image absente
//     - balise <Link (JSX fuité dans du HTML brut, s'affiche cassé)
//     - lien interne dont la cible est absente de out/ (404 interne)
//     - corps d'article introuvable
//
//   DETTE — de la qualité insuffisante, à résorber run après run.
//     - article < 350 mots réels
//     - article sans aucun lien interne
//     - meta description hors 110-160 caractères (après décodage des entités)
//     - page indexable hors article sous 300 mots (services, typologies,
//       piliers). Sans cette règle, 20 pages d'atterrissage commerciales
//       restaient sous 200 mots sans que rien ne le signale.
//
// Par défaut : sort en 1 sur BLOQUANT uniquement, et affiche la dette.
// C'est ce qui permet de poser le garde-fou tout de suite sans figer la
// production le temps que les ~40 articles courts soient étoffés.
// Avec --strict : sort en 1 dès qu'il reste de la dette (objectif final).
//
// Usage :
//   node scripts/seo-audit.mjs [outDir] [--strict] [--json]
//   outDir par défaut : "out"
// ---------------------------------------------------------------------------

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const args = process.argv.slice(2);
const STRICT = args.includes("--strict");
const JSON_OUT = args.includes("--json");
const OUT_DIR = args.find((a) => !a.startsWith("--")) || "out";

const blocking = [];
const debt = [];
const block = (page, code, msg) => blocking.push({ page, code, msg });
const owe = (page, code, msg) => debt.push({ page, code, msg });

if (!existsSync(OUT_DIR)) {
  console.error(`seo-audit: dossier "${OUT_DIR}" introuvable. Lance d'abord \`npm run build\`.`);
  process.exit(1);
}

// --- Décodage minimal des entités HTML pour mesurer une longueur réelle -----
const NAMED = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  eacute: "é", egrave: "è", ecirc: "ê", agrave: "à", acirc: "â",
  ccedil: "ç", ugrave: "ù", ucirc: "û", icirc: "î", iuml: "ï",
  ouml: "ö", uuml: "ü", euml: "ë", ocirc: "ô", laquo: "«", raquo: "»",
  rsquo: "’", lsquo: "‘", ldquo: "“", rdquo: "”", hellip: "…",
  ndash: "–", mdash: "—", euro: "€", deg: "°", times: "×", middot: "·",
};
function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-zA-Z]+);/g, (m, name) => (name in NAMED ? NAMED[name] : m));
}

// --- Collecte récursive des pages HTML -------------------------------------
function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (entry.endsWith(".html")) acc.push(full);
  }
  return acc;
}

// URL publique d'un fichier out/
function routeOf(file) {
  let r = "/" + relative(OUT_DIR, file).split(sep).join("/");
  r = r.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  return r === "" ? "/" : r;
}

// Une route interne "/foo" ou "/foo/bar" existe-t-elle dans out/ ?
function internalTargetExists(path) {
  const clean = path.split("#")[0].split("?")[0].replace(/\/$/, "");
  if (clean === "") return true; // "/" -> out/index.html
  return [
    join(OUT_DIR, clean, "index.html"),
    join(OUT_DIR, `${clean}.html`),
    join(OUT_DIR, clean), // asset direct (svg, txt, png...)
  ].some((c) => existsSync(c));
}

// Pages dont la brievete est normale : elles ne visent aucune requete.
const PAGES_COURTES_LEGITIMES = new Set(["/contact", "/mentions-legales"]);
const SEUIL_PAGE = 300;

const files = walk(OUT_DIR);
const shortArticles = [];
const pagesMinces = [];

for (const file of files) {
  const route = routeOf(file);
  if (file.endsWith("404.html")) continue;
  const html = readFileSync(file, "utf8");

  const robots = /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i.exec(html);
  const noindex = robots && /noindex/i.test(robots[1]);

  if (!noindex) {
    const titleM = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
    if (!titleM) {
      block(route, "title-manquant", "aucune balise <title>");
    } else {
      const title = decodeEntities(titleM[1].trim());
      if (title.length > 60) block(route, "title-trop-long", `title ${title.length} car > 60 : "${title}"`);
    }

    const descM = /<meta[^>]+name=["']description["'][^>]*content=["']([\s\S]*?)["']/i.exec(html)
      || /<meta[^>]+content=["']([\s\S]*?)["'][^>]*name=["']description["']/i.exec(html);
    if (!descM) {
      block(route, "desc-manquante", "aucune meta description");
    } else {
      const d = decodeEntities(descM[1].trim());
      if (d.length < 110 || d.length > 160) owe(route, "desc-hors-bornes", `meta description ${d.length} car hors 110-160`);
    }

    if (!/<meta[^>]+property=["']og:image["']/i.test(html)) block(route, "og-image-manquante", "og:image manquante");

    // Pages minces hors articles. Les pages services et typologies etaient
    // sous 200 mots alors qu'elles visent des requetes commerciales
    // disputees. Sans ce controle, l'audit ne les voyait pas.
    const isArticleRoute = /^\/ressources\/[^/]+\/?$/.test(route) && route !== "/ressources/";
    if (!isArticleRoute && !PAGES_COURTES_LEGITIMES.has(route.replace(/\/$/, ""))) {
      const corps = html
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<(nav|footer|head)[\s\S]*?<\/\1>/gi, " ");
      const main = /<main[\s\S]*?<\/main>/i.exec(corps);
      const zone = main ? main[0] : corps;
      const n = decodeEntities(zone.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length;
      if (n < SEUIL_PAGE) {
        owe(route, "page-mince", `${n} mots < ${SEUIL_PAGE}`);
        pagesMinces.push({ route, words: n });
      }
    }
  }

  // --- Règles articles : pages /ressources/<slug>/ (hors index) ------------
  const isArticle = /^\/ressources\/[^/]+\/?$/.test(route) && route !== "/ressources/";
  if (!isArticle) continue;

  // Le corps d'un article peut être servi en plusieurs blocs `prose-content`,
  // depuis qu'un encart d'appel à l'action s'intercale en plein texte. Ne lire
  // que le premier revenait à ne compter que la moitié de l'article : le
  // décompte de mots et la recherche de liens internes portaient sur un texte
  // tronqué, et un article réellement trop court pouvait passer inaperçu à
  // l'inverse. On les concatène tous.
  let body = "";
  for (let pIdx = html.indexOf("prose-content"); pIdx !== -1; pIdx = html.indexOf("prose-content", pIdx + 1)) {
    const openEnd = html.indexOf(">", pIdx);
    const closeIdx = html.indexOf("</div>", openEnd);
    if (openEnd === -1 || closeIdx === -1) continue;
    body += (body ? " " : "") + html.slice(openEnd + 1, closeIdx);
  }
  if (!body) {
    block(route, "corps-introuvable", "corps d'article (prose-content) introuvable");
    continue;
  }

  if (/<Link\b/i.test(body) || /&lt;Link\b/i.test(body)) {
    block(route, "jsx-link", "balise <Link> (JSX) dans le HTML de l'article");
  }

  const text = decodeEntities(body.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  if (words < 350) {
    owe(route, "article-court", `${words} mots < 350`);
    shortArticles.push({ route, words });
  }

  const hrefs = [...body.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1]);
  const internal = hrefs.filter((h) => h.startsWith("/") && !h.startsWith("//"));
  if (internal.length === 0) owe(route, "sans-lien-interne", "aucun lien interne");
  for (const link of internal) {
    if (!internalTargetExists(link)) block(route, "lien-casse", `lien interne cassé vers ${link} (cible absente de out/)`);
  }
}

// --- Restitution -----------------------------------------------------------
const byCode = (list) => list.reduce((a, e) => ((a[e.code] = (a[e.code] || 0) + 1), a), {});
shortArticles.sort((a, b) => a.words - b.words);
pagesMinces.sort((a, b) => a.words - b.words);

if (JSON_OUT) {
  console.log(JSON.stringify({
    pages: files.length,
    blocking: blocking.length,
    debt: debt.length,
    blockingByCode: byCode(blocking),
    debtByCode: byCode(debt),
    blockingDetail: blocking,
    shortestArticles: shortArticles.slice(0, 15),
    pagesMinces: pagesMinces.slice(0, 20),
  }, null, 2));
} else {
  if (blocking.length) {
    console.error(`\nseo-audit — BLOQUANT : ${blocking.length} erreur(s), déploiement interdit.\n`);
    for (const e of blocking) console.error(`  ✗ ${e.page}: ${e.msg}`);
  }
  if (debt.length) {
    console.error(`\nseo-audit — DETTE : ${debt.length} point(s) à résorber.`);
    for (const [code, n] of Object.entries(byCode(debt))) console.error(`  · ${code}: ${n}`);
    if (shortArticles.length) {
      console.error("\n  Articles les plus courts (à étoffer en priorité) :");
      for (const a of shortArticles.slice(0, 10)) console.error(`    ${a.words} mots  ${a.route}`);
    }
    if (pagesMinces.length) {
      console.error("\n  Pages minces hors articles :");
      for (const p of pagesMinces.slice(0, 12)) console.error(`    ${p.words} mots  ${p.route}`);
    }
  }
  if (!blocking.length && !debt.length) {
    console.log(`seo-audit : ${files.length} pages contrôlées, 0 erreur.`);
  } else {
    console.error(`\n${files.length} pages contrôlées — ${blocking.length} bloquant(s), ${debt.length} dette.\n`);
  }
}

if (blocking.length) process.exit(1);
if (STRICT && debt.length) process.exit(1);
process.exit(0);
