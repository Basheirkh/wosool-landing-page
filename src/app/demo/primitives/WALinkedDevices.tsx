import { PhoneStatusBar } from "./PhoneMockup";

export default function WALinkedDevices() {
  return (
    <>
      <PhoneStatusBar />
      <div
        style={{
          padding: "22px 20px 18px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span style={{ color: "#00A884", display: "inline-flex" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
        <h2 style={{ fontSize: 19, fontWeight: 600, margin: 0, color: "#E9EDEF" }}>الأجهزة المرتبطة</h2>
      </div>

      <div style={{ padding: "24px 24px 20px", color: "#E9EDEF" }}>
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "rgba(0, 168, 132, 0.12)",
            margin: "8px auto 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#00A884",
          }}
        >
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="4" y="2" width="16" height="20" rx="3" />
            <rect x="8" y="6" width="8" height="8" />
            <line x1="10" y1="18" x2="14" y2="18" />
          </svg>
        </div>
        <h3 style={{ textAlign: "center", fontSize: 18, fontWeight: 600, margin: "0 0 12px", color: "#E9EDEF" }}>
          استخدم واتساب في أجهزة أخرى
        </h3>
        <p style={{ textAlign: "center", fontSize: 13, lineHeight: 1.55, color: "#8696A0", margin: "0 auto", maxWidth: 320 }}>
          امسح رمز الاستجابة السريعة على الجهاز الذي تريد ربطه لتسجيل الدخول إلى حسابك.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
          <button
            type="button"
            style={{
              background: "#00A884",
              color: "#fff",
              border: 0,
              padding: "12px 26px",
              borderRadius: 999,
              fontFamily: "inherit",
              fontSize: 15,
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="3" width="5" height="5" />
              <rect x="16" y="3" width="5" height="5" />
              <rect x="3" y="16" width="5" height="5" />
            </svg>
            ربط جهاز
          </button>
        </div>
        <div style={{ marginTop: 28, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div
            style={{
              padding: "16px 4px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 14,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "rgba(255,255,255,0.06)",
                color: "#00A884",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <b style={{ display: "block", color: "#E9EDEF", fontWeight: 500, fontSize: 14 }}>هذا الهاتف (نشط)</b>
              <span style={{ display: "block", color: "#8696A0", fontSize: 12, marginTop: 2 }}>iPhone · ٩:٤١ ص</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
