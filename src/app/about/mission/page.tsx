"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { AnimateOnScroll } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, ArrowLeft, ArrowRight, Award, ChefHat, HeartHandshake } from "lucide-react";

export default function MissionPage() {
  const { lang, t, dir } = useI18n();
  const BackArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <>
      <PremiumPageHero
        title={t.about.mission}
        subtitle={lang === "ar" ? "التزامنا بالتميز لا يُساوم عليه" : "Our commitment to excellence is non-negotiable"}
        breadcrumbs={[
          { label: lang === "ar" ? "عن TOP TEST" : "About TOP TEST", href: "/about/overview" },
          { label: t.about.mission },
        ]}
        backgroundImage="/images/hero/mission.webp"
        personality="mission"
      />

      {/* Content */}
      <section className="section-premium page-content-area">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Mission Statement */}
            <AnimateOnScroll className="mb-12">
              <div className="institutional-card">
                <div className="flex items-start gap-5 md:gap-7">
                  <div className="institutional-icon institutional-icon-gold">
                    <Target size={30} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="institutional-title">
                      {t.about.mission}
                    </h2>
                    <p className="institutional-text">
                      {t.about.missionText}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Mission Pillars */}
            <AnimateOnScroll delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Award,
                    title: lang === "ar" ? "معايير الجودة" : "Quality Standards",
                    text: lang === "ar"
                      ? "لا نقبل بأقل من أعلى معايير الجودة والسلامة الغذائية في كل ما نقدمه"
                      : "We accept nothing less than the highest quality and food safety standards across all our services",
                    color: "text-brand dark:text-primary bg-brand/10 dark:bg-primary/10",
                  },
                  {
                    icon: ChefHat,
                    title: lang === "ar" ? "الابتكار المستمر" : "Continuous Innovation",
                    text: lang === "ar"
                      ? "نبتكر دائمًا في قوائمنا وخدماتنا لنسبق التوقعات لا لنلحق بها"
                      : "We continuously innovate in our menus and services to surpass expectations, not merely meet them",
                    color: "text-gold bg-gold/10",
                  },
                  {
                    icon: HeartHandshake,
                    title: lang === "ar" ? "الخيار الحتمي" : "The Inevitable Choice",
                    text: lang === "ar"
                      ? "لا نسعى فقط لنكون الخيار الأول — نعمل لنكون الخيار الذي لا بديل عنه"
                      : "We don't just strive to be the first choice — we work to be the irreplaceable choice",
                    color: "text-green-500 bg-green-50 dark:bg-green-900/20",
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
            <p className="text-white/80 body-large text-shield mb-8 max-w-lg mx-auto">
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
