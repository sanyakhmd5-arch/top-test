"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { galleryItems } from "@/data/gallery";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const allCategories = [
  { ar: "الكل", en: "All" },
  { ar: "بعض أعمالنا", en: "Our Work" },
  { ar: "الفطائر", en: "Pastries" },
  { ar: "المشروبات", en: "Beverages" },
  { ar: "الوجبات الخفيفة", en: "Snacks" },
];

const masonryHeights = [
  "aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]",
  "aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[5/4]",
  "aspect-[4/5]", "aspect-[3/4]", "aspect-[4/3]", "aspect-square",
  "aspect-[3/4]", "aspect-[4/5]", "aspect-square",
];

export default function GalleryPage() {
  const { lang, t } = useI18n();
  const [activeCategory, setActiveCategory] = useState(lang === "ar" ? "الكل" : "All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allImages = galleryItems;

  const filtered =
    activeCategory === (lang === "ar" ? "الكل" : "All")
      ? allImages
      : allImages.filter((item) =>
          lang === "ar" ? item.categoryAr === activeCategory : item.categoryEn === activeCategory
        );

  const navigateLightbox = (direction: "prev" | "next") => {
    const len = filtered.length;
    if (direction === "prev") {
      const newIdx = (selectedIndex - 1 + len) % len;
      setSelectedIndex(newIdx);
      setSelectedImage(filtered[newIdx].image);
    } else {
      const newIdx = (selectedIndex + 1) % len;
      setSelectedIndex(newIdx);
      setSelectedImage(filtered[newIdx].image);
    }
  };

  return (
    <>
      {/* Hero Banner - Premium */}
      <PremiumPageHero
        title={t.gallery.title}
        subtitle={t.gallery.subtitle}
        breadcrumbs={[
          { label: t.gallery.title },
        ]}
        backgroundImage="/images/hero/gallery.webp"
        personality="gallery"
      />

      {/* Filter - Premium */}
      <section className="py-6 bg-background/95 backdrop-blur-lg border-b border-border sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {allCategories.map((cat) => {
              const label = lang === "ar" ? cat.ar : cat.en;
              const isActive = activeCategory === label;
              return (
                <Button
                  key={label}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(label)}
                  className={`rounded-full px-5 btn-text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-brand hover:bg-brand-light dark:bg-primary dark:hover:bg-primary/90 text-white"
                      : "hover:bg-brand/5 dark:hover:bg-primary/5 hover:border-brand/30"
                  }`}
                >
                  {label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry Premium */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="masonry-grid">
            {filtered.map((item, idx) => (
              <AnimateOnScroll key={`${item.id}-${idx}`} delay={idx * 0.03} direction="up" duration={0.4}>
                <div
                  className="group relative rounded-2xl overflow-hidden cursor-pointer premium-card card-glow"
                  onClick={() => { setSelectedImage(item.image); setSelectedIndex(idx); }}
                >
                  <div className={masonryHeights[idx % masonryHeights.length] || "aspect-square"}>
                    <Image
                      src={item.image}
                      alt={lang === "ar" ? item.titleAr : item.titleEn}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-end p-5">
                    <ZoomIn className="text-white/80 mb-2 scale-75 group-hover:scale-100 transition-transform duration-300" size={24} />
                    <p className="heading-minor text-sm text-white text-center">
                      {lang === "ar" ? item.titleAr : item.titleEn}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {lang === "ar" ? "لا توجد صور في هذا التصنيف" : "No images in this category"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox - Premium */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogTitle className="sr-only">Gallery Image</DialogTitle>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-white/10 backdrop-blur-xl" aria-describedby="gallery-desc">
          <p id="gallery-desc" className="sr-only">{lang === "ar" ? "عرض الصورة مكبرة" : "Viewing enlarged image"}</p>
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
              <button onClick={() => setSelectedImage(null)} className="absolute top-3 end-3 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                <X size={18} />
              </button>
              {/* Prev arrow — always visible on mobile */}
              <button onClick={() => navigateLightbox("prev")} className="
                absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50
                flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
                rounded-full bg-brand/70 sm:bg-white/10 backdrop-blur-md
                border border-white/25 sm:border-white/10
                text-white shadow-lg shadow-black/30
                hover:bg-gold hover:text-brand hover:border-gold hover:shadow-xl hover:shadow-gold/30
                active:scale-90 active:bg-gold/90
                transition-all duration-300
                touch-manipulation select-none
              ">
                <ChevronLeft size={22} strokeWidth={2.5} className="sm:hidden" />
                <ChevronLeft size={22} strokeWidth={2.25} className="hidden sm:block" />
              </button>
              {/* Next arrow — always visible on mobile */}
              <button onClick={() => navigateLightbox("next")} className="
                absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50
                flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center
                rounded-full bg-brand/70 sm:bg-white/10 backdrop-blur-md
                border border-white/25 sm:border-white/10
                text-white shadow-lg shadow-black/30
                hover:bg-gold hover:text-brand hover:border-gold hover:shadow-xl hover:shadow-gold/30
                active:scale-90 active:bg-gold/90
                transition-all duration-300
                touch-manipulation select-none
              ">
                <ChevronRight size={22} strokeWidth={2.5} className="sm:hidden" />
                <ChevronRight size={22} strokeWidth={2.25} className="hidden sm:block" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/10 text-white text-xs backdrop-blur-sm body-caption">
                {selectedIndex + 1} / {filtered.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
