import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="section-card rounded-[2rem] px-6 py-14 text-center sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
            Page introuvable
          </p>
          <h1 className="mt-4 font-display text-5xl text-[var(--foreground)] md:text-6xl">
            Cette page n&apos;existe pas.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            Revenez à l&apos;accueil pour découvrir nos solutions de tondeuses
            robot automatiques dans tout le Lot-et-Garonne.
          </p>
          <div className="mt-8">
            <Link href="/" className="button-primary">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
