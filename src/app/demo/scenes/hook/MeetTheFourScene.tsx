import type { SceneContext } from "../../engine/types";
import AgentBadgeCard from "../../primitives/hook/AgentBadgeCard";
import { easeOutCubic, segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

const CUSTOMER = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const OWNER = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const INTEL = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);
const SITE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export default function MeetTheFourScene({ ctx }: Props) {
  // Staggered entry — 4 cards, 180ms offsets, each takes ~450ms to settle
  const stagger = 0.06;
  const span = 0.25;
  const entries = [
    easeOutCubic(segment(ctx.progress, 0.00, 0.00 + span)),
    easeOutCubic(segment(ctx.progress, 0.0 + stagger, stagger + span)),
    easeOutCubic(segment(ctx.progress, 0.0 + stagger * 2, stagger * 2 + span)),
    easeOutCubic(segment(ctx.progress, 0.0 + stagger * 3, stagger * 3 + span)),
  ];
  const eyebrowIn = easeOutCubic(segment(ctx.progress, 0.7, 0.9));
  const taglineIn = easeOutCubic(segment(ctx.progress, 0.72, 0.95));

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 48 }}>
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: "var(--w-font-mono)",
          fontSize: 14,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--w-text-soft)",
          opacity: entries[0],
          transform: `translateY(${(1 - entries[0]) * 10}px)`,
          willChange: "transform, opacity",
        }}
      >
        تعرّف على وصول
      </div>

      <div style={{ display: "flex", gap: 24 }}>
        <AgentBadgeCard name="موظف العملاء" tagline="يرد أسرع منك" color="blue" icon={CUSTOMER} entry={entries[0]} />
        <AgentBadgeCard name="موظف المدير" tagline="قوله — ينفّذ" color="violet" icon={OWNER} entry={entries[1]} />
        <AgentBadgeCard name="موظف الذكاء" tagline="تقرير كل صباح" color="green" icon={INTEL} entry={entries[2]} />
        <AgentBadgeCard name="موظف الموقع" tagline="يرد من داخل المتجر" color="teal" icon={SITE} entry={entries[3]} />
      </div>

      {/* Closing punch */}
      <div
        style={{
          fontFamily: "var(--w-font-ar)",
          fontSize: 52,
          fontWeight: 700,
          color: "var(--w-ink)",
          letterSpacing: "-0.015em",
          textAlign: "center",
          opacity: taglineIn,
          transform: `translateY(${(1 - taglineIn) * 12}px)`,
          willChange: "transform, opacity",
        }}
      >
        أربعة موظفين. <span style={{ color: "var(--w-teal-700)" }}>ما ينامون.</span>
      </div>
      <div
        style={{
          fontFamily: "var(--w-font-ar)",
          fontSize: 18,
          color: "var(--w-text-soft)",
          marginTop: -24,
          opacity: eyebrowIn,
        }}
      >
        لأصحاب المتاجر الإلكترونية في السعودية
      </div>
    </div>
  );
}
