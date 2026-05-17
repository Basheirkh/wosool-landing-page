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
  title: "اتفاقية معالجة البيانات — وصول",
  description:
    "اتفاقية معالجة البيانات (DPA) بين وصول وأصحاب المتاجر — تحدّد أدوار المتحكّم والمعالج، التزامات كلّ طرف، والمعالجين الفرعيين وفق PDPL.",
};

const sections = [
  { id: "purpose", title: "الغرض" },
  { id: "definitions", title: "التعريفات" },
  { id: "roles", title: "دور كلّ طرف" },
  { id: "scope", title: "نطاق المعالجة" },
  { id: "processor-obligations", title: "التزامات وصول كمعالج" },
  { id: "sub-processors", title: "المعالجون الفرعيون" },
  { id: "data-subject-rights", title: "حقوق الأفراد" },
  { id: "security", title: "الأمن والتشفير" },
  { id: "breach", title: "الإبلاغ عن الاختراقات" },
  { id: "audits", title: "التدقيق والمراجعة" },
  { id: "transfers", title: "نقل البيانات الدولي" },
  { id: "controller-obligations", title: "التزامات صاحب المتجر" },
  { id: "termination", title: "انتهاء الاتفاقية" },
];

function SectionLede({ children }: { children: React.ReactNode }) {
  return (
    <p className="theme-text-primary mb-5 text-[17px] font-medium leading-9">
      {children}
    </p>
  );
}

function QuickNav() {
  return (
    <nav
      aria-label="انتقال سريع"
      className="mb-10 -mx-1 flex flex-wrap gap-2 border-t border-b theme-border py-5"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="theme-chip theme-text-secondary rounded-full px-3.5 py-1.5 text-xs leading-6 transition hover:text-[var(--text-primary)]"
        >
          {s.title}
        </a>
      ))}
    </nav>
  );
}

