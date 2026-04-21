import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ProductsPage from "../../primitives/products/ProductsPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { TextBubble, WosoolReplyBubble, TrustChip, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import InlineToast from "../../primitives/InlineToast";
import { easeOutCubic, segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "../connection/chrome";

interface Props {
  ctx: SceneContext;
}

export default function IphoneAddedScene({ ctx }: Props) {
  const slideIn = easeOutCubic(segment(ctx.progress, 0.05, 0.35));
  const replyIn = easeOutCubic(segment(ctx.progress, 0.3, 0.6));
  const chipIn = easeOutCubic(segment(ctx.progress, 0.55, 0.85));
  const toastT = segment(ctx.progress, 0.0, 0.4);

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <InlineToast progress={toastT}>+١ آيفون ١٧ — مضاف من واتساب</InlineToast>
      <DashboardShell variant="split" hideNav glow={0.25}>
        <ProductsPage mode="speaker-plus-iphone" compact featuredSlideIn={slideIn} />
      </DashboardShell>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen online>
          <TextBubble time="٢:١٦ م">
            أضف آيفون ١٧ بسعر <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>١٥٠٠</span> ريال، مخزون{" "}
            <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>٨</span>
          </TextBubble>
          {replyIn > 0.05 && (
            <div style={{ opacity: replyIn, transform: `translateY(${(1 - replyIn) * 10}px)` }}>
              <WosoolReplyBubble time="٢:١٦ م">
                أضفت <b>آيفون ١٧</b> — <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>١٥٠٠ ريال</span> — مخزون{" "}
                <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>٨</span>. تبي صور من المعرض؟
              </WosoolReplyBubble>
            </div>
          )}
          {chipIn > 0.05 && (
            <div style={{ opacity: chipIn, transform: `translateY(${(1 - chipIn) * 6}px)`, alignSelf: "flex-start" }}>
              <TrustChip />
            </div>
          )}
        </WAChatScreen>
      </PhoneMockup>
      <FrameCaption label="Added · iPhone 17" ar="— أضافه فوراً" />
    </LightSurface>
  );
}
