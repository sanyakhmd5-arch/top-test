"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import {
  UtensilsCrossed,
  Wine,
  PartyPopper,
  Coffee,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Wine,
  PartyPopper,
  Coffee,
};

// Map service IDs to their standalone page routes
const serviceRoutes: Record<string, string> = {
  "school-catering": "/services/school-canteens",
  "hospitality": "/services/hospitality",
  "events": "/services/events",
  "coffee-carts": "/services/coffee-carts",
};

export function ServicesSection() {
  const { lang, t, dir } = useI18n();

  return (
    <section className="section-premium gradient-border-top">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 text-gold-dark dark:text-gold rounded-full text-sm mb-5 body-caption">
            <Sparkles size={16} />
            {t.services.title}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-foreground mb-5 heading-section">
            {t.services.subtitle}
          </h2>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || UtensilsCrossed;
            const route = serviceRoutes[service.id] || `/services/${service.id}`;
            const serviceNumber = String(idx + 1).padStart(2, "0");
            return (
              <StaggerItem key={service.id}>
                <div className="service-card group relative rounded-2xl overflow-hidden bg-white dark:bg-[#111827] border border-[rgba(226,232,240,0.6)] dark:border-[rgba(255,255,255,0.06)] h-full transition-all duration-500 hover:shadow-[0_25px_60px_rgba(2,30,83,0.12),0_8px_24px_rgba(2,30,83,0.06)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.35),0_8px_24px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:border-gold/30 dark:hover:border-gold/20">
                  {/* Top Gold Accent Line */}
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand via-gold to-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Image Section */}
                    <div className="relative h-56 md:h-full min-h-[220px] bg-muted overflow-hidden">
                      <Image
                        src={service.image}
                        alt={lang === "ar" ? service.titleAr : service.titleEn}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand/50 via-brand/20 to-transparent group-hover:from-brand/30 transition-all duration-500" />
                      {/* Diagonal pattern overlay */}
                      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)' }} />

                      {/* Service Number Badge — Premium */}
                      <div className="absolute top-4 start-4 flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-brand/90 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
                          <span className="text-gold font-extrabold text-sm heading-minor">{serviceNumber}</span>
                        </div>
                      </div>

                      {/* Icon floating at bottom of image */}
                      <div className="absolute bottom-4 end-4 w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                        <Icon className="text-white" size={28} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center relative">
                      {/* Large decorative number */}
                      <div className="absolute top-4 end-4 text-[80px] md:text-[100px] font-black text-brand/[0.03] dark:text-primary/[0.04] leading-none select-none heading-hero pointer-events-none">
                        {serviceNumber}
                      </div>

                      {/* Icon + Title row */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-brand-light flex items-center justify-center shadow-md shadow-brand/20 group-hover:shadow-lg group-hover:shadow-brand/30 group-hover:scale-110 transition-all duration-400 shrink-0">
                          <Icon className="text-white" size={22} strokeWidth={1.8} />
                        </div>
                        <h3 className="text-xl lg:text-2xl text-foreground group-hover:text-brand dark:group-hover:text-primary transition-colors duration-300 heading-card leading-tight">
                          {lang === "ar" ? service.titleAr : service.titleEn}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-5 line-clamp-3 body-small leading-relaxed">
                        {lang === "ar" ? service.descriptionAr : service.descriptionEn}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2.5 mb-6">
                        {(lang === "ar" ? service.featuresAr : service.featuresEn)
                          .slice(0, 3)
                          .map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground body-small">
                              <div className="mt-0.5 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                <CheckCircle2 size={12} className="text-gold" />
                              </div>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                      </ul>

                      {/* CTA Button */}
                      <Link href={route} className="mt-auto">
                        <Button
                          className="group/btn relative overflow-hidden bg-brand hover:bg-brand-light text-white rounded-xl px-6 py-3 text-sm btn-text-sm shadow-md shadow-brand/15 hover:shadow-lg hover:shadow-brand/25 transition-all duration-400 hover:-translate-y-0.5"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {t.services.learnMore}
                            {dir === "rtl" ? (
                              <ArrowLeft className="transition-transform group-hover/btn:-translate-x-1" size={16} />
                            ) : (
                              <ArrowRight className="transition-transform group-hover/btn:translate-x-1" size={16} />
                            )}
                          </span>
                          {/* Button shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
