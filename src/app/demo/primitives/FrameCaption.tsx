interface Props {
  num?: string;
  label: string;
  ar?: string;
}

export default function FrameCaption({ num, label, ar }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 48,
        insetInlineStart: 80,
        display: "flex",
        alignItems: "baseline",
        gap: 16,
        color: "var(--w-text-muted)",
        fontFamily: "var(--w-font-mono)",
        fontSize: 12,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      {num && <span style={{ color: "var(--w-ink)", fontWeight: 700, fontSize: 13 }}>{num}</span>}
      <span>{label}</span>
      {ar && (
        <span
          style={{
            fontFamily: "var(--w-font-ar)",
            textTransform: "none",
            letterSpacing: 0,
            color: "var(--w-text-soft)",
            fontSize: 13,
          }}
        >
          {ar}
        </span>
      )}
    </div>
  );
}