export default function DpaPage() {
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
                <div className="theme-article-surface relative overflow-hidden rounded-[32px] p-8 md:p-12">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -top-24 h-64 bg-gradient-to-b from-brand-primary/10 to-transparent blur-3xl"
                  />

                  <div className="relative">
                    <LegalHeader
                      badge="اتفاقية ملزمة"
                      updatedAt="2026-05-16"
                      title="اتفاقية معالجة البيانات"
                      extraBadges={["B2B", "PDPL", "v3.2"]}
                      intro="تُنظّم هذه الاتفاقية علاقة معالجة البيانات بين شركة Silk Rose (الجهة المالكة لمنصة وصول) وأصحاب المتاجر الذين يستخدمون المنصّة. تُعدّ جزءاً لا يتجزّأ من شروط الاستخدام، وتسري تلقائياً عند تثبيت التطبيق من متجر تطبيقات سلة."
                    />

                    <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
                      <a
                        href="mailto:info@wosool.ai?subject=%D8%B7%D9%84%D8%A8%20DPA%20%D9%85%D9%88%D9%82%D8%B9%D8%A9"
                        className="theme-btn-primary inline-flex rounded-full px-5 py-3 font-medium transition"
                      >
                        طلب DPA موقّعة
                      </a>
                      <a
                        href="mailto:info@wosool.ai?subject=%D8%B7%D9%84%D8%A8%20%D9%86%D8%B3%D8%AE%D8%A9%20PDF%20%D9%85%D9%86%20%D8%A7%D8%AA%D9%81%D8%A7%D9%82%D9%8A%D8%A9%20%D9%85%D8%B9%D8%A7%D9%84%D8%AC%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA"
                        className="theme-chip theme-text-primary rounded-full px-4 py-2 transition hover:opacity-80"
                      >
                        طلب نسخة PDF
                      </a>
                      <Link
                        href="/privacy"
                        className="theme-chip theme-text-primary rounded-full px-4 py-2 transition hover:opacity-80"
                      >
                        سياسة الخصوصية
                      </Link>
                    </div>

                    <div className="mt-10 grid gap-3 sm:grid-cols-3">
                      <div className="theme-content-card rounded-2xl p-5">
                        <div className="theme-text-secondary mb-1 text-xs uppercase tracking-[0.2em]">
                          المتحكّم
                        </div>
                        <div className="theme-text-primary text-sm font-semibold leading-7">
                          صاحب المتجر
                        </div>
                        <div className="theme-text-secondary text-xs leading-6">
                          يحدّد الأغراض والوسائل
                        </div>
                      </div>
                      <div className="theme-content-card rounded-2xl p-5">
                        <div className="theme-text-secondary mb-1 text-xs uppercase tracking-[0.2em]">
                          المعالج
                        </div>
                        <div className="theme-text-primary text-sm font-semibold leading-7">
                          وصول (Silk Rose)
                        </div>
                        <div className="theme-text-secondary text-xs leading-6">
                          يُنفّذ المعالجة وفق التعليمات
                        </div>
                      </div>
                      <div className="theme-content-card rounded-2xl p-5">
                        <div className="theme-text-secondary mb-1 text-xs uppercase tracking-[0.2em]">
                          صاحب البيانات
                        </div>
                        <div className="theme-text-primary text-sm font-semibold leading-7">
                          عميل المتجر النهائي
                        </div>
                        <div className="theme-text-secondary text-xs leading-6">
                          يملك الحقوق وفق PDPL
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <div className="theme-text-secondary mb-3 text-xs uppercase tracking-[0.24em]">
                        انتقال سريع
                      </div>
                      <QuickNav />
                    </div>

                    <div className="mt-4 space-y-14 leading-9">
                      <LegalSection id="purpose" number="1" title="الغرض">
                        <SectionLede>
                          هذه الاتفاقية تُحدّد كيف يُعالج وصول بيانات عملاء
                          متجرك بالنيابة عنك، ضمن إطار PDPL وأفضل الممارسات
                          الدولية لحماية البيانات.
                        </SectionLede>
                        <p>
                          تُكمّل هذه الاتفاقية{" "}
                          <Link
                            href="/terms"
                            className="text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition hover:decoration-brand-primary"
                          >
                            شروط الاستخدام
                          </Link>{" "}
                          و{" "}
                          <Link
                            href="/privacy"
                            className="text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition hover:decoration-brand-primary"
                          >
                            سياسة الخصوصية
                          </Link>
                          ، ولا تحلّ محلهما. عند أيّ تعارض في النصوص، تسود هذه
                          الاتفاقية فيما يخصّ معالجة بيانات عملاء المتجر.
                        </p>
                      </LegalSection>

                      <LegalSection id="definitions" number="2" title="التعريفات">
                        <SectionLede>
                          مصطلحات هذه الاتفاقية تستخدم نفس المعاني الواردة في
                          نظام حماية البيانات الشخصية السعودي.
                        </SectionLede>
                        <LegalTable
                          headers={["المصطلح", "المعنى"]}
                          rows={[
                            [
                              "متحكّم البيانات",
                              "الطرف الذي يُحدّد أغراض ووسائل معالجة البيانات — صاحب المتجر",
                            ],
                            [
                              "معالج البيانات",
                              "الطرف الذي يُعالج البيانات بالنيابة عن المتحكّم — وصول",
                            ],
                            [
                              "البيانات الشخصية",
                              "أيّ معلومات تتعلّق بفرد قابل للتعريف (عميل المتجر)",
                            ],
                            [
                              "معالجة البيانات",
                              "أيّ عملية تُجرى على البيانات: جمع، تخزين، تحليل، مشاركة، حذف",
                            ],
                            [
                              "المعالج الفرعي",
                              "طرف ثالث يُعالج البيانات بالنيابة عن وصول",
                            ],
                            [
                              "صاحب البيانات",
                              "الفرد الذي تخصّه البيانات الشخصية — عميل المتجر النهائي",
                            ],
                          ]}
                        />
                      </LegalSection>

                      <LegalSection id="roles" number="3" title="دور كلّ طرف">
                        <SectionLede>
                          أنت متحكّم البيانات. وصول معالج لها. لكلٍّ منا
                          مسؤولية محدّدة لا تتداخل.
                        </SectionLede>
                        <LegalTable
                          headers={["الطرف", "الدور", "المسؤولية الرئيسية"]}
                          rows={[
                            [
                              "صاحب المتجر",
                              "Controller (متحكّم)",
                              "تحديد أغراض المعالجة، الحصول على موافقة العملاء، التواصل معهم",
                            ],
                            [
                              "وصول",
                              "Processor (معالج)",
                              "تنفيذ المعالجة وفق تعليمات المتجر، وضمان أمن البيانات",
                            ],
                          ]}
                        />
                      </LegalSection>

                      <LegalSection
                        id="scope"
                        number="4"
                        title="نطاق المعالجة"
                      >
                        <SectionLede>
                          نُعالج فقط البيانات الضرورية لتشغيل الوكيل، ولفترة
                          محدّدة، ولفئات محدّدة من الأفراد.
                        </SectionLede>

                        <h3 className="theme-text-primary mt-6 mb-4 text-lg font-semibold">
                          طبيعة المعالجة
                        </h3>
                        <ul className="space-y-2">
                          <li>الرد الآلي على استفسارات العملاء عبر واتساب.</li>
                          <li>تنفيذ أوامر صاحب المتجر عبر الوكيل الذكي.</li>
                          <li>تتبّع الطلبات والإشعارات التلقائية.</li>
                          <li>تحليل سلوك العملاء لتحسين التجربة.</li>
                        </ul>

                        <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                          فئات البيانات المعالَجة
                        </h3>
                        <ul className="space-y-2">
                          <li>أرقام جوال عملاء المتجر.</li>
                          <li>محتوى المحادثات النصية والصوتية.</li>
                          <li>بيانات الطلبات والمنتجات.</li>
                          <li>تفضيلات العميل وسجل الشراء.</li>
                        </ul>

                        <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                          فئات الأفراد المعنيين
                        </h3>
                        <ul className="space-y-2">
                          <li>عملاء المتجر الحاليون.</li>
                          <li>المتصفّحون والعملاء المحتملون.</li>
                        </ul>
                      </LegalSection>

                      <LegalSection
                        id="processor-obligations"
                        number="5"
                        title="التزامات وصول كمعالج"
                      >
                        <SectionLede>
                          نلتزم بستّة تعهدات أساسية كمعالج للبيانات — تشمل
                          المعالجة وفق التعليمات، السرّية، الأمان، ومساعدة
                          المتحكّم.
                        </SectionLede>
                        <ul className="mt-2 space-y-3">
                          <li>
                            <span className="theme-text-primary font-medium">
                              (أ) المعالجة وفق التعليمات:
                            </span>{" "}
                            معالجة البيانات فقط وفق تعليمات المتجر الموثّقة في
                            لوحة التحكم أو الإعدادات.
                          </li>
                          <li>
                            <span className="theme-text-primary font-medium">
                              (ب) السرّية:
                            </span>{" "}
                            ضمان أنّ جميع الموظفين المخوّلين بالوصول إلى
                            البيانات ملتزمون بالسرّية التعاقدية.
                          </li>
                          <li>
                            <span className="theme-text-primary font-medium">
                              (ج) الأمان:
                            </span>{" "}
                            تطبيق تدابير أمنية تقنية وتنظيمية مناسبة لحماية
                            البيانات من الفقدان أو الوصول غير المصرّح.
                          </li>
                          <li>
                            <span className="theme-text-primary font-medium">
                              (د) مساعدة المتحكّم:
                            </span>{" "}
                            تقديم المساعدة المعقولة للمتجر في الاستجابة لطلبات
                            أصحاب البيانات.
                          </li>
                          <li>
                            <span className="theme-text-primary font-medium">
                              (هـ) الإبلاغ عن الاختراقات:
                            </span>{" "}
                            إبلاغ المتجر دون تأخير عن أيّ اختراق أمني يؤثر على
                            بياناته.
                          </li>
                          <li>
                            <span className="theme-text-primary font-medium">
                              (و) الحذف أو الإرجاع:
                            </span>{" "}
                            حذف أو إرجاع البيانات عند انتهاء الاتفاقية حسب
                            اختيار المتجر.
                          </li>
                        </ul>
                      </LegalSection>

                      <LegalSection
                        id="sub-processors"
                        number="6"
                        title="المعالجون الفرعيون"
                      >
                        <SectionLede>
                          نستعين بمعالجين فرعيين موثوقين لتقديم الخدمة، وكلٌّ
                          منهم ملزم باتفاقية معالجة بيانات مكافئة لحماية
                          مماثلة.
                        </SectionLede>
                        <div className="mt-2">
                          <LegalTable
                            headers={["الجهة", "البلد", "الغرض"]}
                            rows={[
                              [
                                "Hetzner",
                                "ألمانيا",
                                "استضافة البنية التحتية والقواعد",
                              ],
                              [
                                "Anthropic",
                                "الولايات المتحدة",
                                "نماذج معالجة اللغة الطبيعية",
                              ],
                              [
                                "Cerebras / Groq",
                                "الولايات المتحدة",
                                "استدلال الذكاء الاصطناعي السريع",
                              ],
                              [
                                "Evolution API",
                                "البرازيل",
                                "بوابة واتساب للأعمال",
                              ],
                              [
                                "Keycloak",
                                "مدار محلياً",
                                "إدارة الهوية والمصادقة",
                              ],
                              [
                                "منصّة سلة",
                                "المملكة العربية السعودية",
                                "تكامل التجارة الإلكترونية",
                              ],
                            ]}
                          />
                        </div>
                        <LegalCallout label="إشعار التغيير">
                          نُبلّغك مسبقاً بأيّ تغيير في قائمة المعالجين
                          الفرعيين، ويحقّ لك الاعتراض لأسباب جدّية تتعلق
                          بحماية البيانات.
                        </LegalCallout>
                      </LegalSection>

                      <LegalSection
                        id="data-subject-rights"
                        number="7"
                        title="مساعدة المتجر في حقوق الأفراد"
                      >
                        <SectionLede>
                          نوفّر للمتجر الأدوات اللازمة للاستجابة لطلبات عملائه
                          بسرعة وضمن المهل النظامية.
                        </SectionLede>
                        <p>
                          يُقدّم وصول الأدوات اللازمة لتمكين المتجر من
                          الاستجابة لطلبات أصحاب البيانات — بما في ذلك:
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li>تصدير بيانات عميل محدّد بصيغة قابلة للقراءة آلياً.</li>
                          <li>حذف بيانات عميل عند الطلب خلال 30 يوماً.</li>
                          <li>
                            تصحيح أو تقييد معالجة بيانات عميل محدّد عبر لوحة
                            التحكم.
                          </li>
                          <li>
                            كشف شامل بجميع البيانات المخزّنة عن عميل معيّن عند
                            الطلب.
                          </li>
                        </ul>
                      </LegalSection>

                      <LegalSection id="security" number="8" title="الأمن والتشفير">
                        <SectionLede>
                          نطبّق طبقات حماية تقنية وتنظيمية كحدٍّ أدنى، تشمل
                          التشفير، العزل، المراقبة، واختبارات الاختراق.
                        </SectionLede>
                        <ul className="mt-2 space-y-2">
                          <li>التشفير أثناء النقل (TLS 1.3).</li>
                          <li>التشفير في التخزين (AES-256).</li>
                          <li>عزل بيانات كل متجر (multi-tenant isolation).</li>
                          <li>مراقبة مستمرة للأنظمة ومحاولات الوصول.</li>
                          <li>نسخ احتياطية مشفّرة يومياً.</li>
                          <li>اختبارات اختراق دورية (سنوية).</li>
                          <li>مبدأ أقل الامتيازات للوصول الداخلي.</li>
                        </ul>
                      </LegalSection>

                      <LegalSection
                        id="breach"
                        number="9"
                        title="الإبلاغ عن الاختراقات"
                      >
                        <SectionLede>
                          عند أيّ اختراق، نُبلّغك خلال 48 ساعة، ونُبلّغ الجهة
                          التنظيمية خلال 72 ساعة وفق المادة 19 من PDPL.
                        </SectionLede>
                        <p>عند اكتشاف اختراق أمني يؤثر على بيانات متجرك:</p>
                        <ul className="mt-4 space-y-2">
                          <li>
                            نُبلّغك خلال{" "}
                            <span className="theme-text-primary font-semibold">
                              48 ساعة
                            </span>{" "}
                            من الاكتشاف كحدٍّ أقصى.
                          </li>
                          <li>
                            نُبلّغ الهيئة السعودية للبيانات والذكاء الاصطناعي
                            خلال{" "}
                            <span className="theme-text-primary font-semibold">
                              72 ساعة
                            </span>{" "}
                            وفق المادة 19 من PDPL.
                          </li>
                          <li>
                            نُقدّم تقريراً شاملاً يشمل: طبيعة الاختراق،
                            البيانات المتأثرة، الإجراءات التصحيحية، وتقييم
                            الأثر.
                          </li>
                        </ul>
                      </LegalSection>

                      <LegalSection
                        id="audits"
                        number="10"
                        title="التدقيق والمراجعة"
                      >
                        <SectionLede>
                          يحقّ للمتجر التحقّق من امتثالنا عبر تقارير دورية أو
                          تدقيق سنوي بإشعار مسبق.
                        </SectionLede>
                        <p>
                          يحقّ للمتجر طلب معلومات معقولة لإثبات امتثال وصول
                          لالتزامات هذه الاتفاقية، بما في ذلك:
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li>تقارير التدقيق الأمني السنوية.</li>
                          <li>شهادات الامتثال من الأطراف الثالثة.</li>
                          <li>
                            تدقيقات مستقلة مرّة واحدة سنوياً بإشعار مسبق لا
                            يقلّ عن 30 يوماً.
                          </li>
                        </ul>
                      </LegalSection>

                      <LegalSection
                        id="transfers"
                        number="11"
                        title="نقل البيانات الدولي"
                      >
                        <SectionLede>
                          عند نقل البيانات خارج المملكة، نلتزم بضوابط تعاقدية
                          ونظامية تضمن مستوى حماية مكافئاً.
                        </SectionLede>
                        <p>
                          عند نقل البيانات خارج المملكة العربية السعودية،
                          يلتزم وصول بـ:
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li>
                            توقيع شروط تعاقدية موحّدة (SCCs) مع جميع المعالجين
                            الفرعيين.
                          </li>
                          <li>
                            ضمان مستوى حماية مكافئ لمتطلبات نظام حماية البيانات
                            الشخصية.
                          </li>
                          <li>
                            الحصول على الموافقات المطلوبة من SDAIA للنقل عند
                            الاقتضاء.
                          </li>
                        </ul>
                      </LegalSection>

                      <LegalSection
                        id="controller-obligations"
                        number="12"
                        title="التزامات صاحب المتجر كمتحكّم"
                      >
                        <SectionLede>
                          مسؤوليتك كمتحكّم تشمل الحصول على موافقات العملاء
                          وإخبارهم بوجود وكيل ذكاء اصطناعي.
                        </SectionLede>
                        <ul className="mt-2 space-y-2">
                          <li>
                            الحصول على الموافقة الصريحة من عملائك قبل استخدام
                            وصول للتواصل معهم.
                          </li>
                          <li>
                            إخبار العملاء بأنّ وكيل ذكاء اصطناعي سيتولّى الرد
                            عليهم.
                          </li>
                          <li>عدم طلب بيانات حساسة عبر قنوات واتساب.</li>
                          <li>الامتثال لسياسة واتساب للأعمال.</li>
                          <li>
                            تحديث بيانات التواصل وموافقات العملاء بشكل دوري.
                          </li>
                        </ul>
                      </LegalSection>

                      <LegalSection
                        id="termination"
                        number="13"
                        title="انتهاء الاتفاقية"
                      >
                        <SectionLede>
                          عند انتهاء الاشتراك، تُحذف البيانات خلال 30 يوماً —
                          مع نافذة 14 يوماً لطلب نسخة قبل الحذف.
                        </SectionLede>
                        <p>عند إلغاء اشتراك المتجر أو انتهاء الاتفاقية:</p>
                        <ul className="mt-4 space-y-2">
                          <li>
                            تُحذف بيانات العملاء حذفاً آمناً خلال{" "}
                            <span className="theme-text-primary font-semibold">
                              30 يوماً
                            </span>{" "}
                            من تاريخ الانتهاء.
                          </li>
                          <li>
                            يُتاح للمتجر طلب نسخة من بياناته قبل الحذف خلال 14
                            يوماً.
                          </li>
                          <li>
                            تبقى الالتزامات المتعلقة بالسرّية سارية بعد انتهاء
                            الاتفاقية.
                          </li>
                          <li>
                            تُحتفظ سجلات التدقيق فقط لمدة سنة واحدة لأغراض
                            الامتثال.
                          </li>
                        </ul>
                      </LegalSection>
                    </div>

                    <div className="mt-16 rounded-[28px] border theme-border bg-brand-primary/[0.04] p-8">
                      <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.24em]">
                        تواصل مع مسؤول الخصوصية
                      </div>
                      <h3 className="theme-text-primary mb-3 text-xl font-semibold md:text-2xl">
                        تحتاج نسخة موقّعة من DPA أو مراجعة قانونية؟
                      </h3>
                      <p className="theme-text-secondary text-[15px] leading-8">
                        نُوفّر نسخاً موقّعة رسمياً من اتفاقية معالجة البيانات
                        عند الطلب لعملاء الفرق والمؤسسات. يمكنك أيضاً الرجوع
                        للجهة التنظيمية السعودية عبر{" "}
                        <a
                          href="https://pdpl.sdaia.gov.sa"
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition hover:decoration-brand-primary"
                        >
                          pdpl.sdaia.gov.sa
                        </a>
                        .
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                        <a
                          href="mailto:info@wosool.ai?subject=%D8%B7%D9%84%D8%A8%20DPA%20%D9%85%D9%88%D9%82%D8%B9%D8%A9"
                          className="theme-btn-primary inline-flex rounded-full px-5 py-3 font-medium transition"
                        >
                          طلب DPA موقّعة
                        </a>
                        <span className="theme-text-secondary">
                          Silk Rose · جدة، المملكة العربية السعودية ·
                          info@wosool.ai
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <LegalTOC
                sections={sections}
                contactLabel="تحتاج DPA موقّعة؟"
                contactBody="للعملاء من فئة Enterprise، نوفّر DPA موقّعة رسمياً عند الطلب."
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
