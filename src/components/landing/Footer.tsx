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
        { label: "التحديثات", href: "#" },
      ],
    },
    {
      title: "المركز",
      links: [
        { label: "التكاملات", href: "#" },
        { label: "القنوات", href: "#" },
        { label: "الوثائق", href: "#" },
      ],
    },
    {
      title: "الموارد",
      links: [
        { label: "تحدث إلى فريقنا", href: "#" },
        { label: "التوثيق", href: "/blog/for-developers" },
        { label: "الرؤية", href: "#" },
        { label: "المدونة", href: "/blog" },
        { label: "الحالة", href: "#" },
      ],
    },
    {
      title: "المجتمع",
      links: [
        { label: "واتساب", href: "#" },
        { label: "تويتر", href: "#" },
        { label: "لينكدإن", href: "#" },
      ],
    },
    {
      title: "الشركة",
      links: [
        { label: "عن وصول", href: "#" },
        { label: "التوظيف", href: "#" },
        { label: "قانوني", href: "#" },
        { label: "الخصوصية", href: "#" },
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
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="theme-link-muted text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
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
            صُنع بـ <span className="text-brand-primary">∞</span> في المملكة العربية السعودية 🇸🇦
          </span>
        </div>
      </div>
    </footer>
  );
}
