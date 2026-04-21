import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ConnectPage from "../../primitives/dashboard/ConnectPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import WAScanner from "../../primitives/WAScanner";
import { SCAN_CHROME } from "./chrome";

interface Props {
  ctx: SceneContext;
}

export default function ScanningScene({ ctx }: Props) {
  // Scan beam sweeps up and down continuously.
  const beam = 0.5 - 0.5 * Math.cos(ctx.progress * Math.PI * 2);

  return (
    <LightSurface>
      <StoreChrome {...SCAN_CHROME} />
      <DashboardShell variant="split" hideNav>
        <ConnectPage compact qrGlow qrStatus="reading" />
      </DashboardShell>
      <PhoneMockup>
        <WAScanner beamProgress={beam} />
      </PhoneMockup>
      <FrameCaption num="08 / 09" label="Scanning" ar="— المسح الحي" />
    </LightSurface>
  );
}
