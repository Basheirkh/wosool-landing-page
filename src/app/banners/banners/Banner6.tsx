import type { CSSProperties, ReactNode } from "react";
import WosoolMark from "../../demo/primitives/WosoolMark";

/**
 * Banner 06 — TRUST (Saudi-built, PDPL, SDAIA, Salla partner)
 *
 * Centered single-column stack, quiet and authoritative.
 *  - Large Wosool infinity mark with a soft mint halo behind it.
 *  - Wordmark "وصول" directly under.
 *  - Mint divider.
 *  - H1 "صُنع في السعودية." + subhead.
 *  - Row of 4 trust badges (SA flag / PDPL / SDAIA / Salla partner).
 *  - Muted closing line at the bottom.
 */
export default function Banner6() {
  return (
    <>
      {/* Soft mint halo behind the mark */}
      <div aria-hidden style={halo} />

      <div style={stack}>
        <div style={markWrap}>
          <WosoolMark size={180} color="var(--w-ink)" />
        </div>
        <div style={wordmark}>وصول</div>

        <div aria-hidden style={divider} />

        <h1 style={headline}>
          صُنع في <span style={{ color: "var(--w-teal-700)" }}>السعودية</span>.
        </h1>
        <p style={sub}>مستقبل التجارة الإلكترونية.</p>

        <div style={badgeRow}>
          <TrustBadge label="صُنع في المملكة" icon={<FlagIcon />} />
          <TrustBadge label="متوافق مع PDPL" icon={<ShieldIcon />} />
          <TrustBadge label="متوافقة مع مبادئ SDAIA" icon={<AiIcon />} />
          <TrustBadge label="شريك موثوق لسلة" icon={<HandshakeIcon />} />
        </div>

        <p style={echoLine}>بياناتك لك. ما نبيعها. ما نشاركها.</p>
      </div>
    </>
  );
}

// ── Trust badge ─────────────────────────────────────────────────────────

function TrustBadge({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <div style={badge}>
      <span style={badgeIcon}>{icon}</span>
      <span style={{ fontSize: 16, fontWeight: 600, color: "var(--w-ink)" }}>{label}</span>
    </div>
  );
}

// ── Icons ───────────────────────────────────────────────────────────────

function FlagIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="2" fill="#1E7A3B" />
      <path d="M6 11 h12 M6 15 h8" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M8 9 L12 7 L16 9 L14 11 L16 13 L12 12 L8 13 L10 11 Z" fill="#FFFFFF" opacity="0.85" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 15l2-6 2 6M8.7 13h2.6M15 9v6" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 17l-3 3-3-3 3-3" />
      <path d="M13 7l3-3 3 3-3 3" />
      <path d="M6 14l6-6 4 4-6 6z" />
      <path d="M10 10l4 4" />
    </svg>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────

const halo: CSSProperties = {
  position: "absolute",
  top: 180,
  left: "50%",
  transform: "translateX(-50%)",
  width: 520,
  height: 520,
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(115, 252, 215, 0.35) 0%, rgba(115, 252, 215, 0.12) 40%, transparent 70%)",
  pointerEvents: "none",
};

const stack: CSSProperties = {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 22,
  textAlign: "center",
};

const markWrap: CSSProperties = {
  marginTop: -40,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const wordmark: CSSProperties = {
  fontSize: 56,
  fontWeight: 700,
  color: "var(--w-ink)",
  letterSpacing: "-0.01em",
  lineHeight: 1,
  marginTop: -4,
};

const divider: CSSProperties = {
  width: 88,
  height: 3,
  background: "var(--w-mint-500)",
  borderRadius: 2,
  margin: "4px 0 2px",
};

const headline: CSSProperties = {
  fontSize: 88,
  fontWeight: 700,
  lineHeight: 1.05,
  letterSpacing: "-0.02em",
  color: "var(--w-ink)",
  margin: 0,
};

const sub: CSSProperties = {
  fontSize: 26,
  color: "var(--w-text-soft)",
  fontWeight: 500,
  margin: 0,
  marginTop: -6,
};

const badgeRow: CSSProperties = {
  display: "flex",
  gap: 18,
  marginTop: 16,
  flexWrap: "nowrap",
};

const badge: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  padding: "12px 20px",
  borderRadius: 999,
  background: "var(--w-surface)",
  border: "1px solid var(--w-border)",
  boxShadow: "0 4px 14px rgba(11, 26, 31, 0.05)",
};

const badgeIcon: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  color: "var(--w-teal-700)",
};

const echoLine: CSSProperties = {
  fontSize: 20,
  fontWeight: 500,
  color: "var(--w-text-muted)",
  fontStyle: "italic",
  margin: 0,
  marginTop: 20,
  fontFamily: "var(--w-font-ar)",
};
