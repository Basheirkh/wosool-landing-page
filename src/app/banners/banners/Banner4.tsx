import type { CSSProperties, ReactNode } from "react";
import PhoneMockup from "../../demo/primitives/PhoneMockup";
import {
  WAChatScreen,
  VoiceNoteBubble,
  TextBubble,
  WosoolReplyBubble,
  TrustChip,
} from "../../demo/primitives/whatsapp/WAChat";
import ProductRow from "../../demo/primitives/products/ProductRow";

/**
 * Banner 04 — MANAGER AGENT (voice → action)
 *
 * 50/50 split top half, single closing band across the bottom.
 *  - LEFT:  phone — voice note + Wosool reply ("كانت ٢٩٩ — صارت ٢٧٩").
 *    Label above: "صوت أو نص — وصول يفهم".
 *  - RIGHT: single-row dashboard snippet with the Camera 4K row pulsing
 *    and showing the price morph. Label above: "متجرك — تحدّث في الوقت الفعلي".
 *  - BOTTOM: H1 "وكيل المدير — قول، ينفّذ." + sub "تعديل الأسعار، حالة الطلب…".
 */
export default function Banner4() {
  return (
    <>
      {/* Phone-side label */}
      <div style={labelLeft}>صوت أو نص — وصول يفهم</div>

      {/* Phone, physical left */}
      <PhoneMockup tilt={-4} offsetX={100} scale={0.82} offsetY={-60}>
        <WAChatScreen online>
          <VoiceNoteBubble playhead={1} duration="0:06" time="٢:١٩ م" />
          <TextBubble time="٢:١٩ م" small>
            ضيف كاميرا 4K احترافية —{" "}
            <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 700 }}>٧ قطع</span>،
            السعر{" "}
            <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 700 }}>٢٧٩ ريال</span>.
          </TextBubble>
          <WosoolReplyBubble time="٢:٢٠ م">
            تمت الإضافة ✓ — كاميرا 4K،{" "}
            <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 700, color: "var(--w-mint-500)" }}>٢٧٩ ريال</span>،
            المخزون{" "}
            <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>٧</span>.
          </WosoolReplyBubble>
          <TrustChip />
        </WAChatScreen>
      </PhoneMockup>

      {/* Dashboard snippet, physical right */}
      <div style={dashLabel}>متجرك — تحدّث في الوقت الفعلي</div>
      <div style={dashFrame}>
        <div aria-hidden style={rowGlow} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <ProductRow
            color="amber"
            thumbIcon={CAMERA_ICON}
            name="كاميرا 4K احترافية"
            sku="4210"
            stock="المخزون: ٧ قطع"
            state="new"
            price="٢٧٩"
            statusText="جديد"
            statusAccent
            extraMeta={<FromWhatsApp />}
          />
        </div>
      </div>

      {/* Bottom band */}
      <div style={bottomBand}>
        <h1 style={headline}>
          وكيل المدير — <span style={{ color: "var(--w-teal-700)" }}>قول، ينفّذ.</span>
        </h1>
        <p style={sub}>تعديل الأسعار، حالة الطلب، إضافة منتج — كله بصوتك.</p>
      </div>
    </>
  );
}

// ── Small helpers ───────────────────────────────────────────────────────

const CAMERA_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

function FromWhatsApp(): ReactNode {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--w-teal-700)", fontWeight: 600, fontSize: 13 }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      </svg>
      عُدِّل من واتساب
    </span>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────

const labelLeft: CSSProperties = {
  position: "absolute",
  left: 96,
  top: 100,
  fontSize: 18,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontFamily: "var(--w-font-mono, monospace)",
  color: "var(--w-teal-500)",
  fontWeight: 700,
};

const dashLabel: CSSProperties = {
  position: "absolute",
  right: 96,
  top: 100,
  fontSize: 18,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontFamily: "var(--w-font-mono, monospace)",
  color: "var(--w-teal-500)",
  fontWeight: 700,
};

const dashFrame: CSSProperties = {
  position: "absolute",
  right: 96,
  top: 200,
  width: 780,
  padding: 40,
  background: "var(--w-surface)",
  border: "1px solid var(--w-border)",
  borderRadius: 20,
  boxShadow: "0 12px 32px rgba(11, 26, 31, 0.06)",
};

const rowGlow: CSSProperties = {
  position: "absolute",
  inset: -12,
  borderRadius: 28,
  background: "radial-gradient(ellipse 420px 180px at 50% 50%, rgba(115, 252, 215, 0.2), transparent 70%)",
  pointerEvents: "none",
  zIndex: 0,
};

const bottomBand: CSSProperties = {
  position: "absolute",
  bottom: 77,
  left: 0,
  right: 0,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 14,
};

const headline: CSSProperties = {
  fontSize: 72,
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: "-0.015em",
  color: "var(--w-ink)",
  margin: 0,
};

const sub: CSSProperties = {
  fontSize: 24,
  color: "var(--w-text-soft)",
  fontWeight: 500,
  margin: 0,
  maxWidth: 1000,
};
