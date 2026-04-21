interface Props {
  /** "01" through "06" */
  n: string;
  /** Banner name, shown below the number */
  label: string;
}

/**
 * Phase-1 placeholder fill. Each banner component defers to this until
 * its real composition lands in Phases 2–7. Kept deliberately minimal so
 * that the scaffold reads as "intentional empty" rather than "broken".
 */
export default function Placeholder({ n, label }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        background: "#E5E7EB",
        color: "#6B7280",
      }}
    >
      <div style={{ fontSize: 160, fontWeight: 800, lineHeight: 1, fontFamily: "var(--w-font-mono, monospace)" }}>
        {n}
      </div>
      <div style={{ fontSize: 28, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
        {label}
      </div>
      <div style={{ fontSize: 14, color: "#9CA3AF", marginTop: 12, fontFamily: "var(--w-font-mono, monospace)" }}>
        PLACEHOLDER · Phase 1 scaffolding
      </div>
    </div>
  );
}
