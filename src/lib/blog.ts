import fs from "node:fs";
import path from "node:path";

export type BlogArticle = {
  number: string;
  slug: string;
  path: string;
  title: string;
  audience: string;
  goal: string;
  body: string;
  excerpt: string;
  readTime: string;
  headings: Array<{ id: string; title: string }>;
  visual: {
    theme: "signal" | "market" | "memory" | "vault" | "network" | "future" | "developer";
    eyebrow: string;
    word: string;
    accent: string;
    secondaryAccent: string;
    featured?: boolean;
  };
};

const BLOG_FILE = path.join(process.cwd(), "blog-content.md");

const VISUALS: Record<string, BlogArticle["visual"]> = {
  "what-is-wosool": {
    theme: "signal",
    eyebrow: "تعرّف على وصول",
    word: "يشغّل",
    accent: "#00D97E",
    secondaryAccent: "#6EE7B7",
    featured: true,
  },
  "how-wosool-works": {
    theme: "network",
    eyebrow: "كيف يشتغل",
    word: "يفهم",
    accent: "#00D97E",
    secondaryAccent: "#22D3EE",
    featured: true,
  },
  "wosool-vs-chatgpt": {
    theme: "market",
    eyebrow: "مقارنة",
    word: "أذكى",
    accent: "#F6C453",
    secondaryAccent: "#00D97E",
    featured: true,
  },
  "wosool-vs-botpress": {
    theme: "developer",
    eyebrow: "مقارنة",
    word: "جاهز",
    accent: "#60A5FA",
    secondaryAccent: "#00D97E",
  },
  "why-whatsapp-is-the-office": {
    theme: "signal",
    eyebrow: "ليش واتساب",
    word: "المكتب",
    accent: "#25D366",
    secondaryAccent: "#00D97E",
  },
  "memory-layers": {
    theme: "memory",
    eyebrow: "الذاكرة",
    word: "يتذكر",
    accent: "#A78BFA",
    secondaryAccent: "#00D97E",
    featured: true,
  },
  "security-and-approval": {
    theme: "vault",
    eyebrow: "الأمان",
    word: "الحدود",
    accent: "#F97316",
    secondaryAccent: "#00D97E",
  },
  "from-signup-to-live": {
    theme: "network",
    eyebrow: "ابدأ الحين",
    word: "دقيقتين",
    accent: "#22D3EE",
    secondaryAccent: "#00D97E",
  },
  "customer-recognition": {
    theme: "signal",
    eyebrow: "يعرف عملاءك",
    word: "يعرفك",
    accent: "#FB7185",
    secondaryAccent: "#00D97E",
  },
  "store-intelligence": {
    theme: "market",
    eyebrow: "بيانات متجرك",
    word: "يرى",
    accent: "#F6C453",
    secondaryAccent: "#00D97E",
  },
  "agentic-ai-era": {
    theme: "future",
    eyebrow: "مستقبل الذكاء",
    word: "موظفين",
    accent: "#38BDF8",
    secondaryAccent: "#A78BFA",
  },
  "for-developers": {
    theme: "developer",
    eyebrow: "للمطورين",
    word: "البنية",
    accent: "#60A5FA",
    secondaryAccent: "#22D3EE",
    featured: true,
  },
  "why-we-built-wosool": {
    theme: "signal",
    eyebrow: "قصتنا",
    word: "لماذا",
    accent: "#00D97E",
    secondaryAccent: "#F6C453",
  },
  "beyond-automation": {
    theme: "future",
    eyebrow: "أكثر من ردود",
    word: "أبعد",
    accent: "#A78BFA",
    secondaryAccent: "#00D97E",
  },
  "real-questions": {
    theme: "vault",
    eyebrow: "أسئلة وأجوبة",
    word: "وضوح",
    accent: "#F97316",
    secondaryAccent: "#F6C453",
  },
  "wosool-agents-architecture": {
    theme: "network",
    eyebrow: "4 موظفين",
    word: "4 موظفين",
    accent: "#00D97E",
    secondaryAccent: "#38BDF8",
    featured: true,
  },
  "zero-human-intervention": {
    theme: "future",
    eyebrow: "رؤية 2030",
    word: "2030",
    accent: "#38BDF8",
    secondaryAccent: "#00D97E",
    featured: true,
  },
};

