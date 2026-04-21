import type { CSSProperties, ReactNode } from "react";

interface Props {
  id: number;
  /** UPPERCASE banner name — shown in the bottom-left caption */
  name: string;
  /** Optional override for the canvas background (default: soft off-white) */
  background?: string;
  children: ReactNode;
}

/**
 * Wraps a banner composition at EXACTLY 1920×1080. Every banner mounts
 * inside one of these — the render script targets `data-banner-id` to
 * take a screenshot at exactly authored dimensions.
 *
 * Bottom-left caption ("BANNER 0X — NAME") is part of the deliverable and
 * is captured in the PNG export.
 */
export default function BannerFrame({ id, name, background = "#F8F8F8", children }: Props) {
  const root: CSSProperties = {
    width: 1920,
    height: 1080,
    position: "relative",
    overflow: "hidden",
    background,
    color: "var(--w-text)",
    fontFamily: "var(--w-font-ar)",
    flexShrink: 0,
  };

  const caption: CSSProperties = {
    position: "absolute",
    bottom: 28,
    // Physical left (brief says "bottom-left"). Using `left` instead of a
    // logical property because BannerFrame is dir="rtl" — `insetInlineStart`
    // would flip to physical right.
    left: 40,
    fontFamily: "var(--w-font-mono, monospace)",
    fontSize: 13,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(107, 114, 128, 0.85)",
    pointerEvents: "none",
    userSelect: "none",
  };

  return (
    <div data-banner-id={id} className="demo-canvas" dir="rtl" style={root}>
      {children}
      <div aria-hidden style={caption}>
        BANNER {String(id).padStart(2, "0")} — {name}
      </div>
    </div>
  );
}
