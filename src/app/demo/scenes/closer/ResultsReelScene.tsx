import type { SceneContext } from "../../engine/types";
import MetricCard from "../../primitives/closer/MetricCard";
import { easeOutCubic, segment } from "../../primitives/easing";

interface Props {
  ctx: SceneContext;
}

export default function ResultsReelScene({ ctx }: Props) {
  const eyebrowIn = easeOutCubic(segment(ctx.progress, 0, 0.15));
  const entries = [0, 1, 2, 3].map((i) => easeOutCubic(segment(ctx.progress, 0.1 + i * 0.06, 0.25 + i * 0.06)));
  const ticks = [0, 1, 2, 3].map((i) => segment(ctx.progress, 0.2 + i * 0.06, 0.65 + i * 0.06));

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div
        style={{
          position: "absolute",
          top: 110,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--w-font-mono)",
          fontSize: 18,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--w-text-soft)",
          opacity: eyebrowIn,
          fontWeight: 600,
        }}
      >
        النتائج الفعلية
      </div>

      <div
        style={{
          position: "absolute",
          top: 200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1680,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 28,
          padding: "0 40px",
        }}
      >
        <MetricCard display="٣" unit="ث" label="متوسط زمن الرد" entry={entries[0]} tickProgress={ticks[0]} />
        <MetricCard display="٩٠٠" unit="×" label="أسرع من الرد اليدوي" entry={entries[1]} tickProgress={ticks[1]} accent="var(--w-success)" />
        <MetricCard display="+٤٠" unit="٪" label="طلبات في الشهر الأول" entry={entries[2]} tickProgress={ticks[2]} accent="var(--w-success)" />
        <MetricCard display="٩٤" unit="٪" label="توفير في التكلفة" entry={entries[3]} tickProgress={ticks[3]} />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--w-font-ar)",
          fontSize: 28,
          color: "var(--w-text-soft)",
          opacity: easeOutCubic(segment(ctx.progress, 0.7, 0.95)),
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        قياسات موثّقة · متوفّر على{" "}
        <span style={{ fontFamily: "var(--w-font-mono)", color: "var(--w-teal-700)", fontWeight: 700 }} dir="ltr">
          wosool.ai
        </span>
      </div>
    </div>
  );
}
