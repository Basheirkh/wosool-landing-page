interface Props {
  /** 0..1 progress for slide-in */
  progress: number;
}

export default function SuccessToast({ progress }: Props) {
  const eased = 1 - Math.pow(1 - Math.max(0, Math.min(1, progress)), 3);
  const y = -40 * (1 - eased);
  const opacity = eased;
  return (
    <div
      role="status"
      style={{
        position: "absolute",
        top: 140,
        left: "50%",
        transform: `translate(-50%, ${y}px)`,
        opacity,
        background: "var(--w-ink)",
        color: "#fff",
        borderRadius: "var(--w-r-full)",
        padding: "16px 28px 16px 24px",
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        fontSize: 18,
        fontWeight: 500,
        whiteSpace: "nowrap",
        boxShadow: "var(--w-sh-3)",
        willChange: "transform, opacity",
      }}
    >
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "var(--w-mint-500)",
          color: "var(--w-ink)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span>وصول جاهز للاستخدام</span>
      <span
        aria-hidden
        style={{
          color: "var(--w-text-muted)",
          display: "inline-flex",
          paddingInlineStart: 6,
          borderInlineStart: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </span>
    </div>
  );
}
