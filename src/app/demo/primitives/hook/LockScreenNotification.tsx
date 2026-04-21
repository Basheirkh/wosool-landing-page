import type { CSSProperties } from "react";

interface Props {
  name: string;
  preview: string;
  time: string;
  /** 0..1 entry progress (drives slide-in + opacity) */
  entry: number;
  /** 0..1 stack position — pushed down by newer notifications */
  stackOffset?: number;
}

/**
 * WhatsApp-style lock screen notification card. Mint-green WA accent.
 * Stacks visually when multiple are rendered (stackOffset nudges down).
 */
export default function LockScreenNotification({ name, preview, time, entry, stackOffset = 0 }: Props) {
  const style: CSSProperties = {
    width: 360,
    padding: "12px 14px",
    background: "rgba(40, 44, 52, 0.82)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    color: "#E9EDEF",
    fontFamily: "var(--w-font-ar)",
    opacity: entry,
    transform: `translateY(${(1 - entry) * -10 + stackOffset}px) scale(${0.95 + 0.05 * entry})`,
    transformOrigin: "top center",
    boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
    willChange: "transform, opacity",
  };
  return (
    <div style={style}>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 8,
          background: "#00A884",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.983 1.287 2.983.858 3.52.804.537-.054 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
          <b style={{ fontSize: 13, fontWeight: 700, color: "#E9EDEF" }}>WhatsApp</b>
          <span style={{ fontSize: 11, color: "#8696A0", marginInlineStart: "auto", fontFamily: "var(--w-font-mono)" }}>{time}</span>
        </div>
        <div style={{ fontSize: 13, color: "#E9EDEF", marginBottom: 2, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 12, color: "#AEBAC1", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{preview}</div>
      </div>
    </div>
  );
}
