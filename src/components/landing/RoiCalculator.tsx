"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const EMPLOYEE_COST_PER_MONTH = 5000;
const SECONDS_PER_MESSAGE = 90;
const WOSOOL_COST = 299;

export default function RoiCalculator() {
  const t = useTranslations("RoiCalc");
  const locale = useLocale();
  const [messages, setMessages] = useState(150);

  const fmt = useMemo(
    () => new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US", { maximumFractionDigits: 0 }),
    [locale]
  );
  const formatNumber = (n: number) => fmt.format(Math.round(n));

  const result = useMemo(() => {
    const msgMonthly = messages * 30;
    const secondsMonthly = msgMonthly * SECONDS_PER_MESSAGE;
    const hoursMonthly = secondsMonthly / 3600;
    const employeeHourly = EMPLOYEE_COST_PER_MONTH / (8 * 22);
    const costSavedPerMonth = hoursMonthly * employeeHourly;
    const netSavings = costSavedPerMonth - WOSOOL_COST;
    const roi = ((netSavings / WOSOOL_COST) * 100).toFixed(0);

    return {
      msgMonthly,
      hoursMonthly,
      costSavedPerMonth,
      netSavings,
      roi,
    };
  }, [messages]);

  return (
    <section
      id="roi"
      className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-start"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            <span className="text-xs text-brand-primary font-medium tracking-wider uppercase">
              {t("eyebrow")}
            </span>
          </div>
          <h2 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold leading-[1.15]">
            {t("heading")}
          </h2>
          <p className="mt-4 text-[15px] md:text-[17px] text-secondary max-w-2xl">
            {t("sub")}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          {/* Input side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[28px] border border-subtle bg-surface p-8 md:p-10"
          >
            <div className="text-xs text-muted uppercase tracking-[0.24em] mb-3">
              {t("input_label")}
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[52px] md:text-[68px] font-bold leading-none text-primary tracking-tight">
                {formatNumber(messages)}
              </span>
              <span className="text-[14px] md:text-[16px] text-secondary">
                {t("messages_per_day")}
              </span>
            </div>

            <input
              type="range"
              min={20}
              max={1000}
              step={10}
              value={messages}
              onChange={(e) => setMessages(Number(e.target.value))}
              className="roi-slider mt-8 w-full"
              style={{
                background: `linear-gradient(90deg, rgb(var(--brand-primary-rgb)) ${
                  ((messages - 20) / 980) * 100
                }%, var(--border-subtle) ${
                  ((messages - 20) / 980) * 100
                }%)`,
              }}
            />

            <div className="mt-3 flex justify-between text-xs text-muted">
              <span>20</span>
              <span>500</span>
              <span>1000+</span>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-subtle bg-surface-inset p-4">
                <div className="text-xs text-muted">{t("monthly_messages")}</div>
                <div className="text-xl font-semibold text-primary mt-1">
                  {formatNumber(result.msgMonthly)}
                </div>
              </div>
              <div className="rounded-2xl border border-subtle bg-surface-inset p-4">
                <div className="text-xs text-muted">{t("estimated_hours")}</div>
                <div className="text-xl font-semibold text-primary mt-1">
                  {formatNumber(result.hoursMonthly)} {t("hours_unit")}
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-muted leading-6">
              {t("footnote")}
            </div>
          </motion.div>

          {/* Result side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-[28px] p-8 md:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,217,126,0.12), rgba(0,217,126,0.03))",
              border: "1px solid rgba(0,217,126,0.25)",
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-xs text-brand-primary font-medium tracking-wider uppercase">
                  {t("result_eyebrow")}
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-[52px] md:text-[72px] font-bold leading-none text-primary tracking-tight">
                  {formatNumber(result.netSavings)}
                </span>
                <span className="text-[16px] md:text-[18px] text-secondary">
                  {t("currency_per_month_long")}
                </span>
              </div>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs text-brand-primary">
                {t("roi_chip", { roi: result.roi })}
              </div>

              <div className="my-8 h-px bg-gradient-to-l from-transparent via-brand-primary/30 to-transparent" />

              <div className="space-y-4">
                <Row
                  label={t("row_time_value")}
                  value={`${formatNumber(result.costSavedPerMonth)} ${t("currency_short")}`}
                />
                <Row
                  label={t("row_wosool_cost")}
                  value={`${WOSOOL_COST} ${t("currency_short")}`}
                  sub
                />
                <div className="h-px bg-subtle" />
                <Row
                  label={t("row_net_savings")}
                  value={`${formatNumber(result.netSavings)} ${t("currency_short")}`}
                  highlight
                />
              </div>

              <div className="mt-10 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-4">
                <div className="text-xs text-muted mb-2">{t("equivalent_label")}</div>
                <div className="text-sm text-primary font-medium leading-7">
                  {t("equivalent_text")}
                </div>
              </div>

              <a
                href="#pricing"
                className="theme-btn-primary mt-6 inline-flex rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-[1px]"
              >
                {t("cta")}
              </a>
            </div>

            {/* Decorative gradient */}
            <div
              className="absolute -end-20 -top-20 h-64 w-64 rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,217,126,0.25), transparent 60%)",
              }}
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .roi-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: rgb(var(--brand-primary-rgb));
          border: 3px solid var(--bg-surface);
          box-shadow: 0 0 0 1px rgba(0, 217, 126, 0.4),
            0 8px 24px rgba(0, 217, 126, 0.3);
          cursor: pointer;
          transition: transform 0.15s ease;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .roi-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: rgb(var(--brand-primary-rgb));
          border: 3px solid var(--bg-surface);
          box-shadow: 0 0 0 1px rgba(0, 217, 126, 0.4),
            0 8px 24px rgba(0, 217, 126, 0.3);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

function Row({
  label,
  value,
  highlight,
  sub,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  sub?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`text-sm ${sub ? "text-muted" : "text-secondary"} leading-7`}
      >
        {label}
      </span>
      <span
        className={`font-semibold ${
          highlight ? "text-brand-primary text-lg" : "text-primary text-sm"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
