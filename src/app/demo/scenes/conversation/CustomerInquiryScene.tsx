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

export default function CustomerInquiryScene({ ctx }: Props) {
  const msg1 = easeOutCubic(segment(ctx.progress, 0.1, 0.35));
  const msg2 = easeOutCubic(segment(ctx.progress, 0.4, 0.65));
  const typing = easeOutCubic(segment(ctx.progress, 0.7, 0.95));

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <DashboardShell variant="split" hideNav>
        <OrdersPage compact subText="عميل يسأل · بانتظار الرد" />
      </DashboardShell>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen peer="customer">
          {msg1 > 0.05 && (
            <div
              style={{
                alignSelf: "flex-start",
                opacity: msg1,
                transform: `translateY(${(1 - msg1) * 10}px)`,
                willChange: "transform, opacity",
              }}
            >
              <IncomingPlain time="٢:٢٢ م">السلام عليكم، متى يوصل طلبي؟</IncomingPlain>
            </div>
          )}
          {msg2 > 0.05 && (
            <div
              style={{
                alignSelf: "flex-start",
                opacity: msg2,
                transform: `translateY(${(1 - msg2) * 10}px)`,
              }}
            >
              <IncomingPlain time="٢:٢٢ م">
                رقم الطلب <span style={{ fontFamily: "var(--w-font-mono)", direction: "ltr", display: "inline-block", fontWeight: 600 }}>#٢٨٤٧</span>
              </IncomingPlain>
            </div>
          )}
          {typing > 0.1 && (
            <div style={{ opacity: typing }}>
              <TypingBubble />
            </div>
          )}
          {/* Keep a merchant message reference offscreen (not visible here) — focus is customer */}
          <div style={{ display: "none" }}>
            <TextBubble>merchant</TextBubble>
          </div>
        </WAChatScreen>
      </PhoneMockup>
      <FrameCaption label="Customer · Inquiry" ar="— عميل يسأل" />
    </LightSurface>
  );
}

// Plain incoming bubble (no Wosool branding — this is a real customer)
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
