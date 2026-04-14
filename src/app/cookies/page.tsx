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
  title: "سياسة ملفات الارتباط — وصول",
  description:
    "أنواع الكوكيز التي يستخدمها موقع وصول، أغراضها، ومدّة تخزينها، وكيفية التحكم بها من متصفحك.",
};

const sections = [
  { id: "what", title: "ما هي ملفات الارتباط" },
  { id: "types", title: "الكوكيز التي نستخدمها" },
  { id: "control", title: "التحكم في الكوكيز" },
  { id: "third-party", title: "الكوكيز من أطراف ثالثة" },
  { id: "updates", title: "تحديثات السياسة" },
];

export default function CookiesPage() {
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
                    title="سياسة ملفات الارتباط"
                    intro="تشرح هذه السياسة أنواع ملفات الارتباط (Cookies) التي يستخدمها موقع وصول، الغرض من كلّ منها، ومدّة تخزينها، وكيف يمكنك التحكم بها من إعدادات متصفحك."
                  />

                  <div className="mt-14 space-y-14 leading-9">
                    <LegalSection
                      id="what"
                      number="1"
                      title="ما هي ملفات الارتباط"
                    >
                      <p>
                        ملفات الارتباط (Cookies) هي ملفات نصية صغيرة تُخزَّن على
                        متصفحك عند زيارة المواقع الإلكترونية. تُستخدَم لتذكّر
                        تفضيلاتك، وتحسين تجربتك، وتمكين بعض الوظائف الأساسية
                        للموقع مثل تسجيل الدخول وحفظ الجلسة.
                      </p>
                    </LegalSection>

                    <LegalSection
                      id="types"
                      number="2"
                      title="الكوكيز التي نستخدمها"
                    >
                      <LegalTable
                        headers={["الاسم", "النوع", "الغرض", "المدّة"]}
                        rows={[
                          [
                            "session_id",
                            "ضرورية",
                            "إدارة الجلسة والمصادقة",
                            "الجلسة",
                          ],
                          [
                            "auth_token",
                            "ضرورية",
                            "الحفاظ على تسجيل الدخول",
                            "14 يوماً",
                          ],
                          [
                            "workspace_pref",
                            "وظيفية",
                            "تفضيلات لوحة التحكم (الثيم، اللغة)",
                            "30 يوماً",
                          ],
                          [
                            "_analytics",
                            "تحليلية",
                            "قياس الاستخدام وتحسين الموقع",
                            "90 يوماً",
                          ],
                        ]}
                      />

                      <h3 className="theme-text-primary mt-10 mb-4 text-lg font-semibold">
                        الفئات
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <span className="theme-text-primary font-medium">
                            ضرورية:
                          </span>{" "}
                          لا يمكن إيقافها — الموقع لن يعمل بدونها.
                        </li>
                        <li>
                          <span className="theme-text-primary font-medium">
                            وظيفية:
                          </span>{" "}
                          لتذكّر تفضيلاتك بين الزيارات.
                        </li>
                        <li>
                          <span className="theme-text-primary font-medium">
                            تحليلية:
                          </span>{" "}
                          لفهم كيفية استخدام الموقع وتحسينه — يمكن إيقافها.
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="control"
                      number="3"
                      title="التحكم في الكوكيز"
                    >
                      <p>
                        يمكنك حذف ملفات الارتباط أو حظرها من إعدادات متصفحك في
                        أي وقت. لاحِظ أن إيقاف الكوكيز الضرورية سيمنع الموقع من
                        العمل بشكل صحيح.
                      </p>
                      <p className="mt-4">
                        يتمّ تسجيل قبولك لملفات الارتباط عبر شريط الإشعار الذي
                        يظهر عند أول زيارة للموقع. يمكنك سحب هذا القبول في أي
                        وقت عبر مسح الكوكيز من متصفحك.
                      </p>
                    </LegalSection>

                    <LegalSection
                      id="third-party"
                      number="4"
                      title="الكوكيز من أطراف ثالثة"
                    >
                      <p>
                        قد يستخدم موقعنا بعض الخدمات من أطراف ثالثة (مثل أدوات
                        التحليل) التي تضع كوكيز خاصة بها. هذه الكوكيز تخضع
                        لسياسات خصوصية تلك الجهات، ونحن نختار فقط الموردين الذين
                        يلتزمون بمعايير حماية البيانات.
                      </p>
                    </LegalSection>

                    <LegalSection
                      id="updates"
                      number="5"
                      title="تحديثات السياسة"
                    >
                      <p>
                        قد نُحدّث هذه السياسة من وقت لآخر لتعكس أي تغيير في
                        أدواتنا أو متطلبات قانونية جديدة. نُبلّغك بالتغييرات
                        الجوهرية عبر إشعار في الموقع.
                      </p>
                    </LegalSection>
                  </div>
                </div>
              </div>

              <LegalTOC
                sections={sections}
                contactLabel="أسئلة حول الكوكيز؟"
                contactBody="تواصل معنا لأي استفسار حول ملفات الارتباط وكيف نستخدمها."
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
