import { cloneElement, isValidElement } from "react";
import type { ReactNode, ReactElement } from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import ProductRow from "./ProductRow";

/** Reusable icon elements */
const HEADPHONES = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <path d="M4 11a9 9 0 0 1 9-9 9 9 0 0 1 9 9M4 11v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4M22 11v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4" />
  </svg>
);
const CAMERA = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
const HOLDER = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);
const OUD = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const NEW_SPEAKER = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

function FromWhatsApp() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--w-teal-700)", fontWeight: 600, fontSize: 13 }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      من واتساب
    </span>
  );
}

export type PageMode =
  | "disconnected-3"          // F10: 3 products, all default
  | "synced-full"             // F11: new at top + 4 muted below
  | "synced-split"            // F12: new at top + 2 more
  | "price-change-full"       // F13: 4 muted + 1 pulse (camera)
  | "with-speaker"            // split: new speaker from voice + 3 existing
  | "speaker-plus-iphone"     // split: iPhone 17 arriving at top + speaker + 3 existing
  | "iphone-deleting-holder"  // split: iPhone + speaker + airpods + camera + holder(deleting)
  | "post-delete";            // split: iPhone + speaker + airpods + camera (holder gone)

interface Props {
  mode: PageMode;
  compact?: boolean;
  /** Slide-in progress for the new/pulse row (0..1). Defaults 1. */
  featuredSlideIn?: number;
  /** Price morph: 0 = old price 299, 1 = new price 279 (full transition) */
  priceMorph?: number;
  /** Deletion progress for the row being deleted (0..1) */
  deleteProgress?: number;
  subText?: string;
}

export default function ProductsPage({ mode, compact = false, featuredSlideIn = 1, priceMorph = 1, deleteProgress = 0, subText }: Props) {
  const sub = subText ?? defaultSub(mode);
  return (
    <>
      <DashboardHeader title="المنتجات" sub={sub} compact={compact} showBrandName={!compact} />

      <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 14, borderBottom: "1px solid var(--w-border)" }}>
        <span
          style={{
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 14px",
            background: "var(--w-surface-2)",
            border: "1px solid var(--w-border)",
            borderRadius: 10,
            color: "var(--w-text-muted)",
            fontSize: 14,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>{compact ? "ابحث" : "ابحث في المنتجات"}</span>
        </span>
        <Chip on>الكل</Chip>
        {!compact && <Chip>نشط</Chip>}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {renderRows(mode, featuredSlideIn, priceMorph, deleteProgress)}
      </div>
    </>
  );
}

function defaultSub(mode: PageMode): string {
  if (mode === "disconnected-3") return "٨٤ منتج نشط";
  if (mode === "synced-full") return "٨٥ منتج نشط · آخر تحديث قبل ثانيتين";
  if (mode === "synced-split") return "٨٥ منتج · +١ قبل ثانيتين";
  if (mode === "with-speaker") return "٨٥ منتج · +١ قبل ثانيتين";
  if (mode === "speaker-plus-iphone") return "٨٦ منتج · +٢ اليوم";
  if (mode === "iphone-deleting-holder") return "٨٦ منتج · جاري الحذف…";
  if (mode === "post-delete") return "٨٥ منتج · −١ قبل ثوانٍ";
  return "٨٥ منتج نشط · آخر تحديث قبل لحظات";
}

