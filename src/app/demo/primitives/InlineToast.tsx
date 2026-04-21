import type { ReactNode } from "react";

type Variant = "success" | "pencil";

interface Props {
  /** 0..1 slide-in progress */
  progress: number;
  variant?: Variant;
  children: ReactNode;
}

export default function InlineToast({ progress, variant = "success", children }: Props) {
  const eased = 1 - Math.pow(1 - Math.max(0, Math.min(1, progress)), 3);
  const y = -36 * (1 - eased);
  const opacity = eased;

  const iconBg = variant === "success" ? "var(--w-success)" : "var(--w-mint-500)";
  const iconColor = variant === "success" ? "#fff" : "var(--w-ink)";
  const icon = variant === "success" ? (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ) : (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  );

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
        padding: "12px 20px 12px 16px",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontSize: 15,
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
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: iconBg,
          color: iconColor,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </span>
      <span>{children}</span>
    </div>
  );
}
