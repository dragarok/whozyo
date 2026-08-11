const PILLARS = [
  {
    title: "Verified means one narrow thing.",
    body:
      "The account proved control of a real phone number, recorded automatically at sign-in. Nobody verifies themselves; nobody buys it. It is not an ID check — it's a door, not a character reference. What it opens is the part worth reading: only a verified mechanic can be reviewed at all.",
  },
  {
    title: "Reviews tied to settled jobs.",
    body:
      "A review can only be written by the person who was on the other side of the job, and only once that job is actually settled. Once written it can't be edited or deleted by either party. No five-star bots, no star-farming, no removal-as-a-service.",
  },
  {
    title: "The record does the talking.",
    body:
      "Not a score. Plain sentences worked out from settled jobs: whether the price quoted was the price paid, how many customers came back, how quickly they reply, how much of the work was photographed. There is no hidden rating to game.",
  },
  {
    title: "Problems keep their receipts.",
    body:
      "If something goes wrong, the photos, the quote, and the payment record go with it — so a disagreement starts from what actually happened, not from memory. Nobody here decides who was right; the record just refuses to disappear.",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10 items-start">
          {/* left copy */}
          <div className="col-span-12 lg:col-span-5">
            <span className="eyebrow">Built on trust</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05] mt-4 text-[color:var(--color-ink)]">
              Trust isn't a feeling.
              <br />
              <span className="text-[color:var(--color-indigo-dark)]">It's a record.</span>
            </h2>
            <p className="mt-5 text-[17px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[42ch]">
              The important part isn't a feature. It's a system that makes
              dishonest work harder than honest work — for everyone involved.
            </p>

            <div className="mt-10 card p-6 max-w-[420px]">
              <div className="label mb-4 text-[10px]">
                Example profile — not a real mechanic
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-[color:var(--color-indigo)] to-[color:var(--color-emerald)] grid place-items-center text-white font-display">
                  R
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[color:var(--color-ink)] leading-tight">
                    Ramesh K.
                  </div>
                  <div className="text-[11px] font-mono text-[color:var(--color-emerald)] mt-0.5">
                    ✓ Verified mechanic
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[
                  ["217", "Jobs"],
                  ["4.9", "Rating"],
                  ["83", "Reviews"],
                ].map(([v, k]) => (
                  <div
                    key={k}
                    className="bg-[color:var(--color-elevated)] rounded-xl py-3"
                  >
                    <div className="font-display text-xl text-[color:var(--color-ink)]">{v}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)] mt-1">{k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-[12px] font-mono text-[color:var(--color-ink-faint)]">
                Every number here comes from a settled job
              </div>
            </div>
          </div>

          {/* right pillars */}
          <div className="col-span-12 lg:col-span-7">
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[color:var(--color-border)] rounded-2xl overflow-hidden border border-[color:var(--color-border)]">
              {PILLARS.map((p, i) => (
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
