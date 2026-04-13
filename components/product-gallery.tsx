"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryImage = {
  src: string;
  alt: string;
  label: string;
  fit?: "cover" | "contain";
};

type ProductGalleryProps = {
  productName: string;
  images: ProductGalleryImage[];
};

export function ProductGallery({
  productName,
  images,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <div className="space-y-3">
      <div className="section-card relative overflow-hidden rounded-[1.6rem] p-2.5">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem] bg-[linear-gradient(180deg,#f6f4ee_0%,#ece8dc_100%)]">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className={[
              "transition-opacity duration-300",
              activeImage.fit === "contain" ? "object-contain p-5" : "object-cover",
            ].join(" ")}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/72">
              Galerie produit
            </p>
            <p className="mt-1 text-base font-semibold text-white">
              {activeImage.label}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {images.map((image, index) => (
          <button
            key={`${productName}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${productName} - voir l'image ${index + 1}`}
            className={[
              "group section-card relative overflow-hidden rounded-[1rem] p-1.5 transition duration-200",
              activeIndex === index
                ? "border-[var(--color-primary)] shadow-[0_16px_36px_rgba(20,56,45,0.14)]"
                : "hover:border-[rgba(20,56,45,0.18)]",
            ].join(" ")}
          >
            <div className="relative aspect-square overflow-hidden rounded-[0.8rem] bg-[rgba(244,237,220,0.5)]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="20vw"
                className={image.fit === "contain" ? "object-contain p-2" : "object-cover"}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
