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
                <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                  <LegalHeader
                    badge="اتفاقية ملزمة"
                    updatedAt="أبريل 2026"
                    title="اتفاقية معالجة البيانات"
                    extraBadges={["B2B", "PDPL"]}
                    intro="تُنظّم هذه الاتفاقية علاقة معالجة البيانات بين وصول وأصحاب المتاجر الذين يستخدمون المنصّة. تُعدّ جزءاً لا يتجزّأ من شروط الاستخدام، وتسري تلقائياً عند تثبيت التطبيق من متجر تطبيقات سلة."
                  />

                  <div className="mt-14 space-y-14 leading-9">
                    <LegalSection id="purpose" number="1" title="الغرض">
                      <p>
                        تهدف هذه الاتفاقية إلى تنظيم معالجة وصول لبيانات عملاء
                        متجرك وفق متطلبات نظام حماية البيانات الشخصية السعودي
                        (PDPL) وأفضل الممارسات الدولية لحماية البيانات.
                      </p>
                      <p className="mt-4">
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
                        ، ولا تحلّ محلهما.
                      </p>
                    </LegalSection>

                    <LegalSection id="definitions" number="2" title="التعريفات">
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
                            "أي معلومات تتعلّق بفرد قابل للتعريف (عميل المتجر)",
                          ],
                          [
                            "معالجة البيانات",
                            "أي عملية تُجرى على البيانات: جمع، تخزين، تحليل، مشاركة، حذف",
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
                      <h3 className="theme-text-primary mt-2 mb-4 text-lg font-semibold">
                        طبيعة المعالجة
                      </h3>
                      <ul className="space-y-2">
                        <li>الرد الآلي على استفسارات العملاء عبر واتساب</li>
                        <li>تنفيذ أوامر صاحب المتجر عبر الوكيل الذكي</li>
                        <li>تتبّع الطلبات والإشعارات التلقائية</li>
                        <li>تحليل سلوك العملاء لتحسين التجربة</li>
                      </ul>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        فئات البيانات المعالَجة
                      </h3>
                      <ul className="space-y-2">
                        <li>أرقام جوال عملاء المتجر</li>
                        <li>محتوى المحادثات النصية والصوتية</li>
                        <li>بيانات الطلبات والمنتجات</li>
                        <li>تفضيلات العميل وسجل الشراء</li>
                      </ul>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        فئات الأفراد المعنيين
                      </h3>
                      <ul className="space-y-2">
                        <li>عملاء المتجر الحاليون</li>
                        <li>المتصفّحون والعملاء المحتملون</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="processor-obligations"
                      number="5"
                      title="التزامات وصول كمعالج"
                    >
                      <p>يتعهّد وصول بـ:</p>
                      <ul className="mt-4 space-y-3">
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
                          ضمان أن جميع الموظفين المخوّلين بالوصول إلى البيانات
                          ملتزمون بالسرّية التعاقدية.
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
                          إبلاغ المتجر دون تأخير عن أي اختراق أمني يؤثر على
                          بياناته.
                        </li>
                        <li>
                          <span className="theme-text-primary font-medium">
                            (و) الحذف أو الإرجاع:
                          </span>{" "}
                          حذف أو إرجاع البيانات عند انتهاء الاتفاقية حسب اختيار
                          المتجر.
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="sub-processors"
                      number="6"
                      title="المعالجون الفرعيون"
                    >
                      <p>
                        يُصرِّح لوصول بالاستعانة بالمعالجين الفرعيين التاليين
                        لتقديم الخدمة:
                      </p>
                      <div className="mt-6">
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
                      <LegalCallout>
                        نُبلّغك مسبقاً بأيّ تغيير في قائمة المعالجين الفرعيين،
                        ويحقّ لك الاعتراض لأسباب جدّية تتعلق بحماية البيانات.
                      </LegalCallout>
                    </LegalSection>

                    <LegalSection
                      id="data-subject-rights"
                      number="7"
                      title="مساعدة المتجر في حقوق الأفراد"
                    >
                      <p>
                        يُقدّم وصول الأدوات اللازمة لتمكين المتجر من الاستجابة
                        لطلبات أصحاب البيانات — بما في ذلك:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>تصدير بيانات عميل محدّد بصيغة قابلة للقراءة آلياً</li>
                        <li>حذف بيانات عميل عند الطلب خلال 30 يوماً</li>
                        <li>
                          تصحيح أو تقييد معالجة بيانات عميل محدّد عبر لوحة التحكم
                        </li>
                        <li>
                          كشف شامل بجميع البيانات المخزّنة عن عميل معيّن عند الطلب
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection id="security" number="8" title="الأمن والتشفير">
                      <p>يُطبّق وصول التدابير الأمنية التالية كحدّ أدنى:</p>
                      <ul className="mt-4 space-y-2">
                        <li>التشفير أثناء النقل (TLS 1.3)</li>
                        <li>التشفير في التخزين (AES-256)</li>
                        <li>عزل بيانات كل متجر (multi-tenant isolation)</li>
                        <li>مراقبة مستمرة للأنظمة ومحاولات الوصول</li>
                        <li>نسخ احتياطية مشفّرة يومياً</li>
                        <li>اختبارات اختراق دورية (سنوية)</li>
                        <li>مبدأ أقل الامتيازات للوصول الداخلي</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="breach"
                      number="9"
                      title="الإبلاغ عن الاختراقات"
                    >
                      <p>عند اكتشاف اختراق أمني يؤثر على بيانات متجرك:</p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          نُبلّغك خلال{" "}
                          <span className="theme-text-primary font-semibold">
                            48 ساعة
                          </span>{" "}
                          من الاكتشاف كحدٍّ أقصى
                        </li>
                        <li>
                          نُبلّغ الهيئة السعودية للبيانات والذكاء الاصطناعي خلال{" "}
                          <span className="theme-text-primary font-semibold">
                            72 ساعة
                          </span>{" "}
                          وفق المادة 19 من PDPL
                        </li>
                        <li>
                          نُقدّم تقريراً شاملاً يشمل: طبيعة الاختراق، البيانات
                          المتأثرة، الإجراءات التصحيحية، وتقييم الأثر
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="audits"
                      number="10"
                      title="التدقيق والمراجعة"
                    >
                      <p>
                        يحقّ للمتجر طلب معلومات معقولة لإثبات امتثال وصول
                        لالتزامات هذه الاتفاقية، بما في ذلك:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>تقارير التدقيق الأمني السنوية</li>
                        <li>شهادات الامتثال من الأطراف الثالثة</li>
                        <li>
                          تدقيقات مستقلة مرّة واحدة سنوياً بإشعار مسبق لا يقلّ عن
                          30 يوماً
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="transfers"
                      number="11"
                      title="نقل البيانات الدولي"
                    >
                      <p>
                        عند نقل البيانات خارج المملكة العربية السعودية، يلتزم
                        وصول بـ:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          توقيع شروط تعاقدية موحّدة (SCCs) مع جميع المعالجين
                          الفرعيين
                        </li>
                        <li>
                          ضمان مستوى حماية مكافئ لمتطلبات نظام حماية البيانات
                          الشخصية
                        </li>
                        <li>
                          الحصول على الموافقات المطلوبة من SDAIA للنقل عند
                          الاقتضاء
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="controller-obligations"
                      number="12"
                      title="التزامات صاحب المتجر كمتحكّم"
                    >
                      <p>يلتزم صاحب المتجر بـ:</p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          الحصول على الموافقة الصريحة من عملائه قبل استخدام وصول
                          للتواصل معهم
                        </li>
                        <li>
                          إخبار العملاء بأنّ وكيل ذكاء اصطناعي سيتولّى الرد عليهم
                        </li>
                        <li>عدم طلب بيانات حساسة عبر قنوات واتساب</li>
                        <li>الامتثال لسياسة واتساب للأعمال</li>
                        <li>
                          تحديث بيانات التواصل وموافقات العملاء بشكل دوري
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="termination"
                      number="13"
                      title="انتهاء الاتفاقية"
                    >
                      <p>عند إلغاء اشتراك المتجر أو انتهاء الاتفاقية:</p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          تُحذف بيانات العملاء حذفاً آمناً خلال{" "}
                          <span className="theme-text-primary font-semibold">
                            30 يوماً
                          </span>{" "}
                          من تاريخ الانتهاء
                        </li>
                        <li>
                          يُتاح للمتجر طلب نسخة من بياناته قبل الحذف خلال 14
                          يوماً
                        </li>
                        <li>
                          تبقى الالتزامات المتعلقة بالسرّية سارية بعد انتهاء
                          الاتفاقية
                        </li>
                        <li>
                          تُحتفظ سجلات التدقيق فقط لمدة سنة واحدة لأغراض
                          الامتثال
                        </li>
                      </ul>
                    </LegalSection>
                  </div>
                </div>
              </div>

              <LegalTOC
                sections={sections}
                contactLabel="تحتاج DPA موقّعة؟"
                contactBody="للعملاء من فئة Enterprise، نوفّر DPA موقّعة رسمياً عند الطلب."
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
