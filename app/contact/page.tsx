import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import {
  business,
  createPageMetadata,
  responsePromise,
  serviceAreaBadges,
} from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Contact | Appeler, WhatsApp ou devis",
  description:
    `Contactez ${business.name} par téléphone, WhatsApp ou formulaire pour parler robot tondeuse, WiFi, sécurité connectée, assistance informatique ou PC sur mesure.`,
  path: "/contact",
  keywords: [
    "contact NJR Solutions",
    "appeler service local à domicile",
    "WhatsApp assistance locale",
  ],
});

export default function ContactPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Un besoin ? Appelez, envoyez un WhatsApp ou laissez un message."
              description="Particulier ou professionnel, décrivez votre besoin et je vous recontacte rapidement avec une proposition claire."
            />

            <div className="mt-5 grid gap-4">
              <a
                href={business.phoneLink}
                className="section-card card-hover rounded-[1.5rem] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Appel direct
                </p>
                <p className="mt-2 text-3xl font-semibold text-[var(--color-primary)]">
                  {business.phone}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Le moyen le plus rapide pour un premier conseil.
                </p>
              </a>

              <a
                href={business.whatsappLink}
                className="section-card card-hover rounded-[1.5rem] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  WhatsApp
                </p>
                <p className="mt-2 text-2xl font-semibold text-[var(--color-primary)]">
                  Message direct
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Pratique pour poser une question ou envoyer une photo.
                </p>
              </a>

              <div className="section-card rounded-[1.5rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Zone d’intervention
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  {responsePromise}. Intervention locale à domicile autour de
                  Villeneuve-sur-Lot, Agen et communes proches.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceAreaBadges.map((city, index) => (
                    <span key={`${city}-${index}`} className="pill">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ContactForm submitLabel="Envoyer ma demande" />
        </div>
      </div>
    </section>
  );
}
