import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "وصول — نظام تشغيل المتجر بالذكاء الاصطناعي",
  description:
    "4 موظفين ذكاء اصطناعي يُشغّلون متجرك على واتساب 24/7. ربط سلة في دقيقتين. ابدأ مجاناً.",
  openGraph: {
    title: "وصول — نظام تشغيل المتجر بالذكاء الاصطناعي",
    description:
      "4 موظفين ذكاء اصطناعي يُشغّلون متجرك على واتساب 24/7. ربط سلة في دقيقتين. ابدأ مجاناً.",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${ibmArabic.variable} ${jetbrains.variable} font-arabic antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
