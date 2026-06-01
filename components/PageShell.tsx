import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

/**
 * Shared chrome for content pages (Support / Privacy / Terms / Delete account).
 * Renders the site Nav, a centered header, the readable content column, and the
 * Footer. Wrap text blocks in <Prose> for typography; render cards/buttons as
 * plain children so they aren't affected by the prose link/paragraph styles.
 */
export function PageShell({
  eyebrow,
  title,
  subtitle,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="relative pt-32 pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 overflow-hidden">
          <div className="halo-indigo absolute left-1/2 top-[-140px] h-[340px] w-[560px] -translate-x-1/2" />
        </div>

        <div className="relative mx-auto max-w-[760px] px-5 md:px-8">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-display mt-5 text-[clamp(2rem,5vw,3rem)] leading-[1.05] text-[color:var(--color-ink)]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-[54ch] text-[17px] leading-relaxed text-[color:var(--color-ink-dim)]">
              {subtitle}
            </p>
          )}
          {updated && (
            <p className="mt-4 font-mono text-[12px] text-[color:var(--color-ink-faint)]">
              Last updated {updated}
            </p>
          )}

          <div className="section-rule my-10" />

          <div className="space-y-6">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/**
 * Typography wrapper for long-form text (headings, paragraphs, lists, links).
 * Uses arbitrary descendant variants so page bodies stay plain HTML.
 */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        space-y-5
        [&_h2]:font-display-semi [&_h2]:mt-10 [&_h2]:mb-1 [&_h2]:text-[20px] [&_h2]:text-[color:var(--color-ink)]
        [&_h3]:mt-6 [&_h3]:mb-1 [&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:text-[color:var(--color-ink)]
        [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-[color:var(--color-ink-dim)]
        [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5
        [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5
        [&_li]:text-[15px] [&_li]:leading-relaxed [&_li]:text-[color:var(--color-ink-dim)]
        [&_a]:text-[color:var(--color-indigo-dark)] [&_a]:underline [&_a]:underline-offset-2
        [&_strong]:font-semibold [&_strong]:text-[color:var(--color-ink)]
      "
    >
      {children}
    </div>
  );
}
