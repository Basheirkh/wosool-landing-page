"use client";

import { useEffect, useState } from "react";

type ThemeMode = "dark" | "light";

function applyTheme(mode: ThemeMode) {
  document.documentElement.dataset.theme = mode;
  localStorage.setItem("theme", mode);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.dataset.theme as ThemeMode) || "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="theme-chip inline-flex h-10 w-10 items-center justify-center rounded-full" />
    );
  }

  const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(nextTheme);
        setTheme(nextTheme);
      }}
      className="theme-chip inline-flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-[1.04]"
      aria-label={theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      title={theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--background)] shadow-[0_6px_18px_rgba(0,0,0,0.16)]">
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.8A8.8 8.8 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.6v2.2M12 19.2v2.2M4.8 4.8l1.5 1.5M17.7 17.7l1.5 1.5M2.6 12h2.2M19.2 12h2.2M4.8 19.2l1.5-1.5M17.7 6.3l1.5-1.5" />
          </svg>
        )}
      </span>
    </button>
  );
}
