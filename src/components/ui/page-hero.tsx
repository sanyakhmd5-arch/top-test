"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { AnimateOnScroll } from "@/components/ui/animate";
import { ChevronRight, ChevronLeft, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  const { lang, dir } = useI18n();
  const ChevronIcon = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <section className="page-hero">
      <div className="absolute inset-0 hero-grid-pattern opacity-20" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimateOnScroll className="text-center text-white">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="text-white/60 hover:text-gold transition-colors flex items-center gap-1 text-shield">
              <Home size={14} />
              <span>{lang === "ar" ? "الرئيسية" : "Home"}</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronIcon size={14} className="text-white/30" />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-white/60 hover:text-gold transition-colors text-shield">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold body-caption">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 heading-hero text-shield-strong">{title}</h1>
          {subtitle && (
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto body-large text-shield">{subtitle}</p>
          )}
        </AnimateOnScroll>
      </div>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
