"use client";

import Link from "next/link";
import { ProductGallery } from "@/components/product-gallery";
import { business, type RobotModel } from "@/lib/site-data";

type RobotModelCardProps = {
  model: RobotModel;
};

export function RobotModelCard({ model }: RobotModelCardProps) {
  const priceLabel = model.price.startsWith("Sur devis")
    ? model.price
    : `${model.price} installé et configuré`;

  return (
    <article className="section-card rounded-[1.8rem] p-4 sm:p-5 lg:p-6">
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
        <ProductGallery productName={model.name} images={model.images} />

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
            {model.terrain}
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--foreground)] md:text-4xl">
            <Link
              href={`/boutique/${model.slug}`}
              className="transition hover:text-[var(--color-primary)]"
            >
              {model.name}
            </Link>
          </h2>
          <p className="mt-3 text-base font-semibold text-[var(--color-primary)]">
            {priceLabel}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
            {model.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {model.features.map((feature, index) => (
              <span
                key={`${model.slug}-${index}`}
                className="rounded-full border border-[rgba(16,23,18,0.08)] bg-white/76 px-3 py-1.5 text-xs font-semibold text-[var(--foreground)]"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-[1.2rem] border border-[rgba(16,23,18,0.08)] bg-white/68 px-4 py-3 text-sm leading-7 text-[var(--color-muted)]">
            Installation complète incluse : conseil, choix de la solution,
            pose, configuration et mise en route.
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={`/boutique/${model.slug}`} className="button-secondary">
              Cliquer pour plus de détails
            </Link>
            <Link href="/contact" className="button-primary">
              Demander un devis
            </Link>
            <a href={business.whatsappLink} className="button-dark">
              Être conseillé
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
