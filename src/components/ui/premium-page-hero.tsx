"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ChevronLeft, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Personality presets for each page type.
 * Controls the overlay tint, accent glow, and visual mood.
 */
export type HeroPersonality =
  | "school"       // تعليمية وثقة وجودة غذائية
  | "hospitality"  // فخامة ورقي واحترافية
  | "events"       // تنظيم وحيوية وتميز
  | "coffee"       // عصرية وأناقة وخدمة احترافية
  | "beverages"    // انتعاش وجودة وتنوع
  | "snacks"       // تنوع وسرعة وجودة
  | "corporate"    // قوة المؤسسة وخبرتها
  | "vision"       // نظرة مستقبلية وطموح
  | "mission"      // الالتزام والجودة
  | "goals"        // الإنجاز والتطوير
  | "values"       // الثقة والمصداقية والتميز
  | "schools"      // المؤسسات التعليمية: ثقة وجودة واعتمادية
  | "partners"     // شركاء النجاح: شراكات ومصداقية وإنجازات
  | "gallery"      // معرض الأعمال: خبرة وجودة تنفيذ واحترافية
  | "contact";     // تواصل معنا: ترحيب وسهولة وثقة

interface PremiumPageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage: string;
  personality: HeroPersonality;
}

/**
 * Personality config map: overlay gradients, accent colors, glow effects.
 */
const personalityConfig: Record<HeroPersonality, {
  overlayFrom: string;
  overlayVia: string;
  overlayTo: string;
  accentGlow: string;
  accentGlowPos: string;
  vignetteColor: string;
}> = {
  school: {
    overlayFrom: "rgba(2,30,83,0.82)",
    overlayVia: "rgba(15,61,110,0.6)",
    overlayTo: "rgba(2,30,83,0.45)",
    accentGlow: "rgba(254,170,5,0.12)",
    accentGlowPos: "top-start",
    vignetteColor: "rgba(2,30,83,0.95)",
  },
  hospitality: {
    overlayFrom: "rgba(15,30,60,0.78)",
    overlayVia: "rgba(40,20,50,0.55)",
    overlayTo: "rgba(10,20,40,0.4)",
    accentGlow: "rgba(212,164,55,0.15)",
    accentGlowPos: "center",
    vignetteColor: "rgba(10,15,30,0.9)",
  },
  events: {
    overlayFrom: "rgba(10,30,70,0.75)",
    overlayVia: "rgba(30,15,60,0.5)",
    overlayTo: "rgba(5,20,50,0.38)",
    accentGlow: "rgba(254,170,5,0.18)",
    accentGlowPos: "top-end",
    vignetteColor: "rgba(5,10,40,0.92)",
  },
  coffee: {
    overlayFrom: "rgba(30,20,15,0.8)",
    overlayVia: "rgba(50,30,20,0.55)",
    overlayTo: "rgba(20,15,10,0.42)",
    accentGlow: "rgba(254,170,5,0.14)",
    accentGlowPos: "bottom-start",
    vignetteColor: "rgba(15,10,5,0.88)",
  },
  beverages: {
    overlayFrom: "rgba(5,25,60,0.76)",
    overlayVia: "rgba(10,50,90,0.5)",
    overlayTo: "rgba(5,20,50,0.38)",
    accentGlow: "rgba(100,200,255,0.1)",
    accentGlowPos: "center",
    vignetteColor: "rgba(5,15,40,0.9)",
  },
  snacks: {
    overlayFrom: "rgba(40,25,10,0.78)",
    overlayVia: "rgba(60,35,15,0.52)",
    overlayTo: "rgba(30,18,8,0.4)",
    accentGlow: "rgba(254,170,5,0.16)",
    accentGlowPos: "bottom-end",
    vignetteColor: "rgba(20,12,5,0.9)",
  },
  corporate: {
    overlayFrom: "rgba(2,30,83,0.85)",
    overlayVia: "rgba(10,48,112,0.6)",
    overlayTo: "rgba(2,30,83,0.48)",
    accentGlow: "rgba(254,170,5,0.1)",
    accentGlowPos: "top-start",
    vignetteColor: "rgba(2,20,60,0.95)",
  },
  vision: {
    overlayFrom: "rgba(5,15,50,0.8)",
    overlayVia: "rgba(15,40,80,0.55)",
    overlayTo: "rgba(5,15,40,0.4)",
    accentGlow: "rgba(100,180,255,0.12)",
    accentGlowPos: "top-end",
    vignetteColor: "rgba(5,10,40,0.92)",
  },
  mission: {
    overlayFrom: "rgba(15,30,60,0.82)",
    overlayVia: "rgba(25,45,80,0.58)",
    overlayTo: "rgba(10,25,50,0.42)",
    accentGlow: "rgba(254,170,5,0.14)",
    accentGlowPos: "center",
    vignetteColor: "rgba(10,18,45,0.93)",
  },
  goals: {
    overlayFrom: "rgba(10,25,60,0.8)",
    overlayVia: "rgba(20,45,85,0.55)",
    overlayTo: "rgba(8,20,50,0.4)",
    accentGlow: "rgba(254,170,5,0.12)",
    accentGlowPos: "bottom-start",
    vignetteColor: "rgba(5,15,45,0.92)",
  },
  values: {
    overlayFrom: "rgba(2,30,83,0.83)",
    overlayVia: "rgba(15,61,110,0.58)",
    overlayTo: "rgba(2,30,83,0.43)",
    accentGlow: "rgba(254,170,5,0.13)",
    accentGlowPos: "center",
    vignetteColor: "rgba(2,20,60,0.94)",
  },
  schools: {
    overlayFrom: "rgba(2,30,83,0.85)",
    overlayVia: "rgba(10,48,112,0.62)",
    overlayTo: "rgba(2,30,83,0.48)",
    accentGlow: "rgba(254,170,5,0.14)",
    accentGlowPos: "top-start",
    vignetteColor: "rgba(2,20,60,0.95)",
  },
  partners: {
    overlayFrom: "rgba(10,25,55,0.82)",
    overlayVia: "rgba(30,45,80,0.58)",
    overlayTo: "rgba(8,20,45,0.42)",
    accentGlow: "rgba(254,170,5,0.15)",
    accentGlowPos: "center",
    vignetteColor: "rgba(5,15,45,0.93)",
  },
  gallery: {
    overlayFrom: "rgba(5,15,40,0.8)",
    overlayVia: "rgba(20,35,65,0.55)",
    overlayTo: "rgba(5,15,35,0.4)",
    accentGlow: "rgba(254,170,5,0.16)",
    accentGlowPos: "top-end",
    vignetteColor: "rgba(5,10,35,0.92)",
  },
  contact: {
    overlayFrom: "rgba(2,30,83,0.8)",
    overlayVia: "rgba(15,61,110,0.55)",
    overlayTo: "rgba(2,30,83,0.4)",
    accentGlow: "rgba(254,170,5,0.12)",
    accentGlowPos: "bottom-start",
    vignetteColor: "rgba(2,20,60,0.92)",
  },
};

