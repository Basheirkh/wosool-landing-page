export function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="theme-text-secondary mb-3 text-xs uppercase tracking-[0.28em]">
        القسم {number}
      </div>
      <h2 className="theme-text-primary mb-6 text-2xl font-bold md:text-3xl">
        {title}
      </h2>
      <div className="theme-text-secondary text-[16px] leading-9">{children}</div>
    </section>
  );
}

export function LegalTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="theme-content-card overflow-hidden rounded-3xl">
      <div className="overflow-x-auto">
        <table className="w-full text-right text-sm">
          <thead>
            <tr className="border-b theme-border">
              {headers.map((h) => (
                <th
                  key={h}
                  className="theme-text-primary px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={i < rows.length - 1 ? "border-b theme-border" : ""}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-5 py-4 leading-7 ${
                      j === 0
                        ? "theme-text-primary font-medium"
                        : "theme-text-secondary"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function LegalCallout({
  label = "ملاحظة",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-3xl border border-brand-primary/15 bg-brand-primary/[0.05] p-5">
      <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.24em]">
        {label}
      </div>
      <p className="theme-text-primary text-[15px] leading-8">{children}</p>
    </div>
  );
}

export function LegalTOC({
  sections,
  contactLabel,
  contactBody,
  contactHref,
  contactCta,
}: {
  sections: { id: string; title: string }[];
  contactLabel: string;
  contactBody: string;
  contactHref: string;
  contactCta: string;
}) {
  return (
    <aside className="xl:sticky xl:top-[96px] xl:self-start">
      <div className="theme-article-surface rounded-[32px] p-6">
        <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.24em]">
          في هذه الصفحة
        </div>
        <div className="space-y-2">
          {sections.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className="theme-text-secondary block rounded-2xl px-4 py-3 text-sm leading-7 transition-colors hover:bg-[color:var(--bg-surface)] hover:text-[var(--text-primary)]"
            >
              {heading.title}
            </a>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-brand-primary/15 bg-brand-primary/[0.05] p-5">
          <div className="theme-text-primary mb-2 text-sm font-medium">
            {contactLabel}
          </div>
          <p className="theme-text-secondary mb-4 text-sm leading-7">
            {contactBody}
          </p>
          <a
            href={contactHref}
            className="theme-btn-primary inline-flex rounded-full px-5 py-3 text-sm font-medium transition"
          >
            {contactCta}
          </a>
        </div>
      </div>
    </aside>
  );
}

export function LegalHeader({
  badge,
  updatedAt,
  title,
  intro,
  extraBadges,
}: {
  badge: string;
  updatedAt: string;
  title: string;
  intro: string;
  extraBadges?: string[];
}) {
  return (
    <>
      <div className="mb-8 flex flex-wrap items-center gap-3 text-xs">
        <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
          {badge}
        </span>
        <span className="theme-chip rounded-full px-4 py-2">
          آخر تحديث: {updatedAt}
        </span>
        {extraBadges?.map((b) => (
          <span key={b} className="theme-chip rounded-full px-4 py-2">
            {b}
          </span>
        ))}
      </div>

      <h1 className="theme-text-primary mb-4 text-4xl font-bold leading-tight md:text-5xl">
        {title}
      </h1>
      <p className="theme-text-secondary max-w-3xl text-[17px] leading-8">{intro}</p>
    </>
  );
}
