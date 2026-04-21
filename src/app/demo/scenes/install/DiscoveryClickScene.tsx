import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import SallaCard from "../../primitives/SallaCard";
import Cursor from "../../primitives/Cursor";
import { clamp01, easeOutCubic, segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

const BUTTON_CENTER = { x: 562, y: 540 };
const CURSOR_AT_BUTTON = { x: 548, y: 524 };

export default function DiscoveryClickScene({ ctx }: Props) {
  const pressing = ctx.progress < 0.5;
  const pressT = segment(ctx.progress, 0, 0.4);
  const releaseT = segment(ctx.progress, 0.4, 0.8);
  const buttonScale = pressing ? 1 - 0.04 * easeOutCubic(pressT) : 0.96 + 0.04 * easeOutCubic(releaseT);

  // Click ripple expands outward from cursor position, canvas-coord positioned
  const rippleT = clamp01(ctx.progress / 0.9);
  const rippleScale = 1 + rippleT * 5;
  const rippleOpacity = (1 - rippleT) * 0.5;

  return (
    <LightSurface>
      <StoreChrome />
      <SallaCard
        buttonState="hover"
        hoverIntensity={1}
        buttonScale={buttonScale}
        hint={{ text: "مجاني للتجربة · بدون بطاقة ائتمان" }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: BUTTON_CENTER.x - 60,
          top: BUTTON_CENTER.y - 60,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "var(--w-teal-500)",
          transform: `scale(${rippleScale})`,
          opacity: rippleOpacity,
          pointerEvents: "none",
          willChange: "transform, opacity",
          zIndex: 5,
        }}
      />
      <Cursor x={CURSOR_AT_BUTTON.x} y={CURSOR_AT_BUTTON.y} pressed={pressing} />
    </LightSurface>
  );
}
