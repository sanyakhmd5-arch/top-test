"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Maximize2 } from "lucide-react";

/**
 * CanteensGallery
 * Professional gallery for the School Canteens page ("معرض الأعمال").
 * - Masonry-style layout (CSS columns) preserving each image's native aspect ratio.
 * - Hover: subtle zoom, gradient overlay, gold corner accents, caption reveal.
 * - Lightbox: full-screen modal with prev/next navigation + keyboard support.
 * - Lazy loading + responsive + brand colors (navy / gold / white).
 *
 * NOTE: This component is intentionally self-contained. It does not modify any
 * other page element, link, text, or SEO. Only the gallery section is rendered.
 */

export interface CanteenGalleryImage {
  src: string;
  alt: string;
  captionAr?: string;
  captionEn?: string;
  width: number;
  height: number;
}

interface CanteensGalleryProps {
  images: CanteenGalleryImage[];
  lang: "ar" | "en";
}

export function CanteensGallery({ images, lang }: CanteensGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const isRtl = lang === "ar";

  // Localized strings
  const t = {
    close: isRtl ? "إغلاق" : "Close",
    previous: isRtl ? "السابق" : "Previous",
    next: isRtl ? "التالي" : "Next",
    counter: (i: number, n: number) =>
      isRtl ? `${i} من ${n}` : `${i} of ${n}`,
    zoom: isRtl ? "اضغط للتكبير" : "Click to zoom",
    work: isRtl ? "عمل" : "Work",
  };

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const goPrev = useCallback(() => {
    setActiveIndex((curr) => {
      if (curr === null) return curr;
      return (curr - 1 + images.length) % images.length;
    });
  }, [images.length]);
  const goNext = useCallback(() => {
    setActiveIndex((curr) => {
      if (curr === null) return curr;
      return (curr + 1) % images.length;
    });
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") (isRtl ? goPrev : goNext)();
      else if (e.key === "ArrowLeft") (isRtl ? goNext : goPrev)();
    };
    document.addEventListener("keydown", onKey);
    // Lock body scroll while lightbox is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeLightbox, goPrev, goNext, isRtl]);

  return (
    <>
      {/* === Masonry Grid === */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]"
        dir="ltr"
      >
        {images.map((img, idx) => {
          const caption = isRtl ? img.captionAr : img.captionEn;
          return (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(idx)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (idx % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative mb-4 md:mb-6 block w-full overflow-hidden rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-2xl hover:shadow-brand/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-500 break-inside-avoid"
              aria-label={`${t.zoom} - ${img.alt}`}
            >
              {/* Image — native aspect ratio preserved */}
              <div className="relative w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  decoding="async"
                  quality={100}
                  className="block w-full h-auto object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />

                {/* Base gradient overlay (always present, deepens on hover) */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/15 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Top sheen */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-0" />

                {/* Gold corner accents (TOP TEST brand) */}
                <span className="pointer-events-none absolute top-3 start-3 h-6 w-6 border-t-2 border-s-2 border-gold/0 transition-all duration-500 group-hover:border-gold/90" />
                <span className="pointer-events-none absolute bottom-3 end-3 h-6 w-6 border-b-2 border-e-2 border-gold/0 transition-all duration-500 group-hover:border-gold/90" />

                {/* Bottom caption */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 md:p-5 text-start">
                  <div className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-gold/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand shadow-sm">
                      <Maximize2 size={10} strokeWidth={2.5} />
                      {t.work} {String(idx + 1).padStart(2, "0")}
                    </div>
                    {caption ? (
                      <p className="text-white text-sm md:text-base font-medium text-shield-strong line-clamp-2">
                        {caption}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Zoom icon (top-end) */}
                <div className="pointer-events-none absolute top-3 end-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                  <ZoomIn size={16} strokeWidth={2.25} />
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* === Lightbox === */}
      <AnimatePresence>
        {isOpen && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={closeLightbox}
            dir="ltr"
          >
            {/* Top bar */}
            <div
              className="absolute top-0 inset-x-0 flex items-center justify-between px-5 sm:px-8 py-4 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider">
                <span className="inline-block h-2 w-2 rounded-full bg-gold" />
                <span className="text-white/85 uppercase">
                  {t.counter(activeIndex + 1, images.length)}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                aria-label={t.close}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-gold hover:text-brand hover:border-gold transition-all duration-300"
              >
                <X size={20} strokeWidth={2.25} />
              </button>
            </div>

            {/* Prev / Next — always visible, vertically centered, above image */}
            {images.length > 1 && (
              <>
                {/* Previous arrow — left side, vertical center */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  aria-label={t.previous}
                  className="
                    group absolute left-2 sm:left-5 md:left-8 top-1/2 -translate-y-1/2 z-50
                    flex h-11 w-11 sm:h-13 sm:w-13 md:h-14 md:w-14 items-center justify-center
                    rounded-full
                    bg-brand/70 sm:bg-white/10 backdrop-blur-md
                    border border-white/25 sm:border-white/20
                    text-white shadow-lg shadow-black/30
                    hover:bg-gold hover:text-brand hover:border-gold hover:shadow-xl hover:shadow-gold/30
                    active:scale-90 active:bg-gold/90
                    transition-all duration-300
                    touch-manipulation select-none
                  "
                >
                  <ChevronLeft size={22} strokeWidth={2.5} className="sm:hidden" />
                  <ChevronLeft size={24} strokeWidth={2.25} className="hidden sm:block" />
                </button>

                {/* Next arrow — right side, vertical center */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  aria-label={t.next}
                  className="
                    group absolute right-2 sm:right-5 md:right-8 top-1/2 -translate-y-1/2 z-50
                    flex h-11 w-11 sm:h-13 sm:w-13 md:h-14 md:w-14 items-center justify-center
                    rounded-full
                    bg-brand/70 sm:bg-white/10 backdrop-blur-md
                    border border-white/25 sm:border-white/20
                    text-white shadow-lg shadow-black/30
                    hover:bg-gold hover:text-brand hover:border-gold hover:shadow-xl hover:shadow-gold/30
                    active:scale-90 active:bg-gold/90
                    transition-all duration-300
                    touch-manipulation select-none
                  "
                >
                  <ChevronRight size={22} strokeWidth={2.5} className="sm:hidden" />
                  <ChevronRight size={24} strokeWidth={2.25} className="hidden sm:block" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[82vh] max-w-[92vw] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                width={images[activeIndex].width}
                height={images[activeIndex].height}
                quality={100}
                priority
                className="max-h-[82vh] max-w-[92vw] w-auto h-auto object-contain rounded-lg shadow-2xl shadow-black/40 border border-white/10"
              />
            </motion.div>

            {/* Caption */}
            {(() => {
              const caption = isRtl
                ? images[activeIndex].captionAr
                : images[activeIndex].captionEn;
              if (!caption) return null;
              return (
                <div
                  className="absolute bottom-0 inset-x-0 px-5 sm:px-8 py-5 text-center"
                  onClick={(e) => e.stopPropagation()}
                  dir={isRtl ? "rtl" : "ltr"}
                >
                  <p className="text-white text-sm sm:text-base font-medium text-shield-strong">
                    {caption}
                  </p>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
