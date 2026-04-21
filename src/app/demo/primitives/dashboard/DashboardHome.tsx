import DashboardHeader from "./DashboardHeader";
import HealthCard from "./HealthCard";
import AlertCard from "./AlertCard";
import AgentRow from "./AgentRow";

interface Props {
  connected?: boolean;
  /** Health value (0-100, can be fractional) */
  healthPercent: number;
  /** Alert-card glow intensity for spotlight scene */
  alertGlow?: number;
  /** Health-card warn glow intensity for health-ticker sub-scene */
  healthGlow?: number;
  /** Per-agent focus ring for agents-stagger */
  agentFocus?: [number, number, number];
  /** Mobile phone number to show on success alert */
  phoneNumber?: string;
}

const CUSTOMER_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const OWNER_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const SALES_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

export default function DashboardHome({
  connected = false,
  healthPercent,
  alertGlow = 0,
  healthGlow = 0,
  agentFocus = [0, 0, 0],
  phoneNumber = "+966 55 123 4567",
}: Props) {
  return (
    <>
      <DashboardHeader title="الرئيسية" sub="نظرة عامة على أداء متجرك" />
      <HealthCard percent={healthPercent} state={connected ? "ok" : "warn"} warnGlow={healthGlow} />
      <div data-alert-card>
        {connected ? (
          <AlertCard
            variant="success"
            title="واتساب متصل"
            sub={
              <>
                رقم المتجر:{" "}
                <span dir="ltr" style={{ fontFamily: "var(--w-font-mono)", fontWeight: 600, color: "var(--w-teal-900)" }}>
                  {phoneNumber}
                </span>{" "}
                · الردود الفورية مفعّلة
              </>
            }
          />
        ) : (
          <AlertCard
            variant="danger"
            title="واتساب غير متصل"
            sub="لا يمكن لوكيل العملاء الرد — اربط رقم متجرك لتفعيل المحادثات"
            glow={alertGlow}
          />
        )}
      </div>
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--w-text-soft)",
          margin: "4px 0 0",
        }}
      >
        أداء الوكلاء اليوم
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <AgentRow
          color={connected ? "blue" : "idle"}
          title="وكيل العملاء"
          sub={connected ? "نشط — يرد على واتساب" : "في انتظار ربط واتساب"}
          icon={CUSTOMER_ICON}
          metric={connected ? undefined : { value: "0", label: "رسالة اليوم" }}
          activeBadge={connected}
          focusIntensity={agentFocus[0]}
        />
        <AgentRow
          color={connected ? "violet" : "idle"}
          title="وكيل المدير"
          sub={connected ? "نشط — جاهز للمهام" : "في انتظار التفعيل"}
          icon={OWNER_ICON}
          metric={connected ? undefined : { value: "0", label: "طلب اليوم" }}
          activeBadge={connected}
          focusIntensity={agentFocus[1]}
        />
        <AgentRow
          color={connected ? "green" : "idle"}
          title="وكيل المبيعات"
          sub={connected ? "نشط — يراقب المتجر" : "في انتظار التفعيل"}
          icon={SALES_ICON}
          metric={connected ? undefined : { value: "0", label: "زائر الآن" }}
          activeBadge={connected}
          focusIntensity={agentFocus[2]}
        />
      </div>
    </>
  );
}
