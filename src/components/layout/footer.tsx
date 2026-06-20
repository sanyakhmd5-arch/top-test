"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { Facebook, Instagram, Youtube, Snapchat, TikTok, X, LinkedIn } from "@/components/ui/social-icons";
import { MapPin, Phone, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590412305704", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/toptest.to", label: "Instagram" },
  { icon: X, href: "https://x.com/TopTest_to", label: "X (Twitter)" },
  { icon: LinkedIn, href: "https://www.linkedin.com/in/top-test-5871a2416", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@TOPTEST-to", label: "YouTube" },
  { icon: Snapchat, href: "https://www.snapchat.com/add/top_test", label: "Snapchat" },
  { icon: TikTok, href: "https://www.tiktok.com/@top.test85", label: "TikTok" },
];

export function Footer() {
  const { lang, t } = useI18n();

  return (
    <footer className="bg-brand dark:bg-brand-dark text-white relative overflow-hidden">
      {/* Gold accent line */}
      <div className="gold-shimmer h-[3px]" />

      {/* Decorative elements */}
      <div className="absolute top-0 start-0 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 end-0 w-96 h-96 bg-white/2 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo & Brand Identity */}
            <div className="mb-7">
              <div className="relative w-20 h-20 md:w-24 md:h-24 mb-5">
                <Image
                  src="/images/logo/logo-square.png"
                  alt="TOP TEST"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="mb-2">
                <h3 className="text-2xl tracking-tight brand-text">TOP TEST</h3>
                <p className="text-xs text-white/55 mt-0.5 brand-sub">
                  {lang === "ar" ? "للخدمات الغذائية" : "Food Services"}
                </p>
              </div>
            </div>
            <p className="text-sm text-white/50 mb-8 body-small">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center hover:bg-gold hover:text-brand hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(254,170,5,0.3)] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base mb-6 text-gold heading-minor">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { label: t.nav.home, href: "/" },
                { label: lang === "ar" ? "نبذة عن المؤسسة" : "About Us", href: "/about/overview" },
                { label: t.nav.services, href: "/services/school-canteens" },
                { label: t.nav.schools, href: "/schools" },
                { label: t.nav.partners, href: "/partners" },
                { label: t.nav.gallery, href: "/gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2 group body-small"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Links to standalone pages */}
          <div>
            <h4 className="text-base mb-6 text-gold heading-minor">{t.nav.services}</h4>
            <ul className="space-y-3">
              {[
                { label: lang === "ar" ? "المقاصف المدرسية" : "School Canteens", href: "/services/school-canteens" },
                { label: lang === "ar" ? "الضيافة والبوفيهات" : "Hospitality & Buffets", href: "/services/hospitality" },
                { label: lang === "ar" ? "الفعاليات" : "Events Management", href: "/services/events" },
                { label: lang === "ar" ? "عربات القهوة" : "Coffee Carts", href: "/services/coffee-carts" },
                { label: lang === "ar" ? "المشروبات" : "Beverages", href: "/services/beverages" },
                { label: lang === "ar" ? "الوجبات الخفيفة" : "Snacks", href: "/services/snacks" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2 group body-small"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base mb-6 text-gold heading-minor">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-white/50 body-small">{t.contact.addressText}</span>
              </li>
              <li>
                <a
                  href="tel:+966598480107"
                  className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors duration-300"
                >
                  <Phone size={16} className="text-gold shrink-0" />
                  <span className="text-sm" dir="ltr">+966 598 480 107</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:toptest.to@gmail.com"
                  className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors duration-300"
                >
                  <Mail size={16} className="text-gold shrink-0" />
                  <span className="text-sm">toptest.to@gmail.com</span>
                </a>
              </li>
            </ul>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966598480107"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm btn-text-sm transition-all duration-300 shadow-[0_4px_16px_rgba(22,163,74,0.3)] hover:shadow-[0_6px_24px_rgba(22,163,74,0.4)]"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/35 body-caption">
            © 2026 {lang === "ar" ? "توب تست" : "TOP TEST"} — {t.footer.rights}
          </p>
          <p className="text-xs text-white/35 text-center body-caption">
            {lang === "ar"
              ? "المقاصف المدرسية • الضيافة • الفعاليات"
              : "School Catering • Hospitality • Events"}
          </p>
        </div>
      </div>
    </footer>
  );
}
