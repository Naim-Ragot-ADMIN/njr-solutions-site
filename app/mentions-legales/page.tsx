import type { Metadata } from "next";
import { createPageMetadata, legalInformation, business } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Mentions légales",
  description:
    `Mentions légales du site ${business.name}, service local à domicile pour la maison connectée.`,
  path: "/mentions-legales",
});

export default function LegalPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="section-card rounded-[2rem] px-6 py-10 sm:px-10">
          <span className="eyebrow">Mentions légales</span>
          <h1 className="mt-5 font-display text-5xl leading-none text-[var(--foreground)] md:text-6xl">
            Informations légales du site
          </h1>

          <div className="mt-10 grid gap-8 text-base leading-8 text-[var(--color-muted)]">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                Éditeur du site
              </h2>
              <p className="mt-3">{legalInformation.editor}</p>
              <p>{legalInformation.companyDetails}</p>
              <p>{business.address}</p>
              <p>{business.phone}</p>
              <p>{business.email}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                Directeur de la publication
              </h2>
              <p className="mt-3">{legalInformation.publicationDirector}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                Hébergement
              </h2>
              <p className="mt-3">{legalInformation.hostName}</p>
              <p>{legalInformation.hostAddress}</p>
              <p>{legalInformation.hostPhone}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                Données personnelles
              </h2>
              <p className="mt-3">
                Les informations transmises via le formulaire de contact ont
                pour seul objectif de permettre une réponse adaptée à votre
                demande. Avant mise en production, veillez à compléter les
                informations relatives au traitement des données et à raccorder
                le formulaire à votre solution de gestion des demandes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
