/**
 * Encart partenaire recrutement, volontairement discret.
 *
 * Il remplace les sections « Notre partenaire recrutement » qui occupaient un
 * titre de niveau 2 sur deux pages de service. Deux raisons de le descendre :
 * ces pages sont celles qui portent l'offre du cabinet, et un partenaire y
 * prenait autant de place qu'une prestation ; et un lien sortant depuis une
 * page commerciale envoie l'autorité du site là où elle ne travaille pas pour
 * nous. Il vit désormais en bas des articles consacrés au recrutement, où le
 * lecteur est déjà sur le sujet.
 *
 * Le registre visuel est délibérément plus bas que celui de CTAEncart : fond
 * neutre, pas de bouton, un lien texte. Un encart partenaire qui crie aussi
 * fort que l'appel au contact lui prend des clics.
 *
 * `href` et `libelle` n'ont volontairement pas de valeur par défaut. Quand
 * ils en avaient, les cinq encarts du site pointaient tous vers la page
 * d'accueil du partenaire sous la même ancre répétée cinq fois — les deux
 * motifs qui distinguent un lien d'échange d'un lien éditorial. Ne pas les
 * rétablir : c'est l'absence de défaut qui force à choisir.
 */
export function EncartPartenaire({
  href,
  libelle,
  texte = "Le sourcing des praticiens est mené avec TalentCare Santé, notre partenaire dédié au recrutement médical. Nous restons votre interlocuteur sur tout ce qui relève du centre de santé.",
}: {
  href: string;
  libelle: string;
  texte?: string;
}) {
  return (
    <aside className="not-prose mt-12 rounded-xl bg-soft ring-1 ring-line p-5 sm:p-6">
      <p className="text-[11px] uppercase tracking-widest font-semibold text-ink-mute">
        Partenaire recrutement
      </p>
      <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{texte}</p>
      <p className="mt-3">
        <a
          href={href}
          rel="noopener"
          className="text-[15px] font-semibold text-accent-700 underline underline-offset-2 hover:text-accent-800"
        >
          {libelle}
        </a>
      </p>
    </aside>
  );
}
