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
 * Sub-scene: camera pushes in on the dashboard — subtle scale + dashboard
 * opacity drop, hinting the hand-off to the phone for Act 3.
 */
export default function PushInScene({ ctx }: Props) {
  const t = easeInOutCubic(ctx.progress);
  const scale = lerp(1, 1.04, t);
  const opacity = lerp(1, 0.88, t);

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <ConnectToast progress={1} />
      <div style={{ position: "absolute", inset: 0, transform: `scale(${scale})`, opacity, willChange: "transform, opacity" }}>
        <DashboardShell variant="center" glow={0.8}>
          <DashboardHome healthPercent={100} connected />
        </DashboardShell>
      </div>
    </LightSurface>
  );
}
