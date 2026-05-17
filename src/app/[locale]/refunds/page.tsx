import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import {
  LegalCallout,
  LegalHeader,
  LegalSection,
  LegalTOC,
  LegalTable,
} from "@/components/legal/LegalPrimitives";

export const metadata: Metadata = {
  title: "سياسة الإلغاء والاسترداد — وصول",
  description:
    "كيفية إلغاء اشتراك وصول، شروط الاسترداد، والاستثناءات — بالإضافة إلى آلية التعامل مع الأعطال التقنية.",
};

const sections = [
  { id: "cancellation", title: "إلغاء الاشتراك" },
  { id: "refund", title: "سياسة الاسترداد" },
  { id: "downtime", title: "الأعطال التقنية" },
  { id: "exceptions", title: "الاستثناءات" },
  { id: "process", title: "آلية طلب الاسترداد" },
  { id: "chargebacks", title: "النزاعات مع البنوك" },
];

export default function RefundsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px] theme-text-primary">
        <section className="px-6 pt-8 pb-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="theme-text-secondary mb-6 flex items-center justify-between gap-4 text-sm">
              <Link
                href="/"
                className="transition-colors hover:text-[var(--text-primary)]"
              >
                الرئيسية
              </Link>
              <span>قانوني</span>
            </div>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                  <LegalHeader
                    badge="الفوترة"
                    updatedAt="16 مايو 2026"
                    title="سياسة الإلغاء والاسترداد"
                    intro="جرّب وصول 7 أيام مجاناً، وألغِ في أي لحظة بلا رسوم. هذه السياسة تشرح بالضبط كيف يعمل ذلك، ومتى يحقّ لك الاسترداد، وكيف نُعوّضك في حال تعطّلت الخدمة من طرفنا."
                    extraBadges={["تجربة 7 أيام", "بدون رسوم إلغاء"]}
                  />

                  <nav
                    aria-label="تنقّل سريع"
                    className="mt-8 flex flex-wrap gap-2"
                  >
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="theme-chip theme-text-secondary hover:text-[var(--text-primary)] rounded-full px-4 py-2 text-xs leading-6 transition-colors"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    <div className="theme-content-card rounded-2xl p-5">
                      <div className="theme-text-secondary text-xs uppercase tracking-[0.2em]">
                        تجربة مجانية
                      </div>
                      <div className="theme-text-primary mt-2 text-2xl font-bold">
                        7 أيام
                      </div>
                      <div className="theme-text-secondary mt-1 text-xs leading-6">
                        بدون بطاقة ائتمان
                      </div>
                    </div>
                    <div className="theme-content-card rounded-2xl p-5">
                      <div className="theme-text-secondary text-xs uppercase tracking-[0.2em]">
                        قرار الاسترداد
                      </div>
                      <div className="theme-text-primary mt-2 text-2xl font-bold">
                        5 أيام عمل
                      </div>
                      <div className="theme-text-secondary mt-1 text-xs leading-6">
                        من تاريخ الطلب
                      </div>
                    </div>
                    <div className="theme-content-card rounded-2xl p-5">
                      <div className="theme-text-secondary text-xs uppercase tracking-[0.2em]">
                        إعادة المبلغ
                      </div>
                      <div className="theme-text-primary mt-2 text-2xl font-bold">
                        10–14 يوم
                      </div>
                      <div className="theme-text-secondary mt-1 text-xs leading-6">
                        بنفس وسيلة الدفع
                      </div>
                    </div>
                  </div>

                  <div className="mt-14 space-y-14 leading-9">
                    <LegalSection
                      id="cancellation"
                      number="1"
                      title="إلغاء الاشتراك"
                    >
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        إلغاء بنقرة واحدة، بلا أسئلة، بلا غرامات — وتحتفظ
                        ببياناتك لمدة شهر بعد الإلغاء.
                      </p>
                      <ul className="mt-5 space-y-2">
                        <li>يمكنك إلغاء اشتراكك في أي وقت من الإعدادات &gt; الفوترة</li>
                        <li>لا توجد رسوم إلغاء أو عقوبات مبكرة</li>
                        <li>تستمرّ الخدمة حتى نهاية الفترة المدفوعة مسبقاً</li>
                        <li>
                          لن يتمّ تجديد الاشتراك تلقائياً بعد تأكيد الإلغاء
                        </li>
                      </ul>

                      <LegalCallout>
                        بعد الإلغاء، نحتفظ ببياناتك لمدة 30 يوماً حتى تتمكّن من
                        استرجاعها أو إعادة التفعيل بنفس الإعدادات.
                      </LegalCallout>
                    </LegalSection>

                    <LegalSection id="refund" number="2" title="سياسة الاسترداد">
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        مصفوفة الأهلية أدناه تُجيب على معظم الحالات في سطر
                        واحد.
                      </p>

                      <div className="mt-6">
                        <LegalTable
                          headers={["الحالة", "الأهلية"]}
                          rows={[
                            [
                              "خلال التجربة المجانية (7 أيام)",
                              "لا رسوم — لا حاجة لاسترداد",
                            ],
                            [
                              "فترة مدفوعة منقضية أو استُخدمت فيها الخدمة",
                              "غير قابلة للاسترداد",
                            ],
                            [
                              "خلل تقني موثّق من طرفنا",
                              "استرداد نسبي يُحسب بالأيام",
                            ],
                            [
                              "طلب موافَق عليه",
                              "يُعاد بنفس وسيلة الدفع خلال 10–14 يوم عمل",
                            ],
                          ]}
                        />
                      </div>
                    </LegalSection>

                    <LegalSection
                      id="downtime"
                      number="3"
                      title="الأعطال التقنية والاسترداد النسبي"
                    >
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        كلّما طال الانقطاع من طرفنا، زاد التعويض — وفق جدول
                        محدّد سلفاً، بلا اجتهاد.
                      </p>
                      <p className="mt-5">
                        في حال انقطاع الخدمة لأسباب من طرفنا، نحدّد الاسترداد
                        النسبي وفق الجدول التالي:
                      </p>
                      <div className="mt-6">
                        <LegalTable
                          headers={["مدة الانقطاع", "الاسترداد النسبي"]}
                          rows={[
                            ["أقل من 4 ساعات", "لا يوجد"],
                            ["4 – 24 ساعة", "10٪ من الاشتراك الشهري"],
                            ["24 – 72 ساعة", "25٪ من الاشتراك الشهري"],
                            ["أكثر من 72 ساعة", "50٪ من الاشتراك الشهري"],
                            ["انقطاع شهري تراكمي > 5٪", "شهر مجاني"],
                          ]}
                        />
                      </div>
                      <p className="mt-6">
                        لا يشمل هذا الانقطاعات الناجمة عن:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>صيانة مجدولة أُعلن عنها مسبقاً</li>
                        <li>أعطال خدمات أطراف ثالثة (سلة، واتساب، Meta)</li>
                        <li>قوة قاهرة أو ظروف خارجة عن السيطرة</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="exceptions"
                      number="4"
                      title="الاستثناءات"
                    >
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        ثقتنا متبادلة — لكنّ بعض الحالات تخرج عن إطار
                        الاسترداد.
                      </p>
                      <p className="mt-5">نرفض طلبات الاسترداد في الحالات التالية:</p>
                      <ul className="mt-4 space-y-2">
                        <li>انتهاك شروط الاستخدام أو سياسة واتساب للأعمال</li>
                        <li>
                          الاستخدام المكثّف للخدمة ثم طلب الاسترداد بعد استهلاك
                          الفوائد
                        </li>
                        <li>محاولات الاحتيال أو سوء الاستخدام</li>
                        <li>
                          طلبات الاسترداد المقدّمة بعد مرور 90 يوماً من الدفع
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="process"
                      number="5"
                      title="كيف تطلب الاسترداد"
                    >
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        أربع خطوات واضحة، من البريد إلى تأكيد التحويل.
                      </p>

                      <ol className="mt-6 space-y-4">
                        {[
                          {
                            n: "1",
                            t: "أرسل البريد",
                            d: (
                              <>
                                راسلنا على{" "}
                                <span className="theme-text-primary font-medium">
                                  info@wosool.ai
                                </span>{" "}
                                من البريد المسجّل في حسابك.
                              </>
                            ),
                          },
                          {
                            n: "2",
                            t: "أرفق التفاصيل",
                            d: "اذكر رقم الاشتراك وسبب طلب الاسترداد بدقّة.",
                          },
                          {
                            n: "3",
                            t: "نراجع طلبك",
                            d: "نُراجع الطلب خلال 5 أيام عمل ونُرسل لك قراراً رسمياً.",
                          },
                          {
                            n: "4",
                            t: "يعود المبلغ",
                            d: "في حال الموافقة، يُعاد المبلغ خلال 10–14 يوم عمل من تاريخ الموافقة.",
                          },
                        ].map((step) => (
                          <li
                            key={step.n}
                            className="theme-content-card flex gap-5 rounded-3xl p-5"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary font-bold">
                              {step.n}
                            </div>
                            <div>
                              <div className="theme-text-primary mb-1 text-base font-semibold">
                                {step.t}
                              </div>
                              <div className="theme-text-secondary text-[15px] leading-8">
                                {step.d}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </LegalSection>

                    <LegalSection
                      id="chargebacks"
                      number="6"
                      title="النزاعات مع البنوك (Chargebacks)"
                    >
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        راسلنا أوّلاً — معظم المشكلات تُحلّ خلال 48 ساعة بدون
                        الحاجة إلى البنك.
                      </p>
                      <p className="mt-5">
                        إذا واجهت مشكلة في الفوترة، نرجو التواصل معنا قبل تقديم
                        نزاع بنكي. فريق الفوترة جاهز للنظر في حالتك مباشرةً.
                      </p>
                      <LegalCallout label="تنبيه">
                        تقديم نزاع بنكي (chargeback) احتيالي دون محاولة الحلّ
                        معنا أولاً قد يؤدّي إلى تعليق الحساب نهائياً وملاحقة
                        قانونية لاسترداد الرسوم والتكاليف.
                      </LegalCallout>
                    </LegalSection>
                  </div>

                  <div className="mt-16 rounded-3xl border border-brand-primary/15 bg-brand-primary/[0.05] p-6 md:p-8">
                    <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.24em]">
                      أسئلة حول الفوترة؟
                    </div>
                    <h3 className="theme-text-primary mb-3 text-xl font-semibold md:text-2xl">
                      فريق الفوترة في وصول جاهز للمساعدة.
                    </h3>
                    <p className="theme-text-secondary mb-5 text-[15px] leading-8">
                      راسلنا على البريد أدناه ونردّ على طلبات الاسترداد خلال 5
                      أيام عمل.
                    </p>
                    <a
                      href="mailto:info@wosool.ai"
                      className="theme-btn-primary inline-flex rounded-full px-6 py-3 text-sm font-medium transition"
                    >
                      info@wosool.ai
                    </a>
                  </div>
                </div>
              </div>

              <LegalTOC
                sections={sections}
                contactLabel="أسئلة الفوترة"
                contactBody="فريق الفوترة يردّ خلال 5 أيام عمل على جميع طلبات الاسترداد."
                contactHref="mailto:info@wosool.ai"
                contactCta="info@wosool.ai"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
