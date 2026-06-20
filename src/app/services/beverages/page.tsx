"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { CanteensGallery } from "@/components/ui/canteens-gallery";
import { beveragesGalleryImages } from "@/data/services-gallery";
import {
  CupSoda,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const placeholderData = {
  titleAr: "المشروبات",
  titleEn: "Beverages",
  descriptionAr:
    "تشكيلة استثنائية من المشروبات الساخنة والباردة صُنعت لأذواق استثنائية. نستخدم أجود المكونات لنقدم مشروبات بجودة لا منافس لها، تضفي لمحة فاخرة على كل فعالية وتثري تجربة الضيوف في كل مؤسسة.",
  descriptionEn:
    "An exceptional selection of hot and cold beverages crafted for exceptional tastes. We use the finest ingredients to deliver drinks with unrivaled quality, adding a luxurious touch to every event and enriching guests' experience at every institution.",
  featuresAr: [
    "مشروبات ساخنة فاخرة بمواصفات عالمية",
    "مشروبات باردة منعشة بتركيبات مبتكرة",
    "تشكيلة مختصة ترضي أرقى الأذواق",
    "مكونات عالية الجودة لا مساومة فيها",
    "إعداد احترافي وخدمة ترتقي بالمناسبة",
    "خيارات مخصصة صُممت لكل مناسبة على حدة",
  ],
  featuresEn: [
    "Premium hot beverages meeting international standards",
    "Refreshing cold drinks with innovative formulations",
    "Curated selection satisfying the most refined tastes",
    "Uncompromising high-quality ingredients",
    "Professional preparation and service that elevates any occasion",
    "Custom options designed for each individual occasion",
  ],
};

export default function BeveragesPage() {
  const { lang, t, dir } = useI18n();
  const BackArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const title = lang === "ar" ? placeholderData.titleAr : placeholderData.titleEn;
  const description = lang === "ar" ? placeholderData.descriptionAr : placeholderData.descriptionEn;
  const features = lang === "ar" ? placeholderData.featuresAr : placeholderData.featuresEn;


  return (
    <>
      <PremiumPageHero
        title={title}
        subtitle={t.services.subtitle}
        breadcrumbs={[
          { label: t.services.title, href: "/services" },
          { label: title },
        ]}
        backgroundImage="/images/hero/beverages.webp"
        personality="beverages"
      />

      {/* Content Area - Description */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <div className="premium-card rounded-2xl p-6 md:p-10">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 dark:bg-primary/10 flex items-center justify-center mb-6">
                  <CupSoda className="text-brand dark:text-primary" size={32} />
                </div>
                <h2 className="text-2xl md:text-3xl text-foreground mb-6 heading-page">
                  {title}
                </h2>
                <p className="text-muted-foreground text-lg body-default">
                  {description}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl text-foreground mb-3 heading-page">
                {lang === "ar" ? "مميزات الخدمة" : "Service Features"}
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
            </AnimateOnScroll>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, idx) => (
                <StaggerItem key={idx}>
                  <div className="premium-card card-glow rounded-xl p-5 flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <CheckCircle2 size={20} className="text-gold" />
                    </div>
                    <span className="text-foreground body-default pt-1.5">
                      {feature}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Gallery — Professional "معرض الأعمال" */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl text-foreground mb-3 heading-page">
                {lang === "ar" ? "معرض الأعمال" : "Gallery"}
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
            </AnimateOnScroll>

            <CanteensGallery images={beveragesGalleryImages} lang={lang} />
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
              {lang === "ar" ? "هل ترغب في هذه الخدمة؟" : "Interested in this service?"}
            </h2>
            <p className="text-white/80 body-large text-shield mb-8 max-w-lg mx-auto">
              {lang === "ar"
                ? "تواصل معنا اليوم للحصول على عرض مخصص يلبي احتياجاتكم"
                : "Contact us today for a customized offer that meets your needs"}
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

      {/* Contact Section */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <div className="premium-card card-glow rounded-2xl p-8 md:p-12">
                <div className="w-16 h-16 rounded-full bg-brand/10 dark:bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CupSoda className="text-brand dark:text-primary" size={28} />
                </div>
                <h3 className="text-2xl text-foreground mb-4 heading-card">
                  {lang === "ar" ? "تواصل معنا" : "Get In Touch"}
                </h3>
                <p className="text-muted-foreground mb-6 body-default">
                  {lang === "ar"
                    ? "نحن هنا لمساعدتك والإجابة على جميع استفساراتك حول خدماتنا"
                    : "We are here to help and answer all your inquiries about our services"}
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-brand hover:bg-brand-light dark:bg-primary dark:hover:bg-primary/90 text-white rounded-full px-8"
                  >
                    {t.contact.title}
                    <BackArrow className="ms-2" size={16} />
                  </Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
