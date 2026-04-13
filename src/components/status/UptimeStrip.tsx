import type { DailyUptime } from "@/lib/status-data";
import { STATUS_COLORS, STATUS_LABELS_AR } from "@/lib/status-data";

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
  return `${d.getUTCDate()} ${MONTHS_AR[d.getUTCMonth()]}`;
}

export default function UptimeStrip({
  series,
}: {
  series: DailyUptime[];
}) {
  // Series is newest-first. Reverse for chronological display (oldest left).
  // But in RTL, we want newest on the LEFT and oldest on the RIGHT visually,
  // which means in source order: newest-first with dir=ltr flow inside the strip.
  const bars = [...series].reverse(); // oldest → newest

  return (
    <div className="relative">
      <div
        className="flex items-center gap-[1px]"
        dir="ltr"
        role="group"
        aria-label="سجل التوفّر لآخر 90 يوم"
      >
        {bars.map((d) => {
          const color = STATUS_COLORS[d.status];
          return (
            <div
              key={d.date}
              className="h-6 w-[3px] rounded-sm transition-all hover:scale-y-110"
              style={{
                background: color,
                opacity: d.status === "operational" ? 0.82 : 1,
              }}
              title={`${formatDate(d.date)} — ${d.uptime_pct.toFixed(2)}% — ${
                STATUS_LABELS_AR[d.status]
              }`}
            />
          );
        })}
      </div>
      <div
        className="mt-2 flex justify-between text-[10px] text-muted"
        dir="ltr"
      >
        <span>قبل 90 يوم</span>
        <span>اليوم</span>
      </div>
    </div>
  );
}
