import type { CSSProperties, ReactNode } from "react";
import WosoolMark from "../../demo/primitives/WosoolMark";

/**
 * Banner 05 — SALES AGENT (the storefront concierge)
 *
 * 50/50 horizontal split (matches Banner 1 and Banner 3 pattern).
 *  - Physical LEFT:  scaled browser mockup of a Wosool store page with
 *                    the Wosool sales widget pinned to the corner.
 *  - Physical RIGHT: positioning text — eyebrow / H1 / 3 bullets / echo.
 */
export default function Banner5() {
  return (
    <>
      {/* Browser mockup + widget — physical LEFT */}
      <div style={mockupWrap}>
        <BrowserMockup />
        <WidgetCard />
      </div>

      {/* Text stack — physical RIGHT */}
      <div style={textStack}>
        <div style={eyebrow}>وكيل المبيعات</div>
        <h1 style={headline}>
          يساعد زوارك
          <br />
          <span style={{ color: "var(--w-teal-700)" }}>في الوقت الفعلي.</span>
        </h1>
        <ul style={bullets}>
          <Bullet>يعرف منتجاتك ومخزونك</Bullet>
          <Bullet>يجاوب من بياناتك — لا يخترع</Bullet>
          <Bullet>يضيف للسلة مباشرة</Bullet>
        </ul>
        <div aria-hidden style={divider} />
        <p style={echoLine}>كل زائر — تجربة شخصية.</p>
      </div>
    </>
  );
}

// ── Browser mockup ──────────────────────────────────────────────────────

function BrowserMockup() {
  return (
    <div style={browserFrame}>
      <div style={browserChrome}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={dot("#FF5F56")} />
          <span style={dot("#FFBD2E")} />
          <span style={dot("#27C93F")} />
        </div>
        <div style={urlBar}>
          <span style={{ color: "var(--w-success)" }}>●</span>
          <span style={{ direction: "ltr" }}>wosool-beauty.sa/shampoo-argan</span>
        </div>
      </div>

      {/* Product hero — bottle physical LEFT, text physical RIGHT */}
      <div style={heroRow}>
        <div style={heroBody}>
          <div style={productEyebrow}>WOSOOL BEAUTY · الأكثر مبيعاً</div>
          <div style={productTitle}>
            شامبو مرطب <span style={{ color: "var(--w-teal-700)" }}>بالأرجان</span>
          </div>
          <div style={productMeta}>للشعر الجاف · ٤٠٠ مل · خالٍ من السلفات</div>
          <div style={priceRow}>
            <span style={priceBig}>١٢٩</span>
            <span style={priceUnit}>ريال</span>
            <span style={discountChip}>خصم ٢٠٪</span>
          </div>
          <div style={cta}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            أضف إلى السلة
          </div>
        </div>
        <div style={productVisual}>
          <BottleGraphic />
        </div>
      </div>
    </div>
  );
}

