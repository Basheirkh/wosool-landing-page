import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import {
  LegalHeader,
  LegalSection,
  LegalTOC,
  LegalTable,
} from "@/components/legal/LegalPrimitives";

export const metadata: Metadata = {
  title: "شروط الاستخدام — وصول",
  description:
    "الشروط والأحكام التي تحكم استخدامك لمنصة وصول، بما في ذلك الاشتراكات، الاستخدام المقبول، والامتثال لسياسة واتساب للأعمال.",
};

const sections = [
  { id: "acceptance", title: "القبول والأطراف" },
  { id: "service", title: "وصف الخدمة" },
  { id: "accounts", title: "الحسابات والأمان" },
  { id: "subscriptions", title: "الاشتراكات والدفع" },
  { id: "acceptable-use", title: "الاستخدام المقبول" },
  { id: "whatsapp", title: "الامتثال لسياسة واتساب" },
  { id: "ip", title: "الملكية الفكرية" },
  { id: "ai-liability", title: "مسؤولية الذكاء الاصطناعي" },
  { id: "liability", title: "حدود المسؤولية" },
  { id: "termination", title: "الإيقاف والإنهاء" },
  { id: "law", title: "القانون المطبّق" },
  { id: "changes", title: "التعديلات" },
];

export default function TermsPage() {
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
                    badge="قانوني"
                    updatedAt="أبريل 2026"
                    title="شروط الاستخدام"
                    intro="باستخدامك لمنصة وصول، فإنك توافق على الشروط التالية. نرجو قراءتها بعناية — فهي تحدّد حقوقك والتزاماتك تجاه الخدمة، وتشرح الإطار القانوني الذي يحكم علاقتنا بك."
                  />

                  <div className="mt-14 space-y-14 leading-9">
                    <LegalSection
                      id="acceptance"
                      number="1"
                      title="القبول والأطراف"
                    >
                      <p>
                        باستخدام تطبيق وصول (&ldquo;الخدمة&rdquo;)، فإنك تقبل هذه
                        الشروط بينك وبين{" "}
                        <span className="theme-text-primary font-semibold">
                          شركة Silk Rose
                        </span>{" "}
                        (&ldquo;الشركة&rdquo;، &ldquo;نحن&rdquo;) — الجهة المالكة
                        والمشغّلة لوصول. إذا كنت تستخدم الخدمة لصالح شركة أو
                        كيان قانوني، فأنت تُمثّل هذا الكيان وتقبل هذه الشروط
                        نيابةً عنه.
                      </p>
                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        لا يُسمح باستخدام الخدمة إذا:
                      </h3>
                      <ul className="space-y-2">
                        <li>لم تبلغ الثامنة عشرة من العمر</li>
                        <li>كنت تعمل لصالح جهة محظورة قانونياً</li>
                        <li>سبق إنهاء حسابك بسبب انتهاك هذه الشروط</li>
                      </ul>
                    </LegalSection>

                    <LegalSection id="service" number="2" title="وصف الخدمة">
                      <p>يوفّر وصول:</p>
                      <ul className="mt-4 space-y-2">
                        <li>وكيل ذكاء اصطناعي لخدمة عملاء المتاجر عبر واتساب</li>
                        <li>وكيل ذكاء اصطناعي لمساعدة أصحاب المتاجر في الإدارة</li>
                        <li>
                          تكاملات مباشرة مع منصة سلة للتجارة الإلكترونية
                        </li>
                        <li>لوحة تحكم لإدارة وتخصيص الوكيل ومعرفته بالمتجر</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="accounts"
                      number="3"
                      title="الحسابات والأمان"
                    >
                      <ul className="space-y-2">
                        <li>أنت مسؤول عن الحفاظ على سرية بيانات دخولك</li>
                        <li>تُبلّغنا فوراً عن أي استخدام غير مصرّح به لحسابك</li>
                        <li>لا تُشارك بيانات حسابك مع أي طرف آخر</li>
                        <li>
                          لسنا مسؤولين عن الأضرار الناتجة عن إخفاقك في حماية
                          بيانات دخولك
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="subscriptions"
                      number="4"
                      title="الاشتراكات والدفع"
                    >
                      <h3 className="theme-text-primary mt-2 mb-4 text-lg font-semibold">
                        الخطط
                      </h3>
                      <LegalTable
                        headers={["الخطة", "السعر الشهري", "ملخص المميزات"]}
                        rows={[
                          ["شغّال", "299 ريال", "وكيل أساسي + تكامل سلة"],
                          ["مستقل", "599 ريال", "وكيل متقدم + كل المميزات"],
                        ]}
                      />

                      <h3 className="theme-text-primary mt-10 mb-4 text-lg font-semibold">
                        شروط الدفع
                      </h3>
                      <ul className="space-y-2">
                        <li>الدفع مسبقاً قبل بدء الفترة</li>
                        <li>لا استرداد للفترات المنتهية</li>
                        <li>
                          التجديد التلقائي ما لم يتم الإلغاء قبل 24 ساعة من نهاية
                          الدورة
                        </li>
                        <li>الضريبة المضافة مشمولة في السعر المعروض</li>
                      </ul>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        التجربة المجانية
                      </h3>
                      <p>
                        7 أيام مجاناً بدون رسوم لأول متجر — لا يتطلّب بطاقة ائتمان.
                      </p>
                    </LegalSection>

                    <LegalSection
                      id="acceptable-use"
                      number="5"
                      title="الاستخدام المقبول"
                    >
                      <h3 className="theme-text-primary mt-2 mb-4 text-lg font-semibold">
                        مسموح
                      </h3>
                      <ul className="space-y-2">
                        <li>خدمة عملاء متجرك الإلكتروني</li>
                        <li>الرد على استفسارات المتجر والطلبات</li>
                        <li>إدارة الطلبات والمنتجات عبر الوكيل</li>
                        <li>إرسال إشعارات الطلبات المخوّلة</li>
                        <li>حملات التسويق المبنية على موافقة مسبقة</li>
                      </ul>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        محظور
                      </h3>
                      <ul className="space-y-2">
                        <li>الاستخدام لأغراض غير تجارية</li>
                        <li>انتهاك سياسة واتساب للأعمال</li>
                        <li>إرسال رسائل غير مرغوبة (Spam)</li>
                        <li>جمع بيانات المستخدمين دون موافقتهم</li>
                        <li>محاولة اختراق أنظمة وصول أو الوصول غير المصرّح</li>
                        <li>إعادة بيع الخدمة دون إذن كتابي</li>
                        <li>استخدام وصول كمنصة ذكاء اصطناعي عام</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="whatsapp"
                      number="6"
                      title="الامتثال لسياسة واتساب"
                    >
                      <p>
                        وصول مُصمَّم كأداة لخدمة عملاء المتاجر التجارية، وليس
                        كمساعد ذكاء اصطناعي عام. باستخدامك للخدمة، فإنك تؤكّد:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>استخدام وصول لأغراض متجرك التجارية فقط</li>
                        <li>الحصول على موافقة العملاء قبل التواصل معهم</li>
                        <li>
                          الامتثال لسياسة واتساب للأعمال في جميع الأوقات
                        </li>
                        <li>
                          تحمّل المسؤولية الكاملة عن أي مخالفة تخصّ متجرك
                          وعملاءك
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection id="ip" number="7" title="الملكية الفكرية">
                      <h3 className="theme-text-primary mt-2 mb-4 text-lg font-semibold">
                        ملكية وصول
                      </h3>
                      <p>
                        الكود البرمجي، الخوارزميات، النماذج، الواجهات، والعلامات
                        التجارية الخاصة بوصول هي ملكية حصرية للشركة.
                      </p>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        ملكية التاجر
                      </h3>
                      <p>
                        بيانات متجرك، محادثاتك، وقاعدة معرفتك — كلها ملكيتك
                        الكاملة. يحصل وصول على ترخيص محدود لمعالجتها بغرض تقديم
                        الخدمة لك فحسب.
                      </p>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        قيود
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          لا تستخدم محتوى وصول لتدريب نماذج ذكاء اصطناعي منافسة
                        </li>
                        <li>لا تعكس هندسة أنظمة وصول أو أي جزء منها</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="ai-liability"
                      number="8"
                      title="مسؤولية الذكاء الاصطناعي"
                    >
                      <ul className="space-y-2">
                        <li>
                          وصول يوفّر وكلاء ذكاء اصطناعي — وليس خبراء قانونيين أو
                          ماليين أو طبيين
                        </li>
                        <li>
                          ردود الوكيل قد لا تكون دائماً صحيحة 100٪، خصوصاً في
                          الحالات الحرجة
                        </li>
                        <li>
                          أنت مسؤول عن مراجعة ردود الوكيل قبل اعتمادها في قرارات
                          تجارية حساسة
                        </li>
                        <li>
                          يمكنك تفعيل وضع المراجعة البشرية (HITL) لأي قرار مهم
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="liability"
                      number="9"
                      title="حدود المسؤولية"
                    >
                      <p>
                        لا تتجاوز مسؤوليتنا الإجمالية تجاهك، في أي حادثة، مبلغ
                        اشتراكك خلال الثلاثة أشهر الماضية.
                      </p>
                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        لسنا مسؤولين عن:
                      </h3>
                      <ul className="space-y-2">
                        <li>الأضرار غير المباشرة أو العرضية</li>
                        <li>فقدان الأرباح أو الأعمال</li>
                        <li>انقطاع خدمات الأطراف الثالثة (سلة، واتساب)</li>
                        <li>الأضرار الناجمة عن إساءة استخدام الوكيل</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="termination"
                      number="10"
                      title="الإيقاف والإنهاء"
                    >
                      <h3 className="theme-text-primary mt-2 mb-4 text-lg font-semibold">
                        بإرادتك
                      </h3>
                      <ul className="space-y-2">
                        <li>ألغِ الاشتراك في أي وقت من لوحة التحكم</li>
                        <li>تحتفظ ببياناتك لمدة 30 يوماً بعد الإلغاء</li>
                      </ul>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        من طرفنا
                      </h3>
                      <p>نحتفظ بالحق في إيقاف حسابك فوراً في حال:</p>
                      <ul className="mt-4 space-y-2">
                        <li>انتهاك هذه الشروط</li>
                        <li>انتهاك سياسة واتساب للأعمال</li>
                        <li>الاستخدام الضار أو الاحتيالي</li>
                        <li>عدم سداد الاشتراك</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="law"
                      number="11"
                      title="القانون المطبّق وفضّ النزاعات"
                    >
                      <ul className="space-y-2">
                        <li>
                          تخضع هذه الشروط لأنظمة المملكة العربية السعودية
                        </li>
                        <li>
                          نلجأ أولاً إلى الحلّ الودّي خلال 30 يوماً من تاريخ
                          النزاع
                        </li>
                        <li>
                          عند تعذّر الحلّ الودّي، تُحال النزاعات إلى المحاكم
                          السعودية المختصة
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection id="changes" number="12" title="التعديلات">
                      <p>
                        نُبلّغك بالتعديلات الجوهرية على هذه الشروط قبل 30 يوماً
                        من سريانها. استمرارك في استخدام الخدمة بعد سريان
                        التعديلات يُعتبر قبولاً لها.
                      </p>
                    </LegalSection>
                  </div>
                </div>
              </div>

              <LegalTOC
                sections={sections}
                contactLabel="لديك سؤال قانوني؟"
                contactBody="تواصل مع الفريق القانوني مباشرة — نردّ خلال 3 أيام عمل."
                contactHref="mailto:legal@wosool.ai"
                contactCta="legal@wosool.ai"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