function slugifyHeading(input: string) {
  return input
    .trim()
    .replace(/[^\u0600-\u06FF\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function extractExcerpt(body: string) {
  const lines = body.split("\n");
  const start = lines.findIndex((line) => line.startsWith("## "));
  const excerptLines = lines
    .slice(start + 1)
    .filter((line) => line.trim() && !line.startsWith("---") && !line.startsWith("- ") && !line.startsWith("```"));

  return excerptLines.slice(0, 2).join(" ").replace(/\*\*/g, "").trim();
}

function estimateReadTime(body: string) {
  const words = body.replace(/[`*#>-]/g, " ").trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(3, Math.round(words / 180));
  return `${minutes} دقائق`;
}

function parseArticle(rawSection: string): BlogArticle | null {
  const lines = rawSection.split("\n");
  const articleLine = lines.find((line) => line.startsWith("# المقال"));
  const titleLine = lines.find((line) => line.startsWith("# ") && !line.startsWith("# المقال"));
  const pathLine = lines.find((line) => line.startsWith("**المسار:**"));
  const audienceLine = lines.find((line) => line.startsWith("**الجمهور:**"));
  const goalLine = lines.find((line) => line.startsWith("**الهدف:**"));

  if (!articleLine || !titleLine || !pathLine || !audienceLine || !goalLine) {
    return null;
  }

  const number = articleLine.replace("# المقال", "").trim().padStart(2, "0");
  const articlePath = pathLine.replace("**المسار:**", "").trim();
  const slug = articlePath.split("/").filter(Boolean).pop() ?? "";
  const bodyStart = lines.findIndex((line) => line.startsWith("## "));
  const body = lines.slice(bodyStart).join("\n").trim();
  const headings = body
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", "").trim())
    .map((heading) => ({ id: slugifyHeading(heading), title: heading }));

  return {
    number,
    slug,
    path: articlePath,
    title: titleLine.replace(/^# /, "").trim(),
    audience: audienceLine.replace("**الجمهور:**", "").trim(),
    goal: goalLine.replace("**الهدف:**", "").trim(),
    body,
    excerpt: extractExcerpt(body),
    readTime: estimateReadTime(body),
    headings,
    visual: VISUALS[slug] ?? {
      theme: "signal",
      eyebrow: "Wosool",
      word: "وصول",
      accent: "#00D97E",
      secondaryAccent: "#6EE7B7",
    },
  };
}

export function getAllArticles() {
  const raw = fs.readFileSync(BLOG_FILE, "utf8");
  const articlePattern = /^# المقال \d+\s*$/gm;
  const matches: Array<{ index: number }> = [];
  let match = articlePattern.exec(raw);

  while (match) {
    matches.push({ index: match.index });
    match = articlePattern.exec(raw);
  }

  return matches
    .map((match, index) => {
      const start = match.index ?? 0;
      const end = matches[index + 1]?.index ?? raw.length;
      return raw.slice(start, end).trim();
    })
    .map(parseArticle)
    .filter((article): article is BlogArticle => Boolean(article));
}

export function getFeaturedArticles() {
  return getAllArticles().filter((article) => article.visual.featured);
}

export function getArticleBySlug(slug: string) {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getAdjacentArticles(slug: string) {
  const articles = getAllArticles();
  const index = articles.findIndex((article) => article.slug === slug);

  return {
    previous: index > 0 ? articles[index - 1] : null,
    next: index >= 0 && index < articles.length - 1 ? articles[index + 1] : null,
  };
}
