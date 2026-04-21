import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ProductsPage from "../../primitives/products/ProductsPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { VoiceNoteBubble, WosoolReplyBubble, TrustChip, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import InlineToast from "../../primitives/InlineToast";
import { easeOutCubic, segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "../connection/chrome";

interface Props {
  ctx: SceneContext;
}

export default function VoiceReplyScene({ ctx }: Props) {
  const slideIn = easeOutCubic(segment(ctx.progress, 0.05, 0.35));
  const replyIn = easeOutCubic(segment(ctx.progress, 0.3, 0.65));
  const chipIn = easeOutCubic(segment(ctx.progress, 0.55, 0.85));
  const toastT = segment(ctx.progress, 0.1, 0.5);

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <InlineToast progress={toastT}>+١ منتج جديد — أُضيف من واتساب</InlineToast>
      <DashboardShell variant="split" hideNav glow={0.2}>
        <ProductsPage mode="with-speaker" compact featuredSlideIn={slideIn} />
      </DashboardShell>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen online>
          <VoiceNoteBubble playhead={1} />
          {replyIn > 0.05 && (
            <div style={{ opacity: replyIn, transform: `translateY(${(1 - replyIn) * 10}px)`, willChange: "transform, opacity" }}>
              <WosoolReplyBubble>
                سماعة X بلوتوث — <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>١٤٩ ريال</span> — مخزون{" "}
                <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>٢٥</span>.<br />
                تبي أحط لها صور من المعرض؟
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
      <FrameCaption label="Voice · Reply" ar="— قال، وصول يسوي ويرد" />
    </LightSurface>
  );
}
