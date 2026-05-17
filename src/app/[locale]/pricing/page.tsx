import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const ScrollProgress = dynamic(() => import("@/components/landing/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/landing/BackToTop"), { ssr: false });
const Pricing = dynamic(() => import("@/components/landing/Pricing"));
const PlanCalculator = dynamic(() => import("@/components/landing/PlanCalculator"));
const PricingDetails = dynamic(() => import("@/components/landing/PricingDetails"));
const FooterCTA = dynamic(() => import("@/components/landing/FooterCTA"));

export const metadata = {
  title: "الباقات والأسعار — وصول",
  description:
    "اختر باقة وصول المناسبة لمتجرك. الانطلاق، احترافي، أو متقدم — بدون شحن رصيد، بدون رسوم مفاجئة.",
};

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main dir={dir} style={{ direction: dir }} className="pt-16">
        <Pricing />
        <PlanCalculator />
        <PricingDetails />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
