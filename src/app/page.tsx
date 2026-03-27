import dynamic from "next/dynamic";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";

const ScrollProgress = dynamic(() => import("@/components/landing/ScrollProgress"), { ssr: false });
const EditorialSplit = dynamic(() => import("@/components/landing/EditorialSplit"));
const FeaturesGrid = dynamic(() => import("@/components/landing/FeaturesGrid"));
const HowItWorks = dynamic(() => import("@/components/landing/HowItWorks"));
const ArchStatement = dynamic(() => import("@/components/landing/ArchStatement"));
const ProductCards = dynamic(() => import("@/components/landing/ProductCards"));
const StatsFullBleed = dynamic(() => import("@/components/landing/StatsFullBleed"));
const SocialProof = dynamic(() => import("@/components/landing/SocialProof"));
const Testimonials = dynamic(() => import("@/components/landing/Testimonials"));
const Integrations = dynamic(() => import("@/components/landing/Integrations"));
const Pricing = dynamic(() => import("@/components/landing/Pricing"));
const FooterCTA = dynamic(() => import("@/components/landing/FooterCTA"));

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        {/* 01 — Hero: dark + dot grid + 3D objects */}
        <Hero />
        {/* 03 — Editorial Split: colored gradient + cream */}
        <EditorialSplit />
        {/* 04 — Features Grid: dark cards + product UI */}
        <FeaturesGrid />
        {/* 05 — How it Works: giant BG typography + floating panels */}
        <HowItWorks />
        {/* 06 — Architecture Statement: large text */}
        <ArchStatement />
        {/* 07 — Product Cards: colored dev cards */}
        <ProductCards />
        {/* 08 — Stats Full Bleed: grid lines + huge numbers */}
        <StatsFullBleed />
        {/* 09 — Social Proof: LIGHT section + colored editorial cards */}
        <SocialProof />
        {/* 10 — Testimonials: dark + horizontal scroll */}
        <Testimonials />
        {/* 11 — Integrations: dark minimal */}
        <Integrations />
        {/* 12 — Pricing: 3 cards */}
        <Pricing />
        {/* 13 — Footer CTA: split artwork + circular button */}
        <FooterCTA />
      </main>
      {/* 14 — Footer: columns */}
      <Footer />
    </>
  );
}
