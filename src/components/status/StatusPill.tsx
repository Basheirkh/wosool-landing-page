import type { ComponentStatus } from "@/lib/status-data";
import { STATUS_COLORS, STATUS_LABELS_AR } from "@/lib/status-data";

export default function StatusPill({
  status,
  size = "md",
}: {
  status: ComponentStatus;
  size?: "sm" | "md" | "lg";
}) {
  const color = STATUS_COLORS[status];
  const label = STATUS_LABELS_AR[status];

  const sizes = {
    sm: "px-3 py-1 text-[11px] gap-1.5",
    md: "px-4 py-1.5 text-xs gap-2",
    lg: "px-5 py-2 text-sm gap-2.5",
  };

  const dotSize = {
    sm: "h-1.5 w-1.5",
    md: "h-2 w-2",
    lg: "h-2.5 w-2.5",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${sizes[size]}`}
      style={{
        background: `${color}14`,
        borderColor: `${color}40`,
        color: color,
      }}
    >
      <span
        className={`rounded-full ${dotSize[size]}`}
        style={{
          background: color,
          boxShadow: `0 0 0 3px ${color}25`,
        }}
      />
      {label}
    </span>
  );
}
