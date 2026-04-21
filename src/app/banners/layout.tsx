import type { Metadata } from "next";
// Reuse the same design tokens the /demo uses so banners share the exact
// teal/mint palette, IBM Plex Sans Arabic, and mono stacks.
import "../demo/stage/demo-tokens.css";

export const metadata: Metadata = {
  title: "بنرات وصول — Wosool Banners",
  description:
    "٦ بنرات ترويجية بدقة ١٩٢٠×١٠٨٠ لقائمة وصول على متجر تطبيقات سلة — The 6 promotional banners shipped to the Salla app store.",
  robots: { index: false, follow: false }, // preview surface, not a crawl target
};

export default function BannersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
