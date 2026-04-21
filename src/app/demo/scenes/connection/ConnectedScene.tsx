import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import DashboardHome from "../../primitives/dashboard/DashboardHome";
import ConnectToast from "../../primitives/ConnectToast";
import { easeOutCubic, segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "./chrome";

interface Props {
  ctx: SceneContext;
}

export default function ConnectedScene({ ctx }: Props) {
  // Settle: mint ring + toast slide in.
  const settle = easeOutCubic(segment(ctx.progress, 0, 0.4));
  const glow = 0.3 + 0.5 * settle;
  const toastT = segment(ctx.progress, 0.05, 0.55);

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <ConnectToast progress={toastT} />
      <DashboardShell variant="center" glow={glow}>
        <DashboardHome healthPercent={100} connected />
      </DashboardShell>
      <FrameCaption num="09 / 09" label="Connected" ar="— كل شيء حيّ" />
    </LightSurface>
  );
}
