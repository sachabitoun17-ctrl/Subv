# Fondations design — règles appliquées sur opti-cds.fr

Document transmissible. Il décrit le système visuel réellement en place sur
un site de conseil B2B santé, avec les valeurs exactes et la raison d'être de
chaque règle. Les valeurs de couleur sont à remplacer par celles de la marque
d'accueil ; tout le reste se transpose tel quel.

Le principe qui gouverne l'ensemble : **le site doit avoir l'air d'avoir été
dessiné, pas assemblé**. On y arrive en réduisant le nombre de décisions
possibles, pas en multipliant les effets. Ce document est une liste de
décisions déjà prises.

---

## 1. Les jetons : une seule source de vérité

Aucune couleur, aucune taille, aucun rayon n'est écrit en dur dans un
composant. Tout passe par la configuration Tailwind. C'est ce qui permet de
rebrander le site en changeant huit lignes.

```ts
colors: {
  bg:   "#FFFFFF",
  soft: "#F4F8FD",            // fond de section alterné
  ink:  { DEFAULT: "#0B2545", soft: "#2B4A6F", mute: "#6B8AAE" },
  line: "#E1E8F2",            // toutes les bordures et anneaux
  accent: { 50…950 },         // une seule teinte, échelle complète
}
```

**Trois niveaux de texte, pas plus.** `ink` pour les titres, `ink-soft` pour
le corps, `ink-mute` pour les métadonnées (dates, sur-titres, mentions). Un
quatrième niveau n'apporte rien et devient vite un gris arbitraire.

**Une seule couleur d'accent**, déclinée en 50 → 950. Pas de couleur
secondaire. Une palette à deux accents oblige à trancher sur chaque bouton,
et personne ne tranche deux fois pareil. Le contraste vient de la valeur
(600 sur blanc, 50 en fond), pas de la teinte.

**Le corps de texte n'est jamais noir.** `#2B4A6F` sur blanc : c'est un bleu
très sombre, il passe les contrastes AA largement, et il évite la dureté du
noir pur sur un écran clair. Le même raisonnement vaut pour les bordures :
`#E1E8F2` est un bleu pâle, pas un gris.

**Adaptation pour une marque recrutement.** Le bleu clinique porte la
crédibilité institutionnelle, ce qui est le bon registre pour du conseil en
financement. Un site de recrutement vend une rencontre : une teinte plus
chaude (vert profond, indigo) sert mieux. Ce qui ne change pas, c'est la
structure — une teinte, dix valeurs, trois niveaux d'encre.

---

## 2. Typographie

Une seule famille : **Inter**, chargée via `next/font/google` avec
`display: "swap"` et exposée en variable CSS. Une deuxième police en titrage
est un choix esthétique défendable ; elle coûte une requête, un
`font-display` à gérer et un décalage de mise en page. Sur un site de contenu,
ce n'est pas là que se gagne la crédibilité.

L'échelle est courte et répétée à l'identique :

| Rôle | Classes |
|---|---|
| H1 de page | `text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight` |
| H1 de page d'entrée | `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight` |
| H2 de section | `text-2xl md:text-3xl font-bold tracking-tight` |
| H2 dans un article | `text-2xl md:text-3xl font-semibold mt-12 mb-4` |
| Corps | `text-ink-soft leading-relaxed` |
| Sur-titre | `text-xs uppercase tracking-widest font-semibold text-accent-700` |
| Mention | `text-xs text-ink-mute` |

Deux détails qui font beaucoup :

- **`tracking-tight` sur tous les gros titres.** Inter s'espace trop à grande
  taille. Sans resserrement, un H1 a l'air d'un titre de diapositive.
- **`leading-relaxed` sur tout le corps.** Un paragraphe de conseil se lit en
  entier ou pas du tout ; l'interligne serré fait décrocher.

Le sur-titre en capitales espacées au-dessus du H1 est le motif le plus
rentable du système. Il situe la page en trois mots, il donne une accroche de
couleur sans bouton, et il se répète sur toutes les pages sans lasser.

---

## 3. Le rythme des sections

C'est la règle qui structure toutes les pages, et elle tient en une phrase :
**une page est une pile de bandes pleine largeur, alternant deux fonds,
séparées par un filet.**

```html
<section className="bg-white border-b border-line">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14"> … </div>
</section>
<section className="bg-soft border-b border-line">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14"> … </div>
</section>
```

Trois largeurs de conteneur, et pas une de plus :

