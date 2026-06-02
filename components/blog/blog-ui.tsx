import type { ReactNode } from "react";

/** Inline citation marker, e.g. <Cite n={1} />. Links to the references list. */
export function Cite({ n }: { n: number }) {
  return (
    <sup className="ml-0.5">
      <a
        href={`#ref-${n}`}
        className="font-semibold text-[color:var(--color-indigo-dark)] no-underline hover:underline"
      >
        [{n}]
      </a>
    </sup>
  );
}

export interface Reference {
  /** Full citation text, e.g. "Title — Publisher (Date)." */
  text: string;
  url: string;
}

export function References({ items }: { items: Reference[] }) {
  return (
    <section className="mt-12">
      <h2 className="font-display-semi mb-4 text-[20px] text-[color:var(--color-ink)]">
        References
      </h2>
      <ol className="space-y-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            id={`ref-${i + 1}`}
            className="grid grid-cols-[28px_1fr] gap-1 text-[13px] leading-relaxed text-[color:var(--color-ink-dim)] scroll-mt-28"
          >
            <span className="font-semibold text-[color:var(--color-ink-faint)]">
              {i + 1}.
            </span>
            <span>
              {item.text}{" "}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-[color:var(--color-indigo-dark)] underline underline-offset-2"
              >
                {item.url}
              </a>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function DataTable({
  title,
  columns,
  rows,
  caption,
}: {
  title?: string;
  columns: string[];
  rows: (string | number)[][];
  caption?: string;
}) {
  return (
    <figure className="my-8">
      {title && (
        <figcaption className="mb-3 text-[14px] font-semibold text-[color:var(--color-ink)]">
          {title}
        </figcaption>
      )}
      <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[color:var(--color-border)]">
        <table className="w-full border-collapse text-left text-[13px]">
          <thead>
            <tr className="bg-[color:var(--color-elevated)]">
              {columns.map((c, i) => (
                <th
                  key={i}
                  className="whitespace-nowrap px-4 py-2.5 font-semibold text-[color:var(--color-ink)]"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr
                key={r}
                className="border-t border-[color:var(--color-border)] text-[color:var(--color-ink-dim)]"
              >
                {row.map((cell, c) => (
                  <td
                    key={c}
                    className={
                      c === 0
                        ? "px-4 py-2.5 font-medium text-[color:var(--color-ink)]"
                        : "px-4 py-2.5"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <p className="mt-2 text-[12px] leading-relaxed text-[color:var(--color-ink-faint)]">
          {caption}
        </p>
      )}
    </figure>
  );
}

const TONE: Record<string, string> = {
  indigo:
    "border-[color:color-mix(in_srgb,var(--color-indigo)_25%,transparent)] bg-[color:var(--color-indigo-tint)]",
  amber:
    "border-[color:color-mix(in_srgb,var(--color-amber)_35%,transparent)] bg-[color:var(--color-amber-tint)]",
  emerald:
    "border-[color:color-mix(in_srgb,var(--color-emerald)_30%,transparent)] bg-[color:var(--color-emerald-tint)]",
};

export function Callout({
  title,
  tone = "indigo",
  children,
}: {
  title?: string;
  tone?: "indigo" | "amber" | "emerald";
  children: ReactNode;
}) {
  return (
    <aside
      className={`my-8 rounded-[var(--radius-lg)] border p-5 ${TONE[tone]}`}
    >
      {title && (
        <div className="mb-1.5 text-[14px] font-semibold text-[color:var(--color-ink)]">
          {title}
        </div>
      )}
      <div className="text-[14px] leading-relaxed text-[color:var(--color-ink-dim)] [&_a]:font-semibold [&_a]:text-[color:var(--color-indigo-dark)] [&_a]:underline">
        {children}
      </div>
    </aside>
  );
}
