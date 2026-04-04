"use client";

import { ReactNode } from "react";

interface MarqueeScrollProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function MarqueeScroll({
  children,
  speed = 30,
  reverse = false,
  className = "",
}: MarqueeScrollProps) {
  return (
    <div className={`overflow-hidden ${className}`} dir="ltr">
      <div
        className="flex items-center gap-6 w-max will-change-transform"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
