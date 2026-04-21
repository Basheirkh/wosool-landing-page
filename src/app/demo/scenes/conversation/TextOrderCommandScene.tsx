import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import OrdersPage from "../../primitives/orders/OrdersPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { TextBubble, TypingBubble, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import { easeOutCubic, segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "../connection/chrome";

interface Props {
  ctx: SceneContext;
}

export default function TextOrderCommandScene({ ctx }: Props) {
  const textIn = easeOutCubic(segment(ctx.progress, 0.1, 0.5));
  const typingIn = easeOutCubic(segment(ctx.progress, 0.6, 0.9));

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <DashboardShell variant="split" hideNav>
        <OrdersPage compact />
      </DashboardShell>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen online>
          {textIn > 0.05 && (
            <div style={{ opacity: textIn, transform: `translateY(${(1 - textIn) * 10}px)`, alignSelf: "flex-end" }}>
              <TextBubble time="٢:٢٠ م">
                غيّر حالة الطلب <span style={{ fontFamily: "var(--w-font-mono)", direction: "ltr", display: "inline-block" }}>#٢٨٤٧</span> إلى «تم التنفيذ»
              </TextBubble>
            </div>
          )}
          {typingIn > 0.1 && (
            <div style={{ opacity: typingIn }}>
              <TypingBubble />
            </div>
          )}
        </WAChatScreen>
      </PhoneMockup>
      <FrameCaption label="Order · Command" ar="— حدّث الطلب" />
    </LightSurface>
  );
}
