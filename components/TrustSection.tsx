import { Lines } from "./Lines";
import { getDictionary, type Lang } from "@/lib/i18n";

export function TrustSection({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).trust;

  return (
    <section id="trust" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10 items-start">
          {/* left copy */}
          <div className="col-span-12 lg:col-span-5">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05] mt-4 text-[color:var(--color-ink)]">
              <Lines lines={t.headingLines} />
              <br />
              <span className="text-[color:var(--color-indigo-dark)]">
                {t.headingAccent}
              </span>
            </h2>
            <p className="mt-5 text-[17px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[42ch]">
              {t.sub}
            </p>

            <div className="mt-10 card p-6 max-w-[420px]">
              <div className="label mb-4 text-[10px]">{t.card.disclaimer}</div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-[color:var(--color-indigo)] to-[color:var(--color-emerald)] grid place-items-center text-white font-display">
                  {t.card.name[0]}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[color:var(--color-ink)] leading-tight">
                    {t.card.name}
                  </div>
                  <div className="text-[11px] font-mono text-[color:var(--color-emerald)] mt-0.5">
                    {t.card.verified}
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {t.card.stats.map((s) => (
                  <div
                    key={s.k}
                    className="bg-[color:var(--color-elevated)] rounded-xl py-3"
                  >
                    <div className="font-display text-xl text-[color:var(--color-ink)]">{s.v}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)] mt-1">{s.k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-[12px] font-mono text-[color:var(--color-ink-faint)]">
                {t.card.note}
              </div>
            </div>
          </div>

          {/* right pillars */}
          <div className="col-span-12 lg:col-span-7">
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[color:var(--color-border)] rounded-2xl overflow-hidden border border-[color:var(--color-border)]">
              {t.pillars.map((p, i) => (
                <li
                  key={p.title}
                  className="bg-[color:var(--color-surface)] p-7 group"
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-mono text-[12px] text-[color:var(--color-indigo-dark)] font-semibold">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-lg tracking-tight text-[color:var(--color-ink)]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-[color:var(--color-ink-dim)] leading-relaxed">
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
