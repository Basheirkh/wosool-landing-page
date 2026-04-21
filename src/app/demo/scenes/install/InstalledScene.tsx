import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import SallaCard from "../../primitives/SallaCard";
import FrameCaption from "../../primitives/FrameCaption";
import { easeOutBack, segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

export default function InstalledScene({ ctx }: Props) {
  // The button "lands" with a tiny overshoot at scene start.
  const land = easeOutBack(segment(ctx.progress, 0, 0.4));
  const scale = 0.96 + 0.04 * land;
  return (
    <LightSurface>
      <StoreChrome />
      <SallaCard
        buttonState="installed"
        buttonScale={scale}
        tagVariant="installed"
        successOrnament
        hint={{ text: "انتقل إلى الإعداد ›", accent: true }}
      />
      <FrameCaption num="03 / 03" label="Installed" ar="— لحظة النجاح، بهدوء" />
    </LightSurface>
  );
}
