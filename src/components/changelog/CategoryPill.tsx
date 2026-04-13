import type { ChangelogCategory } from "@/lib/changelog-data";
import { CATEGORY_COLORS, CATEGORY_LABELS_AR } from "@/lib/changelog-data";

export default function CategoryPill({
  category,
  size = "md",
}: {
  category: ChangelogCategory;
  size?: "sm" | "md";
}) {
  const color = CATEGORY_COLORS[category];
  const label = CATEGORY_LABELS_AR[category];

  const padding =
    size === "sm" ? "px-2.5 py-0.5 text-[10px]" : "px-3 py-1 text-[11px]";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${padding}`}
      style={{
        background: `${color}12`,
        borderColor: `${color}40`,
        color,
      }}
    >
      <span
        className="h-1 w-1 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}
