import Link from "next/link";

export default function LegacyProductsPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="section-card rounded-[1.6rem] p-6 text-center sm:p-8">
          <h1 className="font-display text-4xl text-[var(--foreground)] md:text-5xl">
            Cette page a changé
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
            Nos produits sont désormais regroupés dans la boutique pour une
            lecture plus claire.
          </p>
          <div className="mt-6">
            <Link href="/boutique" className="button-primary">
              Ouvrir la boutique
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
