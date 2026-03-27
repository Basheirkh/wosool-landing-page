"use client";

interface FloatingObjectProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FloatingObject({
  children,
  delay = 0,
  className = "",
}: FloatingObjectProps) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        animation: `float3d 6s ease-in-out infinite alternate`,
        animationDelay: `${delay}s`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
