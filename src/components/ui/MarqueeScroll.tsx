"use client";

import { ReactNode } from "react";

interface MarqueeScrollProps {
  children: ReactNode;
  speed?: number;
  direction?: "rtl" | "ltr";
  className?: string;
}

export default function MarqueeScroll({
  children,
  speed = 30,
  direction = "ltr",
  className = "",
}: MarqueeScrollProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex items-center gap-12 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          direction: direction === "rtl" ? "rtl" : "ltr",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
