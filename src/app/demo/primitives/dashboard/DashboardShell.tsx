import type { CSSProperties, ReactNode } from "react";
import NavBar from "./NavBar";

type ShellVariant = "center" | "split" | "qr";

interface Props {
  variant?: ShellVariant;
  /** Dims the body except alert-card (used by spotlight-alert scene) */
  dimmed?: boolean;
  /** Mint ring glow around the whole shell (used by connected scene) */
  glow?: number;
  /** Hide the bottom nav (used for QR-only pages) */
  hideNav?: boolean;
  children: ReactNode;
}

const GEOMETRY: Record<ShellVariant, CSSProperties> = {
  center: {
    width: 1020,
    height: 920,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  qr: {
    width: 1020,
    maxHeight: 940,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  split: {
    // Physical right — keeps the dashboard on the right half regardless
    // of the RTL direction of the canvas. Phone mockup uses physical `left`
    // for the same reason; otherwise the two collide.
    width: 820,
    height: 920,
    right: 120,
    left: "auto",
    top: "50%",
    transform: "translateY(-50%)",
  },
};

export default function DashboardShell({
  variant = "center",
  dimmed = false,
  glow = 0,
  hideNav = false,
  children,
}: Props) {
  const geometry = GEOMETRY[variant];
  const glowShadow =
    glow > 0
      ? `0 0 0 2px rgba(115, 252, 215, ${glow}), 0 20px 60px rgba(115, 252, 215, ${glow * 0.25})`
      : "var(--w-sh-2)";

  const compact = variant === "split";
  const bodyPad = compact ? "32px 32px 22px" : "40px 44px 28px";
  const bodyGap = compact ? 16 : 20;

  return (
    <div
      style={{
        position: "absolute",
        background: "var(--w-surface)",
        border: "1px solid var(--w-border)",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: glowShadow,
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 200ms ease-out",
        ...geometry,
      }}
    >
      <div
        data-dimmed={dimmed || undefined}
        style={{
          flex: 1,
          padding: bodyPad,
          display: "flex",
          flexDirection: "column",
          gap: bodyGap,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      {!hideNav && <NavBar />}
      <style>{`
        [data-dimmed] > *:not([data-alert-card]):not([data-page-header]) {
          opacity: 0.32;
          filter: saturate(0.6);
          transition: opacity 200ms, filter 200ms;
        }
        [data-dimmed] > [data-page-header] { opacity: 0.55; transition: opacity 200ms; }
      `}</style>
    </div>
  );
}
