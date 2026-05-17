import type { CSSProperties, ReactNode } from "react";
import PhoneMockup from "../../demo/primitives/PhoneMockup";
import {
  WAChatScreen,
  WosoolReplyBubble,
  TrustChip,
} from "../../demo/primitives/whatsapp/WAChat";

/**
 * Banner 03 — CUSTOMER AGENT (the 3AM moment)
 *
 * 40/60 split. Physical LEFT (40%): night-time label + phone showing a
 * customer inquiry with a Wosool reply. Physical RIGHT (60%): positioning
 * headline + three-line proof + closing echo of the cold-open pain.
 *
 * Background: soft off-white with a barely-there deep-teal gradient at
 * the bottom edge as a night cue without going dark.
 */
export default function Banner3() {
  return (
    <>
      {/* Night gradient at bottom */}
      <div aria-hidden style={nightGradient} />

      {/* Timestamp label above phone */}
      <div style={timeLabel}>
        <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "var(--w-teal-500)", marginInlineEnd: 12, verticalAlign: "middle" }} />
        ٢:٤٧ فجراً
      </div>

      {/* Phone, physical left */}
      <PhoneMockup tilt={-4} offsetX={80} scale={0.85}>
        <WAChatScreen peer="customer">
          <IncomingPlain time="٢:٤٧ ص">السلام عليكم، عندكم العطر الفلاني بحجم ١٠٠ مل؟</IncomingPlain>
          <WosoolReplyBubble time="٢:٤٧ ص" showDone={false}>
            وعليكم السلام 🌸 موجود —{" "}
            <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>١٠٠ مل</span>{" "}
            بـ <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600 }}>٢٨٠ ريال</span>، والشحن مجاني.
          </WosoolReplyBubble>
          <TrustChip />
        </WAChatScreen>
      </PhoneMockup>

      {/* Text stack, physical right */}
      <div style={textStack}>
        <div style={eyebrow}>وكيل العملاء</div>
        <h1 style={headline}>
          يرد على عملائك
          <br />
          <span style={{ color: "var(--w-teal-700)" }}>على مدار الساعة.</span>
        </h1>

        <ul style={proofList}>
          <ProofItem label="٣ ثوان" sub="متوسط زمن الرد" />
          <ProofItem label="٢٤/٧" sub="بدون انقطاع" />
          <ProofItem label="بالعربي" sub="بنبرتك" />
        </ul>

        <div aria-hidden style={divider} />

        <p style={echoLine}>ما يخلّي رسالة تضيع.</p>
      </div>
    </>
  );
}

// ── Plain incoming customer bubble (no Wosool branding) ─────────────────

function IncomingPlain({ children, time }: { children: ReactNode; time: string }) {
  return (
    <div
      style={{
        alignSelf: "flex-start",
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

// ── Proof item (big stat + small caption) ────────────────────────────────

function ProofItem({ label, sub }: { label: string; sub: string }) {
  return (
    <li style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
      <span style={{ color: "var(--w-teal-700)", fontSize: 22, marginInlineEnd: 2 }}>◆</span>
      <span style={{ fontSize: 30, fontWeight: 700, color: "var(--w-ink)", fontFamily: "var(--w-font-mono, monospace)" }}>
        {label}
      </span>
      <span style={{ fontSize: 22, color: "var(--w-text-soft)" }}>{sub}</span>
    </li>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────

const nightGradient: CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(0, 50, 60, 0.07) 100%)",
  pointerEvents: "none",
};

const timeLabel: CSSProperties = {
  position: "absolute",
  left: 80,
  top: 96,
  fontSize: 18,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontFamily: "var(--w-font-mono, monospace)",
  color: "var(--w-text-soft)",
  fontWeight: 600,
};

const textStack: CSSProperties = {
  position: "absolute",
  right: 126,
  top: "50%",
  transform: "translateY(-50%)",
  width: 920,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "right",
  gap: 28,
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
  fontSize: 108,
  fontWeight: 700,
  lineHeight: 1.05,
  letterSpacing: "-0.015em",
  color: "var(--w-ink)",
  margin: 0,
};

const proofList: CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const divider: CSSProperties = {
  width: 88,
  height: 3,
  background: "var(--w-mint-500)",
  borderRadius: 2,
  marginTop: 4,
};

const echoLine: CSSProperties = {
  fontSize: 26,
  fontWeight: 500,
  color: "var(--w-text-soft)",
  fontStyle: "italic",
  margin: 0,
};
