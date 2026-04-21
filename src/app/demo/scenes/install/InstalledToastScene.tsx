import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import SallaCard from "../../primitives/SallaCard";
import SuccessToast from "../../primitives/SuccessToast";
import { segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

export default function InstalledToastScene({ ctx }: Props) {
  const toastT = segment(ctx.progress, 0, 0.55);
  return (
    <LightSurface>
      <StoreChrome />
      <SallaCard
        buttonState="installed"
        tagVariant="installed"
        successOrnament
        hint={{ text: "انتقل إلى الإعداد ›", accent: true }}
      />
      <SuccessToast progress={toastT} />
    </LightSurface>
  );
}
