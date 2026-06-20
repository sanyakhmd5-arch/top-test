export interface Service {
  id: string;
  icon: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "school-catering",
    icon: "UtensilsCrossed",
    titleAr: "المقاصف المدرسية",
    titleEn: "School Catering",
    descriptionAr:
      "نُدير المقاصف المدرسية بمعايير استثنائية تتجاوز المألوف، ونقدم وجبات صحية متوازنة صُممت بعناية لتحقيق الاحتياجات الغذائية اليومية للطلاب. قوائمنا المتجددة تراعي القيمة الغذائية لكل مرحلة عمرية، مع التزام صارم بمعايير السلامة الغذائية العالمية يجعلنا الخيار الأوثق للمؤسسات التعليمية.",
    descriptionEn:
      "We manage school cafeterias with exceptional standards that go beyond the ordinary, delivering healthy balanced meals carefully designed to meet students' daily nutritional needs. Our ever-evolving menus account for the nutritional requirements of each age group, with a strict commitment to global food safety standards that makes us the most trusted choice for educational institutions.",
    featuresAr: [
      "وجبات يومية صحية صُممت بعناية فائقة",
      "التزام صارم بمعايير السلامة الغذائية العالمية",
      "قوائم متجددة تراعي التنوع والتوازن",
      "إدارة احترافية ترتقي بتجربة المقصف",
      "رقابة صحية دائمة لا تتوقف",
      "تغذية مخصصة لكل مرحلة عمرية",
    ],
    featuresEn: [
      "Carefully crafted daily healthy meals",
      "Strict compliance with global food safety standards",
      "Ever-evolving menus emphasizing variety and balance",
      "Professional management that elevates the cafeteria experience",
      "Uninterrupted health monitoring and oversight",
      "Age-appropriate nutrition tailored for each stage",
    ],
    image: "/images/services/school-catering.webp",
  },
  {
    id: "hospitality",
    icon: "Wine",
    titleAr: "الضيافة والبوفيهات",
    titleEn: "Hospitality & Buffets",
    descriptionAr:
      "ضيافة فاخرة وبوفيهات استثنائية تليق بأرقى المناسبات وأكبر المؤسسات. نصنع تجربة ضيافة تجمع بين الأناقة الراقية والجودة المتقنة، مع قوائم طعام صُممت بعناية فائقة لتتجاوز أعلى التوقعات. فريقنا المتخصص يحوّل كل مناسبة إلى لحظة استثنائية تُذكر بالتقدير.",
    descriptionEn:
      "Luxury hospitality and exceptional buffets befitting the finest occasions and largest institutions. We craft a hospitality experience that combines refined elegance with meticulous quality, with menus designed with extraordinary care to surpass the highest expectations. Our specialized team transforms every occasion into an exceptional moment remembered with appreciation.",
    featuresAr: [
      "بوفيهات فاخرة تليق بأرقى المناسبات",
      "تقديم أنيق يجسد الاحترافية الراقية",
      "قوائم مخصصة لكل مناسبة بلا قوالب جاهزة",
      "فريق خدمة مدرب على أعلى المستويات",
      "تشكيلة أطباق تُبهر أذواق الضيوف",
      "تجهيزات حديثة تواكب أحدث المعايير",
    ],
    featuresEn: [
      "Luxury buffets befitting the finest occasions",
      "Elegant presentation embodying refined professionalism",
      "Customized menus for every occasion — no cookie-cutter templates",
      "Service team trained to the highest standards",
      "Dish selections that captivate guests' palates",
      "State-of-the-art equipment meeting the latest standards",
    ],
    image: "/images/services/hospitality.webp",
  },
  {
    id: "events",
    icon: "PartyPopper",
    titleAr: "الفعاليات",
    titleEn: "Events Management",
    descriptionAr:
      "إدارة متكاملة للفعاليات من التخطيط إلى التنفيذ، مع خدمات غذائية شاملة تصنع الفارق. فريقنا المحترف يتولى كل التفاصيل بدقة متناهية ليحوّل فعاليتكم إلى نجاح يُحتذى به وتجربة لا تُنسى لكل ضيف.",
    descriptionEn:
      "Comprehensive event management from planning to execution, with full catering services that make the difference. Our professional team handles every detail with extraordinary precision, transforming your event into a benchmark success and an unforgettable experience for every guest.",
    featuresAr: [
      "تخطيط واستراتيجية تنفيذية متكاملة",
      "خدمات غذائية شاملة تتجاوز التوقعات",
      "فريق تنظيم بخبرة عميقة واحترافية",
      "تجهيزات وتصاميم بيئة جذابة ومميزة",
      "التزام دقيق بالجداول الزمنية بلا تأخير",
      "حلول مبتكرة تُصمم لكل فعالية على حدة",
    ],
    featuresEn: [
      "Integrated planning and executive strategy",
      "Comprehensive catering services that surpass expectations",
      "Organizing team with deep expertise and professionalism",
      "Attractive setups and distinctive environmental design",
      "Precise adherence to timelines with zero delays",
      "Innovative solutions custom-designed for each event",
    ],
    image: "/images/services/events.webp",
  },
  {
    id: "coffee-carts",
    icon: "Coffee",
    titleAr: "عربات القهوة والمشروبات",
    titleEn: "Coffee & Beverage Carts",
    descriptionAr:
      "عربات قهوة ومشروبات راقية تضفي لمسة فاخرة على أي مناسبة أو مؤسسة. نقدم تجربة مشروبات مختصة مع خدمة احترافية تليق بالضيوف، في عربات مجهزة بتصاميم عصرية ومعدات متطورة تجعل كل رشفة لحظة مميزة.",
    descriptionEn:
      "Premium coffee and beverage carts that add a luxurious touch to any occasion or institution. We deliver a specialty beverage experience with professional service worthy of your guests, in carts equipped with contemporary designs and advanced equipment that make every sip a memorable moment.",
    featuresAr: [
      "قهوة مختصة بمواصفات عالمية",
      "تشكيلة مشروبات ساخنة وباردة فاخرة",
      "تصاميم عصرية أنيقة تليق بالمناسبات",
      "خدمة سريعة باحترافية لا مساومة فيها",
      "معدات متطورة تضمن الجودة في كل كوب",
      "مرنة ومناسبة لجميع أنواع المناسبات",
    ],
    featuresEn: [
      "Specialty coffee meeting international standards",
      "Premium selection of hot and cold beverages",
      "Contemporary elegant designs befitting any occasion",
      "Swift service with uncompromising professionalism",
      "Advanced equipment ensuring quality in every cup",
      "Flexible and suitable for all types of occasions",
    ],
    image: "/images/services/coffee-carts.webp",
  },
];
