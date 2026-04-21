import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import OrdersPage from "../../primitives/orders/OrdersPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { TextBubble, WosoolReplyBubble, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import InlineToast from "../../primitives/InlineToast";
import { clamp01, easeInOutCubic, segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "../connection/chrome";

interface Props {
  ctx: SceneContext;
}

export default function OrderStatusChangeScene({ ctx }: Props) {
  const morphP = easeInOutCubic(segment(ctx.progress, 0.15, 0.55));
  const replyIn = clamp01((ctx.progress - 0.5) / 0.3);
  const toastT = segment(ctx.progress, 0.5, 0.85);

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      {toastT > 0.05 && <InlineToast progress={toastT} variant="pencil">طلب #٢٨٤٧ · تم التنفيذ</InlineToast>}
      <DashboardShell variant="split" hideNav glow={0.15 + morphP * 0.25}>
        <OrdersPage compact morph={{ orderId: "٢٨٤٧", targetStatus: "done", progress: morphP }} />
      </DashboardShell>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen online>
          <TextBubble time="٢:٢٠ م">
            غيّر حالة الطلب <span style={{ fontFamily: "var(--w-font-mono)", direction: "ltr", display: "inline-block" }}>#٢٨٤٧</span> إلى «تم التنفيذ»
          </TextBubble>
          {replyIn > 0.05 && (
            <div style={{ opacity: replyIn, transform: `translateY(${(1 - replyIn) * 10}px)` }}>
              <WosoolReplyBubble time="٢:٢٠ م">
                حدّثت الطلب <span style={{ fontFamily: "var(--w-font-mono)", direction: "ltr", display: "inline-block", fontWeight: 600 }}>#٢٨٤٧</span> — الحالة الآن <b>تم التنفيذ</b>.
                <br />
                تم إشعار العميل عبر واتساب.
              </WosoolReplyBubble>
            </div>
          )}
        </WAChatScreen>
      </PhoneMockup>
      <FrameCaption label="Order · Updated" ar="— الحالة خضراء" />
    </LightSurface>
  );
}
