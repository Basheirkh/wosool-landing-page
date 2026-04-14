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
                    updatedAt="أبريل 2026"
                    title="سياسة الإلغاء والاسترداد"
                    intro="نؤمن بالوضوح الكامل في الفوترة. هذه السياسة تشرح كيف تُلغي اشتراكك في منصة وصول، متى يحقّ لك الاسترداد، وكيف نتعامل مع الأعطال التقنية بما يضمن حقّك وحقوقنا."
                  />

                  <div className="mt-14 space-y-14 leading-9">
                    <LegalSection
                      id="cancellation"
                      number="1"
                      title="إلغاء الاشتراك"
                    >
                      <ul className="space-y-2">
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
                      <h3 className="theme-text-primary mt-2 mb-4 text-lg font-semibold">
                        التجربة المجانية (7 أيام)
                      </h3>
                      <p>
                        لا رسوم خلال فترة التجربة المجانية، وبالتالي لا حاجة
                        لاسترداد.
                      </p>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        الاشتراك المدفوع
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          لا يتمّ استرداد رسوم الفترات التي انقضت أو استُخدمت
                          فيها الخدمة
                        </li>
                        <li>
                          في حال خلل تقني موثّق من طرفنا، يحقّ لك استرداد نسبي
                          يُحسب بالأيام
                        </li>
                        <li>
                          الاسترداد يُعاد بنفس وسيلة الدفع الأصلية خلال 10–14
                          يوم عمل
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="downtime"
                      number="3"
                      title="الأعطال التقنية والاسترداد النسبي"
                    >
                      <p>
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
                      <p>نرفض طلبات الاسترداد في الحالات التالية:</p>
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
                      <ol className="space-y-3 marker:text-brand-primary list-decimal pr-6">
                        <li>
                          أرسل بريداً إلى{" "}
                          <span className="theme-text-primary font-medium">
                            info@wosool.ai
                          </span>{" "}
                          من البريد المسجّل في حسابك
                        </li>
                        <li>اذكر رقم الاشتراك وسبب طلب الاسترداد</li>
                        <li>نُراجع الطلب خلال 5 أيام عمل ونُرسل قراراً رسمياً</li>
                        <li>
                          في حال الموافقة، يُعاد المبلغ خلال 10–14 يوم عمل من
                          تاريخ الموافقة
                        </li>
                      </ol>
                    </LegalSection>

                    <LegalSection
                      id="chargebacks"
                      number="6"
                      title="النزاعات مع البنوك (Chargebacks)"
                    >
                      <p>
                        إذا واجهت مشكلة في الفوترة، نرجو التواصل معنا قبل تقديم
                        نزاع بنكي. معظم المشكلات تُحلّ خلال 48 ساعة عبر فريق
                        الفوترة.
                      </p>
                      <LegalCallout label="تنبيه">
                        تقديم نزاع بنكي (chargeback) احتيالي دون محاولة الحلّ
                        معنا أولاً قد يؤدّي إلى تعليق الحساب نهائياً وملاحقة
                        قانونية لاسترداد الرسوم والتكاليف.
                      </LegalCallout>
                    </LegalSection>
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
