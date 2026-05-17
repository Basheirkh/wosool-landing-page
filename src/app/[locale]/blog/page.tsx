import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import BlogCoverArt from "@/components/blog/BlogCoverArt";
import { getAllArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "مدونة وصول",
  description:
    "مقالات تبني فهم المنتج والرؤية والبنية التقنية بنفس لغة وصول البصرية والتحريرية.",
};

export default function BlogIndexPage() {
  const articles = getAllArticles();
  const articleCount = articles.length;
  const featuredCount = articles.filter((a) => a.visual.featured).length;

  return (
    <>
      <Navbar />
      <main className="pt-[88px] theme-text-primary">
        {/* Editorial hero */}
        <section className="relative px-5 pt-8 pb-14 md:px-6">
          <div className="theme-art-surface relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px]">
            <div className="relative px-8 py-14 md:px-14 md:py-20">
              <div className="absolute inset-0 dot-grid-static opacity-35" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(0,217,126,0.12), transparent 28%), radial-gradient(circle at 80% 18%, rgba(246,196,83,0.10), transparent 24%), linear-gradient(135deg, var(--art-bg-start), var(--art-bg-mid) 50%, var(--art-bg-end))",
                }}
              />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <div
                    className="mb-5 flex flex-wrap items-center gap-3 text-xs"
                  >
                    <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
                      Wosool Journal
                    </span>
                    <span
                      className="rounded-full px-4 py-2"
                      style={{
                        border: "1px solid var(--art-border)",
                        background: "var(--art-panel-soft)",
                        color: "var(--art-text-secondary)",
                      }}
                    >
                      من فريق وصول
                    </span>
                  </div>

                  <div
                    className="text-[11px] uppercase tracking-[0.28em]"
                    style={{ color: "var(--art-text-muted)" }}
                  >
                    اقرأ ما نبنيه
                  </div>
                  <h1
                    className="mt-3 max-w-4xl text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.06]"
                    style={{ color: "var(--art-text-primary)" }}
                  >
                    {articleCount} مقالة تشرح
                    <br />
                    كيف يفكّر وصول.
                  </h1>
                  <p
                    className="mt-6 max-w-2xl text-[16px] md:text-[18px] leading-8"
                    style={{ color: "var(--art-text-secondary)" }}
                  >
                    هذه ليست مدونة عامة. هي طبقة التعليم والتمركز والثقة داخل
                    تجربة وصول — مكتوبة للتاجر، وللمطوّر، ولصاحب القرار بنفس
                    اللغة.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    [String(articleCount), "مقالة كاملة"],
                    [String(featuredCount), "مقالة مميّزة"],
                    ["1", "ثيم بصري موحد"],
                    ["AR", "لغة الكتابة"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-3xl p-5"
                      style={{
                        border: "1px solid var(--art-border)",
                        background: "var(--art-panel-soft)",
                      }}
                    >
                      <div
                        className="font-mono text-3xl"
                        style={{ color: "var(--art-text-primary)" }}
                      >
                        {value}
                      </div>
                      <div
                        className="mt-2 text-sm leading-6"
                        style={{ color: "var(--art-text-muted)" }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section className="px-5 pb-24 md:px-6">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="theme-text-secondary text-[11px] uppercase tracking-[0.28em]">
                  كل المقالات
                </p>
                <h2 className="theme-text-primary mt-2 text-[28px] md:text-[40px] font-bold">
                  نفس الهوية. أغلفة مختلفة. رسالة واحدة.
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="theme-chip rounded-full px-4 py-2 text-xs">
                  {articleCount} مقالة
                </span>
                <Link
                  href="/#pricing"
                  className="theme-btn-primary inline-flex rounded-full px-6 py-3 text-sm font-medium transition"
                >
                  ابدأ من الصفحة الرئيسية
                </Link>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.path}
                  className="theme-content-card group relative block overflow-hidden rounded-[30px] transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Cover art */}
                  <div className="relative p-3">
                    <BlogCoverArt article={article} compact />
                    {article.visual.featured && (
                      <span
                        className="absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
                        style={{
                          background: `${article.visual.accent}1f`,
                          border: `1px solid ${article.visual.accent}55`,
                          color: article.visual.accent,
                        }}
                      >
                        مميّز
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 pt-2">
                    {/* Eyebrow row: theme eyebrow + number + read time */}
                    <div className="theme-text-secondary mb-3 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em]">
                      <span
                        className="inline-flex items-center gap-2"
                        style={{ color: article.visual.accent }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: article.visual.accent }}
                        />
                        {article.visual.eyebrow}
                      </span>
                      <span className="font-mono normal-case tracking-normal">
                        المقال {article.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="theme-text-primary text-[20px] font-bold leading-[1.35] mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="theme-text-secondary mb-5 text-sm leading-7 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Footer row */}
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="theme-chip rounded-full px-3 py-1 text-xs">
                          {article.audience}
                        </span>
                        <span className="text-muted text-xs">
                          {article.readTime}
                        </span>
                      </div>
                      <span
                        className="inline-flex items-center gap-1 text-sm font-medium transition-transform duration-300 group-hover:-translate-x-1"
                        style={{ color: article.visual.accent }}
                      >
                        اقرأ المقال
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div
                    className="pointer-events-none absolute inset-x-8 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-80"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${article.visual.accent}, transparent)`,
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
