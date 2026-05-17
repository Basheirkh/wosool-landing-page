import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import BlogArticleBody from "@/components/blog/BlogArticleBody";
import BlogCoverArt from "@/components/blog/BlogCoverArt";
import { getAdjacentArticles, getAllArticles, getArticleBySlug } from "@/lib/blog";

type BlogArticlePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: BlogArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const { previous, next } = getAdjacentArticles(article.slug);

  return (
    <>
      <Navbar />
      <main className="pt-[88px] theme-text-primary">
        <section className="px-6 pt-8 pb-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="theme-text-secondary mb-6 flex items-center justify-between gap-4 text-sm">
              <Link href="/blog" className="transition-colors hover:text-[var(--text-primary)]">
                المدونة
              </Link>
              <span>المقال {article.number}</span>
            </div>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <div className="mb-8">
                  <BlogCoverArt article={article} />
                </div>

                <div className="theme-article-surface rounded-[32px] p-8 md:p-12">
                  <div className="mb-8 flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 uppercase tracking-[0.24em] text-brand-primary">
                      {article.visual.eyebrow}
                    </span>
                    <span className="theme-chip rounded-full px-4 py-2">
                      {article.audience}
                    </span>
                    <span className="theme-chip rounded-full px-4 py-2">
                      {article.readTime}
                    </span>
                  </div>

                  <p className="theme-text-secondary max-w-3xl text-[17px] leading-8">
                    {article.excerpt}
                  </p>

                  <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <div className="theme-content-card rounded-3xl p-5">
                      <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.22em]">الجمهور</div>
                      <div className="theme-text-primary text-sm leading-7">{article.audience}</div>
                    </div>
                    <div className="theme-content-card rounded-3xl p-5">
                      <div className="theme-text-secondary mb-2 text-xs uppercase tracking-[0.22em]">الهدف</div>
                      <div className="theme-text-primary text-sm leading-7">{article.goal}</div>
                    </div>
                  </div>

                  <div className="mt-14">
                    <BlogArticleBody body={article.body} />
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {previous ? (
                    <Link
                      href={previous.path}
                      className="theme-content-card rounded-[28px] p-6 transition-all"
                    >
                      <div className="theme-text-secondary mb-3 text-xs">المقال السابق</div>
                      <div className="theme-text-primary text-lg font-semibold leading-8">{previous.title}</div>
                    </Link>
                  ) : (
                    <div className="theme-content-card theme-text-secondary rounded-[28px] p-6">
                      بداية السلسلة
                    </div>
                  )}

                  {next ? (
                    <Link
                      href={next.path}
                      className="theme-content-card rounded-[28px] p-6 transition-all"
                    >
                      <div className="theme-text-secondary mb-3 text-xs">المقال التالي</div>
                      <div className="theme-text-primary text-lg font-semibold leading-8">{next.title}</div>
                    </Link>
                  ) : (
                    <div className="theme-content-card theme-text-secondary rounded-[28px] p-6">
                      نهاية السلسلة
                    </div>
                  )}
                </div>
              </div>

              <aside className="xl:sticky xl:top-[96px] xl:self-start">
                <div className="theme-article-surface rounded-[32px] p-6">
                  <div className="theme-text-secondary mb-4 text-xs uppercase tracking-[0.24em]">في هذه الصفحة</div>
                  <div className="space-y-2">
                    {article.headings.map((heading) => (
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
                    <div className="theme-text-primary mb-2 text-sm font-medium">ارجع للتجربة الكاملة</div>
                    <p className="theme-text-secondary mb-4 text-sm leading-7">
                      المقالات هنا امتداد مباشر للـ landing page وليست مساراً منفصلاً عنها.
                    </p>
                    <Link
                      href="/"
                      className="theme-btn-primary inline-flex rounded-full px-5 py-3 text-sm font-medium transition"
                    >
                      العودة للرئيسية
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
