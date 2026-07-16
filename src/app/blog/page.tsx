import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blog } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog Kanora : actualités & histoires",
  description: blog.subtitle,
};

const COVERS = [
  "from-kanora-orange to-kanora-orange-hover",
  "from-kanora-ink to-neutral-700",
  "from-kanora-star to-kanora-orange",
  "from-neutral-800 to-kanora-orange-hover",
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      <Header variant="solid" />

      <section className="bg-kanora-cream py-16 md:py-24">
        <div className="kanora-container">
          <div className="mx-auto max-w-[720px] text-center">
            <span className="mb-3 block font-grotesk text-[13px] font-bold uppercase tracking-[0.12em] text-kanora-orange">
              {blog.eyebrow}
            </span>
            <h1 className="font-display text-[38px] font-bold leading-[1.05] text-kanora-ink sm:text-[48px] md:text-[56px]">
              {blog.title}
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-neutral-600">{blog.subtitle}</p>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blog.articles.map((a, i) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(36,23,18,0.08)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(36,23,18,0.14)]"
              >
                <div className="relative h-[190px] w-full overflow-hidden">
                  {a.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={a.image}
                      alt={a.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                  {a.date && (
                    <span className="mb-2 font-grotesk text-[12px] font-medium text-neutral-400">
                      {a.date}
                    </span>
                  )}
                  <h2 className="font-display text-[20px] font-bold leading-snug text-kanora-ink">
                    {a.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-[14px] leading-relaxed text-neutral-600">
                    {a.chapo}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-grotesk text-[14px] font-semibold text-kanora-orange">
                    Lire l&apos;article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
