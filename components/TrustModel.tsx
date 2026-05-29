const STEPS = [
  {
    n: "01",
    label: "Identity",
    title: "A real person, on paper.",
    body:
      "Every professional clears a documented identity, license, and workplace check before their name appears anywhere on Whozyo. No anonymous handles, no AI-generated profiles.",
    tag: "Verified",
    tagColor: "emerald",
  },
  {
    n: "02",
    label: "Record",
    title: "Every job leaves a trace.",
    body:
      "Bookings, photos, quotes, line-items, payments — captured at the moment they happen, attached to the professional's permanent record. Recoverable in court if it needs to be.",
    tag: "On-chain of custody",
    tagColor: "indigo",
  },
  {
    n: "03",
    label: "Review",
    title: "Only people who paid.",
    body:
      "A review without a matched, paid job doesn't post. No fake-stars market, no review-farms, no review-removal-as-a-service.",
    tag: "Receipt-bound",
    tagColor: "indigo",
  },
  {
    n: "04",
    label: "Recourse",
    title: "Something goes wrong? It's logged.",
    body:
      "Disputes go through Whozyo with the full record attached. The professional knows it. Their next customer can see it. The market self-corrects.",
    tag: "Accountable",
    tagColor: "amber",
  },
];

const TAG_TONE: Record<string, string> = {
  emerald:
    "text-[color:var(--color-emerald)] border-[color:var(--color-emerald)]/40 bg-[color:var(--color-emerald)]/10",
  indigo:
    "text-[color:var(--color-indigo-soft)] border-[color:var(--color-indigo-soft)]/40 bg-[color:var(--color-indigo)]/10",
  amber:
    "text-[color:var(--color-amber)] border-[color:var(--color-amber)]/40 bg-[color:var(--color-amber)]/10",
};

export function TrustModel() {
  return (
    <section id="model" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <header className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="label">Section 01 — The Model</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Trust isn't a feeling.
              <br />
              <em className="swash text-[color:var(--color-indigo-soft)]">
                It's a four-step record.
              </em>
            </h2>
            <p className="mt-6 max-w-[60ch] text-[color:var(--color-ink-dim)] text-lg leading-relaxed">
              Every Whozyo product — Mechanic, and the ones after — is built on
              the same backbone. We don't sell visibility. We sell the receipt.
            </p>
          </div>
        </header>

        <div className="hairline mb-16" />

        <ol className="grid grid-cols-12 gap-y-10 md:gap-y-16 gap-x-8">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="col-span-12 md:col-span-6 group relative"
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2">
                  <div className="font-display text-6xl md:text-7xl text-[color:var(--color-ink-ghost)] leading-none group-hover:text-[color:var(--color-indigo-soft)] transition-colors duration-500">
                    {s.n}
                  </div>
                </div>
                <div className="col-span-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="label">{s.label}</span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-[0.14em] px-2 py-1 border rounded-full ${TAG_TONE[s.tagColor]}`}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[color:var(--color-ink-dim)] leading-relaxed max-w-[52ch]">
                    {s.body}
                  </p>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hairline mt-10 md:hidden" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
