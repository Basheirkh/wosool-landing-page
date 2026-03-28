import { Fragment, ReactNode } from "react";

type BlogArticleBodyProps = {
  body: string;
};

type Block =
  | { type: "heading"; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; code: string }
  | { type: "quote"; lines: string[] };

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

    if (!trimmed || trimmed === "---") {
      continue;
    }

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

    if (trimmed.startsWith("> ")) {
      const quoteLines = [trimmed.replace(/^> /, "")];
      while (index + 1 < lines.length && lines[index + 1].trim().startsWith("> ")) {
        index += 1;
        quoteLines.push(lines[index].trim().replace(/^> /, ""));
      }
      blocks.push({ type: "quote", lines: quoteLines });
      continue;
    }

    if (trimmed.startsWith("- ") || /^\d+\.\s/.test(trimmed)) {
      const ordered = /^\d+\.\s/.test(trimmed);
      const items = [trimmed.replace(ordered ? /^\d+\.\s/ : /^-\s/, "")];
      while (index + 1 < lines.length) {
        const next = lines[index + 1].trim();
        const isMatch = ordered ? /^\d+\.\s/.test(next) : next.startsWith("- ");
        if (!isMatch) {
          break;
        }
        index += 1;
        items.push(next.replace(ordered ? /^\d+\.\s/ : /^-\s/, ""));
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }

    const paragraphLines = [line];
    while (index + 1 < lines.length) {
      const next = lines[index + 1].trim();
      if (!next || next === "---" || next.startsWith("## ") || next.startsWith("- ") || next.startsWith("> ") || next.startsWith("```") || /^\d+\.\s/.test(next)) {
        break;
      }
      index += 1;
      paragraphLines.push(lines[index]);
    }
    blocks.push({ type: "paragraph", text: paragraphLines.join("\n").trim() });
  }

  return blocks;
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const boldPattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null = boldPattern.exec(text);

  while (match) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <strong key={`${match.index}-${match[1]}`} className="font-semibold text-[var(--text-primary)]">
        {match[1]}
      </strong>,
    );
    lastIndex = match.index + match[0].length;
    match = boldPattern.exec(text);
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.flatMap((node, index) =>
    typeof node === "string"
      ? node.split("\n").flatMap((segment, segmentIndex, all) => [
          segment,
          ...(segmentIndex < all.length - 1 ? [<br key={`br-${index}-${segmentIndex}`} />] : []),
        ])
      : [<Fragment key={`inline-${index}`}>{node}</Fragment>],
  );
}

export default function BlogArticleBody({ body }: BlogArticleBodyProps) {
  const blocks = parseBlocks(body);

  return (
    <div className="space-y-7">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <section key={`${block.id}-${index}`} className="scroll-mt-28" id={block.id}>
              <h2 className="theme-text-primary text-[28px] md:text-[36px] font-bold leading-[1.2]">
                {block.text}
              </h2>
            </section>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={`paragraph-${index}`} className="theme-text-secondary text-[17px] leading-[2]">
              {renderInline(block.text)}
            </p>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={`list-${index}`}
              className={`theme-text-secondary space-y-3 text-[17px] leading-[1.9] ${block.ordered ? "list-decimal pr-6" : "list-disc pr-6"}`}
            >
              {block.items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ListTag>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={`quote-${index}`}
              className="theme-content-card theme-text-primary rounded-3xl px-6 py-5 text-lg leading-[1.9]"
            >
              {block.lines.map((line) => (
                <p key={line}>{renderInline(line)}</p>
              ))}
            </blockquote>
          );
        }

        return (
          <pre
            key={`code-${index}`}
            className="overflow-x-auto rounded-3xl border border-white/[0.08] bg-[#0b1016] p-5 font-mono text-sm leading-7 text-[#c8f7df]"
          >
            <code>{block.code}</code>
          </pre>
        );
      })}
    </div>
  );
}
