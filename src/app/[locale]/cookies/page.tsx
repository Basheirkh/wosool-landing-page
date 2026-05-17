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
                    updatedAt="16 مايو 2026"
                    title="سياسة ملفات الارتباط"
                    intro="نستخدم الحدّ الأدنى من ملفات الارتباط — فقط ما يلزم لتشغيل المنصة، وحفظ تفضيلاتك، وتحسين تجربتك. هذه الصفحة تشرح كلّ ملفّ بالاسم والغرض والمدّة، وكيف توقفه إن أردت."
                    extraBadges={["3 فئات فقط", "بدون كوكيز تسويقية"]}
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
                      id="what"
                      number="1"
                      title="ما هي ملفات الارتباط"
                    >
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        ملفات نصّية صغيرة يُخزّنها متصفحك لتذكّر من أنت وما
                        تُفضّله.
                      </p>
                      <p className="mt-5">
                        تُستخدَم ملفات الارتباط (Cookies) لتمكين الوظائف
                        الأساسية مثل تسجيل الدخول وحفظ الجلسة، ولتذكّر تفضيلاتك
                        بين الزيارات، ولفهم كيفية استخدام الموقع بهدف تحسينه.
                      </p>
                    </LegalSection>

                    <LegalSection
                      id="types"
                      number="2"
                      title="الكوكيز التي نستخدمها"
                    >
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        ثلاث فئات فقط — ولا شيء يُستخدَم لأغراض إعلانية أو
                        تتبّع بين المواقع.
                      </p>

                      <h3 className="theme-text-primary mt-8 mb-4 text-lg font-semibold">
                        الفئات والتحكم
                      </h3>
                      <LegalTable
                        headers={["الفئة", "الغرض", "المدّة", "إيقاف"]}
                        rows={[
                          [
                            "ضرورية",
                            "تشغيل الموقع، الجلسة، والمصادقة",
                            "حتى 14 يوماً",
                            "غير ممكن — الموقع لن يعمل بدونها",
                          ],
                          [
                            "وظيفية",
                            "تذكّر تفضيلاتك (الثيم، اللغة، لوحة التحكم)",
                            "30 يوماً",
                            "من إعدادات المتصفح",
                          ],
                          [
                            "تحليلية",
                            "قياس الاستخدام وتحسين الموقع",
                            "90 يوماً",
                            "من إعدادات المتصفح",
                          ],
                        ]}
                      />

                      <h3 className="theme-text-primary mt-10 mb-4 text-lg font-semibold">
                        تفاصيل الملفات
                      </h3>
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
                    </LegalSection>

                    <LegalSection
                      id="control"
                      number="3"
                      title="التحكم في الكوكيز"
                    >
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        التحكم بيدك — من متصفحك، في أي وقت.
                      </p>
                      <p className="mt-5">
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        نختار شركاءنا بعناية — ولا نسمح بكوكيز خارج نطاق
                        التحليل التشغيلي.
                      </p>
                      <p className="mt-5">
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
                      <p className="theme-text-primary text-[17px] font-medium leading-9">
                        أيّ تغيير جوهري يصلك عبر إشعار في الموقع.
                      </p>
                      <p className="mt-5">
                        قد نُحدّث هذه السياسة من وقت لآخر لتعكس أي تغيير في
                        أدواتنا أو متطلبات قانونية جديدة. التحديثات الشكلية قد
                        تسري فور النشر دون إشعار مسبق.
                      </p>
                    </LegalSection>
                  </div>

                  <div className="mt-16 rounded-3xl border border-brand-primary/15 bg-brand-primary/[0.05] p-6 md:p-8">
                    <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.24em]">
                      أسئلة حول الكوكيز؟
                    </div>
                    <h3 className="theme-text-primary mb-3 text-xl font-semibold md:text-2xl">
                      نوضّح لك كل تفصيل تقني تحتاجه.
                    </h3>
                    <p className="theme-text-secondary mb-5 text-[15px] leading-8">
                      راسلنا على البريد أدناه لأي استفسار حول ملفات الارتباط
                      وكيف نستخدمها.
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
