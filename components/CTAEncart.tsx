import Link from "next/link";

/**
 * Encart d'appel à l'action inséré DANS le corps d'une page, à distinguer de
 * CTASection qui ferme la page en pleine largeur.
 *
 * Raison d'être : la Search Console montre que les visiteurs arrivent sur les
 * pages Teulade avec des requêtes d'action ou de définition, "formulaire
 * subvention teulade", "subvention teulade c'est quoi". Ils cherchent quoi
 * faire, pas une présentation de cabinet. Un appel générique en pied de page
 * ne répond à aucune de ces deux intentions.
 *
 * Cet encart les prend de front, au moment où la question se pose dans la
 * lecture, et lève l'objection au lieu de la contourner.
 */
export function CTAEncart({
  question,
  reponse,
  label = "Vérifier mon éligibilité",
  href = "/contact",
  mention = "Échange gratuit, réponse sur pièces, sans engagement.",
}: {
  question: string;
  reponse: string;
  label?: string;
  href?: string;
  mention?: string;
}) {
  return (
    <aside className="not-prose my-10 rounded-2xl bg-accent-50 ring-1 ring-accent-200 p-6 sm:p-7">
      <p className="text-lg sm:text-xl font-bold text-ink leading-snug">{question}</p>
      <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">{reponse}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600 hover:bg-accent-700 text-white font-semibold px-5 py-3 text-[15px] transition shadow-sm"
        >
          {label}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
        <span className="text-xs text-ink-mute">{mention}</span>
      </div>
    </aside>
  );
}
