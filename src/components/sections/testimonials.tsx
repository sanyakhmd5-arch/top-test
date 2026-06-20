"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { AnimateOnScroll } from "@/components/ui/animate";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const testimonials = {
  ar: [
    {
      name: "أ. محمد العتيبي",
      role: "مدير مدارس الرواد الأهلية",
      text: "تعاوننا مع TOP TEST أحدث نقلة نوعية حقيقية في جودة الوجبات المقدمة لطلابنا. التزامهم الصارم بأعلى معايير النظافة والتنوع المبتكر في الوجبات منحنا ثقة مطلقة في صحة أبنائنا الطلاب.",
      rating: 5,
      avatar: "/images/testimonials/person1.png",
    },
    {
      name: "أ. فهد الدوسري",
      role: "مشرف التغذية - مدارس النخبة",
      text: "منذ بدء شراكتنا مع TOP TEST، شهدنا ارتفاعًا ملحوظًا في رضا الطلاب وأولياء الأمور. فريقهم يتعامل بمسؤولية استثنائية واحترافية تجعلنا نثق بأن تغذية طلابنا في أيدٍ أمينة.",
      rating: 5,
      avatar: "/images/testimonials/person2.png",
    },
    {
      name: "أ. سارة القحطاني",
      role: "مديرة قسم الضيافة - شركة الرياض القابضة",
      text: "خدمات الضيافة التي قدمتها TOP TEST في فعالياتنا كانت على مستوى يفوق التوقعات. الاهتمام الاستثنائي بالتفاصيل وجودة الطعام جعلا كل مناسبة لحظة تُذكر بالامتنان.",
      rating: 5,
      avatar: "/images/testimonials/person3.png",
    },
    {
      name: "أ. خالد المالكي",
      role: "مدير العمليات - مدارس المستقبل",
      text: "ما يميز TOP TEST هو الالتزام المطلق بالمواعيد والجودة التي لا تتغير. لم نتأخر يومًا عن تقديم الوجبات — وهذا يعكس مستوى احترافية نادر في إدارة الخدمات الغذائية.",
      rating: 5,
      avatar: "/images/testimonials/person4.png",
    },
    {
      name: "أ. نورة الشمري",
      role: "مسؤولة الفعاليات - مؤسسة التعليم الأهلي",
      text: "عربات القهوة والضيافة المتنقلة من TOP TEST أضافت لمسة فاخرة لا تُنسى لجميع فعالياتنا. ضيوفنا كانوا دائمًا يُثنون على جودة الخدمة والتقديم الأنيق الذي يليق بالمناسبات الراقية.",
      rating: 5,
      avatar: "/images/testimonials/person5.png",
    },
  ],
  en: [
    {
      name: "Mr. Mohammed Al-Otaibi",
      role: "Director, Al-Ruwad Private Schools",
      text: "Our partnership with TOP TEST has brought a genuine transformation in the quality of meals for our students. Their strict commitment to hygiene standards and innovative meal variety gives us absolute confidence in our students' health.",
      rating: 5,
      avatar: "/images/testimonials/person1.png",
    },
    {
      name: "Mr. Fahd Al-Dosari",
      role: "Nutrition Supervisor, Al-Nukhba Schools",
      text: "Since partnering with TOP TEST, we've witnessed a remarkable rise in student and parent satisfaction. Their team handles everything with exceptional responsibility and professionalism that makes us trust our students' nutrition is in safe hands.",
      rating: 5,
      avatar: "/images/testimonials/person2.png",
    },
    {
      name: "Ms. Sarah Al-Qahtani",
      role: "Hospitality Manager, Riyadh Holding",
      text: "TOP TEST's hospitality services at our events exceeded all expectations. Their extraordinary attention to detail and food quality made every occasion a moment remembered with gratitude.",
      rating: 5,
      avatar: "/images/testimonials/person3.png",
    },
    {
      name: "Mr. Khalid Al-Malki",
      role: "Operations Director, Future Schools",
      text: "What distinguishes TOP TEST is their absolute punctuality and unwavering quality. Meals are never delayed — reflecting a level of professionalism that is rare in food service management.",
      rating: 5,
      avatar: "/images/testimonials/person4.png",
    },
    {
      name: "Ms. Noura Al-Shamri",
      role: "Events Manager, Private Education Foundation",
      text: "TOP TEST's coffee carts and mobile hospitality added an unforgettable luxurious touch to all our events. Guests consistently praised the service quality and elegant presentation befitting premium occasions.",
      rating: 5,
      avatar: "/images/testimonials/person5.png",
    },
  ],
};

export function TestimonialsSection() {
  const { lang, t } = useI18n();
  const items = lang === "ar" ? testimonials.ar : testimonials.en;

  return (
    <section className="section-premium gradient-border-top overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand/10 dark:bg-primary/10 text-brand dark:text-primary rounded-full text-sm mb-5 body-caption">
            <Quote size={16} />
            {lang === "ar" ? "آراء عملائنا" : "Client Testimonials"}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-foreground mb-5 heading-section">
            {lang === "ar" ? "شهادات عملائنا هي أقوى دليل على تميزنا" : "Our Clients' Testimonials Are the Strongest Proof of Our Excellence"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg body-large">
            {lang === "ar"
              ? "نفخر بشراكاتنا مع أبرز المؤسسات التعليمية والشركات في المملكة — وشهاداتهم تتحدث"
              : "We pride ourselves on our partnerships with the Kingdom's leading institutions and companies — and their words speak volumes"}
          </p>
        </AnimateOnScroll>
      </div>

      {/* Testimonials Slider */}
      <div className="relative pb-4">
        <div className="absolute start-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-e from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute end-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-s from-background to-transparent z-10 pointer-events-none" />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={true}
          className="testimonials-swiper"
        >
          {[...items, ...items].map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="premium-card rounded-2xl p-6 md:p-8 mx-1 h-full flex flex-col justify-between">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-[#D4A437] text-[#D4A437]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm md:text-base text-muted-foreground mb-6 line-clamp-4 body-small">
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-gold/20">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-foreground heading-minor">{item.name}</p>
                    <p className="text-xs text-muted-foreground body-caption">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
