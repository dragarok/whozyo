type Vertical = {
  n: string;
  word: string;
  blurb: string;
  status: "live" | "next" | "soon" | "research";
  eta?: string;
};

const VERTICALS: Vertical[] = [
  {
    n: "001",
    word: "Mechanic",
    blurb: "Vehicle repair, service centres, and roadside.",
    status: "live",
    eta: "Shipping",
  },
  {
    n: "002",
    word: "Doctor",
    blurb: "Primary care, second opinions, paperwork trails.",
    status: "next",
    eta: "2026 Q4",
  },
  {
    n: "003",
    word: "Plumber",
    blurb: "Emergency call-outs to long-form house jobs.",
    status: "soon",
    eta: "2027",
  },
  {
    n: "004",
    word: "Electrician",
    blurb: "Wiring audits, certifications, and panel work.",
    status: "soon",
    eta: "2027",
  },
  {
    n: "005",
    word: "Tutor",
    blurb: "Verified educators, transcripts, paid sessions.",
    status: "research",
  },
  {
    n: "006",
    word: "Lawyer",
    blurb: "Bar-verified, scoped engagements, billable transparency.",
    status: "research",
  },
];

const STATUS_LABEL: Record<Vertical["status"], string> = {
  live: "Live",
  next: "Up next",
  soon: "Filed",
  research: "Research",
};

const STATUS_TONE: Record<Vertical["status"], string> = {
  live: "text-[color:var(--color-emerald)] border-[color:var(--color-emerald)]/40 bg-[color:var(--color-emerald)]/10",
  next: "text-[color:var(--color-indigo-soft)] border-[color:var(--color-indigo-soft)]/40 bg-[color:var(--color-indigo)]/10",
  soon: "text-[color:var(--color-amber)] border-[color:var(--color-amber)]/40 bg-[color:var(--color-amber)]/10",
  research:
    "text-[color:var(--color-ink-faint)] border-[color:var(--color-border-strong)] bg-transparent",
};

export function Verticals() {
  return (
    <section id="verticals" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <header className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="label">Section 03 — The Index</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              One model.
              <br />
              <em className="swash text-[color:var(--color-indigo-soft)]">
                Every profession that matters.
              </em>
            </h2>
            <p className="mt-6 max-w-[60ch] text-[color:var(--color-ink-dim)] text-lg leading-relaxed">
              Each Whozyo vertical inherits the same trust backbone — identity,
              record, review, recourse — and adapts the workflow to the work.
            </p>
          </div>
        </header>

        <div className="hairline mb-10" />

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--color-border)]">
          {VERTICALS.map((v) => (
            <li
              key={v.n}
              className="group bg-[color:var(--color-bg)] hover:bg-[color:var(--color-bg-raised)] transition-colors duration-500 p-8 md:p-10 relative cursor-default"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
                  Filing {v.n}
                </div>
                <span
                  className={`text-[10px] font-mono uppercase tracking-[0.14em] px-2 py-1 border rounded-full ${STATUS_TONE[v.status]}`}
                >
                  {STATUS_LABEL[v.status]}
                </span>
              </div>

              <h3 className="font-display text-4xl md:text-5xl leading-tight tracking-tight mb-3">
                Who is your{" "}
                <em className="swash text-[color:var(--color-indigo-soft)]">
                  {v.word.toLowerCase()}
                </em>
                ?
              </h3>

              <p className="text-[color:var(--color-ink-dim)] leading-relaxed max-w-[40ch]">
                {v.blurb}
              </p>

              {v.eta && (
                <div className="mt-8 pt-6 border-t border-[color:var(--color-border)] flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
                  <span>ETA</span>
                  <span className="text-[color:var(--color-ink)]">{v.eta}</span>
                </div>
              )}

              {v.status === "live" && (
                <a
                  href="#featured"
                  className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-[color:var(--color-indigo-soft)]/40 transition-colors duration-500"
                  aria-label={`Learn more about ${v.word}`}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
