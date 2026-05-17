import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter, JetBrains_Mono } from "next/font/google";
import { getLocale, getTranslations } from "next-intl/server";
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

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
      apple: "/icon.svg",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
    },
    alternates: {
      canonical: locale === "ar" ? "/" : `/${locale}`,
      languages: {
        ar: "/",
        en: "/en",
        "x-default": "/",
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const bodyFont = locale === "ar" ? "font-arabic" : "font-inter";

  return (
    <html lang={locale} dir={dir} style={{ direction: dir }}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${ibmArabic.variable} ${inter.variable} ${jetbrains.variable} ${bodyFont} antialiased`}
        style={{ direction: dir }}
      >
        {children}
      </body>
    </html>
  );
}
