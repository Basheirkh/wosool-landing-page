import type { CSSProperties, ReactNode } from "react";

type AgentColor = "blue" | "violet" | "green" | "idle";

const AVATAR_BG: Record<AgentColor, string> = {
  blue:   "linear-gradient(135deg, #3B82F6, #60A5FA)",
  violet: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
  green:  "linear-gradient(135deg, #10B981, #34D399)",
  idle:   "var(--w-surface-2)",
};

const METRIC_COLOR: Record<AgentColor, string> = {
  blue:   "var(--w-agent-customer)",
  violet: "var(--w-agent-owner)",
  green:  "var(--w-agent-sales)",
  idle:   "var(--w-text-muted)",
};

interface Props {
  color: AgentColor;
  title: string;
  sub: string;
  /** SVG icon for the avatar */
  icon: ReactNode;
  /** If set, show numeric metric + label; otherwise show badge */
  metric?: { value: string; label: string };
  /** If true, show "نشط" green badge instead of metric */
  activeBadge?: boolean;
  /** Optional focus ring (for agents-stagger sub-scene) */
  focusIntensity?: number;
  /** Compact (used in split variant) */
  compact?: boolean;
}

export default function AgentRow({
  color,
  title,
  sub,
  icon,
  metric,
  activeBadge,
  focusIntensity = 0,
  compact = false,
}: Props) {
  const isIdle = color === "idle";
  const avStyle: CSSProperties = {
    width: compact ? 42 : 52,
    height: compact ? 42 : 52,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flexShrink: 0,
    color: isIdle ? "var(--w-text-muted)" : "#fff",
    background: AVATAR_BG[color],
    border: isIdle ? "1px solid var(--w-border)" : undefined,
  };
  const dotColor = isIdle ? "var(--w-text-muted)" : "var(--w-success)";

  const focusShadow =
    focusIntensity > 0
      ? `0 0 0 ${Math.round(2 + focusIntensity * 4)}px rgba(115, 252, 215, ${0.25 + focusIntensity * 0.35})`
      : "none";

  return (
    <div
      style={{
        background: "var(--w-surface)",
        border: "1px solid var(--w-border)",
        borderRadius: 14,
        padding: compact ? "14px 16px" : "18px 20px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        boxShadow: focusShadow,
        transition: "box-shadow 120ms ease-out",
      }}
    >
      <div style={avStyle}>
        {icon}
        <span
          style={{
            position: "absolute",
            bottom: -2,
            insetInlineEnd: -2,
            width: 14,
            height: 14,
            borderRadius: "50%",
            border: "2px solid var(--w-surface)",
            background: dotColor,
          }}
        />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <b style={{ display: "block", fontSize: compact ? 15 : 17, fontWeight: 700, color: "var(--w-ink)" }}>{title}</b>
        <span style={{ display: "block", fontSize: compact ? 12 : 13, color: "var(--w-text-soft)", marginTop: 3 }}>
          {sub}
        </span>
      </div>
      {activeBadge ? (
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.04em",
            padding: "4px 10px",
            borderRadius: 999,
            background: "var(--w-success-soft)",
            color: "var(--w-success)",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} />
          نشط
        </span>
      ) : metric ? (
        <div style={{ textAlign: "left", flexShrink: 0 }}>
          <div
            style={{
              fontSize: compact ? 24 : 30,
              fontWeight: 800,
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              color: METRIC_COLOR[color],
            }}
          >
            {metric.value}
          </div>
          <div style={{ fontSize: 11, color: "var(--w-text-soft)", marginTop: 4, fontWeight: 500 }}>{metric.label}</div>
        </div>
      ) : null}
    </div>
  );
}
