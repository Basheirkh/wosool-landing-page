import { Fragment, ReactNode } from "react";

type BlogArticleBodyProps = {
  body: string;
};

type Block =
  | { type: "heading"; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; code: string }
  | { type: "quote"; lines: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

function slugifyHeading(input: string) {
  return input
    .trim()
    .replace(/[^\u0600-\u06FF\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function parseBlocks(body: string): Block[] {
  const lines = body.split("\n");
  const blocks: Block[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed || trimmed === "---") continue;

    if (trimmed.startsWith("```")) {
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      blocks.push({ type: "code", code: codeLines.join("\n") });
      continue;
    }

    if (trimmed.startsWith("## ")) {
      const text = trimmed.replace("## ", "").trim();
      blocks.push({ type: "heading", text, id: slugifyHeading(text) });
      continue;
    }

    // Table detection
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableLines = [trimmed];
      while (index + 1 < lines.length && lines[index + 1].trim().startsWith("|")) {
        index += 1;
        tableLines.push(lines[index].trim());
      }
      if (tableLines.length >= 3) {
        const parseCells = (row: string) =>
          row.split("|").slice(1, -1).map(c => c.trim());
        const headers = parseCells(tableLines[0]);
        const dataRows = tableLines
          .slice(2)
          .filter(r => !r.match(/^\|[\s-|]+\|$/))
          .map(parseCells);
        blocks.push({ type: "table", headers, rows: dataRows });
        continue;
      }
    }

    if (trimmed.startsWith("> ")) {
      const rawQuoteLines: string[] = [trimmed.replace(/^> ?/, "")];
      while (index + 1 < lines.length && lines[index + 1].trim().startsWith("> ")) {
        index += 1;
        rawQuoteLines.push(lines[index].trim().replace(/^> ?/, ""));
      }

      // Check if this blockquote contains a table
      const tableStart = rawQuoteLines.findIndex(l => l.startsWith("|") && l.endsWith("|"));
      if (tableStart !== -1) {
        // Text before the table → quote block
        const preLines = rawQuoteLines.slice(0, tableStart).filter(l => l.trim());
        if (preLines.length > 0) {
          blocks.push({ type: "quote", lines: preLines });
        }

        // Extract table lines
        const tLines: string[] = [];
        for (let ti = tableStart; ti < rawQuoteLines.length; ti++) {
          if (rawQuoteLines[ti].startsWith("|")) {
            tLines.push(rawQuoteLines[ti]);
          } else break;
        }
        if (tLines.length >= 3) {
          const parseCells = (row: string) =>
            row.split("|").slice(1, -1).map(c => c.trim());
          const headers = parseCells(tLines[0]);
          const dataRows = tLines
            .slice(2)
            .filter(r => !r.match(/^\s*\|[\s-|]+\|\s*$/))
            .map(parseCells);
          blocks.push({ type: "table", headers, rows: dataRows });
        }

        // Text after the table → quote block
        const afterTableEnd = tableStart + tLines.length;
        const postLines = rawQuoteLines.slice(afterTableEnd).filter(l => l.trim());
        if (postLines.length > 0) {
          blocks.push({ type: "quote", lines: postLines });
        }
      } else {
        blocks.push({ type: "quote", lines: rawQuoteLines });
      }
      continue;
    }

    if (trimmed.startsWith("- ") || /^\d+\.\s/.test(trimmed)) {
      const ordered = /^\d+\.\s/.test(trimmed);
      const items = [trimmed.replace(ordered ? /^\d+\.\s/ : /^-\s/, "")];
      while (index + 1 < lines.length) {
        const next = lines[index + 1].trim();
        const isMatch = ordered ? /^\d+\.\s/.test(next) : next.startsWith("- ");
        if (!isMatch) break;
        index += 1;
        items.push(next.replace(ordered ? /^\d+\.\s/ : /^-\s/, ""));
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }

    const paragraphLines = [line];
    while (index + 1 < lines.length) {
      const next = lines[index + 1].trim();
      if (!next || next === "---" || next.startsWith("## ") || next.startsWith("- ") || next.startsWith("> ") || next.startsWith("```") || next.startsWith("|") || /^\d+\.\s/.test(next)) break;
      index += 1;
      paragraphLines.push(lines[index]);
    }
    blocks.push({ type: "paragraph", text: paragraphLines.join("\n").trim() });
  }

  return blocks;
}

/* ── Inline SVG icon components ── */

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D97E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mx-0.5 flex-shrink-0" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mx-0.5 flex-shrink-0" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mx-0.5 flex-shrink-0" aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D97E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mx-0.5 flex-shrink-0" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mx-0.5 flex-shrink-0" aria-hidden="true">
      <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
    </svg>
  );
}

function IconBulb() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F6C453" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mx-0.5 flex-shrink-0" aria-hidden="true">
      <path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mx-0.5 flex-shrink-0" aria-hidden="true">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    </svg>
  );
}

