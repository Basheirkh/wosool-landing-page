import type { SceneContext } from "../engine/types";
import WosoolMark from "./WosoolMark";

interface Props {
  ctx: SceneContext;
}

export default function EndCard({ ctx }: Props) {
  // Logo breath: 3.2s cycle mapped to scene progress (scene = 4s → covers roughly 1 cycle).
  const t = ctx.progress;
  const breath = 1 + 0.08 * Math.sin(t * Math.PI * 2);
  const glowOpacity = 0.7 + 0.3 * Math.sin(t * Math.PI * 2);

  // Entry: logo first, then wordmark, tagline, divider, CTA.
  const logoIn = clamp(t / 0.15);
  const wordmarkIn = clamp((t - 0.1) / 0.15);
  const taglineIn = clamp((t - 0.25) / 0.18);
  const dividerIn = clamp((t - 0.4) / 0.1);
  const ctaIn = clamp((t - 0.5) / 0.18);
  const footerIn = clamp((t - 0.7) / 0.2);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#FAFBFB",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 900px 600px at 50% 40%, rgba(115, 252, 215, 0.12), transparent 70%), radial-gradient(ellipse 400px 400px at 50% 40%, rgba(0, 77, 91, 0.04), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: 180,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          marginBottom: 24,
          transform: `scale(${logoIn * breath})`,
          opacity: logoIn,
          willChange: "transform, opacity",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: -40,
            background: `radial-gradient(circle, rgba(115, 252, 215, ${glowOpacity * 0.55}), transparent 60%)`,
            filter: "blur(30px)",
            transform: `scale(${breath})`,
          }}
        />
        <WosoolMark size={160} color="var(--w-teal-700)" />
      </div>

      <h1
        style={{
          fontSize: 84,
          fontWeight: 700,
          color: "var(--w-ink)",
          letterSpacing: "-0.01em",
          lineHeight: 1,
          zIndex: 2,
          margin: 0,
          marginBottom: 36,
          opacity: wordmarkIn,
          transform: `translateY(${(1 - wordmarkIn) * 12}px)`,
          willChange: "transform, opacity",
          fontFamily: "var(--w-font-ar)",
        }}
      >
        وصول
      </h1>

      <div
        style={{
          fontSize: 56,
          fontWeight: 500,
          color: "var(--w-text)",
          lineHeight: 1.25,
          textAlign: "center",
          zIndex: 2,
          marginBottom: 56,
          opacity: taglineIn,
          transform: `translateY(${(1 - taglineIn) * 12}px)`,
          willChange: "transform, opacity",
          fontFamily: "var(--w-font-ar)",
        }}
      >
        <div>
          تكلّم <span style={{ color: "var(--w-teal-700)", fontWeight: 700 }}>متجرك</span>.
        </div>
        <div>يسويه.</div>
      </div>

      <div
        style={{
          width: 80,
          height: 1,
          background: "var(--w-border-strong)",
          marginBottom: 40,
          zIndex: 2,
          opacity: dividerIn,
          transform: `scaleX(${dividerIn})`,
          willChange: "transform, opacity",
        }}
      />

      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "18px 32px",
          background: "var(--w-teal-700)",
          color: "#fff",
          borderRadius: 999,
          fontFamily: "var(--w-font-ar)",
          fontSize: 22,
          fontWeight: 700,
          boxShadow: "0 12px 32px rgba(0, 77, 91, 0.3)",
          zIndex: 2,
          marginBottom: 48,
          opacity: ctaIn,
          transform: `translateY(${(1 - ctaIn) * 16}px)`,
          willChange: "transform, opacity",
        }}
      >
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: 7,
            background: "#fff",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden>
            <path d="M16.5 4.8C15 3 12.8 2 10.2 2 5.6 2 2 5.6 2 10.2c0 2.6 1 4.8 2.8 6.3-1 1-1.8 2.5-1.8 4.5h2c0-1.8 1.2-3 3-3h6c4.6 0 8.2-3.6 8.2-8.2 0-1.9-.6-3.7-1.7-5z" fill="#bafd4c" />
            <path d="M10.2 12.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3" stroke="#0B1A1F" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
        <span>ثبّت من متجر تطبيقات سلة</span>
        <span aria-hidden style={{ opacity: 0.85, display: "inline-flex" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scaleX(-1)" }}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </span>

      <div
        style={{
          fontFamily: "var(--w-font-ar)",
          fontSize: 16,
          color: "var(--w-text-muted)",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          zIndex: 2,
          opacity: footerIn,
        }}
      >
        <span>صُنع في المملكة العربية السعودية</span>
        <span style={{ fontSize: 22 }}>🇸🇦</span>
      </div>
    </div>
  );
}

function clamp(v: number): number {
  return Math.max(0, Math.min(1, v));
}
