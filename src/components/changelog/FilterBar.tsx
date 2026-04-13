"use client";

import type { ChangelogCategory } from "@/lib/changelog-data";
import { CATEGORY_COLORS, CATEGORY_LABELS_AR } from "@/lib/changelog-data";

type FilterKey = "all" | ChangelogCategory;

export default function FilterBar({
  active,
  onChange,
  counts,
  total,
}: {
  active: FilterKey;
  onChange: (next: FilterKey) => void;
  counts: Record<ChangelogCategory, number>;
  total: number;
}) {
  const items: { key: FilterKey; label: string; count: number; color?: string }[] = [
    { key: "all", label: "الكل", count: total },
    {
      key: "feature",
      label: CATEGORY_LABELS_AR.feature,
      count: counts.feature,
      color: CATEGORY_COLORS.feature,
    },
    {
      key: "improvement",
      label: CATEGORY_LABELS_AR.improvement,
      count: counts.improvement,
      color: CATEGORY_COLORS.improvement,
    },
    {
      key: "fix",
      label: CATEGORY_LABELS_AR.fix,
      count: counts.fix,
      color: CATEGORY_COLORS.fix,
    },
    {
      key: "platform",
      label: CATEGORY_LABELS_AR.platform,
      count: counts.platform,
      color: CATEGORY_COLORS.platform,
    },
  ];

  return (
    <div className="sticky top-[88px] z-20 -mx-6 mb-8 border-b border-subtle bg-[color:var(--background)]/92 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-2">
        {items.map((item) => {
          const isActive = active === item.key;
          const accent = item.color ?? "#00D97E";
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onChange(item.key)}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all"
              style={
                isActive
                  ? {
                      background: `${accent}14`,
                      borderColor: `${accent}55`,
                      color: accent,
                    }
                  : undefined
              }
            >
              {!isActive && (
                <>
                  <span className="text-secondary">{item.label}</span>
                  <span className="text-[10px] text-muted font-mono">
                    {item.count}
                  </span>
                </>
              )}
              {isActive && (
                <>
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: accent }}
                  />
                  <span>{item.label}</span>
                  <span className="text-[10px] font-mono opacity-70">
                    {item.count}
                  </span>
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
