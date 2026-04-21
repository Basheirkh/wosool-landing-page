import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import OrdersPage from "../../primitives/orders/OrdersPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { WosoolReplyBubble, TrustChip, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import InlineToast from "../../primitives/InlineToast";
import { easeOutCubic, segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "../connection/chrome";

interface Props {
  ctx: SceneContext;
}

export default function CustomerReplyScene({ ctx }: Props) {
  const replyIn = easeOutCubic(segment(ctx.progress, 0.1, 0.5));
  const chipIn = easeOutCubic(segment(ctx.progress, 0.5, 0.8));
  const toastT = segment(ctx.progress, 0.05, 0.4);

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      {toastT > 0.05 && <InlineToast progress={toastT}>وكيل العملاء · رد على عميل</InlineToast>}
      <DashboardShell variant="split" hideNav>
        <OrdersPage compact subText="٨٤ طلب · +١ رسالة عميل اليوم" />
      </DashboardShell>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen peer="customer">
          <div style={{ alignSelf: "flex-start" }}>
            <IncomingPlain>السلام عليكم، متى يوصل طلبي؟</IncomingPlain>
          </div>
          <div style={{ alignSelf: "flex-start" }}>
            <IncomingPlain>
              رقم الطلب <span style={{ fontFamily: "var(--w-font-mono)", direction: "ltr", display: "inline-block", fontWeight: 600 }}>#٢٨٤٧</span>
            </IncomingPlain>
          </div>
          {replyIn > 0.05 && (
            <div style={{ opacity: replyIn, transform: `translateY(${(1 - replyIn) * 10}px)` }}>
              <WosoolReplyBubble time="٢:٢٢ م" showDone={false}>
                مساك الله بالخير 👋 طلبك{" "}
                <span style={{ fontFamily: "var(--w-font-mono)", direction: "ltr", display: "inline-block", fontWeight: 600 }}>#٢٨٤٧</span> خرج من المستودع اليوم،
                يوصلك <b>يوم الثلاثاء</b> بإذن الله.
                <br />
                رقم التتبع: <span style={{ fontFamily: "var(--w-font-mono)", direction: "ltr", display: "inline-block", fontWeight: 600 }}>SP-48210-KSA</span>.
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
      <FrameCaption label="Customer · Answered" ar="— وكيل العملاء يرد" />
    </LightSurface>
  );
}

function IncomingPlain({ children, time = "٢:٢٢ م" }: { children: React.ReactNode; time?: string }) {
  return (
    <div
      style={{
        background: "#1F2C33",
        borderRadius: 12,
        borderBottomLeftRadius: 2,
        padding: "8px 10px 6px",
        maxWidth: "82%",
        color: "#E9EDEF",
        fontSize: 14,
        lineHeight: 1.4,
      }}
    >
      <div>{children}</div>
      <span
        style={{
          display: "inline-block",
          marginInlineStart: 8,
          fontSize: 10.5,
          color: "rgba(233,237,239,0.5)",
          float: "inline-end",
          paddingTop: 4,
        }}
      >
        {time}
      </span>
    </div>
  );
}
