import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import SallaCard from "../../primitives/SallaCard";
import Cursor from "../../primitives/Cursor";
import { easeOutCubic, lerp, segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

// Button center in canvas coords (RTL: action column lands at card's left).
const CURSOR_START = { x: 1700, y: 900 };
const CURSOR_END = { x: 548, y: 524 };

export default function DiscoveryHoverScene({ ctx }: Props) {
  const moveT = easeOutCubic(segment(ctx.progress, 0, 0.75));
  const x = lerp(CURSOR_START.x, CURSOR_END.x, moveT);
  const y = lerp(CURSOR_START.y, CURSOR_END.y, moveT);

  // Cursor fades in during first 15% of scene
  const fadeIn = segment(ctx.progress, 0, 0.15);
  // Hover intensity ramps up as cursor approaches (starts at 60% of movement)
  const hover = segment(ctx.progress, 0.6, 1.0);

  return (
    <LightSurface>
      <StoreChrome />
      <SallaCard buttonState="hover" hoverIntensity={hover} hint={{ text: "مجاني للتجربة · بدون بطاقة ائتمان" }} />
      <Cursor x={x} y={y} opacity={fadeIn} />
    </LightSurface>
  );
}
