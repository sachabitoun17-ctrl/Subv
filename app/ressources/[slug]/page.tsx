import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTA";
import { publishedPosts, getPost, CTA_MARQUEUR } from "@/content/posts";
import { CTAEncart } from "@/components/CTAEncart";
import { EncartPartenaire } from "@/components/EncartPartenaire";
import { SITE_NAME, SITE_URL, OG_IMAGE, makePageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return publishedPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return makePageMeta({
    title: post.title,
    description: post.description,
    path: `/ressources/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
  });
}

export default function Page({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const related = publishedPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  // Découpe du corps sur le marqueur. Absent, tout le texte passe avant
  // l'encart : l'article reste intégralement affiché quoi qu'il arrive.
  const coupure = post.content.indexOf(CTA_MARQUEUR);
  const avantCta = coupure < 0 ? post.content : post.content.slice(0, coupure);
  const apresCta = coupure < 0 ? "" : post.content.slice(coupure + CTA_MARQUEUR.length);

  // Schema.org Article complet : image, dateModified, publisher.logo,
  // mainEntityOfPage typé. Sans ces champs, le Google Rich Results Test
  // et Ahrefs flagent "Structured data has schema.org validation error".
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [`${SITE_URL}${OG_IMAGE}`],
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}${OG_IMAGE}` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/ressources/${post.slug}`,
    },
  };

  return (
    <>
      <section className="bg-soft border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Ressources", href: "/ressources" },
              { name: post.title },
            ]}
          />
          <p className="mt-6 text-xs uppercase tracking-widest font-semibold text-accent-700">{post.category}</p>
          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed">{post.description}</p>
          <div className="mt-4 text-xs text-ink-mute">
            {new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })} · {post.readingTime}
          </div>
        </div>
      </section>

      <article className="bg-white border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="prose-content" dangerouslySetInnerHTML={{ __html: avantCta }} />
          {post.cta ? (
            <CTAEncart
              question={post.cta.question}
              reponse={post.cta.reponse}
              label={post.cta.label}
              mention={post.cta.mention}
            />
          ) : null}
          {apresCta ? (
            <div className="prose-content" dangerouslySetInnerHTML={{ __html: apresCta }} />
          ) : null}
          {post.partenaireRecrutement ? (
            <EncartPartenaire
              href={post.partenaireRecrutement.href}
              libelle={post.partenaireRecrutement.libelle}
              texte={post.partenaireRecrutement.texte}
            />
          ) : null}
        </div>
      </article>

      <section className="bg-soft border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-ink">À lire aussi</h2>
          <div className="mt-5 grid md:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link key={p.slug} href={`/ressources/${p.slug}`} className="group block rounded-xl bg-white ring-1 ring-line hover:ring-accent-400 p-5 transition">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-700">{p.category}</span>
                <h3 className="mt-2 font-semibold text-ink group-hover:text-accent-700 leading-snug">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </>
  );
}
