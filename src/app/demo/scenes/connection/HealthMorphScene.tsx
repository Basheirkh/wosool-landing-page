import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import DashboardHome from "../../primitives/dashboard/DashboardHome";
import ConnectToast from "../../primitives/ConnectToast";
import { easeInOutCubic, lerp } from "../../primitives/easing";
import { CONNECTED_CHROME } from "./chrome";

interface Props {
  ctx: SceneContext;
}

/**
 * Sub-scene: health ticker morphs from 67 → 100 with yellow→green hand-off.
 * We cross-render both states and fade between them.
 */
export default function HealthMorphScene({ ctx }: Props) {
  const t = easeInOutCubic(ctx.progress);
  // During first 55%, show warn state with rising number; after, show ok.
  const pct = lerp(67, 100, t);
  const showOk = ctx.progress > 0.55;

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <ConnectToast progress={1} />
      <DashboardShell variant="center" glow={0.5 + t * 0.3}>
        {showOk ? (
          <DashboardHome healthPercent={pct} connected />
        ) : (
          <DashboardHome healthPercent={pct} />
        )}
      </DashboardShell>
    </LightSurface>
  );
}
