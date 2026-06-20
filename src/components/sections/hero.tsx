"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const { lang, t, dir } = useI18n();

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] flex items-center justify-center overflow-hidden">
      {/* Single Background Image with Cinematic Ken Burns */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 18, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/hero.jpg"
          alt="TOP TEST Food Services"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="100vw"
        />
      </motion.div>

      {/* Multi-layer cinematic overlay */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="hero-grid-pattern absolute inset-0 opacity-20" />

      {/* Decorative ambient orbs - subtle premium feel */}
      <motion.div
        className="absolute top-[8%] start-[2%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(254,170,5,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[8%] end-[3%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(2,30,83,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Diagonal accent line */}
      <div className="absolute top-0 end-0 w-[600px] h-full pointer-events-none">
        <div className="absolute top-[20%] end-[-100px] w-[400px] h-[1px] bg-gradient-to-l from-gold/20 to-transparent rotate-[30deg]" />
        <div className="absolute top-[40%] end-[-150px] w-[500px] h-[1px] bg-gradient-to-l from-gold/10 to-transparent rotate-[30deg]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-white w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge - Premium glass */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-flex items-center gap-2.5 px-6 py-2.5 glass rounded-full text-gold text-sm mb-8 body-caption text-shield">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              {t.hero.subtitle}
            </span>
          </motion.div>

          {/* Main Heading - Premium Typography with line-by-line reveal */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 heading-hero text-shield-strong"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="block">{t.hero.title}</span>
            </motion.h1>
          </div>

          {/* Description - Elegant fade with enhanced readability */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 body-large text-shield"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons - Premium with hover lift */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link href="/services/school-canteens">
              <Button
                size="lg"
                className="bg-gold hover:bg-[#D99000] text-[#021E53] rounded-full px-10 py-7 text-base btn-text shadow-[0_8px_32px_rgba(254,170,5,0.35)] hover:shadow-[0_16px_48px_rgba(254,170,5,0.5)] transition-all duration-500 hover:-translate-y-1 group"
              >
                {t.hero.cta1}
                {dir === "rtl" ? (
                  <ArrowLeft className="ms-2 transition-transform group-hover:-translate-x-1" size={18} />
                ) : (
                  <ArrowRight className="ms-2 transition-transform group-hover:translate-x-1" size={18} />
                )}
              </Button>
            </Link>
            <Link href="/schools">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/85 text-[#021E53] border-2 border-white/60 rounded-full px-10 py-7 text-base btn-text-sm backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-white hover:border-gold hover:shadow-[0_8px_30px_rgba(254,170,5,0.25)] transition-all duration-500 hover:-translate-y-1"
              >
                {t.hero.cta2}
              </Button>
            </Link>
          </motion.div>

          {/* Stats Bar - Premium Glass with refined spacing */}
          <motion.div
            className="glass rounded-2xl p-5 md:p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {[
                { value: t.schools.studentsCount, label: t.schools.studentsLabel },
                { value: t.schools.schoolsCount, label: t.schools.schoolsLabel },
                { value: t.schools.yearsCount, label: t.schools.yearsLabel },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Separator line between stats on desktop */}
                  {i > 0 && (
                    <div className="hidden md:block absolute start-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10" />
                  )}
                  <div className="text-2xl sm:text-3xl md:text-4xl text-gold mb-1.5 stat-number">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs md:text-sm text-white/60 stat-label text-shield">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Elegant minimal */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <span className="text-[10px] text-white/40 uppercase tracking-[3px] body-caption text-shield">
          {lang === "ar" ? "اكتشف المزيد" : "Scroll Down"}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/30" size={20} />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade - seamless blend */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
}
