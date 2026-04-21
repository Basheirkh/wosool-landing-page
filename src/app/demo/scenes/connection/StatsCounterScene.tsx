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
 * Sub-scene: the three "0" metric values pulse in a slow wave —
 * reinforcing the "stuck at zero" state that will change once connected.
 */
export default function StatsCounterScene({ ctx }: Props) {
  const wave = 0.5 + 0.5 * Math.sin(ctx.progress * Math.PI * 2);
  return (
    <LightSurface>
      <StoreChrome {...DASHBOARD_CHROME} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.98 + wave * 0.02 }}>
        <DashboardShell variant="center">
          <DashboardHome healthPercent={67} />
        </DashboardShell>
      </div>
      {/* Soft overlay highlight on metric column to hint the zero-values */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%)`,
          width: 1020,
          height: 920,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            insetInlineStart: 40,
            top: 500,
            width: 160,
            height: 320,
            background: `radial-gradient(circle at center, rgba(245, 67, 74, ${0.06 + wave * 0.06}) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      </div>
    </LightSurface>
  );
}
