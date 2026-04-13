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
                <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                  <LegalHeader
                    badge="قانوني"
                    updatedAt="أبريل 2026"
                    title="سياسة الخصوصية"
                    extraBadges={["PDPL متوافق"]}
                    intro="هذه السياسة توضّح كيف يجمع وصول بياناتك الشخصية، لماذا يعالجها، مع من يشاركها، وما الحقوق التي تملكها بموجب نظام حماية البيانات الشخصية السعودي الصادر عن الهيئة السعودية للبيانات والذكاء الاصطناعي (SDAIA)."
                  />

                  <div className="mt-14 space-y-14 leading-9">
                    <LegalSection id="intro" number="1" title="من نحن">
                      <p>
                        وصول منتج تُقدّمه{" "}
                        <span className="theme-text-primary font-semibold">
                          شركة Silk Rose
                        </span>{" "}
                        (&ldquo;الشركة&rdquo;، &ldquo;نحن&rdquo;) — الجهة المالكة
                        والمشغّلة لمنصة وصول للذكاء الاصطناعي لخدمة عملاء
                        المتاجر الإلكترونية على منصة سلة.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          <span className="theme-text-secondary">الشركة المالكة:</span>{" "}
                          Silk Rose
                        </li>
                        <li>
                          <span className="theme-text-secondary">المقر:</span>{" "}
                          المملكة العربية السعودية — جدة
                        </li>
                        <li>
                          <span className="theme-text-secondary">للتواصل:</span>{" "}
                          privacy@wosool.ai
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection id="scope" number="2" title="نطاق السياسة">
                      <p>تسري هذه السياسة على:</p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          أصحاب المتاجر الذين يستخدمون تطبيق وصول
                          (&ldquo;التجار&rdquo;)
                        </li>
                        <li>
                          عملاء المتاجر الذين يتفاعلون مع وكيل وصول عبر واتساب
                          (&ldquo;المستخدمون النهائيون&rdquo;)
                        </li>
                        <li>زوّار موقع wosool.ai</li>
                      </ul>
                    </LegalSection>

                    <LegalSection id="data" number="3" title="البيانات التي نجمعها">
                      <h3 className="theme-text-primary mt-2 mb-4 text-lg font-semibold">
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

                      <LegalCallout>
                        لا نجمع البيانات الحساسة (الصحة، الدين، البيانات المالية
                        التفصيلية) ولا نطلبها من المستخدمين.
                      </LegalCallout>
                    </LegalSection>

                    <LegalSection
                      id="legal-basis"
                      number="4"
                      title="الأساس القانوني للمعالجة"
                    >
                      <p className="theme-text-secondary mb-4 text-sm">
                        وفقاً للمادة 6 من نظام حماية البيانات الشخصية:
                      </p>
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
                      <h3 className="theme-text-primary mt-2 mb-4 text-lg font-semibold">
                        بيانات التجار
                      </h3>
                      <ul className="space-y-2">
                        <li>تشغيل وكيل الذكاء الاصطناعي للمتجر</li>
                        <li>الفوترة وإدارة الاشتراك</li>
                        <li>الدعم الفني وحل المشكلات</li>
                        <li>تحسين المنتج والخدمات</li>
                        <li>الامتثال للمتطلبات القانونية</li>
                      </ul>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        بيانات عملاء المتاجر
                      </h3>
                      <ul className="space-y-2">
                        <li>الرد على استفسارات العملاء</li>
                        <li>تتبع الطلبات وحالة الشحن</li>
                        <li>إرسال التحديثات التلقائية المخوّلة</li>
                        <li>تخصيص تجربة التسوق</li>
                      </ul>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        ما لا نفعله أبداً
                      </h3>
                      <ul className="space-y-2">
                        <li>لا نبيع بياناتك لأي جهة ثالثة</li>
                        <li>
                          لا نستخدم بيانات عملاء المتاجر لأغراض تسويقية مباشرة
                        </li>
                        <li>
                          لا نستخدم محادثات واتساب لتدريب نماذج ذكاء اصطناعي
                          مشتركة — يُسمح فقط بالتدريب الداخلي المعزول لتحسين وكيل
                          متجرك ذاته.
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="sharing"
                      number="6"
                      title="المشاركة مع أطراف ثالثة"
                    >
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
                      <LegalCallout>
                        عند إرسال النصوص لنماذج الذكاء الاصطناعي، يتم إزالة
                        المعرّفات الشخصية (الأسماء، الأرقام، العناوين) قبل
                        المعالجة كلما أمكن.
                      </LegalCallout>
                    </LegalSection>

                    <LegalSection
                      id="ai-disclosure"
                      number="7"
                      title="الإفصاح عن الذكاء الاصطناعي"
                    >
                      <p className="theme-text-secondary mb-4 text-sm">
                        وفقاً لمبادئ SDAIA للذكاء الاصطناعي الأخلاقي (2023):
                      </p>
                      <p>يستخدم وصول الذكاء الاصطناعي لـ:</p>
                      <ul className="mt-3 space-y-2">
                        <li>الرد التلقائي على استفسارات عملاء المتاجر</li>
                        <li>تنفيذ طلبات أصحاب المتاجر</li>
                        <li>تحليل بيانات المتجر وتقديم التوصيات</li>
                      </ul>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        حقوقك المتعلقة بالقرارات الآلية
                      </h3>
                      <ul className="space-y-2">
                        <li>يمكنك طلب مراجعة بشرية لأي قرار آلي يؤثر عليك</li>
                        <li>
                          يمكنك طلب تفعيل وضع المراجعة البشرية (HITL) من التاجر
                        </li>
                        <li>
                          وكيل وصول يُفصح عن كونه ذكاءً اصطناعياً عند السؤال، ولن
                          يدّعي أبداً أنه إنسان
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="retention"
                      number="8"
                      title="مدة الاحتفاظ بالبيانات"
                    >
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
                      <p>
                        خوادمنا الأساسية في ألمانيا (Hetzner). نقل البيانات خارج
                        المملكة يتم وفق الضوابط التالية:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>اتفاقيات معالجة بيانات موقّعة مع جميع الموردين</li>
                        <li>
                          شروط تعاقدية موحّدة (SCCs) مع الجهات خارج المملكة
                        </li>
                        <li>
                          الامتثال للوائح نقل البيانات الصادرة عن الهيئة
                          السعودية للبيانات والذكاء الاصطناعي
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection id="rights" number="10" title="حقوقك">
                      <p className="theme-text-secondary mb-4 text-sm">
                        وفقاً للمواد 9–15 من نظام حماية البيانات الشخصية:
                      </p>
                      <LegalTable
                        headers={["الحق", "الوصف", "كيف تمارسه"]}
                        rows={[
                          [
                            "الاطلاع",
                            "معرفة البيانات التي نحتفظ بها",
                            "privacy@wosool.ai",
                          ],
                          [
                            "التصحيح",
                            "تصحيح بياناتك الخاطئة",
                            "privacy@wosool.ai",
                          ],
                          [
                            "الحذف",
                            "حذف بياناتك نهائياً",
                            "أرسل \u0022احذف بياناتي\u0022 على واتساب",
                          ],
                          [
                            "الاعتراض",
                            "الاعتراض على معالجة معينة",
                            "privacy@wosool.ai",
                          ],
                          [
                            "قابلية النقل",
                            "استلام بياناتك بصيغة قابلة للقراءة آلياً",
                            "privacy@wosool.ai",
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
                      <p>نطبّق التدابير الأمنية التالية:</p>
                      <ul className="mt-4 space-y-2">
                        <li>التشفير في النقل (HTTPS / TLS 1.3)</li>
                        <li>التشفير في التخزين (AES-256)</li>
                        <li>المصادقة متعددة العوامل لحسابات التجار</li>
                        <li>مراجعات أمنية دورية واختبارات اختراق</li>
                        <li>تحديد صلاحيات الوصول وفق مبدأ أقل الامتيازات</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="breach"
                      number="12"
                      title="الإبلاغ عن الاختراقات"
                    >
                      <p>
                        وفقاً للمادة 19 من نظام حماية البيانات الشخصية، في حال
                        وقوع اختراق أمني يؤثر على بياناتك الشخصية:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          نُبلّغ الهيئة السعودية للبيانات والذكاء الاصطناعي خلال{" "}
                          <span className="theme-text-primary font-semibold">
                            72 ساعة
                          </span>{" "}
                          من اكتشاف الاختراق
                        </li>
                        <li>نُبلّغ الأفراد المتأثرين دون تأخير غير مبرّر</li>
                        <li>نتّخذ إجراءات تصحيحية فورية لاحتواء الأثر</li>
                      </ul>
                    </LegalSection>

                    <LegalSection id="complaints" number="13" title="الشكاوى">
                      <p>لتقديم شكوى متعلقة بمعالجة بياناتك الشخصية:</p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          تواصل معنا مباشرة:{" "}
                          <span className="theme-text-primary">
                            privacy@wosool.ai
                          </span>
                        </li>
                        <li>
                          أو تقديم شكوى للهيئة السعودية للبيانات والذكاء
                          الاصطناعي عبر البوابة الرسمية: pdpl.sdaia.gov.sa
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="changes"
                      number="14"
                      title="تعديلات السياسة"
                    >
                      <p>نُبلّغك بأي تغييرات جوهرية على هذه السياسة عبر:</p>
                      <ul className="mt-4 space-y-2">
                        <li>إشعار بالبريد الإلكتروني المسجّل لحسابك</li>
                        <li>إشعار داخل لوحة التحكم</li>
                      </ul>
                      <p className="mt-4">
                        نستمرّ في معالجة بياناتك بموجب السياسة السابقة حتى تاريخ
                        سريان التعديلات.
                      </p>
                    </LegalSection>
                  </div>
                </div>
              </div>

              <LegalTOC
                sections={sections}
                contactLabel="أسئلة حول خصوصيتك؟"
                contactBody="تواصل معنا مباشرة — نستجيب لجميع الطلبات خلال 30 يوماً."
                contactHref="mailto:privacy@wosool.ai"
                contactCta="privacy@wosool.ai"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
