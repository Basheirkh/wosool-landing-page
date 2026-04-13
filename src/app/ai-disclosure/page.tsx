import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import {
  LegalCallout,
  LegalHeader,
  LegalSection,
  LegalTOC,
} from "@/components/legal/LegalPrimitives";

export const metadata: Metadata = {
  title: "الإفصاح عن الذكاء الاصطناعي — وصول",
  description:
    "كيف يعمل الذكاء الاصطناعي في وصول وفق مبادئ SDAIA للأخلاقيات — الشفافية، العدالة، المساءلة، والحوكمة البشرية.",
};

const sections = [
  { id: "what", title: "ما هو وصول" },
  { id: "principles", title: "مبادئنا الأخلاقية" },
  { id: "how", title: "كيف يعمل الوكيل" },
  { id: "limits", title: "حدود الذكاء الاصطناعي" },
  { id: "human-review", title: "المراجعة البشرية" },
  { id: "correction", title: "التصحيح والتعلّم" },
  { id: "rights", title: "حقوقك" },
  { id: "governance", title: "الحوكمة الداخلية" },
];

export default function AiDisclosurePage() {
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
              <span>حوكمة</span>
            </div>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                  <LegalHeader
                    badge="حوكمة AI"
                    updatedAt="أبريل 2026"
                    title="الإفصاح عن الذكاء الاصطناعي"
                    extraBadges={["SDAIA AI Ethics 2023"]}
                    intro="نحن نلتزم بمبادئ الهيئة السعودية للبيانات والذكاء الاصطناعي (SDAIA) للذكاء الاصطناعي الأخلاقي. هذه الصفحة تُفصح بوضوح كيف يعمل وصول، ما يستطيع وما لا يستطيع، وكيف تحتفظ بالسيطرة الكاملة على القرارات التي تؤثر على متجرك وعملائك."
                  />

                  <div className="mt-14 space-y-14 leading-9">
                    <LegalSection id="what" number="1" title="ما هو وصول">
                      <p>
                        وصول هو نظام ذكاء اصطناعي — وليس إنساناً. يعمل نيابةً
                        عن أصحاب المتاجر الإلكترونية لخدمة عملائهم، تنفيذ
                        أوامرهم، وتقديم تحليلات ذكية لمتاجرهم.
                      </p>
                      <p className="mt-4">
                        الوكيل يُفصح دائماً عن كونه ذكاءً اصطناعياً عند السؤال،
                        ولن يدّعي أبداً أنه إنسان. هذا مبدأ ثابت لا يُخرق تحت أي
                        ظرف.
                      </p>
                    </LegalSection>

                    <LegalSection
                      id="principles"
                      number="2"
                      title="مبادئنا الأخلاقية"
                    >
                      <div className="grid gap-5 md:grid-cols-2">
                        {[
                          {
                            title: "الشفافية",
                            body: "نُفصح عن أنّ التفاعل مع وكيل ذكاء اصطناعي، ونشرح بوضوح كيف نستخدم البيانات لاتخاذ القرارات.",
                          },
                          {
                            title: "العدالة",
                            body: "النظام مصمَّم لخدمة جميع العملاء بمساواة، بدون تمييز مبني على اللهجة أو الموقع أو أي خاصية شخصية.",
                          },
                          {
                            title: "المساءلة",
                            body: "صاحب المتجر هو المسؤول النهائي عن ردود وكيله، وبإمكانه دائماً المراجعة والتصحيح والإيقاف.",
                          },
                          {
                            title: "الشمولية",
                            body: "مبني من الأساس بالعربية الفصحى ولهجات الخليج، ليخدم السوق المحلّي بجودة تفوق الترجمة الحرفية.",
                          },
                          {
                            title: "الخصوصية بالتصميم",
                            body: "نُطبّق الحدّ الأدنى من جمع البيانات، ونُزيل المعرّفات الشخصية قبل إرسال النصوص لنماذج المعالجة.",
                          },
                          {
                            title: "السلامة",
                            body: "لا نتعامل مع الاستشارات الطبية أو القانونية أو المالية الحرجة، ونُحيل تلقائياً لصاحب المتجر عند الحاجة.",
                          },
                        ].map((p) => (
                          <div
                            key={p.title}
                            className="theme-content-card rounded-3xl p-5"
                          >
                            <div className="theme-text-primary mb-2 text-base font-semibold">
                              {p.title}
                            </div>
                            <p className="theme-text-secondary text-sm leading-7">
                              {p.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    </LegalSection>

                    <LegalSection id="how" number="3" title="كيف يعمل الوكيل">
                      <p>الوكيل يمرّ بعدّة مراحل قبل الردّ على أي رسالة:</p>
                      <ol className="mt-4 space-y-3 marker:text-brand-primary list-decimal pr-6">
                        <li>
                          <span className="theme-text-primary font-medium">
                            فهم النيّة:
                          </span>{" "}
                          تحليل نصّ العميل لفهم ما يطلبه — استفسار، طلب، شكوى،
                          إلخ.
                        </li>
                        <li>
                          <span className="theme-text-primary font-medium">
                            استرجاع السياق:
                          </span>{" "}
                          ربط الرسالة بسجل العميل والمنتجات والطلبات ذات الصلة.
                        </li>
                        <li>
                          <span className="theme-text-primary font-medium">
                            اتخاذ القرار:
                          </span>{" "}
                          تحديد الإجراء الأنسب وفق قواعد المتجر وسياساته.
                        </li>
                        <li>
                          <span className="theme-text-primary font-medium">
                            الاستعانة بالإنسان عند الحاجة:
                          </span>{" "}
                          إحالة الحالات المعقّدة أو الحسّاسة إلى صاحب المتجر
                          تلقائياً.
                        </li>
                        <li>
                          <span className="theme-text-primary font-medium">
                            الرد والتعلّم:
                          </span>{" "}
                          إرسال الرد وتوثيقه في سجل المحادثات للمراجعة
                          والتحسين.
                        </li>
                      </ol>
                    </LegalSection>

                    <LegalSection
                      id="limits"
                      number="4"
                      title="حدود الذكاء الاصطناعي"
                    >
                      <p>
                        لا نُخفي حدود النظام — بالعكس، نُفصح عنها بوضوح لتضع
                        توقعات واقعية:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>الوكيل قد يُخطئ في فهم نصّ غامض أو متعدّد المعاني</li>
                        <li>
                          قد لا يعرف المعلومات التي لم تُدخلها في قاعدة معرفة
                          المتجر
                        </li>
                        <li>لا يُقدّم استشارات قانونية أو طبية أو مالية</li>
                        <li>
                          قد يحتاج إلى تدخّل بشري في الحالات العاطفية أو
                          الشكاوى الحساسة
                        </li>
                        <li>
                          يعتمد على جودة البيانات التي يُقدّمها المتجر — مُخرجاته
                          مرآة لمدخلاته
                        </li>
                      </ul>

                      <LegalCallout>
                        الوكيل ليس بديلاً عن الحكم البشري في القرارات المصيرية.
                        هو أداة تُساعد صاحب المتجر، وتُحرّره من المهام المتكرّرة،
                        لا تحلّ محلّه في القرارات الاستراتيجية.
                      </LegalCallout>
                    </LegalSection>

                    <LegalSection
                      id="human-review"
                      number="5"
                      title="المراجعة البشرية (Human-in-the-Loop)"
                    >
                      <p>
                        يُمكن لصاحب المتجر تفعيل وضع المراجعة البشرية (HITL) في
                        أي وقت — يعني أن كل ردّ يُعرض عليه قبل إرساله للعميل.
                      </p>
                      <p className="mt-4">أوضاع المراجعة المتاحة:</p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          <span className="theme-text-primary font-medium">
                            مراجعة شاملة:
                          </span>{" "}
                          كل الردود تُراجع قبل الإرسال
                        </li>
                        <li>
                          <span className="theme-text-primary font-medium">
                            مراجعة ذكية:
                          </span>{" "}
                          فقط الحالات التي يُصنّفها النظام بدرجة ثقة منخفضة
                        </li>
                        <li>
                          <span className="theme-text-primary font-medium">
                            مراجعة الحالات الحسّاسة:
                          </span>{" "}
                          الشكاوى، الاسترداد، والطلبات ذات القيمة العالية
                        </li>
                        <li>
                          <span className="theme-text-primary font-medium">
                            التشغيل المؤتمت:
                          </span>{" "}
                          كامل من غير تدخّل، مع تسجيل كل شيء للمراجعة اللاحقة
                        </li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="correction"
                      number="6"
                      title="التصحيح والتعلّم"
                    >
                      <p>
                        عندما يُخطئ الوكيل، يمكن تصحيحه بطرق متعدّدة عبر لوحة
                        التحكم:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          تحديث ذاكرة الوكيل مباشرة من{" "}
                          <span className="theme-text-primary">موظفيّ &gt; ذاكرة الوكيل</span>
                        </li>
                        <li>إضافة سياسات متجر جديدة يلتزم بها فوراً</li>
                        <li>تعديل المنتجات والأسعار تلقائياً عبر تكامل سلة</li>
                        <li>تصحيح الردود السابقة وتحديد سلوك مفضّل</li>
                      </ul>
                      <p className="mt-6">
                        التعلّم من التصحيحات يتمّ داخل نطاق متجرك فقط — لا
                        تُشارك البيانات أو التصحيحات مع متاجر أخرى.
                      </p>
                    </LegalSection>

                    <LegalSection
                      id="rights"
                      number="7"
                      title="حقوقك تجاه القرارات الآلية"
                    >
                      <p>
                        بموجب مبادئ SDAIA ونظام حماية البيانات الشخصية، تملك
                        الحقوق التالية كعميل متجر:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          طلب التحدّث مع إنسان (سيتواصل معك صاحب المتجر
                          مباشرة)
                        </li>
                        <li>رفض الرد الآلي والاعتراض عليه</li>
                        <li>
                          طلب مراجعة بشرية لأي قرار آلي يؤثر عليك (مثل رفض طلب
                          أو استرداد)
                        </li>
                        <li>
                          الاطّلاع على البيانات التي استند إليها الوكيل في
                          قراره
                        </li>
                        <li>طلب حذف جميع بياناتك من أنظمة وصول</li>
                      </ul>
                    </LegalSection>

                    <LegalSection
                      id="governance"
                      number="8"
                      title="الحوكمة الداخلية"
                    >
                      <p>
                        داخل وصول، نُطبّق حوكمة صارمة لتطوير ونشر أنظمة الذكاء
                        الاصطناعي:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li>
                          مراجعة أخلاقية قبل إطلاق أي ميزة جديدة تستخدم AI
                        </li>
                        <li>
                          اختبارات انحياز دورية للنماذج وتصحيح أي تحيّزات
                          مكتشفة
                        </li>
                        <li>
                          توثيق كل قرار آلي يؤثر على عميل نهائي
                        </li>
                        <li>
                          تدريب الموظفين على مبادئ الذكاء الاصطناعي الأخلاقي
                        </li>
                        <li>
                          فريق حوكمة داخلي يُراجع الشكاوى والحالات الحسّاسة
                        </li>
                      </ul>
                    </LegalSection>
                  </div>
                </div>
              </div>

              <LegalTOC
                sections={sections}
                contactLabel="تحتاج مراجعة بشرية؟"
                contactBody="أخبرنا إذا كان قرار آلي قد أثّر عليك، وسنراجعه يدوياً."
                contactHref="mailto:ethics@wosool.ai"
                contactCta="ethics@wosool.ai"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
