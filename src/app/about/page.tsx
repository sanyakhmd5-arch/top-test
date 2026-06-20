"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Target, Heart, Shield, Lightbulb, Handshake, ArrowLeft, ArrowRight, Building2 } from "lucide-react";

export default function AboutPage() {
  const { lang, t, dir } = useI18n();

  const values = [
    { icon: Heart, title: t.about.value1Title, text: t.about.value1Text, color: "text-red-500 bg-red-50 dark:bg-red-900/20" },
    { icon: Shield, title: t.about.value2Title, text: t.about.value2Text, color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20" },
    { icon: Lightbulb, title: t.about.value3Title, text: t.about.value3Text, color: "text-gold bg-yellow-50 dark:bg-yellow-900/20" },
    { icon: Handshake, title: t.about.value4Title, text: t.about.value4Text, color: "text-green-500 bg-green-50 dark:bg-green-900/20" },
  ];

  return (
    <>
      {/* Hero Banner - Premium */}
      <PremiumPageHero
        title={t.about.title}
        subtitle={t.about.subtitle}
        breadcrumbs={[
          { label: t.about.title },
        ]}
        backgroundImage="/images/hero/about.webp"
        personality="corporate"
      />

      {/* About Description - Premium */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimateOnScroll direction="right">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-xl">
                  <Image
                    src="/images/works/f1.webp"
                    alt="TOP TEST"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -start-6 w-32 h-32 bg-gold rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-center text-brand">
                    <div className="text-3xl stat-number">+5</div>
                    <div className="text-xs body-caption">{lang === "ar" ? "سنوات خبرة" : "Years Exp."}</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl text-foreground mb-6 leading-tight heading-section">
                  {t.about.title}
                </h2>
                <p className="text-muted-foreground text-lg body-default mb-6">
                  {t.about.description}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "19", label: t.schools.schoolsLabel },
                    { value: "+10K", label: t.schools.studentsLabel },
                    { value: "3", label: t.schools.citiesLabel },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/50 premium-card">
                      <div className="text-2xl text-brand dark:text-primary stat-number">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-1 body-caption">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Premium */}
      <section className="section-premium bg-muted/30 gradient-border-top">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimateOnScroll direction="right">
              <Card className="h-full border-brand/20 dark:border-primary/20 premium-card card-glow">
                <CardContent className="p-8 md:p-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 dark:bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="text-brand dark:text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl text-foreground mb-4 heading-card">{t.about.vision}</h3>
                  <p className="text-muted-foreground body-default">{t.about.visionText}</p>
                  <Link href="/about/vision" className="mt-4 inline-flex items-center gap-1 text-sm text-brand dark:text-primary hover:text-gold transition-colors btn-text-sm">
                    {lang === "ar" ? "اقرأ المزيد" : "Read More"}
                    {dir === "rtl" ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                  </Link>
                </CardContent>
              </Card>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left">
              <Card className="h-full border-gold/20 premium-card card-glow">
                <CardContent className="p-8 md:p-10">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                    <Target className="text-gold" size={28} />
                  </div>
                  <h3 className="text-2xl text-foreground mb-4 heading-card">{t.about.mission}</h3>
                  <p className="text-muted-foreground body-default">{t.about.missionText}</p>
                  <Link href="/about/mission" className="mt-4 inline-flex items-center gap-1 text-sm text-brand dark:text-primary hover:text-gold transition-colors btn-text-sm">
                    {lang === "ar" ? "اقرأ المزيد" : "Read More"}
                    {dir === "rtl" ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                  </Link>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values - Premium */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4 heading-section">{t.about.values}</h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="text-center h-full card-hover border-border/50 premium-card">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mx-auto mb-4`}>
                      <value.icon size={28} />
                    </div>
                    <h4 className="text-lg text-foreground mb-2 heading-minor">{value.title}</h4>
                    <p className="text-sm text-muted-foreground body-small">{value.text}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand dark:bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl md:text-3xl text-white mb-4 heading-page">
            {lang === "ar" ? "هل تريد معرفة المزيد؟" : "Want to Know More?"}
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto body-large text-shield">
            {lang === "ar" ? "تواصل معنا لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك" : "Contact us to learn more about our services and how we can help you"}
          </p>
          <Link href="/contact">
            <Button className="btn-premium bg-gold hover:bg-gold-dark text-brand rounded-full px-8 py-6 text-base btn-text shadow-[0_8px_32px_rgba(254,170,5,0.35)] transition-all duration-500">
              {t.nav.contact}
              {dir === "rtl" ? <ArrowLeft className="ms-2" size={16} /> : <ArrowRight className="ms-2" size={16} />}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
