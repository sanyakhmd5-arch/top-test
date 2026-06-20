"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ChevronLeft, Home, MapPin, GraduationCap } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * School personality presets.
 * Each school gets a unique visual mood based on its identity.
 */
export type SchoolPersonality =
  | "academic-prestige"    // مدارس أهلية راقية (فخامة أكاديمية وتراث)
  | "academic-modern"      // مدارس أهلية عصرية (ابتكار وتجديد)
  | "academic-excellence"  // مدارس أهلية متميزة (تميز وإنجاز)
  | "public-trust"         // مدارس حكومية مميزة (ثقة ومجتمع)
  | "public-community";    // مدارس حكومية (مجتمع ودفء)

interface SchoolHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  /**
   * School logo URL. Currently unused for rendering (the centered logo card
   * was intentionally removed for a cleaner Hero) but kept in the API surface
   * so callers (e.g. /schools/[slug]/page.tsx) do not need to be modified.
   */
  schoolLogo?: string;
  schoolTypeAr?: string;
  schoolTypeEn?: string;
  schoolCityAr?: string;
  schoolCityEn?: string;
  personality: SchoolPersonality;
  /**
   * Premium full-width hero image (uploaded per school).
   * When provided, the hero renders as a full-bleed photo with professional overlay.
   * When omitted, falls back to the gradient-based design.
   */
  heroImage?: string;
}

/**
 * Personality-driven config for each school archetype.
 * Controls: gradient colors, glow placement, logo presentation style, overlay tones.
 */
const personalityConfig: Record<SchoolPersonality, {
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  accentGlow: string;
  accentGlowPos: "start" | "center" | "end";
  logoRingColor: string;
  logoBg: string;
  patternOpacity: number;
  vignetteIntensity: number;
  overlayTint: string;       // Color tint for hero image overlay
  overlayTintOpacity: number;
}> = {
  "academic-prestige": {
    gradientFrom: "#021E53",
    gradientVia: "#0F3D6E",
    gradientTo: "#0A2D5C",
    accentGlow: "rgba(254,170,5,0.18)",
    accentGlowPos: "start",
    logoRingColor: "rgba(254,170,5,0.55)",
    logoBg: "rgba(255,255,255,0.10)",
    patternOpacity: 0.03,
    vignetteIntensity: 0.6,
    overlayTint: "#021E53",
    overlayTintOpacity: 0.55,
  },
  "academic-modern": {
    gradientFrom: "#0A1628",
    gradientVia: "#162D50",
    gradientTo: "#0D1F3C",
    accentGlow: "rgba(100,180,255,0.14)",
    accentGlowPos: "center",
    logoRingColor: "rgba(100,180,255,0.55)",
    logoBg: "rgba(100,180,255,0.08)",
    patternOpacity: 0.025,
    vignetteIntensity: 0.55,
    overlayTint: "#0A1628",
    overlayTintOpacity: 0.5,
  },
  "academic-excellence": {
    gradientFrom: "#1A0A2E",
    gradientVia: "#0F3D6E",
    gradientTo: "#0A2D5C",
    accentGlow: "rgba(254,170,5,0.2)",
    accentGlowPos: "end",
    logoRingColor: "rgba(254,170,5,0.65)",
    logoBg: "rgba(254,170,5,0.08)",
    patternOpacity: 0.035,
    vignetteIntensity: 0.65,
    overlayTint: "#1A0A2E",
    overlayTintOpacity: 0.55,
  },
  "public-trust": {
    gradientFrom: "#0A2D5C",
    gradientVia: "#14507A",
    gradientTo: "#0D3B5E",
    accentGlow: "rgba(212,164,55,0.12)",
    accentGlowPos: "center",
    logoRingColor: "rgba(212,164,55,0.55)",
    logoBg: "rgba(255,255,255,0.08)",
    patternOpacity: 0.02,
    vignetteIntensity: 0.5,
    overlayTint: "#0A2D5C",
    overlayTintOpacity: 0.5,
  },
  "public-community": {
    gradientFrom: "#0D3B5E",
    gradientVia: "#1A5C7A",
    gradientTo: "#0F4870",
    accentGlow: "rgba(100,200,200,0.1)",
    accentGlowPos: "start",
    logoRingColor: "rgba(100,200,200,0.55)",
    logoBg: "rgba(100,200,200,0.08)",
    patternOpacity: 0.02,
    vignetteIntensity: 0.45,
    overlayTint: "#0D3B5E",
    overlayTintOpacity: 0.5,
  },
};

