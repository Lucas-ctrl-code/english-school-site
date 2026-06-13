"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
  closeLabel: string;
};

export function GalleryGrid({ images, closeLabel }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? null : (i - 1 + images.length) % images.length,
        );
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, images.length]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={images[activeIndex].alt}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-background/90 px-4 py-2 text-sm text-foreground transition-colors hover:bg-background"
          >
            {closeLabel}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((activeIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 hidden h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground sm:flex"
            aria-label="Previous"
          >
            ‹
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              width={1400}
              height={900}
              className="max-h-[85vh] w-full rounded-xl object-contain shadow-2xl"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((activeIndex + 1) % images.length);
            }}
            className="absolute right-4 hidden h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground sm:flex"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
