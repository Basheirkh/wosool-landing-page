import type { CSSProperties, ReactNode } from "react";
import WosoolMark from "./WosoolMark";

export type CardButtonState = "idle" | "hover" | "installing" | "installed";

interface Props {
  buttonState: CardButtonState;
  /** 0..1 progress for installing state */
  progress?: number;
  /** Press animation scale (0..1); 1 = no press */
  buttonScale?: number;
  /** Hover button glow intensity (0..1) */
  hoverIntensity?: number;
  /** Show mint halo + success badge on logo tile */
  successOrnament?: boolean;
  /** Eyebrow tag variant */
  tagVariant?: "recommended" | "installed";
  /** Optional hint text under button */
  hint?: { text: string; accent?: boolean };
  /** Optional children layered over card (e.g. click ripple) */
  children?: ReactNode;
}

const CARD_WIDTH = 1180;

export default function SallaCard({
  buttonState,
  progress = 0,
  buttonScale = 1,
  hoverIntensity = 0,
  successOrnament = false,
  tagVariant = "recommended",
  hint,
  children,
}: Props) {
  const tag =
    tagVariant === "installed"
      ? { text: "مُثبَّت في متجرك", bg: "var(--w-mint-100)", color: "var(--w-teal-900)" }
      : { text: "موصى به لمتجرك", bg: "var(--w-teal-50)", color: "var(--w-teal-700)" };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: CARD_WIDTH,
      }}
    >
      <div
        style={{
          background: "var(--w-surface)",
          border: "1px solid var(--w-border)",
          borderRadius: "var(--w-r-3xl)",
          padding: "64px 72px",
          display: "grid",
          gridTemplateColumns: "220px 1fr auto",
          gap: 56,
          alignItems: "center",
          boxShadow: "var(--w-sh-2)",
          position: "relative",
        }}
      >
        {/* Logo tile */}
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: "var(--w-r-2xl)",
            background: "var(--w-mint-500)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {successOrnament && (
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: -28,
                borderRadius: "var(--w-r-3xl)",
                background:
                  "radial-gradient(circle at center, rgba(115, 252, 215, 0.55) 0%, rgba(115, 252, 215, 0.18) 45%, rgba(115, 252, 215, 0) 72%)",
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
          )}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: -1,
              borderRadius: "var(--w-r-2xl)",
              border: "1px solid rgba(11, 26, 31, 0.08)",
              pointerEvents: "none",
            }}
          />
          <WosoolMark size={140} />
          {successOrnament && (
            <div
              aria-label="installed"
              style={{
                position: "absolute",
                top: -14,
                insetInlineEnd: -14,
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "var(--w-success)",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "4px solid var(--w-surface)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          )}
        </div>

        {/* Body */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              fontWeight: 600,
              color: "var(--w-teal-700)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "var(--w-font-mono)",
            }}
          >
            <span>Wosool.ai</span>
            <span
              style={{
                background: tag.bg,
                color: tag.color,
                padding: "5px 12px",
                borderRadius: "var(--w-r-full)",
                fontFamily: "var(--w-font-ar)",
                textTransform: "none",
                letterSpacing: 0,
                fontSize: 12,
              }}
            >
              {tag.text}
            </span>
          </div>
          <h1
            style={{
              fontSize: 52,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "var(--w-ink)",
              margin: 0,
            }}
          >
            وصول — موظف متجرك <span style={{ color: "var(--w-teal-700)" }}>الذكي</span>
          </h1>
          <p
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: "var(--w-text)",
              lineHeight: 1.4,
              maxWidth: "52ch",
              margin: 0,
            }}
          >
            ثلاثة وكلاء ذكاء اصطناعي يديرون متجرك على سلة: يردّون على العملاء في واتساب، ينفّذون المهام التشغيلية، ويحوّلون الزوار إلى طلبات.
          </p>
          <MetaRow />
        </div>

        {/* Action column */}
        <div style={{ width: 240, display: "flex", flexDirection: "column", alignItems: "stretch", gap: 14 }}>
          <ButtonBlock
            state={buttonState}
            scale={buttonScale}
            hoverIntensity={hoverIntensity}
            progress={progress}
          />
          {hint && (
            <div
              style={{
                fontSize: 12,
                color: hint.accent ? "var(--w-teal-700)" : "var(--w-text-muted)",
                fontWeight: hint.accent ? 600 : 400,
                textAlign: "center",
                fontFamily: "var(--w-font-ar)",
              }}
            >
              {hint.text}
            </div>
          )}
        </div>

        {children}
      </div>
    </div>
  );
}

