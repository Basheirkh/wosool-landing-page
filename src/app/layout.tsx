import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const theme = stored === "light" || stored === "dark" ? stored : system;
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

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
  title: "وصول - نظام تشغيل الأعمال",
  description:
    "4 موظفين ذكاء اصطناعي يُشغّلون أعمالك أونلاين على واتساب 24/7. يبدأ وصول من التجارة الإلكترونية ويتوسع إلى كل عمل يُدار رقمياً.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "وصول - نظام تشغيل الأعمال",
    description:
      "4 موظفين ذكاء اصطناعي يُشغّلون أعمالك أونلاين على واتساب 24/7. يبدأ وصول من التجارة الإلكترونية ويتوسع إلى كل عمل يُدار رقمياً.",
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${ibmArabic.variable} ${jetbrains.variable} font-arabic antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
