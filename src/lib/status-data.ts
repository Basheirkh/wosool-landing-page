export type ComponentStatus =
  | "operational"
  | "degraded"
  | "partial_outage"
  | "major_outage";

export type Severity = ComponentStatus;

export interface DailyUptime {
  date: string;
  status: ComponentStatus;
  uptime_pct: number;
  incident_id?: string;
}

export interface StatusComponent {
  slug: string;
  name_ar: string;
  name_en: string;
  description_ar: string;
  current_status: ComponentStatus;
  daily_uptime: DailyUptime[];
}

export interface IncidentUpdate {
  at: string;
  note_ar: string;
  note_en: string;
}

export interface Incident {
  id: string;
  title_ar: string;
  title_en: string;
  severity: Severity;
  components: string[];
  started_at: string;
  resolved_at: string | null;
  summary_ar: string;
  summary_en: string;
  updates?: IncidentUpdate[];
}

export const STATUS_LABELS_AR: Record<ComponentStatus, string> = {
  operational: "يعمل طبيعي",
  degraded: "أداء متدنٍ",
  partial_outage: "انقطاع جزئي",
  major_outage: "انقطاع كامل",
};

export const STATUS_LABELS_EN: Record<ComponentStatus, string> = {
  operational: "Operational",
  degraded: "Degraded",
  partial_outage: "Partial outage",
  major_outage: "Major outage",
};

export const STATUS_COLORS: Record<ComponentStatus, string> = {
  operational: "#00D97E",
  degraded: "#F6C453",
  partial_outage: "#F18B3A",
  major_outage: "#E5484D",
};

// Severity rank used to compute "worst" status across components
export const STATUS_RANK: Record<ComponentStatus, number> = {
  operational: 0,
  degraded: 1,
  partial_outage: 2,
  major_outage: 3,
};

