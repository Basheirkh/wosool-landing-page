import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import ProductsPage from "../../primitives/products/ProductsPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { VoiceNoteBubble, TypingBubble, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import { CONNECTED_CHROME } from "../connection/chrome";

interface Props {
  ctx: SceneContext;
}

// Sub-scene: accelerated wave pulse over the voice note — "processing"
export default function VoiceWaveScene({ ctx }: Props) {
  const pulse = 0.6 + 0.4 * Math.sin(ctx.progress * Math.PI * 6);
  // Playhead creeps forward, emphasizing the message is being "heard"
  const playhead = 8 / 30 + ctx.progress * (14 / 30);

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <div style={{ position: "absolute", inset: 0, filter: "saturate(0.25) brightness(1.02)", opacity: 0.7, pointerEvents: "none" }}>
        <DashboardShell variant="split" hideNav>
          <ProductsPage mode="disconnected-3" compact />
        </DashboardShell>
      </div>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen>
          <VoiceNoteBubble playhead={playhead} pulse={pulse} />
          <TypingBubble />
        </WAChatScreen>
      </PhoneMockup>
    </LightSurface>
  );
}
