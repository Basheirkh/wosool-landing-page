import { easeOutCubic } from "../easing";

interface Props {
  /** The number to display. String so "<3" / "900×" / "+40" can be formatted literally. */
  display: string;
  /** The label below the metric */
  label: string;
  /** 0..1 ticker progress — the display content reveals proportionally */
  tickProgress: number;
  /** 0..1 card entry (scale + opacity) */
  entry: number;
  /** Unit suffix (e.g., "ث", "×", "٪"). Renders slightly smaller beside the main number. */
  unit?: string;
  /** Optional tint for the number */
  accent?: string;
}

/**
 * A metric card with a counter ticker. The `display` is either a pure
 * Arabic numeric that the ticker counts up to, or a literal like "٩٠٠×"
 * that just reveals via opacity when tickProgress >= 1.
 *
 * For numbers that can be counted up from 0, pass a pure digit string
 * ("٤٠", "٩٤") in `display` and we lerp. For mixed labels ("٣") with
 * unit "ث", the number counts but the unit stays constant.
 */
export default function MetricCard({ display, label, tickProgress, entry, unit, accent = "var(--w-teal-700)" }: Props) {
  const t = easeOutCubic(Math.max(0, Math.min(1, tickProgress)));
  const parsed = toInt(display);
  // Preserve a leading `+` through the ticker so "+٤٠" counts as "+٠" → "+٤٠"
  // instead of collapsing the sign on the way up.
  const prefix = display.startsWith("+") ? "+" : "";
  const shown = parsed == null ? display : prefix + toArabic(Math.round(parsed * t));

  // Small mint underline grows after the ticker settles
  const underline = Math.max(0, (t - 0.85) / 0.15);

  return (
    <div
      style={{
        padding: "36px 28px",
        borderRadius: 22,
        background: "var(--w-surface)",
        border: "1px solid var(--w-border)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        alignItems: "center",
        textAlign: "center",
        opacity: entry,
        transform: `scale(${0.95 + 0.05 * entry})`,
        boxShadow: "0 10px 30px rgba(11, 26, 31, 0.06)",
        position: "relative",
        willChange: "transform, opacity",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          justifyContent: "center",
          gap: 6,
          fontFamily: "var(--w-font-mono)",
          fontSize: 108,
          fontWeight: 800,
          lineHeight: 1,
          color: accent,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "-0.02em",
        }}
      >
        <span>{shown}</span>
        {unit && (
          <span style={{ fontSize: 48, fontWeight: 700, color: "var(--w-text-soft)" }}>{unit}</span>
        )}
      </div>
      <div
        aria-hidden
        style={{
          width: `${underline * 80}px`,
          height: 4,
          background: "var(--w-mint-500)",
          borderRadius: 2,
          opacity: underline,
          transition: "width 200ms var(--w-ease-out), opacity 200ms var(--w-ease-out)",
        }}
      />
      <div style={{ fontSize: 20, color: "var(--w-text-soft)", marginTop: 4, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

function toInt(s: string): number | null {
  // Accept strings that are purely Arabic digits, optionally with a leading + or prefix
  const stripped = s.replace(/^\+/, "").trim();
  let out = "";
  for (const ch of stripped) {
    const idx = ARABIC_DIGITS.indexOf(ch);
    if (idx >= 0) out += String(idx);
    else if (ch >= "0" && ch <= "9") out += ch;
    else return null;
  }
  if (!out) return null;
  return parseInt(out, 10);
}

function toArabic(n: number): string {
  if (n < 0) return "-" + toArabic(-n);
  return n.toString().replace(/[0-9]/g, (d) => ARABIC_DIGITS[Number(d)]);
}