function MetaRow() {
  const star = (
    <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
  const dotSep = <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--w-border-strong)" }} />;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 32,
        paddingTop: 10,
        borderTop: "1px solid var(--w-border)",
        marginTop: 6,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--w-text-soft)" }}>
        <span style={{ display: "inline-flex", gap: 2, color: "var(--w-warning)" }} aria-label="4.9 out of 5">
          {star}{star}{star}{star}{star}
        </span>
        <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600, color: "var(--w-text)", fontSize: 15 }} dir="ltr">4.9</span>
        <span>
          (<span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600, color: "var(--w-text)", fontSize: 14 }} dir="ltr">2,184</span> تقييم)
        </span>
      </div>
      {dotSep}
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--w-text-soft)" }}>
        <span>التصنيف:</span>
        <strong style={{ color: "var(--w-text)", fontWeight: 600 }}>الذكاء الاصطناعي</strong>
      </div>
      {dotSep}
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--w-text-soft)" }}>
        <span>المطوّر:</span>
        <strong style={{ color: "var(--w-text)", fontWeight: 600 }}>Wosool</strong>
      </div>
    </div>
  );
}

interface ButtonProps {
  state: CardButtonState;
  scale: number;
  hoverIntensity: number;
  progress: number;
}

function ButtonBlock({ state, scale, hoverIntensity, progress }: ButtonProps) {
  const base: CSSProperties = {
    height: 64,
    borderRadius: "var(--w-r-lg)",
    border: 0,
    fontFamily: "var(--w-font-ar)",
    fontSize: 19,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    letterSpacing: "-0.005em",
    transform: `scale(${scale})`,
    transformOrigin: "center",
    willChange: "transform",
  };

  if (state === "idle" || state === "hover") {
    const glow = state === "hover" ? 0.12 + hoverIntensity * 0.22 : 0.12;
    const shadow = `0 0 0 ${Math.round(4 + hoverIntensity * 6)}px rgba(0, 77, 91, ${glow.toFixed(3)})`;
    const lift = state === "hover" ? 1 + hoverIntensity * 0.02 : 1;
    return (
      <button
        type="button"
        aria-label="تثبيت التطبيق"
        style={{
          ...base,
          background: "var(--w-teal-700)",
          color: "#fff",
          boxShadow: shadow,
          transform: `scale(${scale * lift})`,
          cursor: "pointer",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        تثبيت
      </button>
    );
  }

  if (state === "installing") {
    const pct = Math.round(progress * 100);
    return (
      <>
        <button
          type="button"
          aria-label="جاري التثبيت"
          disabled
          style={{
            ...base,
            background: "var(--w-teal-50)",
            color: "var(--w-teal-700)",
            border: "1px solid var(--w-teal-300)",
            cursor: "wait",
          }}
        >
          <span
            aria-hidden
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "2.5px solid var(--w-teal-300)",
              borderTopColor: "var(--w-teal-700)",
              animation: "demo-spin 0.9s linear infinite",
              display: "inline-block",
            }}
          />
          جاري التثبيت…
        </button>
        <div
          aria-label="تقدّم التثبيت"
          style={{ width: "100%", height: 6, background: "var(--w-border)", borderRadius: 999, overflow: "hidden" }}
        >
          <div style={{ height: "100%", width: `${pct}%`, background: "var(--w-teal-700)", borderRadius: 999 }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            color: "var(--w-text-soft)",
            fontFamily: "var(--w-font-mono)",
            letterSpacing: "0.04em",
          }}
        >
          <span>تجهيز الوكلاء</span>
          <span dir="ltr">{pct}%</span>
        </div>
      </>
    );
  }

  // installed
  return (
    <button
      type="button"
      aria-label="تم التثبيت"
      style={{
        ...base,
        background: "var(--w-mint-500)",
        color: "var(--w-ink)",
      }}
    >
      <span
        aria-hidden
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "var(--w-ink)",
          color: "var(--w-mint-500)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      تم التثبيت
    </button>
  );
}
