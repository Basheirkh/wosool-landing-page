"use client";

import MarqueeScroll from "@/components/ui/MarqueeScroll";

const proofItems = [
  "العربية أولاً",
  "واتساب هو المكتب",
  "طبقة تشغيل للأعمال أونلاين",
  "ربط سريع",
  "تقارير صباحية",
  "يبدأ من التجارة الإلكترونية",
];

export default function SocialProofBar() {
  return (
    <section className="relative px-6 py-8 border-y border-subtle bg-surface-inset overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-center text-sm text-secondary mb-6">
          لا ادعاءات. فقط ما نبنيه.
        </p>

        <MarqueeScroll speed={28} className="opacity-90">
          {proofItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 whitespace-nowrap text-faint"
            >
              <span className="text-brand-primary text-xs">✦</span>
              <span className="text-lg md:text-xl font-medium">{item}</span>
            </div>
          ))}
        </MarqueeScroll>
      </div>
    </section>
  );
}
