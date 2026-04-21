export default function NavBar() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--w-border)",
        background: "var(--w-surface)",
        padding: "12px 0 14px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <NavItem on label="الرئيسية">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      </NavItem>
      <NavItem label="الرسائل">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </NavItem>
      <NavItem label="الموظفون">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
        </svg>
      </NavItem>
      <NavItem label="الأتمتة">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </NavItem>
      <NavItem label="الإعدادات">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="3" />
        </svg>
      </NavItem>
    </div>
  );
}

function NavItem({ on, label, children }: { on?: boolean; label: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        color: on ? "var(--w-teal-700)" : "var(--w-text-muted)",
        padding: "4px 8px",
        minWidth: 82,
        fontWeight: 500,
        position: "relative",
        whiteSpace: "nowrap",
      }}
    >
      {on && (
        <span
          style={{
            content: "",
            position: "absolute",
            top: -12,
            width: 26,
            height: 3,
            background: "var(--w-teal-700)",
            borderRadius: 2,
          }}
        />
      )}
      <span style={{ display: "inline-flex", width: 22, height: 22 }}>{children}</span>
      <span>{label}</span>
    </div>
  );
}
