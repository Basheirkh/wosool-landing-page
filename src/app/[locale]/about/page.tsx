import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "عن وصول — البنية التحتية الذكية لمتاجر سلة",
  description:
    "وصول هو نظام تشغيل المتجر الذكي المبني خصيصاً للتجارة الإلكترونية السعودية والعربية على منصة سلة. مبني من قبل Silk Rose في الرياض.",
};

const values = [
  {
    title: "عربي من الأساس",
    body: "ليس ترجمة، وليس fine-tune سطحي. مبني للهجة السعودية والخليجية بفهم سياقي حقيقي — يميّز السؤال من الشكوى، والمزحة من الاعتراض.",
  },
  {
    title: "Salla-native",
    body: "تكامل مباشر مع منصة سلة عبر APIs الرسمية — لا plugins، لا scrapers، لا حلول التفافية. كل عملية تُكتب وتُقرأ من نفس النظام الذي يعرفه تاجر سلة.",
  },
  {
    title: "واتساب كمنتج",
    body: "واتساب عندنا ليس قناة دعم — هو السطح الذي يُشغّل المتجر منه. كل التجربة مصمّمة حول التطبيق الذي يفتحه عميلك عشر مرات في اليوم.",
  },
  {
    title: "الخصوصية بالتصميم",
    body: "نُزيل المعرّفات الشخصية قبل المعالجة، نعزل بيانات كل متجر في نطاق منفصل، ولا نستخدم محادثاتك لتدريب نماذج مشتركة. ملتزمون بنظام حماية البيانات الشخصية السعودي (PDPL).",
  },
  {
    title: "الشفافية الكاملة",
    body: "نوضّح ما يفعله الوكيل، وأين قد يُخطئ، وما الحدود التي لا يتجاوزها. لا نبالغ في الأرقام، ولا نخفي القيود — Wosool منتج، ليس عرضاً تسويقياً.",
  },
  {
    title: "بياناتك ملكيتك",
    body: "محادثات متجرك، طلبات عملائك، تعديلات الكتالوج — كلها ملكك الكاملة. صدّر أو احذف في أي وقت، بلا أسئلة وبلا قيود تعاقدية.",
  },
];

const stats = [
  { value: "7", label: "أيام تجربة مجانية" },
  { value: "24/7", label: "هدف وقت تشغيل الوكيل" },
  { value: "100٪", label: "عربي من الأساس" },
  { value: "0", label: "شهادات وهمية أو أرقام مُلفّقة" },
];

const beliefs = [
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
];

