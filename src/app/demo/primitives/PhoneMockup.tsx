import type { CSSProperties, ReactNode } from "react";

interface Props {
  /** Tilt in degrees (negative tilts counter-clockwise) */
  tilt?: number;
  /** Scale multiplier (1 = authored size) */
  scale?: number;
  /** X offset from `left: 140px` anchor */
  offsetX?: number;
  /** Y offset around vertical center */
  offsetY?: number;
  /** Opacity 0..1 */
  opacity?: number;
  children: ReactNode;
}

const PHONE_W = 440;
const PHONE_H = 900;

export default function PhoneMockup({
  tilt = -8,
  scale = 1,
  offsetX = 0,
  offsetY = 0,
  opacity = 1,
  children,
}: Props) {
  const wrap: CSSProperties = {
    position: "absolute",
    left: 140 + offsetX,
    top: `calc(50% + ${offsetY}px)`,
    transform: `translateY(-50%) rotate(${tilt}deg) scale(${scale})`,
    transformOrigin: "center center",
    width: PHONE_W,
    height: PHONE_H,
    borderRadius: 68,
    background: "#111",
    padding: 14,
    opacity,
    boxShadow: "0 40px 80px rgba(11, 26, 31, 0.25), 0 0 0 2px #1f2937, inset 0 0 0 2px #000",
    willChange: "transform, opacity",
  };
  return (
    <div style={wrap}>
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 56,
          overflow: "hidden",
          background: "#0B141A",
          position: "relative",
          color: "#E9EDEF",
          fontFamily: "var(--w-font-ar), -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 32,
            background: "#000",
            borderRadius: 20,
            zIndex: 3,
          }}
        />
        {children}
      </div>
    </div>
  );
}

/** iOS-style status bar used by both WA screens */
export function PhoneStatusBar({ white }: { white?: boolean }) {
  const color = white ? "#fff" : "#E9EDEF";
  return (
    <div
      style={{
        position: "relative",
        padding: "18px 32px 10px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 14,
        fontWeight: 600,
        color,
        zIndex: 2,
      }}
    >
      <span>٩:٤١</span>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M1 18h3V9H1v9zm5 0h3V5H6v13zm5 0h3V1h-3v17zm5 0h3v-8h-3v8zm5-11v11h3V7h-3z" />
        </svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <rect x="2" y="8" width="18" height="10" rx="2" />
          <rect x="20" y="11" width="2" height="4" />
        </svg>
      </span>
    </div>
  );
}
