import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import SallaCard from "../../primitives/SallaCard";
import { easeInOutCubic } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

export default function InstallingPulseScene({ ctx }: Props) {
  // Progress 0.60 → 1.00 over this scene, with a brief success flash at the end.
  const progress = 0.6 + 0.4 * easeInOutCubic(ctx.progress);
  return (
    <LightSurface>
      <StoreChrome />
      <SallaCard buttonState="installing" progress={progress} />
    </LightSurface>
  );
}
