type FAQItem = {
  question: string;
  answer: string;
};

type FAQListProps = {
  items: FAQItem[];
};

export function FAQList({ items }: FAQListProps) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <details
          key={`${item.question}-${index}`}
          className="section-card rounded-[1.5rem] p-0 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <summary className="flex cursor-pointer items-start justify-between gap-4 px-6 py-5">
            <span className="text-lg font-semibold text-[var(--foreground)]">
              {item.question}
            </span>
            <span className="faq-icon mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(17,23,19,0.08)] bg-white text-[var(--color-primary)]">
              +
            </span>
          </summary>
          <div className="border-t border-[rgba(17,23,19,0.08)] px-6 py-5 text-[var(--color-muted)]">
            <p className="leading-8">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