- `max-w-3xl` — texte long. C'est la mesure de lecture, environ 75 signes.
  Tout article, toute page de contenu.
- `max-w-5xl` — grilles de cartes, listes de services.
- `max-w-6xl` — en-têtes de page, pieds, grilles larges.

Le padding horizontal est **toujours** `px-4 sm:px-6 lg:px-8`, jamais autre
chose. Le padding vertical est `py-12`, `py-14` ou `py-16`. Trois valeurs
suffisent : au-delà, l'irrégularité se voit sans qu'on sache la nommer.

L'alternance `bg-white` / `bg-soft` fait le travail des séparateurs sans
qu'on ait à dessiner quoi que ce soit. Le `border-b border-line` s'ajoute
parce que deux bandes blanches finissent toujours par se suivre.

---

## 4. Les surfaces : anneau plutôt qu'ombre

Toutes les cartes suivent un motif unique :

```html
class="rounded-2xl bg-white ring-1 ring-line p-6"
```

- **`ring-1` et non `border`.** L'anneau ne participe pas au calcul de taille,
  donc une carte survolée qui change d'anneau ne décale pas ses voisines.
- **Pas d'ombre au repos.** L'ombre arrive au survol, avec un déplacement
  d'un demi-pixel : `hover:ring-accent-400 hover:shadow-xl
  hover:-translate-y-0.5 transition-all`. Une grille de cartes toutes
  ombrées à l'arrêt fait bruyant ; le relief doit signifier « cliquable ».
- **Rayons : `rounded-lg` pour les boutons et petites pastilles,
  `rounded-xl` pour les encarts, `rounded-2xl` pour les cartes.** Trois
  valeurs, attribuées par taille d'objet. Une pastille de 40 px et une carte
  de 400 px ne peuvent pas partager le même rayon sans que l'une des deux ait
  l'air fausse.

---

## 5. Boutons : deux, définis une fois

```css
.btn-primary   { @apply inline-flex items-center justify-center gap-2 rounded-lg
                 bg-accent-600 hover:bg-accent-700 text-white font-semibold
                 px-5 py-3 transition shadow-sm; }
.btn-secondary { @apply inline-flex items-center justify-center gap-2 rounded-lg
                 ring-1 ring-line hover:bg-soft text-ink font-semibold
                 px-5 py-3 transition; }
