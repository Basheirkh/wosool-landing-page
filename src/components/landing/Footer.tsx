import Logo from "@/components/ui/Logo";

export default function Footer() {
  const columns = [
    {
      title: "المنصة",
      links: [
        { label: "الأسعار", href: "#pricing" },
        { label: "الميزات", href: "#product" },
        { label: "التكاملات", href: "#" },
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
        { label: "التوثيق", href: "#" },
        { label: "قصص العملاء", href: "#" },
        { label: "المدونة", href: "#" },
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
    <footer className="relative bg-[#080808] py-16 px-6 border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#8a8f98] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <Logo size="sm" color="white" />

          <span className="text-xs text-[#8a8f98]">
            © 2026 وصول — جميع الحقوق محفوظة
          </span>

          <span className="text-xs text-[#8a8f98]">
            صُنع بـ <span className="text-brand-primary">∞</span> في المملكة العربية السعودية 🇸🇦
          </span>
        </div>
      </div>
    </footer>
  );
}
