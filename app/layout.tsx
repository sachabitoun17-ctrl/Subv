import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, OG_IMAGE } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Opti-CDS · Subventions et accompagnement des centres de santé",
    template: `%s · ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    // Subventions
    "subvention teulade",
    "subvention teulade cds",
    "subvention teulade centre de santé",
    "subvention teulade centre dentaire",
    "récupérer subvention teulade",
    "subventions cds",
    "subventions centre de santé",
    "subventions centre dentaire",
    "subventions centre médical",
    "subventions centre infirmier",
    "subventions cms",
    "article L162-32",
    // Financement
    "financement cds",
    "financement centre de santé",
    "financement centre dentaire",
    "financement cms",
    "aide centre de santé",
    "aide ouverture centre de santé",
    // Accompagnement
    "accompagnement centre de santé",
    "consultant centre de santé",
    "audit financier centre de santé",
    // Création / typologies
    "créer un centre de santé",
    "ouvrir un centre de santé",
    "centre de santé médical",
    "centre de santé dentaire",
    "centre de santé infirmier",
    "centre municipal de santé",
    "centre de santé associatif",
    "centre de santé mutualiste",
    "centre de santé pluriprofessionnel",
  ],
  authors: [{ name: SITE_NAME }],
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Opti-CDS · Subventions et accompagnement des centres de santé",
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: DEFAULT_DESCRIPTION, images: [OG_IMAGE] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  category: "santé",
  formatDetection: { telephone: false, email: true, address: false },
};

// Google Analytics 4 — measurement ID
const GA_ID = "G-BY40KM4XDY";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // `Organization` et non `ProfessionalService`. Ce dernier est un sous-type de
  // LocalBusiness, qui exige une adresse postale : sans elle, le balisage est
  // invalide sur CHAQUE page du site, ce qu'un audit Ahrefs a remonté sur 123
  // pages. Opti-CDS intervient sur toute la France sans accueil du public, donc
  // Organization décrit la réalité. Si une adresse d'établissement doit être
  // affichée un jour, repasser à ProfessionalService en ajoutant `address`
  // (PostalAddress) et `telephone`, et pas avant.
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#org`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    image: `${SITE_URL}${OG_IMAGE}`,
    logo: `${SITE_URL}${OG_IMAGE}`,
    areaServed: { "@type": "Country", name: "France" },
    serviceType: "Accompagnement des centres de santé",
    knowsAbout: [
      "Subvention Teulade",
      "Article L162-32 du code de la sécurité sociale",
      "Subventions des centres de santé",
      "Financement des centres de santé",
      "Création de centre de santé",
      "Conventionnement CPAM",
      "Recrutement médical",
      "Gestion administrative et financière des centres de santé",
    ],
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE_URL}#org` },
  };
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) — placé en premier dans <head> pour capter
            les pageviews dès le chargement, sur toutes les pages via le root layout. */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`,
          }}
        />
        {/* L'image d'en-tête de l'accueil est servie par un tiers et pèse
            185 Ko : c'est le plus gros élément de la page. Sans preconnect,
            le navigateur résout le DNS puis négocie le TLS avant même de
            commencer à la télécharger. À terme elle a vocation à être
            hébergée sur notre domaine, ce qui rendra cette ligne inutile. */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#1660C9" />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="NkEEPTpQOPv/893G8Lf+Sg"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wxvuepr54m");`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
