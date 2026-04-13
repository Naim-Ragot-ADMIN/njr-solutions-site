"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business, navLinks } from "@/lib/site-data";

function LogoMark() {
  return (
    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-white shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
      <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-black">
        <Image
          src="/assets/logo-njr-solutions-256.png"
          alt="Logo NJR Solutions"
          width={48}
          height={48}
          className="h-full w-full object-cover"
          priority
        />
      </span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[90]">
        <div className="border-b border-white/8 bg-[var(--color-primary-strong)] px-4 py-2 text-center text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/84 sm:text-[0.72rem]">
          <span className="sm:hidden">Intervention locale • Réponse rapide</span>
          <span className="hidden sm:inline">{business.topBarMessage}</span>
        </div>

        <div className="border-b border-black/8 bg-white/96 shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
          <div className="container-shell flex min-h-[4.35rem] items-center justify-between gap-4 py-2">
            <Link
              href="/"
              className="flex items-center gap-3 text-black transition-opacity hover:opacity-90"
            >
              <LogoMark />
              <span className="block font-display text-[1.45rem] font-semibold leading-none text-black sm:text-[1.6rem]">
                {business.name}
              </span>
            </Link>

            <nav className="hidden items-center gap-1 xl:flex">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === link.href
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      "rounded-full px-4 py-2 text-[0.98rem] font-semibold transition-colors",
                      isActive
                        ? "bg-[rgba(20,56,45,0.08)] text-[var(--color-primary)]"
                        : "text-black hover:bg-black/5 hover:text-[var(--color-primary)]",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={business.phoneLink}
                className="text-[1rem] font-semibold text-black transition hover:text-[var(--color-primary)]"
              >
                {business.phone}
              </a>
              <a href={business.phoneLink} className="button-primary px-5 py-3">
                Appeler
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={business.phoneLink}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(20,56,45,0.2)]"
              >
                Appeler
              </a>
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                aria-label="Ouvrir le menu"
                onClick={() => setMenuOpen((value) => !value)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black/5"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  {menuOpen ? (
                    <>
                      <path d="M6 6l12 12" />
                      <path d="M18 6L6 18" />
                    </>
                  ) : (
                    <>
                      <path d="M4 7h16" />
                      <path d="M4 12h16" />
                      <path d="M4 17h16" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-navigation"
            className="border-t border-black/8 bg-white/98 shadow-[0_12px_24px_rgba(0,0,0,0.08)] lg:hidden"
          >
            <div className="container-shell flex flex-col gap-2 py-3">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === link.href
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      "rounded-2xl px-4 py-3 text-base font-semibold text-black transition-colors",
                      isActive
                        ? "bg-[rgba(20,56,45,0.08)] text-[var(--color-primary)]"
                        : "bg-black/[0.03] text-black hover:bg-black/[0.06]",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="grid gap-2 pt-1 sm:grid-cols-2">
                <a
                  href={business.phoneLink}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-4 text-base font-semibold text-white"
                >
                  Appeler
                </a>
                <a
                  href={business.whatsappLink}
                  className="inline-flex w-full items-center justify-center rounded-full border border-[rgba(16,23,18,0.1)] bg-white px-5 py-4 text-base font-semibold text-[var(--foreground)]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <div className="fixed inset-x-4 bottom-4 z-[90] grid grid-cols-2 gap-3 lg:hidden">
        <a
          href={business.phoneLink}
          className="flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-4 text-base font-semibold text-white shadow-[0_24px_50px_rgba(20,56,45,0.3)] transition hover:translate-y-[-1px]"
        >
          Appeler
        </a>
        <a
          href={business.whatsappLink}
          className="flex items-center justify-center rounded-full bg-white px-5 py-4 text-base font-semibold text-[var(--foreground)] shadow-[0_24px_50px_rgba(16,23,18,0.12)] transition hover:translate-y-[-1px]"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
