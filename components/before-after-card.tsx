type BeforeAfterCardProps = {
  title: string;
  location: string;
  before: string[];
  after: string[];
  outcome: string;
};

export function BeforeAfterCard({
  title,
  location,
  before,
  after,
  outcome,
}: BeforeAfterCardProps) {
  return (
    <article className="section-card card-hover rounded-[2rem] p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
            Cas type
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
            {title}
          </h3>
        </div>
        <span className="pill">{location}</span>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="comparison-panel rounded-[1.5rem] p-5">
          <p className="comparison-label">Avant</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
            {before.map((item, index) => (
              <li key={`${title}-before-${index}`}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="comparison-panel comparison-panel-after rounded-[1.5rem] p-5">
          <p className="comparison-label">Après</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--foreground)]">
            {after.map((item, index) => (
              <li key={`${title}-after-${index}`}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 rounded-[1.25rem] bg-[rgba(22,53,43,0.06)] px-4 py-4 text-sm leading-7 text-[var(--color-primary)]">
        {outcome}
      </p>
    </article>
  );
}
