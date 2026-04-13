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
              <span>سجل التحديثات</span>
            </div>

            <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
                  Changelog
                </span>
                <span className="theme-chip rounded-full px-4 py-2">
                  آخر تحديث: {formatLatestDate(latest)}
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
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
        </section>

        {/* Filter bar */}
        <section className="px-6">
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
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-[1200px]">
            {grouped.length === 0 && (
              <div className="rounded-3xl border border-subtle bg-surface p-10 text-center text-secondary">
                لا توجد تحديثات مطابقة في هذا الفلتر.
              </div>
            )}

            <div className="space-y-14">
              {grouped.map((week) => (
                <div key={week.key}>
                  <div className="sticky top-[172px] z-10 -mx-6 mb-6 bg-[color:var(--background)]/92 px-6 py-3 backdrop-blur-md">
                    <div className="mx-auto flex max-w-[1200px] items-center gap-4">
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

        {/* Footer band */}
        <section className="px-6 py-16">
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
                  className="theme-btn-primary inline-flex rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-[1px]"
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
    <div className="rounded-2xl border border-subtle bg-surface p-4">
      <div className="text-[10px] text-muted uppercase tracking-[0.2em] mb-2">
        {label}
      </div>
      <div
        className="text-[26px] font-bold leading-none tracking-tight"
        style={accent ? { color: accent } : undefined}
      >
        {value}
      </div>
    </div>
  );
}
