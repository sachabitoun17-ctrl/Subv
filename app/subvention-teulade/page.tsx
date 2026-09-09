import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { teuladeBody, teuladeFaq } from "@/content/subvention-teulade";
import { CTAEncart } from "@/components/CTAEncart";
import { makePageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...makePageMeta({
    // Le titre et la description répondent à l'intention de recherche réelle.
    // La page est en position 8 sur "subvention teulade" avec 31 impressions
    // et zéro clic : les requêtes observées sont informatives ("c'est quoi",
    // "loi teulade"), alors que l'ancien snippet promettait un service. Le
    // décalage explique le CTR nul.
    //
    // L'ancienne description citait par ailleurs le calcul, les pièces et la
    // transmission à la CPAM, ce qui livrait en clair la méthode que le corps
    // de la page refuse volontairement de détailler.
    title: "Subvention Teulade : qui peut en bénéficier",
    // « formulaire subvention teulade » ressort en position 5 sans un seul
    // clic : le snippet ne disait rien du formulaire, donc rien qui ressemble
    // à la réponse cherchée. Il le dit maintenant, sans livrer la procédure.
    description:
      "Qui peut en bénéficier, pourquoi il n’existe aucun formulaire à télécharger, et comment savoir si votre centre de santé est concerné.",
    path: "/subvention-teulade",
  }),
  keywords: [
    "subvention teulade",
    "subvention teulade cds",
    "subvention teulade centre de santé",
    "subvention teulade centre dentaire",
    "récupérer subvention teulade",
    "article L162-32",
    "L162-32 code sécurité sociale",
    "aide teulade",
    "décret 14 décembre 1992 teulade",
    "subvention cpam centre de santé",
    "subvention cds",
    "subventions cds",
    "dossier subvention teulade",
  ],
};


// Ces étapes disent ce que le centre a à faire et ce que nous portons à sa
// place. Elles ne nommaient ni l'organisme destinataire ni l'ordre des
// démarches jusqu'ici par oubli : la description de la page avait déjà été
// corrigée pour la même raison, le corps ne l'avait pas été. Un lecteur ne
// doit pas pouvoir reconstituer le circuit en lisant la page.
const steps = [
  { n: "01", t: "Vérification de l’éligibilité", d: "Premier échange pour valider que votre centre peut prétendre au dispositif." },
  { n: "02", t: "Récupération des pièces", d: "Nous collectons auprès de vos équipes ou prestataires les documents nécessaires au dossier." },
  { n: "03", t: "Constitution du dossier", d: "Nous assemblons un dossier complet et défendable à partir de votre situation réelle." },
  { n: "04", t: "Dépôt et instruction", d: "Nous engageons la démarche et en assurons le suivi, sans mobiliser vos équipes." },
  { n: "05", t: "Échanges et validation", d: "Nous répondons aux demandes qui nous sont adressées et défendons le dossier jusqu’à acceptation." },
  { n: "06", t: "Suivi jusqu’au versement", d: "Nous restons sur le dossier jusqu’à la réception effective des fonds par votre centre." },
];

// Découpe le corps en trois blocs, aux titres de section indiqués. Si un titre
// disparaît du contenu, la partie correspondante reste vide plutôt que de
// casser la page, et le texte reste intégralement affiché.
function decouper(html: string) {
  const m1 = html.indexOf("<h2>Pourquoi tant de centres");
  const m2 = html.indexOf("<h2>Ce que ce financement change");
  if (m1 < 0 || m2 < 0 || m2 < m1) return { avant: html, milieu: "", apres: "" };
  return {
    avant: html.slice(0, m1),
    milieu: html.slice(m1, m2),
    apres: html.slice(m2),
  };
}

export default function Page() {
  const corps = decouper(teuladeBody);
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Subvention Teulade" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Article L162-32 du code de la sécurité sociale</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
            Subvention <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">Teulade</span> :<br/>
            nous faisons les démarches à votre place.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">
            Nous prenons en charge l’intégralité du dossier : constitution,
            récupération des pièces justificatives, calcul, transmission à la
            CPAM, échanges et suivi jusqu’au versement effectif des fonds.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-base">Contactez-nous pour un check-up</Link>
            <Link href="/financements" className="btn-secondary text-base">Tous les financements</Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Le constat</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              La plupart des centres ne vont pas chercher cette subvention.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              Pas par manque d’envie, par manque de temps. Les démarches sont
              longues, techniques, chronophages. Beaucoup de centres ne disposent
              pas des ressources internes pour les mener à bien. Résultat : une
              part significative passe à côté de financements auxquels ils ont
              pourtant droit.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              On va la chercher pour vous.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre prise en charge</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              De A à Z, sans intervention de votre part.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              On s’occupe de tout. Vous validez, on agit.
            </p>
          </div>

          <ol className="mt-10 grid md:grid-cols-2 gap-5">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl bg-white ring-1 ring-line p-6">
                <div className="text-3xl font-bold text-accent-200">{s.n}</div>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary text-base">Contactez-nous pour un check-up</Link>
          </div>
        </div>
      </section>

      {/* Le corps est coupé en trois pour intercaler deux appels à l'action au
          moment où la question se pose dans la lecture, plutôt qu'une seule
          fois en pied de page. Les deux encarts répondent aux intentions de
          recherche réellement observées en Search Console sur cette page :
          on cherche le formulaire, et on cherche à savoir si l'on est
          concerné. Le découpage se fait sur des titres de section, donc il
          suit le texte si celui-ci évolue. */}
      <article className="bg-white border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose-content" dangerouslySetInnerHTML={{ __html: corps.avant }} />

          <CTAEncart
            question="Vous cherchez le formulaire de la subvention Teulade ?"
            reponse="Il n’existe pas de formulaire unique à télécharger, et c’est précisément là que la plupart des centres s’arrêtent. L’éligibilité s’apprécie sur pièces, à partir de votre situation d’emploi réelle. Nous nous en chargeons de bout en bout, de la vérification jusqu’au versement effectif."
            label="Faire vérifier mon éligibilité"
          />

          <div className="prose-content" dangerouslySetInnerHTML={{ __html: corps.milieu }} />

          <CTAEncart
            question="Un seul de ces signes vous concerne ?"
            reponse="Alors la question mérite d’être tranchée, et elle se tranche sur pièces en un échange. Nous vous disons si votre centre est concerné, et ce qu’il a laissé de côté le cas échéant."
            label="Savoir si mon centre est concerné"
            mention="Échange gratuit, sans engagement. Nous répondons même si la réponse est non."
          />

          <div className="prose-content" dangerouslySetInnerHTML={{ __html: corps.apres }} />
        </div>
      </article>

      <section className="bg-soft border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight text-center">Questions fréquentes</h2>
          <div className="mt-8">
            <Faq items={teuladeFaq} />
          </div>
        </div>
      </section>

      <CTASection title="On va chercher votre subvention pour vous" label="Contactez-nous pour un check-up" href="/contact" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: teuladeFaq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
