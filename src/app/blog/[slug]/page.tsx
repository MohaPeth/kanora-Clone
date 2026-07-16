import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blog } from "@/data/site";

const COVERS = [
  "from-kanora-orange to-kanora-orange-hover",
  "from-kanora-ink to-neutral-700",
  "from-kanora-star to-kanora-orange",
  "from-neutral-800 to-kanora-orange-hover",
];

function readingTime(paragraphs: readonly string[]) {
  const words = paragraphs.join(" ").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function generateStaticParams() {
  return blog.articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = blog.articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article introuvable — Kanora" };
  return {
    title: `${article.title} — Blog Kanora`,
    description: article.chapo,
    openGraph: article.image
      ? { images: [{ url: article.image }] }
      : undefined,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = blog.articles.findIndex((a) => a.slug === slug);
  if (index === -1) notFound();

  const article = blog.articles[index];
  const others = blog.articles.filter((a) => a.slug !== slug).slice(0, 2);
  const minutes = readingTime(article.content);

  return (
    <main className="bg-white">
      <Header variant="overlay" />

      {/* Hero cover */}
      <header className="relative h-[76vh] min-h-[520px] w-full overflow-hidden">
        {article.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={article.image}
            alt={("imageAlt" in article && article.imageAlt) || article.title}
            className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${COVERS[index % COVERS.length]}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Motif.png"
              alt=""
              aria-hidden
              className="h-full w-full object-cover opacity-[0.14] mix-blend-overlay"
            />
          </div>
        )}

        {/* Gradient scrims for nav (top) and text (bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-kanora-ink/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-kanora-ink/90 via-kanora-ink/45 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto w-full max-w-[900px] px-5 pb-12 md:px-8 md:pb-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-grotesk text-[14px] font-semibold text-white/85 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Tous les articles
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-kanora-orange px-3.5 py-1.5 font-grotesk text-[12px] font-semibold text-white">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 font-grotesk text-[13px] font-medium text-white/80">
                <Clock className="h-3.5 w-3.5" />
                {minutes} min de lecture
              </span>
              {article.date && (
                <span className="font-grotesk text-[13px] font-medium text-white/80">
                  · {article.date}
                </span>
              )}
            </div>

            <h1 className="mt-4 max-w-[820px] font-display text-[30px] font-bold leading-[1.08] text-white drop-shadow-sm sm:text-[44px] md:text-[52px]">
              {article.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-[720px] px-5 md:px-8">
          {/* Lead / chapô */}
          <p className="border-l-[3px] border-kanora-orange pl-5 font-display text-[20px] font-semibold italic leading-relaxed text-kanora-ink sm:text-[23px]">
            {article.chapo}
          </p>

          <div className="mt-9 space-y-6">
            {article.content.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-[17.5px] leading-[1.8] text-kanora-ink/85 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[58px] first-letter:font-bold first-letter:leading-[0.82] first-letter:text-kanora-orange"
                    : "text-[17.5px] leading-[1.8] text-kanora-ink/85"
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="relative mt-14 overflow-hidden rounded-[28px] bg-kanora-ink p-9 text-center md:p-11">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Motif.png"
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.42]"
            />
            <div className="relative">
              <p className="font-display text-[24px] font-bold text-white sm:text-[28px]">
                Envie de rejoindre l&apos;aventure KaNora ?
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href="/#tarifs"
                  className="rounded-full bg-kanora-orange px-9 py-3.5 font-grotesk text-[16px] font-semibold text-white transition-all hover:bg-kanora-orange-hover active:scale-[0.98]"
                >
                  Réserver une KaNora Lady
                </Link>
                <Link
                  href="/blog"
                  className="rounded-full border border-white/25 px-9 py-3.5 font-grotesk text-[16px] font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
                >
                  Voir tous les articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Autres articles */}
      {others.length > 0 && (
        <section className="bg-kanora-cream py-14 md:py-20">
          <div className="kanora-container">
            <h2 className="font-display text-[26px] font-bold text-kanora-ink sm:text-[32px]">
              À lire aussi
            </h2>
            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              {others.map((a) => {
                const i = blog.articles.findIndex((x) => x.slug === a.slug);
                return (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(36,23,18,0.08)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(36,23,18,0.14)]"
                  >
                    <div className="relative h-[180px] w-full overflow-hidden">
                      {a.image ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={a.image}
                          alt={("imageAlt" in a && a.imageAlt) || a.title}
                          className="h-full w-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className={`h-full w-full bg-gradient-to-br ${COVERS[i % COVERS.length]}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/Motif.png"
                            alt=""
                            aria-hidden
                            className="h-full w-full object-cover opacity-[0.12] mix-blend-overlay"
                          />
                        </div>
                      )}
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-grotesk text-[11px] font-semibold text-kanora-ink backdrop-blur">
                        {a.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-[19px] font-bold leading-snug text-kanora-ink">
                        {a.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-grotesk text-[14px] font-semibold text-kanora-orange">
                        Lire l&apos;article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
