import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { getAllPosts } from "@/posts";

export const metadata: Metadata = {
  title: "Blog — WhoIsYourMechanic",
  description:
    "Data-driven, referenced guides on electric vehicles, taxes, costs and the auto market in Nepal.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <PageShell
      wide
      eyebrow="Blog"
      title="EVs, ownership & the Nepali auto market"
      subtitle="Data-driven guides on electric vehicles, taxes, running costs and brands — researched and fully referenced."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {posts.map(({ meta }) => (
          <Link
            key={meta.slug}
            href={`/blog/${meta.slug}`}
            className="card group flex flex-col gap-3 p-6 transition hover:border-[color:var(--color-indigo)] hover:shadow-[var(--shadow-elevated)]"
          >
            <div className="flex flex-wrap items-center gap-2">
              {meta.tags.slice(0, 2).map((t) => (
                <span key={t} className="pill pill-indigo">
                  {t}
                </span>
              ))}
              <span className="ml-auto text-[12px] text-[color:var(--color-ink-faint)]">
                {meta.readingMinutes} min read
              </span>
            </div>
            <h2 className="font-display-semi text-[19px] leading-snug text-[color:var(--color-ink)] group-hover:text-[color:var(--color-indigo-dark)]">
              {meta.title}
            </h2>
            <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-dim)]">
              {meta.excerpt}
            </p>
            <div className="mt-auto flex items-center justify-between pt-1 text-[12px] text-[color:var(--color-ink-faint)]">
              <span>{formatDate(meta.date)}</span>
              <span className="font-semibold text-[color:var(--color-indigo-dark)]">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
