import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const ScrollProgress = dynamic(() => import("@/components/landing/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/landing/BackToTop"), { ssr: false });
const ProductCards = dynamic(() => import("@/components/landing/ProductCards"));
const FeaturesGrid = dynamic(() => import("@/components/landing/FeaturesGrid"));
const FeaturesDeepDive = dynamic(() => import("@/components/landing/FeaturesDeepDive"));
const PricingTeaser = dynamic(() => import("@/components/landing/PricingTeaser"));
const FooterCTA = dynamic(() => import("@/components/landing/FooterCTA"));

export const metadata = {
  title: "القدرات والميزات — وصول",
  description:
    "كل قدرات وصول: إدارة المنتجات والطلبات والعملاء، الأتمتات، الحملات، التحليلات، الذكاء الاصطناعي — على واتساب.",
};

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main dir={dir} style={{ direction: dir }} className="pt-16">
        <ProductCards />
        <FeaturesGrid />
        <FeaturesDeepDive />
        <PricingTeaser />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
