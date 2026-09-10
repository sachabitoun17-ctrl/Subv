# Images — règles appliquées sur opti-cds.fr

Document transmissible, complément de `design-guidelines.md`.

Avertissement d'honnêteté avant tout le reste : **ce site n'est pas une
référence en matière d'images, il est une référence en matière de sobriété.**
Sur 86 pages, il y a quatre photographies, toutes sur la page d'accueil. Les
45 articles n'en contiennent aucune. Ce qui suit décrit ce choix, ce qu'il
apporte, et les trois défauts qui subsistent dans l'implémentation actuelle —
à ne pas recopier.

---

## 1. La règle principale : presque aucune image

| | |
|---|---|
| Pages du site | 86 |
| Photographies | 4, toutes sur l'accueil |
| Images dans les articles | 0 |
| Images dans les pages de service | 0 |
| Bibliothèque d'icônes installée | aucune |

Ce n'est pas un manque de temps, c'est une position. Sur un site de conseil,
une photo d'illustration coûte du poids, un aller-retour réseau et un risque
de décalage de mise en page, et n'apporte aucune information que le texte ne
donne déjà. Un stéthoscope sur fond blanc au milieu d'un article sur le
financement ne dit rien à personne.

Ce qui porte la charge visuelle à la place :

- **les icônes**, en SVG inline (section 2) ;
- **le rythme des bandes alternées** et les pastilles de couleur, décrits dans
  `design-guidelines.md` ;
- **les encarts**, qui cassent le texte long bien mieux qu'une image.

**Le test à appliquer avant d'ajouter une image :** est-ce qu'elle contient
une information que le texte ne contient pas ? Un schéma, une capture, un
graphique, une photo d'un lieu réel : oui. Une banque d'images : non.

---

## 2. Les icônes ne sont pas des images

Douze tracés SVG stockés dans une constante, rendus inline :

```tsx
const ICONS = {
  euro: "M12 2C6.48 2 2 6.48…",
  building: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z",
  // …
};

<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d={s.icon} />
</svg>
```

Ce que ça évite : une dépendance, un import de bibliothèque, une requête HTTP
par icône, et le clignotement d'une icône qui arrive après le texte.

Ce que ça apporte : `fill="currentColor"` fait hériter la couleur du parent,
donc une icône change de couleur au survol de sa carte sans une ligne de plus.

Règles :

- `aria-hidden="true"` sur toute icône décorative, sans exception. Elle double
  un libellé déjà présent ; un lecteur d'écran ne doit pas l'entendre deux
  fois.
- Une icône qui porte seule un sens (un bouton sans texte) prend un
  `aria-label` sur l'élément cliquable.
- Vérifier que chaque tracé tient dans son `viewBox` avant de le poser. Un
  tracé recopié de travers déborde ou disparaît, et ça ne se voit pas dans le
  HTML.

---

## 3. L'image obligatoire : `og:image`

C'est la seule image dont on ne peut pas se passer, et elle a coûté une
correction sur l'ensemble du site.

**La règle : un PNG de 1200 × 630, jamais un SVG.**

Le site servait un `og-image.svg`. Il était valide, léger, et parfaitement
inutile : **les réseaux sociaux ne rendent pas le SVG**. Tout partage
apparaissait sans aperçu visuel. Le même problème touchait le `logo` de la
donnée structurée `Organization`, que schema.org attend en format matriciel.

Correction appliquée :

- un `og-image.png` de 1200 × 630, généré par un script versionné
  (`scripts/gen-og-image.cjs`) — donc reproductible, et pas un fichier
  exporté un jour à la main que personne ne saura refaire ;
- déclaré avec ses dimensions explicites, ce que réclament les validateurs :

```ts
openGraph: { images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }] },
twitter:   { card: "summary_large_image", images: [OG_IMAGE] },
```

- la même image sert de `logo` et d'`image` dans le JSON-LD `Organization`.

**Le favicon, lui, reste en SVG** — et c'est le cas inverse : les navigateurs
le rendent très bien, et un SVG reste net à toutes les tailles. La leçon n'est
donc pas « SVG partout » ni « PNG partout », c'est : le format dépend de qui
consomme le fichier.

**À contrôler automatiquement.** L'audit du site bloque le déploiement si une
page indexable n'a pas d'`og:image`. C'est le genre de défaut qui reste six
mois en ligne sans que personne le remarque, parce qu'il n'est visible que
depuis un autre site.

---

## 4. Les quatre photos de l'accueil : comment elles sont posées

```html
<div class="rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-line shadow-xl">
  <img src={HERO_IMG} alt="Centre de santé moderne"
       class="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[420px] object-cover"
       loading="eager" />
  <div class="absolute inset-0 bg-gradient-to-tr from-ink/30 via-ink/0 to-transparent"></div>
</div>
```

Les points à reprendre :

- **La boîte est dimensionnée en CSS, pas par l'image.** `w-full` plus une
  hauteur fixe par palier, plus `object-cover`. L'espace est donc réservé
  avant que l'image n'arrive : pas de décalage de mise en page, quel que soit
  le format du fichier. C'est ce qui remplace les attributs `width`/`height`,
  et c'est plus robuste, parce qu'on ne dépend pas des dimensions réelles du
  fichier.
