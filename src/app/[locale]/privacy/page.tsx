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
  title: "سياسة الخصوصية — وصول",
  description:
    "كيف يجمع وصول البيانات، لماذا يعالجها، ومع من يشاركها — متوافق مع نظام حماية البيانات الشخصية السعودي (PDPL).",
};

const sections = [
  { id: "intro", title: "من نحن" },
  { id: "scope", title: "نطاق السياسة" },
  { id: "data", title: "البيانات التي نجمعها" },
  { id: "legal-basis", title: "الأساس القانوني للمعالجة" },
  { id: "usage", title: "كيف نستخدم البيانات" },
  { id: "sharing", title: "المشاركة مع أطراف ثالثة" },
  { id: "ai-disclosure", title: "الإفصاح عن الذكاء الاصطناعي" },
  { id: "retention", title: "مدة الاحتفاظ بالبيانات" },
  { id: "transfers", title: "نقل البيانات خارج المملكة" },
  { id: "rights", title: "حقوقك" },
  { id: "security", title: "أمان البيانات" },
  { id: "breach", title: "الإبلاغ عن الاختراقات" },
  { id: "complaints", title: "الشكاوى" },
  { id: "changes", title: "تعديلات السياسة" },
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

export default function PrivacyPage() {
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
                      badge="قانوني"
                      updatedAt="2026-05-16"
                      title="سياسة الخصوصية"
                      extraBadges={["PDPL متوافق", "v3.2"]}
                      intro="هذه السياسة توضّح كيف يجمع وصول بياناتك الشخصية، لماذا يعالجها، مع من يشاركها، وما الحقوق التي تملكها بموجب نظام حماية البيانات الشخصية السعودي الصادر عن الهيئة السعودية للبيانات والذكاء الاصطناعي (SDAIA)."
                    />

                    <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
                      <a
                        href="mailto:info@wosool.ai?subject=%D8%B7%D9%84%D8%A8%20%D9%86%D8%B3%D8%AE%D8%A9%20PDF%20%D9%85%D9%86%20%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9"
                        className="theme-chip theme-text-primary rounded-full px-4 py-2 transition hover:opacity-80"
                      >
                        طلب نسخة PDF
                      </a>
                      <a
                        href="mailto:info@wosool.ai?subject=%D8%B3%D8%A4%D8%A7%D9%84%20%D8%AD%D9%88%D9%84%20%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9"
                        className="theme-chip theme-text-primary rounded-full px-4 py-2 transition hover:opacity-80"
                      >
                        تواصل مع مسؤول الخصوصية
                      </a>
                      <Link
                        href="/dpa"
                        className="theme-chip theme-text-primary rounded-full px-4 py-2 transition hover:opacity-80"
                      >
                        اتفاقية معالجة البيانات (DPA)
                      </Link>
                    </div>

                    <div className="mt-10">
                      <div className="theme-text-secondary mb-3 text-xs uppercase tracking-[0.24em]">
                        انتقال سريع
                      </div>
                      <QuickNav />
                    </div>

                    <div className="mt-4 space-y-14 leading-9">
                      <LegalSection id="intro" number="1" title="من نحن">
                        <SectionLede>
                          وصول منتج سعودي تُشغّله شركة Silk Rose من جدة، ويخدم
                          متاجر سلة عبر وكيل ذكاء اصطناعي متّصل بواتساب.
                        </SectionLede>
                        <p>
                          نتعامل مع البيانات بصفتنا{" "}
                          <span className="theme-text-primary font-semibold">
                            شركة Silk Rose
                          </span>{" "}
                          (&ldquo;الشركة&rdquo;، &ldquo;نحن&rdquo;) — الجهة
                          المالكة والمشغّلة لمنصة وصول للذكاء الاصطناعي
                          المخصّصة لخدمة عملاء المتاجر الإلكترونية على منصة سلة.
                        </p>
                        <ul className="mt-5 space-y-2">
                          <li>
                            <span className="theme-text-secondary">الشركة المالكة:</span>{" "}
                            Silk Rose
                          </li>
                          <li>
                            <span className="theme-text-secondary">المقر:</span>{" "}
                            المملكة العربية السعودية — جدة
                          </li>
                          <li>
                            <span className="theme-text-secondary">مسؤول الخصوصية:</span>{" "}
                            info@wosool.ai
                          </li>
                        </ul>
                      </LegalSection>

                      <LegalSection id="scope" number="2" title="نطاق السياسة">
                        <SectionLede>
                          تنطبق هذه السياسة على كل من يتعامل مع وصول — تاجراً
                          كان أم عميلاً نهائياً أم زائراً للموقع.
                        </SectionLede>
                        <ul className="mt-2 space-y-2">
                          <li>
                            أصحاب المتاجر الذين يستخدمون تطبيق وصول
                            (&ldquo;التجار&rdquo;).
                          </li>
                          <li>
                            عملاء المتاجر الذين يتفاعلون مع وكيل وصول عبر واتساب
                            (&ldquo;المستخدمون النهائيون&rdquo;).
                          </li>
                          <li>زوّار موقع wosool.ai.</li>
                        </ul>
                      </LegalSection>

                      <LegalSection id="data" number="3" title="البيانات التي نجمعها">
                        <SectionLede>
                          نجمع الحدّ الأدنى من البيانات اللازمة لتشغيل الوكيل،
                          ولا نطلب أيّ بيانات حسّاسة من التجار أو عملائهم.
                        </SectionLede>

                        <h3 className="theme-text-primary mt-6 mb-4 text-lg font-semibold">
                          بيانات التجار (أصحاب المتاجر)
                        </h3>
                        <LegalTable
                          headers={["نوع البيانات", "المثال", "الغرض"]}
                          rows={[
                            [
                              "بيانات الحساب",
                              "الاسم، البريد، رقم الجوال",
                              "إنشاء وإدارة الحساب",
                            ],
                            [
                              "بيانات المتجر",
                              "اسم المتجر، المنتجات، الطلبات",
                              "تشغيل الوكيل الذكي",
                            ],
                            [
                              "بيانات الدفع",
                              "طريقة الدفع (نعالجها عبر سلة)",
                              "الفوترة والاشتراكات",
                            ],
                            [
                              "بيانات الاستخدام",
                              "سجلات النشاط، المحادثات",
                              "تحسين الخدمة",
                            ],
                            [
                              "بيانات التكامل",
                              "رموز OAuth من سلة",
                              "ربط المتجر بوصول",
                            ],
                          ]}
                        />

                        <h3 className="theme-text-primary mt-10 mb-4 text-lg font-semibold">
                          بيانات عملاء المتاجر (المستخدمون النهائيون)
                        </h3>
                        <LegalTable
                          headers={["نوع البيانات", "المثال", "الغرض"]}
                          rows={[
                            ["رقم الجوال", "+9665xxxxxxxx", "التعرف على العميل"],
                            [
                              "محتوى المحادثات",
                              "رسائل واتساب",
                              "الرد الآلي عبر الوكيل",
                            ],
                            [
                              "بيانات الطلبات",
                              "أرقام الطلبات، التتبع",
                              "خدمة العملاء",
                            ],
                            [
                              "تفضيلات العميل",
                              "المنتجات المفضلة",
                              "تخصيص التجربة",
                            ],
                          ]}
                        />

                        <LegalCallout label="الخلاصة">
                          لا نجمع البيانات الحسّاسة (الصحة، الدين، البيانات
                          المالية التفصيلية) ولا نطلبها من المستخدمين، ولا
                          نُخزّن أرقام بطاقات الدفع — يتولّى ذلك سلة عبر مزوّد
                          الدفع المعتمد لديه.
                        </LegalCallout>
                      </LegalSection>

                      <LegalSection
                        id="legal-basis"
                        number="4"
                        title="الأساس القانوني للمعالجة"
                      >
                        <SectionLede>
                          لكل نوع بيانات أساس قانوني واضح وفق المادة 6 من نظام
                          حماية البيانات الشخصية.
                        </SectionLede>
                        <LegalTable
                          headers={["البيانات", "الأساس القانوني"]}
                          rows={[
                            [
                              "بيانات حساب التاجر",
                              "تنفيذ العقد (اتفاقية الاستخدام)",
                            ],
                            [
                              "بيانات عملاء المتاجر",
                              "موافقة صريحة + مصلحة مشروعة",
                            ],
                            ["بيانات التحليل", "مصلحة مشروعة لتحسين الخدمة"],
                            ["البريد التسويقي", "موافقة صريحة قابلة للسحب"],
                          ]}
                        />
                      </LegalSection>

                      <LegalSection id="usage" number="5" title="كيف نستخدم البيانات">
                        <SectionLede>
                          نستخدم البيانات لتشغيل الوكيل وتحسين الخدمة فقط — لا
                          بيع، لا تسويق مباشر لعملاء المتاجر، ولا تدريب نماذج
                          مشتركة.
                        </SectionLede>

                        <h3 className="theme-text-primary mt-6 mb-4 text-lg font-semibold">
                          بيانات التجار
                        </h3>
                        <ul className="space-y-2">
                          <li>تشغيل وكيل الذكاء الاصطناعي للمتجر.</li>
                          <li>الفوترة وإدارة الاشتراك.</li>
                          <li>الدعم الفني وحلّ المشكلات.</li>
                          <li>تحسين المنتج والخدمات.</li>
                          <li>الامتثال للمتطلبات القانونية.</li>
                        </ul>

                        <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                          بيانات عملاء المتاجر
                        </h3>
                        <ul className="space-y-2">
                          <li>الرد على استفسارات العملاء.</li>
                          <li>تتبع الطلبات وحالة الشحن.</li>
                          <li>إرسال التحديثات التلقائية المخوّلة.</li>
                          <li>تخصيص تجربة التسوق.</li>
                        </ul>

                        <LegalCallout label="ما لا نفعله أبداً">
                          لا نبيع بياناتك لأيّ جهة ثالثة، ولا نستخدم بيانات
                          عملاء المتاجر لأغراض تسويقية مباشرة، ولا نستخدم
                          محادثات واتساب لتدريب نماذج ذكاء اصطناعي مشتركة —
                          يُسمح فقط بالتدريب الداخلي المعزول لتحسين وكيل متجرك
                          ذاته.
                        </LegalCallout>
                      </LegalSection>

                      <LegalSection
                        id="sharing"
                        number="6"
                        title="المشاركة مع أطراف ثالثة"
                      >
                        <SectionLede>
                          نُشارك الحدّ الأدنى من البيانات مع موردين موثوقين
                          فقط، وكلٌّ منهم مرتبط معنا باتفاقية معالجة بيانات
                          ملزمة.
                        </SectionLede>
                        <LegalTable
                          headers={["الجهة", "نوع البيانات", "الغرض"]}
                          rows={[
                            [
                              "منصة سلة",
                              "بيانات المتجر والطلبات",
                              "تكامل التجارة الإلكترونية",
                            ],
                            [
                              "Anthropic / Cerebras / Groq",
                              "نصوص المحادثات (مجهّلة)",
                              "معالجة اللغة الطبيعية",
                            ],
                            [
                              "Evolution API",
                              "رقم الجوال ومحتوى الرسائل",
                              "إرسال رسائل واتساب",
                            ],
                            [
                              "Hetzner",
                              "جميع البيانات (مخزّنة)",
                              "استضافة الخوادم",
                            ],
                            [
                              "Keycloak",
                              "بيانات المصادقة",
                              "إدارة الهوية",
                            ],
                          ]}
                        />
                        <LegalCallout label="إزالة المعرّفات">
                          عند إرسال النصوص لنماذج الذكاء الاصطناعي، يتم إزالة
                          المعرّفات الشخصية (الأسماء، الأرقام، العناوين) قبل
                          المعالجة كلما أمكن ذلك تقنياً.
                        </LegalCallout>
                      </LegalSection>

                      <LegalSection
                        id="ai-disclosure"
                        number="7"
                        title="الإفصاح عن الذكاء الاصطناعي"
                      >
                        <SectionLede>
                          نتعامل بشفافية كاملة مع كل من يتحدّث للوكيل وفق مبادئ
                          SDAIA للذكاء الاصطناعي الأخلاقي (2023).
                        </SectionLede>
                        <p>يستخدم وصول الذكاء الاصطناعي لـ:</p>
                        <ul className="mt-3 space-y-2">
                          <li>الرد التلقائي على استفسارات عملاء المتاجر.</li>
                          <li>تنفيذ طلبات أصحاب المتاجر.</li>
                          <li>تحليل بيانات المتجر وتقديم التوصيات.</li>
                        </ul>

                        <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                          حقوقك المتعلقة بالقرارات الآلية
                        </h3>
                        <ul className="space-y-2">
                          <li>يمكنك طلب مراجعة بشرية لأيّ قرار آلي يؤثر عليك.</li>
                          <li>
                            يمكنك طلب تفعيل وضع المراجعة البشرية (HITL) من
                            التاجر.
                          </li>
                          <li>
                            وكيل وصول يُفصح عن كونه ذكاءً اصطناعياً عند السؤال،
                            ولن يدّعي أبداً أنه إنسان.
                          </li>
                        </ul>
                      </LegalSection>

                      <LegalSection
                        id="retention"
                        number="8"
                        title="مدة الاحتفاظ بالبيانات"
                      >
                        <SectionLede>
                          نحتفظ بكل نوع بيانات للمدة اللازمة فقط، ثم نحذفه أو
                          نُجهّله تلقائياً.
                        </SectionLede>
                        <LegalTable
                          headers={["نوع البيانات", "مدة الاحتفاظ"]}
                          rows={[
                            ["محادثات العملاء", "30 يوماً من آخر تفاعل"],
                            ["بيانات الطلبات", "90 يوماً لأغراض الدعم"],
                            [
                              "بيانات حساب التاجر",
                              "طوال مدة الاشتراك + 30 يوماً",
                            ],
                            ["سجلات التدقيق", "سنة واحدة"],
                            ["بيانات الفوترة", "5 سنوات (التزام قانوني)"],
                          ]}
                        />
                      </LegalSection>

                      <LegalSection
                        id="transfers"
                        number="9"
                        title="نقل البيانات خارج المملكة"
                      >
                        <SectionLede>
                          خوادمنا الأساسية خارج المملكة، لذا نلتزم بضوابط نقل
                          صارمة لضمان مستوى حماية مكافئ.
                        </SectionLede>
                        <p>
                          خوادمنا الأساسية في ألمانيا (Hetzner). نقل البيانات
                          خارج المملكة يتم وفق الضوابط التالية:
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li>اتفاقيات معالجة بيانات موقّعة مع جميع الموردين.</li>
                          <li>
                            شروط تعاقدية موحّدة (SCCs) مع الجهات خارج المملكة.
                          </li>
                          <li>
                            الامتثال للوائح نقل البيانات الصادرة عن الهيئة
                            السعودية للبيانات والذكاء الاصطناعي.
                          </li>
                        </ul>
                      </LegalSection>

                      <LegalSection id="rights" number="10" title="حقوقك">
                        <SectionLede>
                          تملك حقوقاً كاملة على بياناتك وفق المواد 9–15 من نظام
                          حماية البيانات الشخصية — ونردّ على طلباتك خلال 30
                          يوماً كحدٍّ أقصى.
                        </SectionLede>
                        <LegalTable
                          headers={["الحق", "الوصف", "كيف تمارسه"]}
                          rows={[
                            [
                              "الاطلاع",
                              "معرفة البيانات التي نحتفظ بها",
                              "info@wosool.ai",
                            ],
                            [
                              "التصحيح",
                              "تصحيح بياناتك الخاطئة",
                              "info@wosool.ai",
                            ],
                            [
                              "الحذف",
                              "حذف بياناتك نهائياً",
                              "أرسل «احذف بياناتي» على واتساب",
                            ],
                            [
                              "الاعتراض",
                              "الاعتراض على معالجة معينة",
                              "info@wosool.ai",
                            ],
                            [
                              "قابلية النقل",
                              "استلام بياناتك بصيغة قابلة للقراءة آلياً",
                              "info@wosool.ai",
                            ],
                          ]}
                        />
                        <p className="mt-6">
                          نستجيب لجميع الطلبات خلال{" "}
                          <span className="theme-text-primary font-semibold">
                            30 يوماً
                          </span>{" "}
                          من استلامها.
                        </p>
                      </LegalSection>

                      <LegalSection id="security" number="11" title="أمان البيانات">
                        <SectionLede>
                          نطبّق طبقات حماية متعدّدة على البيانات في النقل
                          والتخزين، مع مراجعات أمنية دورية.
                        </SectionLede>
                        <ul className="mt-2 space-y-2">
                          <li>التشفير في النقل (HTTPS / TLS 1.3).</li>
                          <li>التشفير في التخزين (AES-256).</li>
                          <li>المصادقة متعددة العوامل لحسابات التجار.</li>
                          <li>مراجعات أمنية دورية واختبارات اختراق.</li>
                          <li>تحديد صلاحيات الوصول وفق مبدأ أقل الامتيازات.</li>
                        </ul>
                      </LegalSection>

                      <LegalSection
                        id="breach"
                        number="12"
                        title="الإبلاغ عن الاختراقات"
                      >
                        <SectionLede>
                          في حال وقوع اختراق، نتحرّك خلال ساعات لا أيام، ونُبلّغ
                          الهيئة المختصّة والأفراد المتأثرين وفق مواعيد
                          مُحدّدة.
                        </SectionLede>
                        <p>
                          وفقاً للمادة 19 من نظام حماية البيانات الشخصية، في
                          حال وقوع اختراق أمني يؤثر على بياناتك الشخصية:
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li>
                            نُبلّغ الهيئة السعودية للبيانات والذكاء الاصطناعي
                            خلال{" "}
                            <span className="theme-text-primary font-semibold">
                              72 ساعة
                            </span>{" "}
                            من اكتشاف الاختراق.
                          </li>
                          <li>نُبلّغ الأفراد المتأثرين دون تأخير غير مبرّر.</li>
                          <li>نتّخذ إجراءات تصحيحية فورية لاحتواء الأثر.</li>
                        </ul>
                      </LegalSection>

                      <LegalSection id="complaints" number="13" title="الشكاوى">
                        <SectionLede>
                          إذا لم تكن راضياً عن طريقتنا في معالجة بياناتك، لديك
                          قناتان واضحتان لتقديم الشكوى.
                        </SectionLede>
                        <ul className="mt-2 space-y-2">
                          <li>
                            تواصل معنا مباشرة:{" "}
                            <span className="theme-text-primary">
                              info@wosool.ai
                            </span>
                            .
                          </li>
                          <li>
                            أو قدّم شكوى للهيئة السعودية للبيانات والذكاء
                            الاصطناعي عبر البوابة الرسمية:{" "}
                            <a
                              href="https://pdpl.sdaia.gov.sa"
                              target="_blank"
                              rel="noreferrer"
                              className="text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition hover:decoration-brand-primary"
                            >
                              pdpl.sdaia.gov.sa
                            </a>
                            .
                          </li>
                        </ul>
                      </LegalSection>

                      <LegalSection
                        id="changes"
                        number="14"
                        title="تعديلات السياسة"
                      >
                        <SectionLede>
                          أيّ تعديل جوهري على هذه السياسة لن يُفاجئك — ستصلك
                          إشعارات قبل دخوله حيّز التنفيذ.
                        </SectionLede>
                        <p>نُبلّغك بأيّ تغييرات جوهرية على هذه السياسة عبر:</p>
                        <ul className="mt-4 space-y-2">
                          <li>إشعار بالبريد الإلكتروني المسجّل لحسابك.</li>
                          <li>إشعار داخل لوحة التحكم.</li>
                        </ul>
                        <p className="mt-4">
                          نستمرّ في معالجة بياناتك بموجب السياسة السابقة حتى
                          تاريخ سريان التعديلات.
                        </p>
                      </LegalSection>
                    </div>

                    <div className="mt-16 rounded-[28px] border theme-border bg-brand-primary/[0.04] p-8">
                      <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.24em]">
                        تواصل مع مسؤول الخصوصية
                      </div>
                      <h3 className="theme-text-primary mb-3 text-xl font-semibold md:text-2xl">
                        أسئلة، طلبات حقوق، أو شكاوى — كلّها على بريد واحد.
                      </h3>
                      <p className="theme-text-secondary text-[15px] leading-8">
                        نلتزم بالردّ خلال 30 يوماً كحدٍّ أقصى وفق نظام حماية
                        البيانات الشخصية السعودي. كما يمكنك الرجوع للجهة
                        التنظيمية عبر{" "}
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
                          href="mailto:info@wosool.ai"
                          className="theme-btn-primary inline-flex rounded-full px-5 py-3 font-medium transition"
                        >
                          info@wosool.ai
                        </a>
                        <span className="theme-text-secondary">
                          Silk Rose · جدة، المملكة العربية السعودية
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <LegalTOC
                sections={sections}
                contactLabel="أسئلة حول خصوصيتك؟"
                contactBody="تواصل معنا مباشرة — نستجيب لجميع الطلبات خلال 30 يوماً."
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
