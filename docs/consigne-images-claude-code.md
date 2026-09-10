# Consigne à coller dans un projet Claude Code — ajouter des photos au site

À copier tel quel dans le chat du projet. Écrit à la deuxième personne parce
que c'est une consigne adressée à l'agent.

---

## Consigne

Ajoute des photographies au site en suivant cette procédure, sans en sauter
une étape.

### 1. Trouver la photo

Les photos viennent d'Unsplash. Tu ne peux pas naviguer dans leur
photothèque, donc tu procèdes ainsi :

1. Cherche sur le web, en restreignant à `unsplash.com`, avec des mots-clés
   en anglais (leur indexation est anglophone) : `unsplash medical center
   waiting room`, `unsplash nurse consultation france`, etc.
2. Ouvre la page de la photo. Son URL contient l'identifiant, en fin de
   slug : `unsplash.com/photos/un-titre-quelconque-<ID>`.
3. Construis l'URL de l'image :

```
https://images.unsplash.com/photo-<ID>?auto=format&fit=crop&w=1400&q=80
```

`auto=format` sert du WebP ou de l'AVIF aux navigateurs qui les acceptent,
`w=` fixe la largeur servie, `q=80` le niveau de compression. Demande la
largeur réellement affichée, pas 2400 par confort.

**Interdiction absolue : ne jamais écrire un identifiant de mémoire.** Ils
ressemblent tous à `photo-1638202993928-7267aad84c31` et un identifiant
inventé a de bonnes chances de renvoyer une vraie photo — d'autre chose.
C'est précisément l'erreur qui a mis un dépistage américain avec des
dépliants en anglais sur la page d'accueil d'un site français.

### 2. Regarder la photo — étape non négociable

Avant d'écrire la moindre ligne de code :

```bash
curl -s -o /tmp/verif.jpg "<URL de l'image>"
```

puis **ouvre le fichier et regarde-le**. Tu as un outil de lecture d'images,
sers-t'en. Une URL qui répond 200 ne prouve que l'existence du fichier, pas
son contenu.

Ce que tu vérifies en le regardant :

- le sujet est bien celui qu'on cherchait ;
- rien ne trahit un autre pays : texte en langue étrangère sur une affiche
  ou un dépliant, uniforme, plaque, panneau ;
- l'orientation correspond à la boîte prévue. Une photo en portrait dans un
  cadre large sera recadrée brutalement par `object-cover` ;
- le visage, s'il y en a un, a l'expression attendue. Un portrait fermé
  au-dessus d'une citation chaleureuse sonne faux.

Puis **écris l'attribut `alt` d'après ce que tu as vu**, pas d'après ce que
tu espérais trouver.

### 3. Vérifier qu'on ne réutilise pas deux fois la même photo

```bash
grep -o 'photo-[0-9a-f-]*' app/**/*.tsx | sort | uniq -d
```

Toute sortie est un défaut. Le même visage utilisé une fois comme membre de
l'équipe et une fois comme client en témoignage est arrivé sur un site en
production, et c'est resté en ligne des mois.

### 4. Intégrer

```html
<div class="rounded-2xl overflow-hidden ring-1 ring-line shadow-xl relative">
  <img src={HERO_IMG}
       alt="décris ici ce que tu as réellement vu"
       class="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover"
       loading="eager" />
  <div class="absolute inset-0 bg-gradient-to-tr from-ink/30 via-ink/0 to-transparent"></div>
</div>
```

- **La boîte est dimensionnée en CSS**, `w-full` plus une hauteur fixe par
  palier, plus `object-cover`. L'espace est réservé avant l'arrivée de
  l'image : rien ne saute au chargement, quel que soit le format du fichier.
- **`loading="eager"` sur une seule image**, celle qu'on voit sans défiler.
  Toutes les autres en `loading="lazy"`.
- **Un voile en dégradé par-dessus** accorde n'importe quelle photo à la
  palette du site, et garantit le contraste si du texte passe dessus.
- **`overflow-hidden` sur le conteneur arrondi**, sinon les coins de l'image
  dépassent du rayon.
- **`alt=""` si la photo est purement décorative.** Ce n'est pas un oubli,
  c'est une instruction pour les lecteurs d'écran.

### 5. Héberger, ou au minimum préconnecter

Le mieux est de télécharger les photos et de les servir depuis le domaine du
site : on ne dépend plus d'un tiers, et le CDN qui sert déjà le site les
sert aussi.

Si on garde le lien direct vers Unsplash, ajouter dans le `<head>` :

```html
<link rel="preconnect" href="https://images.unsplash.com" crossorigin />
```

Sans cette ligne, le navigateur résout le DNS et négocie le TLS avant même
de commencer à télécharger l'image la plus grande de la page.

### 6. La règle de licence à ne pas franchir

La licence Unsplash autorise l'usage commercial, sans permission ni
attribution. Mais elle ne couvre **que** les droits du photographe, pas ceux
des personnes photographiées : Unsplash indique explicitement que sa licence
n'inclut pas le droit d'utiliser l'image de personnes reconnaissables, et
qu'il revient à l'utilisateur d'obtenir les autorisations nécessaires.

En pratique, la ligne est celle de l'**adhésion suggérée** :

| Usage | Verdict |
|---|---|
| Illustrer une page, une ambiance, un lieu | oui |
| Habiller un article | oui |
| Visage en avatar d'un témoignage client | **non** |
| Visage présenté comme un membre de l'équipe | **non** |
| Visage associé à une affirmation, un chiffre, une recommandation | **non** |

Une photo décorative n'engage personne. Un visage placé à côté d'une phrase
laisse entendre que cette personne l'a prononcée, ce qui relève de
l'endossement — et là, la licence ne protège plus.

Pour un témoignage : la vraie personne avec son accord écrit et son nom, ou
pas de photo du tout. Une pastille avec ses initiales fait très bien
l'affaire.
