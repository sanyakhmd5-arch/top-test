"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { AnimateOnScroll } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

export default function VisionPage() {
  const { lang, t, dir } = useI18n();
  const BackArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <>
      <PremiumPageHero
        title={t.about.vision}
        subtitle={lang === "ar" ? "نظرتنا نحو مستقبل نرتقي فيه بالمعايير" : "Our outlook for a future where standards are elevated"}
        breadcrumbs={[
          { label: lang === "ar" ? "عن TOP TEST" : "About TOP TEST", href: "/about/overview" },
          { label: t.about.vision },
        ]}
        backgroundImage="/images/hero/vision.webp"
        personality="vision"
      />

      {/* Content */}
      <section className="section-premium page-content-area">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Vision Statement */}
            <AnimateOnScroll className="mb-12">
              <div className="institutional-card">
                <div className="flex items-start gap-5 md:gap-7">
                  <div className="institutional-icon institutional-icon-brand">
                    <Eye size={30} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="institutional-title">
                      {t.about.vision}
                    </h2>
                    <p className="institutional-text">
                      {t.about.visionText}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Vision Highlights */}
            <AnimateOnScroll delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Sparkles,
                    title: lang === "ar" ? "الريادة" : "Leadership",
                    text: lang === "ar"
                      ? "لا نكتفي بالمشاركة — نقود السوق بمعايير جديدة للتميز الغذائي"
                      : "We don't just participate — we lead the market with new standards of food excellence",
                    color: "text-gold bg-gold/10",
                  },
                  {
                    icon: Eye,
                    title: lang === "ar" ? "جيل صحي" : "Healthy Generation",
                    text: lang === "ar"
                      ? "نُسهم بفاعلية في بناء جيل صحي ومزدهر من خلال تغذية لا تقبل المساومة"
                      : "Contributing effectively to building a healthy and thriving generation through uncompromising nutrition",
                    color: "text-green-500 bg-green-50 dark:bg-green-900/20",
                  },
                  {
                    icon: Sparkles,
                    title: lang === "ar" ? "جودة لا منافس لها" : "Unrivaled Quality",
                    text: lang === "ar"
                      ? "نلتزم بأعلى معايير الجودة — لا لأنها مطلوبة، بل لأنها هويتنا"
                      : "Committed to the highest quality standards — not because they're required, but because they define who we are",
                    color: "text-brand dark:text-primary bg-brand/10 dark:bg-primary/10",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="premium-card card-glow rounded-2xl p-6 text-center group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-lg text-foreground mb-2 heading-minor">{item.title}</h3>
                    <p className="text-sm text-muted-foreground body-small">{item.text}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
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
