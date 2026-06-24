import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Tajawal } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-heading",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-body",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toptest.sa"),
  title: {
    default: "TOP TEST للخدمات الغذائية | School Catering & Hospitality",
    template: "%s | TOP TEST",
  },
  description:
    "توب تست للخدمات الغذائية — شريككم الموثوق في تقديم أعلى معايير التغذية المدرسية والضيافة وإدارة الفعاليات في المملكة العربية السعودية. TOP TEST Food Services - Your trusted partner in school catering, hospitality, and event management.",
  keywords: [
    "المقاصف المدرسية",
    "التغذية المدرسية",
    "الضيافة",
    "الفعاليات",
    "عربات القهوة",
    "الخدمات الغذائية",
    "School Catering",
    "Hospitality Services",
    "Events Management",
    "Saudi Arabia",
    "السعودية",
    "توب تست",
    "TOP TEST",
  ],
  authors: [{ name: "TOP TEST Food Services" }],
  icons: {
    icon: [
      { url: "/images/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/images/logo/favicon.ico",
    apple: "/images/logo/apple-touch-icon.png",
    other: [
      { url: "/images/logo/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "TOP TEST للخدمات الغذائية",
    description:
      "شريككم الموثوق في تقديم أعلى معايير التغذية المدرسية والضيافة وإدارة الفعاليات في المملكة العربية السعودية",
    url: "https://toptest.sa",
    siteName: "TOP TEST Food Services",
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "TOP TEST Food Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOP TEST للخدمات الغذائية",
    description:
      "شريككم الموثوق في تقديم أعلى معايير التغذية المدرسية والضيافة وإدارة الفعاليات",
    images: ["/images/logo/logo.png"],
  },
  alternates: {
    canonical: "https://toptest.sa",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Inline loading screen — shows instantly before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var ls=document.createElement('div');
                ls.id='pre-loader';
                ls.style.cssText='position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#FFF;transition:opacity 0.6s cubic-bezier(0.4,0,0.2,1);';
                ls.innerHTML='<div style="display:flex;flex-direction:column;align-items:center;"><div style="width:140px;height:140px;animation:preLogoIn 0.8s cubic-bezier(0.4,0,0.2,1) forwards;opacity:0;"><img src="/images/logo/logo-loading.png" alt="TOP TEST" style="width:100%;height:100%;object-fit:contain;" /></div><div style="margin-top:24px;width:100px;height:1.5px;border-radius:9999px;overflow:hidden;animation:preLineIn 0.3s 0.35s forwards;opacity:0;"><div style="width:100%;height:100%;background:linear-gradient(90deg,transparent,#D4A437,#D4A437,transparent);transform:scaleX(0);animation:preLineGrow 0.7s 0.45s cubic-bezier(0.4,0,0.2,1) forwards;"></div></div></div>';
                document.documentElement.appendChild(ls);
                var s=document.createElement('style');
                s.textContent='@keyframes preLogoIn{0%{opacity:0;transform:scale(0.9);filter:blur(6px)}100%{opacity:1;transform:scale(1);filter:blur(0px)}}@keyframes preLineIn{0%{opacity:0}100%{opacity:1}}@keyframes preLineGrow{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}';
                document.head.appendChild(s);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TOP TEST Food Services",
              nameAr: "توب تست للخدمات الغذائية",
              url: "https://toptest.sa",
              logo: "https://toptest.sa/images/logo/logo.png",
              description:
                "شريككم الموثوق في تقديم أعلى معايير التغذية المدرسية والضيافة وإدارة الفعاليات في المملكة العربية السعودية",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
                addressRegion: "Riyadh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+966598480107",
                contactType: "customer service",
                availableLanguage: ["Arabic", "English"],
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61590412305704",
                "https://www.instagram.com/toptest.to",
                "https://www.youtube.com/@TOPTEST-to",
                "https://www.snapchat.com/add/top_test",
                "https://www.tiktok.com/@top.test85",
                "https://www.linkedin.com/in/top-test-5871a2416",
                "https://x.com/TopTest_to",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${ibmPlexArabic.variable} ${tajawal.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          <LoadingScreen />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
