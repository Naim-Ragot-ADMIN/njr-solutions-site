import type { Metadata } from "next";
import { CTAGroup } from "@/components/cta-group";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  aboutValues,
  business,
  createPageMetadata,
  processSteps,
  testimonials,
  whyChooseUs,
} from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "À propos | Service local utile et rassurant",
  description:
    `Découvrez ${business.name}, un service local à domicile qui simplifie la technologie pour les particuliers et les professionnels avec une approche claire, propre et humaine.`,
  path: "/qui-sommes-nous",
  keywords: [
    "service local à domicile",
    "maison connectée locale",
    "assistance locale Lot-et-Garonne",
  ],
});

export default function AboutPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell">
          <div className="section-card rounded-[2rem] px-6 py-8 sm:px-10">
            <span className="eyebrow">À propos</span>
            <h1 className="mt-5 max-w-none font-display text-4xl leading-[1.02] text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Une activité locale pensée pour rendre la technologie plus simple.
            </h1>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--color-muted)]">
              J&apos;aide les particuliers et les professionnels à gagner du
              temps avec des solutions concrètes et utiles : robot tondeuse,
              WiFi, sécurité connectée et assistance informatique simple à
              domicile.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="section-card rounded-[1.7rem] p-6">
            <SectionHeading
              eyebrow="Pourquoi cette activité"
              title="Proposer des solutions utiles, pas de la complexité."
              description="Je privilégie une approche claire : écouter, simplifier, installer proprement et laisser un usage facile dès le premier jour."
            />
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Mon objectif n&apos;est pas de vendre de la technique compliquée,
              mais de résoudre des problèmes concrets chez vous, avec des
              explications simples et un rendu professionnel.
            </p>
          </div>

          <div className="section-card-dark rounded-[1.7rem] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              Ma méthode
            </p>
            <div className="mt-4 grid gap-3">
              {processSteps.map((step, index) => (
                <div
                  key={`${step}-${index}`}
                  className="rounded-[1rem] border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/84"
                >
                  <span className="mr-2 text-[var(--color-gold-soft)]">
                    {index + 1}.
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-divider pt-8">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Pourquoi me faire confiance ?"
            title="Un service local, simple, propre et rassurant."
            description="Chaque intervention vise un résultat clair : que ça fonctionne bien et que vous soyez autonome."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="section-card rounded-[1.5rem] p-5"
              >
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
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
            eyebrow="Valeurs"
            title="Une promesse simple : vous faciliter les choses."
            description="Des interventions claires, humaines et utiles pour les particuliers et les professionnels."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {aboutValues.map((value, index) => (
              <article
                key={`${value.title}-${index}`}
                className="section-card rounded-[1.5rem] p-5"
              >
                <h2 className="text-lg font-semibold text-[var(--foreground)]">
                  {value.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  {value.description}
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
            title="Des retours locaux, courts et crédibles."
            description="Un aperçu concret de l'expérience client."
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
              Besoin d&apos;un avis local ?
            </p>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
              Un appel ou un WhatsApp suffit pour faire un premier point.
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
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
