import type { CSSProperties, ReactNode } from "react";

export type AccentColor = "teal" | "mint" | "deep-teal";

interface Props {
  illustration: ReactNode;
  title: string;
  description: string;
  accentColor: AccentColor;
}

const ACCENT_HEX: Record<AccentColor, string> = {
  teal: "#0A7380",
  mint: "#004D5B",
  "deep-teal": "#00323C",
};

export default function WhyCard({ illustration, title, description, accentColor }: Props) {
  const hex = ACCENT_HEX[accentColor];
  return (
    <article style={cardStyle} className="why-card">
      <div style={{ ...illoFrame, background: `${hex}14` }}>
        <div style={{ color: hex, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {illustration}
        </div>
      </div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descStyle}>{description}</p>
    </article>
  );
}

const cardStyle: CSSProperties = {
  background: "var(--w-surface)",
  border: "1px solid var(--w-border)",
  borderRadius: 20,
  padding: "44px 36px 40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: 20,
  minHeight: 460,
};

const illoFrame: CSSProperties = {
  width: 96,
  height: 96,
  borderRadius: 999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 4,
};

const titleStyle: CSSProperties = {
  fontSize: 26,
  fontWeight: 700,
  lineHeight: 1.25,
  color: "var(--w-ink)",
  margin: 0,
  letterSpacing: "-0.01em",
};

const descStyle: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.65,
  color: "var(--w-text-soft)",
  fontWeight: 500,
  margin: 0,
  maxWidth: "32ch",
};
