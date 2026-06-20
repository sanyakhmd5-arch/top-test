"use client";

import React, { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { AnimateOnScroll } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Headphones } from "lucide-react";

export function ContactSection() {
  const { lang, t } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section-premium bg-muted/30 gradient-border-top">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand/10 dark:bg-primary/10 text-brand dark:text-primary rounded-full text-sm mb-5 body-caption">
            <Headphones size={16} />
            {t.contact.title}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-foreground mb-5 heading-section">
            {t.contact.subtitle}
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info - Premium cards */}
          <AnimateOnScroll direction="right">
            <div className="space-y-4">
              {[
                { icon: MapPin, color: "from-brand/10 to-brand-light/5 dark:from-primary/10 dark:to-primary/5", iconColor: "text-brand dark:text-primary", title: t.contact.address, content: t.contact.addressText, href: null },
                { icon: Phone, color: "from-brand/10 to-brand-light/5 dark:from-primary/10 dark:to-primary/5", iconColor: "text-brand dark:text-primary", title: t.contact.phoneLabel, content: "+966 598 480 107", href: "tel:+966598480107", dir: "ltr" },
                { icon: Mail, color: "from-brand/10 to-brand-light/5 dark:from-primary/10 dark:to-primary/5", iconColor: "text-brand dark:text-primary", title: t.contact.emailLabel, content: "toptest.to@gmail.com", href: "mailto:toptest.to@gmail.com" },
                { icon: MessageCircle, color: "from-green-500/10 to-green-600/5 dark:from-green-500/10 dark:to-green-600/5", iconColor: "text-green-600", title: t.contact.whatsapp, content: lang === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp", href: "https://wa.me/966598480107", external: true },
              ].map((item, idx) => {
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? {
                      href: item.href,
                      ...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
                    }
                  : {};

                return (
                  <div key={idx} className="premium-card card-glow rounded-2xl p-5 md:p-6 group">
                    <Wrapper {...wrapperProps} className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={item.iconColor} size={22} />
                      </div>
                      <div>
                        <h4 className="text-foreground mb-0.5 text-sm heading-minor">{item.title}</h4>
                        <p className="text-sm text-muted-foreground body-small" dir={item.dir as "ltr" | "rtl" | undefined}>
                          {item.content}
                        </p>
                      </div>
                    </Wrapper>
                  </div>
                );
              })}

              {/* Google Maps */}
              <div className="premium-card rounded-2xl overflow-hidden">
                <div className="aspect-video w-full">
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
            </div>
          </AnimateOnScroll>

          {/* Contact Form - Premium */}
          <AnimateOnScroll direction="left">
            <div className="premium-card card-glow rounded-2xl p-6 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-green-600" size={36} />
                  </div>
                  <h3 className="text-xl text-foreground mb-2 heading-card">
                    {lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!"}
                  </h3>
                  <p className="text-sm text-muted-foreground body-small">
                    {lang === "ar" ? "سنتواصل معك في أقرب وقت" : "We will get back to you soon"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-foreground mb-2 heading-minor">
                      {t.contact.name}
                    </label>
                    <Input
                      required
                      placeholder={lang === "ar" ? "أدخل اسمك" : "Enter your name"}
                      className="rounded-xl h-12 bg-muted/50 border-border/50 focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2 heading-minor">
                      {t.contact.email}
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder={lang === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                      className="rounded-xl h-12 bg-muted/50 border-border/50 focus:border-gold transition-colors"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2 heading-minor">
                      {t.contact.phone}
                    </label>
                    <Input
                      type="tel"
                      placeholder={lang === "ar" ? "أدخل رقم الجوال" : "Enter your phone"}
                      className="rounded-xl h-12 bg-muted/50 border-border/50 focus:border-gold transition-colors"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2 heading-minor">
                      {t.contact.message}
                    </label>
                    <Textarea
                      required
                      rows={5}
                      placeholder={lang === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                      className="rounded-xl bg-muted/50 border-border/50 focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="btn-premium w-full bg-brand hover:bg-brand-light dark:bg-primary dark:hover:bg-primary/90 text-white rounded-xl h-12 btn-text shadow-[0_4px_20px_rgba(2,30,83,0.2)] hover:shadow-[0_8px_30px_rgba(2,30,83,0.3)] transition-all duration-500"
                  >
                    <Send className="me-2" size={18} />
                    {t.contact.send}
                  </Button>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
