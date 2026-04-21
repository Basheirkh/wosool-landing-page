import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شاهد وصول — تكلّم متجرك. يسويه.",
  description:
    "عرض متحرك: رحلة التاجر مع وصول — من التثبيت في متجر سلة، إلى ربط الواتساب، إلى إدارة المتجر بالصوت.",
  openGraph: {
    title: "شاهد وصول — تكلّم متجرك. يسويه.",
    description:
      "عرض متحرك: رحلة التاجر مع وصول — من التثبيت في متجر سلة، إلى ربط الواتساب، إلى إدارة المتجر بالصوت.",
    type: "website",
    locale: "ar_SA",
  },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
