type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={[
        "max-w-5xl",
        isCentered ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow ? (
        <span
          className={[
            "eyebrow",
            invert ? "text-[var(--color-gold-soft)]" : "",
            isCentered ? "justify-center" : "",
          ].join(" ")}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={[
          "mt-3 font-display text-3xl leading-[1.1] md:text-4xl",
          invert ? "text-white" : "text-[var(--foreground)]",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-3 text-base leading-7 md:text-base",
            invert ? "text-white/74" : "text-[var(--color-muted)]",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
