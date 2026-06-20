"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { services } from "@/data/services";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  UtensilsCrossed,
  Wine,
  PartyPopper,
  Coffee,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Wine,
  PartyPopper,
  Coffee,
};

// Map service IDs to standalone page routes
const serviceRoutes: Record<string, string> = {
  "school-catering": "/services/school-canteens",
  "hospitality": "/services/hospitality",
  "events": "/services/events",
  "coffee-carts": "/services/coffee-carts",
};

export default function ServicesPage() {
  const { lang, t, dir } = useI18n();

  return (
    <>
      {/* Hero Banner - Premium */}
      <PremiumPageHero
        title={t.services.title}
        subtitle={t.services.subtitle}
        breadcrumbs={[
          { label: t.services.title },
        ]}
        backgroundImage="/images/services/school-catering.webp"
        personality="school"
      />

      {/* Services Detail - Premium */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || UtensilsCrossed;
              const isEven = idx % 2 === 0;
              const route = serviceRoutes[service.id] || `/services/${service.id}`;
              return (
                <div key={service.id} id={service.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
                    <AnimateOnScroll direction={isEven ? "right" : "left"} className={isEven ? "" : "lg:order-2"}>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-xl">
                        <Image
                          src={service.image}
                          alt={lang === "ar" ? service.titleAr : service.titleEn}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll direction={isEven ? "left" : "right"} className={isEven ? "" : "lg:order-1"}>
                      <div className="w-14 h-14 rounded-2xl bg-brand/10 dark:bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="text-brand dark:text-primary" size={28} />
                      </div>
                      <h2 className="text-3xl md:text-4xl heading-page text-foreground mb-4">
                        {lang === "ar" ? service.titleAr : service.titleEn}
                      </h2>
                      <p className="text-muted-foreground body-default text-lg mb-6">
                        {lang === "ar" ? service.descriptionAr : service.descriptionEn}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {(lang === "ar" ? service.featuresAr : service.featuresEn).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3 text-foreground">
                            <CheckCircle2 size={18} className="text-gold shrink-0" />
                            <span className="text-sm body-small">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <Link href={route}>
                          <Button className="bg-brand hover:bg-brand-light dark:bg-primary dark:hover:bg-primary/90 text-white rounded-full px-8 btn-text-sm">
                            {t.services.learnMore}
                            {dir === "rtl" ? <ArrowLeft className="ms-2" size={16} /> : <ArrowRight className="ms-2" size={16} />}
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" className="rounded-full px-8 btn-text-sm">
                            {t.contact.title}
                          </Button>
                        </Link>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
