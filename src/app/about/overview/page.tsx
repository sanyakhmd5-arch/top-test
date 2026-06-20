"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Building2,
  Users,
  MapPin,
  Calendar,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function OverviewPage() {
  const { lang, t, dir } = useI18n();
  const BackArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const stats = [
    {
      icon: Building2,
      value: "19",
      label: t.schools.schoolsLabel,
      color: "text-brand dark:text-primary bg-brand/10 dark:bg-primary/10",
    },
    {
      icon: Users,
      value: "+10K",
      label: t.schools.studentsLabel,
      color: "text-gold bg-gold/10",
    },
    {
      icon: MapPin,
      value: "3",
      label: t.schools.citiesLabel,
      color: "text-green-500 bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Calendar,
      value: "+5",
      label: lang === "ar" ? "سنوات خبرة" : "Years Exp.",
      color: "text-red-500 bg-red-50 dark:bg-red-900/20",
    },
  ];

  return (
    <>
      <PremiumPageHero
        title={lang === "ar" ? "نبذة عن المؤسسة" : "Company Overview"}
        subtitle={lang === "ar" ? "قصة ريادة تبني الثقة وتصنع الفارق" : "A Story of Leadership Building Trust and Making the Difference"}
        breadcrumbs={[
          { label: lang === "ar" ? "عن TOP TEST" : "About TOP TEST", href: "/about/overview" },
          { label: lang === "ar" ? "نبذة عن المؤسسة" : "Overview" },
        ]}
        backgroundImage="/images/hero/about.webp"
        personality="corporate"
      />

      {/* Content */}
      <section className="section-premium page-content-area">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Main description */}
            <AnimateOnScroll className="mb-12">
              <div className="institutional-card">
                <div className="flex items-start gap-5 md:gap-7">
                  <div className="institutional-icon institutional-icon-brand">
                    <Building2 size={30} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="institutional-title">
                      {t.about.title}
                    </h2>
                    <p className="institutional-text">
                      {t.about.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Stats grid */}
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="premium-card card-glow rounded-2xl p-5 md:p-6 text-center group">
                    <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                      <stat.icon size={24} />
                    </div>
                    <div className="text-2xl md:text-3xl text-foreground mb-1 stat-number">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground stat-label">{stat.label}</div>
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
              {lang === "ar" ? "هل تبحثون عن شريك غذائي موثوق؟" : "Looking for a Trusted Food Services Partner?"}
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto body-large text-shield">
              {lang === "ar"
                ? "دعونا نُريكم كيف يمكننا الارتقاء بتجربتكم الغذائية"
                : "Let us show you how we can elevate your dining experience"}
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
