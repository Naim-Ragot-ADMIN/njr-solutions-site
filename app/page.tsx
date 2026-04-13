import type { Metadata } from "next";
import { CTAGroup } from "@/components/cta-group";
import { SectionHeading } from "@/components/section-heading";
import { ServicePreviewCard } from "@/components/service-preview-card";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  business,
  createPageMetadata,
  problemSolutions,
  processSteps,
  services,
  testimonials,
  trustBar,
  trustHighlights,
  whyChooseUs,
} from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Accueil | Services utiles, modernes et locaux",
  description:
    `${business.name} présente des services clairs et rassurants : installation de robot tondeuse, optimisation WiFi, sécurité connectée, assistance informatique et PC prêt à l'emploi.`,
  path: "/",
  keywords: [
    "installation robot tondeuse",
    "optimisation WiFi",
    "sécurité connectée",
    "assistance informatique à domicile",
    "PC sur mesure",
  ],
});

export default function HomePage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell">
          <div className="section-card-dark overflow-hidden rounded-[2.25rem] px-6 py-6 sm:px-8 lg:px-10 lg:py-8">
            <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div className="max-w-none lg:pr-6">
                <span className="eyebrow text-[var(--color-gold-soft)]">
                  Service local à domicile
                </span>
                <h1 className="mt-4 font-display text-4xl leading-[1.01] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
                  {business.heroTitle}
                </h1>
                <p className="mt-4 text-lg font-medium text-white/78 md:text-xl">
                  {business.heroSubtitle}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                  {business.heroDescription}
                </p>
                <div className="mt-6">
                  <CTAGroup
                    actions={[
                      {
                        href: "/contact",
                        label: "Demander un devis",
                        caption: "Réponse rapide et sans engagement",
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
                        caption: "Message direct",
                        variant: "dark",
                      },
                    ]}
                    captionTone="light"
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {trustBar.map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-white/84 backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:grid gap-3">
                <div className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-3 text-xs text-white/78">
                  Robot tondeuse, WiFi, sécurité, assistance informatique et PC
                  prêt à l&apos;emploi. Une sélection simple, claire et locale.
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {processSteps.slice(0, 4).map((step, index) => (
                    <div
                      key={`${step}-${index}`}
                      className="rounded-[1.1rem] border border-white/10 bg-white/6 p-4 text-sm text-white/76"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
                        Étape {index + 1}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {trustHighlights.map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/86"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Problèmes que je résous"
            title="Des besoins très concrets, avec des solutions claires."
            description="Chaque intervention part d'un problème réel et se termine par un usage plus simple, plus fluide et plus rassurant."
            align="center"
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {problemSolutions.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="section-card rounded-[1.6rem] p-5"
              >
                <h2 className="text-xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--foreground)]">
                    Problème :
                  </span>{" "}
                  {item.problem}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  <span className="font-semibold text-[var(--foreground)]">
                    Solution :
                  </span>{" "}
                  {item.solution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Comment ça se passe"
            title="Un parcours simple, du premier contact à la mise en service."
            description="Le but est de vous faire gagner du temps avec un déroulé clair et rassurant."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={`${step}-${index}`}
                className="section-card rounded-[1.5rem] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Étape {index + 1}
                </p>
                <p className="mt-2 text-sm font-semibold leading-7 text-[var(--foreground)]">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Cinq services utiles, modernes et faciles à comprendre."
            description="Le site reste volontairement simple : une sélection claire de prestations concrètes pour la maison, le jardin et l'informatique du quotidien."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {services.map((service) => (
              <ServicePreviewCard
                key={service.slug}
                href={service.slug === "robot-tondeuse" ? "/boutique" : "/services"}
                title={service.shortTitle}
                kicker={service.kicker}
                description={service.description}
                image={service.image}
                imageAlt={service.imageAlt}
                imageFit={service.imageFit}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Pourquoi me choisir"
            title="Un service local, rassurant et orienté résultat."
            description="Le but n'est pas d'ajouter de la complexité, mais de vous laisser une solution propre, bien installée et facile à utiliser."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="section-card rounded-[1.6rem] p-5"
              >
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Avis clients"
            title="Des retours courts, naturels et rassurants."
            description="Quelques avis simples pour montrer le ton du service : propre, humain et utile."
            align="center"
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((item, index) => (
              <TestimonialCard
                key={`${item.author}-${item.city}-${index}`}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <div className="section-card-dark rounded-[2rem] px-6 py-8 text-center sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
              Contact direct
            </p>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
              Un besoin ? Parlons-en.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/74">
              Je vous aide à choisir la bonne solution et je m&apos;occupe de
              l&apos;installation.
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
                    caption: "Formulaire simple et rapide",
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
