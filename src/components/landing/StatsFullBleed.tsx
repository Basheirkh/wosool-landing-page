"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CounterNumber from "@/components/ui/CounterNumber";
import LandingArtFrame from "@/components/landing/LandingArtFrame";

export default function StatsFullBleed() {
  const t = useTranslations("Stats");
  const stats = [
    { end: 4, suffix: "", label: t("stat1_label"), sublabel: t("stat1_sub") },
    { end: 24, suffix: "/7", label: t("stat2_label"), sublabel: t("stat2_sub") },
    { end: 2, suffix: "", label: t("stat3_label"), sublabel: t("stat3_sub") },
    { end: 1, suffix: "", label: t("stat4_label"), sublabel: t("stat4_sub") },
  ];

  return (
    <section className="relative py-0">
      <div className="relative px-5 py-16 md:px-6 md:py-24 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <LandingArtFrame
            theme="future"
            word="24/7"
            eyebrow="By The Numbers"
            accent="#00D97E"
            secondaryAccent="#38BDF8"
            className="min-h-[400px] md:min-h-[500px] flex items-center"
            muted
          >
            <div className="relative z-20 w-full px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="text-start py-16 md:py-24 md:pe-8 last:border-e-0"
              style={{ borderInlineEnd: index === stats.length - 1 ? "0" : "1px solid var(--art-border)" }}
            >
              <div className="font-mono text-[56px] md:text-[88px] lg:text-[110px] font-medium leading-none tracking-tight" style={{ color: "var(--art-text-primary)" }}>
                <CounterNumber end={stat.end} suffix={stat.suffix} className="font-mono" />
              </div>
              <span className="mt-4 block text-base" style={{ color: "var(--art-text-primary)" }}>{stat.label}</span>
              <span className="mt-2 block text-sm" style={{ color: "var(--art-text-muted)" }}>{stat.sublabel}</span>
            </motion.div>
          ))}
            </div>
          </LandingArtFrame>
        </div>
      </div>
    </section>
  );
}
