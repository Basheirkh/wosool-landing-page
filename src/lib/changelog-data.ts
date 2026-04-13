export type ChangelogCategory =
  | "feature"
  | "improvement"
  | "fix"
  | "platform";

export interface ChangelogEntry {
  id: string;
  version: string;
  shipped_at: string;
  categories: ChangelogCategory[];
  title_ar: string;
  title_en: string;
  summary_ar: string;
  summary_en: string;
  highlights_ar?: string[];
  highlights_en?: string[];
}

export const CATEGORY_LABELS_AR: Record<ChangelogCategory, string> = {
  feature: "ميزة",
  improvement: "تحسين",
  fix: "إصلاح",
  platform: "موثوقية",
};

export const CATEGORY_LABELS_EN: Record<ChangelogCategory, string> = {
  feature: "Feature",
  improvement: "Improvement",
  fix: "Fix",
  platform: "Reliability",
};

export const CATEGORY_COLORS: Record<ChangelogCategory, string> = {
  feature: "#00D97E",
  improvement: "#F6C453",
  fix: "#4A9EFF",
  platform: "#A68AFF",
};

export const CHANGELOG: ChangelogEntry[] = [
  // Week 2026-W15 (11–17 Apr 2026)
  {
    id: "2026-04-13-comms-hardening",
    version: "2026.04.13",
    shipped_at: "2026-04-13",
    categories: ["platform", "improvement"],
    title_ar: "حماية متكاملة لكل رسالة ترسلها وصول",
    title_en: "Full protection layer for every message Wosool sends",
    summary_ar:
      "أطلقنا طبقة حماية كاملة حول كل رسالة يرسلها موظف وصول: أوقات هدوء قابلة للتعديل بحسب منطقة متجرك، احترام إذن العميل في الرسائل التسويقية، حدود إرسال آمنة لكل عميل، ومؤشر إرهاق يمنع إزعاج نفس العميل بعدد كبير من الرسائل في اليوم. أضفنا أيضاً حماية ضد التكرار عند وصول نفس الحدث أكثر من مرة من سلة.",
    summary_en:
      "Shipped a complete protection layer around every message Wosool sends: per-merchant quiet hours, consent gates for marketing messages, safe per-customer rate limits, and a fatigue index that stops any one customer from getting flooded in 24h. Duplicate-event protection on the Salla side too.",
    highlights_ar: [
      "أوقات هدوء قابلة للضبط لكل متجر، تُستثنى منها رسائل OTP والمعاملات تلقائيًا",
      "احترام إذن العميل في أي رسالة تسويقية",
      "حدود إرسال لكل عميل تمنع الإزعاج",
      "مؤشر إرهاق يمنع تكرار الرسائل على نفس العميل خلال 24 ساعة",
      "حماية تلقائية من وصول نفس الحدث مرتين من سلة",
    ],
  },
  {
    id: "2026-04-13-communication-app",
    version: "2026.04.13",
    shipped_at: "2026-04-13",
    categories: ["feature", "platform"],
    title_ar: "وصول الآن تطبيق اتصالات كامل داخل سلة",
    title_en: "Wosool is now a full Communication app inside Salla",
    summary_ar:
      "نقلنا وصول إلى تصنيف \u0022تطبيق الاتصالات\u0022 داخل سلة. هذا يفتح لنا طبقة جديدة من الأحداث الحصرية (رسائل الإشعارات، التنبيهات، تأكيدات الطلبات) والاشتراكات المتكررة، ليتمكّن وصول من توصيل كل تفاعل من متجرك عبر واتساب بدل أن يذهب هباءً.",
    summary_en:
      "Re-registered as a Salla Communication app, which unlocks exclusive notification events and recurring subscription flows. Every communication your Salla store would have sent — order confirmations, payment reminders, shipment notices — can now be routed through Wosool on WhatsApp.",
    highlights_ar: [
      "التقاط كل إشعار كانت سلة ستُرسله بالرسائل النصية وتحويله إلى واتساب",
      "دعم كامل لاشتراكات سلة المتكررة (تجديد، خصم، إلغاء)",
      "توجيه ذكي: واتساب أولاً، مع بديل تلقائي إن لم يكن الرقم مربوطًا",
      "مزامنة يومية للاشتراكات والأحداث من سلة",
    ],
  },
  {
    id: "2026-04-13-widget-smarter",
    version: "2026.04.13",
    shipped_at: "2026-04-13",
    categories: ["feature", "improvement"],
    title_ar: "الودجت الصوتية أصبحت أذكى وأسرع داخل متجرك",
    title_en: "The voice widget is smarter and faster inside your store",
    summary_ar:
      "الودجت الصوتية المُضمّنة في موقع متجرك أصبحت تعرف كل منتجاتك وصفحاتك وسياساتك بشكل آلي ومتجدّد. يومياً، يقرأ الموظف الصوتي محتوى متجرك بالكامل، ويصبح قادرًا على إجابة العملاء بدقة بدون تدخل منك.",
    summary_en:
      "The voice widget now knows every product, page, and policy — automatically, and refreshes itself daily. Your voice assistant can answer visitors accurately without you uploading anything.",
    highlights_ar: [
      "مزامنة يومية للمنتجات والصفحات والسياسات إلى قاعدة معرفة الموظف الصوتي",
      "تحديث فوري عند إضافة أو تعديل منتج في سلة",
      "تتبّع حالة تثبيت الودجت في متجرك من لوحة الأدمن",
      "زر إعادة تثبيت فوري إن احتجت",
    ],
  },
  {
    id: "2026-04-13-reliability-foundation",
    version: "2026.04.13",
    shipped_at: "2026-04-13",
    categories: ["platform"],
    title_ar: "أساس موثوق: لا مهمة تُفقد بعد اليوم",
    title_en: "Reliability foundation: no background task is ever lost",
    summary_ar:
      "أي عملية خلفية في وصول — متابعة طلب، تذكير سلة مهجورة، مزامنة منتج، مكالمة عودة، إشعار مالك — أصبحت تُستأنف تلقائياً بعد أي إعادة تشغيل أو فشل مؤقت. إذا كان هناك مهمة يجب أن تصل إلى عميلك في وقت معيّن، ستصل في وقتها، حتى لو حدث اضطراب عابر في الخلفية.",
    summary_en:
      "Every background task in Wosool — order follow-up, abandoned-cart nudge, product sync, scheduled callback, owner notification — now resumes automatically after any restart or transient failure. If Wosool promised to send something at a specific time, it will.",
    highlights_ar: [
      "استئناف تلقائي لكل سير عمل بعد أي إعادة تشغيل",
      "تأكيدات مضمونة على توصيل الرسائل المجدولة",
      "حواجز في الإنتاج تمنع أي تهيئة قديمة أو خاطئة من العمل",
      "جدول يومي جديد لفحص دورة حياة العملاء (VIP، مخاطر الانسحاب)",
    ],
  },

  // Week 2026-W14 (4–10 Apr 2026)
  {
    id: "2026-04-11-inside-salla",
    version: "2026.04.11",
    shipped_at: "2026-04-11",
    categories: ["feature"],
    title_ar: "لوحة تحكم وصول تعمل الآن داخل سلة",
    title_en: "The Wosool dashboard now lives inside your Salla admin",
    summary_ar:
      "لم يعد عليك الخروج من لوحة تحكم سلة لإدارة وصول. كل شيء أصبح موجودًا في مكانه الطبيعي داخل سلة: ربط واتساب، الصندوق الوارد الحيّ، لوحة المهام، مسار الأتمتة — بنفس التجربة وبنفس السرعة.",
    summary_en:
      "No more switching between Salla and a separate Wosool tab. The entire Wosool dashboard now runs directly inside your Salla admin: WhatsApp linking, live inbox, task board, automations.",
    highlights_ar: [
      "ربط رقم واتساب المتجر بدون مغادرة سلة",
      "صندوق وارد حيّ يعرض المحادثات والمهام في الوقت الفعلي",
      "بطاقات أنيقة وأيقونات احترافية",
      "لوحة مهام تعمل حتى مع المتاجر التي أُعيد تثبيتها",
    ],
  },
  {
    id: "2026-04-11-home-three-zone",
    version: "2026.04.11",
    shipped_at: "2026-04-11",
    categories: ["improvement", "feature"],
    title_ar: "صفحة رئيسية جديدة: ثلاث مناطق تُخبرك بكل شيء",
    title_en: "New home page: three-zone layout that tells you everything at a glance",
    summary_ar:
      "أعدنا بناء الصفحة الرئيسية لوحة التحكم بالكامل إلى ثلاث مناطق منطقية: ما يحصل الآن، المهام التي تحتاج لاهتمامك، والمؤشرات التي تقيس أداء متجرك. حركات انسيابية على بطاقات الموظفين، ورسوم بيانية دائرية أنيقة، ومسار تعريفي بالخطوات لكل مستخدم جديد.",
    summary_en:
      "Dashboard home redesigned into three logical zones. Motion-animated employee cards, elegant donut charts, and a walkthrough that onboards every new user.",
    highlights_ar: [
      "ثلاث مناطق واضحة في الصفحة الرئيسية",
      "بطاقات موظفين مع حركات انسيابية",
      "رسوم بيانية دائرية بجودة SaaS احترافية",
      "جولة تعريفية بالخطوات للمستخدم الجديد",
    ],
  },
  {
    id: "2026-04-09-whatsapp-stability",
    version: "2026.04.09",
    shipped_at: "2026-04-09",
    categories: ["platform", "fix"],
    title_ar: "اتصال واتساب أكثر ثباتًا وأقلّ ضجيجًا",
    title_en: "Steadier, quieter WhatsApp connection",
    summary_ar:
      "أصلحنا مجموعة من الأعطال الدقيقة التي كانت تسبب اهتزازًا في مؤشّر اتصال واتساب وتنبيهات تيليغرام متكررة. أضفنا فاحصًا خلفيًا يعمل كل دقيقتين، وحراسة على وقت الإرسال تمنع الرسائل القديمة، ورفع عتبات الكشف بحيث لم تعد الاهتزازات العابرة تصل إلى التاجر.",
    summary_en:
      "Fixed a cluster of subtle bugs causing WhatsApp status wobble and noisy Telegram alerts. Added a background checker, a send-time guard, and quieter detection thresholds.",
    highlights_ar: [
      "فاحص خلفي نشط كل دقيقتين",
      "حراسة على وقت الإرسال",
      "كاشف أهدأ وأدقّ",
      "تنبيهات تيليغرام بلا تكرار",
    ],
  },
  {
    id: "2026-04-09-employees-unified",
    version: "2026.04.09",
    shipped_at: "2026-04-09",
    categories: ["feature", "improvement"],
    title_ar: "الموظفون والقواعد والحوكمة في مكان واحد — عربي كامل",
    title_en: "Employees, rules, and governance in one place — fully Arabic",
    summary_ar:
      "دمجنا صفحات الموظفين والقواعد والحوكمة في تجربة موحّدة. إعدادات كل موظف أصبحت مستقلة عن الآخر، واللغة العربية الآن 100% عبر كل صفحة في لوحة التحكم.",
    summary_en:
      "Merged the Employees / Rules / Governance surfaces into one unified flow. Per-employee settings are now properly scoped, and 100% of the Agent Platform is now in Arabic.",
  },
  {
    id: "2026-04-07-employees-platform",
    version: "2026.04.07",
    shipped_at: "2026-04-07",
    categories: ["feature"],
    title_ar: "منصّة الموظفين — إعدادات، حدود، وقياس حيّ",
    title_en: "Employees platform — settings, limits, and live telemetry",
    summary_ar:
      "لوحة موظّفين جديدة كاملة: سِتّ صفحات للـworkspace، وعرض حيّ لما يفعله كل موظف لحظة بلحظة، وحدود قابلة للتعديل لكل نوع موظف، وسجلّات قياس في الوقت الفعلي.",
    summary_en:
      "A full Employees platform: six workspace pages, live telemetry of what each employee is doing in real time, per-type runtime limits, and live metrics.",
  },
  {
    id: "2026-04-06-saas-foundations",
    version: "2026.04.06",
    shipped_at: "2026-04-06",
    categories: ["platform"],
    title_ar: "خمس عشرة قاعدة تشغيل SaaS مكتملة",
    title_en: "Fifteen SaaS operating principles, all complete",
    summary_ar:
      "أكملنا جميع قواعد التشغيل بمستوى SaaS: إعادة محاولة الأحداث، قائمة فحص التهيئة، سجل تدقيق، حدود استخدام واضحة، حقوق الخصوصية (PDPL)، ومسار نشر ذكي يُحدّث فقط ما تغيّر.",
    summary_en:
      "Finished all 15 operating principles: retry flow, onboarding checklist, audit log, quota guards, Saudi PDPL request flow, and a partial deploy pipeline that only touches what actually changed.",
  },
  {
    id: "2026-04-05-faster-replies",
    version: "2026.04.05",
    shipped_at: "2026-04-05",
    categories: ["improvement"],
    title_ar: "الردود أسرع بنسبة 3-4 مرات",
    title_en: "Replies are now 3-4× faster",
    summary_ar:
      "حذفنا كل تأخير اصطناعي من مسار الرد. زمن رد العميل نزل من ~18 ثانية إلى ~4 ثوانٍ، وزمن رد المالك نزل من ~25 ثانية إلى ~8 ثوانٍ. تحسين مباشر يشعر به كل تاجر.",
    summary_en:
      "Removed every artificial delay between an incoming message and the outbound reply. Customer reply latency fell from ~18s to ~4s. Owner reply latency fell from ~25s to ~8s.",
  },
  {
    id: "2026-04-05-zero-downtime-deploys",
    version: "2026.04.05",
    shipped_at: "2026-04-05",
    categories: ["platform"],
    title_ar: "كل تحديث يمر بدون انقطاع",
    title_en: "Every update lands with zero downtime",
    summary_ar:
      "بنينا خط نشر بدون انقطاع: التحديثات الجديدة تأتي بدون أن يرى التاجر شاشة صيانة. أصبحنا ننشر عدة مرات في اليوم دون أن يلاحظ أحد.",
    summary_en:
      "Built a zero-downtime deploy pipeline. New updates land without merchants ever seeing a maintenance screen.",
  },

  // Week 2026-W13 (28 Mar – 3 Apr 2026)
  {
    id: "2026-04-02-human-timing",
    version: "2026.04.02",
    shipped_at: "2026-04-02",
    categories: ["improvement"],
    title_ar: "ردود الموظف الآلي أصبحت تبدو أكثر إنسانية",
    title_en: "Automated replies now feel human",
    summary_ar:
      "جعلنا إيقاع كتابة الموظف الآلي متدرجًا حسب طول الرسالة، وعطّلنا إيصالات القراءة التلقائية حتى لا يرى العميل \u0022علامتين زرقاوين\u0022 قبل أن يُعالَج طلبه فعلًا. النتيجة: محادثات أكثر طبيعية.",
    summary_en:
      "Tuned the automated typing indicator to message length and disabled auto-read receipts, so customers no longer see blue ticks before their message is actually being handled.",
  },
  {
    id: "2026-04-02-customer-identity-batching",
    version: "2026.04.02",
    shipped_at: "2026-04-02",
    categories: ["feature", "improvement"],
    title_ar: "تعرّف أفضل على العميل + تجميع رسائله",
    title_en: "Better customer recognition + message batching",
    summary_ar:
      "أصبح وصول يميّز كل عميل بهويته الكاملة عبر القنوات، ويجمع رسائله المتعدّدة خلال ثوانٍ ليجيب عليها كدفعة واحدة منطقية بدل ردود متقطّعة. نظام تسلّم الرسائل من الإنسان إلى الموظف الآلي أصبح موحّدًا تمامًا.",
    summary_en:
      "Wosool now recognises each customer across channels and batches their rapid multi-line messages into one coherent agent turn. The hand-off between human and automated agents is now unified.",
  },
  {
    id: "2026-04-01-reinstall-cleanup",
    version: "2026.04.01",
    shipped_at: "2026-04-01",
    categories: ["fix"],
    title_ar: "إعادة تثبيت تطبيق وصول من سلة بدون أي عثرات",
    title_en: "Clean reinstall of the Wosool app from Salla",
    summary_ar:
      "إذا سبق لك إزالة تطبيق وصول من سلة ثم إعادة تثبيته، لم يعد عليك القلق من بقايا قديمة. أصبحنا نحفظ تاريخ المتجر، نفصل الأرقام السابقة، ونعيد مسار الإعداد من الصفر بشكل نظيف.",
    summary_en:
      "If you ever uninstall and reinstall the Wosool app from Salla, it just works now. Your store's history is preserved, previous numbers are disconnected, and setup walks you through a clean path.",
  },
  {
    id: "2026-04-01-live-inbox",
    version: "2026.04.01",
    shipped_at: "2026-04-01",
    categories: ["fix", "improvement"],
    title_ar: "الصندوق الوارد يعرض كل ما يحدث لحظة بلحظة",
    title_en: "The Inbox now shows every reply, live",
    summary_ar:
      "الرسائل الصادرة من الموظف الآلي أصبحت تظهر في الصندوق الوارد مباشرة، بنفس التنسيق الذي تظهر به رسائل العملاء. صندوقك الوارد أصبح سجلّ المحادثة الكامل، لا نصف سجلّ.",
    summary_en:
      "Outbound replies from the automated agent now mirror into the Inbox in real time, with the same formatting as customer messages. Your Inbox is now the complete conversation record.",
  },
  {
    id: "2026-03-31-onboarding-flow",
    version: "2026.03.31",
    shipped_at: "2026-03-31",
    categories: ["feature", "fix"],
    title_ar: "تجربة إعداد واتساب أنظف وأسرع",
    title_en: "Cleaner, faster WhatsApp setup experience",
    summary_ar:
      "أعدنا بناء تجربة إعداد واتساب بحيث لا تعلق عند أي خطوة. اختيار رمز الدولة لكل الدول العربية، رسائل خطأ واضحة، ومسار أربع خطوات (جاري الفحص → رمز QR → جاري الاتصال → متصل) يخبرك دائمًا أين أنت.",
    summary_en:
      "Rebuilt the WhatsApp setup experience so you never get stuck. Country code picker for every Arabic-speaking country, clear error messages, and a 4-state visible flow so you always know where you are.",
  },
  {
    id: "2026-03-30-setup-polish",
    version: "2026.03.30",
    shipped_at: "2026-03-30",
    categories: ["improvement"],
    title_ar: "صفحة الإعداد الأول أكثر هدوءًا وأناقة",
    title_en: "First-time setup polish pass",
    summary_ar:
      "أعدنا تصميم صفحة الإعداد الأول بواجهة بيضاء نظيفة، مع مهل زمنية معقولة بدل الانتظار الطويل، ومسار بديل واضح في حال أي اضطراب في الاتصال.",
    summary_en:
      "Rebuilt the first-time setup screen with a clean white UI, reasonable timeouts instead of infinite spinners, and a clear fallback path if anything glitches.",
  },
  {
    id: "2026-03-28-merchant-isolation",
    version: "2026.03.28",
    shipped_at: "2026-03-28",
    categories: ["platform"],
    title_ar: "عزل كامل بين التجّار — أمان أقوى",
    title_en: "Full isolation between merchants",
    summary_ar:
      "راجعنا كل مسار يرسل رسالة من متجر ما وأكّدنا أنه لا يمكن لأي متجر أن يرى بيانات متجر آخر أو يرسل باسمه. أي فشل في الإرسال أصبح يُخبرك مباشرة بدل أن يظهر \u0022نجاحًا\u0022 كاذبًا.",
    summary_en:
      "Audited every outbound path and confirmed there's no way one merchant can see another's data or send on their behalf. Any send failure now reports honestly.",
  },

  // Week 2026-W12 (21–27 Mar 2026)
  {
    id: "2026-03-27-precision-dark",
    version: "2026.03.27",
    shipped_at: "2026-03-27",
    categories: ["improvement"],
    title_ar: "هوية بصرية جديدة: Precision Dark",
    title_en: "New visual identity: Precision Dark",
    summary_ar:
      "وصول حصل على هوية بصرية جديدة بالكامل: وضع داكن متناغم، مسافات مدروسة، وخط أوضح، وخلفيات بنقاط دقيقة، واللون الأخضر المميز #00D97E كلون واحد ثابت للعلامة. لوحة التحكم، الموقع، والمدوّنة كلها بنفس الروح.",
    summary_en:
      "Wosool got a full visual refresh: harmonised dark mode, tighter typography, dot-grid backgrounds, and brand green #00D97E as the single accent.",
  },
  {
    id: "2026-03-26-salla-deep",
    version: "2026.03.26",
    shipped_at: "2026-03-26",
    categories: ["feature"],
    title_ar: "تكامل أعمق مع سلة + الإصدار الأول من اللوحة المضمّنة",
    title_en: "Deeper Salla integration + first embedded dashboard",
    summary_ar:
      "ربط أعمق مع سلة يفتح سبعة إجراءات جديدة على تجربة المتجر، إصدار أولي من لوحة وصول مضمّنة داخل سلة، وتجربة إعداد تفاعلية كاملة عبر واتساب تُلغي تلقائيًا تذكيرات السلة المهجورة من سلة حتى لا يتلقى عميلك رسالتين.",
    summary_en:
      "Deeper Salla integration unlocks seven new store actions, the first version of the Wosool dashboard embedded inside Salla, and an interactive WhatsApp setup flow that automatically disables Salla's abandoned-cart reminders so customers don't get double-pinged.",
  },
  {
    id: "2026-03-25-task-board",
    version: "2026.03.25",
    shipped_at: "2026-03-25",
    categories: ["feature", "improvement"],
    title_ar: "لوحة المهام — تصميم احترافي",
    title_en: "Professional task board",
    summary_ar:
      "لوحة مهام جديدة بتصميم احترافي: حلقات حالة بدل الشرطات، أيقونات واضحة، ومسار بيانات حيّ يعمل حتى مع المتاجر التي لديها أكثر من workspace.",
    summary_en:
      "Task board redesign: status rings instead of dashes, clear iconography, and a live data path that works even for stores with multiple workspaces.",
  },
  {
    id: "2026-03-22-deploy-foundation",
    version: "2026.03.22",
    shipped_at: "2026-03-22",
    categories: ["platform"],
    title_ar: "أساس نشر الإنتاج — أسرع وأهدأ",
    title_en: "Production deploy foundation — faster and quieter",
    summary_ar:
      "بنينا الأساس الجديد لنشر وصول في الإنتاج: تحديثات تصل أسرع، سجلات نشر غنية عبر تيليغرام، وأقلّ احتكاك. هذا الأسبوع حصل الانقطاع الذي ترونه في سجل الانقطاعات (22 مارس) — بعده أصبح النشر بدون انقطاع.",
    summary_en:
      "Rebuilt the production deploy foundation: faster updates, rich deploy notifications, less friction. This is the week of the 22 Mar incident — afterwards, every deploy has been silent.",
  },

  // Week 2026-W11 (14–20 Mar 2026)
  {
    id: "2026-03-19-auth-overhaul",
    version: "2026.03.19",
    shipped_at: "2026-03-19",
    categories: ["platform"],
    title_ar: "مسار الدخول الآمن — إعادة بناء كاملة",
    title_en: "Secure login path — full rebuild",
    summary_ar:
      "أعدنا بناء مسار الدخول من الصفر ليكون أكثر سرعة وثباتًا. لم تعد الجلسات تُفقد عند أي تحديث في الخادم.",
    summary_en:
      "Rebuilt the secure login path from the ground up — faster, more stable, and sessions no longer disappear across server updates.",
  },
  {
    id: "2026-03-17-customer-agent-foundation",
    version: "2026.03.17",
    shipped_at: "2026-03-17",
    categories: ["feature"],
    title_ar: "الجيل الجديد من موظف العملاء",
    title_en: "The next generation of the customer agent",
    summary_ar:
      "قدّمنا طبقة جديدة لموظف العملاء تدعم التعرّف الدقيق على العميل عبر الأجهزة، توجيهًا أذكى للرسائل، وأدوات واسعة يستخدمها الموظف للإجابة والتنفيذ. هذه الطبقة هي الأساس الذي يقف عليه كل شيء اليوم.",
    summary_en:
      "Introduced a new customer-agent layer with device-aware customer recognition, smarter message routing, and the broad tool surface the agent uses to answer and act.",
  },

  // Week 2026-W9 (28 Feb – 6 Mar 2026)
  {
    id: "2026-03-03-instant-invites",
    version: "2026.03.03",
    shipped_at: "2026-03-03",
    categories: ["improvement"],
    title_ar: "دعوة فورية لكل مستخدم جديد",
    title_en: "Instant invite for every new user",
    summary_ar:
      "عند إضافة مستخدم جديد إلى متجرك، يصله بريد الدعوة الآن فورًا بدون أي تأخير.",
    summary_en:
      "When you add a new user to your store, their invite email is sent instantly.",
  },
  {
    id: "2026-03-02-inbox-canvas",
    version: "2026.03.02",
    shipped_at: "2026-03-02",
    categories: ["feature"],
    title_ar: "الصندوق الوارد ولوحة سير العمل المرئية",
    title_en: "Inbox + visual workflow canvas",
    summary_ar:
      "أول إصدار كامل من الصندوق الوارد، ولوحة سير العمل المرئية التي تجعل الأتمتة مفهومة بالنظر — كل ما ترونه اليوم من أتمتة يقف على هذا الأساس.",
    summary_en:
      "First complete version of the Inbox and the visual workflow canvas that makes automation understandable at a glance.",
  },

  // Week 2026-W8 (21–27 Feb 2026)
  {
    id: "2026-02-23-automations-marketplace",
    version: "2026.02.23",
    shipped_at: "2026-02-23",
    categories: ["feature"],
    title_ar: "لوحة الأتمتة + متجر الإضافات",
    title_en: "Automations dashboard + marketplace",
    summary_ar:
      "صفحات مخصّصة للأتمتة، متجر الإضافات، والإعدادات. البنية الحالية لكل سير عمل في وصول بدأت هنا.",
    summary_en:
      "Dedicated pages for automations, marketplace, and settings. The shape of today's workflow experience started here.",
  },
  {
    id: "2026-02-21-durable-automation",
    version: "2026.02.21",
    shipped_at: "2026-02-21",
    categories: ["platform"],
    title_ar: "أتمتة دائمة لا تُفقد أبدًا",
    title_en: "Durable automation that never loses work",
    summary_ar:
      "هذا هو الأسبوع الذي توقف فيه وصول عن كونه مجموعة من المهام الخلفية المتناثرة، وأصبح منصّة أتمتة كاملة تحفظ كل مهمة حتى نهايتها، حتى لو أُعيد تشغيل الخلفية في منتصفها.",
    summary_en:
      "This is the week Wosool stopped being a handful of scattered background jobs and became a full automation platform that remembers every task from start to finish.",
  },

  // Week 2026-W7 (14–20 Feb 2026)
  {
    id: "2026-02-18-personalities",
    version: "2026.02.18",
    shipped_at: "2026-02-18",
    categories: ["feature"],
    title_ar: "شخصيات موظفين متعدّدة",
    title_en: "Multiple employee personalities",
    summary_ar:
      "قدّمنا طريقة بناء شخصيات مختلفة لموظفي وصول، يختار كل تاجر منها ما يناسب متجره. إصدار أوّل من الودجت الصوتية في النسخة الصغيرة الخفيفة أيضًا.",
    summary_en:
      "Introduced modular employee personalities, so each merchant can pick the voice that fits their brand.",
  },
  {
    id: "2026-02-17-store-identity",
    version: "2026.02.17",
    shipped_at: "2026-02-17",
    categories: ["feature", "improvement"],
    title_ar: "تعرّف أوسع على المتجر + تخصيص الودجت",
    title_en: "Broader store recognition + widget customisation",
    summary_ar:
      "طرق أذكى لتعرّف وصول على هوية متجرك، وخيارات تخصيص لون ودجت الصوت ليطابق علامتك التجارية.",
    summary_en:
      "Smarter ways of recognising your store's identity, plus widget colour customisation so the voice widget matches your brand.",
  },
  {
    id: "2026-02-14-context-aware-widget",
    version: "2026.02.14",
    shipped_at: "2026-02-14",
    categories: ["feature"],
    title_ar: "ودجت صوتية تفهم ما يحدث في متجرك الآن",
    title_en: "Voice widget that understands what's happening right now",
    summary_ar:
      "الودجت الصوتية أصبحت قادرة على قراءة سياق الصفحة التي يتصفحها العميل لحظة المحادثة — المنتج الحالي، حالة السلة، والصفحة. هذا يجعل الموظف الصوتي قادرًا على الإجابة بدقّة حقيقية.",
    summary_en:
      "The voice widget now reads the live context of the page the visitor is on — current product, cart state, page type.",
  },

  // Week 2026-W6 (7–13 Feb 2026)
  {
    id: "2026-02-11-branded-login",
    version: "2026.02.11",
    shipped_at: "2026-02-11",
    categories: ["feature", "improvement"],
    title_ar: "شاشة دخول بهوية وصول + دعم اللغة العربية",
    title_en: "Login screen in Wosool's brand + full Arabic support",
    summary_ar:
      "شاشة الدخول أصبحت تحمل هوية وصول البصرية بدل الشكل الافتراضي، ودعم اللغة العربية مكتمل من أول نقرة.",
    summary_en:
      "The login screen is now in Wosool's visual identity, and Arabic support is complete from the first click.",
  },
  {
    id: "2026-02-07-docs-site",
    version: "2026.02.07",
    shipped_at: "2026-02-07",
    categories: ["feature"],
    title_ar: "موقع توثيق شامل",
    title_en: "Comprehensive documentation site",
    summary_ar:
      "أطلقنا موقع التوثيق الكامل، مع دعم أوسع لخصائص متجرك في الودجت، وتحديد أفضل لهويّة الزائر.",
    summary_en:
      "Launched the full documentation site, with broader store feature support in the widget and better visitor-identity resolution.",
  },

  // Week 2026-W5 (31 Jan – 6 Feb 2026)
  {
    id: "2026-02-01-genesis",
    version: "2026.02.01",
    shipped_at: "2026-02-01",
    categories: ["platform"],
    title_ar: "البداية",
    title_en: "Genesis",
    summary_ar:
      "هذه هي النقطة التي بدأ منها كل شيء. أسس SaaS آمنة ومعزولة، ومسار هوية آمن، والتزام واضح: كل ميزة من هنا وإلى الأمام تخدم التاجر مباشرة.",
    summary_en:
      "This is where it all started. Secure, isolated SaaS foundations, a safe identity path, and a single commitment: every feature from this point forward serves the merchant directly.",
  },
];

