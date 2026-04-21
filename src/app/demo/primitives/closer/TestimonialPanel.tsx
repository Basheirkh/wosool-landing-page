import { easeOutCubic, segment } from "../easing";

interface Props {
  /** Overall scene progress 0..1 */
  progress: number;
  /** Pre-split lines of the quote, revealed in sequence */
  lines: string[];
  /** Attribution footer line (name · segment · city) */
  attribution: string;
}

/**
 * Large testimonial block: teal quote mark scales in first, then the
 * lines cascade, attribution lands last. Stays still after — no
 * parallax, no wobble. Confident + quiet.
 */
export default function TestimonialPanel({ progress, lines, attribution }: Props) {
  const quoteIn = easeOutCubic(segment(progress, 0, 0.15));
  const linesSpan = [0.15, 0.75];
  const attrIn = easeOutCubic(segment(progress, 0.8, 1.0));

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 1320,
        padding: "80px 96px",
        textAlign: "center",
        direction: "rtl",
      }}
    >
      <div
        aria-hidden
        style={{
          fontFamily: "var(--w-font-ar)",
          fontSize: 160,
          lineHeight: 0.6,
          color: "var(--w-teal-700)",
          opacity: quoteIn * 0.35,
          transform: `scale(${0.7 + 0.3 * quoteIn})`,
          marginBottom: 8,
          fontWeight: 700,
        }}
      >
        ”
      </div>
      <div
        style={{
          fontFamily: "var(--w-font-ar)",
          fontSize: 40,
          fontWeight: 500,
          lineHeight: 1.5,
          color: "var(--w-ink)",
          marginBottom: 40,
          letterSpacing: "-0.005em",
        }}
      >
        {lines.map((line, i) => {
          const start = linesSpan[0] + ((linesSpan[1] - linesSpan[0]) * i) / lines.length;
          const end = linesSpan[0] + ((linesSpan[1] - linesSpan[0]) * (i + 1)) / lines.length;
          const t = easeOutCubic(segment(progress, start, end));
          return (
            <span
              key={i}
              style={{
                display: "block",
                opacity: t,
                transform: `translateY(${(1 - t) * 10}px)`,
                willChange: "transform, opacity",
              }}
            >
              {line}
            </span>
          );
        })}
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          opacity: attrIn,
          transform: `translateY(${(1 - attrIn) * 8}px)`,
          fontFamily: "var(--w-font-ar)",
          fontSize: 20,
          color: "var(--w-text-soft)",
          willChange: "transform, opacity",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--w-success)" aria-hidden>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span>{attribution}</span>
        <span style={{ fontSize: 24 }}>🇸🇦</span>
      </div>
    </div>
  );
}
