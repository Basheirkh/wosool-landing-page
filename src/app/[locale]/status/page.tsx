import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import StatusPill from "@/components/status/StatusPill";
import ComponentRow from "@/components/status/ComponentRow";
import IncidentCard from "@/components/status/IncidentCard";
import {
  STATUS_COMPONENTS,
  STATUS_COLORS,
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

const SUPPORT_EMAIL = "info@wosool.ai";

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
      className={`relative overflow-hidden rounded-3xl border p-6 transition-colors ${
        highlight
          ? "border-brand-primary/30 bg-brand-primary/5"
          : "border-subtle bg-surface hover:border-brand-primary/20"
      }`}
    >
      <div className="text-xs text-muted uppercase tracking-[0.22em] mb-3">
        {label}
      </div>
      <div className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight text-primary">
        {value}
        <span className="text-[18px] text-secondary mr-1">%</span>
      </div>
      <div
        className="pointer-events-none absolute inset-x-6 -bottom-px h-px opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,217,126,0.55), transparent)",
        }}
      />
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

  const heroSubhead =
    overall === "operational"
      ? "كل خدمة من خدمات وصول التي يعتمد عليها متجرك تعمل بشكل طبيعي على مدار الساعة. هذه الصفحة تُحدّث آلياً، وتعرض سجل التوفّر لآخر 90 يوماً وتاريخ كل انقطاع سابق بلغة واضحة."
      : "نعرض هنا الحالة الحيّة لكل خدمة في وصول. هذه الصفحة تُحدّث آلياً ونحتفظ بسجل كامل للأحداث الجارية والسابقة.";

  const overallColor = STATUS_COLORS[overall];
  const operationalCount = STATUS_COMPONENTS.filter(
    (c) => c.current_status === "operational",
  ).length;
  const totalComponents = STATUS_COMPONENTS.length;

  return (
    <>
      <Navbar />
      <main className="pt-[88px] theme-text-primary">
        {/* Hero */}
        <section className="relative px-5 pt-10 pb-12 md:px-6 md:pt-14">
          <div className="mx-auto max-w-[1200px]">
            <nav className="theme-text-secondary mb-6 flex items-center justify-between gap-4 text-sm">
              <Link
                href="/"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                الرئيسية
              </Link>
              <span>حالة المنصة</span>
            </nav>

            <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-surface-inset">
              {/* Dot grid + gradient wash */}
              <div className="absolute inset-0 dot-grid-static opacity-40" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 18% 20%, ${overallColor}1f, transparent 28%), radial-gradient(circle at 82% 15%, rgba(0,217,126,0.10), transparent 26%)`,
                }}
              />

              <div className="relative z-10 p-8 md:p-12">
                <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
                    Wosool Status
                  </span>
                  <span className="theme-chip inline-flex items-center gap-2 rounded-full px-4 py-2">
                    <span className="relative inline-flex h-2 w-2">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                        style={{ background: overallColor }}
                      />
                      <span
                        className="relative inline-flex h-2 w-2 rounded-full"
                        style={{ background: overallColor }}
                      />
                    </span>
                    تحديث حيّ
                  </span>
                  <span className="theme-chip rounded-full px-4 py-2">
                    آخر فحص: قبل دقيقتين
                  </span>
                </div>

                <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
                  <div className="flex-1">
                    <div className="mb-5">
                      <StatusPill status={overall} size="lg" />
                    </div>
                    <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-[56px]">
                      {heroHeadline}
                    </h1>
                    <p className="mt-5 max-w-2xl text-[16px] leading-8 text-secondary">
                      {heroSubhead}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-3 rounded-2xl border border-subtle bg-surface px-5 py-4 md:items-end">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-muted">
                      الخدمات
                    </span>
                    <div className="font-mono text-2xl font-bold text-primary">
                      {operationalCount}
                      <span className="text-secondary"> / {totalComponents}</span>
                    </div>
                    <span className="text-xs text-muted">تعمل الآن</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Uptime cards */}
        <section className="px-5 py-6 md:px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  Uptime
                </div>
                <h2 className="mt-1 text-lg font-semibold text-primary">
                  متوسط التوفّر
                </h2>
              </div>
            </div>
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
        <section className="px-5 py-10 md:px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-subtle" />
              <h2 className="text-sm text-muted uppercase tracking-[0.28em]">
                حالة الخدمات
              </h2>
              <div className="flex-1 h-px bg-subtle" />
            </div>

            <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] text-muted">
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: STATUS_COLORS.operational }}
                />
                طبيعي
              </span>
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: STATUS_COLORS.degraded }}
                />
                أداء متدنٍ
              </span>
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: STATUS_COLORS.partial_outage }}
                />
                انقطاع جزئي
              </span>
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: STATUS_COLORS.major_outage }}
                />
                انقطاع مؤثر
              </span>
              <span className="ms-auto hidden md:inline-flex">
                كل شريط يمثّل يوماً واحداً من آخر 90 يوماً
              </span>
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
          <section className="px-5 py-10 md:px-6">
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
        <section className="px-5 py-10 md:px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-subtle" />
              <h2 className="text-sm text-muted uppercase tracking-[0.28em]">
                سجل الانقطاعات
              </h2>
              <div className="flex-1 h-px bg-subtle" />
            </div>

            {historyByMonth.length === 0 ? (
              <div className="relative overflow-hidden rounded-3xl border border-subtle bg-surface p-10 text-center">
                <div className="absolute inset-0 dot-grid-static opacity-25" />
                <div className="relative z-10 mx-auto max-w-md">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    لا انقطاعات في آخر 90 يوماً
                  </h3>
                  <p className="mt-2 text-sm text-secondary leading-7">
                    سجل الانقطاعات سيظهر هنا حال حدوث أي حدث، مع تحديثات لحظية
                    حتى الإغلاق.
                  </p>
                </div>
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

        {/* Subscribe / contact band */}
        <section className="px-5 pt-8 pb-12 md:px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-surface-inset p-8 md:p-12">
              <div className="absolute inset-0 dot-grid-static opacity-30" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 85% 30%, rgba(0,217,126,0.10), transparent 30%)",
                }}
              />
              <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <div className="text-xs text-muted uppercase tracking-[0.28em] mb-3">
                    تنبيهات الحالة
                  </div>
                  <h3 className="text-2xl font-bold text-primary md:text-3xl">
                    تبي تنبيهات مباشرة عند أي حدث؟
                  </h3>
                  <p className="mt-3 text-sm text-secondary leading-7">
                    راسلنا على{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-brand-primary underline decoration-brand-primary/40 underline-offset-4 hover:decoration-brand-primary"
                    >
                      {SUPPORT_EMAIL}
                    </a>{" "}
                    لإضافة بريدك إلى قائمة تنبيهات الانقطاعات والصيانة المجدولة.
                  </p>
                </div>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="theme-btn-primary inline-flex rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-[1px]"
                >
                  راسلنا للاشتراك
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer band — link to changelog */}
        <section className="px-5 pb-16 md:px-6">
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
                  className="theme-btn-secondary inline-flex rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-[1px]"
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
