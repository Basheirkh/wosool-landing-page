import type { Incident } from "@/lib/status-data";
import {
  STATUS_COMPONENTS,
  STATUS_COLORS,
  STATUS_LABELS_AR,
} from "@/lib/status-data";
import StatusPill from "./StatusPill";

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

function formatDateTime(iso: string): string {
  const d = new Date(iso);
  const day = d.getUTCDate();
  const month = MONTHS_AR[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  const hours = String(d.getUTCHours()).padStart(2, "0");
  const minutes = String(d.getUTCMinutes()).padStart(2, "0");
  return `${day} ${month} ${year} — ${hours}:${minutes} UTC`;
}

function durationLabel(startIso: string, endIso: string | null): string {
  if (!endIso) return "جارٍ";
  const start = new Date(startIso).getTime();
  const end = new Date(endIso).getTime();
  const minutes = Math.round((end - start) / (1000 * 60));
  if (minutes < 60) return `${minutes} دقيقة`;
  const hours = Math.floor(minutes / 60);
  const rem = minutes % 60;
  if (rem === 0) return `${hours} ساعة`;
  return `${hours} ساعة و${rem} دقيقة`;
}

export default function IncidentCard({ incident }: { incident: Incident }) {
  const color = STATUS_COLORS[incident.severity];
  const anchor = `#${incident.id}`;

  const affectedNames = incident.components
    .map(
      (slug) =>
        STATUS_COMPONENTS.find((c) => c.slug === slug)?.name_ar ?? slug
    )
    .join("، ");

  return (
    <article
      id={incident.id}
      className="relative rounded-[24px] border border-subtle bg-surface p-6 md:p-8 scroll-mt-24"
    >
      <span
        aria-hidden
        className="absolute start-0 top-8 bottom-8 w-1 rounded-full"
        style={{ background: color }}
      />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <StatusPill status={incident.severity} size="sm" />
            <span className="text-[11px] text-muted font-mono">
              {incident.id}
            </span>
          </div>

          <h3 className="text-[19px] font-semibold text-primary leading-8">
            {incident.title_ar}
          </h3>
          <div className="mt-1 text-[11px] text-muted font-mono">
            {incident.title_en}
          </div>
        </div>

        <a
          href={anchor}
          className="text-[11px] text-muted hover:text-brand-primary transition-colors"
        >
          رابط ثابت ↗
        </a>
      </div>

      <div className="mt-5 grid gap-3 rounded-2xl border border-subtle bg-surface-inset p-4 md:grid-cols-3">
        <div>
          <div className="text-[10px] text-muted uppercase tracking-wider mb-1">
            بدأ
          </div>
          <div className="text-xs text-primary font-mono">
            {formatDateTime(incident.started_at)}
          </div>
        </div>
        <div>
          <div className="text-[10px] text-muted uppercase tracking-wider mb-1">
            المدة
          </div>
          <div className="text-xs text-primary">
            {durationLabel(incident.started_at, incident.resolved_at)}
          </div>
        </div>
        <div>
          <div className="text-[10px] text-muted uppercase tracking-wider mb-1">
            الخدمات المتأثرة
          </div>
          <div className="text-xs text-primary">{affectedNames}</div>
        </div>
      </div>

      <p className="mt-5 text-[15px] leading-9 text-secondary">
        {incident.summary_ar}
      </p>

      {incident.resolved_at && (
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-primary/25 bg-brand-primary/8 px-3 py-1.5 text-[11px] text-brand-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          تمّ الحلّ — {STATUS_LABELS_AR.operational}
        </div>
      )}
    </article>
  );
}
