"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: "ar" | "en") => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border border-medium bg-ghost p-0.5 ${
        isPending ? "opacity-60" : ""
      }`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-colors ${
          locale === "en"
            ? "theme-btn-primary"
            : "text-secondary hover:text-primary"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchTo("ar")}
        className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-colors ${
          locale === "ar"
            ? "theme-btn-primary"
            : "text-secondary hover:text-primary"
        }`}
        aria-label="تبديل إلى العربية"
      >
        ع
      </button>
    </div>
  );
}
