import type { CSSProperties, ReactNode } from "react";

interface Props {
  name: string;
  tagline: string;
  icon: ReactNode;
  color: "blue" | "violet" | "green" | "teal";
  /** 0..1 entry progress */
  entry: number;
}

const GRAD: Record<Props["color"], string> = {
  blue:   "linear-gradient(135deg, #3B82F6, #60A5FA)",
  violet: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
  green:  "linear-gradient(135deg, #10B981, #34D399)",
  teal:   "linear-gradient(135deg, #004D5B, #0A7380)",
};

const GLOW: Record<Props["color"], string> = {
  blue:   "rgba(59, 130, 246, 0.35)",
  violet: "rgba(139, 92, 246, 0.35)",
  green:  "rgba(16, 185, 129, 0.35)",
  teal:   "rgba(10, 115, 128, 0.35)",
};

export default function AgentBadgeCard({ name, tagline, icon, color, entry }: Props) {
  const style: CSSProperties = {
    width: 300,
    padding: "22px 20px",
    borderRadius: 18,
    background: "var(--w-surface)",
    border: "1px solid var(--w-border)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    textAlign: "center",
    opacity: entry,
    transform: `translateY(${(1 - entry) * 24}px) scale(${0.92 + 0.08 * entry})`,
    boxShadow: `0 10px 30px ${GLOW[color]}, 0 1px 2px rgba(11,26,31,0.04)`,
    willChange: "transform, opacity",
  };
  return (
    <div style={style}>
      <div
        style={{
          width: 68,
          height: 68,
          borderRadius: 16,
          background: GRAD[color],
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 8px 24px ${GLOW[color]}`,
        }}
      >
        {icon}
      </div>
      <b style={{ fontSize: 20, fontWeight: 700, color: "var(--w-ink)" }}>{name}</b>
      <span style={{ fontSize: 14, color: "var(--w-text-soft)", lineHeight: 1.45 }}>{tagline}</span>
    </div>
  );
}
