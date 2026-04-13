type TestimonialCardProps = {
  quote: string;
  author: string;
  city: string;
  context?: string;
};

export function TestimonialCard({
  quote,
  author,
  city,
  context,
}: TestimonialCardProps) {
  return (
    <article className="section-card card-hover rounded-[1.6rem] p-5">
      <div className="flex gap-1 text-[var(--color-gold)]">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={`star-${index}`}>★</span>
        ))}
      </div>
      {context ? (
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
          {context}
        </p>
      ) : null}
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
        “{quote}”
      </p>
      <p className="mt-4 font-semibold text-[var(--foreground)]">{author}</p>
      <p className="text-sm text-[var(--color-muted)]">{city}</p>
    </article>
  );
}
