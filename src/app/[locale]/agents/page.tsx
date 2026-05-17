import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const ScrollProgress = dynamic(() => import("@/components/landing/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/landing/BackToTop"), { ssr: false });
const AgentsArchitectureSection = dynamic(() => import("@/components/landing/AgentsArchitectureSection"));
const AgentsDeepDive = dynamic(() => import("@/components/landing/AgentsDeepDive"));
const PricingTeaser = dynamic(() => import("@/components/landing/PricingTeaser"));
const FooterCTA = dynamic(() => import("@/components/landing/FooterCTA"));

export const metadata = {
  title: "الوكلاء الذكيون — وصول",
  description:
    "٤ موظفين ذكيين يديرون متجرك على واتساب: وكيل خدمة العملاء، وكيل المالك، وكيل الودجت، ووكيل الذكاء والتحليلات.",
};

export default async function AgentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main dir={dir} style={{ direction: dir }} className="pt-16">
        <AgentsArchitectureSection />
        <AgentsDeepDive />
        <PricingTeaser />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
