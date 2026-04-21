import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import StorefrontPage, { SalesChat } from "../../primitives/storefront/Storefront";
import { easeOutCubic, segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

const SALES_CHROME = {
  crumbs: ["زائر", "wosool-beauty.sa", "شامبو الأرجان"],
  mark: "Sales Agent · Live",
  markDotColor: "var(--w-mint-500)",
  top: 48,
};

export default function VisitorSkinQuestionScene({ ctx }: Props) {
  const m1 = easeOutCubic(segment(ctx.progress, 0.05, 0.35));
  const m2 = easeOutCubic(segment(ctx.progress, 0.4, 0.7));
  const typing = easeOutCubic(segment(ctx.progress, 0.75, 0.98));
  const viewingPulse = 0.6 + 0.4 * Math.sin(ctx.progress * Math.PI * 2);

  return (
    <LightSurface>
      <StoreChrome {...SALES_CHROME} />
      <StorefrontPage cartCount={0} />
      <SalesChat
        viewingPulse={viewingPulse}
        showTyping={typing > 0.2}
        typingSource="agent"
        messages={[
          {
            from: "visitor",
            body: "السلام عليكم، عندي سؤال 🙏",
            time: "الآن",
            opacity: m1,
            translateY: (1 - m1) * 8,
          },
          {
            from: "visitor",
            body: (
              <>
                هل هذا الشامبو مناسب لبشرة <b>حساسة</b>؟ عندي تحسّس من السلفات
              </>
            ),
            time: "الآن",
            opacity: m2,
            translateY: (1 - m2) * 8,
          },
        ]}
      />
      <FrameCaption label="Visitor · Skin question" ar="— سؤال حقيقي من زائر" />
    </LightSurface>
  );
}
