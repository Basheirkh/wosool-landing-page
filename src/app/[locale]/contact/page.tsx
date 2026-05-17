import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "تواصل معنا — وصول",
  description:
    "قنوات التواصل الرسمية مع وصول — المبيعات، الدعم، الفوترة، القانوني، الخصوصية، وحوكمة الذكاء الاصطناعي.",
};

const channels = [
  {
    category: "المبيعات",
    title: "تحدّث إلى المبيعات",
    description:
      "للمتاجر التي تبحث عن خطة أكبر، تكامل مخصّص، أو عرض تجريبي مباشر مع الفريق.",
    email: "info@wosool.ai",
    sla: "نردّ خلال يوم عمل واحد",
  },
  {
    category: "الدعم الفني",
    title: "تحدّث إلى الدعم",
    description:
      "لأي مشكلة تشغيلية، سؤال عن إعداد الوكيل، أو خلل في الربط مع سلة.",
    email: "info@wosool.ai",
    sla: "نردّ خلال 4 ساعات في أيام العمل",
  },
  {
    category: "الفوترة",
    title: "الفوترة والاشتراكات",
    description:
      "لأسئلة الفواتير، تغيير الخطط، طلبات الاسترداد، وتعديل بيانات الدفع.",
    email: "info@wosool.ai",
    sla: "نردّ خلال 5 أيام عمل",
  },
  {
    category: "الخصوصية",
    title: "حقوق البيانات",
    description:
      "لطلبات الاطلاع، التصحيح، الحذف، أو أي استفسار يخصّ بياناتك الشخصية وفق PDPL.",
    email: "info@wosool.ai",
    sla: "نستجيب خلال 30 يوماً (PDPL)",
  },
  {
    category: "قانوني",
    title: "الفريق القانوني",
    description:
      "لأسئلة الشروط، اتفاقيات معالجة البيانات (DPA)، أو أي تواصل رسمي مع الجهة المُشغّلة Silk Rose.",
    email: "info@wosool.ai",
    sla: "نردّ خلال 3 أيام عمل",
  },
  {
    category: "حوكمة AI",
    title: "أخلاقيات الذكاء الاصطناعي",
    description:
      "للإبلاغ عن قرار آلي يبدو غير عادل، طلب مراجعة بشرية، أو الإفصاح عن انحياز.",
    email: "info@wosool.ai",
    sla: "نراجع كل بلاغ يدوياً",
  },
];

const quickLinks = [
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "شروط الاستخدام", href: "/terms" },
  { label: "اتفاقية معالجة البيانات", href: "/dpa" },
  { label: "سياسة الإلغاء والاسترداد", href: "/refunds" },
  { label: "الإفصاح عن الذكاء الاصطناعي", href: "/ai-disclosure" },
  { label: "سياسة ملفات الارتباط", href: "/cookies" },
];