export const INCIDENTS: Incident[] = [
  {
    id: "inc-2026-04-05-wa-flap",
    title_ar: "اهتزاز متقطع في اتصال واتساب لبعض المتاجر",
    title_en: "Brief WhatsApp connection wobbles on some stores",
    severity: "degraded",
    components: ["whatsapp", "customer-agent"],
    started_at: "2026-04-05T10:00:00Z",
    resolved_at: "2026-04-05T16:30:00Z",
    summary_ar:
      "عدد من التجّار شاهدوا مؤشّر الاتصال يتذبذب ويعيد الاتصال بسرعة، مع تنبيهات متكررة على تيليغرام. الرسائل كانت تصل، لكن الواجهة كانت تُظهر حالات عابرة. جعلنا كاشف الحالة أكثر هدوءًا، وجعلنا مُوفّقاً خلفيًّا يفحص كل دقيقتين، فلم يعد التذبذب يصل إلى التاجر.",
    summary_en:
      "Some merchants saw their WhatsApp status pill flicker and reconnect, with noisy Telegram alerts. Messages were still delivered. We made the state checker calmer and added a background reconciler that sweeps every two minutes, so transient wobbles no longer surface to the merchant.",
  },
  {
    id: "inc-2026-04-04-customer-agent-delay",
    title_ar: "تأخر الرد الآلي في بعض محادثات العملاء",
    title_en: "Delayed automated replies in some customer conversations",
    severity: "partial_outage",
    components: ["customer-agent", "automations"],
    started_at: "2026-04-04T13:00:00Z",
    resolved_at: "2026-04-04T21:00:00Z",
    summary_ar:
      "عدد محدود من محادثات العملاء كان يتأخر فيها رد الموظف الآلي لثوانٍ إضافية، وفي حالات نادرة لم يصل الرد على الإطلاق. أعدنا توجيه المحادثات القديمة إلى مساراتها الصحيحة، وأصلحنا شرط السباق، وربطنا كل محادثة بمعرّف ثابت بحيث لا تُفقد أي رسالة حتى عند إعادة التشغيل.",
    summary_en:
      "A small number of customer conversations saw delayed automated replies (and rare drops). We re-routed the in-flight sessions, fixed an underlying race condition, and now every customer session is tied to a stable identifier so nothing is lost across restarts.",
  },
  {
    id: "inc-2026-04-04-salla-token-renewal",
    title_ar: "توقّف بعض المتاجر بعد 14 يوم من التثبيت",
    title_en: "Some stores went silent 14 days after install",
    severity: "partial_outage",
    components: ["salla", "customer-agent", "owner-agent"],
    started_at: "2026-04-04T00:00:00Z",
    resolved_at: "2026-04-04T03:00:00Z",
    summary_ar:
      "كان اتصال وصول بسلّة ينتهي صامتًا عند يوم التجديد الرابع عشر لبعض المتاجر، فتتوقف الأحداث عن الوصول وتبدو المتاجر صامتة فجأة. صحّحنا مسار التجديد بالكامل، وجعلنا لكل متجر مصدرًا واحدًا موحّدًا لصلاحيات سلة، مع فحص مباشر قبل كل طلب.",
    summary_en:
      "Some merchants' Salla connection quietly expired on day 14 of the renewal cycle, causing events to stop arriving and stores to look silent. We rebuilt the renewal path, gave every store a single source of truth for its Salla authorisation, and now verify validity on every outbound call.",
  },
  {
    id: "inc-2026-03-31-reinstall-blocked",
    title_ar: "تعذّر إعادة تثبيت تطبيق وصول من سلة",
    title_en: "Reinstalling the Wosool app from Salla was blocked",
    severity: "degraded",
    components: ["salla", "dashboard"],
    started_at: "2026-03-31T14:00:00Z",
    resolved_at: "2026-03-31T19:30:00Z",
    summary_ar:
      "التجّار الذين أزالوا تطبيق وصول من سلة ثم أعادوا تثبيته كانوا يواجهون خطأ يمنع الربط. أضفنا تنظيفًا شاملاً عند إعادة التثبيت يحفظ تاريخ المتجر ويفصل الأرقام السابقة ويعيد مسار الإعداد من جديد بلا أي بقايا.",
    summary_en:
      "Merchants who uninstalled and reinstalled the Wosool app hit a block during reconnection. We added a full reinstall cleanup path that preserves the store's history, disconnects previous numbers, and walks the merchant through setup cleanly, with no leftover data.",
  },
  {
    id: "inc-2026-03-22-infra-upgrade",
    title_ar: "انقطاع مؤقت أثناء تحديث البنية التحتية",
    title_en: "Brief outage during infrastructure upgrade",
    severity: "major_outage",
    components: ["dashboard", "whatsapp", "salla"],
    started_at: "2026-03-22T02:00:00Z",
    resolved_at: "2026-03-22T08:00:00Z",
    summary_ar:
      "ترقية البنية التحتية للنشر سبّبت انقطاعًا لمدة ست ساعات في ساعات الليل (توقيت الرياض). بعد الإصلاح، أعدنا بناء خط النشر بحيث يتم بدون انقطاع، وصار كل تحديث مستقبليًا يمر بدون أن يلاحظه التاجر.",
    summary_en:
      "An infrastructure upgrade caused a six-hour overnight outage (Riyadh time). Afterwards, we rebuilt the deploy path to be zero-downtime — every subsequent update has landed without merchants noticing.",
  },
];

// Today is the reference point for the 90-day window.
// For build determinism, we pin it rather than using `new Date()`.
const REFERENCE_DATE = "2026-04-13";

