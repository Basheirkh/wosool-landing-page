"use client";

import MarqueeScroll from "@/components/ui/MarqueeScroll";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SocialProofBar() {
  const t = useTranslations("SocialProofBar");
  const proofItems = t("items")
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <section className="relative px-6 py-8 border-y border-subtle bg-surface-inset overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <MarqueeScroll speed={28} className="opacity-90">
          {proofItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 whitespace-nowrap text-faint"
            >
              <Sparkles size={12} className="text-brand-primary flex-shrink-0" strokeWidth={2} />
              <span className="text-lg md:text-xl font-medium">{item}</span>
            </div>
          ))}
        </MarqueeScroll>
      </div>
    </section>
  );
}
