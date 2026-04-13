import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "عن وصول — نظام تشغيل المتجر الذكي",
  description:
    "وصول هو نظام تشغيل المتجر الذكي المبني خصيصاً للتجارة الإلكترونية السعودية والعربية على منصة سلة.",
};

const values = [
  {
    title: "عربي من الأساس",
    body: "مبني لليهجة السعودية والخليجية — ليس ترجمة حرفية من الإنجليزية. يفهم السياق المحلّي بجودة لا يقدّمها أي منافس عالمي.",
  },
  {
    title: "سلة Native",
    body: "تكامل مباشر مع منصة سلة بدون plugins أو workarounds. نعامل سلة كمواطن أصلي، لا كواجهة ثانوية.",
  },
  {
    title: "واتساب كمنتج",
    body: "واتساب ليس add-on لدينا — هو المنتج نفسه. كل التجربة مبنية حول أن يعمل متجرك من تطبيق المراسلة الذي يستخدمه عملاؤك يومياً.",
  },
  {
    title: "الخصوصية بالتصميم",
    body: "نُزيل المعرّفات الشخصية قبل المعالجة، نعزل بيانات كل متجر، ولا نستخدم محادثاتك لتدريب نماذج مشتركة.",
  },
  {
    title: "الشفافية الكاملة",
    body: "نُفصح بوضوح ما يفعله الوكيل، وأين قد يُخطئ، وما الحدود التي لا يتجاوزها. لا مبالغات تسويقية.",
  },
  {
    title: "ملكيتك لبياناتك",
    body: "بيانات متجرك ومحادثاتك ملكيتك الكاملة. يحقّ لك تصديرها أو حذفها في أي وقت.",
  },
];

const stats = [
  { value: "7", label: "أيام تجربة مجانية" },
  { value: "24/7", label: "وقت تشغيل الوكيل" },
  { value: "100٪", label: "عربي من الأساس" },
  { value: "<3 ث", label: "متوسط وقت الرد" },
];

const timeline = [
  {
    year: "2025",
    title: "البداية في جدة",
    body: "تأسّس وصول بفكرة بسيطة: كل تاجر سعودي يحتاج موظف يردّ على عملائه 24/7، لكن قليلون يقدرون على توظيف فريق كامل.",
  },
  {
    year: "2025",
    title: "أول وكيل ذكي على واتساب",
    body: "أطلقنا أول إصدار يربط متاجر سلة بوكيل يردّ على العملاء باللهجة السعودية — بفهم حقيقي، لا ردود جاهزة.",
  },
  {
    year: "2026",
    title: "أربعة موظفين بدل واحد",
    body: "توسّعنا من مجرد وكيل خدمة عملاء إلى نظام كامل: وكيل للعملاء، وكيل للمالك، وكيل استراتيجي، ووكيل تشغيلي.",
  },
  {
    year: "اليوم",
    title: "نظام تشغيل المتجر",
    body: "وصول اليوم هو ما يُشغّل المتجر كاملاً — من الرد على العملاء إلى إدارة المنتجات والتقارير الصباحية.",
  },
];