const pillars = [
  {
    title: "واتساب",
    body: "السطح الذي يستخدمه عميلك يومياً. لا تطبيق نُجبره على تنزيله، ولا رابط يضغطه مرة ويهجره.",
  },
  {
    title: "سلة",
    body: "نظام التجارة الذي يثق به التاجر السعودي. نتكامل معه مباشرة بدل أن نطلب منه يغيّر منصته.",
  },
  {
    title: "PDPL",
    body: "نظام حماية البيانات الشخصية السعودي هو الإطار الذي نُصمّم تحته — لا نلحقه لاحقاً.",
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="pt-[88px] theme-text-primary">
        {/* Hero */}
        <section className="relative px-6 pt-12 pb-20">
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

            <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-surface-inset p-8 md:p-16">
              {/* Dot grid + accent wash */}
              <div className="absolute inset-0 dot-grid opacity-60" />
              <div
                className="absolute inset-0 opacity-70"
                style={{ backgroundImage: "var(--hero-accent-wash)" }}
              />

              <div className="relative">
                <div className="mb-8 flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
                    عن الشركة
                  </span>
                  <span className="theme-chip rounded-full px-4 py-2">
                    Silk Rose · الرياض
                  </span>
                  <span className="theme-chip rounded-full px-4 py-2">
                    للسوق السعودي والعربي
                  </span>
                </div>

                <h1 className="theme-text-primary mb-6 max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
                  نبني البنية التحتية الذكية
                  <br />
                  <span className="theme-text-secondary">
                    التي يستحقها تاجر سلة.
                  </span>
                </h1>

                <p className="theme-text-secondary max-w-3xl text-[18px] leading-9">
                  وصول نظام ذكاء اصطناعي يُشغّل متجرك على سلة من داخل واتساب —
                  يردّ على عملائك، ينفّذ أوامرك بالصوت والنص، ويُحلّل أداءك كل
                  صباح. لا chatbot، ولا أداة دعم. نظام تشغيل كامل لمتجر عربي.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="relative rounded-3xl border border-subtle bg-surface p-6"
                    >
                      <div className="theme-text-primary text-3xl font-bold leading-none tracking-tight md:text-4xl">
                        {s.value}
                      </div>
                      <div className="theme-text-secondary mt-3 text-sm leading-6">
                        {s.label}
                      </div>
                      <div
                        className="absolute inset-x-6 -bottom-px h-px opacity-60"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(0,217,126,0.55), transparent)",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why we exist */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                  لماذا نبني وصول
                </div>
                <h2 className="theme-text-primary mb-6 text-3xl font-bold leading-tight md:text-4xl">
                  التاجر العربي يستحق أكثر من ترجمة منتج أجنبي.
                </h2>
                <p className="theme-text-secondary text-[16px] leading-9">
                  السوق السعودي اليوم مليء بأدوات SaaS عالمية تتعامل مع العربية
                  كميزة ثانوية — قائمة منسدلة، RTL مكسور، ولهجة لا تُفهم. تاجر
                  سلة يستحق نظاماً مُصمّماً من اليوم الأول لطريقته في العمل:
                  واتساب على الموبايل، سلة في الخلفية، ولغة طبيعية على مدار
                  الساعة.
                </p>
                <p className="theme-text-secondary mt-4 text-[16px] leading-9">
                  هذا ما يدفع كل قرار في وصول. لا نُترجم منتجاً، ولا نلحق بسوق
                  آخر — نبني البنية التحتية التي يحتاجها التاجر هنا، بمعايير
                  المنتجات العالمية.
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
                  {beliefs.map((item) => (
                    <div
                      key={item.label}
                      className="flex gap-4 rounded-2xl border theme-border p-4 transition-colors hover:border-brand-primary/30"
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

        {/* What we believe — Values */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12 max-w-3xl">
              <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                ما نؤمن به
              </div>
              <h2 className="theme-text-primary mb-4 text-3xl font-bold leading-tight md:text-4xl">
                ستة مبادئ تحكم كل سطر نكتبه.
              </h2>
              <p className="theme-text-secondary text-[16px] leading-9">
                ليست شعارات على الجدار. هي القرارات التي نعود إليها كل أسبوع
                حين نختار ميزة، نرفض ميزة، أو نُعيد كتابة جزء من المنتج.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="theme-content-card rounded-3xl p-6 transition-all hover:-translate-y-1"
                >
                  <div className="text-brand-primary mb-3 font-mono text-xs tracking-[0.2em]">
                    0{i + 1}
                  </div>
                  <h3 className="theme-text-primary mb-3 text-lg font-semibold leading-7">
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

        {/* Built for Saudi commerce — Pillars */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-surface-inset p-8 md:p-12">
              <div className="absolute inset-0 dot-grid opacity-40" />
              <div className="relative">
                <div className="mb-10 max-w-3xl">
                  <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                    مبني للتجارة السعودية
                  </div>
                  <h2 className="theme-text-primary mb-4 text-3xl font-bold leading-tight md:text-4xl">
                    ثلاث ركائز لا نتنازل عنها.
                  </h2>
                  <p className="theme-text-secondary text-[16px] leading-9">
                    واتساب وسلة و PDPL — هذه ليست تكاملات اخترناها صدفة. هي
                    الإطار الذي قرّرنا أن نبني المنتج كله داخله، لأنه الإطار
                    الذي يعمل به التاجر السعودي فعلاً.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {pillars.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-3xl border border-subtle bg-surface p-6"
                    >
                      <div className="text-brand-primary mb-4 text-sm font-semibold tracking-[0.2em]">
                        {p.title}
                      </div>
                      <p className="theme-text-secondary text-sm leading-7">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Working with us */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                  العمل معنا
                </div>
                <h2 className="theme-text-primary mb-6 text-3xl font-bold leading-tight md:text-4xl">
                  للتجار
                </h2>
                <p className="theme-text-secondary text-[16px] leading-9">
                  إذا كان متجرك على سلة وتعاملك مع العملاء يجري على واتساب،
                  وصول مبني لك. ابدأ بتجربة مجانية لسبعة أيام بدون بطاقة، وقرّر
                  بنفسك إذا كان النظام يستحق الانتقال.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/pricing"
                    className="theme-btn-primary inline-flex rounded-full px-7 py-3 text-sm font-medium transition"
                  >
                    شوف الخطط
                  </Link>
                  <Link
                    href="/features"
                    className="theme-btn-secondary inline-flex rounded-full px-7 py-3 text-sm font-medium transition"
                  >
                    استعرض القدرات
                  </Link>
                </div>
              </div>

              <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                  للشركاء
                </div>
                <h2 className="theme-text-primary mb-6 text-3xl font-bold leading-tight md:text-4xl">
                  للوكالات والمطوّرين
                </h2>
                <p className="theme-text-secondary text-[16px] leading-9">
                  إذا كنت تُدير متاجر عملاء على سلة، أو تبني تجارب واتساب
                  للتجار، أو تعمل في تكامل أنظمة عربية — نحب نسمع منك. لا برنامج
                  شراكة رسمي حتى الآن، لكن الحوار مفتوح.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="theme-btn-primary inline-flex rounded-full px-7 py-3 text-sm font-medium transition"
                  >
                    تواصل مع الفريق
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 py-16 pb-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-surface-inset p-8 md:p-16">
              <div className="absolute inset-0 dot-grid opacity-50" />
              <div
                className="absolute inset-0 opacity-60"
                style={{ backgroundImage: "var(--hero-accent-wash)" }}
              />
              <div className="relative max-w-3xl">
                <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                  الخطوة التالية
                </div>
                <h2 className="theme-text-primary mb-6 text-3xl font-bold leading-tight md:text-5xl">
                  جرّب وصول على متجرك في أقل من دقيقتين.
                </h2>
                <p className="theme-text-secondary mb-8 text-[17px] leading-9">
                  سبعة أيام مجانية، بدون بطاقة، بدون التزام. ركّبه على سلة،
                  ابعث رسالة لرقمك، وشوف كيف يردّ الوكيل.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/pricing"
                    className="theme-btn-primary inline-flex rounded-full px-7 py-4 text-sm font-medium transition"
                  >
                    ابدأ التجربة المجانية
                  </Link>
                  <Link
                    href="/features"
                    className="theme-btn-secondary inline-flex rounded-full px-7 py-4 text-sm font-medium transition"
                  >
                    استعرض كل القدرات
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
