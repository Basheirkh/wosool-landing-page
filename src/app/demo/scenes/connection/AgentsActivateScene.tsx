import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import DashboardHome from "../../primitives/dashboard/DashboardHome";
import ConnectToast from "../../primitives/ConnectToast";
import { segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "./chrome";

interface Props {
  ctx: SceneContext;
}

// Status dots flip to colored-active in sequence, one card at a time.
export default function AgentsActivateScene({ ctx }: Props) {
  const focus: [number, number, number] = [
    pulseAt(ctx.progress, 0.00, 0.4),
    pulseAt(ctx.progress, 0.25, 0.65),
    pulseAt(ctx.progress, 0.5, 0.9),
  ];
  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <ConnectToast progress={1} />
      <DashboardShell variant="center" glow={0.8}>
        <DashboardHome healthPercent={100} connected agentFocus={focus} />
      </DashboardShell>
    </LightSurface>
  );
}

function pulseAt(t: number, start: number, end: number): number {
  const s = segment(t, start, end);
  if (s <= 0 || s >= 1) return 0;
  return s < 0.5 ? s * 2 : (1 - s) * 2;
}
