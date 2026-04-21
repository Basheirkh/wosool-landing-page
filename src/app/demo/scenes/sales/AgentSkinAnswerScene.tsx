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

export default function AgentSkinAnswerScene({ ctx }: Props) {
  const reply1 = easeOutCubic(segment(ctx.progress, 0.05, 0.35));
  const reply2 = easeOutCubic(segment(ctx.progress, 0.35, 0.7));
  const reply3 = easeOutCubic(segment(ctx.progress, 0.7, 0.95));
  const viewingPulse = 0.6 + 0.4 * Math.sin(ctx.progress * Math.PI * 2);

  return (
    <LightSurface>
      <StoreChrome {...SALES_CHROME} />
      <StorefrontPage cartCount={0} ctaGlow={reply3 > 0.5 ? 0.5 : 0} />
      <SalesChat
        viewingPulse={viewingPulse}
        messages={[
          {
            from: "visitor",
            body: (
              <>
                هل هذا الشامبو مناسب لبشرة <b>حساسة</b>؟ عندي تحسّس من السلفات
              </>
            ),
            time: "قبل لحظات",
          },
          {
            from: "agent",
            body: (
              <>
                أهلاً 🌿 الشامبو اللي قدامك{" "}
                <b>خالٍ تماماً من السلفات والبارابين</b> — وتركيبته مبنية على زيت الأرجان وبروتين القمح.
              </>
            ),
            time: "الآن",
            opacity: reply1,
            translateY: (1 - reply1) * 8,
          },
          {
            from: "agent",
            body: (
              <>
                لبشرة حساسة: آمن على فروة الرأس، يرطّب بدون حكّة. PH مُعادَل{" "}
                <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>٥.٥</span>.
              </>
            ),
            time: "الآن",
            opacity: reply2,
            translateY: (1 - reply2) * 8,
          },
          {
            from: "agent",
            body: (
              <>
                <span style={{ color: "var(--w-teal-700)", fontWeight: 700 }}>١٢٤ عميل</span> مثل حالتك قيّموه{" "}
                <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 700, color: "var(--w-warning)" }}>٤.٨/٥</span>. تبين تجربينه؟
              </>
            ),
            time: "الآن",
            opacity: reply3,
            translateY: (1 - reply3) * 8,
          },
        ]}
      />
      <FrameCaption label="Agent · Product knowledge" ar="— يرد بعلم، مو بقائمة" />
    </LightSurface>
  );
}
