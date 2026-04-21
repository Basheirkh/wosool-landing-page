"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  variant: "initial" | "replay";
  onPlay: () => void;
}

export default function PlayOverlay({ variant, onPlay }: Props) {
  const label = variant === "replay" ? "إعادة التشغيل" : "تشغيل العرض";
  const bg = variant === "replay" ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.88)";
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    btnRef.current?.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: bg,
      }}
    >
      <motion.button
        ref={btnRef}
        type="button"
        onClick={onPlay}
        aria-label={label}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        style={{
          width: 124,
          height: 124,
          borderRadius: "50%",
          background: "var(--brand-primary, #00D97E)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 40px rgba(0,217,126,0.35)",
          color: "#080B0F",
        }}
      >
        {variant === "replay" ? (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        ) : (
          <svg width="46" height="46" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <polygon points="6,4 20,12 6,20" />
          </svg>
        )}
      </motion.button>
      <div
        style={{
          marginTop: 22,
          color: "rgba(255,255,255,0.78)",
          fontFamily: "var(--font-ibm-arabic)",
          fontSize: 18,
          letterSpacing: "0.01em",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}