function IconSun() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F6C453" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mx-0.5 flex-shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  );
}

function IconPackage() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mx-0.5 flex-shrink-0" aria-hidden="true">
      <path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/>
    </svg>
  );
}

function IconCart() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D97E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mx-0.5 flex-shrink-0" aria-hidden="true">
      <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
  );
}

/* ── Text marker → icon mapping (deterministic, no Math.random) ── */

const markerMap: Array<{ marker: string; render: (key: string) => ReactNode }> = [
  { marker: "[نعم]", render: (k) => <IconCheck key={k} /> },
  { marker: "[لا]", render: (k) => <IconX key={k} /> },
  { marker: "[تم]", render: (k) => <IconCheck key={k} /> },
  { marker: "[تنبيه]", render: (k) => <IconAlert key={k} /> },
  { marker: "[محادثة]", render: (k) => <IconChat key={k} /> },
  { marker: "[تقرير]", render: (k) => <IconChart key={k} /> },
  { marker: "[ملاحظة]", render: (k) => <IconBulb key={k} /> },
  { marker: "[جدول]", render: (k) => <IconClipboard key={k} /> },
  { marker: "[صباح]", render: (k) => <IconSun key={k} /> },
  { marker: "[شحنة]", render: (k) => <IconPackage key={k} /> },
  { marker: "[طلب]", render: (k) => <IconCart key={k} /> },
];

function replaceMarkers(text: string, keyPrefix: string): ReactNode[] {
  const result: ReactNode[] = [];
  let remaining = text;
  let counter = 0;

  while (remaining.length > 0) {
    let earliestIndex = remaining.length;
    let matched: (typeof markerMap)[number] | null = null;

    for (const entry of markerMap) {
      const idx = remaining.indexOf(entry.marker);
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        matched = entry;
      }
    }

    if (matched && earliestIndex < remaining.length) {
      if (earliestIndex > 0) {
        result.push(remaining.slice(0, earliestIndex));
      }
      result.push(matched.render(`${keyPrefix}-icon-${counter++}`));
      remaining = remaining.slice(earliestIndex + matched.marker.length);
    } else {
      result.push(remaining);
      break;
    }
  }

  return result;
}

function renderInline(text: string, keyPrefix = "p"): ReactNode[] {
  const nodes: ReactNode[] = [];
  const boldPattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null = boldPattern.exec(text);

  while (match) {
    if (match.index > lastIndex) {
      nodes.push(...replaceMarkers(text.slice(lastIndex, match.index), `${keyPrefix}-${lastIndex}`));
    }
    nodes.push(
      <strong key={`b-${keyPrefix}-${match.index}`} className="font-semibold text-[var(--text-primary)]">
        {replaceMarkers(match[1], `${keyPrefix}-b-${match.index}`)}
      </strong>,
    );
    lastIndex = match.index + match[0].length;
    match = boldPattern.exec(text);
  }

  if (lastIndex < text.length) {
    nodes.push(...replaceMarkers(text.slice(lastIndex), `${keyPrefix}-${lastIndex}`));
  }

  return nodes.flatMap((node, index) =>
    typeof node === "string"
      ? node.split("\n").flatMap((segment, segmentIndex, all) => [
          segment,
          ...(segmentIndex < all.length - 1 ? [<br key={`br-${keyPrefix}-${index}-${segmentIndex}`} />] : []),
        ])
      : [<Fragment key={`f-${keyPrefix}-${index}`}>{node}</Fragment>],
  );
}

