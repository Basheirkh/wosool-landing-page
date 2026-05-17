"use client";

import { motion } from "framer-motion";
import { Check, Minus, Compass, Zap, Shield } from "lucide-react";
import { useLocale } from "next-intl";

const SHOW_ENTERPRISE = false;
const GRID_COLS = SHOW_ENTERPRISE
  ? "grid-cols-[1.5fr_repeat(4,1fr)]"
  : "grid-cols-[1.5fr_repeat(3,1fr)]";

type BiStr = { ar: string; en: string };
type Cell = true | false | BiStr;
type Row = { label: BiStr; cells: [Cell, Cell, Cell, Cell] };

const T = (en: string, ar: string): BiStr => ({ ar, en });

const visibleCells = (cells: [Cell, Cell, Cell, Cell]): Cell[] =>
  SHOW_ENTERPRISE ? cells : cells.slice(0, 3);

const SUMMARY: Row[] = [
  { label: T("Monthly price", "السعر الشهري"), cells: [T("499 SAR", "٤٩٩ ريال"), T("1,299 SAR", "١٬٢٩٩ ريال"), T("2,999 SAR", "٢٬٩٩٩ ريال"), T("Custom", "مخصص")] },
  { label: T("Yearly / month", "السنوي/شهر"), cells: [T("399 SAR", "٣٩٩ ريال"), T("1,039 SAR", "١٬٠٣٩ ريال"), T("2,399 SAR", "٢٬٣٩٩ ريال"), T("Custom", "مخصص")] },
  { label: T("AI agents", "عدد الموظفين"), cells: [T("2", "٢"), T("3", "٣"), T("4", "٤"), T("4", "٤")] },
  { label: T("Owner Agent (WhatsApp)", "موظف المالك (واتساب)"), cells: [true, true, true, true] },
  { label: T("Customer Agent (WhatsApp)", "موظف العملاء (واتساب)"), cells: [true, true, true, true] },
  { label: T("Intelligence Agent", "موظف التحليلات"), cells: [false, true, true, true] },
  { label: T("Widget Sales Agent", "موظف المبيعات (الويدجت)"), cells: [false, false, true, true] },
  { label: T("Unique conversations / month", "المحادثات الفريدة شهرياً"), cells: [T("900", "٩٠٠"), T("2,400", "٢٬٤٠٠"), T("5,500", "٥٬٥٠٠"), T("By contract", "حسب العقد")] },
  { label: T("Write actions / month", "أوامر الكتابة شهرياً"), cells: [T("500", "٥٠٠"), T("2,500", "٢٬٥٠٠"), T("10,000", "١٠٬٠٠٠"), T("Unlimited", "بلا حد")] },
  { label: T("Bulk items per call", "عناصر بالأمر الواحد"), cells: [T("8", "٨"), T("8", "٨"), T("8", "٨"), T("8", "٨")] },
  { label: T("Ready automations", "الأتمتات الجاهزة"), cells: [T("8", "٨"), T("21", "٢١"), T("21", "٢١"), T("21", "٢١")] },
  { label: T("Smart reports (Intelligence agent)", "تقارير ذكية (موظف التحليلات)"), cells: [false, true, true, true] },
  { label: T("Storefront sales widget", "ويدجت مبيعات على المتجر"), cells: [false, false, true, true] },
  { label: T("Morning brief + low-stock alerts", "تقرير صباحي + تنبيه نفاذ المخزون"), cells: [true, true, true, true] },
  { label: T("WhatsApp lines", "خطوط واتساب"), cells: [T("1", "١"), T("1", "١"), T("1", "١"), T("Up to 10", "حتى ١٠")] },
  { label: T("Team WhatsApp numbers", "أرقام الفريق على واتساب"), cells: [T("1", "١"), T("2", "٢"), T("3", "٣"), T("By contract", "حسب العقد")] },
  { label: T("Contacts", "جهات الاتصال"), cells: [T("5,000", "٥٬٠٠٠"), T("Unlimited", "غير محدود"), T("Unlimited", "غير محدود"), T("Unlimited", "غير محدود")] },
  { label: T("Owner step-in (human takeover)", "تدخّل المالك يدوياً في المحادثة"), cells: [true, true, true, true] },
  { label: T("PIN protection on writes", "حماية PIN على أوامر الكتابة"), cells: [true, true, true, true] },
  { label: T("Customer support", "الدعم الفني"), cells: [true, true, true, true] },
  { label: T("Priority support", "دعم بأولوية"), cells: [false, true, true, true] },
  { label: T("Dedicated account manager", "مدير حساب مخصّص"), cells: [false, false, true, true] },
];

