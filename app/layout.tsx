import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import {
  business,
  localBusinessSchema,
  siteKeywords,
  siteUrl,
} from "@/lib/site-data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Services locaux utiles et modernes`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: siteKeywords,
  applicationName: business.name,
  category: "home services",
  creator: business.name,
  publisher: business.name,
  authors: [{ name: business.name }],
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} | Services locaux utiles et modernes`,
    description: business.description,
    images: [
      {
        url: "/hero-connected-home.svg",
        width: 1200,
        height: 630,
        alt: "Illustration premium de services locaux utiles et modernes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Services locaux utiles et modernes`,
    description: business.description,
    images: ["/hero-connected-home.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white pb-28 lg:pb-0">
        <JsonLd data={localBusinessSchema} />
        <a
          href="#main-content"
          className="sr-only absolute left-4 top-4 z-[60] rounded-full bg-white px-4 py-2 text-sm font-semibold text-black focus:not-sr-only"
        >
          Aller au contenu
        </a>
        <Header />
        <main
          id="main-content"
          className="flex-1 pt-[7.35rem] md:pt-[7.45rem]"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