/* ── Table cell renderer ── */

function TableCell({ text, isHighlighted, cellKey }: { text: string; isHighlighted: boolean; cellKey: string }) {
  const hasYes = text.includes("[نعم]") || text.includes("[تم]");
  const hasNo = text.includes("[لا]");
  const cleanText = text.replace(/\[نعم\]|\[لا\]|\[تم\]/g, "").trim();

  return (
    <td
      className={`px-4 py-3.5 text-sm border-b border-subtle ${isHighlighted ? "font-medium" : ""}`}
      style={isHighlighted ? { background: "linear-gradient(135deg, rgba(0,217,126,0.08), rgba(0,217,126,0.03))" } : undefined}
    >
      <span className="inline-flex items-center gap-1.5">
        {hasYes && <IconCheck key={`${cellKey}-c`} />}
        {hasNo && <IconX key={`${cellKey}-x`} />}
        <span className={isHighlighted ? "text-brand-primary" : ""}>{cleanText}</span>
      </span>
    </td>
  );
}

export default function BlogArticleBody({ body }: BlogArticleBodyProps) {
  const blocks = parseBlocks(body);

  return (
    <div className="space-y-7">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <section key={`h-${block.id}-${index}`} className="scroll-mt-28" id={block.id}>
              <h2 className="theme-text-primary text-[28px] md:text-[36px] font-bold leading-[1.2]">
                {block.text}
              </h2>
            </section>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={`p-${index}`} className="theme-text-secondary text-[17px] leading-[2]">
              {renderInline(block.text, `p-${index}`)}
            </p>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={`l-${index}`}
              className={`theme-text-secondary space-y-3 text-[17px] leading-[1.9] ${block.ordered ? "list-decimal pr-6" : "list-disc pr-6"}`}
            >
              {block.items.map((item, i) => (
                <li key={`li-${index}-${i}`}>{renderInline(item, `li-${index}-${i}`)}</li>
              ))}
            </ListTag>
          );
        }

        if (block.type === "table") {
          const wosoolCol = block.headers.findIndex(h => h.includes("وصول"));
          return (
            <div key={`t-${index}`} className="overflow-x-auto rounded-2xl border border-subtle my-4">
              <table className="w-full text-sm" dir="rtl">
                <thead>
                  <tr className="bg-ghost">
                    {block.headers.map((header, i) => (
                      <th
                        key={`th-${index}-${i}`}
                        className={`px-4 py-3.5 text-right font-semibold border-b-2 border-subtle ${i === wosoolCol ? "text-brand-primary" : "text-primary"}`}
                        style={i === wosoolCol ? { background: "rgba(0,217,126,0.08)", borderBottomColor: "rgba(0,217,126,0.3)" } : undefined}
                      >
                        <span className="inline-flex items-center gap-2">
                          {i === wosoolCol && (
                            <span className="inline-block h-2 w-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(0,217,126,0.4)]" />
                          )}
                          {header}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, ri) => (
                    <tr key={`tr-${index}-${ri}`} className={ri % 2 !== 0 ? "bg-ghost" : ""}>
                      {row.map((cell, ci) => (
                        <TableCell key={`td-${index}-${ri}-${ci}`} text={cell} isHighlighted={ci === wosoolCol} cellKey={`td-${index}-${ri}-${ci}`} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={`q-${index}`}
              className="theme-content-card theme-text-primary rounded-3xl px-6 py-5 text-lg leading-[1.9]"
            >
              {block.lines.map((line, i) => (
                <p key={`ql-${index}-${i}`}>{renderInline(line, `q-${index}-${i}`)}</p>
              ))}
            </blockquote>
          );
        }

        return (
          <pre
            key={`c-${index}`}
            className="overflow-x-auto rounded-3xl border border-white/[0.08] bg-[#0b1016] p-5 font-mono text-sm leading-7 text-[#c8f7df]"
          >
            <code>{block.code}</code>
          </pre>
        );
      })}
    </div>
  );
}
