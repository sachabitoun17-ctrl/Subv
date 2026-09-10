import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { SITE_URL, makePageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...makePageMeta({
    title: "Recrutement de médecins en centre de santé",
    description:
      "Recrutement de médecins salariés pour votre centre de santé via nos partenaires recruteurs. Sourcing, contrats, intégration. On trouve vos praticiens.",
    path: "/recrutement-medecins",
  }),
  keywords: [
    "recrutement médecin centre de santé",
    "trouver un médecin salarié",
    "recruter médecin CDS",
    "pénurie médecins centre de santé",
    "médecin salarié centre de santé",
    "partenariat recrutement médecins",
  ],
};

const faqs = [
  { q: "Recrutez-vous vous-mêmes les médecins ?", a: "Nous orchestrons le recrutement et nous mobilisons nos partenaires recruteurs spécialisés dans la santé pour le sourcing. Vous gardez un interlocuteur unique chez nous, du cadrage du besoin jusqu’à l’intégration du praticien." },
  { q: "Pour quelles spécialités pouvez-vous intervenir ?", a: "Médecine générale et principales spécialités, ainsi que les chirurgiens-dentistes pour les centres dentaires. Nous adaptons le sourcing à votre typologie de centre et à votre territoire." },
  { q: "Combien de temps prend un recrutement de médecin ?", a: "Cela dépend de la spécialité, du territoire et de l’attractivité du poste. Certains profils sont rares et demandent de la patience. Nous fixons un cadre réaliste dès le départ plutôt que de promettre des délais intenables." },
  { q: "Comment êtes-vous rémunérés sur le recrutement ?", a: "Nous travaillons au résultat, sans vous engager sur des frais avant d’avoir avancé concrètement. Les conditions sont posées clairement dès le premier échange, sans frais cachés." },
  { q: "Mon centre est en zone peu attractive, est-ce possible quand même ?", a: "C’est justement là que l’approche active et le bon partenaire font la différence. Nous travaillons l’attractivité de votre projet et ciblons les praticiens sensibles à ce type de territoire. Contactez-nous pour un check-up." },
];

const steps = [
  { n: "01", t: "Cadrage du besoin", d: "Premier échange pour définir le profil recherché : spécialité, temps de travail, contraintes du territoire, calendrier." },
  { n: "02", t: "Mobilisation du bon partenaire", d: "Nous activons le recruteur spécialisé le plus pertinent selon la spécialité et la zone, et nous lançons le sourcing." },
  { n: "03", t: "Sourcing et présélection", d: "Approche directe des praticiens ciblés, tri des candidatures, première qualification. Vous ne recevez que des profils déjà filtrés." },
  { n: "04", t: "Entretiens et projet", d: "Nous vous aidons à présenter votre centre sous son meilleur jour : projet de santé, équipe, conditions d’exercice." },
  { n: "05", t: "Contractualisation", d: "Construction du contrat de travail, du package de rémunération et des clauses adaptées au cadre du centre de santé." },
  { n: "06", t: "Intégration et fidélisation", d: "Onboarding du praticien, accompagnement des premières semaines, suivi dans la durée. Recruter ne suffit pas, il faut garder." },
];

