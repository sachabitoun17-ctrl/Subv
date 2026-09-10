import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { hubServicesBody } from "@/content/hubs";
import { services, PILLARS } from "@/content/services";
import { makePageMeta } from "@/lib/seo";

export const metadata: Metadata = makePageMeta({
  title: "Nos services pour centres de santé",
  description:
    "Financement, structuration, développement, accompagnement : tous les sujets administratifs et stratégiques d’un centre de santé.",
  path: "/services",
});

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-soft to-white overflow-hidden border-b border-line">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-200/40 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Services" }]} />
          <p className="mt-8 text-xs uppercase tracking-widest font-semibold text-accent-700">Nos services</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink">
            Financement, structuration, <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">développement</span>, accompagnement.
          </h1>
          <p className="mt-5 text-lg text-ink-soft max-w-2xl leading-relaxed">
            Tous les sujets administratifs et stratégiques d’un centre de
            santé, traités par une équipe spécialisée.
          </p>
          <Link href="/contact" className="mt-7 inline-flex btn-primary">Contactez-nous pour un check-up</Link>
        </div>
      </section>

      {services.length > 0 && PILLARS.map((p) => {
        const items = services.filter((s) => s.pillar === p.id);
        return (
          <section key={p.id} className="bg-white border-b border-line">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-accent-600 to-accent-400 text-white grid place-items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={p.icon} /></svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight">{p.label}</h2>
              </div>
              <p className="mt-3 text-ink-soft max-w-2xl">{p.desc}</p>

              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group rounded-2xl bg-white ring-1 ring-line hover:ring-accent-400 hover:shadow-xl hover:-translate-y-0.5 transition-all p-6 block"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-50 to-accent-100 text-accent-700 grid place-items-center mb-4 group-hover:from-accent-600 group-hover:to-accent-400 group-hover:text-white transition">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon}/></svg>
                    </div>
                    <h3 className="text-lg font-bold text-ink group-hover:text-accent-700">{s.name}</h3>
                    <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                      En savoir plus
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <article className="bg-white border-b border-line">
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 prose-content"
          dangerouslySetInnerHTML={{ __html: hubServicesBody }}
        />
      </article>

      <CTASection title="Parlons de votre centre de santé" label="Contactez-nous pour un check-up" href="/contact" />
    </>
  );
}
