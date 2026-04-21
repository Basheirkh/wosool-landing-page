import type { SceneContext } from "../../engine/types";
import WosoolMark from "../../primitives/WosoolMark";
import { easeOutCubic, segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

const WORDS = [
  { text: "تكلّم", accent: false },
  { text: "متجرك", accent: true },
  { text: ".", accent: false },
];
const WORDS2 = [{ text: "يسويه.", accent: false }];

export default function ThePromiseScene({ ctx }: Props) {
  // Logo breathes continuously + enters scale 0.8 → 1
  const logoIn = easeOutCubic(segment(ctx.progress, 0, 0.22));
  const breath = 1 + 0.05 * Math.sin(ctx.progress * Math.PI * 2);
  const glowOpacity = 0.5 + 0.5 * Math.sin(ctx.progress * Math.PI * 2);

  // Words reveal in sequence starting at 25% progress
  // Line 1: 3 words over 0.25..0.55 → 0.1 span each
  const wordSpan = 0.11;
  const wordStart = 0.26;
  const w1 = WORDS.map((_, i) => easeOutCubic(segment(ctx.progress, wordStart + i * wordSpan, wordStart + (i + 1) * wordSpan)));
  const w2 = WORDS2.map((_, i) => easeOutCubic(segment(ctx.progress, 0.62 + i * wordSpan, 0.62 + (i + 1) * wordSpan)));

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
      {/* Mint radial wash */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 800px 500px at 50% 45%, rgba(115, 252, 215, 0.18), transparent 65%), radial-gradient(ellipse 300px 300px at 50% 45%, rgba(0, 77, 91, 0.06), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Wosool mark — large, ink-dark for maximum contrast on light canvas, with breathing mint halo */}
      <div style={{ position: "relative", width: 380, height: 220, display: "flex", alignItems: "center", justifyContent: "center", opacity: logoIn, transform: `scale(${logoIn * breath})`, willChange: "transform, opacity" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: -80,
            background: `radial-gradient(circle, rgba(115, 252, 215, ${glowOpacity * 0.75}), transparent 60%)`,
            filter: "blur(48px)",
            transform: `scale(${breath})`,
          }}
        />
        <WosoolMark size={320} color="var(--w-ink)" />
      </div>

      {/* Tagline words */}
      <div style={{ textAlign: "center", fontFamily: "var(--w-font-ar)", fontWeight: 700, color: "var(--w-ink)", letterSpacing: "-0.015em" }}>
        <div style={{ fontSize: 112, lineHeight: 1.05, display: "flex", justifyContent: "center", gap: 22 }}>
          {WORDS.map((w, i) => (
            <span
              key={i}
              style={{
                opacity: w1[i],
                transform: `translateY(${(1 - w1[i]) * 20}px)`,
                color: w.accent ? "var(--w-teal-700)" : "var(--w-ink)",
                display: "inline-block",
                willChange: "transform, opacity",
              }}
            >
              {w.text}
            </span>
          ))}
        </div>
        <div style={{ fontSize: 112, lineHeight: 1.05, marginTop: 4 }}>
          {WORDS2.map((w, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                opacity: w2[i],
                transform: `translateY(${(1 - w2[i]) * 20}px)`,
                willChange: "transform, opacity",
              }}
            >
              {w.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
