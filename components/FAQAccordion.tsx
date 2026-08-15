"use client";

import { useState } from "react";

/**
 * The interactive half of the FAQ. Split out of `FAQ.tsx` so the section itself
 * can stay a server component and resolve the dictionary there — otherwise
 * every language's FAQ copy would be shipped to the browser to render one.
 */
export function FAQAccordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="border-t border-[color:var(--color-border)]">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} className="border-b border-[color:var(--color-border)]">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 text-left py-5 group"
            >
              <span className="font-display text-lg md:text-xl tracking-tight text-[color:var(--color-ink)] group-hover:text-[color:var(--color-indigo-dark)] transition-colors">
                {f.q}
              </span>
              <span
                className={`size-8 rounded-full border border-[color:var(--color-border-strong)] grid place-items-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? "rotate-45 bg-[color:var(--color-ink)] text-white border-transparent"
                    : "text-[color:var(--color-ink-dim)]"
                }`}
              >
                <svg viewBox="0 0 16 16" className="size-3.5" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-12 text-[15px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[60ch]">
                  {f.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
