"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import {
  Headphones, Store, Globe, LineChart, CheckCircle2, MessageSquare, ArrowDown,
} from "lucide-react";

type BiStr = { ar: string; en: string };
type Example = { user: BiStr; agent: BiStr };

type Agent = {
  id: string;
  icon: typeof Headphones;
  emoji: string;
  name: BiStr;
  tagline: BiStr;
  desc: BiStr;
  duties: BiStr[];
  scenarios: Example[];
  availability: BiStr;
  color: string; // tailwind tone like "emerald-500"
};

const T = (en: string, ar: string): BiStr => ({ ar, en });

const AGENTS: Agent[] = [
  {
    id: "customer",
    icon: Headphones,
    emoji: "🟢",
    name: T("Customer agent", "وكيل خدمة العملاء"),
    tagline: T("Always on, on WhatsApp", "متاح دائماً على واتساب"),
    desc: T(
      "Answers customer questions about products, orders, shipping, payments, and reviews — in real time, in your store's tone.",
      "يرد على أسئلة العملاء حول المنتجات، الطلبات، الشحن، الدفع، والتقييمات — لحظياً وبنفس لهجة متجرك.",
    ),
    duties: [
      T("Product enquiries — specs, price, availability", "استفسارات عن المنتجات (المواصفات والسعر والتوفّر)"),
      T("Order tracking — \"where's my order?\"", "متابعة الطلبات — «وين طلبي؟»"),
      T("Shipping & delivery questions", "أسئلة الشحن والتوصيل"),
      T("Returns and refunds guidance", "إرشاد المرتجعات واسترداد المبالغ"),
      T("Post-purchase review prompts", "متابعة تقييم بعد الشراء"),
      T("Escalation to humans when needed", "تحويل المحادثات للموظف عند الحاجة"),
    ],
    scenarios: [
      {
        user: T("Is the Samsung S25 still available in midnight black?", "هل سامسونغ S25 لا تزال متوفرة بالأسود الميدنايت؟"),
        agent: T(
          "Yes — 14 units left in stock. Price: 4,299 SAR with free shipping. Want me to reserve one for you?",
          "نعم — متبقّي ١٤ قطعة. السعر ٤٬٢٩٩ ريال مع شحن مجاني. تبي أحجز لك واحدة؟",
        ),
      },
      {
        user: T("My order #4821 didn't arrive yet", "طلبي رقم #4821 ما وصل لين الحين"),
        agent: T(
          "Your order shipped on 12 May with SMSA. Tracking: SMS820… Expected delivery today before 6 PM.",
          "طلبك شُحن في ١٢ مايو عبر SMSA. الرقم: SMS820… متوقّع وصوله اليوم قبل ٦ مساءً.",
        ),
      },
    ],
    availability: T("24/7 · multilingual · brand tone", "٢٤/٧ · بأكثر من لغة · بنبرة المتجر"),
    color: "emerald-500",
  },
  {
    id: "owner",
    icon: Store,
    emoji: "🟣",
    name: T("Store-owner agent", "وكيل المالك"),
    tagline: T("Your store on WhatsApp", "متجرك في واتساب"),
    desc: T(
      "Executes store-owner commands from WhatsApp: create a product, update a price, follow an order, ship in bulk, generate a coupon.",
      "ينفّذ أوامرك من واتساب: أنشئ منتج، عدّل سعر، تابع طلب، شحن جماعي، أو أنشئ كوبون.",
    ),
    duties: [
      T("Create / edit / delete products", "إنشاء وتعديل وحذف المنتجات"),
      T("Update prices and stock — in bulk", "تحديث الأسعار والمخزون (مجمّع)"),
      T("Process and ship orders", "معالجة الطلبات والشحن"),
      T("Generate coupons and offers", "إنشاء الكوبونات والعروض"),
      T("Approve returns and refunds", "اعتماد المرتجعات والاستردادات"),
      T("Voice commands (STT + TTS)", "أوامر صوتية (نص ↔ صوت)"),
    ],
    scenarios: [
      {
        user: T("Wosool — update price of \"Cartier watch\" to 12,500 SAR and quantity to 5", "وصول — عدّل سعر «ساعة كارتييه» إلى ١٢٬٥٠٠ ريال والكمية لـ ٥"),
        agent: T(
          "Done. \"Cartier watch\" → 12,500 SAR · qty 5. Want me to notify wishlist subscribers?",
          "تمّ. «ساعة كارتييه» → ١٢٬٥٠٠ ريال · الكمية ٥. تبي أنبّه عملاء قائمة الأمنيات؟",
        ),
      },
      {
        user: T("Create a 20% Eid coupon valid for 3 days, for VIPs only", "أنشئ كوبون عيد ٢٠٪ ساري ٣ أيام للـ VIP فقط"),
        agent: T(
          "Coupon EID20 created. Targeting: 142 VIP customers. Estimated reach: ~89% open rate.",
          "أُنشئ الكوبون EID20. الاستهداف: ١٤٢ عميل VIP. التوقّع: ~٨٩٪ معدّل قراءة.",
        ),
      },
    ],
    availability: T("Instant · voice + text", "فوري · صوت ونص"),
    color: "indigo-500",
  },
  {
    id: "widget",
    icon: Globe,
    emoji: "🔵",
    name: T("Widget agent", "وكيل الودجت"),
    tagline: T("On your storefront", "على واجهة متجرك"),
    desc: T(
      "Helps visitors browsing your store from the website itself — answers questions, recommends products, and converts more shoppers to checkout.",
      "يساعد زوار متجرك من داخل الموقع نفسه — يجاوب على أسئلتهم، يرشّح منتجات، ويزيد من تحويل الزوار إلى مشترين.",
    ),
    duties: [
      T("Live chat on the storefront", "شات مباشر على واجهة المتجر"),
      T("Smart product recommendations", "ترشيحات منتجات ذكية"),
      T("Help with size, fit, compatibility", "مساعدة في المقاسات والتوافق"),
      T("Cross-sell and upsell suggestions", "اقتراحات بيع متقاطع وأعلى"),
      T("Capture leads and emails", "التقاط العملاء المحتملين والبريد"),
      T("Smooth handoff to WhatsApp", "تحويل سلس للواتساب"),
    ],
    scenarios: [
      {
        user: T("Looking for a gift under 500 SAR for a tech-loving friend", "أبي هدية تحت ٥٠٠ ريال لصديق يحب التقنية"),
        agent: T(
          "Great — these 3 fit: AirPods 4, Anker MagGo charger, Sony WH-CH520. Want a quick comparison?",
          "تمام — ثلاث خيارات تناسبك: AirPods 4، شاحن Anker MagGo، Sony WH-CH520. تبي مقارنة سريعة؟",
        ),
      },
    ],
    availability: T("Always on the storefront", "دائمًا على واجهة المتجر"),
    color: "brand-primary",
  },
  {
    id: "analytics",
    icon: LineChart,
    emoji: "📊",
    name: T("Analytics & intelligence agent", "وكيل الذكاء والتحليلات"),
    tagline: T("Answers \"why\" — not just \"what\"", "يجاوب على «لماذا» — مش بس «ماذا»"),
    desc: T(
      "Helps you understand performance, sales, products, customers, and opportunities — in plain language, through WhatsApp.",
      "يساعدك تفهم الأداء والمبيعات والمنتجات والعملاء والفرص — بلغة بسيطة، عبر واتساب.",
    ),
    duties: [
      T("Sales analysis — by day, week, channel", "تحليل المبيعات يوميًا وأسبوعيًا وبالقناة"),
      T("Top-product and lost-product insights", "تحليل المنتجات الرابحة والخاسرة"),
      T("Customer behaviour and cohorts", "سلوك العملاء وتقسيمهم"),
      T("Predictive revenue forecasting", "توقّع الإيرادات"),
      T("Smart actionable recommendations", "توصيات قابلة للتنفيذ"),
      T("Daily morning report + weekly growth report", "تقرير صباحي + تقرير نمو أسبوعي"),
    ],
    scenarios: [
      {
        user: T("Why did sales drop this week?", "ليش المبيعات نزلت الأسبوع؟"),
        agent: T(
          "Revenue −18% WoW. Main reasons: 1) shipping issue lost 14 carts on Tue, 2) Eid promo for VIPs hasn't sent yet, 3) Product 'Bag X' OOS for 3 days.",
          "الإيراد −١٨٪ مقارنة بالأسبوع السابق. الأسباب: ١) عطل شحن خسّرنا ١٤ سلة الثلاثاء، ٢) عرض VIP للعيد لم يُرسل بعد، ٣) منتج «حقيبة X» نفد ٣ أيام.",
        ),
      },
    ],
    availability: T("On-demand · scheduled reports", "عند الطلب · تقارير مجدولة"),
    color: "amber-500",
  },
];

