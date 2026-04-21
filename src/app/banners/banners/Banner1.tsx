import type { CSSProperties } from "react";
import PhoneMockup from "../../demo/primitives/PhoneMockup";
import WosoolMark from "../../demo/primitives/WosoolMark";
import {
  WAChatScreen,
  VoiceNoteBubble,
  WosoolReplyBubble,
  TrustChip,
} from "../../demo/primitives/whatsapp/WAChat";

/**
 * Banner 01 — THE PROMISE
 *
 * 50/50 horizontal split:
 *  - Physical LEFT: tilted iPhone with a 3-turn WhatsApp conversation
 *    (voice note → Wosool reply → "عبر وصول" trust chip), reusing the
 *    exact components the /demo page uses.
 *  - Physical RIGHT: eyebrow + big two-line tagline + subhead + teal
 *    divider + Salla-availability pill.
 *
 * Background: soft off-white (BannerFrame default) with a subtle mint
 * radial glow behind the phone to give the left half some air.
 */
export default function Banner1() {
  return (
    <>
      {/* Mint radial glow behind the phone — physical left half */}
      <div aria-hidden style={glow} />

      {/* Phone on physical left, tilted ~-5° */}
      <PhoneMockup tilt={-5} offsetX={120}>
        <WAChatScreen online>
          <VoiceNoteBubble playhead={1} />
          <WosoolReplyBubble time="٢:١٤ م">
            سماعة X —{" "}
            <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>١٤٩ ريال</span>{" "}
            — مخزون{" "}
            <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>٢٥</span>.
            <br />
            تبي أحط لها صور؟
          </WosoolReplyBubble>
          <TrustChip />
        </WAChatScreen>
      </PhoneMockup>

      {/* Text stack on physical right, vertically centered */}
      <div style={textStack}>
        <div style={eyebrow}>وصول</div>
        <h1 style={headline}>
          تكلّم <span style={{ color: "var(--w-teal-700)" }}>متجرك</span>.
          <br />
          يسويه.
        </h1>
        <p style={subheadline}>موظف ذكي يدير متجر سلة بالكامل من واتساب</p>
        <div aria-hidden style={divider} />
        <SallaPill />
      </div>
    </>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────

const glow: CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(ellipse 560px 460px at 480px 540px, rgba(115, 252, 215, 0.24), transparent 70%)",
  pointerEvents: "none",
};

const textStack: CSSProperties = {
  position: "absolute",
  right: 126,
  top: "50%",
  transform: "translateY(-50%)",
  width: 760,
  display: "flex",
  flexDirection: "column",
  // RTL column cross-axis: flex-start = physical right
  alignItems: "flex-start",
  textAlign: "right",
  gap: 26,
};

const eyebrow: CSSProperties = {
  fontSize: 20,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  fontFamily: "var(--w-font-mono, monospace)",
  color: "var(--w-teal-500)",
  fontWeight: 700,
};

const headline: CSSProperties = {
  fontSize: 124,
  fontWeight: 700,
  lineHeight: 1.02,
  letterSpacing: "-0.02em",
  color: "var(--w-ink)",
  margin: 0,
};

const subheadline: CSSProperties = {
  fontSize: 30,
  lineHeight: 1.42,
  color: "var(--w-text-soft)",
  fontWeight: 500,
  margin: 0,
  maxWidth: "26ch",
};

const divider: CSSProperties = {
  width: 88,
  height: 3,
  background: "var(--w-teal-700)",
  borderRadius: 2,
  marginTop: 6,
};

// ── Salla availability pill ─────────────────────────────────────────────

function SallaPill() {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 22px 14px 18px",
        borderRadius: 999,
        background: "var(--w-surface)",
        border: "1px solid var(--w-border)",
        boxShadow: "0 4px 14px rgba(11, 26, 31, 0.06)",
      }}
    >
      <WosoolBadge />
      <span style={{ fontSize: 19, fontWeight: 600, color: "var(--w-ink)" }}>
        متوفر في متجر تطبيقات سلة
      </span>
    </div>
  );
}

/** Mint tile with the Wosool infinity mark — the same badge style used
 *  in the dashboard header throughout the demo. */
function WosoolBadge() {
  return (
    <span
      style={{
        display: "inline-flex",
        width: 30,
        height: 30,
        borderRadius: 8,
        background: "var(--w-mint-500)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WosoolMark size={20} color="var(--w-ink)" />
    </span>
  );
}
