"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { schools } from "@/data/schools";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";

export default function SchoolsPage() {
  const { lang, t, dir } = useI18n();
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState<string>("all");

  const cities = useMemo(() => {
    const uniqueCities = [...new Set(schools.map((s) => (lang === "ar" ? s.cityAr : s.cityEn)))];
    return uniqueCities;
  }, [lang]);

  const filtered = useMemo(() => {
    return schools.filter((s) => {
      const name = lang === "ar" ? s.nameAr : s.nameEn;
      const city = lang === "ar" ? s.cityAr : s.cityEn;
      const matchesSearch = name.toLowerCase().includes(search.toLowerCase()) || city.toLowerCase().includes(search.toLowerCase());
      const matchesCity = cityFilter === "all" || city === cityFilter;
      return matchesSearch && matchesCity;
    });
  }, [search, cityFilter, lang]);

  return (
    <>
      {/* Hero Banner - Premium */}
      <PremiumPageHero
        title={t.schools.title}
        subtitle={t.schools.subtitle}
        breadcrumbs={[
          { label: t.schools.title },
        ]}
        backgroundImage="/images/hero/schools.webp"
        personality="schools"
      />

      {/* Search & Filter - Premium */}
      <section className="py-6 bg-background/95 backdrop-blur-lg border-b border-border sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder={lang === "ar" ? "ابحث عن مؤسسة..." : "Search for institution..."}
                className="ps-10 rounded-xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                variant={cityFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setCityFilter("all")}
                className="rounded-full"
              >
                {t.gallery.all}
              </Button>
              {cities.map((city) => (
                <Button
                  key={city}
                  variant={cityFilter === city ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCityFilter(city)}
                  className="rounded-full"
                >
                  {city}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schools Grid - Premium */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-sm text-muted-foreground mb-6 body-small">
            {lang === "ar"
              ? `عرض ${filtered.length} مؤسسة من أصل ${schools.length}`
              : `Showing ${filtered.length} of ${schools.length} institutions`}
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((school) => (
              <StaggerItem key={school.slug}>
                <Link href={`/schools/${school.slug}`}>
                  <Card className="overflow-hidden card-hover group border-border/50 h-full premium-card">
                    <div className="relative h-44 bg-gradient-to-b from-muted/50 to-muted flex items-center justify-center p-6 overflow-hidden">
                      <Image
                        src={school.image}
                        alt={lang === "ar" ? school.nameAr : school.nameEn}
                        width={200}
                        height={120}
                        className="object-contain max-h-full w-auto transition-transform duration-500 group-hover:scale-110"
                      />
                      <Badge className="absolute top-3 end-3 bg-gold text-brand text-[10px]">
                        {lang === "ar" ? school.typeAr : school.typeEn}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-base mb-2 text-foreground group-hover:text-brand dark:group-hover:text-primary transition-colors heading-minor">
                        {lang === "ar" ? school.nameAr : school.nameEn}
                      </h3>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
                        <MapPin size={14} className="text-gold" />
                        <span>{lang === "ar" ? school.cityAr : school.cityEn}</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 body-small">
                        {lang === "ar" ? school.descriptionAr : school.descriptionEn}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg body-large">
                {lang === "ar" ? "لا توجد نتائج" : "No results found"}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
