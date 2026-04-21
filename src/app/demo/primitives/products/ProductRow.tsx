import type { CSSProperties, ReactNode } from "react";

export type ProductThumbColor = "blue" | "violet" | "amber" | "rose" | "mint";

const THUMB_BG: Record<ProductThumbColor, string> = {
  blue:   "#EFF6FF",
  violet: "#F5F3FF",
  amber:  "#FFFBEB",
  rose:   "#FFF1F2",
  mint:   "var(--w-mint-100)",
};
const THUMB_FG: Record<ProductThumbColor, string> = {
  blue:   "#3B82F6",
  violet: "#8B5CF6",
  amber:  "#D97706",
  rose:   "#E11D48",
  mint:   "var(--w-teal-700)",
};

export type RowState = "default" | "muted" | "new" | "pulse" | "deleting";

interface Props {
  color: ProductThumbColor;
  thumbIcon: ReactNode;
  name: string;
  sku: string;
  stock: string;
  state?: RowState;
  /** Optional inline meta chip (e.g. "من واتساب") */
  extraMeta?: ReactNode;
  /** If set, renders the old/new price morph. Otherwise single `price`. */
  priceChange?: { oldPrice: string; newPrice: string; delta?: string };
  price?: string;
  statusText?: string;
  statusAccent?: boolean;
  /** Slide-in progress (0..1). 1 = fully in position. */
  slideInProgress?: number;
  /** Deletion progress (0..1). 0 = intact, 1 = gone. */
  deleteProgress?: number;
}

export default function ProductRow({
  color,
  thumbIcon,
  name,
  sku,
  stock,
  state = "default",
  extraMeta,
  priceChange,
  price,
  statusText = "نشط",
  statusAccent = false,
  slideInProgress = 1,
  deleteProgress = 0,
}: Props) {
  // Deletion: scan line in first half, collapse (scaleY + opacity) in second.
  const dp = Math.max(0, Math.min(1, deleteProgress));
  const collapseT = Math.max(0, (dp - 0.45) / 0.55);
  const collapseScaleY = state === "deleting" ? 1 - collapseT : 1;
  const collapseOpacity = state === "deleting" ? 1 - collapseT : 1;
  const strikeWidth = state === "deleting" ? Math.min(1, dp / 0.45) * 100 : 0;

  const opacity = state === "muted" ? 0.55 : state === "deleting" ? collapseOpacity : slideInProgress;
  const translate = (1 - slideInProgress) * -8;

  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 18,
    padding: "16px 18px",
    background: state === "new"
      ? "linear-gradient(180deg, #F4FFFB 0%, var(--w-surface) 70%)"
      : state === "pulse"
      ? "linear-gradient(180deg, #F2FFF7 0%, var(--w-surface) 70%)"
      : state === "deleting"
      ? "linear-gradient(180deg, #FFF0F0 0%, var(--w-surface) 70%)"
      : "var(--w-surface)",
    border: "1px solid " + (state === "new"
      ? "var(--w-mint-500)"
      : state === "pulse"
      ? "var(--w-success)"
      : state === "deleting"
      ? "var(--w-danger)"
      : "var(--w-border)"),
    borderRadius: 14,
    position: "relative",
    flexShrink: 0,
    opacity,
    transform: `translateY(${translate}px) scaleY(${collapseScaleY})`,
    transformOrigin: "top",
    boxShadow:
      state === "new"
        ? "0 0 0 4px rgba(115, 252, 215, 0.25), 0 8px 24px rgba(0, 178, 89, 0.12)"
        : state === "pulse"
        ? "0 0 0 3px rgba(0, 178, 89, 0.18), 0 0 0 8px rgba(0, 178, 89, 0.08)"
        : state === "deleting"
        ? "0 0 0 3px rgba(245, 67, 74, 0.18)"
        : undefined,
    transition: "box-shadow 200ms var(--w-ease-out)",
    overflow: "hidden",
    willChange: slideInProgress < 1 || state === "deleting" ? "transform, opacity" : undefined,
  };

  return (
    <div style={containerStyle}>
      {state === "new" && (
        <span
          style={{
            position: "absolute",
            top: -8,
            insetInlineStart: 14,
            background: "var(--w-mint-500)",
            color: "var(--w-ink)",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.04em",
            padding: "4px 10px",
            borderRadius: 999,
            boxShadow: "0 2px 8px rgba(0, 77, 91, 0.15)",
          }}
        >
          جديد
        </span>
      )}
      {state === "deleting" && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "5%",
            height: 2,
            width: `${strikeWidth * 0.9}%`,
            background: "var(--w-danger)",
            borderRadius: 2,
            boxShadow: "0 0 8px rgba(245, 67, 74, 0.5)",
            zIndex: 2,
            pointerEvents: "none",
            willChange: "width",
          }}
        />
      )}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 10,
          border: "1px solid var(--w-border)",
          background: THUMB_BG[color],
          color: THUMB_FG[color],
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {thumbIcon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            display: "block",
            fontSize: 17,
            fontWeight: 700,
            color: "var(--w-ink)",
            marginBottom: 4,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "var(--w-text-soft)", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--w-font-mono)", color: "var(--w-text-muted)", fontSize: 12 }}>SKU · {sku}</span>
          <span>{stock}</span>
          {extraMeta}
        </div>
      </div>
      <div style={{ textAlign: "left", flexShrink: 0, minWidth: 140 }}>
        {priceChange ? (
          <>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, justifyContent: "flex-start" }}>
              <span
                style={{
                  fontSize: 14,
                  color: "var(--w-text-muted)",
                  textDecoration: "line-through",
                  fontFamily: "var(--w-font-mono)",
                }}
              >
                {priceChange.oldPrice}
              </span>
              <span style={{ fontSize: 24, fontWeight: 800, color: "var(--w-success)", fontFamily: "var(--w-font-mono)" }}>
                {priceChange.newPrice}
                <span style={{ fontSize: 13, fontWeight: 500, marginInlineStart: 4 }}>ريال</span>
              </span>
            </div>
            {priceChange.delta && (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "3px 8px",
                  borderRadius: 6,
                  background: "var(--w-success-soft)",
                  color: "var(--w-success)",
                  fontFamily: "var(--w-font-mono)",
                  marginTop: 6,
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
                {priceChange.delta}
              </span>
            )}
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, fontSize: 20, fontWeight: 700, color: "var(--w-ink)", fontFamily: "var(--w-font-mono)", fontVariantNumeric: "tabular-nums", justifyContent: "flex-start" }}>
              <span>{price}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--w-text-soft)" }}>ريال</span>
            </div>
            <div
              style={{
                fontSize: 12,
                color: statusAccent ? "var(--w-success)" : "var(--w-text-muted)",
                fontWeight: statusAccent ? 600 : 400,
                marginTop: 4,
              }}
            >
              {statusText}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
