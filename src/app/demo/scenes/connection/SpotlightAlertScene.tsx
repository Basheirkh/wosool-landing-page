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

export default function SpotlightAlertScene({ ctx }: Props) {
  // Everything dims in the first 25%, alert glows through the rest.
  const dim = easeOutCubic(segment(ctx.progress, 0, 0.25));
  const glow = easeOutCubic(segment(ctx.progress, 0.1, 0.5));
  const pulse = 1 + 0.2 * Math.sin(ctx.progress * Math.PI * 3);

  return (
    <LightSurface>
      <StoreChrome {...DASHBOARD_CHROME} />
      <DashboardShell variant="center" dimmed={dim > 0.2}>
        <DashboardHome healthPercent={67} alertGlow={glow * pulse} />
      </DashboardShell>
      <FrameCaption num="05 / 09" label="Alert Spotlight" ar="— الخطوة التالية الوحيدة" />
    </LightSurface>
  );
}
