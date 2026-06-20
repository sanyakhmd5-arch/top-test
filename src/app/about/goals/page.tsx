"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Target,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Users,
  Globe,
  Heart,
} from "lucide-react";

export default function GoalsPage() {
  const { lang, t, dir } = useI18n();
  const BackArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const goals = [
    {
      icon: TrendingUp,
      title: lang === "ar" ? "النمو والتوسع" : "Growth & Expansion",
      text: lang === "ar"
        ? "توسيع نطاق خدماتنا الغذائية ليصل أثرنا إلى المزيد من المؤسسات التعليمية والقطاعات في جميع أنحاء المملكة"
        : "Expanding our food services to extend our impact to more educational institutions and sectors across the Kingdom",
      color: "text-brand dark:text-primary bg-brand/10 dark:bg-primary/10",
    },
    {
      icon: ShieldCheck,
      title: lang === "ar" ? "الجودة والسلامة" : "Quality & Safety",
      text: lang === "ar"
        ? "الحفاظ على أعلى معايير الجودة والسلامة الغذائية — لا لأنها خيار، بل لأنها هويتنا"
        : "Maintaining the highest quality and food safety standards — not as an option, but as our identity",
      color: "text-gold bg-gold/10",
    },
    {
      icon: Lightbulb,
      title: lang === "ar" ? "الابتكار" : "Innovation",
      text: lang === "ar"
        ? "تطوير حلول غذائية متكاملة تسبق احتياجات السوق وتتجاوز توقعات العملاء"
        : "Developing integrated food solutions that anticipate market needs and surpass client expectations",
      color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: Users,
      title: lang === "ar" ? "رضا العملاء" : "Client Satisfaction",
      text: lang === "ar"
        ? "تحقيق مستويات استثنائية من رضا العملاء عبر خدمة تتجاوز التوقعات وتصنع ولاءً دائمًا"
        : "Achieving exceptional levels of client satisfaction through service that surpasses expectations and builds lasting loyalty",
      color: "text-green-500 bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: Globe,
      title: lang === "ar" ? "المسؤولية المجتمعية" : "Social Responsibility",
      text: lang === "ar"
        ? "المساهمة الفاعلة في بناء مجتمع صحي عبر برامج تغذية متوازنة ورفع الوعي الغذائي"
        : "Actively contributing to building a healthy community through balanced nutrition programs and raising nutritional awareness",
      color: "text-red-500 bg-red-50 dark:bg-red-900/20",
    },
    {
      icon: Heart,
      title: lang === "ar" ? "التميز المؤسسي" : "Institutional Excellence",
      text: lang === "ar"
        ? "ترسيخ ثقافة التميز والاحترافية داخل المؤسسة لتقديم خدمات لا يُضاهى فيها شيء"
        : "Embedding a culture of excellence and professionalism within the institution to deliver unparalleled services",
      color: "text-brand dark:text-primary bg-brand/10 dark:bg-primary/10",
    },
  ];

  return (
    <>
      <PremiumPageHero
        title={lang === "ar" ? "الأهداف" : "Our Goals"}
        subtitle={lang === "ar" ? "أهداف استراتيجية تصنع الفارق" : "Strategic goals that make the difference"}
        breadcrumbs={[
          { label: lang === "ar" ? "عن TOP TEST" : "About TOP TEST", href: "/about/overview" },
          { label: lang === "ar" ? "الأهداف" : "Goals" },
        ]}
        backgroundImage="/images/hero/goals.webp"
        personality="goals"
      />

      {/* Content */}
      <section className="section-premium page-content-area">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <AnimateOnScroll className="mb-12">
              <div className="institutional-card">
                <div className="flex items-start gap-5 md:gap-7">
                  <div className="institutional-icon institutional-icon-brand">
                    <Target size={30} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="institutional-title">
                      {lang === "ar" ? "أهدافنا الاستراتيجية" : "Our Strategic Goals"}
                    </h2>
                    <p className="institutional-text">
                      {lang === "ar"
                        ? "أهداف طموحة تخدم رؤيتنا ورسالتنا وتعزز مكانتنا كشريك لا بديل عنه في الخدمات الغذائية"
                        : "Ambitious goals that serve our vision and mission and reinforce our position as an irreplaceable food services partner"}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Goals Grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map((goal, index) => (
                <StaggerItem key={goal.title}>
                  <div className="premium-card card-glow rounded-2xl p-6 h-full group">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${goal.color} flex items-center justify-center shrink-0`}>
                        <goal.icon size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs stat-number text-gold bg-gold/10 px-2 py-1 rounded-full">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-lg heading-minor text-foreground">{goal.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground body-small">{goal.text}</p>
                      </div>
                    </div>
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
