"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { worksImages, mealImages, pastryImages, beverageImages, snackImages } from "@/data/gallery";
import { GalleryItem } from "@/data/gallery";
import { AnimateOnScroll } from "@/components/ui/animate";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Camera, ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Gallery groups in display order
const galleryGroups = [
  { key: "works", arTitle: "بعض أعمالنا", enTitle: "Our Work", items: worksImages, aspect: "aspect-[4/3]" as const },
  { key: "pastries", arTitle: "الفطائر", enTitle: "Pastries", items: pastryImages, aspect: "aspect-square" as const },
  { key: "beverages", arTitle: "المشروبات", enTitle: "Beverages", items: beverageImages, aspect: "aspect-[4/3]" as const },
  { key: "snacks", arTitle: "الوجبات الخفيفة", enTitle: "Snacks", items: [...mealImages, ...snackImages], aspect: "aspect-[4/3]" as const },
];

export function GallerySection() {
  const { lang, t } = useI18n();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentGroupKey, setCurrentGroupKey] = useState<string | null>(null);

  // Build a flat list of all images for lightbox navigation
  const allImages = useMemo(() => {
    const flat: GalleryItem[] = [];
    for (const group of galleryGroups) {
      flat.push(...group.items);
    }
    return flat;
  }, []);

  const openLightbox = (image: string, groupKey: string) => {
    // Find the global index in allImages
    const globalIdx = allImages.findIndex((item) => item.image === image);
    setSelectedImage(image);
    setSelectedIndex(globalIdx >= 0 ? globalIdx : 0);
    setCurrentGroupKey(groupKey);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const len = allImages.length;
    if (direction === "prev") {
      const newIdx = (selectedIndex - 1 + len) % len;
      setSelectedIndex(newIdx);
      setSelectedImage(allImages[newIdx].image);
    } else {
      const newIdx = (selectedIndex + 1) % len;
      setSelectedIndex(newIdx);
      setSelectedImage(allImages[newIdx].image);
    }
  };

  return (
    <section className="section-premium bg-muted/30 gradient-border-top">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 text-gold-dark dark:text-gold rounded-full text-sm mb-5 body-caption">
            <Camera size={16} />
            {t.gallery.title}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-foreground mb-5 heading-section">
            {t.gallery.subtitle}
          </h2>
        </AnimateOnScroll>

        {/* Gallery Groups - No filter bar */}
        {galleryGroups.map((group) => (
          <AnimateOnScroll key={group.key} delay={0.1} className="mb-10 md:mb-16 last:mb-0">
            {/* Group Title */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              <h3 className="text-xl md:text-2xl text-foreground heading-section whitespace-nowrap">
                {lang === "ar" ? group.arTitle : group.enTitle}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            {/* Group Grid */}
            <div className={`grid gap-4 md:gap-6 ${
              group.key === "pastries"
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}>
              {group.items.map((item, idx) => (
                <AnimateOnScroll key={item.id} delay={idx * 0.05} direction="up" duration={0.5}>
                  <div
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer premium-card card-glow ${group.aspect}`}
                    onClick={() => openLightbox(item.image, group.key)}
                  >
                    <Image
                      src={item.image}
                      alt={lang === "ar" ? item.titleAr : item.titleEn}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-end p-5">
                      <ZoomIn className="text-white/80 mb-2 scale-75 group-hover:scale-100 transition-transform duration-300" size={28} />
                      <p className="heading-minor text-sm text-white text-center text-shield">
                        {lang === "ar" ? item.titleAr : item.titleEn}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Premium Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogTitle className="sr-only">Gallery Image</DialogTitle>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-white/10 backdrop-blur-xl" aria-describedby="gallery-description">
          <p id="gallery-description" className="sr-only">{lang === "ar" ? "عرض الصورة في نافذة مكبرة" : "Viewing image in enlarged lightbox"}</p>
          {selectedImage && (
            <div className="relative">
              <div className="relative aspect-[16/10]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image src={selectedImage} alt="Gallery" fill className="object-contain" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 end-3 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
              >
                <X size={18} />
              </button>
              {/* Prev arrow — always visible on mobile */}
              <button
                onClick={() => navigateLightbox("prev")}
                className="
                  absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50
                  flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
                  rounded-full bg-brand/70 sm:bg-white/10 backdrop-blur-md
                  border border-white/25 sm:border-white/10
                  text-white shadow-lg shadow-black/30
                  hover:bg-gold hover:text-brand hover:border-gold hover:shadow-xl hover:shadow-gold/30
                  active:scale-90 active:bg-gold/90
                  transition-all duration-300
                  touch-manipulation select-none
                "
              >
                <ChevronLeft size={22} strokeWidth={2.5} className="sm:hidden" />
                <ChevronLeft size={22} strokeWidth={2.25} className="hidden sm:block" />
              </button>
              {/* Next arrow — always visible on mobile */}
              <button
                onClick={() => navigateLightbox("next")}
                className="
                  absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50
                  flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
                  rounded-full bg-brand/70 sm:bg-white/10 backdrop-blur-md
                  border border-white/25 sm:border-white/10
                  text-white shadow-lg shadow-black/30
                  hover:bg-gold hover:text-brand hover:border-gold hover:shadow-xl hover:shadow-gold/30
                  active:scale-90 active:bg-gold/90
                  transition-all duration-300
                  touch-manipulation select-none
                "
              >
                <ChevronRight size={22} strokeWidth={2.5} className="sm:hidden" />
                <ChevronRight size={22} strokeWidth={2.25} className="hidden sm:block" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/10 text-white text-xs backdrop-blur-sm body-caption">
                {selectedIndex + 1} / {allImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