const partners = [
  { name: "منصة سلة", note: "تكامل مباشر" },
  { name: "WhatsApp Business API", note: "عبر Meta Partners" },
  { name: "SDAIA AI Ethics", note: "ملتزمون بالمبادئ السعودية" },
  { name: "Hetzner", note: "بنية تحتية آمنة" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px] theme-text-primary">
        {/* Hero */}
        <section className="px-6 pt-12 pb-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="theme-text-secondary mb-6 flex items-center justify-between gap-4 text-sm">
              <Link
                href="/"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                الرئيسية
              </Link>
              <span>عن وصول</span>
            </div>

            <div className="theme-article-surface rounded-[32px] p-8 md:p-16">
              <div className="mb-8 flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
                  عن الشركة
                </span>
                <span className="theme-chip rounded-full px-4 py-2">
                  مبني في جدة
                </span>
                <span className="theme-chip rounded-full px-4 py-2">
                  للسوق السعودي والعربي
                </span>
              </div>

              <h1 className="theme-text-primary mb-6 text-4xl font-bold leading-tight md:text-6xl">
                نظام تشغيل المتجر الذكي
                <br />
                <span className="theme-text-secondary">مبني خصيصاً لسلة.</span>
              </h1>

              <p className="theme-text-secondary max-w-3xl text-[18px] leading-9">
                وصول هو نظام ذكاء اصطناعي يُشغّل متجرك الإلكتروني بالكامل — يردّ
                على عملائك عبر واتساب، ينفّذ أوامرك بالصوت والنص، ويرسل لك
                تقارير ذكية كل صباح. ليس chatbot، بل نظام تشغيل كامل.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="theme-content-card rounded-3xl p-6">
                    <div className="theme-text-primary text-3xl font-bold md:text-4xl">
                      {s.value}
                    </div>
                    <div className="theme-text-secondary mt-2 text-sm leading-6">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                  مهمّتنا
                </div>
                <h2 className="theme-text-primary mb-6 text-3xl font-bold leading-tight md:text-4xl">
                  أن يعمل متجرك — حتى وأنت نايم.
                </h2>
                <p className="theme-text-secondary text-[16px] leading-9">
                  نؤمن أنّ كل تاجر سعودي يستحق موظفاً يردّ على عملائه طوال
                  اليوم، ينفّذ طلباته فوراً، ويُعطيه نظرة واضحة على متجره كل
                  صباح. لكن ليس كل تاجر يقدر على توظيف فريق كامل.
                </p>
                <p className="theme-text-secondary mt-4 text-[16px] leading-9">
                  وصول يحلّ هذه المعادلة — بفريق كامل من وكلاء الذكاء الاصطناعي
                  مقابل جزء بسيط من تكلفة موظف واحد، يعملون بالعربية، ويفهمون
                  سوقك.
                </p>
              </div>

              <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                  ما نبنيه
                </div>
                <h2 className="theme-text-primary mb-6 text-3xl font-bold leading-tight md:text-4xl">
                  ليس chatbot. نظام تشغيل.
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      label: "وكيل خدمة العملاء",
                      body: "يردّ على استفسارات العملاء عبر واتساب بفهم حقيقي للّهجة والسياق.",
                    },
                    {
                      label: "وكيل المالك",
                      body: "يُنفّذ أوامرك بالصوت أو النص — أضف منتج، عدّل سعر، شوف تحليلات.",
                    },
                    {
                      label: "وكيل الاستراتيجية",
                      body: "يُحلّل متجرك يومياً ويُرسل لك تقرير صباحي بأهم الملاحظات والفرص.",
                    },
                    {
                      label: "وكيل التشغيل",
                      body: "يُدير الطلبات، التنبيهات، والإشعارات التلقائية دون تدخّل منك.",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex gap-4 rounded-2xl border theme-border p-4"
                    >
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-primary" />
                      <div>
                        <div className="theme-text-primary text-sm font-semibold">
                          {item.label}
                        </div>
                        <div className="theme-text-secondary mt-1 text-sm leading-7">
                          {item.body}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
              قيمنا
            </div>
            <h2 className="theme-text-primary mb-12 text-3xl font-bold leading-tight md:text-4xl">
              ما يُوجّه كل قرار نأخذه.
            </h2>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="theme-content-card rounded-3xl p-6"
                >
                  <div className="theme-text-secondary mb-3 text-xs font-mono">
                    0{i + 1}
                  </div>
                  <h3 className="theme-text-primary mb-3 text-lg font-semibold">
                    {v.title}
                  </h3>
                  <p className="theme-text-secondary text-sm leading-7">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
              رحلتنا
            </div>
            <h2 className="theme-text-primary mb-12 text-3xl font-bold leading-tight md:text-4xl">
              من فكرة إلى نظام تشغيل كامل.
            </h2>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="theme-article-surface flex flex-col rounded-[28px] p-6"
                >
                  <div className="text-brand-primary mb-4 font-mono text-sm">
                    {item.year}
                  </div>
                  <h3 className="theme-text-primary mb-3 text-lg font-semibold leading-7">
                    {item.title}
                  </h3>
                  <p className="theme-text-secondary text-sm leading-7">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
              <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                شركاء ومعايير
              </div>
              <h2 className="theme-text-primary mb-10 text-3xl font-bold leading-tight md:text-4xl">
                نبني مع من نثق بهم.
              </h2>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className="theme-content-card rounded-3xl p-5"
                  >
                    <div className="theme-text-primary text-base font-semibold">
                      {p.name}
                    </div>
                    <div className="theme-text-secondary mt-2 text-sm">
                      {p.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 pb-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="theme-article-surface rounded-[32px] p-8 md:p-16">
              <div className="max-w-3xl">
                <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                  تواصل معنا
                </div>
                <h2 className="theme-text-primary mb-6 text-3xl font-bold leading-tight md:text-5xl">
                  جاهز تجرّب وصول على متجرك؟
                </h2>
                <p className="theme-text-secondary mb-8 text-[17px] leading-9">
                  ابدأ مجاناً 7 أيام، بدون بطاقة ائتمان. نُركّبه على متجرك في
                  أقل من دقيقتين، وتبدأ التجربة من أول رسالة.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="theme-btn-primary inline-flex rounded-full px-7 py-4 text-sm font-medium transition"
                  >
                    ابدأ التجربة المجانية
                  </Link>
                  <Link
                    href="/contact"
                    className="theme-btn-secondary inline-flex rounded-full px-7 py-4 text-sm font-medium transition"
                  >
                    تواصل مع الفريق
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
