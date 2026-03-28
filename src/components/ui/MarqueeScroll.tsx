"use client";

import { ReactNode } from "react";

interface MarqueeScrollProps {
  children: ReactNode;
  speed?: number;
  direction?: "rtl" | "ltr";
  reverse?: boolean;
  className?: string;
}

export default function MarqueeScroll({
  children,
  speed = 30,
  direction = "ltr",
  reverse = false,
  className = "",
}: MarqueeScrollProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex items-center gap-12 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          direction: direction === "rtl" ? "rtl" : "ltr",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
