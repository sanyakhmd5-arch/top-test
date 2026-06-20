"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { schools } from "@/data/schools";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { MapPin, GraduationCap, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export function SchoolsSection() {
  const { lang, t, dir } = useI18n();
  const displaySchools = schools.slice(0, 3);

  return (
    <section className="section-premium bg-muted/30 gradient-border-top">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header - Premium */}
        <AnimateOnScroll className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand/10 dark:bg-primary/10 text-brand dark:text-primary rounded-full text-sm mb-5 body-caption">
            <GraduationCap size={16} />
            {t.schools.title}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-foreground mb-5 heading-section">
            {lang === "ar" ? "شراكاتنا مع أبرز المؤسسات التعليمية" : "Our Partnerships with Leading Educational Institutions"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg body-large">
            {t.schools.subtitle}
          </p>
        </AnimateOnScroll>

        {/* School Cards Grid - Premium Layout - 3 cards only */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displaySchools.map((school) => (
            <StaggerItem key={school.slug}>
              <Link href={`/schools/${school.slug}`} className="block h-full">
                <div className="premium-card card-glow rounded-2xl overflow-hidden h-full group relative">
                  {/* Logo area - enhanced */}
                  <div className="relative h-48 bg-gradient-to-b from-muted/50 to-muted flex items-center justify-center p-6 overflow-hidden">
                    <Image
                      src={school.image}
                      alt={lang === "ar" ? school.nameAr : school.nameEn}
                      width={200}
                      height={120}
                      className="object-contain max-h-full w-auto transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Badge */}
                    <Badge className="absolute top-3 end-3 bg-gold/90 text-brand text-[10px] font-bold backdrop-blur-sm shadow-sm px-2.5 py-0.5 badge-pulse">
                      {lang === "ar" ? school.typeAr : school.typeEn}
                    </Badge>
                    {/* Hover overlay with icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ExternalLink size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Content - Premium typography */}
                  <div className="p-5">
                    <h3 className="text-sm mb-2.5 text-foreground group-hover:text-brand dark:group-hover:text-primary transition-colors duration-300 line-clamp-2 heading-minor">
                      {lang === "ar" ? school.nameAr : school.nameEn}
                    </h3>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs body-caption">
                      <MapPin size={12} className="text-gold shrink-0" />
                      <span>{lang === "ar" ? school.cityAr : school.cityEn}</span>
                    </div>
                    {/* Hover arrow indicator */}
                    <div className="mt-3 flex items-center gap-1 text-brand dark:text-primary text-xs opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 btn-text-sm">
                      <span>{lang === "ar" ? "عرض التفاصيل" : "View Details"}</span>
                      {dir === "rtl" ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
                    </div>
                  </div>
                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand via-gold to-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button - Premium */}
        <AnimateOnScroll delay={0.4} className="text-center mt-12 md:mt-16">
          <Link href="/schools">
            <Button
              size="lg"
              className="btn-premium bg-brand hover:bg-brand-light dark:bg-primary dark:hover:bg-primary/90 text-white rounded-full px-10 py-6 text-base btn-text shadow-[0_4px_20px_rgba(2,30,83,0.2)] hover:shadow-[0_8px_30px_rgba(2,30,83,0.3)] transition-all duration-500 group"
            >
              {lang === "ar" ? "عرض جميع المؤسسات التعليمية" : "View All Educational Institutions"}
              {dir === "rtl" ? (
                <ArrowLeft className="ms-2 transition-transform group-hover:-translate-x-1" size={18} />
              ) : (
                <ArrowRight className="ms-2 transition-transform group-hover:translate-x-1" size={18} />
              )}
            </Button>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