export default async function ContactPage({
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
        <section className="relative px-6 pt-12 pb-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="theme-text-secondary mb-6 flex items-center justify-between gap-4 text-sm">
              <Link
                href="/"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                الرئيسية
              </Link>
              <span>تواصل معنا</span>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-surface-inset p-8 md:p-16">
              <div className="absolute inset-0 dot-grid opacity-60" />
              <div
                className="absolute inset-0 opacity-70"
                style={{ backgroundImage: "var(--hero-accent-wash)" }}
              />

              <div className="relative">
                <div className="mb-8 flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
                    تواصل
                  </span>
                  <span className="theme-chip rounded-full px-4 py-2">
                    Silk Rose · الرياض
                  </span>
                  <span className="theme-chip rounded-full px-4 py-2">
                    info@wosool.ai
                  </span>
                </div>

                <h1 className="theme-text-primary mb-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
                  تكلّم مع الفريق المناسب،
                  <br />
                  <span className="theme-text-secondary">من غير لفّ ودوران.</span>
                </h1>
                <p className="theme-text-secondary max-w-3xl text-[18px] leading-9">
                  بريد واحد يصلك بكل فريق متخصّص داخل وصول. اختر القناة الأقرب
                  لاستفسارك، وستجد وقت الاستجابة المعلن لكل واحدة منها بالأسفل.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Channels Grid */}
        <section className="px-6 py-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-subtle" />
              <span className="text-xs uppercase tracking-[0.28em] text-muted">
                قنوات التواصل
              </span>
              <div className="flex-1 h-px bg-subtle" />
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.title}
                  href={`mailto:${c.email}`}
                  className="theme-content-card group relative flex flex-col rounded-3xl p-6 transition-all hover:-translate-y-1"
                >
                  <div className="text-brand-primary mb-4 font-mono text-xs uppercase tracking-[0.24em]">
                    {c.category}
                  </div>
                  <h3 className="theme-text-primary mb-3 text-lg font-semibold leading-7">
                    {c.title}
                  </h3>
                  <p className="theme-text-secondary mb-6 flex-1 text-sm leading-7">
                    {c.description}
                  </p>

                  <div className="mt-auto space-y-3 border-t theme-border pt-4">
                    <div className="text-brand-primary text-sm font-medium transition-colors group-hover:underline">
                      {c.email}
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-xs text-brand-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                      {c.sla}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Where we are + Quick Links */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
              <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                  أين نعمل
                </div>
                <h2 className="theme-text-primary mb-6 text-3xl font-bold leading-tight md:text-4xl">
                  Silk Rose — الرياض، المملكة العربية السعودية.
                </h2>
                <p className="theme-text-secondary mb-8 text-[16px] leading-9">
                  وصول مُشغّل من قِبل Silk Rose، الجهة التشغيلية الرسمية للمنتج.
                  نعمل من الرياض، ونخدم تجار سلة في المملكة ودول الخليج
                  عن بُعد. لجميع الاستفسارات — مبيعات، دعم، شراكات، أو صحافة —
                  نستخدم بريداً موحّداً يصل للفريق الصحيح داخلياً.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { label: "البريد العام", value: "info@wosool.ai", isLink: true },
                    { label: "الموقع", value: "wosool.ai", isLink: false },
                    { label: "الجهة المُشغّلة", value: "Silk Rose", isLink: false },
                    { label: "المقرّ", value: "الرياض، السعودية", isLink: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-subtle bg-surface p-5"
                    >
                      <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.22em]">
                        {item.label}
                      </div>
                      {item.isLink ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="theme-text-primary text-sm transition hover:text-brand-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="theme-text-primary text-sm">
                          {item.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                  روابط سريعة
                </div>
                <h2 className="theme-text-primary mb-8 text-2xl font-bold leading-tight md:text-3xl">
                  الوثائق القانونية
                </h2>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="theme-text-secondary flex items-center justify-between rounded-2xl px-4 py-3 text-sm leading-7 transition-colors hover:bg-[color:var(--bg-surface)] hover:text-[var(--text-primary)]"
                    >
                      <span>{link.label}</span>
                      <span className="theme-text-secondary text-xs">←</span>
                    </Link>
                  ))}
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
                  ما تحتاج تكتب بريد؟
                </div>
                <h2 className="theme-text-primary mb-6 text-3xl font-bold leading-tight md:text-5xl">
                  جرّب وصول قبل ما تتواصل.
                </h2>
                <p className="theme-text-secondary mb-8 text-[17px] leading-9">
                  أغلب الأسئلة تجد إجابتها داخل المنتج نفسه. ابدأ بتجربة مجانية
                  سبعة أيام، وإن واجهك أي شيء — البريد فوق متاح.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/pricing"
                    className="theme-btn-primary inline-flex rounded-full px-7 py-4 text-sm font-medium transition"
                  >
                    شوف الخطط
                  </Link>
                  <Link
                    href="/features"
                    className="theme-btn-secondary inline-flex rounded-full px-7 py-4 text-sm font-medium transition"
                  >
                    استعرض القدرات
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
