import type { CSSProperties } from "react";
import { easeOutCubic, segment } from "../easing";

interface Props {
  /** Overall scene progress 0..1 */
  progress: number;
}

/**
 * Two-column price comparison: human employee (struck through, muted)
 * vs. Wosool (vivid, mint-glowing). Slides in from outer edges, then
 * the strikethrough grows across the left column.
 */
export default function CompareColumns({ progress }: Props) {
  const leftIn = easeOutCubic(segment(progress, 0.05, 0.35));
  const rightIn = easeOutCubic(segment(progress, 0.15, 0.45));
  const strike = easeOutCubic(segment(progress, 0.35, 0.55));
  const vsPulse = easeOutCubic(segment(progress, 0.15, 0.45));
  const ctaIn = easeOutCubic(segment(progress, 0.65, 0.95));

  const humanLeft: CSSProperties = {
    position: "absolute",
    top: 200,
    insetInlineStart: 180,
    width: 680,
    padding: "48px 44px",
    background: "var(--w-surface)",
    border: "1px solid var(--w-border)",
    borderRadius: 24,
    textAlign: "center",
    opacity: 0.55 * leftIn,
    transform: `translateX(${(1 - leftIn) * -40}px)`,
    boxShadow: "0 8px 24px rgba(11, 26, 31, 0.04)",
    willChange: "transform, opacity",
  };

  const wosoolRight: CSSProperties = {
    position: "absolute",
    top: 200,
    insetInlineEnd: 180,
    width: 680,
    padding: "48px 44px",
    background: "var(--w-surface)",
    border: "1.5px solid var(--w-mint-500)",
    borderRadius: 24,
    textAlign: "center",
    opacity: rightIn,
    transform: `translateX(${(1 - rightIn) * 40}px)`,
    boxShadow: `0 0 0 ${Math.round(4 + rightIn * 8)}px rgba(115, 252, 215, ${0.15 + rightIn * 0.2}), 0 12px 32px rgba(0, 178, 89, 0.12)`,
    willChange: "transform, opacity",
  };

  return (
    <>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 110,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--w-font-mono)",
          fontSize: 14,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--w-text-soft)",
          opacity: leftIn * 0.8 + rightIn * 0.2,
        }}
      >
        المقارنة الحقيقية
      </div>

      {/* LEFT column — human employee, struck through */}
      <div style={humanLeft}>
        <div style={{ fontSize: 16, color: "var(--w-text-muted)", marginBottom: 12, fontFamily: "var(--w-font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          موظف واحد · بشري
        </div>
        <div style={{ position: "relative", display: "inline-block", marginBottom: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: "var(--w-ink)", fontFamily: "var(--w-font-mono)", lineHeight: 1 }}>
            ٣,٠٠٠+
          </div>
          <div style={{ fontSize: 17, color: "var(--w-text-soft)", marginTop: 6 }}>ريال / شهر</div>
          {/* strikethrough */}
          <span
            aria-hidden
            style={{
              position: "absolute",
              left: "-10%",
              top: "45%",
              height: 4,
              width: `${strike * 120}%`,
              background: "var(--w-danger)",
              borderRadius: 2,
              boxShadow: "0 0 8px rgba(245, 67, 74, 0.35)",
              transformOrigin: "left",
              pointerEvents: "none",
              willChange: "width",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 16, color: "var(--w-text-soft)" }}>
          <span>يتعب · ينام · يطلب إجازة</span>
          <span>٨ ساعات في اليوم</span>
          <span>راتب + تأمين + مكافآت</span>
        </div>
      </div>

      {/* The "vs" pill — centered */}
      <div
        style={{
          position: "absolute",
          top: 340,
          left: "50%",
          transform: `translateX(-50%) scale(${0.8 + vsPulse * 0.2})`,
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "var(--w-mint-500)",
          color: "var(--w-ink)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--w-font-display), var(--w-font-ar)",
          fontSize: 22,
          fontWeight: 800,
          opacity: vsPulse,
          boxShadow: `0 0 0 ${Math.round(4 + vsPulse * 8)}px rgba(115, 252, 215, ${0.12 + vsPulse * 0.18})`,
          zIndex: 3,
          willChange: "transform, opacity",
        }}
      >
        vs
      </div>

      {/* RIGHT column — Wosool */}
      <div style={wosoolRight}>
        <div style={{ fontSize: 16, color: "var(--w-teal-700)", marginBottom: 12, fontFamily: "var(--w-font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700 }}>
          وصول · ٤ موظفين
        </div>
        <div style={{ marginBottom: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "var(--w-teal-700)",
              fontFamily: "var(--w-font-mono)",
              lineHeight: 1,
            }}
          >
            ٢٩٩
          </div>
          <div style={{ fontSize: 17, color: "var(--w-text-soft)", marginTop: 6 }}>ريال / شهر</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 16, color: "var(--w-ink)" }}>
          <span style={{ fontWeight: 600 }}>ما ينامون · ما يتعبون</span>
          <span style={{ color: "var(--w-text-soft)" }}>٢٤/٧ · كل أيام السنة</span>
          <span style={{ color: "var(--w-text-soft)" }}>عربي · PDPL متوافق</span>
        </div>
      </div>

      {/* CTA line — appears last */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: `translate(-50%, ${(1 - ctaIn) * 10}px)`,
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          opacity: ctaIn,
          fontFamily: "var(--w-font-ar)",
          fontSize: 22,
          fontWeight: 500,
          color: "var(--w-ink)",
          willChange: "transform, opacity",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--w-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>اشتراك شهري · بدون عقد · جرّب مجاناً ٧ أيام</span>
      </div>
    </>
  );
}
