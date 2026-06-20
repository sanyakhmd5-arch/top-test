"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { schools, getSchoolBySlug } from "@/data/schools";
import { AnimateOnScroll } from "@/components/ui/animate";
import { SchoolHero, getSchoolPersonality, getSchoolHeroImage } from "@/components/ui/school-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, CheckCircle2 } from "lucide-react";

export default function SchoolDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { lang, t } = useI18n();

  const school = getSchoolBySlug(slug);

  if (!school) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-foreground mb-4 heading-page">
            {lang === "ar" ? "الصفحة غير موجودة" : "Page Not Found"}
          </h1>
          <Link href="/schools">
            <Button className="bg-brand hover:bg-brand-light dark:bg-primary text-white rounded-full px-8">
              {lang === "ar" ? "العودة للمؤسسات" : "Back to Schools"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherSchools = schools.filter((s) => s.slug !== slug).slice(0, 4);
  const personality = getSchoolPersonality(school);

  return (
    <>
      {/* Hero Banner - School-Specific Premium Hero */}
      <SchoolHero
        title={lang === "ar" ? school.nameAr : school.nameEn}
        breadcrumbs={[
          { label: t.schools.title, href: "/schools" },
          { label: lang === "ar" ? school.nameAr : school.nameEn },
        ]}
        schoolLogo={school.image}
        schoolTypeAr={school.typeAr}
        schoolTypeEn={school.typeEn}
        schoolCityAr={school.cityAr}
        schoolCityEn={school.cityEn}
        personality={personality}
        heroImage={getSchoolHeroImage(school.slug)}
      />

      {/* School Details - Premium */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimateOnScroll>
                <div className="bg-muted rounded-2xl p-8 md:p-12 mb-8 flex items-center justify-center premium-card">
                  <div className="relative w-64 h-48">
                    <Image
                      src={school.image}
                      alt={lang === "ar" ? school.nameAr : school.nameEn}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <Card className="border-border/50 premium-card card-glow">
                  <CardContent className="p-8">
                    <h2 className="text-2xl text-foreground mb-4 heading-card">
                      {lang === "ar" ? "نبذة عن المؤسسة" : "About the Institution"}
                    </h2>
                    <p className="text-muted-foreground text-lg body-default">
                      {lang === "ar" ? school.descriptionAr : school.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <Card className="border-border/50 mt-6 premium-card card-glow">
                  <CardContent className="p-8">
                    <h2 className="text-2xl text-foreground mb-4 heading-card">
                      {lang === "ar" ? "خدماتنا في هذه المؤسسة" : "Our Services at This Institution"}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        lang === "ar" ? "إدارة المقصف المدرسي" : "School Cafeteria Management",
                        lang === "ar" ? "وجبات صحية ومتوازنة" : "Healthy & Balanced Meals",
                        lang === "ar" ? "رقابة صحية مستمرة" : "Continuous Health Monitoring",
                        lang === "ar" ? "تنوع في القوائم اليومية" : "Daily Menu Variety",
                        lang === "ar" ? "معايير سلامة غذائية" : "Food Safety Standards",
                        lang === "ar" ? "خدمة احترافية متميزة" : "Professional Service",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-foreground">
                          <CheckCircle2 size={16} className="text-gold shrink-0" />
                          <span className="text-sm body-small">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>

            {/* Sidebar - Premium */}
            <div className="space-y-6">
              <AnimateOnScroll direction="left">
                <Card className="border-border/50 premium-card card-glow">
                  <CardContent className="p-6">
                    <h3 className="text-foreground mb-4 heading-card">
                      {lang === "ar" ? "معلومات المؤسسة" : "Institution Info"}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-brand dark:text-primary shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground body-caption">{lang === "ar" ? "المدينة" : "City"}</p>
                          <p className="text-sm text-foreground body-caption">
                            {lang === "ar" ? school.cityAr : school.cityEn}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <GraduationCap size={18} className="text-brand dark:text-primary shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground body-caption">{lang === "ar" ? "النوع" : "Type"}</p>
                          <p className="text-sm text-foreground body-caption">
                            {lang === "ar" ? school.typeAr : school.typeEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll direction="left" delay={0.1}>
                <Card className="border-gold/20 bg-gold/5 premium-card">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-foreground mb-2 heading-minor">
                      {lang === "ar" ? "هل تريد خدمة مماثلة؟" : "Want Similar Service?"}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 body-small">
                      {lang === "ar" ? "تواصل معنا لمعرفة المزيد" : "Contact us to learn more"}
                    </p>
                    <Link href="/contact">
                      <Button className="w-full bg-brand hover:bg-brand-light dark:bg-primary dark:hover:bg-primary/90 text-white rounded-xl btn-premium">
                        {t.contact.title}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Other Schools - Premium */}
          <AnimateOnScroll className="mt-16">
            <h2 className="text-2xl text-foreground mb-6 heading-page">
              {lang === "ar" ? "مؤسسات أخرى" : "Other Institutions"}
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {otherSchools.map((s) => (
              <AnimateOnScroll key={s.slug}>
                <Link href={`/schools/${s.slug}`}>
                  <Card className="overflow-hidden card-hover group border-border/50 h-full premium-card">
                    <div className="relative h-32 bg-gradient-to-b from-muted/50 to-muted flex items-center justify-center p-4">
                      <Image
                        src={s.image}
                        alt={lang === "ar" ? s.nameAr : s.nameEn}
                        width={150}
                        height={80}
                        className="object-contain max-h-full w-auto group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-sm text-foreground group-hover:text-brand dark:group-hover:text-primary transition-colors line-clamp-1 heading-minor">
                        {lang === "ar" ? s.nameAr : s.nameEn}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1 body-caption">
                        <MapPin size={12} className="text-gold" />
                        <span>{lang === "ar" ? s.cityAr : s.cityEn}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
