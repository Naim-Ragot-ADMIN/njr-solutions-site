import Image from "next/image";
import Link from "next/link";
import { business, navLinks, serviceAreaBadges } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-strong)] text-white">
      <div className="container-shell py-10">
        <div className="section-card-dark rounded-[1.8rem] px-6 py-7 sm:px-8">
          <div className="grid gap-7 lg:grid-cols-[1.3fr_0.8fr_1fr]">
            <div className="max-w-xl">
              <span className="eyebrow text-[var(--color-gold-soft)]">
                Service local à domicile
              </span>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/10">
                  <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-black">
                    <Image
                      src="/assets/logo-njr-solutions-256.png"
                      alt="Logo NJR Solutions"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="font-display text-4xl">{business.name}</h2>
              </div>
              <p className="mt-5 text-base leading-8 text-white/72">
                {business.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={business.phoneLink} className="button-primary">
                  Appeler
                </a>
                <a
                  href={business.whatsappLink}
                  className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/52">
                Navigation
              </h3>
              <div className="mt-4 flex flex-col gap-2.5">
                {navLinks.map((link, index) => (
                  <Link
                    key={`${link.href}-${index}`}
                    href={link.href}
                    className="text-white/76 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/mentions-legales"
                  className="text-white/76 transition-colors hover:text-white"
                >
                  Mentions légales
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/52">
                Contact
              </h3>
              <div className="mt-4 space-y-2.5 text-sm leading-7 text-white/76">
                <p className="text-lg font-semibold text-white">
                  {business.phone}
                </p>
                <p>{business.hours.days}</p>
                <p>{business.hours.range}</p>
                <p>{business.serviceArea}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {serviceAreaBadges.map((city, index) => (
                  <span
                    key={`${city}-${index}`}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/74"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/8 pt-5 text-sm text-white/56">
            <p>
              {business.name} · {business.tagline} · {business.serviceArea}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
