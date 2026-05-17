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
                    updatedAt="16 مايو 2026"
                    title="شروط الاستخدام"
                    intro="إطار قانوني واضح يحكم استخدامك لوصول كوكيل ذكاء اصطناعي يدير متجرك على سلة عبر واتساب. هذه الشروط تُعرّف ما نقدّمه، وما تلتزم به، وكيف نحلّ الخلافات إن حصلت."
                    extraBadges={["النظام المطبّق: المملكة العربية السعودية", "النسخة 2.1"]}
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

                  <div className="mt-14 space-y-14 leading-9">
                    <LegalSection
                      id="acceptance"
                      number="1"
                      title="القبول والأطراف"
                    >
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        تسجيلك في وصول أو استخدامك له يُعتبر قبولاً صريحاً لهذه
                        الشروط — سواء كنت فرداً أو تُمثّل كياناً تجارياً.
                      </p>
                      <p className="mt-5">
                        تُبرَم هذه الاتفاقية بينك وبين{" "}
                        <span className="theme-text-primary font-semibold">
                          شركة Silk Rose
                        </span>{" "}
                        (&ldquo;الشركة&rdquo;، &ldquo;نحن&rdquo;) — الجهة المالكة
                        والمشغّلة لمنصة وصول (&ldquo;الخدمة&rdquo;). متى ما
                        استخدمت الخدمة باسم شركة أو متجر، فأنت تُقرّ بصلاحيتك
                        لإلزام ذلك الكيان بهذه الشروط.
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        وصول منصة سحابية متعدّدة الوكلاء، مُصمَّمة لتُدير متاجر
                        سلة عبر واتساب من نهايتها إلى نهايتها — لا أداة محادثة
                        عامّة.
                      </p>
                      <p className="mt-5">تشمل الخدمة:</p>
                      <ul className="mt-4 space-y-2">
                        <li>وكيل ذكاء اصطناعي لخدمة عملاء المتاجر عبر واتساب</li>
                        <li>وكيل ذكاء اصطناعي لمساعدة أصحاب المتاجر في الإدارة</li>
                        <li>تكاملات مباشرة مع منصة سلة للتجارة الإلكترونية</li>
                        <li>لوحة تحكم لإدارة وتخصيص الوكيل ومعرفته بالمتجر</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="accounts"
                      number="3"
                      title="الحسابات والأمان"
                    >
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        حسابك بوّابتك إلى متجرك، والحفاظ عليه مسؤوليتك
                        الأولى.
                      </p>
                      <ul className="mt-5 space-y-2">
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        فوترة شفّافة، بالشهر، تبدأها بتجربة مجانية لا تتطلّب
                        بطاقة.
                      </p>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        الخطط المتاحة
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        وصول أداة تجارية للمتاجر على سلة — أيّ استخدام خارج هذا
                        الإطار يُعتبر مخالفاً.
                      </p>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        لأنّ وصول يعمل على بنية واتساب للأعمال (Meta)، يلتزم
                        كلّ تاجر بسياسات Meta كاملةً — ومسؤولية ذلك تقع عليك
                        بحكم العلاقة المباشرة بينك وبين Meta.
                      </p>
                      <p className="mt-5">باستخدامك للخدمة، فإنك تؤكّد:</p>
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        ما نملكه يبقى لنا، وما يخصّ متجرك يبقى لك — بدون لبس.
                      </p>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        الوكلاء الذكيون أدوات قوية، لكنّها أدوات — والقرارات
                        الحرجة تبقى مسؤوليتك.
                      </p>
                      <ul className="mt-5 space-y-2">
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        مسؤوليتنا محدودة بسقف واضح ومحسوب — وفق ما يسمح به
                        النظام السعودي.
                      </p>
                      <p className="mt-5">
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        تستطيع المغادرة في أي لحظة. ولنا الحقّ ذاته في حال
                        الإخلال بهذه الشروط.
                      </p>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        نحن نُفضّل الحلّ الودّي دائماً — وإن تعذّر، فالمرجع هو
                        القضاء السعودي.
                      </p>
                      <ul className="mt-5 space-y-2">
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        أيّ تعديل جوهري يصلك مكتوباً قبل 30 يوماً من سريانه —
                        لا مفاجآت.
                      </p>
                      <p className="mt-5">
                        استمرارك في استخدام الخدمة بعد سريان التعديلات يُعتبر
                        قبولاً لها. أمّا التحديثات الشكلية أو التوضيحية فقد
                        تسري فور النشر دون إشعار مسبق.
                      </p>
                    </LegalSection>
                  </div>

                  <div className="mt-16 rounded-3xl border border-brand-primary/15 bg-brand-primary/[0.05] p-6 md:p-8">
                    <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.24em]">
                      أسئلة حول هذه الشروط؟
                    </div>
                    <h3 className="theme-text-primary mb-3 text-xl font-semibold md:text-2xl">
                      الفريق القانوني في وصول جاهز للمساعدة.
                    </h3>
                    <p className="theme-text-secondary mb-5 text-[15px] leading-8">
                      راسلنا على البريد أدناه. نردّ على الاستفسارات القانونية
                      خلال 3 أيام عمل.
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
                contactLabel="لديك سؤال قانوني؟"
                contactBody="تواصل مع الفريق القانوني مباشرة — نردّ خلال 3 أيام عمل."
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
