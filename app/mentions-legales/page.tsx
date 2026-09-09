import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, CONTACT_EMAIL, makePageMeta } from "@/lib/seo";
import { EmailLink } from "@/components/EmailLink";

export const metadata: Metadata = {
  ...makePageMeta({
    title: "Mentions légales",
    description:
      "Mentions légales du site Opti-CDS : éditeur, hébergement, propriété intellectuelle et données personnelles.",
    path: "/mentions-legales",
  }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
      <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-ink">Mentions légales</h1>
      <div className="prose-content mt-8">
        <h2>Éditeur</h2>
        <p>
          <strong>{SITE_NAME}</strong>
          <br />Adresse : [à compléter]
          <br />Email : <EmailLink />
          <br />SIRET : [à compléter]
          <br />Directeur de la publication : [à compléter]
        </p>
        <h2>Hébergement</h2>
        <p>Cloudflare Pages, Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA.</p>
        <h2>Propriété intellectuelle</h2>
        <p>L’ensemble des contenus présents sur ce site est protégé par le droit d’auteur.</p>
        <h2>Portée des informations publiées</h2>
        <p>
          Les contenus de ce site décrivent des dispositifs de financement et un cadre
          réglementaire qui évoluent. Ils sont publiés à titre indicatif, à des fins
          d’information générale, et ne constituent ni un conseil juridique, ni un
          conseil fiscal, ni une garantie d’éligibilité.
        </p>
        <p>
          Aucune information figurant sur ce site ne saurait se substituer à l’examen
          de votre situation particulière, ni aux textes en vigueur et aux positions des
          organismes compétents, notamment les agences régionales de santé et
          l’Assurance Maladie. Les montants, plafonds et conditions d’accès mentionnés
          par ces organismes font foi.
        </p>
        <p>
          Nous nous efforçons de maintenir ces contenus à jour, sans pouvoir garantir
          qu’ils reflètent à tout moment l’état du droit applicable. Toute décision prise
          sur la seule base de ces pages relève de la responsabilité de son auteur.
          Contactez-nous pour un examen de votre situation.
        </p>
        <h2>Données personnelles</h2>
        <p>
          Les données collectées via le formulaire de contact sont utilisées
          exclusivement pour répondre à votre demande. Vous disposez d’un droit
          d’accès, de rectification et de suppression en écrivant à{" "}
          <EmailLink />.
        </p>
      </div>
    </section>
  );
}
