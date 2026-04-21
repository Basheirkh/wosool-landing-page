import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import DashboardHome from "../../primitives/dashboard/DashboardHome";
import { easeOutCubic, segment } from "../../primitives/easing";
import { DASHBOARD_CHROME } from "./chrome";

interface Props {
  ctx: SceneContext;
}

export default function DashboardDisconnectedScene({ ctx }: Props) {
  const entry = easeOutCubic(segment(ctx.progress, 0, 0.25));
  const scale = 0.96 + 0.04 * entry;
  const opacity = entry;
  const breath = 1 + 0.002 * Math.sin(ctx.progress * Math.PI * 2);

  return (
    <LightSurface>
      <StoreChrome {...DASHBOARD_CHROME} />
      <div style={{ position: "absolute", inset: 0, transform: `scale(${scale * breath})`, opacity, willChange: "transform, opacity" }}>
        <DashboardShell variant="center">
          <DashboardHome healthPercent={67} />
        </DashboardShell>
      </div>
      <FrameCaption num="04 / 09" label="Dashboard — Disconnected" ar="— شيء ناقص" />
    </LightSurface>
  );
}
