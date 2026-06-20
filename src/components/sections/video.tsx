"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { AnimateOnScroll } from "@/components/ui/animate";
import { Film } from "lucide-react";

export function VideoSection() {
  const { lang, t } = useI18n();

  return (
    <section className="section-premium bg-brand dark:bg-card relative overflow-hidden">
      {/* Decorative elements - Enhanced */}
      <div className="absolute top-0 start-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 end-0 w-[500px] h-[500px] bg-white/3 rounded-full blur-3xl" />
      <div className="hero-grid-pattern absolute inset-0 opacity-15" />
      {/* Diagonal accent */}
      <div className="absolute top-[30%] start-[-200px] w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent rotate-[20deg]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimateOnScroll className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/15 text-gold rounded-full text-sm mb-5 body-caption">
            <Film size={16} />
            {t.video.title}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white mb-5 heading-section text-shield">
            {t.video.subtitle}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
              <iframe
                src="https://www.youtube.com/embed/IOvOSXZOQY0?rel=0&modestbranding=1"
                title="TOP TEST Food Services"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
