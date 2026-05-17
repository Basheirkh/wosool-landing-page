import Link from "next/link";
import { useTranslations } from "next-intl";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const t = useTranslations("Footer");

  const columns = [
    {
      title: t("col_platform"),
      links: [
        { label: t("link_pricing"), href: "/pricing" },
        { label: t("link_features"), href: "/features" },
        { label: t("link_integrations"), href: "/features" },
        { label: t("link_changelog"), href: "/changelog" },
        { label: t("link_status"), href: "/status" },
      ],
    },
    {
      title: t("col_resources"),
      links: [
        { label: t("link_blog"), href: "/blog" },
        { label: t("link_docs"), href: "/blog/for-developers" },
        { label: t("link_talk_to_team"), href: "/contact" },
      ],
    },
    {
      title: t("col_company"),
      links: [
        { label: t("link_about"), href: "/about" },
        { label: t("link_contact"), href: "/contact" },
        { label: t("link_press"), href: "mailto:info@wosool.ai" },
      ],
    },
    {
      title: t("col_legal"),
      links: [
        { label: t("link_terms"), href: "/terms" },
        { label: t("link_privacy"), href: "/privacy" },
        { label: t("link_dpa"), href: "/dpa" },
        { label: t("link_refunds"), href: "/refunds" },
        { label: t("link_cookies"), href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="theme-surface relative py-16 px-6 border-t theme-border">
      <div className="max-w-[1400px] mx-auto">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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

          <span className="theme-text-secondary text-xs">{t("copyright")}</span>

          <span className="theme-text-secondary text-xs">{t("made_in")}</span>
        </div>
      </div>
    </footer>
  );
}
