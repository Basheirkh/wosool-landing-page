import type { Metadata } from "next";
// Reuse the same design tokens the /demo and /banners surfaces use, so the
// cards share the exact teal/mint palette, IBM Plex Sans Arabic, and mono.
import "../demo/stage/demo-tokens.css";

export const metadata: Metadata = {
  title: "لماذا وصول — Why Wosool",
  description:
    "ثلاث بطاقات توضح قيمة وصول لأصحاب متاجر سلة — outcome-focused cards for the Salla listing.",
  robots: { index: false, follow: false },
};

export default function WhyWosoolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
