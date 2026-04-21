import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ConnectPage from "../../primitives/dashboard/ConnectPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import WAScanner from "../../primitives/WAScanner";
import { segment } from "../../primitives/easing";
import { SCAN_CHROME } from "./chrome";

interface Props {
  ctx: SceneContext;
}

/**
 * Sub-scene: a faster, brighter final sweep followed by a capture flash.
 * Ends on a bright pulse hinting that the scan succeeded.
 */
export default function ScanSweepScene({ ctx }: Props) {
  // Fast single sweep top→bottom over first 70%, then fade
  const sweepT = segment(ctx.progress, 0, 0.7);
  const beam = sweepT;
  const flash = segment(ctx.progress, 0.55, 0.85);
  const capture = segment(ctx.progress, 0.75, 1.0);

  return (
    <LightSurface>
      <StoreChrome {...SCAN_CHROME} />
      <DashboardShell variant="split" hideNav>
        <ConnectPage compact qrGlow qrStatus="reading" />
      </DashboardShell>
      <PhoneMockup>
        <WAScanner beamProgress={beam} flashIntensity={flash} />
      </PhoneMockup>
      {/* Capture flash: quick white wash over the whole scene */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `rgba(115, 252, 215, ${capture * 0.35 * (1 - capture)})`,
          pointerEvents: "none",
        }}
      />
    </LightSurface>
  );
}
