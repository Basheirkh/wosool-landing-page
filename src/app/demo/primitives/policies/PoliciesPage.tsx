import DashboardHeader from "../dashboard/DashboardHeader";

interface Props {
  compact?: boolean;
  /** Issue progress (0..1) — drives the mint highlight on the waybills
   *  currently being generated (top 3 rows). */
  extractProgress?: number;
}

interface Waybill {
  tracking: string;
  orderNum: string;
  customer: string;
  city: string;
  status: "issuing" | "ready" | "shipped";
}

const WAYBILLS: Waybill[] = [
  { tracking: "SP-48210-KSA", orderNum: "٢٨٤٩", customer: "خالد العنزي",    city: "الرياض", status: "issuing" },
  { tracking: "SP-48211-KSA", orderNum: "٢٨٤٨", customer: "نورة الدوسري",   city: "جدة",    status: "issuing" },
  { tracking: "SP-48212-KSA", orderNum: "٢٨٤٧", customer: "عبدالله السالم", city: "الدمام", status: "issuing" },
  { tracking: "SP-48209-KSA", orderNum: "٢٨٤٦", customer: "سارة القحطاني",  city: "مكة",    status: "ready"   },
  { tracking: "SP-48208-KSA", orderNum: "٢٨٤٥", customer: "فيصل الغامدي",   city: "أبها",   status: "shipped" },
];

/**
 * Shipment waybills page. When `extractProgress` > 0, the top three rows
 * (status "issuing") highlight with a mint ring + "صدرت الآن" pill —
 * representing Wosool generating fresh waybills for today's orders.
 *
 * File name preserved (`PoliciesPage`) to avoid cascading renames; exported
 * default is what the scenes actually import.
 */
export default function PoliciesPage({ compact = false, extractProgress = 0 }: Props) {
  const ep = Math.max(0, Math.min(1, extractProgress));
  return (
    <>
      <DashboardHeader
        title="بوليصات الشحن"
        sub={ep > 0.3 ? "٣ بوليصات تُصدر الآن · جاهزة للطباعة" : "٥ بوليصات · آخر تحديث اليوم"}
        compact={compact}
        showBrandName={!compact}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {WAYBILLS.map((w) => {
          const isIssuing = w.status === "issuing";
          // Only the "issuing" rows get the mint extraction highlight
          const highlight = isIssuing ? ep : 0;
          return (
            <WaybillRow
              key={w.tracking}
              waybill={w}
              compact={compact}
              highlight={highlight}
              issuingPillShown={isIssuing && ep > 0.3}
            />
          );
        })}
      </div>
    </>
  );
}

function WaybillRow({
  waybill,
  compact = false,
  highlight = 0,
  issuingPillShown = false,
}: {
  waybill: Waybill;
  compact?: boolean;
  highlight?: number;
  issuingPillShown?: boolean;
}) {
  const status = issuingPillShown ? "issued-now" : waybill.status;
  const muted = waybill.status === "shipped";
  const pill = PILL[status];

  return (
    <div
      style={{
        background: "var(--w-surface)",
        border: "1px solid " + (highlight > 0.1 ? "var(--w-mint-500)" : "var(--w-border)"),
        borderRadius: 14,
        padding: compact ? "14px 16px" : "16px 18px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        opacity: muted ? 0.55 : 1,
        boxShadow:
          highlight > 0.1
            ? `0 0 0 ${Math.round(2 + highlight * 4)}px rgba(115, 252, 215, ${0.2 + highlight * 0.3}), 0 6px 18px rgba(0, 178, 89, 0.08)`
            : undefined,
        transition: "box-shadow 200ms ease-out, border-color 200ms ease-out",
      }}
    >
      {/* Package icon */}
      <div
        style={{
          width: compact ? 42 : 50,
          height: compact ? 42 : 50,
          borderRadius: 10,
          background: highlight > 0.1 ? "var(--w-mint-100)" : "var(--w-surface-2)",
          color: highlight > 0.1 ? "var(--w-teal-700)" : "var(--w-text-muted)",
          border: "1px solid var(--w-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "background 200ms ease-out, color 200ms ease-out",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3, flexWrap: "wrap" }}>
          <b style={{ color: "var(--w-ink)", fontWeight: 700, fontSize: compact ? 14 : 16 }}>
            بوليصة{" "}
            <span dir="ltr" style={{ fontFamily: "var(--w-font-mono)", display: "inline-block" }}>
              #{waybill.tracking}
            </span>
          </b>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              padding: "2px 8px",
              borderRadius: 999,
              fontSize: 10.5,
              fontWeight: 700,
              color: pill.color,
              background: pill.bg,
              border: "1px solid " + pill.color,
              letterSpacing: "0.02em",
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "currentColor" }} />
            {pill.text}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: compact ? 12 : 13, color: "var(--w-text-soft)", flexWrap: "wrap" }}>
          <span>
            طلب{" "}
            <span dir="ltr" style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600, color: "var(--w-text)" }}>
              #{waybill.orderNum}
            </span>
          </span>
          <span style={{ opacity: 0.35 }}>·</span>
          <span style={{ color: "var(--w-text)" }}>{waybill.customer}</span>
          <span style={{ opacity: 0.35 }}>·</span>
          <span>{waybill.city}</span>
        </div>
      </div>
    </div>
  );
}

const PILL: Record<"issuing" | "ready" | "shipped" | "issued-now", { text: string; color: string; bg: string }> = {
  issuing:      { text: "قيد الإصدار",  color: "var(--w-warning)",  bg: "var(--w-warning-soft)" },
  ready:        { text: "جاهزة للشحن",  color: "var(--w-teal-700)", bg: "var(--w-teal-50)" },
  shipped:      { text: "تم الشحن",      color: "var(--w-success)",  bg: "var(--w-success-soft)" },
  "issued-now": { text: "صدرت الآن",     color: "var(--w-success)",  bg: "#D1FBE2" },
};
