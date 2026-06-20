/**
 * Services Gallery — Image Data
 * --------------------------------------------------------------------
 * One source of truth for all 5 service "معرض الأعمال" galleries:
 *   - hospitality, events, coffee-carts, beverages, snacks
 *   (school-canteens is wired separately via CanteensGallery)
 *
 * Each entry includes the real image dimensions (read from the original
 * uploaded files) so Next.js <Image> can reserve the proper aspect-ratio
 * box and prevent layout shift. Images are served as-is (next.config.ts
 * has `images.unoptimized: true`) so original quality is preserved.
 *
 * NOTE: Each service uses ONLY its own images — no image is reused across
 * services. This rule is enforced by the folder structure itself:
 *   /public/images/services-gallery/<service-slug>/<service-slug>-NN.jpg
 */

import type { CanteenGalleryImage } from "@/components/ui/canteens-gallery";

/* ------------------------------------------------------------------ */
/*  Helper: build a uniform image array from a list of filenames       */
/* ------------------------------------------------------------------ */
function buildImages(
  serviceSlug: string,
  files: Array<{ name: string; width: number; height: number }>,
  captionAr: string,
  captionEn: string
): CanteenGalleryImage[] {
  return files.map(({ name, width, height }) => ({
    src: `/images/services-gallery/${serviceSlug}/${name}`,
    alt: `TOP TEST - ${serviceSlug} - ${name}`,
    captionAr,
    captionEn,
    width,
    height,
  }));
}

/* ------------------------------------------------------------------ */
/*  Hospitality  (الضيافة والبوفيهات) — 9 images                       */
/* ------------------------------------------------------------------ */
export const hospitalityGalleryImages: CanteenGalleryImage[] = buildImages(
  "hospitality",
  [
    { name: "hospitality-01.jpg", width: 1536, height: 1024 },
    { name: "hospitality-02.jpg", width: 1536, height: 1024 },
    { name: "hospitality-03.jpg", width: 1536, height: 1024 },
    { name: "hospitality-04.jpg", width: 1536, height: 1024 },
    { name: "hospitality-05.jpg", width: 1536, height: 1024 },
    { name: "hospitality-06.jpg", width: 1536, height: 1024 },
    { name: "hospitality-07.jpg", width: 1536, height: 1024 },
    { name: "hospitality-08.jpg", width: 1536, height: 1024 },
    { name: "hospitality-09.jpg", width: 1536, height: 1024 },
  ],
  "ضيافة وبوفيهات راقية من إعداد TOP TEST",
  "Premium hospitality & buffet by TOP TEST"
);

/* ------------------------------------------------------------------ */
/*  Events  (الفعاليات) — 5 images                                     */
/* ------------------------------------------------------------------ */
export const eventsGalleryImages: CanteenGalleryImage[] = buildImages(
  "events",
  [
    { name: "events-01.jpg", width: 1536, height: 1024 },
    { name: "events-02.jpg", width: 1536, height: 1024 },
    { name: "events-03.jpg", width: 1535, height: 1024 },
    { name: "events-04.jpg", width: 1402, height: 1122 },
    { name: "events-05.jpg", width: 1536, height: 1024 },
  ],
  "تنظيم فعاليات احترافية بمعايير عالمية",
  "Professional event management to global standards"
);

/* ------------------------------------------------------------------ */
/*  Coffee Carts  (عربات القهوة) — 7 images                            */
/* ------------------------------------------------------------------ */
export const coffeeCartsGalleryImages: CanteenGalleryImage[] = buildImages(
  "coffee-carts",
  [
    { name: "coffee-carts-01.jpg", width: 1536, height: 1024 },
    { name: "coffee-carts-02.jpg", width: 1536, height: 1024 },
    { name: "coffee-carts-03.jpg", width: 1402, height: 1122 },
    { name: "coffee-carts-04.jpg", width: 1536, height: 1024 },
    { name: "coffee-carts-05.jpg", width: 1536, height: 1024 },
    { name: "coffee-carts-06.jpg", width: 1536, height: 1024 },
    { name: "coffee-carts-07.jpg", width: 1536, height: 1024 },
  ],
  "عربات قهوة عصرية بخدمة مميزة",
  "Modern coffee carts with distinguished service"
);

/* ------------------------------------------------------------------ */
/*  Beverages  (المشروبات) — 11 images                                 */
/* ------------------------------------------------------------------ */
export const beveragesGalleryImages: CanteenGalleryImage[] = buildImages(
  "beverages",
  [
    { name: "beverages-01.jpg", width: 1398, height: 1125 },
    { name: "beverages-02.jpg", width: 1402, height: 1122 },
    { name: "beverages-03.jpg", width: 1536, height: 1024 },
    { name: "beverages-04.jpg", width: 1536, height: 1024 },
    { name: "beverages-05.jpg", width: 1536, height: 1024 },
    { name: "beverages-06.jpg", width: 1536, height: 1024 },
    { name: "beverages-07.jpg", width: 1536, height: 1024 },
    { name: "beverages-08.jpg", width: 1536, height: 1024 },
    { name: "beverages-09.jpg", width: 1536, height: 1024 },
    { name: "beverages-10.jpg", width: 1536, height: 1024 },
    { name: "beverages-11.jpg", width: 1536, height: 1024 },
  ],
  "تشكيلة مشروبات منعشة بأعلى جودة",
  "A refreshing variety of high-quality beverages"
);

/* ------------------------------------------------------------------ */
/*  Snacks  (الوجبات الخفيفة) — 23 images                              */
/* ------------------------------------------------------------------ */
export const snacksGalleryImages: CanteenGalleryImage[] = buildImages(
  "snacks",
  [
    { name: "snacks-01.jpg", width: 1536, height: 1024 },
    { name: "snacks-02.jpg", width: 1536, height: 1024 },
    { name: "snacks-03.jpg", width: 1448, height: 1086 },
    { name: "snacks-04.jpg", width: 1536, height: 1024 },
    { name: "snacks-05.jpg", width: 1536, height: 1024 },
    { name: "snacks-06.jpg", width: 1536, height: 1024 },
    { name: "snacks-07.jpg", width: 1536, height: 1024 },
    { name: "snacks-08.jpg", width: 1536, height: 1024 },
    { name: "snacks-09.jpg", width: 1536, height: 1024 },
    { name: "snacks-10.jpg", width: 1536, height: 1024 },
    { name: "snacks-11.jpg", width: 1536, height: 1024 },
    { name: "snacks-12.jpg", width: 1536, height: 1024 },
    { name: "snacks-13.jpg", width: 1536, height: 1024 },
    { name: "snacks-14.jpg", width: 1536, height: 1024 },
    { name: "snacks-15.jpg", width: 1536, height: 1024 },
    { name: "snacks-16.jpg", width: 1536, height: 1024 },
    { name: "snacks-17.jpg", width: 1536, height: 1024 },
    { name: "snacks-18.jpg", width: 1536, height: 1024 },
    { name: "snacks-19.jpg", width: 1536, height: 1024 },
    { name: "snacks-20.jpg", width: 1536, height: 1024 },
    { name: "snacks-21.jpg", width: 1536, height: 1024 },
    { name: "snacks-22.jpg", width: 1536, height: 1024 },
    { name: "snacks-23.jpg", width: 1536, height: 1024 },
  ],
  "وجبات خفيفة متنوعة بسرعة خدمة وجودة عالية",
  "A variety of snacks with fast service and high quality"
);