- **`loading="eager"` sur une seule image**, celle qui est visible sans
  défiler. Toutes les autres en `loading="lazy"`. Une image en haut de page
  chargée paresseusement retarde l'affichage principal ; une image plus bas
  chargée avidement vole la bande passante à celle du haut.
- **Le voile en dégradé par-dessus** (`from-ink/30`) accorde n'importe quelle
  photo à la palette du site. C'est ce qui évite qu'une photo achetée jure
  avec le reste. Il sert aussi à garantir le contraste si du texte passe
  dessus.
- **`overflow-hidden` sur le conteneur arrondi**, sinon les coins de l'image
  dépassent du rayon.
- **`alt`** : une description réelle quand l'image porte du sens,
  `alt=""` quand elle est décorative. `alt=""` n'est pas un oubli, c'est une
  instruction : « passe ton chemin ». Une image décorative avec un `alt`
  bavard pollue la lecture vocale.

---

## 5. Les trois défauts à ne pas recopier

Ils sont dans le code actuel. Je les donne parce qu'un document de règles qui
ne décrit que ce qui va bien ne sert à rien.

### a. Les photos sont pointées chez un tiers

Les quatre images sont chargées depuis `images.unsplash.com`, pas hébergées
sur le domaine. Conséquences réelles :

- l'image d'en-tête pèse **185 Ko** et vient d'une autre origine, **sans
  `preconnect`** : le navigateur doit résoudre le DNS et négocier le TLS avant
  même de commencer à la télécharger, alors que c'est l'élément le plus grand
  de la page ;
- le rendu de la page d'accueil dépend d'un service sur lequel on n'a aucune
  prise.

**Ce qu'il faut faire :** héberger les images sur son propre domaine, servies
par le CDN qui sert déjà le site, en WebP ou AVIF avec repli. Au minimum, si
on garde un tiers, ajouter dans le `<head>` :

```html
<link rel="preconnect" href="https://images.unsplash.com" crossorigin />
```

### b. Des visages de banque d'images sur les témoignages

Les deux témoignages de l'accueil sont attribués par fonction et par région
(« Directrice, centre de santé associatif — Île-de-France »), sans nom
inventé. C'est une précaution correcte. Mais chacun est accompagné du portrait
d'une personne réelle photographiée pour Unsplash, qui n'a jamais dit cette
phrase — et **un lecteur lit ce visage comme étant l'auteur de la citation**.
La photo annule la précaution prise sur l'attribution.

**Ce qu'il faut faire :** soit la photo réelle de la personne, avec son accord
écrit et son nom ; soit pas de photo du tout. Un monogramme, une initiale dans
une pastille, ou simplement la fonction et la région suffisent. Ne jamais
associer un visage à une parole que la personne n'a pas prononcée.

### c. Aucune image dans les articles, y compris là où elle aiderait

La sobriété est une bonne règle par défaut, mais elle est appliquée sans
exception. Un article qui compare deux statuts juridiques, ou qui décrit un
enchaînement de démarches, gagnerait un tableau ou un schéma — et un schéma
est le seul type d'image que les moteurs et les assistants savent citer.

---

## 6. Transposition à un site de recrutement

C'est le point où le système d'opti-cds.fr ne se recopie pas tel quel.

**Sur un site de recrutement, l'image travaille vraiment.** Un candidat
choisit un poste en partie sur des visages, un lieu, une ambiance d'équipe. La
sobriété totale, qui convient au conseil B2B, y coûterait des candidatures.

Ce qui change :

- **Des photos réelles, pas de banque d'images.** Les vrais locaux, les vraies
  équipes, avec autorisation écrite. Une photo authentique un peu imparfaite
  convertit mieux qu'un studio générique, et un candidat repère un cliché
  d'illustration immédiatement.
- **Un budget image assumé** : une séance photo par client employeur vaut
  mieux que quarante visuels génériques.
- **Le droit à l'image** est un vrai sujet, pas une formalité : autorisation
  écrite de chaque personne identifiable, et pour les lieux de soin, accord de
  la structure. Prévoir la durée et le périmètre de l'autorisation.

Ce qui ne change pas, et qui reste vrai partout :

- boîte dimensionnée en CSS avant l'arrivée de l'image ;
- une seule image en `eager`, tout le reste en `lazy` ;
- images hébergées sur son propre domaine, en WebP ou AVIF ;
- `og:image` en PNG 1200 × 630, contrôlé automatiquement ;
- icônes en SVG inline, pas de bibliothèque ;
- jamais un visage sur une parole qui n'est pas la sienne.

---

## 7. Aide-mémoire

Avant de poser une image, cinq questions :

1. Contient-elle une information que le texte ne donne pas ? Sinon, la
   retirer.
2. Est-elle hébergée sur notre domaine, en WebP ou AVIF ?
3. Sa boîte est-elle dimensionnée en CSS, pour que rien ne saute au chargement ?
4. Est-ce la seule en `eager`, ou bien est-elle en `lazy` comme les autres ?
5. Son `alt` décrit-il son contenu, ou est-il vide parce qu'elle est décorative ?

Et une question qui ne se pose qu'une fois par site : l'`og:image` est-elle un
PNG de 1200 × 630, et un contrôle automatique interdit-il de déployer une page
qui n'en a pas ?
