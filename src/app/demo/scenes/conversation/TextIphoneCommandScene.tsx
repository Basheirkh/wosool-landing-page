import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ProductsPage from "../../primitives/products/ProductsPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { VoiceNoteBubble, WosoolReplyBubble, TrustChip, TextBubble, TypingBubble, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import { easeOutCubic, segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "../connection/chrome";

interface Props {
  ctx: SceneContext;
}

export default function TextIphoneCommandScene({ ctx }: Props) {
  const textIn = easeOutCubic(segment(ctx.progress, 0.1, 0.45));
  const typingIn = easeOutCubic(segment(ctx.progress, 0.55, 0.85));

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <DashboardShell variant="split" hideNav>
        <ProductsPage mode="with-speaker" compact />
      </DashboardShell>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen online>
          <VoiceNoteBubble playhead={1} />
          <WosoolReplyBubble time="٢:١٤ م">
            سماعة X بلوتوث — <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>١٤٩ ريال</span>. تبي أحط لها صور؟
          </WosoolReplyBubble>
          <div style={{ alignSelf: "flex-start", marginTop: -4 }}>
            <TrustChip />
          </div>
          {textIn > 0.05 && (
            <div style={{ opacity: textIn, transform: `translateY(${(1 - textIn) * 10}px)`, alignSelf: "flex-end" }}>
              <TextBubble time="٢:١٦ م">
                أضف آيفون ١٧ بسعر <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>١٥٠٠</span> ريال، مخزون{" "}
                <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>٨</span>
              </TextBubble>
            </div>
          )}
          {typingIn > 0.1 && (
            <div style={{ opacity: typingIn, transform: `translateY(${(1 - typingIn) * 6}px)` }}>
              <TypingBubble />
            </div>
          )}
        </WAChatScreen>
      </PhoneMockup>
      <FrameCaption label="Text · Add iPhone" ar="— نفس الوكيل، بالكتابة" />
    </LightSurface>
  );
}
