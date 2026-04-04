import dynamic from "next/dynamic";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProofBar from "@/components/landing/SocialProofBar";
import Footer from "@/components/landing/Footer";
import BlogHighlights from "@/components/blog/BlogHighlights";

const ScrollProgress = dynamic(() => import("@/components/landing/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/landing/BackToTop"), { ssr: false });
const ActivationJourney = dynamic(() => import("@/components/landing/ActivationJourney"));
const AgentsArchitectureSection = dynamic(() => import("@/components/landing/AgentsArchitectureSection"));
const Integrations = dynamic(() => import("@/components/landing/Integrations"));
const ProductCards = dynamic(() => import("@/components/landing/ProductCards"));
const FeaturesGrid = dynamic(() => import("@/components/landing/FeaturesGrid"));
const ComparisonGrid = dynamic(() => import("@/components/landing/ComparisonGrid"));
const Testimonials = dynamic(() => import("@/components/landing/Testimonials"));
const FAQ = dynamic(() => import("@/components/landing/FAQ"));
const SocialProof = dynamic(() => import("@/components/landing/SocialProof"));
const SecurityBrief = dynamic(() => import("@/components/landing/SecurityBrief"));
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

        {/* 02 — Before/After + 3 Steps */}
        <ActivationJourney />

        {/* 03 — 4 Employees with real examples */}
        <AgentsArchitectureSection />

        {/* 04 — Integrations (Salla + WhatsApp) */}
        <Integrations />

        {/* 05 — Morning summary + How it works */}
        <ProductCards />

        {/* 06 — Capabilities (no code, no jargon) */}
        <FeaturesGrid />

        {/* 07 — Daily problem ticker */}
        <Testimonials />

        {/* 08 — Comparison (WhatsApp Business vs ChatGPT vs Wosool) */}
        <ComparisonGrid />

        {/* 09 — FAQ */}
        <FAQ />

        {/* 10 — Social Proof: testimonials */}
        <SecurityBrief />

        {/* 11 — Trust & Security */}
        <SocialProof />

        {/* 12 — Blog */}
        <BlogHighlights />

        {/* 13 — Pricing (2 tiers) */}
        <Pricing />

        {/* 14 — Final CTA */}
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
