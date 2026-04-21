import type { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LightSurface({ children }: Props) {
  const grid: CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(var(--w-border) 1px, transparent 1px), linear-gradient(90deg, var(--w-border) 1px, transparent 1px)",
    backgroundSize: "80px 80px",
    opacity: 0.35,
    pointerEvents: "none",
    maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
    WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
  };
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        // Transparent — the phase-tinted canvas shows through, so scene
        // cross-fades no longer flash black between frames.
        background: "transparent",
        color: "var(--w-text)",
        fontFamily: "var(--w-font-ar)",
        overflow: "hidden",
      }}
    >
      <div aria-hidden style={grid} />
      {children}
    </div>
  );
}
