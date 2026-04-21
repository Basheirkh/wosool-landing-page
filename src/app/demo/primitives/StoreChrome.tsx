interface Props {
  /** Breadcrumb trail; last entry is styled as current */
  crumbs?: string[];
  /** Right-aligned mark text (uppercase mono) */
  mark?: string;
  /** Optional dot color next to mark (e.g. success green for "Live") */
  markDotColor?: string;
  /** Top offset (px); reference varies 48–60 between Install and Connection */
  top?: number;
}

const DEFAULT_CRUMBS = ["سلة", "متجر التطبيقات", "الذكاء الاصطناعي"];

export default function StoreChrome({
  crumbs = DEFAULT_CRUMBS,
  mark = "Salla App Store",
  markDotColor = "var(--w-border-strong)",
  top = 60,
}: Props) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        insetInlineStart: 80,
        insetInlineEnd: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "var(--w-text-muted)",
        fontSize: 14,
        letterSpacing: "0.01em",
        zIndex: 5,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: isLast ? "var(--w-text-soft)" : undefined, fontWeight: isLast ? 500 : undefined }}>
                {crumb}
              </span>
              {!isLast && <span style={{ color: "var(--w-border-strong)" }}>›</span>}
            </span>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 13,
          color: "var(--w-text-muted)",
          fontFamily: "var(--w-font-mono)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: markDotColor }} />
        {mark}
      </div>
    </div>
  );
}
