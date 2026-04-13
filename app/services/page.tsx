import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CTAGroup } from "@/components/cta-group";
import { SectionHeading } from "@/components/section-heading";
import {
  business,
  createPageMetadata,
  robotModels,
  services,
} from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Services | Robot tondeuse, WiFi, sécurité, assistance et PC",
  description:
    `${business.name} propose des services à domicile utiles et lisibles : installation de robot tondeuse, optimisation WiFi, sécurité connectée, assistance informatique et PC sur mesure.`,
  path: "/services",
  keywords: [
    "installation robot tondeuse",
    "optimisation WiFi",
    "installation caméra domicile",
    "assistance informatique à domicile",
    "PC sur mesure",
  ],
});

const [robotService, ...otherServices] = services;

export default function ServicesPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell">
          <div className="section-card rounded-[2rem] px-6 py-8 sm:px-10">
            <span className="eyebrow">Services</span>
            <h1 className="mt-5 max-w-none font-display text-4xl leading-[1.02] text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Des prestations utiles, claires et prêtes à rendre service.
            </h1>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--color-muted)]">
              Ici, pas de catalogue complexe. Chaque service est conçu pour
              répondre à un besoin concret, avec une installation propre et une
              prise en main simple.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <div className="section-card rounded-[1.8rem] px-6 py-7 sm:px-8">
            <SectionHeading
              eyebrow={robotService.shortTitle}
              title="Une sélection premium de robots tondeuses, installés clé en main."
              description="Je vous oriente vers le modèle adapté à votre terrain, puis je gère l'installation, les réglages et la mise en service. Chaque modèle dispose désormais d'une fiche technique détaillée."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {robotService.includes.map((item, index) => (
                <span key={`${item}-${index}`} className="pill">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/boutique" className="button-secondary">
                Ouvrir la boutique robots
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Modèles recommandés"
            title="Trois modèles fiables, cohérents et rassurants."
            description="Une sélection courte pour rester lisible : petits terrains, terrains moyens, et solution premium sur étude."
          />
          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            {robotModels.map((model) => {
              const coverImage = model.images[0];

              return (
                <article
                  key={model.slug}
                  className="section-card card-hover overflow-hidden rounded-[1.7rem] p-4"
                >
                  <Link
                    href={`/boutique/${model.slug}`}
                    className="group block overflow-hidden rounded-[1.2rem] border border-[rgba(16,23,18,0.08)] bg-[linear-gradient(180deg,#f6f4ee_0%,#ece8dc_100%)]"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={coverImage.src}
                        alt={coverImage.alt}
                        fill
                        sizes="(max-width: 1279px) 100vw, 30vw"
                        className={
                          coverImage.fit === "contain"
                            ? "object-contain p-5 transition duration-300 group-hover:scale-[1.03]"
                            : "object-cover transition duration-300 group-hover:scale-[1.03]"
                        }
                      />
                    </div>
                  </Link>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                    {model.terrain}
                  </p>
                  <h3 className="mt-2 font-display text-3xl leading-tight text-[var(--foreground)]">
                    {model.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">
                    {model.price.startsWith("Sur devis")
                      ? model.price
                      : `${model.price} installé et configuré`}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    {model.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {model.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={`${model.slug}-teaser-${index}`}
                        className="rounded-full border border-[rgba(16,23,18,0.08)] bg-white/76 px-3 py-1.5 text-xs font-semibold text-[var(--foreground)]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Autres services"
            title="Des prestations simples pour le WiFi, la sécurité et l'informatique."
            description="Même logique pour chaque service : explication claire, mise en place propre et contact facile."
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {otherServices.map((service) => (
              <article
                key={service.slug}
                className="section-card card-hover overflow-hidden rounded-[1.7rem] p-5"
              >
                <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1.2rem] bg-[linear-gradient(180deg,#f6f4ee_0%,#ece8dc_100%)]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 32vw"
                      className={
                        service.imageFit === "contain"
                          ? "object-contain p-5"
                          : "object-cover"
                      }
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                      {service.shortTitle}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                      {service.kicker}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {service.includes.slice(0, 4).map((item, index) => (
                    <p
                      key={`${service.slug}-${index}`}
                      className="rounded-[1rem] border border-[rgba(16,23,18,0.06)] bg-white/72 px-3 py-2 text-sm font-medium text-[var(--foreground)]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="button-primary">
                    Demander un devis
                  </Link>
                  <a href={business.whatsappLink} className="button-secondary">
                    Être conseillé
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <div className="section-card-dark rounded-[2rem] px-6 py-8 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
              Besoin d&apos;un conseil rapide ?
            </p>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
              Appelez ou envoyez un WhatsApp pour être orienté rapidement.
            </h2>
            <div className="mt-7">
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
                    caption: "Formulaire simple",
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
