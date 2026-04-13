import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "تواصل معنا — وصول",
  description:
    "قنوات التواصل الرسمية مع وصول — المبيعات، الدعم، الفوترة، القانوني، والخصوصية.",
};

const channels = [
  {
    category: "المبيعات",
    title: "تحدّث إلى فريق المبيعات",
    description:
      "للمتاجر التي تبحث عن خطة Enterprise، تكامل مخصّص، أو عرض تجريبي مباشر.",
    email: "sales@wosool.ai",
    sla: "نردّ خلال 1 يوم عمل",
  },
  {
    category: "الدعم الفني",
    title: "فريق الدعم",
    description:
      "لأي مشكلة تقنية، سؤال عن التشغيل، أو مساعدة في إعداد الوكيل.",
    email: "support@wosool.ai",
    sla: "نردّ خلال 4 ساعات في أيام العمل",
  },
  {
    category: "الفوترة",
    title: "الفوترة والاشتراكات",
    description:
      "لأسئلة الفواتير، تغيير الخطط، طلبات الاسترداد، وتعديل بيانات الدفع.",
    email: "billing@wosool.ai",
    sla: "نردّ خلال 5 أيام عمل",
  },
  {
    category: "الخصوصية",
    title: "حقوق البيانات",
    description:
      "لطلبات الاطلاع، التصحيح، الحذف، أو أي استفسار متعلّق ببياناتك الشخصية.",
    email: "privacy@wosool.ai",
    sla: "نستجيب خلال 30 يوماً (PDPL)",
  },
  {
    category: "قانوني",
    title: "الفريق القانوني",
    description:
      "لأسئلة الشروط، اتفاقيات معالجة البيانات، أو أي تواصل رسمي قانوني.",
    email: "legal@wosool.ai",
    sla: "نردّ خلال 3 أيام عمل",
  },
  {
    category: "حوكمة AI",
    title: "أخلاقيات الذكاء الاصطناعي",
    description:
      "للإبلاغ عن قرار آلي غير عادل، طلب مراجعة بشرية، أو الإفصاح عن انحياز.",
    email: "ethics@wosool.ai",
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

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px] theme-text-primary">
        <section className="px-6 pt-12 pb-16">
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

            <div className="theme-article-surface rounded-[32px] p-8 md:p-16">
              <div className="mb-8 flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
                  تواصل
                </span>
                <span className="theme-chip rounded-full px-4 py-2">
                  جدة، المملكة العربية السعودية
                </span>
              </div>

              <h1 className="theme-text-primary mb-6 text-4xl font-bold leading-tight md:text-6xl">
                تواصل مع الفريق المناسب مباشرة.
              </h1>
              <p className="theme-text-secondary max-w-3xl text-[18px] leading-9">
                اختر القناة التي تناسب استفسارك للحصول على ردّ أسرع. كل فريق
                متخصّص في نوع محدّد من الطلبات، وله وقت استجابة معلن.
              </p>
            </div>
          </div>
        </section>

        {/* Channels Grid */}
        <section className="px-6 py-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.email}
                  href={`mailto:${c.email}`}
                  className="theme-content-card group flex flex-col rounded-3xl p-6 transition-all hover:-translate-y-1"
                >
                  <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.24em]">
                    {c.category}
                  </div>
                  <h3 className="theme-text-primary mb-3 text-lg font-semibold">
                    {c.title}
                  </h3>
                  <p className="theme-text-secondary mb-6 flex-1 text-sm leading-7">
                    {c.description}
                  </p>

                  <div className="mt-auto space-y-3 pt-4 border-t theme-border">
                    <div className="text-brand-primary text-sm font-medium transition-colors group-hover:underline">
                      {c.email}
                    </div>
                    <div className="theme-text-secondary text-xs">{c.sla}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Office + Quick Links */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
              <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.28em]">
                  المقرّ
                </div>
                <h2 className="theme-text-primary mb-6 text-3xl font-bold leading-tight md:text-4xl">
                  جدة، المملكة العربية السعودية
                </h2>
                <p className="theme-text-secondary mb-8 text-[16px] leading-9">
                  نعمل من جدة، لكن خدمتنا متاحة لأي متجر سعودي أو خليجي يستخدم
                  منصة سلة. للتواصل العام ولاستفسارات الصحافة والشراكات، استخدم
                  البريد العام.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="theme-content-card rounded-3xl p-5">
                    <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.22em]">
                      عام
                    </div>
                    <a
                      href="mailto:hello@wosool.ai"
                      className="theme-text-primary text-sm transition hover:text-brand-primary"
                    >
                      hello@wosool.ai
                    </a>
                  </div>
                  <div className="theme-content-card rounded-3xl p-5">
                    <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.22em]">
                      الصحافة
                    </div>
                    <a
                      href="mailto:press@wosool.ai"
                      className="theme-text-primary text-sm transition hover:text-brand-primary"
                    >
                      press@wosool.ai
                    </a>
                  </div>
                  <div className="theme-content-card rounded-3xl p-5">
                    <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.22em]">
                      الشراكات
                    </div>
                    <a
                      href="mailto:partners@wosool.ai"
                      className="theme-text-primary text-sm transition hover:text-brand-primary"
                    >
                      partners@wosool.ai
                    </a>
                  </div>
                  <div className="theme-content-card rounded-3xl p-5">
                    <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.22em]">
                      الموقع
                    </div>
                    <span className="theme-text-primary text-sm">
                      wosool.ai
                    </span>
                  </div>
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
      </main>
      <Footer />
    </>
  );
}
