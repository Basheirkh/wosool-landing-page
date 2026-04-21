import type { ReactNode } from "react";
import DashboardHeader from "../dashboard/DashboardHeader";

type OrderStatus = "pending" | "processing" | "done";

const STATUS_LABEL: Record<OrderStatus, string> = {
  pending: "بانتظار الدفع",
  processing: "قيد التنفيذ",
  done: "تم التنفيذ",
};
const STATUS_FG: Record<OrderStatus, string> = {
  pending: "var(--w-text-soft)",
  processing: "var(--w-warning)",
  done: "var(--w-success)",
};
const STATUS_BG: Record<OrderStatus, string> = {
  pending: "var(--w-surface-2)",
  processing: "var(--w-warning-soft)",
  done: "var(--w-success-soft)",
};

interface StaticOrder {
  id: string;
  customer: string;
  city: string;
  total: string;
  status: OrderStatus;
}

const ORDERS: StaticOrder[] = [
  { id: "٢٨٤٩", customer: "خالد العنزي",    city: "الرياض",  total: "٤٩٩",  status: "pending" },
  { id: "٢٨٤٨", customer: "نورة الدوسري",   city: "جدة",      total: "٨٩٩",  status: "processing" },
  { id: "٢٨٤٧", customer: "عبدالله السالم", city: "الدمام",   total: "١٥٠٠", status: "processing" },
  { id: "٢٨٤٦", customer: "سارة القحطاني",  city: "مكة",      total: "٣٤٩",  status: "done" },
];

interface Props {
  compact?: boolean;
  /** Which order (by id) should morph status + which target status */
  morph?: { orderId: string; targetStatus: OrderStatus; progress: number };
  /** Top highlight pill count (optional) */
  subText?: string;
}

export default function OrdersPage({ compact = false, morph, subText }: Props) {
  return (
    <>
      <DashboardHeader title="الطلبات" sub={subText ?? "٨٤ طلب هذا الأسبوع"} compact={compact} showBrandName={!compact} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          paddingBottom: 14,
          borderBottom: "1px solid var(--w-border)",
        }}
      >
        <span
          style={{
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 14px",
            background: "var(--w-surface-2)",
            border: "1px solid var(--w-border)",
            borderRadius: 10,
            color: "var(--w-text-muted)",
            fontSize: 14,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>{compact ? "ابحث" : "ابحث في الطلبات"}</span>
        </span>
        <Chip on>الكل</Chip>
        {!compact && <Chip>قيد التنفيذ</Chip>}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {ORDERS.map((o) => (
          <OrderRow
            key={o.id}
            order={o}
            compact={compact}
            morphing={morph?.orderId === o.id ? { to: morph.targetStatus, progress: morph.progress } : undefined}
          />
        ))}
      </div>
    </>
  );
}

function OrderRow({ order, compact, morphing }: { order: StaticOrder; compact?: boolean; morphing?: { to: OrderStatus; progress: number } }) {
  const isMorphing = morphing !== undefined;
  const morphProgress = morphing?.progress ?? 0;
  const targetStatus = morphing?.to ?? order.status;

  // Cross-fade the pill from current status to target status as progress 0→1.
  const fadeOut = isMorphing ? 1 - morphProgress : 0;
  const fadeIn = isMorphing ? morphProgress : 1;

  const glow = isMorphing && targetStatus === "done" ? morphProgress : 0;

  return (
    <div
      style={{
        background: "var(--w-surface)",
        border: "1px solid var(--w-border)",
        borderRadius: 14,
        padding: compact ? "14px 16px" : "16px 18px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        boxShadow: glow > 0 ? `0 0 0 ${Math.round(2 + glow * 4)}px rgba(0, 178, 89, ${0.15 + glow * 0.3})` : undefined,
        transition: "box-shadow 200ms var(--w-ease-out)",
        willChange: isMorphing ? "box-shadow" : undefined,
      }}
    >
      <div
        style={{
          width: compact ? 44 : 52,
          height: compact ? 44 : 52,
          borderRadius: 10,
          background: "var(--w-surface-2)",
          border: "1px solid var(--w-border)",
          color: "var(--w-text-muted)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 3 }}>
          <b style={{ color: "var(--w-ink)", fontWeight: 700, fontSize: compact ? 15 : 17 }}>
            طلب <span style={{ fontFamily: "var(--w-font-mono)", direction: "ltr", display: "inline-block" }}>#{order.id}</span>
          </b>
        </div>
        <div style={{ display: "flex", gap: 12, fontSize: compact ? 12 : 13, color: "var(--w-text-soft)" }}>
          <span>{order.customer}</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>{order.city}</span>
        </div>
      </div>
      <div style={{ textAlign: "left", flexShrink: 0, minWidth: 80 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "var(--w-ink)", fontFamily: "var(--w-font-mono)" }}>
          {order.total}
          <span style={{ fontSize: 12, fontWeight: 500, color: "var(--w-text-soft)", marginInlineStart: 4 }}>ريال</span>
        </div>
      </div>
      <div style={{ position: "relative", minWidth: 100, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <StatusPill status={order.status} opacity={fadeOut} />
        {isMorphing && <StatusPill status={targetStatus} opacity={fadeIn} absolute />}
      </div>
    </div>
  );
}

function StatusPill({ status, opacity = 1, absolute }: { status: OrderStatus; opacity?: number; absolute?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 12px",
        borderRadius: 999,
        background: STATUS_BG[status],
        color: STATUS_FG[status],
        fontSize: 12,
        fontWeight: 700,
        border: "1px solid " + STATUS_FG[status],
        opacity,
        ...(absolute
          ? { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
          : {}),
        willChange: "opacity",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} />
      {STATUS_LABEL[status]}
    </span>
  );
}

function Chip({ on, children }: { on?: boolean; children: ReactNode }) {
  return (
    <span
      style={{
        padding: "8px 14px",
        background: on ? "var(--w-ink)" : "var(--w-surface)",
        border: "1px solid " + (on ? "var(--w-ink)" : "var(--w-border)"),
        color: on ? "#fff" : "var(--w-text-soft)",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      {children}
    </span>
  );
}