// ---- Helpers ----

export function countByCategory(): Record<ChangelogCategory, number> {
  const counts: Record<ChangelogCategory, number> = {
    feature: 0,
    improvement: 0,
    fix: 0,
    platform: 0,
  };
  for (const e of CHANGELOG) {
    for (const c of e.categories) counts[c]++;
  }
  return counts;
}

// Saudi week: Saturday → Friday
// Returns [saturday, friday] as Date objects (UTC) covering the week of the given date.
export function getSaudiWeekBounds(date: Date): { start: Date; end: Date } {
  const d = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
  const day = d.getUTCDay(); // Sun=0, Mon=1, ..., Sat=6
  // Days since Saturday
  const daysSinceSat = (day - 6 + 7) % 7;
  const start = new Date(d);
  start.setUTCDate(d.getUTCDate() - daysSinceSat);
  const end = new Date(start);
  end.setUTCDate(start.getUTCDate() + 6);
  return { start, end };
}

export function getWeekKey(date: Date): string {
  const { start } = getSaudiWeekBounds(date);
  return start.toISOString().slice(0, 10);
}

const MONTHS_AR = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];

export function formatWeekLabel(date: Date): string {
  const { start, end } = getSaudiWeekBounds(date);
  const startDay = start.getUTCDate();
  const endDay = end.getUTCDate();
  const startMonth = MONTHS_AR[start.getUTCMonth()];
  const endMonth = MONTHS_AR[end.getUTCMonth()];
  const year = end.getUTCFullYear();

  if (start.getUTCMonth() === end.getUTCMonth()) {
    return `أسبوع ${startDay} – ${endDay} ${endMonth} ${year}`;
  }
  return `أسبوع ${startDay} ${startMonth} – ${endDay} ${endMonth} ${year}`;
}

export interface WeekGroup {
  key: string;
  label_ar: string;
  entries: ChangelogEntry[];
}

export function groupByWeek(entries: ChangelogEntry[]): WeekGroup[] {
  const buckets: Record<string, ChangelogEntry[]> = {};
  const labels: Record<string, string> = {};

  for (const e of entries) {
    const d = new Date(`${e.shipped_at}T00:00:00Z`);
    const key = getWeekKey(d);
    if (!buckets[key]) {
      buckets[key] = [];
      labels[key] = formatWeekLabel(d);
    }
    buckets[key].push(e);
  }

  return Object.keys(buckets)
    .sort((a, b) => b.localeCompare(a))
    .map((key) => ({
      key,
      label_ar: labels[key],
      entries: buckets[key].sort((a, b) =>
        b.shipped_at.localeCompare(a.shipped_at)
      ),
    }));
}
