import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import SallaCard from "../../primitives/SallaCard";
import FrameCaption from "../../primitives/FrameCaption";
import { segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

export default function DiscoveryScene({ ctx }: Props) {
  const breathe = 1 + 0.004 * Math.sin(ctx.progress * Math.PI * 2);
  const pulse = 0.5 + 0.5 * Math.sin(ctx.progress * Math.PI * 3);
  const hoverHint = segment(ctx.progress, 0.3, 0.9);

  return (
    <LightSurface>
      <StoreChrome />
      <div style={{ position: "absolute", inset: 0, transform: `scale(${breathe})`, transformOrigin: "center", willChange: "transform" }}>
        <SallaCard
          buttonState="idle"
          hint={{ text: "مجاني للتجربة · بدون بطاقة ائتمان" }}
          hoverIntensity={pulse * hoverHint * 0.4}
        />
      </div>
      <FrameCaption num="01 / 03" label="Discovery" ar="— البطاقة في وضع السكون" />
    </LightSurface>
  );
}
