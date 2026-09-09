import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/seo";
import { services } from "@/content/services";
import { cdsTypes } from "@/content/types";
import { EmailLink } from "@/components/EmailLink";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/85 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-600 to-accent-400 grid place-items-center text-white" aria-hidden>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z"/></svg>
            </span>
            <span className="font-bold text-white tracking-tight text-[17px]">
              Opti<span className="text-accent-300">-CDS</span>
            </span>
          </div>
          <p className="mt-4 text-white/65 text-sm leading-relaxed max-w-sm">
            Accompagnement des centres de santé : création, recrutement, organisation, gestion, financements. Notre offre phare : la récupération des subventions.
          </p>
          <p className="mt-5 text-white/65 text-sm">
            <EmailLink className="hover:text-white" />
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs uppercase tracking-widest text-white/45 mb-4">Subventions</h3>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link href="/subvention-teulade" className="hover:text-white">Subvention Teulade</Link></li>
            <li><Link href="/financements" className="hover:text-white">Financements CDS</Link></li>
            <li><Link href="/ressources" className="hover:text-white">Ressources</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/lexique" className="hover:text-white">Lexique</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs uppercase tracking-widest text-white/45 mb-4">Centres de santé</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {cdsTypes.slice(0, 6).map((t) => (
              <li key={t.slug}><Link href={`/centres-de-sante/${t.slug}`} className="hover:text-white">{t.name}</Link></li>
            ))}
            <li><Link href="/centres-de-sante" className="text-accent-300 hover:text-white">Toutes les typologies →</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs uppercase tracking-widest text-white/45 mb-4">Cabinet</h3>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
          </ul>
          <Link href="/contact" className="mt-5 btn-primary text-sm">Contactez-nous</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-white/45 flex flex-col gap-2">
          {/* Avertissement place ici, et nulle part ailleurs. Le repeter sur
              chaque page affaiblirait des contenus dont la valeur commerciale
              tient justement a leur caractere affirmatif. Une mention unique en
              pied de page couvre l'ensemble du site sans diluer aucune page. */}
          <p className="max-w-3xl leading-relaxed">
            Les informations publiées sur ce site sont fournies à titre indicatif et ne
            constituent ni un conseil juridique, ni un engagement sur l’éligibilité d’une
            structure à un dispositif. La réglementation et les montants évoluent, et chaque
            situation s’apprécie au cas par cas. Voir les{" "}
            <Link href="/mentions-legales" className="underline underline-offset-2 hover:text-white/70">
              mentions légales
            </Link>.
          </p>
          <p>© {year} Opti-CDS</p>
        </div>
      </div>
    </footer>
  );
}
