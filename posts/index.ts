import type { Post } from "./types";
import * as adoption from "./ev-adoption-nepal";
import * as budget from "./nepal-budget-ev-tax";
import * as cost from "./ev-vs-ice-cost-nepal";
import * as tradeoffs from "./ev-tradeoffs-future-proofing";
import * as brands from "./ev-brands-nepal-chinese-manufacturers";

// Display order (newest/most-relevant first).
const modules = [adoption, budget, cost, tradeoffs, brands];

export const posts: Post[] = modules.map((m) => ({
  meta: m.meta,
  Body: m.Body,
}));

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) =>
    a.meta.date < b.meta.date ? 1 : a.meta.date > b.meta.date ? -1 : 0,
  );
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.meta.slug === slug);
}
