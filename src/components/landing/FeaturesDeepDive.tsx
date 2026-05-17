"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import {
  Package, ShoppingCart, Users, Megaphone, BarChart3,
  Mic, Globe, Workflow, ShieldCheck, MessageSquare, CheckCircle2,
} from "lucide-react";

type BiStr = { ar: string; en: string };
type Feature = { name: BiStr; desc: BiStr };

type Category = {
  id: string;
  icon: typeof Package;
  title: BiStr;
  intro: BiStr;
  color: string; // tailwind tone
  features: Feature[];
};

const T = (en: string, ar: string): BiStr => ({ ar, en });

const CATEGORIES: Category[] = [
  {
    id: "products",
    icon: Package,
    color: "emerald-500",
    title: T("Products", "المنتجات"),
    intro: T(
      "Create, edit, and manage your entire catalog from a WhatsApp message — even by voice.",
      "أنشئ وعدّل وأدر كل كتالوجك من رسالة واتساب — حتى بالصوت.",
    ),
    features: [
      { name: T("Create products", "إنشاء المنتجات"), desc: T("Add new products with title, price, description, image, options, and stock — all from one message.", "أضف منتجات جديدة بالعنوان والسعر والوصف والصورة والخيارات والمخزون — برسالة واحدة.") },
      { name: T("Bulk price & stock updates", "تحديث الأسعار والمخزون بالجملة"), desc: T("Update prices, stock, and variants for many products at once.", "حدّث الأسعار والمخزون والخيارات لعدّة منتجات دفعة واحدة.") },
      { name: T("Smart description writing", "كتابة الأوصاف الذكية"), desc: T("Generate professional product descriptions tailored to your brand tone.", "ولّد أوصافاً احترافية بنبرة علامتك التجارية.") },
      { name: T("Auto-SEO optimization", "تحسين SEO تلقائي"), desc: T("Automatically improve titles, meta, and keywords for better visibility.", "حسّن العناوين والوصف الميتا والكلمات المفتاحية تلقائياً.") },
      { name: T("Categories & collections", "التصنيفات والمجموعات"), desc: T("Create and organize categories, link products in bulk.", "أنشئ التصنيفات ورتّب المنتجات بالجملة.") },
      { name: T("Low-stock & restock alerts", "تنبيهات نفاد وعودة المخزون"), desc: T("Get notified before products run out, and let customers know when they're back.", "احصل على تنبيه قبل نفاد المنتج، وأخبر العملاء عند توفره.") },
    ],
  },
  {
    id: "orders",
    icon: ShoppingCart,
    color: "indigo-500",
    title: T("Orders & shipping", "الطلبات والشحن"),
    intro: T(
      "Track orders, confirm shipments, and handle returns — without ever opening the dashboard.",
      "تابع الطلبات، أكّد الشحنات، وعالج المرتجعات — بدون فتح لوحة التحكم.",
    ),
    features: [
      { name: T("Order confirmation", "تأكيد الطلبات"), desc: T("Automatic confirmation message to customers and instant notice to you.", "رسالة تأكيد تلقائية للعميل وإشعار فوري للمالك.") },
      { name: T("Shipping notifications", "إشعارات الشحن"), desc: T("Real-time shipping status with tracking link inside WhatsApp.", "حالة الشحن لحظياً مع رابط التتبّع داخل واتساب.") },
      { name: T("Returns & refunds", "المرتجعات والاستردادات"), desc: T("Handle return requests, refunds, and exchanges through chat.", "عالج طلبات الإرجاع والاستردادات والاستبدالات عبر المحادثة.") },
      { name: T("Failed-payment recovery", "استرداد الدفع الفاشل"), desc: T("Re-engage customers whose payment failed and help them complete the order.", "أعد التفاعل مع العملاء اللي فشل دفعهم وساعدهم على إتمام الطلب.") },
      { name: T("Cancellation recovery", "استرداد الإلغاءات"), desc: T("Try to understand the cancellation reason and recover the sale.", "افهم سبب الإلغاء واستعد فرصة البيع.") },
      { name: T("Bulk order actions", "إجراءات جماعية للطلبات"), desc: T("Mark shipped, archive, or refund several orders at once.", "حدّد الشحن، أرشف، أو استرد عدة طلبات دفعة واحدة.") },
    ],
  },
  {
    id: "customers",
    icon: Users,
    color: "brand-primary",
    title: T("Customers", "العملاء"),
    intro: T(
      "Know every customer by name, history, and value — and act on it instantly.",
      "اعرف كل عميل باسمه وتاريخه وقيمته — وتصرّف بناءً عليه فوراً.",
    ),
    features: [
      { name: T("Customer profile per chat", "ملف عميل في كل محادثة"), desc: T("Name, phone, total spent, last order, lifetime value — all in one view.", "الاسم والجوال وإجمالي الإنفاق وآخر طلب وقيمة العميل في عرض واحد.") },
      { name: T("Order history at a glance", "تاريخ الطلبات بنظرة واحدة"), desc: T("Every past order with status and details, ready to reference.", "كل الطلبات السابقة مع الحالة والتفاصيل، جاهزة للمراجعة.") },
      { name: T("VIP segmentation", "تمييز عملاء VIP"), desc: T("Auto-tag high-value customers and target them with offers.", "وسم آلي للعملاء عاليي القيمة واستهدافهم بالعروض.") },
      { name: T("Dormant-customer winback", "استعادة العملاء الخاملين"), desc: T("Reach out to customers who stopped buying — with the right offer.", "تواصل مع العملاء اللي توقفوا عن الشراء — بالعرض المناسب.") },
      { name: T("Conversation memory", "ذاكرة المحادثات"), desc: T("Context is preserved across sessions — the agent remembers the customer.", "السياق محفوظ بين الجلسات — الوكيل يتذكّر العميل.") },
      { name: T("New-customer welcome", "ترحيب العملاء الجدد"), desc: T("Automatic welcome message and onboarding flow for first-time buyers.", "رسالة ترحيب تلقائية وتدفّق تعارف للمشتري الجديد.") },
    ],
  },
  {
    id: "carts",
    icon: ShieldCheck,
    color: "amber-500",
    title: T("Cart recovery", "السلات المتروكة"),
    intro: T(
      "Recover abandoned carts on autopilot — with smart timing, personalized messages, and clear ROI.",
      "استرد السلات المتروكة تلقائياً — بتوقيت ذكي ورسائل مخصّصة وعائد واضح.",
    ),
    features: [
      { name: T("Smart timing", "توقيت ذكي"), desc: T("Multiple recovery attempts at the right moments — not just one reminder.", "محاولات استرداد متعددة في اللحظات المناسبة — مش تذكير واحد فقط.") },
      { name: T("Personalized messages", "رسائل مخصّصة"), desc: T("Each message adapts to the cart contents and customer profile.", "كل رسالة تتكيّف مع محتوى السلة وملف العميل.") },
      { name: T("Offer attached", "ربط بعرض"), desc: T("Add a coupon or limited offer to nudge the close.", "أضف كوبون أو عرض محدود لتسريع الإغلاق.") },
      { name: T("Revenue attribution", "إسناد الإيرادات"), desc: T("See exactly how many carts and how much revenue you recovered.", "شف كم سلة وكم إيراد استرديت بالفعل.") },
      { name: T("Up to 8 attempts per cart", "حتى ٨ محاولات لكل سلة"), desc: T("Per-plan limits — Starter 2, Pro 4, Advanced 8.", "حدود الباقات — الانطلاق ٢، احترافي ٤، متقدم ٨.") },
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    color: "rose-500",
    title: T("Marketing & campaigns", "التسويق والحملات"),
    intro: T(
      "Run offers, campaigns, and coupons — inside WhatsApp, where your customers actually answer.",
      "أطلق العروض والحملات والكوبونات — داخل واتساب، حيث يردّ عملاؤك فعلاً.",
    ),
    features: [
      { name: T("Coupons & promo codes", "كوبونات وعروض"), desc: T("Create, schedule, and track coupons with usage limits and conditions.", "أنشئ وجدول وتتبّع الكوبونات بحدود استخدام وشروط.") },
      { name: T("Bulk WhatsApp campaigns", "حملات واتساب جماعية"), desc: T("Send targeted broadcasts to customer segments with deliverability tracking.", "أرسل بثاً موجّهاً لشرائح العملاء مع متابعة الوصول.") },
      { name: T("Targeted offers", "استهداف العروض"), desc: T("Reach the right customer with the right offer at the right time.", "أوصل العرض المناسب للعميل المناسب في الوقت المناسب.") },
      { name: T("A/B tests", "اختبارات A/B"), desc: T("Test message variants and pick the winner — automatically.", "اختبر صياغات الرسائل واختر الفائزة آلياً.") },
      { name: T("Price-drop alerts", "تنبيهات انخفاض السعر"), desc: T("Let interested customers know when prices drop.", "أبلغ العملاء المهتمين عند انخفاض السعر.") },
      { name: T("Review follow-ups", "متابعة التقييمات"), desc: T("Auto-prompt for reviews after delivery — improve social proof.", "اطلب تقييماً تلقائياً بعد التوصيل — حسّن سمعتك.") },
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    color: "violet-500",
    title: T("Analytics & intelligence", "التحليلات والذكاء"),
    intro: T(
      "Understand what's working — and what to do next — through clear, conversational answers.",
      "افهم ما الذي ينجح — وما الخطوة التالية — عبر إجابات واضحة وحوارية.",
    ),
    features: [
      { name: T("Daily morning report", "التقرير الصباحي"), desc: T("Yesterday's revenue, top products, key issues — every morning.", "إيراد البارح، أعلى المنتجات، أهم المشاكل — كل صباح.") },
      { name: T("Weekly growth report", "تقرير النمو الأسبوعي"), desc: T("Trends, wins, losses, and recommendations for the coming week.", "الاتجاهات والمكاسب والخسائر وتوصيات الأسبوع القادم.") },
      { name: T("Live sales analysis", "تحليل المبيعات لحظياً"), desc: T("By day, channel, product, customer — ask any question.", "باليوم والقناة والمنتج والعميل — اسأل أي سؤال.") },
      { name: T("Top-product insights", "تحليل المنتجات الرابحة"), desc: T("See which products carry your revenue — and which are dead weight.", "شف أيّ المنتجات تحمل إيرادك — وأيها بدون أثر.") },
      { name: T("Predictive forecasting", "التوقّع التنبؤي"), desc: T("Forecast next month's revenue and identify risk early.", "توقّع إيرادات الشهر القادم وحدد المخاطر مبكراً.") },
      { name: T("Revenue attribution", "إسناد الإيرادات"), desc: T("Know exactly which message, coupon, or campaign drove the sale.", "اعرف بدقّة أي رسالة أو كوبون أو حملة جلبت البيع.") },
    ],
  },
  {
    id: "voice",
    icon: Mic,
    color: "sky-500",
    title: T("Voice & multimodal", "الصوت ومتعدد الوسائط"),
    intro: T(
      "Talk to your store like a person — and let your customers too.",
      "تكلّم مع متجرك كأنه شخص — واسمح لعملائك بذلك أيضاً.",
    ),
    features: [
      { name: T("Voice commands (STT)", "أوامر صوتية (صوت ↔ نص)"), desc: T("Send a voice note: \"update price of X to 99 SAR\" — it just works.", "أرسل ملاحظة صوتية: «عدّل سعر X إلى ٩٩ ريال» — يشتغل مباشرة.") },
      { name: T("Voice replies (TTS)", "ردود صوتية"), desc: T("Reply to customers in voice when text doesn't fit.", "ردّ على العملاء صوتياً لما النص ما يكفي.") },
      { name: T("Storefront voice widget", "ودجت صوتي على المتجر"), desc: T("Visitors can speak to the agent on your storefront.", "زوار الموقع يقدرون يتكلمون مع الوكيل على واجهة المتجر.") },
      { name: T("Image understanding", "فهم الصور"), desc: T("Send a screenshot or product photo — it understands.", "أرسل لقطة شاشة أو صورة منتج — يفهم.") },
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    color: "teal-500",
    title: T("Automations", "الأتمتات"),
    intro: T(
      "21 ready automations cover the full customer journey — from welcome to winback.",
      "٢١ أتمتة جاهزة تغطّي رحلة العميل كاملة — من الترحيب إلى الاستعادة.",
    ),
    features: [
      { name: T("Customer-journey coverage", "تغطية رحلة العميل"), desc: T("Welcome → cart recovery → confirmation → shipping → review → winback.", "ترحيب → استرداد سلة → تأكيد → شحن → تقييم → استعادة.") },
      { name: T("Custom automation builder", "منشئ أتمتات مخصص"), desc: T("Design your own triggers, conditions, and actions — visually.", "صمّم محفّزاتك وشروطك وإجراءاتك — بصرياً.") },
      { name: T("Proactive offers engine", "محرّك العروض الاستباقية"), desc: T("Send the right offer to the right customer before they ask.", "أرسل العرض الصحيح للعميل الصحيح قبل ما يطلب.") },
      { name: T("Scheduled actions", "إجراءات مجدولة"), desc: T("Trigger automations at specific times, weekdays, or events.", "شغّل الأتمتات في أوقات محددة، أيام، أو أحداث.") },
    ],
  },
  {
    id: "storefront",
    icon: Globe,
    color: "fuchsia-500",
    title: T("Storefront & widget", "واجهة المتجر والودجت"),
    intro: T(
      "Convert storefront visitors with a live, smart, and on-brand assistant.",
      "حوّل زوار متجرك بمساعد ذكي ومباشر بنبرة علامتك.",
    ),
    features: [
      { name: T("Live storefront chat", "شات مباشر على المتجر"), desc: T("Answer visitors in real time — products, sizes, shipping, anything.", "ردّ على الزوار لحظياً — منتجات، مقاسات، شحن، أي شي.") },
      { name: T("Product recommendations", "ترشيحات منتجات"), desc: T("Personalize suggestions based on the visitor's behavior.", "اقتراحات شخصية بناءً على سلوك الزائر.") },
      { name: T("Smooth WhatsApp handoff", "تحويل سلس للواتساب"), desc: T("Continue the conversation on WhatsApp without losing context.", "أكمل المحادثة على واتساب بدون فقدان السياق.") },
      { name: T("Custom branding & tone", "علامة ونبرة مخصصة"), desc: T("Configure the widget's look, language, and personality.", "خصّص شكل الودجت ولغته وشخصيته.") },
    ],
  },
];

export default function FeaturesDeepDive() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  return (
    <section className="relative px-5 py-16 md:px-6 md:py-24 bg-surface-inset">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-bold mb-3 leading-tight">
            {t("Every feature, in plain detail", "كل ميزة بتفاصيلها")}
          </h2>
          <p className="text-secondary text-[14px] md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            {t(
              "Organized by what you actually want to do — manage products, ship orders, recover carts, run campaigns, understand performance.",
              "مرتّبة حسب ما تريد فعله فعلاً — إدارة المنتجات، الشحن، استرداد السلات، الحملات، فهم الأداء.",
            )}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                className="rounded-2xl border border-subtle bg-surface-elevated p-5 md:p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-${cat.color}/12 text-${cat.color}`}>
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-primary">
                    {cat.title[isAr ? "ar" : "en"]}
                  </h3>
                </div>
                <p className="text-[13px] md:text-[14px] text-secondary leading-relaxed mb-5">
                  {cat.intro[isAr ? "ar" : "en"]}
                </p>
                <ul className="space-y-3">
                  {cat.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className={`text-${cat.color} mt-0.5 flex-shrink-0`} strokeWidth={2.4} />
                      <div>
                        <div className="text-[13.5px] font-bold text-primary mb-0.5">
                          {f.name[isAr ? "ar" : "en"]}
                        </div>
                        <div className="text-[12.5px] text-secondary leading-relaxed">
                          {f.desc[isAr ? "ar" : "en"]}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-12 rounded-2xl border border-brand-primary/25 bg-brand-primary/8 p-5 md:p-6"
        >
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { value: "17", label: T("Ready automations", "أتمتة جاهزة") },
              { value: "4", label: T("AI agents", "وكلاء ذكاء") },
              { value: "24/7", label: T("Always on WhatsApp", "دائمًا على واتساب") },
              { value: "60s", label: T("Setup time", "زمن التركيب") },
            ].map((s, i) => (
              <div key={i} className="text-center flex items-center justify-center gap-3 md:flex-col md:gap-1">
                <div className="text-[28px] md:text-[32px] font-bold font-mono text-brand-primary leading-none">
                  {s.value}
                </div>
                <div className="text-[12px] text-secondary font-semibold">
                  {s.label[isAr ? "ar" : "en"]}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* hint */}
        <div className="mt-8 flex items-start gap-2.5 text-[12.5px] text-faint">
          <MessageSquare size={14} className="text-brand-primary mt-0.5 flex-shrink-0" strokeWidth={2.4} />
          <span>
            {t(
              "Every feature works through WhatsApp — by text or voice — without ever leaving the chat.",
              "كل ميزة تشتغل من خلال واتساب — بالنص أو الصوت — بدون مغادرة المحادثة.",
            )}
          </span>
        </div>
      </div>
    </section>
  );
}