function Chip({ on, children }: { on?: boolean; children: ReactNode }) {
  return (
    <span
      style={{
        padding: "8px 14px",
        background: on ? "var(--w-ink)" : "var(--w-surface)",
        border: "1px solid " + (on ? "var(--w-ink)" : "var(--w-border)"),
        color: on ? "#fff" : "var(--w-text-soft)",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      {children}
    </span>
  );
}

const IPHONE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="30" height="30" aria-hidden>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
    <path d="M10 6h4" />
  </svg>
);

function renderRows(mode: PageMode, slideIn: number, priceMorph: number, deleteProgress: number): ReactNode {
  const airpods = <ProductRow key="airpods" color="blue" thumbIcon={HEADPHONES} name="سماعة AirPods Pro" sku="8842" stock="المخزون: ١٢ قطعة" price="٨٩٩" state="default" />;
  const camera = <ProductRow key="camera" color="amber" thumbIcon={CAMERA} name="كاميرا 4K احترافية" sku="4210" stock="المخزون: ٧ قطع" price="٢٩٩" state="default" />;
  const holder = <ProductRow key="holder" color="violet" thumbIcon={HOLDER} name="حامل تلفون مغناطيسي" sku="1188" stock="المخزون: ٤٨ قطعة" price="٤٩" state="default" />;
  const oud    = <ProductRow key="oud" color="rose" thumbIcon={OUD} name="عطر أوود روز ٥٠مل" sku="2307" stock="المخزون: ٢١ قطعة" price="٣٤٩" state="default" />;

  const speakerRegular = (
    <ProductRow key="speaker" color="mint" thumbIcon={NEW_SPEAKER} name="سماعة X بلوتوث لاسلكية" sku="9041" stock="٢٥ قطعة" price="١٤٩" state="default" />
  );

  const iphoneNew = (
    <ProductRow
      key="iphone"
      color="violet"
      thumbIcon={IPHONE_ICON}
      name="iPhone 17"
      sku="1700"
      stock="المخزون: ٨ قطع"
      price="١٥٠٠"
      statusText="نشط · جاهز للبيع"
      statusAccent
      state="new"
      extraMeta={<FromWhatsApp />}
      slideInProgress={slideIn}
    />
  );

  const iphoneFlat = (
    <ProductRow key="iphone-flat" color="violet" thumbIcon={IPHONE_ICON} name="iPhone 17" sku="1700" stock="٨ قطع" price="١٥٠٠" statusAccent state="default" />
  );

  const holderDeleting = (
    <ProductRow
      key="holder-del"
      color="violet"
      thumbIcon={HOLDER}
      name="حامل تلفون مغناطيسي"
      sku="1188"
      stock="المخزون: ٤٨ قطعة"
      price="٤٩"
      statusText="جاري الحذف…"
      state="deleting"
      deleteProgress={deleteProgress}
    />
  );

  const newSpeaker = (
    <ProductRow
      key="new"
      color="mint"
      thumbIcon={NEW_SPEAKER}
      name="سماعة X بلوتوث لاسلكية"
      sku="9041"
      stock="المخزون: ٢٥ قطعة"
      price="١٤٩"
      statusText="نشط · جاهز للبيع"
      statusAccent
      state="new"
      extraMeta={<FromWhatsApp />}
      slideInProgress={slideIn}
    />
  );

  if (mode === "disconnected-3") {
    return [airpods, camera, holder];
  }
  if (mode === "synced-full") {
    return [
      newSpeaker,
      mute(airpods),
      mute(camera),
      mute(holder),
      mute(oud),
    ];
  }
  if (mode === "synced-split") {
    const newSpeakerFlat = (
      <ProductRow
        key="new"
        color="mint"
        thumbIcon={NEW_SPEAKER}
        name="سماعة X بلوتوث لاسلكية"
        sku="9041"
        stock="٢٥ قطعة"
        price="١٤٩"
        statusText="نشط"
        statusAccent
        state="new"
      />
    );
    return [newSpeakerFlat, airpods, camera];
  }
  if (mode === "with-speaker") {
    return [newSpeaker, airpods, camera, holder];
  }
  if (mode === "speaker-plus-iphone") {
    return [iphoneNew, speakerRegular, airpods, camera, holder];
  }
  if (mode === "iphone-deleting-holder") {
    return [iphoneFlat, speakerRegular, airpods, camera, holderDeleting];
  }
  if (mode === "post-delete") {
    return [iphoneFlat, speakerRegular, airpods, camera];
  }
  // price-change-full
  const oldPrice = "٢٩٩";
  const newPrice = lerpArabicNumeric(299, 279, priceMorph);
  const delta = priceMorph >= 0.98 ? "خصم ٢٠ ريال" : undefined;
  const pulseCamera = (
    <ProductRow
      key="camera"
      color="amber"
      thumbIcon={CAMERA}
      name="كاميرا 4K احترافية"
      sku="4210"
      stock="المخزون: ٧ قطع"
      state="pulse"
      extraMeta={
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--w-teal-700)", fontWeight: 600 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
          عُدِّل من واتساب قبل ثوانٍ
        </span>
      }
      priceChange={{ oldPrice, newPrice, delta }}
    />
  );
  return [
    mute(newSpeaker, "new-muted"),
    mute(airpods, "airpods-muted"),
    pulseCamera,
    mute(holder, "holder-muted"),
    mute(oud, "oud-muted"),
  ];
}

function mute(row: ReactNode, key?: string): ReactNode {
  if (!isValidElement(row)) return row;
  const el = row as ReactElement<{ state?: RowState }>;
  return cloneElement(el, { state: "muted", key: key ?? el.key ?? undefined });
}

type RowState = "default" | "muted" | "new" | "pulse";

/** Arabic numeric lerp for the price morph (simple rounded integer → Arabic digits) */
function lerpArabicNumeric(from: number, to: number, t: number): string {
  const v = Math.round(from + (to - from) * Math.max(0, Math.min(1, t)));
  return v.toString().replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}
