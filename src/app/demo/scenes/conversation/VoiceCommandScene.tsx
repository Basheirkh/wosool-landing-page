import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ProductsPage from "../../primitives/products/ProductsPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { VoiceNoteBubble, TypingBubble, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import { CONNECTED_CHROME } from "../connection/chrome";
import { easeOutCubic, segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

export default function VoiceCommandScene({ ctx }: Props) {
  // Voice note + typing bubble appear in sequence
  const voiceIn = easeOutCubic(segment(ctx.progress, 0, 0.25));
  const typingIn = easeOutCubic(segment(ctx.progress, 0.35, 0.6));
  const wave = 0.4 + 0.6 * Math.abs(Math.sin(ctx.progress * Math.PI * 3));

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      {/* Dashboard right — desaturated */}
      <div style={{ position: "absolute", inset: 0, filter: "saturate(0.25) brightness(1.02)", opacity: 0.7, pointerEvents: "none" }}>
        <DashboardShell variant="split" hideNav>
          <ProductsPage mode="disconnected-3" compact />
        </DashboardShell>
      </div>
      {/* Phone left */}
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen>
          <div style={{ opacity: voiceIn, transform: `translateY(${(1 - voiceIn) * 8}px)`, transition: "none" }}>
            <VoiceNoteBubble playhead={8 / 30} pulse={wave} />
          </div>
          {typingIn > 0.05 && (
            <div style={{ opacity: typingIn, transform: `translateY(${(1 - typingIn) * 6}px)` }}>
              <TypingBubble />
            </div>
          )}
        </WAChatScreen>
      </PhoneMockup>
      <FrameCaption num="10 / 14" label="Voice Command" ar="— قال، وصول يسمع" />
    </LightSurface>
  );
}