export function PremiumPageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  personality,
}: PremiumPageHeroProps) {
  const { lang, dir } = useI18n();
  const ChevronIcon = dir === "rtl" ? ChevronLeft : ChevronRight;
  const containerRef = useRef<HTMLElement>(null);

  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const config = personalityConfig[personality];

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "clamp(320px, 55vh, 600px)" }}
    >
      {/* ── Background Image with Parallax ── */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* ── Main Overlay (personality-driven gradient) ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${config.overlayFrom} 0%, ${config.overlayVia} 50%, ${config.overlayTo} 100%)`,
        }}
      />

      {/* ── Bottom-Heavy Gradient (ensures text readability) ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${config.vignetteColor} 0%, rgba(0,0,0,0.3) 40%, transparent 100%)`,
        }}
      />

      {/* ── Accent Glow (personality-driven) ── */}
      <div
        className="absolute w-[60%] h-[80%] pointer-events-none"
        style={{
          top: config.accentGlowPos.includes("top") ? "-10%" : config.accentGlowPos === "center" ? "10%" : "30%",
          left: config.accentGlowPos.includes("start") || config.accentGlowPos === "bottom-start" ? "-10%" : config.accentGlowPos === "center" ? "20%" : "auto",
          right: config.accentGlowPos.includes("end") ? "-10%" : "auto",
          background: `radial-gradient(ellipse, ${config.accentGlow} 0%, transparent 70%)`,
        }}
      />

      {/* ── Diagonal Texture Overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.08) 12px, rgba(255,255,255,0.08) 13px)",
        }}
      />

      {/* ── TOP TEST Logo Watermark ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-[180px] md:w-[240px] lg:w-[300px] opacity-[0.04] select-none">
          <Image
            src="/images/logo/logo-square.png"
            alt=""
            width={300}
            height={300}
            className="w-full h-auto"
            priority={false}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ── Secondary Logo in Corner ── */}
      <div className="absolute top-6 start-6 md:top-8 md:start-8 z-20 opacity-[0.12] pointer-events-none select-none">
        <Image
          src="/images/logo/logo-square-icon.png"
          alt=""
          width={48}
          height={48}
          className="w-8 h-8 md:w-10 md:h-10"
          aria-hidden="true"
        />
      </div>

      {/* ── Content (Parallax-aware) ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-6"
        style={{
          y: textY,
          minHeight: "clamp(320px, 55vh, 600px)",
          paddingTop: "clamp(3rem, 8vw, 6rem)",
          paddingBottom: "clamp(2rem, 6vw, 4rem)",
        }}
      >
        {/* Breadcrumbs */}
        <motion.nav
          className="flex items-center justify-center gap-2 text-sm mb-6"
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/"
            className="text-white/60 hover:text-gold transition-colors flex items-center gap-1"
          >
            <Home size={14} />
            <span className="text-shield">{lang === "ar" ? "الرئيسية" : "Home"}</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronIcon size={14} className="text-white/30" />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-white/60 hover:text-gold transition-colors text-shield"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold body-caption">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        {/* Gold Accent Line */}
        <motion.div
          className="w-12 h-[2px] bg-gold/60 mb-5 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 heading-hero text-shield-strong drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto body-large text-shield drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Bottom Accent Bar */}
        <motion.div
          className="mt-8 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="w-8 h-[1px] bg-gold/40" />
          <span className="w-2 h-2 rounded-full bg-gold/50" />
          <span className="w-8 h-[1px] bg-gold/40" />
        </motion.div>
      </motion.div>

      {/* ── Vignette Edges ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 120px 40px rgba(0,0,0,0.25)",
        }}
      />

      {/* ── Bottom Gradient Fade to Page ── */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />

      {/* ── Bottom Gold Accent Line ── */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
