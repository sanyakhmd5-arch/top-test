"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/ui/animate";
import { PremiumPageHero } from "@/components/ui/premium-page-hero";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  User,
  Briefcase,
  PhoneCall,
  HeadphonesIcon,
  UserCheck,
} from "lucide-react";
import {
  Facebook,
  Instagram,
  Youtube,
  Snapchat,
  TikTok,
  LinkedIn,
  X,
} from "@/components/ui/social-icons";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61590412305704", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Instagram, href: "https://www.instagram.com/toptest.to", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Youtube, href: "https://www.youtube.com/@TOPTEST-to", label: "YouTube", color: "hover:bg-red-600" },
  { icon: Snapchat, href: "https://www.snapchat.com/add/top_test", label: "Snapchat", color: "hover:bg-yellow-500" },
  { icon: TikTok, href: "https://www.tiktok.com/@top.test85", label: "TikTok", color: "hover:bg-gray-800" },
  { icon: LinkedIn, href: "https://www.linkedin.com/in/top-test-5871a2416", label: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: X, href: "https://x.com/TopTest_to", label: "X", color: "hover:bg-gray-900" },
];

interface TeamMember {
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  phone: string;
  phoneDisplay: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accentGradient: string;
  iconBg: string;
}

const teamMembers: TeamMember[] = [
  {
    nameAr: "ثامر العنزي",
    nameEn: "Thamer Al-Anazi",
    roleAr: "مدير الإدارة العامة",
    roleEn: "General Manager",
    phone: "+966593947477",
    phoneDisplay: "0593947477",
    icon: Briefcase,
    accentGradient: "from-[#0F3D6E] to-[#021E53]",
    iconBg: "bg-brand/10 dark:bg-primary/10",
  },
  {
    nameAr: "محمد مرسي",
    nameEn: "Mohammed Morsi",
    roleAr: "مدير المؤسسة (مدير التشغيل)",
    roleEn: "Operations Manager",
    phone: "+966598480107",
    phoneDisplay: "0598480107",
    icon: HeadphonesIcon,
    accentGradient: "from-[#0F3D6E] to-[#021E53]",
    iconBg: "bg-brand/10 dark:bg-primary/10",
  },
  {
    nameAr: "عبد الباقي إدريس",
    nameEn: "Abdulbaqi Idris",
    roleAr: "المحاسب",
    roleEn: "Accountant",
    phone: "+966538267753",
    phoneDisplay: "0538267753",
    icon: UserCheck,
    accentGradient: "from-[#0F3D6E] to-[#021E53]",
    iconBg: "bg-brand/10 dark:bg-primary/10",
  },
  {
    nameAr: "يوسف محمد",
    nameEn: "Youssef Mohammed",
    roleAr: "المندوب",
    roleEn: "Representative",
    phone: "+966552448452",
    phoneDisplay: "0552448452",
    icon: PhoneCall,
    accentGradient: "from-[#0F3D6E] to-[#021E53]",
    iconBg: "bg-brand/10 dark:bg-primary/10",
  },
];

