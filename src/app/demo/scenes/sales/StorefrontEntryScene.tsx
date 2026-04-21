import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import StorefrontPage, { SalesChat } from "../../primitives/storefront/Storefront";
import { easeOutCubic, lerp, segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

const SALES_CHROME = {
  crumbs: ["زائر", "wosool-beauty.sa", "شامبو الأرجان"],
  mark: "Sales Agent · Live",
  markDotColor: "var(--w-mint-500)",
  top: 48,
};

export default function StorefrontEntryScene({ ctx }: Props) {
  // Storefront fades in; visitor cursor enters from bottom-right and moves to CTA area
  const entry = easeOutCubic(segment(ctx.progress, 0, 0.3));
  const cursorT = easeOutCubic(segment(ctx.progress, 0.3, 0.95));
  const cursorX = lerp(1650, 1100, cursorT);
  const cursorY = lerp(900, 580, cursorT);
  const viewingPulse = 0.5 + 0.5 * Math.sin(ctx.progress * Math.PI * 2);

  return (
    <LightSurface>
      <StoreChrome {...SALES_CHROME} />
      <div style={{ opacity: entry, transform: `scale(${0.98 + 0.02 * entry})`, position: "absolute", inset: 0, willChange: "transform, opacity" }}>
        <StorefrontPage
          cartCount={0}
          cursor={{ x: cursorX, y: cursorY, opacity: cursorT }}
        />
        <SalesChat messages={[]} viewingPulse={viewingPulse} />
      </div>
      <FrameCaption label="Storefront · Live" ar="— الزائر يتصفّح، الوكيل يشاهد" />
    </LightSurface>
  );
}
