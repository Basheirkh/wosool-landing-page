import type { StatusComponent } from "@/lib/status-data";
import StatusPill from "./StatusPill";
import UptimeStrip from "./UptimeStrip";

function averageOf(series: StatusComponent["daily_uptime"]): number {
  const sum = series.reduce((a, b) => a + b.uptime_pct, 0);
  return sum / series.length;
}

export default function ComponentRow({
  component,
}: {
  component: StatusComponent;
}) {
  const avg = averageOf(component.daily_uptime).toFixed(2);

  return (
    <div className="rounded-[24px] border border-subtle bg-surface p-6 md:p-7">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <h3 className="text-[17px] font-semibold text-primary">
              {component.name_ar}
            </h3>
            <span className="text-[11px] text-muted font-mono uppercase tracking-wider">
              {component.name_en}
            </span>
          </div>
          <p className="text-sm text-secondary leading-7">
            {component.description_ar}
          </p>
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-2">
          <StatusPill status={component.current_status} size="sm" />
          <div className="text-xs text-muted">
            <span className="text-primary font-semibold">{avg}%</span>{" "}
            <span>آخر 90 يوم</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <UptimeStrip series={component.daily_uptime} />
      </div>
    </div>
  );
}