function BottleGraphic() {
  return (
    <svg viewBox="0 0 200 300" width="160" height="240" aria-hidden>
      <rect x="75" y="10" width="50" height="40" rx="6" fill="#1F3A3F" />
      <rect x="70" y="48" width="60" height="12" rx="2" fill="#0B1A1F" />
      <rect x="85" y="60" width="30" height="14" fill="#E5E5E5" />
      <path
        d="M 55 74 Q 40 90 40 130 L 40 250 Q 40 280 70 280 L 130 280 Q 160 280 160 250 L 160 130 Q 160 90 145 74 Z"
        fill="url(#b5bottle)"
        stroke="var(--w-teal-900)"
        strokeWidth="2"
      />
      <rect x="55" y="130" width="90" height="100" rx="8" fill="#FFFFFF" stroke="var(--w-border)" strokeWidth="1" />
      <text x="100" y="170" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--w-teal-700)">ARGAN</text>
      <text x="100" y="188" textAnchor="middle" fontSize="10" fill="var(--w-text-soft)">SHAMPOO</text>
      <line x1="60" y1="198" x2="140" y2="198" stroke="var(--w-mint-500)" strokeWidth="1.5" />
      <text x="100" y="216" textAnchor="middle" fontSize="10" fill="var(--w-text-soft)">400ML</text>
      <defs>
        <linearGradient id="b5bottle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A7380" />
          <stop offset="100%" stopColor="#00323C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ── Floating widget on the mockup ──────────────────────────────────────

function WidgetCard() {
  return (
    <div style={widget}>
      <div style={widgetHeader}>
        <div style={widgetAvatar}>
          <WosoolMark size={18} color="var(--w-ink)" />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>وصول · وكيل المبيعات</div>
          <div style={{ fontSize: 10.5, color: "var(--w-mint-300)", display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--w-mint-500)" }} />
            يشاهد معك الآن
          </div>
        </div>
      </div>

      <div style={widgetBody}>
        <VisitorBubble>هل هذا الشامبو مناسب لبشرة حساسة؟</VisitorBubble>
        <AgentBubble>
          نعم — <span style={{ color: "var(--w-teal-700)", fontWeight: 700 }}>خالٍ من السلفات تماماً</span>، مناسب للبشرة الحساسة.
        </AgentBubble>
        <ProductCardBubble />
      </div>

      <div style={widgetComposer}>
        <span style={{ flex: 1, fontSize: 11, color: "var(--w-text-muted)" }}>اكتب سؤالك…</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--w-teal-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </div>
    </div>
  );
}

function VisitorBubble({ children }: { children: ReactNode }) {
  return (
    <div style={{ alignSelf: "flex-end", background: "var(--w-teal-700)", color: "#fff", borderRadius: 12, borderBottomRightRadius: 3, padding: "7px 10px", maxWidth: "88%", fontSize: 11.5, lineHeight: 1.45 }}>
      {children}
    </div>
  );
}

function AgentBubble({ children }: { children: ReactNode }) {
  return (
    <div style={{ alignSelf: "flex-start", background: "var(--w-surface)", color: "var(--w-ink)", border: "1px solid var(--w-border)", borderRadius: 12, borderBottomLeftRadius: 3, padding: "7px 10px", maxWidth: "92%", fontSize: 11.5, lineHeight: 1.45 }}>
      <div style={viaWosool}>
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--w-mint-500)" }} />
        عبر وصول
      </div>
      {children}
    </div>
  );
}

function ProductCardBubble() {
  return (
    <div style={{ alignSelf: "flex-start", background: "var(--w-surface)", border: "1px solid var(--w-border)", borderRadius: 12, borderBottomLeftRadius: 3, padding: 8, maxWidth: "92%", boxShadow: "0 1px 2px rgba(11,26,31,0.04)" }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div style={{ width: 46, height: 46, borderRadius: 8, background: "linear-gradient(180deg,#EAF4EF 0%,#D6EAE0 100%)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 200 300" width="26" height="38" aria-hidden>
            <rect x="75" y="10" width="50" height="40" rx="6" fill="#1F3A3F" />
            <path d="M 55 74 Q 40 90 40 130 L 40 250 Q 40 280 70 280 L 130 280 Q 160 280 160 250 L 160 130 Q 160 90 145 74 Z" fill="#0A7380" />
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: "var(--w-ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            شامبو مرطب بالأرجان
          </div>
          <div style={{ fontSize: 11, color: "var(--w-text-soft)", fontFamily: "var(--w-font-mono)", marginTop: 2 }}>
            ١٢٩ ريال
          </div>
        </div>
      </div>
      <div style={addBtn}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        أضف للسلة
      </div>
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────

const mockupWrap: CSSProperties = {
  position: "absolute",
  left: 30,
  top: "50%",
  transform: "translateY(-50%) rotate(-3deg)",
  width: 820,
  height: 720,
};

const browserFrame: CSSProperties = {
  width: 820,
  height: 620,
  background: "var(--w-surface)",
  borderRadius: 18,
  border: "1px solid var(--w-border)",
  boxShadow: "0 28px 70px rgba(11, 26, 31, 0.14)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
};

const browserChrome: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  padding: "12px 18px",
  background: "var(--w-surface-2)",
  borderBottom: "1px solid var(--w-border)",
  flexShrink: 0,
};

const urlBar: CSSProperties = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: "var(--w-surface)",
  border: "1px solid var(--w-border)",
  borderRadius: 7,
  padding: "5px 10px",
  fontSize: 12,
  color: "var(--w-text-soft)",
  fontFamily: "var(--w-font-mono)",
  maxWidth: 360,
  margin: "0 auto",
};

const dot = (color: string): CSSProperties => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: color,
  display: "inline-block",
});

const heroRow: CSSProperties = {
  flex: 1,
  padding: "36px 40px",
  display: "grid",
  gridTemplateColumns: "1fr 220px",
  gap: 32,
  alignItems: "center",
};

const productVisual: CSSProperties = {
  width: 220,
  height: 280,
  borderRadius: 18,
  background: "linear-gradient(180deg, #EAF4EF 0%, #D6EAE0 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const heroBody: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  textAlign: "right",
};

const productEyebrow: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "var(--w-teal-700)",
  fontFamily: "var(--w-font-mono)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const productTitle: CSSProperties = {
  fontSize: 26,
  fontWeight: 700,
  color: "var(--w-ink)",
  letterSpacing: "-0.01em",
  lineHeight: 1.18,
};

const productMeta: CSSProperties = {
  fontSize: 13,
  color: "var(--w-text-soft)",
};

const priceRow: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: 8,
  marginTop: 4,
};

