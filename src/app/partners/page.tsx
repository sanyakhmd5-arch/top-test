"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { partners } from "@/data/partners";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function PartnersPage() {
  const { lang, t } = useI18n();

  return (
    <>
      {/* Hero Banner - Premium */}
      <PremiumPageHero
        title={t.partners.title}
        subtitle={t.partners.subtitle}
        breadcrumbs={[
          { label: t.partners.title },
        ]}
        backgroundImage="/images/hero/partners.webp"
        personality="partners"
      />

      {/* Partners - Premium Infinite Slider */}
      <section className="section-premium overflow-hidden">
        {/* Row 1 */}
        <div className="relative mb-8">
          <div className="absolute start-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-e from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute end-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-s from-background to-transparent z-10 pointer-events-none" />
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
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
              <SwiperSlide key={`p1-${idx}`} style={{ width: "auto" }}>
                <div className="group w-44 md:w-56 h-32 md:h-40 glass-card rounded-2xl flex flex-col items-center justify-center px-5 mx-1.5 hover:border-gold/30 transition-all duration-500">
                  <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={lang === "ar" ? partner.nameAr : partner.nameEn}
                      width={140}
                      height={70}
                      className="object-contain max-h-full w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-3 text-center body-caption opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {lang === "ar" ? partner.nameAr : partner.nameEn}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Row 2 (reverse) */}
        <div className="relative">
          <div className="absolute start-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-e from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute end-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-s from-background to-transparent z-10 pointer-events-none" />
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
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
              <SwiperSlide key={`p2-${idx}`} style={{ width: "auto" }}>
                <div className="group w-44 md:w-56 h-32 md:h-40 glass-card rounded-2xl flex flex-col items-center justify-center px-5 mx-1.5 hover:border-gold/30 transition-all duration-500">
                  <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={lang === "ar" ? partner.nameAr : partner.nameEn}
                      width={140}
                      height={70}
                      className="object-contain max-h-full w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-3 text-center body-caption opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {lang === "ar" ? partner.nameAr : partner.nameEn}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