/**
 * Geometric pattern variants for visual uniqueness per school.
 * Each personality gets a different pattern to prevent visual repetition.
 */
const patternStyles: Record<SchoolPersonality, React.CSSProperties> = {
  "academic-prestige": {
    backgroundImage:
      "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.04) 20px, rgba(255,255,255,0.04) 21px)",
  },
  "academic-modern": {
    backgroundImage:
      "repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(100,180,255,0.03) 18px, rgba(100,180,255,0.03) 19px)",
  },
  "academic-excellence": {
    backgroundImage:
      "radial-gradient(circle at 2px 2px, rgba(254,170,5,0.04) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
  },
  "public-trust": {
    backgroundImage:
      "repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(255,255,255,0.02) 24px, rgba(255,255,255,0.02) 25px)",
  },
  "public-community": {
    backgroundImage:
      "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(100,200,200,0.02) 28px, rgba(100,200,200,0.02) 29px)",
  },
};

export function SchoolHero({
  title,
  subtitle,
  breadcrumbs,
  schoolLogo: _schoolLogo,
  schoolTypeAr,
  schoolTypeEn,
  schoolCityAr,
  schoolCityEn,
  personality,
  heroImage,
}: SchoolHeroProps) {
  const { lang, dir } = useI18n();
  const ChevronIcon = dir === "rtl" ? ChevronLeft : ChevronRight;
  const containerRef = useRef<HTMLElement>(null);

  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const config = personalityConfig[personality];
  const pattern = patternStyles[personality];
  const hasHeroImage = Boolean(heroImage);

  const glowLeft =
    config.accentGlowPos === "start"
      ? dir === "rtl" ? "auto" : "-15%"
      : config.accentGlowPos === "end"
      ? dir === "rtl" ? "-15%" : "auto"
      : "15%";
  const glowRight =
    config.accentGlowPos === "start"
      ? dir === "rtl" ? "-15%" : "auto"
      : config.accentGlowPos === "end"
      ? dir === "rtl" ? "auto" : "-15%"
      : "auto";

  // Easing used for elegant transitions
  const easeElegant = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: hasHeroImage ? "clamp(460px, 78vh, 820px)" : "clamp(380px, 65vh, 700px)" }}
    >
      {/* ============== BACKGROUND LAYER ============== */}
      {hasHeroImage ? (
        <>
          {/* Full-width hero photo with subtle parallax */}
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ y: imageY, scale: 1.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: easeElegant }}
          >
            <Image
              src={heroImage as string}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Multi-Layer Professional Overlay for text legibility & depth */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: overlayOpacity }}
          >
            {/* Primary color tint */}
            <div
              className="absolute inset-0"
              style={{
                background: config.overlayTint,
                opacity: config.overlayTintOpacity,
              }}
            />
            {/* Deep gradient (top → bottom) for vertical contrast */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  dir === "rtl"
                    ? "linear-gradient(180deg, rgba(2,30,83,0.55) 0%, rgba(2,30,83,0.30) 35%, rgba(2,30,83,0.65) 100%)"
                    : "linear-gradient(180deg, rgba(2,30,83,0.55) 0%, rgba(2,30,83,0.30) 35%, rgba(2,30,83,0.65) 100%)",
              }}
            />
            {/* Side gradient for text contrast on the content side */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  dir === "rtl"
                    ? "linear-gradient(270deg, rgba(2,30,83,0.0) 0%, rgba(2,30,83,0.45) 55%, rgba(2,30,83,0.85) 100%)"
                    : "linear-gradient(90deg, rgba(2,30,83,0.0) 0%, rgba(2,30,83,0.45) 55%, rgba(2,30,83,0.85) 100%)",
              }}
            />
            {/* Personality accent glow */}
            <div
              className="absolute w-[70%] h-[90%] pointer-events-none"
              style={{
                top: "-15%",
                left: glowLeft,
                right: glowRight,
                background: `radial-gradient(ellipse, ${config.accentGlow} 0%, transparent 65%)`,
              }}
            />
          </motion.div>

          {/* Subtle pattern (very low opacity to avoid covering photo) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              ...pattern,
              opacity: config.patternOpacity * 0.5,
            }}
          />
        </>
      ) : (
        <>
          {/* Multi-Layer Gradient Background (fallback for schools without uploaded hero image) */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 120% 80% at 30% 20%, ${config.gradientVia} 0%, transparent 50%),
                radial-gradient(ellipse 100% 60% at 80% 70%, ${config.gradientTo} 0%, transparent 50%),
                linear-gradient(160deg, ${config.gradientFrom} 0%, ${config.gradientVia} 50%, ${config.gradientTo} 100%)
              `,
            }}
          />

          {/* Accent Glow */}
          <div
            className="absolute w-[70%] h-[90%] pointer-events-none"
            style={{
              top: "-15%",
              left: glowLeft,
              right: glowRight,
              background: `radial-gradient(ellipse, ${config.accentGlow} 0%, transparent 65%)`,
            }}
          />

          {/* Geometric Pattern (unique per personality) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              ...pattern,
              opacity: config.patternOpacity,
            }}
          />
        </>
      )}

      {/* TOP TEST Corner Watermark */}
      <div className="absolute top-6 start-6 md:top-8 md:start-8 z-20 opacity-[0.10] pointer-events-none select-none">
        <Image
          src="/images/logo/logo-square-icon.png"
          alt=""
          width={48}
          height={48}
          className="w-8 h-8 md:w-10 md:h-10"
          aria-hidden="true"
        />
      </div>

      {/* ============== MAIN CONTENT AREA ============== */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-6"
        style={{
          minHeight: hasHeroImage ? "clamp(460px, 78vh, 820px)" : "clamp(380px, 65vh, 700px)",
          paddingTop: "clamp(2.5rem, 6vw, 5rem)",
          paddingBottom: "clamp(2rem, 5vw, 3.5rem)",
        }}
      >
        {/* Breadcrumbs */}
        <motion.nav
          className="flex items-center justify-center gap-2 text-sm mb-6 flex-wrap"
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeElegant }}
        >
          <Link
            href="/"
            className="text-white/70 hover:text-gold transition-colors flex items-center gap-1"
          >
            <Home size={14} />
            <span>{lang === "ar" ? "الرئيسية" : "Home"}</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronIcon size={14} className="text-white/35" />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold/90 body-caption font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        {/* Title & Info */}
        <motion.div
          style={{ y: textY }}
          className="flex flex-col items-center max-w-3xl"
        >
          {/* School Type Badge */}
          {(schoolTypeAr || schoolTypeEn) && (
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: easeElegant }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide backdrop-blur-md transition-transform duration-300 hover:scale-105"
                style={{
                  background: hasHeroImage
                    ? "rgba(254,170,5,0.95)"
                    : config.logoRingColor,
                  border: `1px solid ${config.logoRingColor}`,
                  color: hasHeroImage ? "#021E53" : "rgba(255,255,255,0.95)",
                  boxShadow: hasHeroImage
                    ? "0 4px 16px rgba(254,170,5,0.35)"
                    : "0 4px 16px rgba(0,0,0,0.2)",
                }}
              >
                <GraduationCap size={13} />
                {lang === "ar" ? schoolTypeAr : schoolTypeEn}
              </span>
            </motion.div>
          )}

          {/* School Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mb-3 heading-hero drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
            style={{ color: "white" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeElegant }}
          >
            {title}
          </motion.h1>

          {/* City */}
          {(schoolCityAr || schoolCityEn) && (
            <motion.div
              className="flex items-center gap-1.5 text-white/85 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MapPin size={14} className="text-gold" />
              <span className="text-sm body-caption drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                {lang === "ar" ? schoolCityAr : schoolCityEn}
              </span>
            </motion.div>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto body-large drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: easeElegant }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Bottom Accent Bar */}
          <motion.div
            className="mt-7 flex items-center gap-3"
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: easeElegant }}
          >
            <span
              className="w-10 h-[1px] origin-center"
              style={{ background: config.logoRingColor }}
            />
            <span
              className="w-2 h-2 rounded-full transition-transform duration-300 hover:scale-125"
              style={{ background: config.logoRingColor }}
            />
            <span
              className="w-10 h-[1px] origin-center"
              style={{ background: config.logoRingColor }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Vignette Edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 140px 50px rgba(0,0,0,${config.vignetteIntensity})`,
        }}
      />

      {/* Bottom Gradient Fade to Page */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-background to-transparent" />

      {/* Bottom Gold Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
    </section>
  );
}

/**
 * Determines the personality for a school based on its characteristics.
 * Analyzes school type, city, and name to assign a unique visual personality.
 */
export function getSchoolPersonality(school: {
  typeAr: string;
  typeEn: string;
  cityEn: string;
  nameAr: string;
  nameEn: string;
}): SchoolPersonality {
  const isPrivate = school.typeEn === "Private Schools" || school.typeAr.includes("أهلية");
  const name = school.nameEn.toLowerCase();
  const nameAr = school.nameAr;

  if (isPrivate) {
    // Private schools: differentiate by name identity
    if (name.includes("fursan") || nameAr.includes("الفرسان")) return "academic-excellence";
    if (name.includes("jamiaa") || nameAr.includes("الجامعة")) return "academic-prestige";
    if (name.includes("risala") || nameAr.includes("الرسالة")) return "academic-modern";
    if (name.includes("afaq") || nameAr.includes("آفاق")) return "academic-modern";
    if (name.includes("riyad al-uloom") || nameAr.includes("رياض العلوم")) return "academic-prestige";
    if (name.includes("shams") || nameAr.includes("الشمس")) return "academic-excellence";
    if (name.includes("riyad najd") || nameAr.includes("رياض نجد")) return "academic-prestige";
    if (name.includes("manhal") || nameAr.includes("المنهل")) return "academic-modern";
    if (name.includes("tarbiya") || nameAr.includes("التربية النموذجية")) return "academic-excellence";
    if (name.includes("riyadh ahliya") || nameAr.includes("الرياض الأهلية")) return "academic-prestige";
    return "academic-prestige";
  } else {
    // Public schools: differentiate by name significance
    if (name.includes("prince") || nameAr.includes("الأمير")) return "public-trust";
    if (nameAr.includes("أبي هريرة") || nameAr.includes("أبي سعيد")) return "public-trust";
    if (nameAr.includes("الرشاد") || nameAr.includes("ابن المغيرة")) return "public-trust";
    return "public-community";
  }
}

/**
 * Maps a school slug to its uploaded hero image (if any).
 * Returns the public path of the uploaded hero image, or undefined
 * if no uploaded image exists for that school (in which case the gradient
 * fallback is used). This map is the single source of truth — no school
 * ever uses another school's uploaded image, and images are never reused.
 */
const SCHOOL_HERO_IMAGE_MAP: Record<string, string> = {
  "al-jamiaa-ahliya-kharj": "/images/schools-hero/al-jamiaa-ahliya-kharj.jpg",
  "al-fursan-ahliya-kharj": "/images/schools-hero/al-fursan-ahliya-kharj.jpg",
  "afaq-al-badiya-ahliya-riyadh": "/images/schools-hero/afaq-al-badiya-ahliya-riyadh.jpg",
  "riyad-al-uloom-ahliya-riyadh": "/images/schools-hero/riyad-al-uloom-ahliya-riyadh.jpg",
  "al-shams-ahliya-riyadh": "/images/schools-hero/al-shams-ahliya-riyadh.jpg",
  "riyad-najd-ahliya-riyadh": "/images/schools-hero/riyad-najd-ahliya-riyadh.jpg",
  "al-manhal-riyadh": "/images/schools-hero/al-manhal-riyadh.jpg",
  "al-tarbiya-namudhajiya-riyadh": "/images/schools-hero/al-tarbiya-namudhajiya-riyadh.jpg",
  "abi-hurayra-hafr-al-batin": "/images/schools-hero/abi-hurayra-hafr-al-batin.jpg",
  "47th-primary-hafr-al-batin": "/images/schools-hero/47th-primary-hafr-al-batin.jpg",
  "49th-primary-hafr-al-batin": "/images/schools-hero/49th-primary-hafr-al-batin.jpg",
  "al-rashad-hafr-al-batin": "/images/schools-hero/al-rashad-hafr-al-batin.jpg",
  "ibn-al-mughira-hafr-al-batin": "/images/schools-hero/ibn-al-mughira-hafr-al-batin.jpg",
  "abi-saeed-al-khudri-hafr-al-batin": "/images/schools-hero/abi-saeed-al-khudri-hafr-al-batin.jpg",
  "amir-sultan-hafr-al-batin": "/images/schools-hero/amir-sultan-hafr-al-batin.jpg",
  "50th-primary-hafr-al-batin": "/images/schools-hero/50th-primary-hafr-al-batin.jpg",
  "24th-primary-hafr-al-batin": "/images/schools-hero/24th-primary-hafr-al-batin.jpg",
  // NOTE: "al-risala-ahliya-riyadh" and "riyadh-ahliya-riyadh" intentionally
  // have NO uploaded hero image — they keep the gradient-based design.
};

/**
 * Returns the uploaded hero image path for a school slug, or undefined.
 * Used to ensure each school only uses its own uploaded image.
 */
export function getSchoolHeroImage(slug: string): string | undefined {
  return SCHOOL_HERO_IMAGE_MAP[slug];
}
