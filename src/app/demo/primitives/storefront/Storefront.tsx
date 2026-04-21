import type { ReactNode } from "react";
import WosoolMark from "../WosoolMark";

// ── Storefront page (customer-facing store, centered on canvas) ─────────

interface StorefrontProps {
  /** Number of items in the cart badge (0 → 1 when agent adds) */
  cartCount?: number;
  /** 0..1 glow intensity on the Add-to-Cart CTA (from agent pulse) */
  ctaGlow?: number;
  /** 0..1 sparkle intensity on the cart icon (triggers on increment) */
  cartSparkle?: number;
  /** Cursor position in canvas coords; pass null to hide */
  cursor?: { x: number; y: number; opacity?: number };
}

export default function StorefrontPage({ cartCount = 0, ctaGlow = 0, cartSparkle = 0, cursor }: StorefrontProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 1320,
        height: 840,
        background: "var(--w-surface)",
        borderRadius: 24,
        boxShadow: "0 30px 80px rgba(11, 26, 31, 0.1)",
        border: "1px solid var(--w-border)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BrowserChrome cartCount={cartCount} sparkle={cartSparkle} />
      <HeroSection ctaGlow={ctaGlow} />
      <SimilarRow />
      {cursor && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: cursor.x,
            top: cursor.y,
            opacity: cursor.opacity ?? 1,
            pointerEvents: "none",
            zIndex: 20,
            transform: "translate(-4px, -4px)",
          }}
        >
          <svg width="28" height="32" viewBox="0 0 28 32" aria-hidden>
            <path
              d="M2 2 L2 24 L8 18 L11.5 26.5 L14.5 25 L11 16.5 L19 16.5 Z"
              fill="#0B1A1F"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

function BrowserChrome({ cartCount, sparkle }: { cartCount: number; sparkle: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 22px",
        background: "var(--w-surface-2)",
        borderBottom: "1px solid var(--w-border)",
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", gap: 6 }}>
        <Dot color="#FF5F56" />
        <Dot color="#FFBD2E" />
        <Dot color="#27C93F" />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "var(--w-surface)",
          border: "1px solid var(--w-border)",
          borderRadius: 8,
          padding: "6px 12px",
          fontSize: 13,
          color: "var(--w-text-soft)",
          fontFamily: "var(--w-font-mono)",
          letterSpacing: "0.01em",
          direction: "ltr",
        }}
      >
        <span style={{ color: "var(--w-success)" }}>●</span>
        <span>wosool-beauty.sa/shampoo-argan</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 22, fontSize: 14, color: "var(--w-text-soft)", fontFamily: "var(--w-font-ar)" }}>
        <span>الفئات</span>
        <span>حسابي</span>
        <CartBadge count={cartCount} sparkle={sparkle} />
      </div>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return <span style={{ width: 12, height: 12, borderRadius: "50%", background: color }} />;
}

function CartBadge({ count, sparkle }: { count: number; sparkle: number }) {
  const scale = 1 + sparkle * 0.25;
  return (
    <span style={{ position: "relative", display: "inline-flex", alignItems: "center", transform: `scale(${scale})`, willChange: "transform" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--w-ink)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: -6,
            insetInlineEnd: -8,
            minWidth: 18,
            height: 18,
            borderRadius: 9,
            padding: "0 5px",
            background: "var(--w-success)",
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--w-font-mono)",
            boxShadow: sparkle > 0 ? `0 0 ${Math.round(8 + sparkle * 16)}px rgba(0, 178, 89, ${0.5 + sparkle * 0.4})` : undefined,
            willChange: sparkle > 0 ? "box-shadow" : undefined,
          }}
        >
          {count}
        </span>
      )}
      {sparkle > 0.1 && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: -14,
            insetInlineEnd: -16,
            pointerEvents: "none",
            color: "var(--w-mint-500)",
            opacity: sparkle,
            transform: `scale(${0.8 + sparkle * 0.5})`,
            willChange: "transform, opacity",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 0l2.4 7.2L22 9.6l-7.2 2.4L12 24l-2.4-7.2L2 9.6l7.2-2.4z" />
          </svg>
        </span>
      )}
    </span>
  );
}