const priceBig: CSSProperties = {
  fontSize: 30,
  fontWeight: 800,
  color: "var(--w-ink)",
  fontFamily: "var(--w-font-mono)",
};

const priceUnit: CSSProperties = {
  fontSize: 14,
  color: "var(--w-text-soft)",
};

const discountChip: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  padding: "2px 7px",
  borderRadius: 5,
  background: "var(--w-success-soft)",
  color: "var(--w-success)",
  fontFamily: "var(--w-font-mono)",
  marginInlineStart: 6,
};

const cta: CSSProperties = {
  marginTop: 20,
  width: "fit-content",
  padding: "11px 20px",
  borderRadius: 10,
  background: "var(--w-teal-700)",
  color: "#fff",
  fontSize: 13,
  fontWeight: 700,
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};

// ── Widget (floating overlay at bottom-right of mockup) ─────────────────

const widget: CSSProperties = {
  position: "absolute",
  bottom: 0,
  right: -60,
  left: "auto",
  width: 300,
  height: 400,
  background: "#FDFDFB",
  borderRadius: 14,
  boxShadow: "0 24px 60px rgba(11, 26, 31, 0.22), 0 0 0 1px rgba(11, 26, 31, 0.06)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  transform: "rotate(2deg)",
  zIndex: 2,
};

const widgetHeader: CSSProperties = {
  padding: "10px 12px",
  background: "var(--w-teal-700)",
  display: "flex",
  alignItems: "center",
  gap: 10,
  flexShrink: 0,
};

const widgetAvatar: CSSProperties = {
  width: 30,
  height: 30,
  borderRadius: "50%",
  background: "var(--w-mint-500)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const widgetBody: CSSProperties = {
  flex: 1,
  padding: 12,
  display: "flex",
  flexDirection: "column",
  gap: 7,
  background: "#FAFAF7",
  overflow: "hidden",
};

const widgetComposer: CSSProperties = {
  padding: "8px 12px",
  borderTop: "1px solid var(--w-border)",
  background: "var(--w-surface)",
  display: "flex",
  alignItems: "center",
  gap: 8,
  flexShrink: 0,
};

const viaWosool: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  fontSize: 9.5,
  color: "var(--w-text-muted)",
  fontFamily: "var(--w-font-mono)",
  letterSpacing: "0.04em",
  marginBottom: 3,
  textTransform: "uppercase",
};

const addBtn: CSSProperties = {
  marginTop: 8,
  padding: "5px 10px",
  borderRadius: 7,
  background: "var(--w-teal-700)",
  color: "#fff",
  fontSize: 11,
  fontWeight: 700,
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  width: "fit-content",
};

// ── Text stack — physical RIGHT ─────────────────────────────────────────

const textStack: CSSProperties = {
  position: "absolute",
  right: 126,
  top: "50%",
  transform: "translateY(-50%)",
  width: 780,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "right",
  gap: 22,
};

const eyebrow: CSSProperties = {
  fontSize: 20,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  fontFamily: "var(--w-font-mono, monospace)",
  color: "var(--w-teal-500)",
  fontWeight: 700,
};

const headline: CSSProperties = {
  fontSize: 92,
  fontWeight: 700,
  lineHeight: 1.05,
  letterSpacing: "-0.015em",
  color: "var(--w-ink)",
  margin: 0,
};

const bullets: CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "var(--w-text)" }}>
      <span style={{ color: "var(--w-mint-500)", fontSize: 20 }}>◆</span>
      <span>{children}</span>
    </li>
  );
}

const divider: CSSProperties = {
  width: 88,
  height: 3,
  background: "var(--w-mint-500)",
  borderRadius: 2,
  marginTop: 4,
};

const echoLine: CSSProperties = {
  fontSize: 22,
  fontWeight: 500,
  color: "var(--w-text-soft)",
  fontStyle: "italic",
  margin: 0,
};
