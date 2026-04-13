import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CTAGroup } from "@/components/cta-group";
import { ProductGallery } from "@/components/product-gallery";
import {
  business,
  createPageMetadata,
  getRobotModelBySlug,
  robotModels,
} from "@/lib/site-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return robotModels.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getRobotModelBySlug(slug);

  if (!product) {
    return createPageMetadata({
      title: "Produit introuvable",
      description: "La fiche demandée est introuvable.",
      path: "/boutique",
    });
  }

  return createPageMetadata({
    title: `${product.name} | Fiche technique`,
    description:
      `${product.name} : ${product.terrain.toLowerCase()}, ${product.price.toLowerCase()}. Découvrez les caractéristiques techniques, points forts et accompagnement ${business.name}.`,
    path: `/boutique/${product.slug}`,
    keywords: [
      product.name,
      "fiche technique robot tondeuse",
      "installation robot tondeuse",
    ],
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getRobotModelBySlug(slug);

  if (!product) {
    notFound();
  }

  const priceLabel = product.price.startsWith("Sur devis")
    ? product.price
    : `${product.price} installé et configuré`;

  return (
    <>
      <section className="section-space">
        <div className="container-shell">
          <div className="section-card rounded-[2rem] p-5 sm:p-6 lg:p-7">
            <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
              <Link href="/boutique" className="transition hover:text-[var(--foreground)]">
                Boutique
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-[var(--foreground)]">{product.name}</span>
            </div>

            <div className="mt-5 grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
              <ProductGallery productName={product.name} images={product.images} />

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  {product.terrain}
                </p>
                <h1 className="mt-3 font-display text-4xl leading-tight text-[var(--foreground)] md:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-3 text-base font-semibold text-[var(--color-primary)]">
                  {priceLabel}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {product.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {product.features.map((feature, index) => (
                    <span
                      key={`${product.slug}-feature-${index}`}
                      className="rounded-full border border-[rgba(16,23,18,0.08)] bg-white/76 px-3 py-1.5 text-xs font-semibold text-[var(--foreground)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <CTAGroup
                    actions={[
                      {
                        href: "/contact",
                        label: "Demander un devis",
                        caption: "Formulaire simple",
                        variant: "primary",
                      },
                      {
                        href: business.phoneLink,
                        label: "Appeler",
                        caption: business.phone,
                        variant: "secondary",
                      },
                      {
                        href: business.whatsappLink,
                        label: "WhatsApp",
                        caption: "Conseil rapide",
                        variant: "dark",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <div className="section-card rounded-[1.8rem] px-5 py-6 sm:px-6">
            <h2 className="font-display text-3xl text-[var(--foreground)] md:text-4xl">
              Caractéristiques techniques
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Les informations utiles pour comparer rapidement et choisir une
              solution cohérente selon votre terrain.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {product.technicalSpecs.map((spec, index) => (
                <article
                  key={`${product.slug}-spec-${index}`}
                  className="rounded-[1.1rem] border border-[rgba(16,23,18,0.08)] bg-white/74 px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                    {spec.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
                    {spec.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <div className="section-card rounded-[1.8rem] px-5 py-6 sm:px-6">
            <h2 className="font-display text-3xl text-[var(--foreground)] md:text-4xl">
              Ce qui est inclus avec l&apos;installation
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {product.includes.map((item, index) => (
                <div
                  key={`${product.slug}-include-${index}`}
                  className="rounded-[1.1rem] border border-[rgba(16,23,18,0.08)] bg-white/72 px-4 py-3 text-sm font-medium text-[var(--foreground)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