const FUP_ROWS: Row[] = [
  { label: T("Unique conversations — weekly", "محادثات فريدة — أسبوعي"), cells: [T("225", "٢٢٥"), T("600", "٦٠٠"), T("1,400", "١٬٤٠٠"), T("By contract", "حسب العقد")] },
  { label: T("Unique conversations — monthly", "محادثات فريدة — شهري"), cells: [T("900", "٩٠٠"), T("2,400", "٢٬٤٠٠"), T("5,500", "٥٬٥٠٠"), T("By contract", "حسب العقد")] },
  { label: T("Write actions — weekly", "أوامر كتابة — أسبوعي"), cells: [T("125", "١٢٥"), T("625", "٦٢٥"), T("2,500", "٢٬٥٠٠"), T("By contract", "حسب العقد")] },
  { label: T("Write actions — monthly", "أوامر كتابة — شهري"), cells: [T("500", "٥٠٠"), T("2,500", "٢٬٥٠٠"), T("10,000", "١٠٬٠٠٠"), T("Unlimited", "بلا حد")] },
  { label: T("Bulk items per call", "عناصر بالأمر الواحد"), cells: [T("8", "٨"), T("8", "٨"), T("8", "٨"), T("8", "٨")] },
  { label: T("Product creations — monthly", "إنشاء منتجات — شهري"), cells: [T("20", "٢٠"), T("Unlimited", "غير محدود"), T("Unlimited", "غير محدود"), T("By contract", "حسب العقد")] },
  { label: T("Product edits — monthly", "تعديل منتجات — شهري"), cells: [T("50", "٥٠"), T("Unlimited", "غير محدود"), T("Unlimited", "غير محدود"), T("By contract", "حسب العقد")] },
  { label: T("Coupons — monthly", "كوبونات — شهري"), cells: [T("5", "٥"), T("Unlimited", "غير محدود"), T("Unlimited", "غير محدود"), T("By contract", "حسب العقد")] },
];

function CellMark({ value, isAr }: { value: Cell; isAr: boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-primary/12 text-brand-primary">
        <Check size={16} strokeWidth={2.75} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ghost text-faint">
        <Minus size={14} strokeWidth={2.5} />
      </span>
    );
  }
  return (
    <span className="text-[12px] md:text-[13px] font-semibold text-primary text-center leading-tight">
      {value[isAr ? "ar" : "en"]}
    </span>
  );
}

function CompareTable({ rows, isAr, t }: { rows: Row[]; isAr: boolean; t: (en: string, ar: string) => string }) {
  return (
    <div className="rounded-2xl border border-subtle bg-surface overflow-hidden">
      <div className={`grid ${GRID_COLS} items-center bg-surface-inset border-b border-subtle px-4 md:px-5 py-3.5`}>
        <div className="text-[12px] uppercase tracking-[0.14em] text-muted font-bold">{t("Feature", "الميزة")}</div>
        <div className="text-center text-[12px] font-bold text-secondary">{t("Starter", "الانطلاق")}</div>
        <div className="text-center text-[12px] font-bold text-brand-primary">{t("Professional", "احترافي")}</div>
        <div className="text-center text-[12px] font-bold text-amber-500">{t("Advanced", "متقدم")}</div>
        {SHOW_ENTERPRISE && (
          <div className="text-center text-[12px] font-bold text-slate-500">{t("Enterprise", "مؤسسات")}</div>
        )}
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className={`grid ${GRID_COLS} items-center px-4 md:px-5 py-3 border-t border-subtle/70 hover:bg-ghost/40 transition-colors`}
        >
          <div className="text-[13px] md:text-[14px] text-primary font-medium leading-relaxed pe-3">
            {row.label[isAr ? "ar" : "en"]}
          </div>
          {visibleCells(row.cells).map((cell, ci) => (
            <div key={ci} className="flex items-center justify-center px-1">
              <CellMark value={cell} isAr={isAr} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function PricingDetails() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-surface">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-bold mb-3 leading-tight">
            {t("Compare plans side by side", "قارن الباقات جنباً إلى جنب")}
          </h2>
          <p className="text-secondary text-[14px] md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            {t("All features, limits, and prices — no fluff.", "كل الميزات والحدود والأسعار — بدون حشو.")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-brand-primary/10 text-brand-primary">
              <Compass size={18} strokeWidth={2.2} />
            </span>
            <h3 className="text-[18px] md:text-[22px] font-bold text-primary">
              {t("Full comparison", "المقارنة الكاملة")}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[840px]">
              <CompareTable rows={SUMMARY} isAr={isAr} t={t} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500">
              <Zap size={18} strokeWidth={2.2} />
            </span>
            <h3 className="text-[18px] md:text-[22px] font-bold text-primary">
              {t("Fair Usage Policy (FUP)", "حدود الاستخدام العادل (FUP)")}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[840px]">
              <CompareTable rows={FUP_ROWS} isAr={isAr} t={t} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-brand-primary/25 bg-gradient-to-br from-brand-primary/8 to-brand-primary/3 p-6 md:p-8 text-center max-w-4xl mx-auto"
        >
          <h4 className="text-[18px] md:text-[22px] font-bold text-primary mb-3">
            {t("No surprise charges. No credits. No top-ups. No pay-per-use.", "لا توجد رسوم مفاجئة. لا كريدت. لا شحن رصيد. لا دفع حسب الاستهلاك.")}
          </h4>
          <p className="text-[14px] md:text-[15px] text-secondary leading-relaxed mb-3">
            {t(
              "Just a clear plan with limits you understand. Subscribe today and know exactly what you'll pay at the end of the month.",
              "فقط باقة واضحة وحدود مفهومة. اشترك اليوم وأنت تعرف بالضبط ما ستدفعه آخر الشهر.",
            )}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 text-brand-primary px-4 py-1.5 text-[12px] font-bold">
            <Shield size={14} strokeWidth={2.5} />
            {t("Fair Usage Policy — always transparent", "سياسة الاستخدام العادل — دائماً بشفافية")}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