export default function AgentsDeepDive() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset">
      <div className="max-w-[1300px] mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-bold mb-3 leading-tight">
            {t("Meet the 4 agents — in depth", "تعرّف على الـ٤ موظفين بعمق")}
          </h2>
          <p className="text-secondary text-[14px] md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            {t(
              "Each agent has its own job, scenarios, and conversation style — here's exactly how each one helps your store.",
              "كل موظّف له دوره ومواقفه وأسلوبه — هذه طريقة عمله الفعلية في متجرك.",
            )}
          </p>
        </motion.div>

        {/* Agent cards */}
        <div className="grid gap-8">
          {AGENTS.map((a, idx) => {
            const Icon = a.icon;
            const isRight = idx % 2 === 0;
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-subtle bg-surface-elevated overflow-hidden"
              >
                <div className="grid lg:grid-cols-[1fr_1.05fr]">
                  {/* Left: identity + duties */}
                  <div className={`p-6 md:p-8 ${isRight ? "lg:order-1" : "lg:order-2"} border-b lg:border-b-0 ${isRight ? "lg:border-e" : "lg:border-s"} border-subtle`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-${a.color}/12 text-${a.color}`}>
                        <Icon size={22} strokeWidth={2.2} />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl leading-none">{a.emoji}</span>
                          <h3 className={`text-[22px] md:text-[26px] font-bold text-primary`}>
                            {a.name[isAr ? "ar" : "en"]}
                          </h3>
                        </div>
                        <span className={`text-[12px] font-semibold text-${a.color}`}>
                          {a.tagline[isAr ? "ar" : "en"]}
                        </span>
                      </div>
                    </div>
                    <p className="text-[14px] md:text-[15px] text-secondary leading-relaxed mb-5">
                      {a.desc[isAr ? "ar" : "en"]}
                    </p>

                    <div className="text-[10px] uppercase tracking-[0.16em] text-muted font-bold mb-2.5">
                      {t("Day-to-day duties", "المهام اليومية")}
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {a.duties.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-secondary">
                          <CheckCircle2 size={14} className={`text-${a.color} mt-0.5 flex-shrink-0`} strokeWidth={2.4} />
                          <span>{d[isAr ? "ar" : "en"]}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`inline-flex items-center gap-1.5 rounded-full bg-${a.color}/10 text-${a.color} px-3 py-1 text-[11px] font-bold uppercase tracking-wider`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-${a.color}`} />
                      {a.availability[isAr ? "ar" : "en"]}
                    </div>
                  </div>

                  {/* Right: scenarios (WhatsApp-like) */}
                  <div className={`p-6 md:p-8 bg-ghost/30 ${isRight ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare size={16} className="text-brand-primary" strokeWidth={2.4} />
                      <span className="text-[12px] uppercase tracking-[0.14em] text-muted font-bold">
                        {t("Real scenarios", "مواقف حقيقية")}
                      </span>
                    </div>
                    <div className="space-y-4">
                      {a.scenarios.map((s, i) => (
                        <div key={i} className="space-y-2">
                          {/* user message — left bubble */}
                          <div className="flex">
                            <div className="rounded-2xl rounded-bl-md bg-white border border-subtle px-3.5 py-2.5 max-w-[88%] text-[13px] text-primary shadow-sm">
                              {s.user[isAr ? "ar" : "en"]}
                            </div>
                          </div>
                          {/* agent reply — right bubble (WhatsApp green) */}
                          <div className="flex justify-end">
                            <div className="rounded-2xl rounded-br-md bg-[#D9FDD3] px-3.5 py-2.5 max-w-[88%] text-[13px] text-[#0B1A1F] shadow-sm">
                              {s.agent[isAr ? "ar" : "en"]}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tips strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-12 rounded-2xl border border-brand-primary/25 bg-brand-primary/8 p-5 md:p-6 flex items-start gap-3"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-brand-primary/15 text-brand-primary flex-shrink-0">
            <ArrowDown size={18} strokeWidth={2.2} />
          </span>
          <div>
            <h4 className="text-[15px] font-bold text-primary mb-1">
              {t("How they work together", "كيف يعملون معاً")}
            </h4>
            <p className="text-[13.5px] text-secondary leading-relaxed">
              {t(
                "The Customer agent answers shoppers; the Owner agent runs your store from WhatsApp; the Widget agent converts visitors on your website; the Analytics agent tells you what to do next. They share one memory of your store — so context is always preserved.",
                "وكيل خدمة العملاء يرد على المتسوّقين، وكيل المالك ينفّذ أوامرك من واتساب، وكيل الودجت يحوّل زوار الموقع، ووكيل التحليلات يخبرك بالخطوة التالية. كلهم يتشاركون نفس ذاكرة متجرك — السياق محفوظ دائماً.",
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
