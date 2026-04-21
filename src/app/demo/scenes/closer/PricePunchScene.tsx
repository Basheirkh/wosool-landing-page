import type { SceneContext } from "../../engine/types";
import CompareColumns from "../../primitives/closer/CompareColumns";

interface Props {
  ctx: SceneContext;
}

export default function PricePunchScene({ ctx }: Props) {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <CompareColumns progress={ctx.progress} />
    </div>
  );
}
