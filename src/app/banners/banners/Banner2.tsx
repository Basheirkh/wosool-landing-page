import type { CSSProperties } from "react";
import AgentBadgeCard from "../../demo/primitives/hook/AgentBadgeCard";

/**
 * Banner 02 — THE TEAM
 * Centered hero: top-eyebrow + huge headline + sub, then a 2×2 grid of
 * the four agent badges, then a closing line. Reuses AgentBadgeCard from
 * the /demo hook phase so the agent cards match the rest of the brand.
 */
export default function Banner2() {
  return (
    <>
      {/* Top stack */}
      <div style={topStack}>
        <div style={eyebrow}>نظام تشغيل المتجر</div>
        <h1 style={headline}>
          <span>أربعة وكلاء.</span>{" "}
          <span style={{ color: "var(--w-teal-700)" }}>متجرك بالكامل.</span>
        </h1>
        <p style={subheadline}>
          بدل راتب موظف واحد — أربعة موظفين أذكياء يشتغلون ٢٤/٧
        </p>
      </div>

      {/* 2×2 grid of agents, centered */}
      <div style={grid}>
        <AgentBadgeCard name="وكيل العملاء"  tagline="يرد على عملاءك في واتساب" color="blue"   icon={CUSTOMER} entry={1} />
        <AgentBadgeCard name="وكيل المدير"   tagline="ينفّذ أوامر المتجر بصوتك" color="violet" icon={OWNER}    entry={1} />
        <AgentBadgeCard name="وكيل الذكاء"   tagline="يحلل أداء متجرك كل صباح"  color="green"  icon={INTEL}    entry={1} />
        <AgentBadgeCard name="وكيل المبيعات" tagline="يساعد زوار متجرك مباشرة"  color="teal"   icon={SITE}     entry={1} />
      </div>

      {/* Bottom line */}
      <div style={bottomLine}>
        كل وكيل متخصص. <span style={{ color: "var(--w-teal-700)", fontWeight: 700 }}>كلهم يعرفون متجرك.</span>
      </div>
    </>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────

const topStack: CSSProperties = {
  position: "absolute",
  top: 100,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 18,
  textAlign: "center",
};

const eyebrow: CSSProperties = {
  fontSize: 18,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  fontFamily: "var(--w-font-mono, monospace)",
  color: "var(--w-teal-500)",
  fontWeight: 700,
};

const headline: CSSProperties = {
  fontSize: 96,
  fontWeight: 700,
  lineHeight: 1.05,
  letterSpacing: "-0.015em",
  color: "var(--w-ink)",
  margin: 0,
  maxWidth: 1200,
};

const subheadline: CSSProperties = {
  fontSize: 28,
  lineHeight: 1.4,
  color: "var(--w-text-soft)",
  fontWeight: 500,
  margin: 0,
  maxWidth: 900,
};

const grid: CSSProperties = {
  position: "absolute",
  top: 440,
  left: "50%",
  transform: "translateX(-50%)",
  display: "grid",
  gridTemplateColumns: "repeat(2, 320px)",
  columnGap: 72,
  rowGap: 56,
};

const bottomLine: CSSProperties = {
  position: "absolute",
  bottom: 96,
  left: 0,
  right: 0,
  textAlign: "center",
  fontSize: 26,
  color: "var(--w-text-soft)",
  fontWeight: 500,
};

// ── Agent SVG icons ─────────────────────────────────────────────────────

const iconCommon = {
  width: 34,
  height: 34,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const CUSTOMER = (
  <svg {...iconCommon} aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const OWNER = (
  <svg {...iconCommon} aria-hidden>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const INTEL = (
  <svg {...iconCommon} aria-hidden>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);
const SITE = (
  <svg {...iconCommon} aria-hidden>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
