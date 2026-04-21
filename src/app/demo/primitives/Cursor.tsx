interface Props {
  x: number;
  y: number;
  pressed?: boolean;
  /** 0..1 for fade-in opacity */
  opacity?: number;
}

export default function Cursor({ x, y, pressed, opacity = 1 }: Props) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translate(${x}px, ${y}px) scale(${pressed ? 0.9 : 1})`,
        transformOrigin: "top left",
        pointerEvents: "none",
        zIndex: 20,
        opacity,
        willChange: "transform, opacity",
      }}
    >
      <svg width="28" height="32" viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M2 2 L2 24 L8 18 L11.5 26.5 L14.5 25 L11 16.5 L19 16.5 Z"
          fill="#0B1A1F"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
