"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ReleaseCard from "@/components/changelog/ReleaseCard";
import FilterBar from "@/components/changelog/FilterBar";
import {
  CHANGELOG,
  type ChangelogCategory,
  countByCategory,
  groupByWeek,
} from "@/lib/changelog-data";

type FilterKey = "all" | ChangelogCategory;

const SUPPORT_EMAIL = "info@wosool.ai";

const MONTHS_AR = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];

function formatLatestDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return `${d.getUTCDate()} ${MONTHS_AR[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export default function ChangelogPage() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const counts = useMemo(() => countByCategory(), []);
  const total = CHANGELOG.length;

  const filtered = useMemo(() => {
    if (filter === "all") return CHANGELOG;
    return CHANGELOG.filter((e) => e.categories.includes(filter));
  }, [filter]);

  const grouped = useMemo(() => groupByWeek(filtered), [filtered]);

  const latest = CHANGELOG[0]?.shipped_at ?? "";
  const latestId = CHANGELOG[0]?.id ?? "";

  return (
    <>
      <Navbar />
      <main className="pt-[88px] theme-text-primary">
        {/* Hero */}
        <section className="relative px-5 pt-10 pb-10 md:px-6 md:pt-14">
          <div className="mx-auto max-w-[1200px]">
            <nav className="theme-text-secondary mb-6 flex items-center justify-between gap-4 text-sm">
              <Link
                href="/"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                الرئيسية
              </Link>
              <span>سجل التحديثات</span>
            </nav>

            <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-surface-inset">
              <div className="absolute inset-0 dot-grid-static opacity-35" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 15% 18%, rgba(0,217,126,0.12), transparent 28%), radial-gradient(circle at 85% 12%, rgba(246,196,83,0.10), transparent 24%)",
                }}
              />

              <div className="relative z-10 p-8 md:p-12">
                <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
                    Wosool Changelog
                  </span>
                  <span className="theme-chip inline-flex items-center gap-2 rounded-full px-4 py-2">
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
                    </span>
                    يتحدّث باستمرار
                  </span>
                  {latest && (
                    <span className="theme-chip rounded-full px-4 py-2">
                      آخر إصدار: {formatLatestDate(latest)}
                    </span>
                  )}
                  {latestId && (
                    <span className="inline-flex items-center gap-1 rounded-md border border-subtle bg-surface px-2.5 py-1 font-mono text-[11px] text-secondary">
                      <span className="text-muted">#</span>
                      {latestId}
                    </span>
                  )}
                </div>

                <div className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  ما الجديد في وصول
                </div>
                <h1 className="mt-3 text-4xl font-bold leading-tight text-primary md:text-6xl">
                  سجل التحديثات
                </h1>
                <p className="mt-5 max-w-3xl text-[17px] leading-9 text-secondary">
                  كل تحديث وصل إلى متجرك — بلغة واضحة، مرتّبة بالأسابيع. لا
                  مصطلحات تقنية، لا تفاصيل داخلية — فقط ما تغيّر لك أنت.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
                  <StatCard label="إصدار" value={String(total)} />
                  <StatCard
                    label="ميزة"
                    value={String(counts.feature)}
                    accent="#00D97E"
                  />
                  <StatCard
                    label="تحسين"
                    value={String(counts.improvement)}
                    accent="#F6C453"
                  />
                  <StatCard
                    label="إصلاح"
                    value={String(counts.fix)}
                    accent="#4A9EFF"
                  />
                  <StatCard
                    label="موثوقية"
                    value={String(counts.platform)}
                    accent="#A68AFF"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="px-5 md:px-6">
          <div className="mx-auto max-w-[1200px]">
            <FilterBar
              active={filter}
              onChange={setFilter}
              counts={counts}
              total={total}
            />
          </div>
        </section>

        {/* Releases grouped by week */}
        <section className="px-5 pb-12 md:px-6">
          <div className="mx-auto max-w-[1200px]">
            {grouped.length === 0 && (
              <div className="rounded-3xl border border-subtle bg-surface p-10 text-center text-secondary">
                لا توجد تحديثات مطابقة في هذا الفلتر.
              </div>
            )}

            <div className="space-y-14">
              {grouped.map((week) => (
                <div key={week.key}>
                  <div className="sticky top-[172px] z-10 -mx-5 mb-6 bg-[color:var(--background)]/92 px-5 py-3 backdrop-blur-md md:-mx-6 md:px-6">
                    <div className="mx-auto flex max-w-[1200px] items-center gap-4">
                      <span className="inline-flex h-6 items-center rounded-md border border-subtle bg-surface px-2 font-mono text-[11px] text-muted">
                        WK {week.key.slice(-2)}
                      </span>
                      <h2 className="text-sm font-semibold text-primary">
                        {week.label_ar}
                      </h2>
                      <div className="h-px flex-1 bg-subtle" />
                      <span className="text-[11px] text-muted">
                        {week.entries.length}{" "}
                        {week.entries.length === 1 ? "إصدار" : "إصدارات"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {week.entries.map((entry) => (
                      <ReleaseCard key={entry.id} entry={entry} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe band */}
        <section className="px-5 pt-4 pb-12 md:px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-surface-inset p-8 md:p-12">
              <div className="absolute inset-0 dot-grid-static opacity-30" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 30%, rgba(0,217,126,0.10), transparent 30%)",
                }}
              />
              <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <div className="text-xs text-muted uppercase tracking-[0.28em] mb-3">
                    ملخّص أسبوعي
                  </div>
                  <h3 className="text-2xl font-bold text-primary md:text-3xl">
                    تبي تستلم كل إصدار في بريدك؟
                  </h3>
                  <p className="mt-3 text-sm text-secondary leading-7">
                    راسلنا على{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-brand-primary underline decoration-brand-primary/40 underline-offset-4 hover:decoration-brand-primary"
                    >
                      {SUPPORT_EMAIL}
                    </a>{" "}
                    وسنضيفك إلى ملخّص التحديثات الأسبوعي — مختصر، بلغة واضحة،
                    ومرتّب حسب التأثير على متجرك.
                  </p>
                </div>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="theme-btn-primary inline-flex rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-[1px]"
                >
                  اشترك في الملخّص
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer band — link to status */}
        <section className="px-5 pb-16 md:px-6">
          <div className="mx-auto max-w-[1200px]">
            <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="text-xs text-muted uppercase tracking-[0.28em] mb-3">
                    حالة المنصة
                  </div>
                  <h3 className="text-2xl font-bold text-primary md:text-3xl">
                    جميع الخدمات تعمل الآن
                  </h3>
                  <p className="mt-2 text-sm text-secondary leading-7">
                    تابع حالة كل خدمة من خدمات وصول، وسجل الانقطاعات لآخر 90
                    يوماً.
                  </p>
                </div>
                <Link
                  href="/status"
                  className="theme-btn-secondary inline-flex rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-[1px]"
                >
                  عرض حالة المنصة
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

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-subtle bg-surface p-4">
      <div className="text-[10px] text-muted uppercase tracking-[0.2em] mb-2">
        {label}
      </div>
      <div
        className="text-[26px] font-bold leading-none tracking-tight"
        style={accent ? { color: accent } : undefined}
      >
        {value}
      </div>
      {accent && (
        <div
          className="pointer-events-none absolute inset-x-4 -bottom-px h-px opacity-60"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />
      )}
    </div>
  );
}
