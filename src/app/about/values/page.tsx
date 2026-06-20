"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Shield, Lightbulb, Handshake, ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function ValuesPage() {
  const { lang, t, dir } = useI18n();
  const BackArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const values = [
    {
      icon: Heart,
      title: t.about.value1Title,
      text: t.about.value1Text,
      color: "text-red-500 bg-red-50 dark:bg-red-900/20",
      accent: "from-red-500/20 to-transparent",
    },
    {
      icon: Shield,
      title: t.about.value2Title,
      text: t.about.value2Text,
      color: "text-brand dark:text-primary bg-brand/10 dark:bg-primary/10",
      accent: "from-brand/20 dark:from-primary/20 to-transparent",
    },
    {
      icon: Lightbulb,
      title: t.about.value3Title,
      text: t.about.value3Text,
      color: "text-gold bg-gold/10",
      accent: "from-gold/20 to-transparent",
    },
    {
      icon: Handshake,
      title: t.about.value4Title,
      text: t.about.value4Text,
      color: "text-green-500 bg-green-50 dark:bg-green-900/20",
      accent: "from-green-500/20 to-transparent",
    },
  ];

  return (
    <>
      <PremiumPageHero
        title={t.about.values}
        subtitle={lang === "ar" ? "المبادئ التي نلتزم بها" : "The principles we stand by"}
        breadcrumbs={[
          { label: lang === "ar" ? "عن TOP TEST" : "About TOP TEST", href: "/about/overview" },
          { label: t.about.values },
        ]}
        backgroundImage="/images/hero/values.webp"
        personality="values"
      />

      {/* Content */}
      <section className="section-premium page-content-area">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <AnimateOnScroll className="mb-12">
              <div className="institutional-card">
                <div className="flex items-start gap-5 md:gap-7">
                  <div className="institutional-icon institutional-icon-gold">
                    <Star size={30} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="institutional-title">
                      {t.about.values}
                    </h2>
                    <p className="institutional-text">
                      {lang === "ar"
                        ? "قيمنا هي الأساس الذي نبني عليه جميع خدماتنا وعلاقاتنا مع عملائنا"
                        : "Our values are the foundation upon which we build all our services and client relationships"}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Values Grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="premium-card card-glow rounded-2xl p-6 md:p-8 h-full group">
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center shrink-0`}>
                        <value.icon size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl text-foreground mb-3 heading-card">{value.title}</h3>
                        <p className="text-muted-foreground body-default">{value.text}</p>
                      </div>
                    </div>
                    {/* Decorative accent */}
                    <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${value.accent}`} />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand dark:bg-card relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 start-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 end-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="text-2xl md:text-3xl text-white mb-4 heading-page">
              {lang === "ar" ? "هل ترغب في معرفة المزيد؟" : "Want to learn more?"}
            </h2>
            <p className="text-white/80 body-large text-shield mb-8 max-w-lg mx-auto">
              {lang === "ar"
                ? "تواصل معنا اليوم لمعرفة كيف يمكننا خدمتكم"
                : "Contact us today to find out how we can serve you"}
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold text-brand hover:bg-gold-light text-lg px-8 btn-text btn-premium"
              >
                {t.nav.contact}
                <BackArrow className="ms-2" size={18} />
              </Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
