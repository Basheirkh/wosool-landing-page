import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import DashboardHome from "../../primitives/dashboard/DashboardHome";
import { segment } from "../../primitives/easing";
import { DASHBOARD_CHROME } from "./chrome";

interface Props {
  ctx: SceneContext;
}

// A focus ring sweeps across the 3 agent cards in sequence.
export default function AgentsStaggerScene({ ctx }: Props) {
  const focus: [number, number, number] = [
    pulseAt(ctx.progress, 0.00, 0.55),
    pulseAt(ctx.progress, 0.22, 0.77),
    pulseAt(ctx.progress, 0.44, 0.99),
  ];
  return (
    <LightSurface>
      <StoreChrome {...DASHBOARD_CHROME} />
      <DashboardShell variant="center">
        <DashboardHome healthPercent={67} agentFocus={focus} />
      </DashboardShell>
    </LightSurface>
  );
}

/** Triangle pulse: 0 → 1 → 0 over [start..end] of progress. */
function pulseAt(t: number, start: number, end: number): number {
  const s = segment(t, start, end);
  if (s <= 0 || s >= 1) return 0;
  return s < 0.5 ? s * 2 : (1 - s) * 2;
}
