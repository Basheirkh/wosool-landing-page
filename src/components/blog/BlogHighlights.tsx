import Link from "next/link";
import BlogCoverArt from "@/components/blog/BlogCoverArt";
import { getFeaturedArticles } from "@/lib/blog";

export default function BlogHighlights() {
  const featured = getFeaturedArticles().slice(0, 4);

  return (
    <section className="relative px-6 py-24 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 text-xs tracking-[0.24em] text-brand-primary uppercase">
              Learn
            </span>
            <h2 className="text-[30px] md:text-[46px] font-bold leading-[1.12]">
              مدونة مبنية بنفس لغة المنتج.
              <br />
              نفس الثيم. نفس الرؤية. عمق أكبر.
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex rounded-full border border-medium px-6 py-3 text-sm text-faint transition-colors hover:border-strong hover:text-primary"
          >
            تصفح كل المقالات
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={article.path}
              className="group block overflow-hidden rounded-[28px] border border-subtle bg-ghost transition-all duration-300 hover:-translate-y-1 hover:border-medium"
            >
              <div className="p-3">
                <BlogCoverArt article={article} compact />
              </div>
              <div className="p-6 pt-3">
                <div className="mb-3 flex items-center justify-between gap-4 text-xs text-muted">
                  <span>{article.audience}</span>
                  <span>{article.readTime}</span>
                </div>
                <p className="line-clamp-3 text-sm leading-7 text-secondary">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-flex rounded-full border border-medium px-6 py-3 text-sm text-faint transition-colors hover:border-strong hover:text-primary"
          >
            تصفح كل المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}
