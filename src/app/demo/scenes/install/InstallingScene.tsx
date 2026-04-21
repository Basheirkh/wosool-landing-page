import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import SallaCard from "../../primitives/SallaCard";
import FrameCaption from "../../primitives/FrameCaption";
import { easeOutCubic } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

export default function InstallingScene({ ctx }: Props) {
  // Progress 0 → 0.60 over the full scene, eased.
  const progress = 0.6 * easeOutCubic(ctx.progress);
  return (
    <LightSurface>
      <StoreChrome />
      <SallaCard buttonState="installing" progress={progress} />
      <FrameCaption num="02 / 03" label="Installing" ar="— نفس الكاميرا، الحالة تتغيّر" />
    </LightSurface>
  );
}