export default function ContactPage() {
  const { lang, t } = useI18n();
  const isAr = lang === "ar";

  return (
    <>
      {/* Hero Banner - Premium */}
      <PremiumPageHero
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        breadcrumbs={[
          { label: t.contact.title },
        ]}
        backgroundImage="/images/hero/contact.webp"
        personality="contact"
      />

      {/* ─── Professional Introduction ─── */}
      <section className="section-premium pb-0">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-12 h-[2px] bg-gold/60 mx-auto mb-5 rounded-full" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed body-large">
                {isAr
                  ? "نسعد بالتواصل معكم والإجابة على جميع استفساراتكم المتعلقة بخدمات TOP TEST. فريقنا جاهز لخدمتكم وتقديم الدعم اللازم لضمان أفضل تجربة ممكنة للمؤسسات التعليمية والفعاليات داخل المملكة العربية السعودية."
                  : "We are pleased to communicate with you and answer all your inquiries regarding TOP TEST services. Our team is ready to serve you and provide the necessary support to ensure the best possible experience for educational institutions and events within the Kingdom of Saudi Arabia."}
              </p>
              <div className="mt-5 w-12 h-[2px] bg-gold/60 mx-auto rounded-full" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Direct Communication Team ─── */}
      <section className="section-premium pt-8 md:pt-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <AnimateOnScroll direction="up" delay={0.15}>
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-3xl text-foreground heading-section mb-3">
                {isAr ? "فريق التواصل المباشر" : "Direct Communication Team"}
              </h2>
              <p className="text-muted-foreground body-caption max-w-xl mx-auto">
                {isAr
                  ? "تواصل مباشرة مع مسؤولي المؤسسة للحصول على الدعم والاستفسارات"
                  : "Connect directly with our team for support and inquiries"}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Team Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => (
              <StaggerItem key={idx}>
                <div className="group premium-card card-glow rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(15,61,110,0.15)] dark:hover:shadow-[0_8px_40px_rgba(254,170,5,0.08)] hover:-translate-y-1">
                  {/* Top Accent Bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${member.accentGradient} relative`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-5 md:p-6">
                    {/* Icon & Name */}
                    <div className="flex flex-col items-center text-center mb-5">
                      {/* Role Icon */}
                      <div className={`w-16 h-16 rounded-2xl ${member.iconBg} flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_4px_20px_rgba(15,61,110,0.15)] dark:group-hover:shadow-[0_4px_20px_rgba(254,170,5,0.1)]`}>
                        <member.icon size={28} className="text-brand dark:text-primary group-hover:text-gold transition-colors duration-500" />
                      </div>

                      {/* Role Title */}
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider mb-1.5 body-caption">
                        {isAr ? member.roleAr : member.roleEn}
                      </span>

                      {/* Name */}
                      <h3 className="text-lg font-bold text-foreground heading-minor">
                        {isAr ? member.nameAr : member.nameEn}
                      </h3>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-5" />

                    {/* Phone Number */}
                    <div className="text-center mb-5">
                      <span className="text-sm text-muted-foreground body-caption" dir="ltr">
                        {member.phoneDisplay}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {/* Call Button */}
                      <a
                        href={`tel:${member.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-brand dark:bg-primary text-white text-sm font-medium transition-all duration-300 hover:bg-[#021E53] dark:hover:bg-primary/80 hover:shadow-[0_4px_16px_rgba(15,61,110,0.3)]"
                        aria-label={isAr ? `اتصال بـ ${member.nameAr}` : `Call ${member.nameEn}`}
                      >
                        <Phone size={16} />
                        <span>{isAr ? "اتصال" : "Call"}</span>
                      </a>

                      {/* WhatsApp Button */}
                      <a
                        href={`https://wa.me/${member.phone.replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-[#25D366] text-white text-sm font-medium transition-all duration-300 hover:bg-[#20BD5A] hover:shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
                        aria-label={isAr ? `واتساب ${member.nameAr}` : `WhatsApp ${member.nameEn}`}
                      >
                        <MessageCircle size={16} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Contact Information & Map ─── */}
      <section className="section-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Info Column */}
            <AnimateOnScroll direction="right">
              <div className="space-y-5">
                <h2 className="text-2xl text-foreground mb-6 heading-section">
                  {isAr ? "معلومات التواصل" : "Contact Information"}
                </h2>

                {[
                  { icon: MapPin, color: "from-brand/10 to-brand-light/5 dark:from-primary/10 dark:to-primary/5", iconColor: "text-brand dark:text-primary", title: t.contact.address, content: t.contact.addressText },
                  { icon: Phone, color: "from-brand/10 to-brand-light/5 dark:from-primary/10 dark:to-primary/5", iconColor: "text-brand dark:text-primary", title: t.contact.phoneLabel, content: "+966 598 480 107", dir: "ltr" },
                  { icon: Mail, color: "from-brand/10 to-brand-light/5 dark:from-primary/10 dark:to-primary/5", iconColor: "text-brand dark:text-primary", title: t.contact.emailLabel, content: "toptest.to@gmail.com" },
                  { icon: MessageCircle, color: "from-green-500/10 to-green-600/5", iconColor: "text-green-600", title: "WhatsApp", content: isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp" },
                ].map((item, idx) => (
                  <div key={idx} className="premium-card card-glow rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(15,61,110,0.1)] dark:hover:shadow-[0_4px_20px_rgba(254,170,5,0.06)] hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                        <item.icon className={item.iconColor} size={22} />
                      </div>
                      <div>
                        <h4 className="text-foreground mb-0.5 text-sm heading-minor">{item.title}</h4>
                        <p className="text-sm text-muted-foreground" dir={(item as any).dir as "ltr" | "rtl" | undefined}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-2">
                  <h3 className="text-foreground mb-4 heading-minor">{t.footer.followUs}</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md`}
                        aria-label={social.label}
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Map Column */}
            <AnimateOnScroll direction="left">
              <div className="premium-card card-glow rounded-2xl overflow-hidden h-full min-h-[320px] md:min-h-[400px]">
                <div className="aspect-video w-full h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.2!2d46.5!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02866b587b87%3A0x8e4e5e5e5e5e5e5e!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sar!2ssa!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
