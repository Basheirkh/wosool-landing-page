import dynamic from "next/dynamic";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProofBar from "@/components/landing/SocialProofBar";
import Footer from "@/components/landing/Footer";
import BlogHighlights from "@/components/blog/BlogHighlights";

const ScrollProgress = dynamic(() => import("@/components/landing/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/landing/BackToTop"), { ssr: false });
const KpiTrustStrip = dynamic(() => import("@/components/landing/KpiTrustStrip"));
const ActivationJourney = dynamic(() => import("@/components/landing/ActivationJourney"));
const AgentsArchitectureSection = dynamic(() => import("@/components/landing/AgentsArchitectureSection"));
const Integrations = dynamic(() => import("@/components/landing/Integrations"));
const ProductCards = dynamic(() => import("@/components/landing/ProductCards"));
const FeaturesGrid = dynamic(() => import("@/components/landing/FeaturesGrid"));
const ComparisonGrid = dynamic(() => import("@/components/landing/ComparisonGrid"));
const CaseStudy = dynamic(() => import("@/components/landing/CaseStudy"));
const Testimonials = dynamic(() => import("@/components/landing/Testimonials"));
const FAQ = dynamic(() => import("@/components/landing/FAQ"));
const SocialProof = dynamic(() => import("@/components/landing/SocialProof"));
const SecurityBrief = dynamic(() => import("@/components/landing/SecurityBrief"));
const RoiCalculator = dynamic(() => import("@/components/landing/RoiCalculator"));
const Pricing = dynamic(() => import("@/components/landing/Pricing"));
const FooterCTA = dynamic(() => import("@/components/landing/FooterCTA"));

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main>
        {/* 01 — Hero: "تكلّم متجرك. يسويه." */}
        <Hero />
        <SocialProofBar />

        {/* 02 — KPIs + Trust badges (Salla / WhatsApp / SDAIA / PDPL) */}
        <KpiTrustStrip />

        {/* 03 — Before/After + 3 Steps */}
        <ActivationJourney />

        {/* 04 — 4 Employees with real examples */}
        <AgentsArchitectureSection />

        {/* 05 — Integrations (Salla + WhatsApp) */}
        <Integrations />

        {/* 06 — Morning summary + How it works */}
        <ProductCards />

        {/* 07 — Capabilities (no code, no jargon) */}
        <FeaturesGrid />

        {/* 08 — Comparison (WhatsApp Business vs ChatGPT vs Wosool) */}
        <ComparisonGrid />

        {/* 09 — Case study: before / after */}
        <CaseStudy />

        {/* 10 — Daily problem ticker */}
        <Testimonials />

        {/* 11 — FAQ */}
        <FAQ />

        {/* 12 — Social Proof: testimonials */}
        <SecurityBrief />

        {/* 13 — Trust & Security */}
        <SocialProof />

        {/* 14 — Blog */}
        <BlogHighlights />

        {/* 15 — ROI Calculator */}
        <RoiCalculator />

        {/* 16 — Pricing (2 tiers) */}
        <Pricing />

        {/* 17 — Final CTA */}
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
