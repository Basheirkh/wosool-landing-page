import WosoolMark from "../WosoolMark";

interface Props {
  title: string;
  sub: string;
  /** Smaller typography (used in split variant) */
  compact?: boolean;
  showBrandName?: boolean;
}

export default function DashboardHeader({ title, sub, compact = false, showBrandName = true }: Props) {
  return (
    <div data-page-header style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
      <div>
        <h1
          style={{
            fontSize: compact ? 24 : 30,
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            color: "var(--w-ink)",
          }}
        >
          {title}
        </h1>
        <div
          style={{
            fontSize: compact ? 14 : 16,
            color: "var(--w-text-soft)",
            marginTop: 4,
            whiteSpace: "nowrap",
          }}
        >
          {sub}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            background: "var(--w-mint-500)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WosoolMark size={22} />
        </div>
        {showBrandName && (
          <span style={{ fontSize: 15, fontWeight: 700, color: "var(--w-ink)" }}>وصول</span>
        )}
      </div>
    </div>
  );
}
