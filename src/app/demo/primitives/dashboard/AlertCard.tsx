import type { ReactNode } from "react";

interface Props {
  variant: "danger" | "success";
  title: string;
  sub: ReactNode;
  /** Drama glow intensity (0..1) — used by spotlight-alert scene */
  glow?: number;
}

export default function AlertCard({ variant, title, sub, glow = 0 }: Props) {
  const isDanger = variant === "danger";

  const bg = isDanger ? "var(--w-danger-soft)" : "#CFF6DF";
  const border = isDanger
    ? "color-mix(in srgb, var(--w-danger) 30%, transparent)"
    : "var(--w-success)";
  const iconBg = isDanger
    ? "color-mix(in srgb, var(--w-danger) 12%, white)"
    : "var(--w-whatsapp)";
  const iconColor = isDanger ? "var(--w-danger)" : "#fff";

  const dramaShadow =
    glow > 0
      ? `0 0 0 ${Math.round(8 * glow)}px rgba(245, 67, 74, ${0.14 * glow}), 0 0 0 ${Math.round(18 * glow)}px rgba(245, 67, 74, ${0.06 * glow}), 0 18px 60px rgba(245, 67, 74, ${0.25 * glow})`
      : undefined;

  const scale = 1 + glow * 0.035;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: 22,
        borderRadius: 14,
        border: `1px solid ${border}`,
        background: bg,
        transform: `scale(${scale})`,
        transformOrigin: "center",
        boxShadow: dramaShadow,
        position: "relative",
        zIndex: glow > 0 ? 2 : undefined,
        transition: "box-shadow 160ms ease-out, transform 160ms ease-out",
        willChange: "transform, box-shadow",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: iconBg,
          color: iconColor,
        }}
      >
        {isDanger ? (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>
        ) : (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "var(--w-ink)" }}>{title}</p>
        <p style={{ fontSize: 14, marginTop: 4, marginBottom: 0, color: "var(--w-text-soft)" }}>{sub}</p>
      </div>
      {isDanger ? (
        <button
          type="button"
          style={{
            height: 44,
            padding: "0 20px",
            borderRadius: 10,
            fontFamily: "var(--w-font-ar)",
            fontSize: 15,
            fontWeight: 700,
            background: "var(--w-danger)",
            color: "#fff",
            border: 0,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          ربط الآن
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      ) : (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            borderRadius: 999,
            background: "var(--w-success)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          متصل
        </div>
      )}
    </div>
  );
}
