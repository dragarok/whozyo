import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { getAllPosts, getPost } from "@/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — WhoIsYourMechanic`,
    description: post.meta.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta, Body } = post;

  return (
    <PageShell eyebrow={meta.tags[0] ?? "Blog"} title={meta.title} subtitle={meta.excerpt}>
      <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[color:var(--color-ink-faint)]">
        <span>By {meta.author}</span>
        <span aria-hidden>·</span>
        <span>{formatDate(meta.date)}</span>
        <span aria-hidden>·</span>
        <span>{meta.readingMinutes} min read</span>
      </div>

      <Body />

      <div className="mt-12 border-t border-[color:var(--color-border)] pt-6">
        <Link
          href="/blog"
          className="text-[14px] font-semibold text-[color:var(--color-indigo-dark)]"
        >
          ← All articles
        </Link>
      </div>
    </PageShell>
  );
}
