import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import StatusPill from "@/components/status/StatusPill";
import ComponentRow from "@/components/status/ComponentRow";
import IncidentCard from "@/components/status/IncidentCard";
import {
  STATUS_COMPONENTS,
  activeIncidents,
  averageUptime,
  groupIncidentsByMonth,
  resolvedIncidents,
  worstCurrentStatus,
} from "@/lib/status-data";

export const metadata: Metadata = {
  title: "حالة المنصة — وصول",
  description:
    "الحالة الحيّة لكل خدمات وصول التي يعتمد عليها متجرك، مع سجل توفّر لآخر 90 يوماً وتاريخ الانقطاعات.",
};

function UptimeCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-6 ${
        highlight
          ? "border-brand-primary/30 bg-brand-primary/5"
          : "border-subtle bg-surface"
      }`}
    >
      <div className="text-xs text-muted uppercase tracking-[0.2em] mb-3">
        {label}
      </div>
      <div className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight text-primary">
        {value}
        <span className="text-[18px] text-secondary mr-1">%</span>
      </div>
    </div>
  );
}

export default function StatusPage() {
  const overall = worstCurrentStatus();
  const active = activeIncidents();
  const history = resolvedIncidents();
  const historyByMonth = groupIncidentsByMonth(history);

  const uptime24h = averageUptime(1);
  const uptime7d = averageUptime(7);
  const uptime30d = averageUptime(30);
  const uptime90d = averageUptime(90);

  const heroHeadline =
    overall === "operational"
      ? "جميع الخدمات تعمل طبيعي"
      : overall === "major_outage"
      ? "انقطاع مؤثر جارٍ — نعمل على الإصلاح"
      : overall === "partial_outage"
      ? "انقطاع جزئي في بعض الخدمات"
      : "أداء متدنٍ في بعض الخدمات";

  return (
    <>
      <Navbar />
      <main className="pt-[88px] theme-text-primary">
        {/* Hero */}
        <section className="px-6 pt-12 pb-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="theme-text-secondary mb-6 flex items-center justify-between gap-4 text-sm">
              <Link
                href="/"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                الرئيسية
              </Link>
              <span>حالة المنصة</span>
            </div>

            <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
                  Status
                </span>
                <span className="theme-chip rounded-full px-4 py-2">
                  آخر فحص: قبل دقيقتين
                </span>
              </div>

              <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="mb-5">
                    <StatusPill status={overall} size="lg" />
                  </div>
                  <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl">
                    {heroHeadline}
                  </h1>
                  <p className="mt-4 max-w-2xl text-[16px] leading-8 text-secondary">
                    نعرض هنا الحالة الحيّة لكل خدمة في وصول يعتمد عليها متجرك.
                    كل شريط يمثّل يوماً من آخر 90 يوماً، وكل انقطاع سابق
                    موثّق بلغة واضحة.
                  </p>
                </div>

                <button
                  type="button"
                  disabled
                  className="theme-btn-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium opacity-70"
                  title="قريباً"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  اشترك بالتنبيهات
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Uptime cards */}
        <section className="px-6 py-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <UptimeCard
                label="آخر 24 ساعة"
                value={uptime24h.toFixed(2)}
                highlight={overall !== "operational"}
              />
              <UptimeCard label="آخر 7 أيام" value={uptime7d.toFixed(2)} />
              <UptimeCard label="آخر 30 يوم" value={uptime30d.toFixed(2)} />
              <UptimeCard label="آخر 90 يوم" value={uptime90d.toFixed(2)} />
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="px-6 py-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-subtle" />
              <h2 className="text-sm text-muted uppercase tracking-[0.28em]">
                حالة الخدمات
              </h2>
              <div className="flex-1 h-px bg-subtle" />
            </div>

            <div className="space-y-4">
              {STATUS_COMPONENTS.map((c) => (
                <ComponentRow key={c.slug} component={c} />
              ))}
            </div>
          </div>
        </section>

        {/* Active incidents (if any) */}
        {active.length > 0 && (
          <section className="px-6 py-10">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex-1 h-px bg-subtle" />
                <h2 className="text-sm text-muted uppercase tracking-[0.28em]">
                  انقطاعات جارية
                </h2>
                <div className="flex-1 h-px bg-subtle" />
              </div>
              <div className="space-y-4">
                {active.map((i) => (
                  <IncidentCard key={i.id} incident={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Resolved history */}
        <section className="px-6 py-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-subtle" />
              <h2 className="text-sm text-muted uppercase tracking-[0.28em]">
                سجل الانقطاعات
              </h2>
              <div className="flex-1 h-px bg-subtle" />
            </div>

            {historyByMonth.length === 0 ? (
              <div className="rounded-3xl border border-subtle bg-surface p-8 text-center text-secondary">
                لا توجد انقطاعات سابقة في آخر 90 يومًا.
              </div>
            ) : (
              <div className="space-y-10">
                {historyByMonth.map((group) => (
                  <div key={group.key}>
                    <div className="mb-4 flex items-center gap-3">
                      <h3 className="text-[13px] font-semibold text-muted font-mono uppercase tracking-wider">
                        {group.label_ar}
                      </h3>
                      <div className="h-px flex-1 bg-subtle" />
                      <span className="text-[11px] text-muted">
                        {group.incidents.length}{" "}
                        {group.incidents.length === 1 ? "انقطاع" : "انقطاعات"}
                      </span>
                    </div>
                    <div className="space-y-4">
                      {group.incidents.map((i) => (
                        <IncidentCard key={i.id} incident={i} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Footer band */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="text-xs text-muted uppercase tracking-[0.28em] mb-3">
                    سجل التحديثات
                  </div>
                  <h3 className="text-2xl font-bold text-primary md:text-3xl">
                    شوف كل ما تغيّر في وصول
                  </h3>
                  <p className="mt-2 text-sm text-secondary leading-7">
                    كل ميزة جديدة، وكل تحسين، وكل إصلاح — مرتّب بالأسابيع
                    ومكتوب بلغة واضحة.
                  </p>
                </div>
                <Link
                  href="/changelog"
                  className="theme-btn-primary inline-flex rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-[1px]"
                >
                  عرض سجل التحديثات
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