function HeroSection({ ctaGlow }: { ctaGlow: number }) {
  return (
    <div
      style={{
        flex: 1,
        padding: "40px 64px",
        display: "grid",
        gridTemplateColumns: "460px 1fr",
        gap: 56,
        alignItems: "center",
      }}
    >
      {/* Product visual */}
      <div
        style={{
          position: "relative",
          width: 460,
          height: 460,
          borderRadius: 28,
          background: "linear-gradient(180deg, #EAF4EF 0%, #D6EAE0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Illustrated shampoo bottle */}
        <ShampooBottle />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.4) 0%, transparent 40%)",
            pointerEvents: "none",
          }}
        />
      </div>
      {/* Body */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: "var(--w-teal-700)", fontFamily: "var(--w-font-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <span>WOSOOL BEAUTY</span>
          <span
            style={{
              background: "var(--w-mint-100)",
              color: "var(--w-teal-900)",
              padding: "4px 10px",
              borderRadius: 999,
              fontFamily: "var(--w-font-ar)",
              textTransform: "none",
              letterSpacing: 0,
              fontSize: 12,
            }}
          >
            الأكثر مبيعاً
          </span>
        </div>
        <h1 style={{ fontSize: 44, fontWeight: 700, margin: 0, lineHeight: 1.15, color: "var(--w-ink)", letterSpacing: "-0.015em" }}>
          شامبو مرطب <span style={{ color: "var(--w-teal-700)" }}>بالأرجان</span>
        </h1>
        <p style={{ fontSize: 18, color: "var(--w-text-soft)", margin: 0, lineHeight: 1.5 }}>
          للشعر الجاف والتالف · ٤٠٠ مل · خالٍ من السلفات والبارابين
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Stars />
          <span style={{ fontSize: 13, color: "var(--w-text-soft)" }}>
            <span style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600, color: "var(--w-text)" }}>٤.٨</span> (١٢٤ تقييم)
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 8 }}>
          <span style={{ fontSize: 44, fontWeight: 800, color: "var(--w-ink)", fontFamily: "var(--w-font-mono)" }}>١٢٩</span>
          <span style={{ fontSize: 18, color: "var(--w-text-soft)" }}>ريال</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: 6,
              background: "var(--w-success-soft)",
              color: "var(--w-success)",
              fontFamily: "var(--w-font-mono)",
              marginInlineStart: 8,
            }}
          >
            خصم ٢٠٪
          </span>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
          <button
            type="button"
            style={{
              height: 56,
              padding: "0 28px",
              borderRadius: 12,
              background: "var(--w-teal-700)",
              color: "#fff",
              fontFamily: "var(--w-font-ar)",
              fontSize: 17,
              fontWeight: 700,
              border: 0,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: ctaGlow > 0 ? `0 0 0 ${Math.round(4 + ctaGlow * 8)}px rgba(0, 77, 91, ${0.15 + ctaGlow * 0.25})` : "0 0 0 4px rgba(0,77,91,0.1)",
              transition: "box-shadow 160ms ease-out",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            أضف إلى السلة
          </button>
          <button
            type="button"
            style={{
              height: 56,
              padding: "0 24px",
              borderRadius: 12,
              background: "transparent",
              color: "var(--w-ink)",
              fontFamily: "var(--w-font-ar)",
              fontSize: 16,
              fontWeight: 600,
              border: "1px solid var(--w-border-strong)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            للمفضلة
          </button>
        </div>
      </div>
    </div>
  );
}

function ShampooBottle() {
  return (
    <svg viewBox="0 0 200 300" width="220" height="330" aria-hidden>
      {/* Cap */}
      <rect x="75" y="10" width="50" height="40" rx="6" fill="#1F3A3F" />
      <rect x="70" y="48" width="60" height="12" rx="2" fill="#0B1A1F" />
      {/* Neck */}
      <rect x="85" y="60" width="30" height="14" fill="#E5E5E5" />
      {/* Body */}
      <path
        d="M 55 74 Q 40 90 40 130 L 40 250 Q 40 280 70 280 L 130 280 Q 160 280 160 250 L 160 130 Q 160 90 145 74 Z"
        fill="url(#bottleGrad)"
        stroke="var(--w-teal-900)"
        strokeWidth="2"
      />
      {/* Label */}
      <rect x="55" y="130" width="90" height="100" rx="8" fill="#FFFFFF" stroke="var(--w-border)" strokeWidth="1" />
      <text x="100" y="168" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--w-teal-700)" fontFamily="var(--w-font-ar)">ARGAN</text>
      <text x="100" y="186" textAnchor="middle" fontSize="10" fill="var(--w-text-soft)" fontFamily="var(--w-font-ar)">SHAMPOO</text>
      <line x1="60" y1="196" x2="140" y2="196" stroke="var(--w-mint-500)" strokeWidth="1.5" />
      <text x="100" y="214" textAnchor="middle" fontSize="10" fill="var(--w-text-soft)" fontFamily="var(--w-font-ar)">FOR DRY HAIR · 400ML</text>
      <defs>
        <linearGradient id="bottleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A7380" />
          <stop offset="100%" stopColor="#00323C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Stars() {
  const star = (key: number, filled: boolean) => (
    <svg key={key} width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
  return (
    <span style={{ display: "inline-flex", gap: 3, color: "var(--w-warning)" }}>
      {star(0, true)}
      {star(1, true)}
      {star(2, true)}
      {star(3, true)}
      {star(4, true)}
    </span>
  );
}

function SimilarRow() {
  const items = [
    { name: "بلسم الأرجان", price: "٩٩", bg: "#FFF1E5" },
    { name: "ماسك مغذي", price: "١٤٩", bg: "#F5F3FF" },
    { name: "زيت الأرجان", price: "٧٩", bg: "#FFFBEB" },
    { name: "سيروم إصلاحي", price: "١٧٩", bg: "#FFF0F0" },
  ];
  return (
    <div style={{ padding: "0 64px 32px", flexShrink: 0 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--w-text-soft)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14, fontFamily: "var(--w-font-mono)" }}>
        منتجات قد تعجبك
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {items.map((it) => (
          <div key={it.name} style={{ border: "1px solid var(--w-border)", borderRadius: 12, padding: 14, background: "var(--w-surface)", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 8, background: it.bg, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--w-ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{it.name}</div>
              <div style={{ fontSize: 12, color: "var(--w-text-soft)", fontFamily: "var(--w-font-mono)", marginTop: 2 }}>{it.price} ريال</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Sales chat widget (floating bottom-right corner) ────────────────────

export interface SalesChatMessage {
  from: "visitor" | "agent";
  body: ReactNode;
  time: string;
  /** Fade-in opacity (default 1). Driven by scene progress for staggered reveal. */
  opacity?: number;
  /** Slide-in px offset (default 0). */
  translateY?: number;
}

interface SalesChatProps {
  messages: SalesChatMessage[];
  showTyping?: boolean;
  typingSource?: "visitor" | "agent";
  /** 0..1 — pulses the "live viewing" eye icon in the header */
  viewingPulse?: number;
}

export function SalesChat({ messages, showTyping, typingSource = "agent", viewingPulse = 0 }: SalesChatProps) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 140,
        right: 140,
        left: "auto",
        width: 400,
        height: 540,
        background: "#FDFDFB",
        borderRadius: 16,
        boxShadow: "0 24px 60px rgba(11, 26, 31, 0.18), 0 0 0 1px rgba(11, 26, 31, 0.06)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: 15,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "14px 16px",
          background: "var(--w-teal-700)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "var(--w-mint-500)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <WosoolMark size={22} color="var(--w-ink)" />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <b style={{ display: "block", fontSize: 14, fontWeight: 700 }}>وصول · وكيل المبيعات</b>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--w-mint-300)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--w-mint-500)" }} />
            يشاهد معك الآن
          </span>
        </div>
        <LiveEye pulse={viewingPulse} />
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          background: "#FAFAF7",
          overflow: "hidden",
        }}
      >
        {messages.map((m, i) => (
          <ChatBubble key={i} {...m} />
        ))}
        {showTyping && <TypingDots source={typingSource} />}
      </div>

      {/* Composer */}
      <div
        style={{
          padding: "10px 14px",
          borderTop: "1px solid var(--w-border)",
          background: "var(--w-surface)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexShrink: 0,
        }}
      >
        <span style={{ flex: 1, fontSize: 13, color: "var(--w-text-muted)" }}>اكتب سؤالك…</span>
        <span style={{ color: "var(--w-teal-700)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function LiveEye({ pulse }: { pulse: number }) {
  const size = 10 + pulse * 2;
  return (
    <span
      aria-label="live"
      title="agent is watching"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: `rgba(115, 252, 215, ${0.2 + pulse * 0.3})`,
        color: "var(--w-mint-500)",
        boxShadow: `0 0 0 ${Math.round(pulse * 6)}px rgba(115, 252, 215, ${pulse * 0.25})`,
        flexShrink: 0,
        transition: "box-shadow 200ms ease-out",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
    </span>
  );
}

function ChatBubble({ from, body, time, opacity = 1, translateY = 0 }: SalesChatMessage) {
  const isAgent = from === "agent";
  return (
    <div
      style={{
        alignSelf: isAgent ? "flex-start" : "flex-end",
        background: isAgent ? "var(--w-surface)" : "var(--w-teal-700)",
        color: isAgent ? "var(--w-ink)" : "#fff",
        borderRadius: 14,
        borderBottomLeftRadius: isAgent ? 4 : 14,
        borderBottomRightRadius: isAgent ? 14 : 4,
        padding: "10px 12px",
        maxWidth: "86%",
        fontSize: 13.5,
        lineHeight: 1.5,
        border: isAgent ? "1px solid var(--w-border)" : undefined,
        boxShadow: isAgent ? "0 1px 2px rgba(11, 26, 31, 0.04)" : "0 1px 2px rgba(0, 77, 91, 0.15)",
        opacity,
        transform: `translateY(${translateY}px)`,
        willChange: opacity < 1 || translateY !== 0 ? "transform, opacity" : undefined,
      }}
    >
      <div>{body}</div>
      <div
        style={{
          marginTop: 4,
          fontSize: 10.5,
          color: isAgent ? "var(--w-text-muted)" : "rgba(255,255,255,0.65)",
          textAlign: isAgent ? "left" : "right",
          fontFamily: "var(--w-font-mono)",
        }}
      >
        {time}
      </div>
    </div>
  );
}

function TypingDots({ source }: { source: "visitor" | "agent" }) {
  const isAgent = source === "agent";
  return (
    <div
      style={{
        alignSelf: isAgent ? "flex-start" : "flex-end",
        background: isAgent ? "var(--w-surface)" : "var(--w-teal-700)",
        color: isAgent ? "var(--w-text-muted)" : "#fff",
        borderRadius: 14,
        borderBottomLeftRadius: isAgent ? 4 : 14,
        borderBottomRightRadius: isAgent ? 14 : 4,
        padding: "10px 12px",
        border: isAgent ? "1px solid var(--w-border)" : undefined,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", animation: "demo-typing 1.4s ease-in-out infinite" }} />
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", animation: "demo-typing 1.4s ease-in-out 0.2s infinite", opacity: 0.7 }} />
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", animation: "demo-typing 1.4s ease-in-out 0.4s infinite", opacity: 0.4 }} />
    </div>
  );
}
