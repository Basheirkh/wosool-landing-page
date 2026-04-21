interface Props {
  /** Health percentage (0-100), can be fractional for smooth animation */
  percent: number;
  /** Color state; drives palette */
  state: "warn" | "ok";
  /** Highlight the warning display with an extra glow (for sub-scenes) */
  warnGlow?: number;
  /** Compact variant for split frames */
  compact?: boolean;
}

export default function HealthCard({ percent, state, warnGlow = 0, compact = false }: Props) {
  const isWarn = state === "warn";
  const bg = isWarn ? "var(--w-warning-soft)" : "var(--w-success-soft)";
  const borderColor = isWarn
    ? "color-mix(in srgb, var(--w-warning) 25%, transparent)"
    : "color-mix(in srgb, var(--w-success) 25%, transparent)";
  const coreBg = isWarn ? "#FFE9B8" : "#C8F5DA";
  const orbColor = isWarn ? "var(--w-warning)" : "var(--w-success)";

  const roundedPct = Math.round(percent);
  const pctColor = isWarn ? "var(--w-ink)" : "var(--w-success)";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: compact ? "14px 16px" : "20px 22px",
        borderRadius: 14,
        border: `1px solid ${borderColor}`,
        background: bg,
        boxShadow: warnGlow > 0 ? `0 0 0 ${6 * warnGlow}px rgba(245, 166, 35, ${0.12 * warnGlow})` : undefined,
        transition: "box-shadow 200ms ease-out",
      }}
    >
      <div style={{ position: "relative", width: compact ? 44 : 56, height: compact ? 44 : 56, flexShrink: 0 }}>
        <div
          style={{
            position: "absolute",
            inset: -6,
            borderRadius: "50%",
            border: `2px solid ${orbColor}`,
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: coreBg,
            color: orbColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isWarn ? (
            <svg width={compact ? 22 : 28} height={compact ? 22 : 28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          ) : (
            <svg width={compact ? 22 : 28} height={compact ? 22 : 28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: compact ? 17 : 20, fontWeight: 700, margin: 0, color: "var(--w-ink)" }}>
          صحة النظام{" "}
          <span dir="ltr" style={{ fontFamily: "var(--w-font-mono)" }}>
            {roundedPct}%
          </span>
          {!isWarn && " — كل الأنظمة تعمل"}
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 6, fontSize: 13, color: "var(--w-text-soft)", flexWrap: "wrap" }}>
          <Indicator on={!isWarn}>{isWarn ? "واتساب غير متصل" : "واتساب"}</Indicator>
          <Indicator on>{isWarn ? "قاعدة المتجر" : "قاعدة المتجر"}</Indicator>
          <Indicator on>{isWarn ? "الوكلاء جاهزون" : "الوكلاء"}</Indicator>
        </div>
      </div>
      <div
        style={{
          fontFamily: "var(--w-font-mono)",
          fontSize: compact ? 26 : 34,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: pctColor,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {roundedPct}
        <span style={{ fontSize: compact ? 16 : 22 }}>٪</span>
      </div>
    </div>
  );
}

function Indicator({ on, children }: { on: boolean; children: React.ReactNode }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: on ? "var(--w-success)" : "var(--w-danger)" }} />
      {children}
    </span>
  );
}
