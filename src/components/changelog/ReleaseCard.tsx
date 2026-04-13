import type { ChangelogEntry } from "@/lib/changelog-data";
import CategoryPill from "./CategoryPill";

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

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return `${d.getUTCDate()} ${MONTHS_AR[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export default function ReleaseCard({ entry }: { entry: ChangelogEntry }) {
  const anchor = `#${entry.id}`;

  return (
    <article
      id={entry.id}
      className="relative rounded-[28px] border border-subtle bg-surface p-6 md:p-8 scroll-mt-24 transition-colors hover:border-brand-primary/25"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex flex-wrap items-center gap-2">
          {entry.categories.map((c) => (
            <CategoryPill key={c} category={c} />
          ))}
          <span className="font-mono text-[11px] text-muted">
            {entry.version}
          </span>
        </div>
        <div className="text-[11px] text-muted">{formatDate(entry.shipped_at)}</div>
      </div>

      <h3 className="mb-4 text-[20px] md:text-[22px] font-bold leading-8 text-primary">
        {entry.title_ar}
      </h3>

      <p className="text-[15px] leading-9 text-secondary">{entry.summary_ar}</p>

      {entry.highlights_ar && entry.highlights_ar.length > 0 && (
        <ul className="mt-6 space-y-2.5">
          {entry.highlights_ar.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-7 text-secondary">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1.5 flex-shrink-0 text-brand-primary"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-subtle pt-4">
        <div className="flex items-center gap-2 text-[10px] text-muted font-mono">
          <span>{entry.id}</span>
        </div>
        <a
          href={anchor}
          className="text-[11px] text-muted transition-colors hover:text-brand-primary"
        >
          رابط ثابت ↗
        </a>
      </div>
    </article>
  );
}
