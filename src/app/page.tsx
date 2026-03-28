import dynamic from "next/dynamic";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProofBar from "@/components/landing/SocialProofBar";
import Footer from "@/components/landing/Footer";
import BlogHighlights from "@/components/blog/BlogHighlights";

const ScrollProgress = dynamic(() => import("@/components/landing/ScrollProgress"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/landing/BackToTop"), { ssr: false });
const ActivationJourney = dynamic(() => import("@/components/landing/ActivationJourney"));
const EditorialSplit = dynamic(() => import("@/components/landing/EditorialSplit"));
const AgentsArchitectureSection = dynamic(() => import("@/components/landing/AgentsArchitectureSection"));
const InfrastructureSection = dynamic(() => import("@/components/landing/InfrastructureSection"));
const FeaturesGrid = dynamic(() => import("@/components/landing/FeaturesGrid"));
const HowItWorks = dynamic(() => import("@/components/landing/HowItWorks"));
const ArchStatement = dynamic(() => import("@/components/landing/ArchStatement"));
const ProductCards = dynamic(() => import("@/components/landing/ProductCards"));
const ComparisonGrid = dynamic(() => import("@/components/landing/ComparisonGrid"));
const ZeroHumanInterventionSection = dynamic(() => import("@/components/landing/ZeroHumanInterventionSection"));
const StatsFullBleed = dynamic(() => import("@/components/landing/StatsFullBleed"));
const SocialProof = dynamic(() => import("@/components/landing/SocialProof"));
const Testimonials = dynamic(() => import("@/components/landing/Testimonials"));
const Integrations = dynamic(() => import("@/components/landing/Integrations"));
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
        {/* 01 — Hero: dark + dot grid + 3D objects */}
        <Hero />
        <SocialProofBar />
        <Integrations />
        <ActivationJourney />
        <EditorialSplit />
        <AgentsArchitectureSection />
        <InfrastructureSection />
        <ProductCards />
        <FeaturesGrid />
        <HowItWorks />
        <ArchStatement />
        <ComparisonGrid />
        <ZeroHumanInterventionSection />
        <BlogHighlights />
        <StatsFullBleed />
        <SocialProof />
        <Testimonials />
        <SecurityBrief />
        <Pricing />
        <FooterCTA />
      </main>
      {/* 14 — Footer: columns */}
      <Footer />
    </>
  );
}
