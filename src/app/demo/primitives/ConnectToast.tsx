interface Props {
  /** 0..1 progress for slide-in */
  progress: number;
}

export default function ConnectToast({ progress }: Props) {
  const eased = 1 - Math.pow(1 - Math.max(0, Math.min(1, progress)), 3);
  const y = -36 * (1 - eased);
  const opacity = eased;
  return (
    <div
      role="status"
      style={{
        position: "absolute",
        top: 120,
        insetInlineEnd: 120,
        background: "var(--w-ink)",
        color: "#fff",
        borderRadius: 999,
        padding: "14px 22px 14px 18px",
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        fontSize: 16,
        fontWeight: 500,
        whiteSpace: "nowrap",
        boxShadow: "var(--w-sh-3)",
        zIndex: 6,
        transform: `translateY(${y}px)`,
        opacity,
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
      <span>تم ربط واتساب بنجاح</span>
    </div>
  );
}
