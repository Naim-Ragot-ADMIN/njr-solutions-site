import Image from "next/image";
import Link from "next/link";

type ServicePreviewCardProps = {
  href: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
};

export function ServicePreviewCard({
  href,
  title,
  kicker,
  description,
  image,
  imageAlt,
  imageFit = "cover",
}: ServicePreviewCardProps) {
  return (
    <article className="section-card card-hover flex h-full flex-col overflow-hidden rounded-[1.85rem]">
      <div className="relative aspect-[16/10] bg-[linear-gradient(180deg,#f7f5ef_0%,#ece8dd_100%)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          className={imageFit === "contain" ? "object-contain p-6" : "object-cover"}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
          {kicker}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
          {description}
        </p>
        <Link href={href} className="mt-5 inline-flex text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--foreground)]">
          Voir le service
        </Link>
      </div>
    </article>
  );
}
