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

export default function AddToCartScene({ ctx }: Props) {
  // Visitor request → CTA pulse → cart count flips 0→1 → agent confirm
  const visitorMsg = easeOutCubic(segment(ctx.progress, 0.05, 0.3));
  const ctaGlow = easeOutCubic(segment(ctx.progress, 0.3, 0.55));
  // Cart count switches at 55% of scene
  const cartCount = ctx.progress > 0.55 ? 1 : 0;
  // Sparkle pulse around the time the cart updates
  const sparkleT = segment(ctx.progress, 0.5, 0.8);
  const sparkle = sparkleT > 0 && sparkleT < 1 ? Math.sin(sparkleT * Math.PI) : 0;
  const agentMsg = easeOutCubic(segment(ctx.progress, 0.6, 0.9));
  const viewingPulse = 0.6 + 0.4 * Math.sin(ctx.progress * Math.PI * 2);

  return (
    <LightSurface>
      <StoreChrome {...SALES_CHROME} />
      <StorefrontPage
        cartCount={cartCount}
        ctaGlow={ctaGlow * (1 - sparkleT * 0.7)}
        cartSparkle={sparkle}
      />
      <SalesChat
        viewingPulse={viewingPulse}
        messages={[
          {
            from: "agent",
            body: (
              <>
                <span style={{ color: "var(--w-teal-700)", fontWeight: 700 }}>١٢٤ عميل</span> مثل حالتك قيّموه{" "}
                <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 700, color: "var(--w-warning)" }}>٤.٨/٥</span>. تبين تجربينه؟
              </>
            ),
            time: "قبل لحظات",
          },
          {
            from: "visitor",
            body: "إيه حمسني 🫶 ضيفه لسلتي",
            time: "الآن",
            opacity: visitorMsg,
            translateY: (1 - visitorMsg) * 8,
          },
          {
            from: "agent",
            body: agentMsg > 0.05 ? (
              <>
                <span style={{ color: "var(--w-success)", display: "inline-flex", alignItems: "center", gap: 4, fontWeight: 700 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  تمت الإضافة
                </span>
                <br />
                <b>شامبو الأرجان</b> × <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>١</span> ·{" "}
                <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>١٢٩ ريال</span>.
                <br />
                تبين أضيف <b>البلسم المرافق</b> بخصم ١٥٪؟
              </>
            ) : "",
            time: "الآن",
            opacity: agentMsg,
            translateY: (1 - agentMsg) * 8,
          },
        ]}
      />
      <FrameCaption label="Sales · Cart +1" ar="— طلبت، فعلها فوراً" />
    </LightSurface>
  );
}
