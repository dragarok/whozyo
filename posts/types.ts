import type { ReactNode } from "react";

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2026-06-02" */
  date: string;
  readingMinutes: number;
  tags: string[];
  author: string;
}

export interface Post {
  meta: PostMeta;
  Body: () => ReactNode;
}