```

Un primaire, un secondaire, définis en CSS et jamais réécrits en classes
inline. Dès qu'un bouton est composé à la main sur une page, il diverge, et
on se retrouve avec quatre bleus légèrement différents.

**Un seul primaire par écran visible.** S'il y en a deux, aucun n'est
primaire. Le secondaire n'est pas un bouton gris : c'est un bouton fantôme,
cerclé, qui laisse toute la charge visuelle au primaire.

---

## 6. Icônes : un jeu fermé, jamais de lettre

Toutes les icônes sont des tracés SVG stockés dans une constante `ICONS`,
rendus en `viewBox="0 0 24 24" fill="currentColor"`. Aucune bibliothèque
d'icônes n'est installée : douze tracés couvrent tout le site, et ils pèsent
moins qu'un import.

```tsx
<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d={s.icon} />
</svg>
```

Deux règles apprises en corrigeant :

- **Jamais l'initiale du titre dans une pastille.** C'est le réflexe de
  remplissage quand l'icône manque, et ça se voit : une grille de « F S D A »
  ressemble à un avatar par défaut, pas à un pictogramme.
- **Une icône de rubrique ne réutilise pas l'icône d'un de ses enfants.** La
  rubrique et ses trois cartes sont visibles d'un seul coup d'œil ; le même
  symbole à deux échelles se lit comme une erreur, pas comme une hiérarchie.

`aria-hidden="true"` sur toutes les icônes décoratives, sans exception : elles
doublent un libellé déjà présent, un lecteur d'écran ne doit pas l'entendre
deux fois.

---

## 7. Le contenu long

Le corps des articles est du HTML brut injecté, mis en forme par une seule
classe `.prose-content` :

```css
.prose-content h2 { @apply text-2xl md:text-3xl font-semibold mt-12 mb-4 tracking-tight; }
.prose-content p  { @apply text-ink-soft leading-relaxed mb-4; }
.prose-content a  { @apply text-accent-600 underline underline-offset-2 hover:text-accent-800; }
.prose-content ul { @apply list-disc pl-6 space-y-2 mb-5 text-ink-soft; }
.prose-content blockquote { @apply border-l-4 border-accent-300 bg-soft pl-5 py-3 my-6 italic rounded-r; }
```

`mt-12` avant chaque H2 est la valeur la plus importante du fichier : c'est
elle qui donne au texte long son rythme respirable. Un H2 collé au paragraphe
précédent transforme un article en mur.

**Les liens dans le corps sont soulignés.** Pas de lien en couleur seule : le
souligné est le seul indicateur qui survit au daltonisme, et sur un texte
dense la couleur seule se perd.

---

## 8. Les encarts dans le texte

Deux types d'encarts, avec deux registres visuels **volontairement inégaux**.
C'est le point le plus facile à rater.

**L'appel à l'action** — fond `accent-50`, anneau `accent-200`, un bouton
primaire, une question en gras qui reprend l'intention du lecteur :

```html
<aside class="not-prose my-10 rounded-2xl bg-accent-50 ring-1 ring-accent-200 p-6">
```

**Le renvoi partenaire ou secondaire** — fond `soft`, anneau `line`, pas de
bouton, un lien texte, un sur-titre discret :

```html
<aside class="not-prose mt-12 rounded-xl bg-soft ring-1 ring-line p-5">
```

Un encart secondaire qui crie aussi fort que l'appel au contact lui prend ses
clics. La hiérarchie visuelle doit refléter la hiérarchie commerciale, sinon
elle travaille contre elle.

`not-prose` sur tout encart placé dans du contenu long : sans lui, les règles
`.prose-content` s'appliquent à l'intérieur et cassent l'encart.

**Placement.** L'encart se pose là où la question se pose dans la lecture,
pas en pied de page. Sur un article, cela veut dire découper le corps et
insérer l'encart au milieu — un marqueur dans le HTML fait très bien
l'affaire, avec repli en fin d'article si le marqueur manque.

> Attention : si le corps est découpé en plusieurs blocs, tout contrôle
> automatique qui compte les mots ou les liens doit concaténer les blocs. Un
> audit qui ne lit que le premier compte l'article à moitié et peut laisser
> passer une page réellement trop mince.

---

## 9. Accessibilité, le minimum non négociable

- Contraste AA sur tout texte. `ink-mute` (#6B8AAE) est la limite basse : il
  est réservé aux métadonnées, jamais au corps.
- L'état de survol n'est jamais le seul indicateur ; le focus clavier doit
  rester visible (ne pas supprimer l'anneau de focus natif).
- `aria-hidden` sur les icônes décoratives.
- Un seul `<h1>` par page, et une hiérarchie de titres sans saut de niveau.
- Les libellés de lien se suffisent hors contexte : « Voir les offres », pas
  « cliquez ici ».

---

## 10. Ce qu'on s'interdit

La liste des tentations, dans l'ordre où elles se présentent :

- **Une deuxième couleur d'accent.** Voir section 1.
- **Un dégradé en fond de section.** Le dégradé est réservé aux petites
  surfaces : pastilles d'icône, mot mis en valeur dans un H1. En fond de
  bande, il date le site en six mois.
- **Des ombres portées au repos.** Voir section 4.
- **Des animations d'apparition au défilement.** Sur un site de contenu, elles
  retardent la lecture de ce que le visiteur est venu chercher.
- **Une image d'illustration sans fonction.** Une photo de banque d'images en
  en-tête coûte du poids et ne dit rien. Une capture réelle, un schéma, un
  chiffre : oui. Un stéthoscope sur fond blanc : non.
- **Le mode sombre**, tant que le site est un site de contenu public. C'est un
  doublement du travail de test pour un usage marginal en B2B.

---

## 11. Reprendre ce système sur une autre marque

Dans l'ordre, une demi-journée :

1. Remplacer l'échelle `accent` par celle de la marque (générer les dix
   valeurs, ne pas en inventer trois).
2. Réaccorder `ink`, `soft` et `line` sur la nouvelle teinte : ce sont des
   variantes désaturées de l'accent, pas des gris neutres. C'est ce qui fait
   qu'un site a l'air accordé.
3. Garder l'échelle typographique et les trois largeurs telles quelles.
4. Redessiner le jeu d'icônes, un tracé par rubrique.
5. Vérifier les contrastes de la nouvelle palette avant d'écrire une page.

Ce qui se transpose sans rien changer : le rythme des sections, les trois
largeurs, les deux boutons, le motif de carte, les deux registres d'encart et
la liste des interdits. C'est là que se trouve l'essentiel du système ; la
couleur n'en est que la surface.
