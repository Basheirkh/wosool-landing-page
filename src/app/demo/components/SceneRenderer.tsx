"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Scene, SceneContext } from "../engine/types";

interface Props {
  scene: Scene;
  ctx: SceneContext;
}

export default function SceneRenderer({ scene, ctx }: Props) {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={scene.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{ position: "absolute", inset: 0 }}
      >
        {scene.render(ctx)}
      </motion.div>
    </AnimatePresence>
  );
}
