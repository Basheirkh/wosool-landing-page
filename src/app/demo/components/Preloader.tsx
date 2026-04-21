"use client";

import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "rgba(255,255,255,0.55)",
        fontFamily: "var(--font-ibm-arabic)",
        fontSize: 18,
        letterSpacing: "0.02em",
      }}
    >
      <motion.span
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        جاري التجهيز…
      </motion.span>
    </motion.div>
  );
}
