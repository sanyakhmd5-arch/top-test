"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { partners } from "@/data/partners";
import { AnimateOnScroll } from "@/components/ui/animate";
import { Handshake } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export function PartnersSection() {
  const { lang, t } = useI18n();

  return (
    <section className="section-premium gradient-border-top overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 text-gold-dark dark:text-gold rounded-full text-sm mb-5 body-caption">
            <Handshake size={16} />
            {t.partners.title}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-foreground mb-5 heading-section">
            {t.partners.subtitle}
          </h2>
        </AnimateOnScroll>
      </div>

      {/* Swiper Infinite Logo Slider - Row 1 - Enhanced */}
      <div className="relative mb-8">
        <div className="absolute start-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-e from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute end-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-s from-background to-transparent z-10 pointer-events-none" />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView="auto"
          loop={true}
          speed={3500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={false}
          className="partners-swiper"
        >
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <SwiperSlide key={`r1-${idx}`} style={{ width: "auto" }}>
              <div className="group w-40 md:w-52 h-28 md:h-36 glass-card rounded-2xl flex flex-col items-center justify-center px-5 mx-1.5 hover:border-gold/30 transition-all duration-500">
                <div className="relative w-full h-14 md:h-18 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={lang === "ar" ? partner.nameAr : partner.nameEn}
                    width={120}
                    height={60}
                    className="object-contain max-h-full w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="text-[10px] md:text-xs text-muted-foreground mt-2.5 text-center body-caption opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {lang === "ar" ? partner.nameAr : partner.nameEn}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Infinite Logo Slider - Row 2 (reverse) */}
      <div className="relative">
        <div className="absolute start-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-e from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute end-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-s from-background to-transparent z-10 pointer-events-none" />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView="auto"
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          allowTouchMove={false}
          className="partners-swiper"
        >
          {[...partners, ...partners, ...partners].reverse().map((partner, idx) => (
            <SwiperSlide key={`r2-${idx}`} style={{ width: "auto" }}>
              <div className="group w-40 md:w-52 h-28 md:h-36 glass-card rounded-2xl flex flex-col items-center justify-center px-5 mx-1.5 hover:border-gold/30 transition-all duration-500">
                <div className="relative w-full h-14 md:h-18 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={lang === "ar" ? partner.nameAr : partner.nameEn}
                    width={120}
                    height={60}
                    className="object-contain max-h-full w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="text-[10px] md:text-xs text-muted-foreground mt-2.5 text-center body-caption opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {lang === "ar" ? partner.nameAr : partner.nameEn}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