function toDateOnly(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function buildDailySeries(affectedSlug: string): DailyUptime[] {
  const series: DailyUptime[] = [];
  const end = new Date(`${REFERENCE_DATE}T00:00:00Z`);

  for (let i = 0; i < 90; i++) {
    const d = new Date(end);
    d.setUTCDate(end.getUTCDate() - i);
    const date = toDateOnly(d);

    const hit = INCIDENTS.find(
      (inc) =>
        inc.components.includes(affectedSlug) &&
        inc.started_at.slice(0, 10) === date
    );

    if (hit) {
      const uptimePct =
        hit.severity === "major_outage"
          ? 75
          : hit.severity === "partial_outage"
          ? 90
          : hit.severity === "degraded"
          ? 97
          : 100;
      series.push({
        date,
        status: hit.severity,
        uptime_pct: uptimePct,
        incident_id: hit.id,
      });
    } else {
      series.push({
        date,
        status: "operational",
        uptime_pct: 100,
      });
    }
  }
  return series;
}

const RAW_COMPONENTS: Omit<StatusComponent, "daily_uptime" | "current_status">[] = [
  {
    slug: "whatsapp",
    name_ar: "قناة واتساب",
    name_en: "WhatsApp Channel",
    description_ar:
      "استقبال وإرسال رسائل العملاء عبر رقم متجرك على واتساب",
  },
  {
    slug: "customer-agent",
    name_ar: "موظف العملاء",
    name_en: "Customer Agent",
    description_ar: "الرد التلقائي على رسائل العملاء داخل المحادثات",
  },
  {
    slug: "owner-agent",
    name_ar: "موظف صاحب المتجر",
    name_en: "Owner Agent",
    description_ar: "أوامر ومهام صاحب المتجر على واتساب",
  },
  {
    slug: "voice-widget",
    name_ar: "الودجت الصوتية",
    name_en: "Voice Widget",
    description_ar: "المساعد الصوتي المضمَّن داخل موقع متجرك",
  },
  {
    slug: "inbox",
    name_ar: "الصندوق الوارد",
    name_en: "Inbox",
    description_ar: "عرض المحادثات والتحكم بها من لوحة التحكم",
  },
  {
    slug: "dashboard",
    name_ar: "لوحة التحكم",
    name_en: "Dashboard",
    description_ar: "تطبيق وصول للتجّار — الويب + المضمَّن داخل سلة",
  },
  {
    slug: "salla",
    name_ar: "تكامل سلة",
    name_en: "Salla Integration",
    description_ar: "الربط العميق مع متجرك على سلة (منتجات، طلبات، أحداث)",
  },
  {
    slug: "automations",
    name_ar: "الأتمتة والمهام",
    name_en: "Automations & Tasks",
    description_ar:
      "سير العمل الخلفي: متابعة الطلبات، استرجاع السلات، التذكيرات",
  },
  {
    slug: "notifications",
    name_ar: "الإشعارات",
    name_en: "Notifications",
    description_ar: "تنبيهات المالك عبر واتساب وتيليغرام والبريد",
  },
];

export const STATUS_COMPONENTS: StatusComponent[] = RAW_COMPONENTS.map((c) => ({
  ...c,
  current_status: "operational" as ComponentStatus,
  daily_uptime: buildDailySeries(c.slug),
}));

// ---- Aggregations ----

export function averageUptime(days: number): number {
  const totals = STATUS_COMPONENTS.map((c) => {
    const slice = c.daily_uptime.slice(0, days);
    const sum = slice.reduce((acc, d) => acc + d.uptime_pct, 0);
    return sum / slice.length;
  });
  const overall = totals.reduce((a, b) => a + b, 0) / totals.length;
  return Number(overall.toFixed(2));
}

export function worstCurrentStatus(): ComponentStatus {
  return STATUS_COMPONENTS.reduce<ComponentStatus>((worst, c) => {
    return STATUS_RANK[c.current_status] > STATUS_RANK[worst]
      ? c.current_status
      : worst;
  }, "operational");
}

export function activeIncidents(): Incident[] {
  return INCIDENTS.filter((i) => i.resolved_at === null);
}

export function resolvedIncidents(): Incident[] {
  return INCIDENTS.filter((i) => i.resolved_at !== null).sort((a, b) =>
    b.started_at.localeCompare(a.started_at)
  );
}

export function groupIncidentsByMonth(
  incidents: Incident[]
): { key: string; label_ar: string; incidents: Incident[] }[] {
  const months: Record<string, Incident[]> = {};
  const labels: Record<string, string> = {};

  const monthNames = [
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

  for (const inc of incidents) {
    const d = new Date(inc.started_at);
    const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(
      2,
      "0"
    )}`;
    if (!months[key]) months[key] = [];
    months[key].push(inc);
    labels[key] = `${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  }

  return Object.keys(months)
    .sort((a, b) => b.localeCompare(a))
    .map((k) => ({ key: k, label_ar: labels[k], incidents: months[k] }));
}
