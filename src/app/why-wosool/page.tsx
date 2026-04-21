import WhyWosoolSection from "./components/WhyWosoolSection";

/**
 * /why-wosool — preview surface for the 3-card section built per the
 * Salla-listing rewrite brief. Phase 5 will add a `?render=true` mode
 * plus a PNG export script.
 */
export default function WhyWosoolPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--w-canvas)" }}>
      <WhyWosoolSection />
    </main>
  );
}
