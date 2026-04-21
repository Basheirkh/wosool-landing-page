"use client";

import { useEffect, useState, type ReactNode } from "react";
import "./demo-tokens.css";
import type { PhaseId } from "../engine/types";

// Phase-tinted canvas background. Smooth cross-fade signals which agent
// is currently driving: setup (build-out), admin (merchant commands),
// customer (inbound inquiries), sales (storefront visitor).
const PHASE_BG: Record<PhaseId, string> = {
  hook:     "#0B1A1F",
  setup:    "#F8F8F8",
  admin:    "#F5F0E6",
  customer: "#F0EADB",
  sales:    "#EDE5D2",
  results:  "#F2E9D6",
  end:      "#FAFBFB",
};

interface Props {
  width?: number;
  height?: number;
  phase?: PhaseId;
  children: ReactNode;
}

export default function Stage({ width = 1920, height = 1080, phase = "setup", children }: Props) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const recompute = () => {
      const s = Math.min(window.innerWidth / width, window.innerHeight / height);
      setScale(s);
    };
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, [width, height]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <div
        className="demo-canvas"
        dir="rtl"
        style={{
          width,
          height,
          position: "relative",
          flex: "0 0 auto",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          background: PHASE_BG[phase],
          transition: "background 700ms cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "background",
        }}
      >
        {children}
      </div>
    </div>
  );
}
