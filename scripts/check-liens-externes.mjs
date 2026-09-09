#!/usr/bin/env node
// ---------------------------------------------------------------------------
// scripts/check-liens-externes.mjs — vérifie les liens sortants du site.
//
// Pourquoi un script séparé de seo-audit.mjs : celui-ci ne fait aucun appel
// réseau, il lit `out/` et rien d'autre. C'est ce qui le rend rapide et
// déterministe, et on tient à le garder ainsi. Un contrôle de liens externes
// dépend forcément du réseau, avec les aléas que cela suppose.
//
// Le site n'avait aucun lien sortant jusqu'ici, donc rien ne surveillait cette
// catégorie. Le premier lien externe ajouté sans contrôle serait passé
// inaperçu s'il pointait vers un domaine mort, ce qui a bien failli arriver
// avec un domaine partenaire pas encore publié.
//
// Classement des résultats, volontairement asymétrique : on ne bloque que sur
// la preuve que la cible n'existe pas, jamais sur un simple refus.
//
//   404, 410                    -> BLOQUANT, la page n'existe pas
//   domaine introuvable, 2 essais -> BLOQUANT, le domaine n'existe pas
//   401, 403, 405, 429          -> non bloquant : « interdit » n'est pas
//                                  « inexistant ». Beaucoup de sites publics
//                                  refusent les requêtes non navigateur, et
//                                  un proxy peut renvoyer 403 à notre place.
//   5xx, délai dépassé, coupure -> non bloquant, panne probablement passagère
//
// Usage : node scripts/check-liens-externes.mjs [outDir]
// ---------------------------------------------------------------------------

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.argv[2] || "out";
const INTERNE = "opti-cds.fr";
const DELAI_MS = 10000;
// Certains sites refusent les requêtes sans en-tête d'agent crédible.
const UA = "Mozilla/5.0 (compatible; opti-cds-linkcheck/1.0; +https://opti-cds.fr)";
// Seuls ces codes prouvent que la cible n'existe pas.
const CODES_MORTS = new Set([404, 410]);

// Domaines tolérés le temps de leur mise en ligne.
//
// Un lien vers un domaine pas encore publié reste un lien mort, et le contrôle
// continue de le signaler bruyamment. Il ne bloque simplement pas le
// déploiement, parce que retenir tout le reste du site pour un lien sur trois
// pages coûte plus cher que le lien lui-même sur un site à faible trafic.
//
// CETTE LISTE DOIT SE VIDER. Chaque entrée est une dette assumée, pas une
// exception permanente : retirer le domaine dès qu'il résout, ce que le
// contrôle confirmera en le laissant passer en vert.
const EN_ATTENTE = new Set(["talentcaresante.fr", "www.talentcaresante.fr"]);

if (!existsSync(OUT_DIR)) {
  console.error(`check-liens-externes: dossier "${OUT_DIR}" introuvable.`);
  process.exit(1);
}

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (e.endsWith(".html")) acc.push(p);
  }
  return acc;
}

// --- Collecte des liens sortants et de leurs pages sources -----------------
const sources = new Map(); // url -> Set(pages)
for (const f of walk(OUT_DIR)) {
  const html = readFileSync(f, "utf8");
  for (const m of html.matchAll(/href="(https?:\/\/[^"]+)"/g)) {
    const url = m[1];
    let hote;
    try { hote = new URL(url).hostname; } catch { continue; }
    if (hote === INTERNE || hote.endsWith(`.${INTERNE}`)) continue;
    if (!sources.has(url)) sources.set(url, new Set());
    sources.get(url).add(f.slice(OUT_DIR.length) || "/");
  }
}

if (sources.size === 0) {
  console.log("check-liens-externes : aucun lien sortant, rien à vérifier.");
  process.exit(0);
}

console.log(`check-liens-externes : ${sources.size} lien(s) sortant(s) distinct(s).\n`);

async function interroger(url) {
  // HEAD d'abord, car beaucoup de serveurs le traitent sans transférer le corps.
  // Certains le refusent en 405, on retombe alors sur GET.
  for (const method of ["HEAD", "GET"]) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), DELAI_MS);
    try {
      const r = await fetch(url, {
        method,
        redirect: "follow",
        signal: ctrl.signal,
        headers: { "User-Agent": UA, Accept: "text/html,*/*" },
      });
      clearTimeout(t);
      if (method === "HEAD" && r.status === 405) continue;
      return { statut: r.status };
    } catch (e) {
      clearTimeout(t);
      const cause = e?.cause?.code || e?.code || e?.name || "";
      if (method === "HEAD" && cause === "" ) continue;
      return { erreur: cause || String(e) };
    }
  }
  return { erreur: "indéterminé" };
}

const bloquants = [];
const incertains = [];
const tolerees = [];

for (const [url, pages] of sources) {
  let r = await interroger(url);

  // Un domaine introuvable peut être un incident DNS passager : on retente une
  // fois avant de conclure que le domaine n'existe pas.
  if (r.erreur === "ENOTFOUND" || r.erreur === "EAI_AGAIN") {
    await new Promise((res) => setTimeout(res, 1500));
    r = await interroger(url);
  }

  const liste = [...pages].slice(0, 3);
  if (r.statut !== undefined) {
    if (CODES_MORTS.has(r.statut)) {
      bloquants.push({ url, motif: `HTTP ${r.statut}`, pages: liste, total: pages.size });
      console.log(`  ✗ ${r.statut}  ${url}`);
    } else if (r.statut >= 400) {
      incertains.push({ url, motif: `HTTP ${r.statut}` });
      console.log(`  ?  ${r.statut}  ${url}  (refus, pas une preuve d'absence)`);
    } else {
      console.log(`  ✓ ${r.statut}  ${url}`);
    }
  } else if (r.erreur === "ENOTFOUND") {
    let hote = "";
    try { hote = new URL(url).hostname; } catch {}
    if (EN_ATTENTE.has(hote)) {
      tolerees.push({ url, total: pages.size });
      console.log(`  !  DNS  ${url}  (domaine attendu, toléré)`);
    } else {
      bloquants.push({ url, motif: "domaine introuvable", pages: liste, total: pages.size });
      console.log(`  ✗ DNS  ${url}  (domaine introuvable)`);
    }
  } else {
    incertains.push({ url, motif: r.erreur });
    console.log(`  ?      ${url}  (${r.erreur})`);
  }
}

if (tolerees.length) {
  console.log(`\n${tolerees.length} lien(s) vers un domaine attendu, tolérés le temps de la mise en ligne :`);
  for (const t of tolerees) console.log(`  ! ${t.url}  (${t.total} page(s))`);
  console.log("  Retirer ces domaines de EN_ATTENTE une fois publiés.");
}

if (incertains.length) {
  console.log(`\n${incertains.length} lien(s) non concluant(s), réseau incertain de notre côté. Non bloquant.`);
}

if (bloquants.length) {
  console.error(`\ncheck-liens-externes : ${bloquants.length} lien(s) sortant(s) cassé(s).\n`);
  for (const b of bloquants) {
    console.error(`  ✗ ${b.url}`);
    console.error(`      ${b.motif}, référencé par ${b.total} page(s) :`);
    for (const p of b.pages) console.error(`        ${p}`);
  }
  console.error("");
  process.exit(1);
}

console.log("\ncheck-liens-externes : tous les liens sortants répondent.");
process.exit(0);
