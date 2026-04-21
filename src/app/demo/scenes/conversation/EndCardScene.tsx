import type { SceneContext } from "../../engine/types";
import EndCard from "../../primitives/EndCard";

interface Props {
  ctx: SceneContext;
}

export default function EndCardScene({ ctx }: Props) {
  return <EndCard ctx={ctx} />;
}
