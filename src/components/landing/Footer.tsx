import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const columns = [
    {
      title: "المنصة",
      links: [
        { label: "الأسعار", href: "/#pricing" },
        { label: "الميزات", href: "/#product" },
        { label: "التكاملات", href: "/#product" },
        { label: "التحديثات", href: "/changelog" },
        { label: "حالة المنصة", href: "/status" },
      ],
    },
    {
      title: "الموارد",
      links: [
        { label: "المدونة", href: "/blog" },
        { label: "التوثيق", href: "/blog/for-developers" },
        { label: "تحدث إلى فريقنا", href: "/contact" },
      ],
    },
    {
      title: "الشركة",
      links: [
        { label: "عن وصول", href: "/about" },
        { label: "تواصل معنا", href: "/contact" },
        { label: "الصحافة", href: "mailto:press@wosool.ai" },
      ],
    },
    {
      title: "قانوني",
      links: [
        { label: "شروط الاستخدام", href: "/terms" },
        { label: "سياسة الخصوصية", href: "/privacy" },
        { label: "اتفاقية معالجة البيانات", href: "/dpa" },
        { label: "الإلغاء والاسترداد", href: "/refunds" },
        { label: "ملفات الارتباط", href: "/cookies" },
      ],
    },
    {
      title: "الحوكمة",
      links: [
        { label: "الإفصاح عن الذكاء الاصطناعي", href: "/ai-disclosure" },
        { label: "أخلاقيات AI", href: "mailto:ethics@wosool.ai" },
        { label: "حقوق البيانات", href: "mailto:privacy@wosool.ai" },
        {
          label: "شكاوى SDAIA",
          href: "https://pdpl.sdaia.gov.sa",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="theme-surface relative py-16 px-6 border-t theme-border">
      <div className="max-w-[1400px] mx-auto">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="theme-text-primary text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => {
                  const isExternal =
                    "external" in link && (link as { external?: boolean }).external;
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-link-muted text-sm transition-colors inline-flex items-center gap-1"
                        >
                          {link.label}
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-60"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="theme-link-muted text-sm transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t theme-border">
          <Logo size="sm" color="adaptive" />

          <span className="theme-text-secondary text-xs">
            © 2026 وصول — جميع الحقوق محفوظة
          </span>

          <span className="theme-text-secondary text-xs">
            صُنع بـ <span className="text-brand-primary">∞</span> في المملكة العربية السعودية
          </span>
        </div>
      </div>
    </footer>
  );
}
