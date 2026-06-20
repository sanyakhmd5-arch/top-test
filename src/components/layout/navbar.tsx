"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Sun, Moon, Globe, Phone, ChevronDown, ChevronLeft, ChevronRight,
  Building2, UtensilsCrossed, Wine, PartyPopper, Coffee,
  CupSoda, Cookie, Eye, Target, ListChecks, Heart,
  Mail, Home, GraduationCap, Handshake, Image as ImageIcon, MessageCircle,
  X, MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Youtube, Snapchat, TikTok, LinkedIn, X as XIcon } from "@/components/ui/social-icons";

// ── Premium palette for off-canvas menu ──
const m = {
  bg:        "#FFFFFF",
  bgSub:     "#F7F8FA",
  text:      "#1E293B",
  textLight: "#64748B",
  blue:      "#0F3D6E",
  gold:      "#D4A437",
  border:    "#E8ECF1",
  iconBg:    "#F0F3F7",
} as const;

// Navigation items with sub-menus — links to standalone pages (UNCHANGED)
const navStructure = {
  ar: [
    { label: "الرئيسية", href: "/", icon: Home },
    {
      label: "عن TOP TEST",
      href: "/about/overview",
      icon: Building2,
      children: [
        { label: "نبذة عن المؤسسة", href: "/about/overview", icon: Building2 },
        { label: "الرؤية", href: "/about/vision", icon: Eye },
        { label: "الرسالة", href: "/about/mission", icon: Target },
        { label: "الأهداف", href: "/about/goals", icon: ListChecks },
        { label: "القيم", href: "/about/values", icon: Heart },
      ],
    },
    {
      label: "خدماتنا",
      href: "/services/school-canteens",
      icon: UtensilsCrossed,
      children: [
        { label: "المقاصف المدرسية", href: "/services/school-canteens", icon: UtensilsCrossed },
        { label: "الضيافة والبوفيهات", href: "/services/hospitality", icon: Wine },
        { label: "الفعاليات", href: "/services/events", icon: PartyPopper },
        { label: "عربات القهوة", href: "/services/coffee-carts", icon: Coffee },
        { label: "المشروبات", href: "/services/beverages", icon: CupSoda },
        { label: "الوجبات الخفيفة", href: "/services/snacks", icon: Cookie },
      ],
    },
    { label: "المؤسسات التعليمية", href: "/schools", icon: GraduationCap },
    { label: "شركاء النجاح", href: "/partners", icon: Handshake },
    { label: "معرض الأعمال", href: "/gallery", icon: ImageIcon },
    { label: "تواصل معنا", href: "/contact", icon: MessageCircle },
  ],
  en: [
    { label: "Home", href: "/", icon: Home },
    {
      label: "About TOP TEST",
      href: "/about/overview",
      icon: Building2,
      children: [
        { label: "About the Institution", href: "/about/overview", icon: Building2 },
        { label: "Vision", href: "/about/vision", icon: Eye },
        { label: "Mission", href: "/about/mission", icon: Target },
        { label: "Objectives", href: "/about/goals", icon: ListChecks },
        { label: "Values", href: "/about/values", icon: Heart },
      ],
    },
    {
      label: "Our Services",
      href: "/services/school-canteens",
      icon: UtensilsCrossed,
      children: [
        { label: "School Canteens", href: "/services/school-canteens", icon: UtensilsCrossed },
        { label: "Hospitality & Buffets", href: "/services/hospitality", icon: Wine },
        { label: "Events", href: "/services/events", icon: PartyPopper },
        { label: "Coffee Carts", href: "/services/coffee-carts", icon: Coffee },
        { label: "Beverages", href: "/services/beverages", icon: CupSoda },
        { label: "Snacks", href: "/services/snacks", icon: Cookie },
      ],
    },
    { label: "Educational Institutions", href: "/schools", icon: GraduationCap },
    { label: "Success Partners", href: "/partners", icon: Handshake },
    { label: "Portfolio", href: "/gallery", icon: ImageIcon },
    { label: "Contact Us", href: "/contact", icon: MessageCircle },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590412305704", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/toptest.to", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@TOPTEST-to", label: "YouTube" },
  { icon: Snapchat, href: "https://www.snapchat.com/add/top_test", label: "Snapchat" },
  { icon: TikTok, href: "https://www.tiktok.com/@top.test85", label: "TikTok" },
  { icon: LinkedIn, href: "https://www.linkedin.com/in/top-test-5871a2416", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/TopTest_to", label: "X" },
];

export function Navbar() {
  const { lang, setLang, t, dir } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const navItems = lang === "ar" ? navStructure.ar : navStructure.en;

  // Smart Sticky Header: hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Only apply smart sticky when scrolled past threshold
      if (scrollY > 80) {
        if (scrollY > lastScrollY + 5) {
          // Scrolling down — hide header
          setHeaderVisible(false);
        } else if (scrollY < lastScrollY - 5) {
          // Scrolling up — show header
          setHeaderVisible(true);
        }
      } else {
        // Near top — always show
        setHeaderVisible(true);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
    setExpandedMenu(null);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const SubChevron = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <>
      {/* ══════════════════════════════════════════════ */}
      {/* TOP BAR — desktop only (UNCHANGED)            */}
      {/* ══════════════════════════════════════════════ */}
      <div
        className={`bg-brand text-white text-xs hidden lg:block relative z-50 transition-all duration-500 ${scrolled ? "py-1" : "py-2"}`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+966598480107" className="flex items-center gap-2.5 hover:text-gold transition-colors duration-300 group">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                <Phone size={12} />
              </div>
              <span dir="ltr" className="nav-text-sm">+966 598 480 107</span>
            </a>
            <a href="mailto:toptest.to@gmail.com" className="flex items-center gap-2.5 hover:text-gold transition-colors duration-300 group">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                <Mail size={12} />
              </div>
              <span className="nav-text-sm">toptest.to@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, href: "https://www.instagram.com/toptest.to", label: "Instagram" },
              { icon: Youtube, href: "https://www.youtube.com/@TOPTEST-to", label: "YouTube" },
            ].map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold/25 flex items-center justify-center hover:text-gold transition-all duration-300 hover:scale-110">
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════ */}
      {/* STICKY HEADER (UNCHANGED)                      */}
      {/* ══════════════════════════════════════════════ */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-border/30"
            : "bg-background/70 backdrop-blur-xl"
        }`}
        initial={{ y: -100 }}
        animate={{ y: headerVisible ? 0 : -100 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-11 h-11 md:w-14 md:h-14 overflow-hidden rounded-xl group-hover:shadow-[0_4px_20px_rgba(254,170,5,0.25)] transition-shadow duration-300">
                <Image src="/images/logo/logo.png" alt="TOP TEST" fill className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl text-brand dark:text-primary brand-text">TOP TEST</span>
                <span className="text-[9px] md:text-[11px] text-muted-foreground brand-sub">{lang === "ar" ? "للخدمات الغذائية" : "Food Services"}</span>
              </div>
            </Link>

            {/* Desktop Navigation — Mega Menu (UNCHANGED) */}
            <nav className="hidden lg:flex items-center gap-0.5 h-full">
              {navItems.map((item) => (
                <div
                  key={item.href + item.label}
                  className="nav-item relative h-full flex items-center"
                  onMouseEnter={() => "children" in item && item.children ? setActiveDropdown(item.label) : undefined}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {"children" in item && item.children ? (
                    <>
                      <Link href={item.href}
                        className="relative px-3.5 py-2 text-[13px] nav-text text-foreground/70 hover:text-brand dark:hover:text-primary transition-colors duration-300 group flex items-center gap-1.5 rounded-lg hover:bg-brand/5 dark:hover:bg-primary/5">
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                        <span className="absolute bottom-0.5 start-3.5 end-3.5 h-[2px] bg-gradient-to-r from-brand to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                      </Link>
                      <div className={`mega-menu absolute top-full start-0 pt-2 ${activeDropdown === item.label ? "mega-menu-active" : ""}`} style={{ minWidth: 300 }}>
                        <div className="bg-background/98 backdrop-blur-2xl rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.15)] border border-border/40 overflow-hidden">
                          <div className="h-[3px] bg-gradient-to-r from-brand via-gold to-brand" />
                          <div className="px-5 pt-4 pb-2">
                            <span className="text-[11px] text-gold uppercase body-caption">{item.label}</span>
                          </div>
                          <div className="px-2 pb-2">
                            {item.children.map((child, childIdx) => (
                              <motion.div key={child.href} initial={{ opacity: 0, x: dir === "rtl" ? 10 : -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: childIdx * 0.05 }}>
                                <Link href={child.href}
                                  className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-foreground/70 hover:text-brand dark:hover:text-primary hover:bg-brand/5 dark:hover:bg-primary/5 transition-all duration-200 group/item">
                                  {child.icon && (
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand/8 to-gold/8 dark:from-primary/8 dark:to-gold/8 flex items-center justify-center group-hover/item:from-brand/15 group-hover/item:to-gold/15 transition-all duration-300 group-hover/item:scale-105 shrink-0">
                                      <child.icon size={18} className="text-brand dark:text-primary" />
                                    </div>
                                  )}
                                  <span className="text-sm nav-text-sm block">{child.label}</span>
                                  <SubChevron size={14} className="ms-auto text-muted-foreground/40 group-hover/item:text-gold transition-all duration-300 group-hover/item:translate-x-0.5" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href}
                      className="relative px-3.5 py-2 text-[13px] nav-text text-foreground/70 hover:text-brand dark:hover:text-primary transition-colors duration-300 group rounded-lg hover:bg-brand/5 dark:hover:bg-primary/5">
                      {item.label}
                      <span className="absolute bottom-0.5 start-3.5 end-3.5 h-[2px] bg-gradient-to-r from-brand to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions (UNCHANGED) */}
            <div className="flex items-center gap-1.5">
              <Button variant="ghost" size="icon" onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className="relative rounded-full hover:bg-brand/10 dark:hover:bg-primary/10 w-9 h-9 transition-all duration-300 group"
                aria-label={lang === "ar" ? "Switch to English" : "التبديل للعربية"}>
                <Globe size={16} className="text-foreground/60 group-hover:text-brand dark:group-hover:text-primary transition-colors" />
                <span className="absolute -bottom-0.5 text-[8px] font-extrabold text-brand dark:text-primary">{lang === "ar" ? "EN" : "ع"}</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme}
                className="rounded-full hover:bg-brand/10 dark:hover:bg-primary/10 w-9 h-9 transition-all duration-300 group"
                aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>
                <AnimatePresence mode="wait">
                  {theme === "light" ? (
                    <motion.div key="moon" initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.3 }}>
                      <Moon size={16} className="text-foreground/60 group-hover:text-brand dark:group-hover:text-primary transition-colors" />
                    </motion.div>
                  ) : (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.3 }}>
                      <Sun size={16} className="text-foreground/60 group-hover:text-brand dark:group-hover:text-primary transition-colors" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
              <Link href="/contact" className="hidden md:block">
                <Button className="btn-premium bg-brand hover:bg-brand-light text-white rounded-full px-6 h-9 text-xs btn-text-sm dark:bg-primary dark:hover:bg-primary/90 shadow-[0_2px_12px_rgba(2,30,83,0.2)] hover:shadow-[0_6px_24px_rgba(2,30,83,0.3)] transition-all duration-500">
                  {t.nav.contact}
                </Button>
              </Link>
              {/* Mobile menu trigger */}
              <Button variant="ghost" size="icon"
                className="lg:hidden w-10 h-10 hover:bg-brand/10 dark:hover:bg-primary/10 rounded-xl transition-all duration-300"
                onClick={() => setMenuOpen(true)} aria-label="Open menu">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-foreground/80">
                  <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════════════════ */}
      {/* PREMIUM OFF-CANVAS MENU                               */}
      {/* — Solid white panel, full scroll, RTL-right slide     */}
      {/* ══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay — minimal blur, solid feel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel — positioned at right edge for RTL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 bottom-0 right-0 z-[9999] w-[340px] sm:w-[390px] shadow-[-20px_0_60px_rgba(0,0,0,0.12)]"
            >
              <div
                className="flex flex-col relative"
                style={{ backgroundColor: m.bg, height: '100dvh' }}
              >
                {/* ── Background Watermark ── */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <div className="relative w-[360px] h-[360px]" style={{ opacity: 0.05 }}>
                    <Image src="/images/logo/logo-square.png" alt="" fill className="object-contain" priority />
                  </div>
                </div>

                {/* ════ FIXED HEADER: Logo + Close ════ */}
                <div
                  className="relative z-20 shrink-0 px-6 pt-7 pb-5"
                  style={{ borderBottom: `1px solid ${m.border}` }}
                >
                  <div className="flex items-center justify-between">
                    <Link href="/" onClick={handleLinkClick} className="flex items-center gap-4 group">
                      <div className="relative w-[60px] h-[60px] shrink-0 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(15,61,110,0.10)] ring-1 ring-gray-100/50">
                        <Image src="/images/logo/logo-square-icon.png" alt="TOP TEST" fill className="object-contain transition-transform duration-300 group-hover:scale-105" priority />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span
                          className="text-[22px] tracking-tight leading-none brand-text"
                          style={{ color: m.blue }}
                        >
                          TOP TEST
                        </span>
                        <span
                          className="text-[11px] leading-tight mt-1.5 brand-sub"
                          style={{ color: m.gold }}
                        >
                          {lang === "ar" ? "للخدمات الغذائية" : "Food Services"}
                        </span>
                      </div>
                    </Link>
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shrink-0"
                      style={{ backgroundColor: m.iconBg, color: m.textLight }}
                      aria-label="Close menu"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* ════ SCROLLABLE BODY: Nav + Contact + Social ════ */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden relative z-10 scrollbar-menu" style={{ WebkitOverflowScrolling: 'touch' }}>
                  {/* ── Navigation ── */}
                  <div className="px-3 pt-4 pb-1">
                    {navItems.map((item, idx) => (
                      <motion.div
                        key={item.href + item.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 + idx * 0.04, duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      >
                        {"children" in item && item.children ? (
                          /* ── Parent with sub-items ── */
                          <div className="mb-1">
                            <button
                              onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
                              className="w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all duration-300 text-[15px] parent-nav-btn nav-text"
                              style={{
                                color: expandedMenu === item.label ? m.blue : m.text,
                                backgroundColor: expandedMenu === item.label ? `${m.blue}08` : "transparent",
                              }}
                              onMouseEnter={(e) => {
                                if (expandedMenu !== item.label) {
                                  e.currentTarget.style.backgroundColor = `${m.blue}06`;
                                  const arrow = e.currentTarget.querySelector('.parent-chevron') as HTMLElement;
                                  if (arrow) { arrow.style.color = m.blue; arrow.style.backgroundColor = `${m.blue}0A`; }
                                  const icon = e.currentTarget.querySelector('.parent-icon') as HTMLElement;
                                  if (icon) { icon.style.backgroundColor = `${m.blue}0E`; icon.style.color = m.blue; }
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (expandedMenu !== item.label) {
                                  e.currentTarget.style.backgroundColor = "transparent";
                                  const arrow = e.currentTarget.querySelector('.parent-chevron') as HTMLElement;
                                  if (arrow) { arrow.style.color = m.text; arrow.style.backgroundColor = "transparent"; }
                                  const icon = e.currentTarget.querySelector('.parent-icon') as HTMLElement;
                                  if (icon) { icon.style.backgroundColor = m.iconBg; icon.style.color = m.textLight; }
                                }
                              }}
                            >
                              {item.icon && (
                                <div
                                  className="parent-icon w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                                  style={{
                                    backgroundColor: expandedMenu === item.label ? `${m.blue}0E` : m.iconBg,
                                    color: expandedMenu === item.label ? m.blue : m.textLight,
                                    boxShadow: expandedMenu === item.label ? `0 2px 6px ${m.blue}12` : "none",
                                  }}
                                >
                                  <item.icon size={18} />
                                </div>
                              )}
                              <span>{item.label}</span>
                              <motion.div
                                animate={{ rotate: expandedMenu === item.label ? 180 : 0 }}
                                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                className="parent-chevron ms-auto w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                                style={{
                                  backgroundColor: expandedMenu === item.label ? `${m.blue}0A` : 'transparent',
                                  color: expandedMenu === item.label ? m.blue : m.text,
                                }}
                              >
                                <ChevronDown size={20} strokeWidth={2.5} style={{ color: 'inherit' }} />
                              </motion.div>
                            </button>

                            {/* ── Sub-items Container ── */}
                            <AnimatePresence>
                              {expandedMenu === item.label && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                  className="overflow-hidden"
                                >
                                  <div className="mx-3 mt-1.5 mb-0.5 rounded-xl overflow-hidden" style={{ backgroundColor: m.bgSub }}>
                                    {/* Gold accent line */}
                                    <div className="h-[1.5px]" style={{ background: `linear-gradient(90deg, transparent, ${m.gold}, transparent)` }} />
                                    <div className="px-2 py-1.5 space-y-0">
                                      {item.children.map((child, childIdx) => (
                                        <motion.div
                                          key={child.href}
                                          initial={{ opacity: 0, x: dir === "rtl" ? 10 : -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: childIdx * 0.04 }}
                                        >
                                          <Link
                                            href={child.href}
                                            onClick={handleLinkClick}
                                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] transition-all duration-300 group/child nav-text-sm"
                                            style={{ color: m.textLight }}
                                            onMouseEnter={(e) => {
                                              e.currentTarget.style.color = m.blue;
                                              e.currentTarget.style.backgroundColor = `${m.blue}08`;
                                              const icon = e.currentTarget.querySelector('.sub-icon') as HTMLElement;
                                              if (icon) { icon.style.backgroundColor = `${m.blue}12`; icon.style.color = m.blue; }
                                              const arrow = e.currentTarget.querySelector('.sub-arrow') as HTMLElement;
                                              if (arrow) { arrow.style.color = m.gold; arrow.style.backgroundColor = `${m.gold}10`; }
                                            }}
                                            onMouseLeave={(e) => {
                                              e.currentTarget.style.color = m.textLight;
                                              e.currentTarget.style.backgroundColor = "transparent";
                                              const icon = e.currentTarget.querySelector('.sub-icon') as HTMLElement;
                                              if (icon) { icon.style.backgroundColor = "transparent"; icon.style.color = m.textLight; }
                                              const arrow = e.currentTarget.querySelector('.sub-arrow') as HTMLElement;
                                              if (arrow) { arrow.style.color = `${m.textLight}99`; arrow.style.backgroundColor = "transparent"; }
                                            }}
                                          >
                                            {child.icon && (
                                              <div
                                                className="sub-icon w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-all duration-300 group-hover/child:scale-110"
                                                style={{ color: m.textLight }}
                                              >
                                                <child.icon size={14} />
                                              </div>
                                            )}
                                            <span>{child.label}</span>
                                            <motion.div
                                              className="ms-auto w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-all duration-300 sub-arrow"
                                              style={{ color: `${m.textLight}99` }}
                                              whileHover={{ x: dir === "rtl" ? -3 : 3 }}
                                              transition={{ duration: 0.2 }}
                                            >
                                              <SubChevron size={14} strokeWidth={2.2} style={{ color: 'inherit' }} />
                                            </motion.div>
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          /* ── Simple link ── */
                          <Link
                            href={item.href}
                            onClick={handleLinkClick}
                            className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all duration-300 text-[15px] group/item mb-1 nav-text"
                            style={{ color: m.text }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = m.blue;
                              e.currentTarget.style.backgroundColor = `${m.blue}06`;
                              const icon = e.currentTarget.querySelector('.main-icon') as HTMLElement;
                              if (icon) { icon.style.backgroundColor = `${m.blue}0E`; icon.style.color = m.blue; }
                              const arrow = e.currentTarget.querySelector('.main-link-arrow') as HTMLElement;
                              if (arrow) { arrow.style.color = m.blue; arrow.style.backgroundColor = `${m.blue}0A`; }
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = m.text;
                              e.currentTarget.style.backgroundColor = "transparent";
                              const icon = e.currentTarget.querySelector('.main-icon') as HTMLElement;
                              if (icon) { icon.style.backgroundColor = m.iconBg; icon.style.color = m.textLight; }
                              const arrow = e.currentTarget.querySelector('.main-link-arrow') as HTMLElement;
                              if (arrow) { arrow.style.color = m.text; arrow.style.backgroundColor = "transparent"; }
                            }}
                          >
                            {item.icon && (
                              <div
                                className="main-icon w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover/item:scale-105"
                                style={{ backgroundColor: m.iconBg, color: m.textLight }}
                              >
                                <item.icon size={18} />
                              </div>
                            )}
                            <span>{item.label}</span>
                            <motion.div
                              className="main-link-arrow ms-auto w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                              style={{ color: m.text }}
                              whileHover={{ x: dir === "rtl" ? -3 : 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <SubChevron size={20} strokeWidth={2.5} style={{ color: 'inherit' }} />
                            </motion.div>
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* ── Divider ── */}
                  <div className="mx-6 my-2">
                    <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${m.border}, transparent)` }} />
                  </div>

                  {/* ── Contact Info ── */}
                  <div className="px-6 py-1.5 space-y-2.5">
                    <a href="tel:+966598480107"
                      className="flex items-center gap-3.5 transition-colors duration-300 group/phone"
                      style={{ color: m.textLight }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = m.blue; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = m.textLight; }}
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover/phone:scale-110"
                        style={{ backgroundColor: m.iconBg, color: m.blue }}>
                        <Phone size={15} />
                      </div>
                      <span dir="ltr" className="text-[13px] nav-text-sm">+966 598 480 107</span>
                    </a>
                    <a href="mailto:toptest.to@gmail.com"
                      className="flex items-center gap-3.5 transition-colors duration-300 group/mail"
                      style={{ color: m.textLight }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = m.blue; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = m.textLight; }}
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover/mail:scale-110"
                        style={{ backgroundColor: m.iconBg, color: m.blue }}>
                        <Mail size={15} />
                      </div>
                      <span className="text-[13px] nav-text-sm">toptest.to@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-3.5" style={{ color: m.textLight }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: m.iconBg, color: m.blue }}>
                        <MapPin size={15} />
                      </div>
                      <span className="text-[13px] nav-text-sm">{t.contact.addressText}</span>
                    </div>
                  </div>

                  {/* ── Divider ── */}
                  <div className="mx-6 my-2">
                    <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${m.border}, transparent)` }} />
                  </div>

                  {/* ── Language & Theme ── */}
                  <div className="flex items-center justify-center gap-3 px-6 py-2.5">
                    <button
                      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[12px] transition-all duration-300 btn-text-sm"
                      style={{ backgroundColor: m.iconBg, color: m.textLight }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${m.blue}0C`; e.currentTarget.style.color = m.blue; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = m.iconBg; e.currentTarget.style.color = m.textLight; }}
                    >
                      <Globe size={14} />
                      {lang === "ar" ? "English" : "عربي"}
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[12px] transition-all duration-300 btn-text-sm"
                      style={{ backgroundColor: m.iconBg, color: m.textLight }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${m.blue}0C`; e.currentTarget.style.color = m.blue; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = m.iconBg; e.currentTarget.style.color = m.textLight; }}
                    >
                      {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
                      {theme === "light" ? (lang === "ar" ? "داكن" : "Dark") : (lang === "ar" ? "فاتح" : "Light")}
                    </button>
                  </div>

                  {/* ── Social Media ── */}
                  <div className="px-6 pt-1.5 pb-8" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom, 2rem))' }}>
                    <div className="flex items-center justify-center gap-2.5">
                      {socialLinks.map((social, idx) => (
                        <motion.div
                          key={social.label}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.04 }}
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                            style={{ backgroundColor: m.iconBg, color: m.textLight }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${m.blue}0C`; e.currentTarget.style.color = m.blue; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = m.iconBg; e.currentTarget.style.color = m.textLight; }}
                            aria-label={social.label}
                          >
                            <social.icon size={16} />
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* END scrollable body */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
