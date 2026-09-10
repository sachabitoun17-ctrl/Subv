import Link from "next/link";
import type { Metadata } from "next";
import { services, PILLARS } from "@/content/services";
import { Faq } from "@/components/Faq";
import { EmailLink } from "@/components/EmailLink";

export const metadata: Metadata = {
  title: "Opti-CDS · Accompagnement des centres de santé",
  description:
    "Accompagnement des centres de santé : création, recrutement, organisation, gestion, financements. Notre offre phare : la récupération des subventions.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "Concrètement, vous faites quoi ?",
    a: "Un accompagnement personnalisé dans la gestion administrative et financière de votre centre de santé : nous adaptons notre intervention à votre situation, à votre équipe et à vos priorités.",
  },
  {
    q: "Travaillez-vous avec tous les types de centres ?",
    a: "Oui : centres médicaux, dentaires, infirmiers, polyvalents, pluriprofessionnels, qu’ils soient portés par une association, une mutuelle, une collectivité ou une SCIC.",
  },
  {
    q: "Et la subvention Teulade ?",
    a: "Oui, c’est l’un des dispositifs que nous mobilisons régulièrement pour nos clients.",
  },
];

const HERO_IMG = "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1400&q=80";
const TEAM_IMG = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80";
const STETHO_IMG = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80";
const DOCTOR_IMG = "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=80";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-soft via-white to-white">
        <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 -left-32 w-[380px] h-[380px] rounded-full bg-accent-100/60 blur-3xl pointer-events-none hidden md:block"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white text-accent-700 px-3 py-1.5 text-[11px] sm:text-xs font-semibold ring-1 ring-accent-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-600"></span>
                </span>
                Spécialistes des centres de santé
              </span>
              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.1]">
                Accompagnement des <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">centres de santé</span>.
              </h1>
              <p className="mt-5 text-base sm:text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl">
                Création, recrutement, organisation, gestion, financements.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary text-sm sm:text-base">
                  Contactez-nous pour un check-up
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
                <Link href="#services" className="btn-secondary text-sm sm:text-base">Voir nos services</Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink-soft">
                <div className="flex -space-x-3">
                  {[STETHO_IMG, DOCTOR_IMG, TEAM_IMG].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" loading="lazy" />
                  ))}
                </div>
                <span>Une équipe spécialisée 100 % centres de santé</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-2 lg:mt-0">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-line shadow-xl">
                <img src={HERO_IMG} alt="Centre de santé moderne" className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[420px] object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 via-ink/0 to-transparent"></div>
              </div>

              {/* Floating badges — desktop seulement */}
              <div className="hidden md:flex absolute -bottom-6 -left-6 md:-left-10 bg-white rounded-2xl shadow-xl ring-1 ring-line p-5 max-w-[260px] items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-50 grid place-items-center text-accent-700 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ink leading-none">100%</div>
                  <div className="text-xs text-ink-mute mt-1">Confidentialité</div>
                </div>
              </div>

              <div className="hidden md:flex absolute -top-4 -right-2 md:-right-6 bg-white rounded-xl shadow-lg ring-1 ring-line px-4 py-3 items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent-600 grid place-items-center text-white shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">Subventions</div>
                  <div className="text-xs text-ink-mute">notre offre phare</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFRE PHARE */}
      <section className="relative bg-gradient-to-br from-accent-700 via-accent-600 to-accent-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 ring-1 ring-white/30 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
                ★ Notre offre phare
              </span>
              <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Récupération des subventions.
              </h2>
              <p className="mt-5 text-white/90 text-lg leading-relaxed max-w-xl">
                Près d’un centre de santé sur quatre ne perçoit pas la totalité
                des subventions auxquelles il a droit, par complexité des
                démarches, manque de maîtrise du cadre, ou simplement faute de
                ressources internes pour suivre les dossiers.
              </p>
              <p className="mt-3 text-white/85 leading-relaxed max-w-xl">
                Nous prenons en charge ce sujet à votre place.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white text-ink hover:bg-accent-50 font-semibold px-6 py-3.5 transition shadow-lg">
                Contactez-nous
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/20 p-8 text-center">
                <div className="text-7xl md:text-8xl font-bold tracking-tight leading-none">
                  ~25<span className="text-5xl text-white/80">%</span>
                </div>
                <p className="mt-4 text-white/85 text-[15px] leading-relaxed">
                  des centres de santé ne perçoivent pas la totalité de leurs
                  subventions.
                </p>
                <p className="mt-2 text-white/60 text-xs">
                  Source : Rapport IGAS 2025, modèle économique des centres de santé pluriprofessionnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section className="bg-white border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Nos réalisations</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Des résultats concrets pour nos clients.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { n: "237", l: "dossiers de subvention acceptés" },
              { n: "58", l: "centres de santé accompagnés" },
              { n: "3,9 M€", l: "obtenus pour nos clients" },
            ].map((r) => (
              <div key={r.l} className="rounded-2xl bg-gradient-to-br from-soft to-white ring-1 ring-line p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">{r.n}</div>
                <div className="mt-3 text-sm text-ink-soft leading-snug">{r.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary text-base">Contactez-nous pour un check-up →</Link>
          </div>
        </div>
      </section>

      {/* RECRUTEMENT — service phare */}
      <section className="bg-soft border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre service phare en développement</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Vous galérez à recruter vos médecins ? Nous avons des partenaires pour ça.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              Le <Link href="/recrutement-medecins" className="text-accent-700 underline decoration-accent-200 underline-offset-2 hover:decoration-accent-500">recrutement de médecins salariés</Link> est le nerf de la guerre des centres de santé. Un poste vacant, c’est une file active qui se ferme et une équipe qui s’épuise. La pénurie médicale rend l’approche passive de moins en moins efficace : les bons profils ne répondent plus aux annonces, on va les chercher.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed text-[17px]">
              Nous avons noué des partenariats avec des recruteurs spécialisés dans la santé. Vous gardez un seul interlocuteur, nous orchestrons le sourcing, la contractualisation et l’intégration, et nous travaillons au résultat. Vous bénéficiez de la force d’un recruteur spécialisé, articulée avec notre connaissance du modèle CDS.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-base">Contactez-nous pour un check-up</Link>
              <Link href="/recrutement-medecins" className="btn-secondary text-base">Découvrir notre offre recrutement</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAILLAGE — accès rapides aux piliers */}
      <section className="bg-white border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-5">
          <Link href="/subvention-teulade" className="group rounded-2xl bg-white ring-1 ring-line hover:ring-accent-400 hover:shadow-md transition p-6 block">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-700">Financement</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent-700">Subvention Teulade</h3>
            <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">On va chercher la subvention Teulade à votre place, de la constitution du dossier au versement.</p>
          </Link>
          <Link href="/recrutement-medecins" className="group rounded-2xl bg-white ring-1 ring-line hover:ring-accent-400 hover:shadow-md transition p-6 block">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-700">Recrutement</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent-700">Recrutement de médecins</h3>
            <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">Nos partenaires recruteurs vont chercher vos praticiens, du sourcing à l’intégration.</p>
          </Link>
          <Link href="/financements" className="group rounded-2xl bg-white ring-1 ring-line hover:ring-accent-400 hover:shadow-md transition p-6 block">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-700">Financement</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent-700">Tous les financements</h3>
            <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">Panorama des financements sous-mobilisés des centres de santé et des leviers à activer.</p>
          </Link>
        </div>
      </section>

      {/* SERVICES — 4 piliers */}
      <section id="services" className="bg-soft relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Nos services</p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
              Quatre piliers pour votre centre de santé.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed text-lg">
              Financement, structuration, développement, accompagnement.
              Une équipe spécialisée à chaque étape de la vie de votre centre.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {PILLARS.map((p) => {
              const items = services.filter((s) => s.pillar === p.id);
              return (
                <div key={p.id} className="rounded-2xl bg-white ring-1 ring-line p-7">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-accent-600 to-accent-400 text-white grid place-items-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={p.icon} /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-ink">{p.label}</h3>
                  </div>
                  <p className="mt-3 text-[15px] text-ink-soft">{p.desc}</p>
                  <ul className="mt-5 space-y-1.5">
                    {items.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="group flex items-center gap-2 text-[15px] text-ink hover:text-accent-700 py-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-600"><path d="M9 18l6-6-6-6"/></svg>
                          <span className="group-hover:underline underline-offset-2">{s.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link href="/services" className="btn-secondary text-base">Voir tous les services</Link>
            <Link href="/contact" className="btn-primary text-base">Contactez-nous pour un check-up →</Link>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden ring-1 ring-line shadow-lg">
                <img src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80" alt="Équipe médicale" className="w-full h-[280px] sm:h-[380px] md:h-[480px] object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl ring-1 ring-line p-5">
                <div className="text-3xl font-bold text-accent-700">Tous statuts</div>
                <div className="mt-1 text-sm text-ink-mute">Association · Mutuelle · Public · SCIC</div>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Notre expertise</p>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                Spécialistes des centres de santé.
              </h2>
              <p className="mt-5 text-ink-soft leading-relaxed text-lg">
                Une équipe spécialisée qui comprend votre secteur, vos
                contraintes et vos enjeux. On adapte notre intervention à votre
                contexte.
              </p>
              <ul className="mt-6 space-y-3 text-[15px]">
                {[
                  "Spécialisation exclusive sur le secteur",
                  "Approche pragmatique et opérationnelle",
                  "Confidentialité totale, NDA systématique",
                  "Accompagnement personnalisé",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-ink-soft">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-600 shrink-0 mt-0.5"><path d="M5 12l5 5L20 7"/></svg>
                    {t}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-8 inline-flex btn-primary">Contactez-nous</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">Ils nous parlent</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Une approche qui change la donne.
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "Ils ont identifié plusieurs dispositifs auxquels nous n’avions pas pensé. Un changement direct sur notre trésorerie.",
                name: "Directrice, Centre de santé associatif",
                where: "Île-de-France",
                avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
              },
              {
                quote: "Pour la première fois, on a une vraie vision de nos chiffres et un interlocuteur qui parle notre langue.",
                name: "Gestionnaire, Centre municipal de santé",
                where: "Sud-Ouest",
                avatar: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=200&q=80",
              },
            ].map((t) => (
              <figure key={t.name} className="relative rounded-2xl bg-white p-7 ring-1 ring-line shadow-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-accent-200 absolute top-5 right-5"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
                <p className="text-ink leading-relaxed text-[17px]">« {t.quote} »</p>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img src={t.avatar} alt="" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow" loading="lazy" />
                  <div>
                    <div className="font-semibold text-ink text-sm">{t.name}</div>
                    <div className="text-xs text-ink-mute">{t.where}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-ink-mute italic">
            Témoignages anonymisés à la demande de nos clients.
          </p>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary text-base">Rejoignez-les. Contactez-nous pour un check-up →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent-700">FAQ</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink tracking-tight">
              Questions fréquentes
            </h2>
          </div>
          <div className="mt-10">
            <Faq items={homeFaqs} />
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">Contactez-nous</Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-ink text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, #1660C9 0%, transparent 50%), radial-gradient(circle at 70% 70%, #5193DC 0%, transparent 50%)" }}></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3.5 py-1.5 text-xs font-semibold backdrop-blur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
            Rendez-vous gratuit
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Contactez-nous pour un <span className="bg-gradient-to-r from-accent-300 to-accent-200 bg-clip-text text-transparent">check-up</span>.
          </h2>
          <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Un échange dédié pour faire le point sur les subventions que votre
            centre de santé devrait recevoir.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-ink hover:bg-accent-50 font-semibold px-7 py-4 text-base transition shadow-lg">
              Contactez-nous pour un check-up
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
            <EmailLink className="inline-flex items-center justify-center gap-2 rounded-lg ring-1 ring-white/30 hover:bg-white/10 text-white font-semibold px-7 py-4 text-base transition" />
          </div>
          <p className="mt-6 text-xs text-white/50">
            Sans engagement · Confidentialité totale
          </p>
        </div>
      </section>
    </>
  );
}
