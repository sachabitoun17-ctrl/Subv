#!/usr/bin/env node
// ---------------------------------------------------------------------------
// scripts/check-liens-partenaire.mjs — surveille les liens vers les domaines
// partenaires, c'est-à-dire des sites appartenant aux mêmes personnes.
//
// Pourquoi ce contrôle existe. Un lien entre deux sites du même propriétaire
// n'apporte presque rien au classement, mais il peut coûter cher s'il prend
// la forme d'un échange : la politique anti-spam de Google vise
// explicitement les « excessive link exchanges » et les pages partenaires
// qui n'existent que pour se lier mutuellement. La frontière entre le lien
// éditorial et l'échange tient à trois choses mesurables, et ce sont les
// trois règles ci-dessous.
//
// Ce n'est pas une hypothèse : les cinq premiers encarts partenaires du site
// pointaient tous vers la page d'accueil du partenaire, sous une ancre
// identique répétée cinq fois, parce que le composant avait des valeurs par
// défaut. Personne ne l'avait vu. Le contrôle existe pour que cela se voie.
//
// Règles, toutes bloquantes :
//   1. pas plus de 20 % des pages ne portent un lien vers un même partenaire
//   2. aucune ancre n'est utilisée deux fois vers un même partenaire
//   3. aucun lien ne pointe vers la racine du partenaire, toujours vers la
//      page qui traite du sujet
//
// Usage : node scripts/check-liens-partenaire.mjs [outDir]
// ---------------------------------------------------------------------------

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.argv[2] || "out";

// Sites appartenant aux mêmes personnes. Ajouter un domaine ici le soumet aux
// trois règles ; ne PAS y mettre un site tiers, dont les liens sont libres.
const PARTENAIRES = ["talentcaresante.fr"];

const PART_MAX = 0.2; // 20 % des pages

if (!existsSync(OUT_DIR)) {
  console.error(`check-liens-partenaire: dossier "${OUT_DIR}" introuvable.`);
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

function texteDe(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

const pages = walk(OUT_DIR);
const erreurs = [];

for (const domaine of PARTENAIRES) {
  // On capture le lien entier pour pouvoir en lire l'ancre.
  const motif = new RegExp(
    `<a\\b[^>]*href="(https?://(?:www\\.)?${domaine.replace(/\./g, "\\.")}[^"]*)"[^>]*>([\\s\\S]*?)</a>`,
    "gi"
  );

  const pagesAvecLien = new Set();
  const ancres = new Map(); // ancre -> [{page, url}]
  const versRacine = [];

  for (const f of pages) {
    const route = f.slice(OUT_DIR.length).replace(/\.html$/, "") || "/";
    // On ne lit que le HTML servi, pas la charge utile du framework qui
    // répète le même lien sous forme de données et fausserait le compte.
    const html = readFileSync(f, "utf8").split("self.__next_f")[0];

    for (const m of html.matchAll(motif)) {
      const url = m[1];
      const ancre = texteDe(m[2]);
      pagesAvecLien.add(route);
      if (!ancres.has(ancre)) ancres.set(ancre, []);
      ancres.get(ancre).push({ route, url });

      const chemin = new URL(url).pathname.replace(/\/+$/, "");
      if (chemin === "") versRacine.push({ route, url });
    }
  }

  if (pagesAvecLien.size === 0) {
    console.log(`check-liens-partenaire : aucun lien vers ${domaine}.`);
    continue;
  }

  const part = pagesAvecLien.size / pages.length;
  console.log(
    `check-liens-partenaire : ${domaine} — ${pagesAvecLien.size} page(s) sur ${pages.length} ` +
      `(${(part * 100).toFixed(1)} %), ${ancres.size} ancre(s) distincte(s).`
  );
  for (const r of [...pagesAvecLien].sort()) console.log(`    ${r}`);

  // Règle 1 — un lien présent partout est un lien de gabarit, pas un choix
  // éditorial, quel que soit l'endroit où il est posé.
  if (part > PART_MAX) {
    erreurs.push(
      `${domaine} : lien présent sur ${(part * 100).toFixed(1)} % des pages, ` +
        `seuil ${PART_MAX * 100} %. Un lien de gabarit déguisé.`
    );
  }

  // Règle 2 — l'ancre exacte répétée est le signal de sur-optimisation le
  // plus simple à détecter, et le plus simple à éviter.
  for (const [ancre, occ] of ancres) {
    if (occ.length > 1) {
      erreurs.push(
        `${domaine} : ancre « ${ancre} » utilisée ${occ.length} fois ` +
          `(${occ.map((o) => o.route).join(", ")}).`
      );
    }
  }

  // Règle 3 — un lien vers l'accueil ne sert aucun lecteur en particulier.
  for (const v of versRacine) {
    erreurs.push(`${domaine} : lien vers la racine depuis ${v.route}. Viser la page du sujet.`);
  }
}

if (erreurs.length) {
  console.error(`\ncheck-liens-partenaire : ${erreurs.length} problème(s).\n`);
  for (const e of erreurs) console.error(`  ✗ ${e}`);
  console.error("");
  process.exit(1);
}

console.log("\ncheck-liens-partenaire : liens partenaires conformes.");
process.exit(0);
