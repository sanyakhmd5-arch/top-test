"use client";

import { HeroSection } from "@/components/sections/hero";
import { SchoolsSection } from "@/components/sections/schools";
import { ServicesSection } from "@/components/sections/services";
import { PartnersSection } from "@/components/sections/partners";
import { GallerySection } from "@/components/sections/gallery";
import { VideoSection } from "@/components/sections/video";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BackToTopButton } from "@/components/ui/back-to-top";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <SchoolsSection />
      <ServicesSection />
      <PartnersSection />
      <GallerySection />
      <TestimonialsSection />
      <BackToTopButton />
    </>
  );
}