export default function Page() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Recrutement de médecins pour centres de santé",
    serviceType: "Recrutement médical",
    provider: { "@id": `${SITE_URL}#org` },
    areaServed: { "@type": "Country", name: "France" },
    audience: { "@type": "Audience", audienceType: "Centres de santé" },
    description:
      "Sourcing via des partenaires recruteurs spécialisés, attractivité, contractualisation et fidélisation de médecins salariés en centre de santé.",
    url: `${SITE_URL}/recrutement-medecins`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Recrutement de médecins" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Le nerf de la guerre des centres de santé</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-tight">
            Recrutement de <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">médecins</span> :<br/>
            nos partenaires trouvent vos praticiens.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-3xl leading-relaxed">
            Sans médecins, un centre de santé ne tient pas. Le recrutement est aujourd’hui le premier frein au développement des CDS. Nous activons nos partenariats avec des recruteurs spécialisés pour aller chercher les profils dont vous avez besoin, là où ils sont, et sécuriser leur arrivée.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-base">Contactez-nous pour un check-up</Link>
            <Link href="/services" className="btn-secondary text-base">Tous nos services</Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Le constat</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              La pénurie médicale fragilise les centres de santé.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              La difficulté à recruter des médecins est devenue la préoccupation numéro un des directions de centres de santé. La démographie médicale se tend, les départs en retraite s’accélèrent, et les territoires se livrent une concurrence directe pour attirer les mêmes praticiens. Un poste vacant, c’est une file active qui se ferme, des recettes en moins, et une équipe qui s’épuise à compenser.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              La plupart des centres recrutent comme ils peuvent. Une annonce postée, quelques candidatures spontanées, le bouche-à-oreille local. Cette approche passive fonctionne de moins en moins. Les médecins qui cherchent un poste salarié ne sont pas tous en train de scruter les annonces. Beaucoup sont déjà en poste et n’envisagent un changement que si on vient les chercher avec un projet clair et attractif.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-soft border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre approche</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              On mobilise nos partenaires recruteurs pour vous.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              Le recrutement médical est un métier à part entière. Plutôt que de prétendre tout faire seuls, nous avons noué des partenariats avec des recruteurs spécialisés dans le secteur de la santé. Ces partenaires disposent de viviers de praticiens, de canaux de sourcing actifs et d’une connaissance fine du marché de l’emploi médical. Nous orchestrons cette relation pour vous, du cadrage du besoin jusqu’à l’intégration du médecin.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              Vous gardez un seul interlocuteur. Nous traduisons votre besoin en un profil recherché, nous mobilisons le bon partenaire selon la spécialité et le territoire, et nous restons à vos côtés sur tout ce qui relève du centre de santé : statut salarié, package de rémunération, clauses spécifiques au secteur, conditions d’accueil. Vous bénéficiez de la force d’un recruteur spécialisé, articulée avec notre connaissance du modèle CDS.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre process</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Du besoin à l’intégration, en six étapes.
          </h2>
          <ol className="mt-10 grid md:grid-cols-2 gap-5">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl bg-white ring-1 ring-line p-6">
                <div className="text-3xl font-bold text-accent-200">{s.n}</div>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.t}</h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <article className="bg-soft border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose-content">
          <h2>Pour quels profils de médecins</h2>
          <p>Le besoin n’est pas le même selon la typologie de votre centre. Nous accompagnons le recrutement sur l’ensemble des profils que mobilisent les CDS :</p>
          <ul>
            <li><Link href="/centres-de-sante/medical">Médecins généralistes</Link>, cœur de l’activité de nombreux centres</li>
            <li>Médecins spécialistes : ophtalmologie, dermatologie, cardiologie, gynécologie, pédiatrie</li>
            <li><Link href="/centres-de-sante/dentaire">Chirurgiens-dentistes</Link> pour les centres de santé dentaires</li>
            <li>Profils à temps partiel, en complément d’une activité existante</li>
            <li>Praticiens en reconversion vers le salariat, en quête de stabilité</li>
          </ul>
          <h2>Pourquoi le salariat attire de plus en plus</h2>
          <p>Le modèle salarié répond à une attente forte d’une partie croissante des praticiens. Il offre un cadre stable, une rémunération régulière, l’absence de gestion administrative et comptable, et un meilleur équilibre entre vie professionnelle et vie personnelle. Pour beaucoup de jeunes médecins, comme pour des praticiens plus expérimentés en quête de sérénité, c’est un argument décisif.</p>
          <p>Encore faut-il savoir le mettre en avant. Un centre de santé attractif, c’est un projet lisible, une équipe accueillante, des conditions d’exercice claires et une organisation qui laisse le médecin se concentrer sur le soin. Nous vous aidons à structurer ce discours et à le porter face aux candidats.</p>
          <h2>Recrutement et équilibre économique</h2>
          <p>Chaque médecin recruté augmente votre patientèle et votre chiffre conventionné. Un chiffre conventionné plus élevé fait grandir les <Link href="/financements">financements mobilisables par votre centre</Link>, qui contribuent à couvrir la masse salariale. Le recrutement et le financement avancent ensemble.</p>
        </div>
      </article>

      <section className="bg-white border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">Questions fréquentes</h2>
          <div className="mt-8"><Faq items={faqs} /></div>
        </div>
      </section>

      <CTASection title="Vos postes de médecins restent vacants ?" label="Contactez-nous pour un check-up" href="/contact" />
    </>
  );
}
