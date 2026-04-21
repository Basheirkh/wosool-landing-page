import DashboardHeader from "./DashboardHeader";
import QrCode from "../QrCode";

interface Props {
  qrGlow?: boolean;
  qrStatus?: "waiting" | "reading";
  compact?: boolean;
}

export default function ConnectPage({ qrGlow = false, qrStatus = "waiting", compact = false }: Props) {
  return (
    <>
      <DashboardHeader title="ربط واتساب" sub="الخطوة الأولى من ثلاث" compact={compact} showBrandName={!compact} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: compact ? 8 : 12, marginBottom: 4 }}>
        <Step n="١" title="رقم المتجر" sub="للعملاء" active compact={compact} />
        <Step n="٢" title="رقم المدير" sub="للتنبيهات" compact={compact} />
        <Step n="٣" title="جاهز" sub="بدء الوكلاء" compact={compact} />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
          padding: compact ? "12px 14px" : "16px 20px",
          borderRadius: 12,
          background: "var(--w-warning-soft)",
          border: "1px solid color-mix(in srgb, var(--w-warning) 25%, transparent)",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "var(--w-warning)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div style={{ flex: 1, fontSize: compact ? 13 : 15, lineHeight: 1.5, color: "var(--w-ink)" }}>
          <b style={{ fontWeight: 700 }}>استخدم رقم واتساب المتجر</b> — {compact ? "لا تستخدم رقمك الشخصي." : "هذا الرقم سيستقبل رسائل العملاء. لا تستخدم رقمك الشخصي."}
        </div>
      </div>

      {compact ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginTop: 8 }}>
          <QrCode width={290} padding={16} centerSize={56} glow={qrGlow} />
          <QrStatus status={qrStatus} compact />
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 36, alignItems: "center" }}>
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--w-text-soft)",
                marginBottom: 12,
              }}
            >
              خطوات ربط رقم المتجر
            </div>
            <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              <Howto n="١">افتح تطبيق واتساب على هاتف المتجر</Howto>
              <Howto n="٢">من الإعدادات، اختر «الأجهزة المرتبطة» ثم «ربط جهاز»</Howto>
              <Howto n="٣">وجّه كاميرا الهاتف نحو هذا الرمز لمسحه</Howto>
            </ol>
          </div>
          <div>
            <QrCode glow={qrGlow} />
            <QrStatus status={qrStatus} />
          </div>
        </div>
      )}
    </>
  );
}

function Step({ n, title, sub, active, compact }: { n: string; title: string; sub: string; active?: boolean; compact?: boolean }) {
  return (
    <div
      style={{
        padding: compact ? "12px 14px" : "16px 18px",
        borderRadius: 12,
        border: active ? "1px solid var(--w-teal-300)" : "1px solid var(--w-border)",
        background: active ? "var(--w-teal-50)" : "var(--w-surface)",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: active ? "var(--w-teal-700)" : "var(--w-surface-2)",
          color: active ? "#fff" : "var(--w-text-soft)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--w-font-mono)",
          fontSize: 14,
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {n}
      </span>
      <div>
        <b style={{ display: "block", fontSize: compact ? 13 : 15, fontWeight: 700, color: "var(--w-ink)" }}>{title}</b>
        <span style={{ display: "block", fontSize: compact ? 11 : 12, color: "var(--w-text-soft)", marginTop: 2 }}>{sub}</span>
      </div>
    </div>
  );
}

function Howto({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", gap: 14, alignItems: "flex-start", fontSize: 15, lineHeight: 1.5, color: "var(--w-text)" }}>
      <span
        style={{
          flexShrink: 0,
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "var(--w-teal-50)",
          color: "var(--w-teal-700)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--w-font-mono)",
          fontSize: 13,
          fontWeight: 700,
        }}
      >
        {n}
      </span>
      <span>{children}</span>
    </li>
  );
}

function QrStatus({ status, compact }: { status: "waiting" | "reading"; compact?: boolean }) {
  const isReading = status === "reading";
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: compact ? 14 : 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        fontSize: compact ? 13 : 15,
        color: "var(--w-text-soft)",
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: isReading ? "var(--w-success)" : "var(--w-teal-700)",
        }}
      />
      {isReading ? "جاري القراءة" : "في انتظار المسح"}
      <span style={{ display: "inline-flex", gap: 3, alignItems: "center", paddingTop: 8 }}>
        <i style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--w-teal-500)", opacity: 1 }} />
        <i style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--w-teal-500)", opacity: 0.7 }} />
        <i style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--w-teal-500)", opacity: 0.35 }} />
      </span>
    </div>
  );
}
