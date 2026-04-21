import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import PoliciesPage from "../../primitives/policies/PoliciesPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { TextBubble, WosoolReplyBubble, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import { clamp01, easeInOutCubic, easeOutCubic, segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "../connection/chrome";

interface Props {
  ctx: SceneContext;
}

export default function ShippingExtractScene({ ctx }: Props) {
  const textIn = easeOutCubic(segment(ctx.progress, 0.05, 0.35));
  const extractP = easeInOutCubic(segment(ctx.progress, 0.3, 0.7));
  const replyIn = clamp01((ctx.progress - 0.6) / 0.35);

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      <DashboardShell variant="split" hideNav>
        <PoliciesPage compact extractProgress={extractP} />
      </DashboardShell>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen online>
          {textIn > 0.05 && (
            <div style={{ opacity: textIn, transform: `translateY(${(1 - textIn) * 10}px)`, alignSelf: "flex-end" }}>
              <TextBubble time="٢:٢٥ م">أصدر بوليصات طلبيات اليوم الجاهزة، وأرسل الملخص للمدير</TextBubble>
            </div>
          )}
          {replyIn > 0.05 && (
            <div style={{ opacity: replyIn, transform: `translateY(${(1 - replyIn) * 10}px)` }}>
              <WosoolReplyBubble time="٢:٢٥ م">
                أصدرت <b>٣ بوليصات</b> — جاهزة للطباعة. أرسلت ملخصاً للمدير على الرقم{" "}
                <span style={{ fontFamily: "var(--w-font-mono)", direction: "ltr", display: "inline-block", fontWeight: 600 }}>+٩٦٦ ٥٥ ١ ٢٣٤</span>.
              </WosoolReplyBubble>
            </div>
          )}
        </WAChatScreen>
      </PhoneMockup>
      <FrameCaption label="Issue · Waybills" ar="— يصدر بوليصات اليوم" />
    </LightSurface>
  );
}
