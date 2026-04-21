import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ConnectPage from "../../primitives/dashboard/ConnectPage";
import { easeOutCubic, segment } from "../../primitives/easing";
import { QR_CHROME } from "./chrome";

interface Props {
  ctx: SceneContext;
}

export default function QrScreenScene({ ctx }: Props) {
  const entry = easeOutCubic(segment(ctx.progress, 0, 0.22));
  const scale = 0.97 + 0.03 * entry;

  return (
    <LightSurface>
      <StoreChrome {...QR_CHROME} />
      <div style={{ position: "absolute", inset: 0, transform: `scale(${scale})`, opacity: entry, willChange: "transform, opacity" }}>
        <DashboardShell variant="qr" hideNav>
          <ConnectPage />
        </DashboardShell>
      </div>
      <FrameCaption num="06 / 09" label="QR Code" ar="— الرمز هو البطل" />
    </LightSurface>
  );
}
