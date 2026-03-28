import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import BlogCoverArt from "@/components/blog/BlogCoverArt";
import { getAllArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "مدونة وصول",
  description: "مقالات تبني فهم المنتج والرؤية والبنية التقنية بنفس لغة وصول البصرية والتحريرية.",
};

export default function BlogIndexPage() {
  const articles = getAllArticles();
  const articleCount = articles.length;

  return (
    <>
      <Navbar />
      <main className="pt-[88px] theme-text-primary">
        <section className="relative px-6 pt-8 pb-16">
          <div className="theme-art-surface mx-auto max-w-[1400px] overflow-hidden rounded-[32px]">
            <div className="relative px-8 py-14 md:px-14 md:py-20">
              <div className="absolute inset-0 dot-grid-static opacity-35" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(0,217,126,0.10), transparent 26%), radial-gradient(circle at 80% 20%, rgba(246,196,83,0.10), transparent 22%), linear-gradient(135deg, var(--art-bg-start), var(--art-bg-mid) 50%, var(--art-bg-end))",
                }}
              />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <span className="mb-6 inline-flex rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-brand-primary">
                    Wosool Journal
                  </span>
                  <h1 className="max-w-4xl text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.06]" style={{ color: "var(--art-text-primary)" }}>
                    {articleCount} صفحة تبني نفس
                    <br />
                    انطباع الوصول.
                  </h1>
                  <p className="mt-6 max-w-2xl text-[16px] md:text-[18px] leading-8" style={{ color: "var(--art-text-secondary)" }}>
                    هذه ليست مدونة عامة. هي طبقة التعليم والتمركز والثقة داخل تجربة وصول:
                    للتاجر، للمطور، وللمستثمر في نفس الوقت.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    [String(articleCount), "مقالة كاملة"],
                    ["3", "شرائح لكل مقالة"],
                    ["1", "ثيم بصري موحد"],
                    ["24/7", "لغة المنتج نفسها"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-3xl p-5"
                      style={{ border: "1px solid var(--art-border)", background: "var(--art-panel-soft)" }}
                    >
                      <div className="font-mono text-3xl" style={{ color: "var(--art-text-primary)" }}>{value}</div>
                      <div className="mt-2 text-sm leading-6" style={{ color: "var(--art-text-muted)" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="theme-text-secondary text-sm">كل المقالات</p>
                <h2 className="theme-text-primary mt-2 text-[28px] md:text-[40px] font-bold">نفس الهوية. أغلفة مختلفة. رسالة واحدة.</h2>
              </div>
              <Link
                href="/#pricing"
                className="theme-btn-primary inline-flex rounded-full px-6 py-3 text-sm font-medium transition"
              >
                ابدأ من الصفحة الرئيسية
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.path}
                  className="theme-content-card group block overflow-hidden rounded-[30px] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3">
                    <BlogCoverArt article={article} compact />
                  </div>
                  <div className="p-6 pt-2">
                    <div className="theme-text-secondary mb-4 flex items-center justify-between gap-4 text-xs">
                      <span>المقال {article.number}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <p className="theme-text-secondary mb-5 text-sm leading-7">{article.excerpt}</p>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="theme-chip rounded-full px-3 py-1">
                        {article.audience}
                      </span>
                      <span className="text-brand-primary transition-transform duration-300 group-hover:-translate-x-1">
                        اقرأ المقال ←
                      </span>
                    </div>
                  </div>
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
