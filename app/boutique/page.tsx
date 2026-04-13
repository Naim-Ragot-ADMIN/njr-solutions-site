import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CTAGroup } from "@/components/cta-group";
import { SectionHeading } from "@/components/section-heading";
import {
  business,
  createPageMetadata,
  robotModels,
} from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Boutique robot tondeuse | Modèles et fiches techniques",
  description:
    `Découvrez la sélection ${business.name} : Navimow i105E, Navimow i210 LiDAR Pro et EcoFlow Blade avec fiche technique, photos et accompagnement à l'installation.`,
  path: "/boutique",
  keywords: [
    "boutique robot tondeuse",
    "fiche technique robot tondeuse",
    "Navimow i105E",
    "Navimow i210 LiDAR Pro",
    "EcoFlow Blade",
  ],
});

export default function BoutiquePage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell">
          <div className="section-card rounded-[2rem] px-6 py-8 sm:px-10">
            <span className="eyebrow">Boutique</span>
            <h1 className="mt-5 max-w-none font-display text-4xl leading-[1.02] text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Une sélection de robots tondeuses simple, premium et vraiment utile.
            </h1>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--color-muted)]">
              Chaque modèle est présenté avec ses points forts et sa fiche
              technique pour vous aider à comparer rapidement.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Modèles disponibles"
            title="Chaque produit est cliquable avec une fiche technique détaillée."
            description="Utilisez le bouton “Cliquer pour plus de détails” pour ouvrir la fiche complète de chaque modèle."
          />
          <div className="mt-6 grid gap-5">
            {robotModels.map((model) => {
              const coverImage = model.images[0];

              return (
                <article
                  key={model.slug}
                  className="section-card card-hover rounded-[1.8rem] p-4 sm:p-5 lg:p-6"
                >
                  <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <Link
                      href={`/boutique/${model.slug}`}
                      aria-label={`Cliquer pour plus de détails sur ${model.name}`}
                      className="group relative block overflow-hidden rounded-[1.2rem] border border-[rgba(16,23,18,0.08)] bg-[linear-gradient(180deg,#f6f4ee_0%,#ece8dc_100%)]"
                    >
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={coverImage.src}
                          alt={coverImage.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className={
                            coverImage.fit === "contain"
                              ? "object-contain p-6 transition duration-300 group-hover:scale-[1.03]"
                              : "object-cover transition duration-300 group-hover:scale-[1.03]"
                          }
                        />
                      </div>
                      <div className="pointer-events-none absolute inset-x-3 bottom-3 inline-flex items-center justify-center rounded-full border border-white/45 bg-black/58 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                        Cliquer pour plus de détails
                      </div>
                    </Link>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                        {model.terrain}
                      </p>
                      <h2 className="mt-2 font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
                        {model.name}
                      </h2>
                      <p className="mt-3 text-base font-semibold text-[var(--color-primary)]">
                        {model.price.startsWith("Sur devis")
                          ? model.price
                          : `${model.price} installé et configuré`}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                        {model.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {model.features.slice(0, 4).map((feature, index) => (
                          <span
                            key={`${model.slug}-feature-${index}`}
                            className="rounded-full border border-[rgba(16,23,18,0.08)] bg-white/76 px-3 py-1.5 text-xs font-semibold text-[var(--foreground)]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={`/boutique/${model.slug}`}
                          className="button-secondary"
                        >
                          Cliquer pour plus de détails
                        </Link>
                        <Link href="/contact" className="button-primary">
                          Demander un devis
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <div className="section-card-dark rounded-[2rem] px-6 py-8 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
              Besoin d&apos;aide pour choisir ?
            </p>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
              Je vous oriente vers le bon modèle selon votre terrain.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/74">
              L&apos;objectif est simple : une solution fiable et installée
              proprement, sans complexité pour vous.
            </p>
            <div className="mt-8">
              <CTAGroup
                align="center"
                captionTone="light"
                actions={[
                  {
                    href: business.phoneLink,
                    label: "Appeler",
                    caption: business.phone,
                    variant: "primary",
                  },
                  {
                    href: business.whatsappLink,
                    label: "WhatsApp",
                    caption: "Message direct",
                    variant: "secondary",
                  },
                  {
                    href: "/contact",
                    label: "Demander un devis",
                    caption: "Réponse rapide",
                    variant: "dark",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
