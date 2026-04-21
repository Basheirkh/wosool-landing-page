import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import DashboardHome from "../../primitives/dashboard/DashboardHome";
import { DASHBOARD_CHROME } from "./chrome";

interface Props {
  ctx: SceneContext;
}

/**
 * Sub-scene: warning glow pulses on the health card — the next sub-scene
 * (spotlight-alert) will dim everything and focus on the red alert.
 */
export default function HealthTickerScene({ ctx }: Props) {
  const pulse = 0.5 + 0.5 * Math.sin(ctx.progress * Math.PI * 2);
  return (
    <LightSurface>
      <StoreChrome {...DASHBOARD_CHROME} />
      <DashboardShell variant="center">
        <DashboardHome healthPercent={67} healthGlow={pulse} />
      </DashboardShell>
    </LightSurface>
  );
}
