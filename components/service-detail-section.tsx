import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/site-data";

type ServiceDetailSectionProps = {
  title: string;
  shortTitle: string;
  kicker: string;
  description: string;
  includes: string[];
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  reverse?: boolean;
};

export function ServiceDetailSection({
  title,
  shortTitle,
  kicker,
  description,
  includes,
  image,
  imageAlt,
  imageFit = "cover",
  reverse = false,
}: ServiceDetailSectionProps) {
  return (
    <article
      className={[
        "section-card grid gap-6 overflow-hidden rounded-[1.8rem] p-5 lg:grid-cols-[0.95fr_1.05fr] lg:p-6",
        reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : "",
      ].join(" ")}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-[linear-gradient(180deg,#f7f5ef_0%,#ece8dd_100%)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className={imageFit === "contain" ? "object-contain p-6" : "object-cover"}
        />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
          {kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--foreground)] md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {includes.map((item, index) => (
            <div
              key={`${shortTitle}-${index}`}
              className="rounded-[1.1rem] border border-[rgba(16,23,18,0.06)] bg-white/72 px-4 py-3 text-sm font-medium text-[var(--foreground)]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="button-primary">
            Demander un devis
          </Link>
          <a href={business.whatsappLink} className="button-secondary">
            Être conseillé
          </a>
        </div>
      </div>
    </article>
  );
}
