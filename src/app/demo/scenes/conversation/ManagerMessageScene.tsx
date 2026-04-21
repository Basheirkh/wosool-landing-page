import type { SceneContext } from "../../engine/types";
import LightSurface from "../../primitives/LightSurface";
import StoreChrome from "../../primitives/StoreChrome";
import FrameCaption from "../../primitives/FrameCaption";
import DashboardShell from "../../primitives/dashboard/DashboardShell";
import PoliciesPage from "../../primitives/policies/PoliciesPage";
import PhoneMockup from "../../primitives/PhoneMockup";
import { WosoolReplyBubble, TrustChip, WAChatScreen } from "../../primitives/whatsapp/WAChat";
import InlineToast from "../../primitives/InlineToast";
import { easeOutCubic, segment } from "../../primitives/easing";
import { CONNECTED_CHROME } from "../connection/chrome";

interface Props {
  ctx: SceneContext;
}

export default function ManagerMessageScene({ ctx }: Props) {
  const msgIn = easeOutCubic(segment(ctx.progress, 0.1, 0.5));
  const chipIn = easeOutCubic(segment(ctx.progress, 0.5, 0.8));
  const toastT = segment(ctx.progress, 0.05, 0.4);

  return (
    <LightSurface>
      <StoreChrome {...CONNECTED_CHROME} />
      {toastT > 0.05 && <InlineToast progress={toastT} variant="pencil">رسالة للمدير · بوليصات اليوم</InlineToast>}
      <DashboardShell variant="split" hideNav>
        <PoliciesPage compact extractProgress={1} />
      </DashboardShell>
      <PhoneMockup tilt={0} offsetX={20}>
        <WAChatScreen peer="manager" online>
          {msgIn > 0.05 && (
            <div style={{ opacity: msgIn, transform: `translateY(${(1 - msgIn) * 10}px)` }}>
              <WosoolReplyBubble time="٢:٢٥ م">
                صباح الخير 🌅 صدرت بوليصات طلبيات اليوم — جاهزة للطباعة والتسليم:
                <div
                  style={{
                    marginTop: 6,
                    padding: "8px 10px",
                    background: "rgba(115, 252, 215, 0.08)",
                    border: "1px solid rgba(115, 252, 215, 0.25)",
                    borderRadius: 8,
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  • طلب{" "}
                  <span dir="ltr" style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600, display: "inline-block" }}>#٢٨٤٩</span>{" "}
                  — خالد العنزي · الرياض
                  <br />
                  • طلب{" "}
                  <span dir="ltr" style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600, display: "inline-block" }}>#٢٨٤٨</span>{" "}
                  — نورة الدوسري · جدة
                  <br />
                  • طلب{" "}
                  <span dir="ltr" style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600, display: "inline-block" }}>#٢٨٤٧</span>{" "}
                  — عبدالله السالم · الدمام
                </div>
                تبي أطبعها من لوحة الشحن؟
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
      <FrameCaption label="Manager · Waybills in hand" ar="— وصلت للمدير" />
    </LightSurface>
  );
}
