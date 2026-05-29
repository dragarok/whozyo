export function FeaturedProduct() {
  return (
    <section
      id="featured"
      className="relative px-6 md:px-10 py-24 md:py-32 bg-[color:var(--color-bg-raised)] border-y border-[color:var(--color-border)]"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* section header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="label">Section 02 — Filing 001</div>
          </div>
          <div className="col-span-12 md:col-span-9 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Who is your <em className="swash text-[color:var(--color-indigo-soft)]">mechanic</em>?
            </h2>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[color:var(--color-emerald)]/40 bg-[color:var(--color-emerald)]/10 text-[color:var(--color-emerald)] text-[11px] font-mono uppercase tracking-[0.14em]">
              <span className="size-1.5 rounded-full bg-[color:var(--color-emerald)] live-dot" />
              Live · v1.0
            </span>
          </div>
        </div>

        <div className="hairline mb-16" />

        {/* main split */}
        <div className="grid grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* copy column */}
          <div className="col-span-12 lg:col-span-6">
            <p className="font-display text-3xl md:text-4xl leading-snug tracking-tight">
              Pair via QR. Watch the work. Pay through the app. The mechanic's
              record grows. So does yours.
            </p>
            <p className="mt-8 text-[color:var(--color-ink-dim)] text-lg leading-relaxed max-w-[55ch]">
              WhoIsYourMechanic is the first Whozyo vertical — built for
              Kathmandu's repair economy, designed to scale anywhere a wrench
              meets a wheel. Clients, mechanics, and service centres each get
              an app built for their actual job, not a one-size template.
            </p>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {[
                ["QR pairing", "10-second handshake. No phone numbers traded."],
                ["Itemised quotes", "Parts, labour, fees — line by line. No hidden 'service' charges."],
                ["Photo timeline", "Every part removed, every fluid drained — recorded."],
                ["Three apps, one record", "Client · Mechanic · Service Centre. Same backbone."],
              ].map(([t, b]) => (
                <li key={t} className="border-l border-[color:var(--color-border-strong)] pl-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-indigo-soft)]">
                    {t}
                  </div>
                  <div className="mt-1 text-[color:var(--color-ink-dim)] text-sm leading-relaxed">
                    {b}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://whoisyourmechanic.com"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Visit whoisyourmechanic.com →
              </a>
              <a href="#professionals" className="btn-ghost">
                I'm a mechanic
              </a>
            </div>
          </div>

          {/* device mockup column */}
          <div className="col-span-12 lg:col-span-6">
            <DeviceMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function DeviceMock() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] aspect-[10/19]">
      {/* halo */}
      <div className="absolute inset-0 halo-indigo -z-0" />

      {/* phone shell */}
      <div className="relative h-full rounded-[44px] border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elevated)] shadow-[0_40px_120px_-20px_rgba(99,102,241,0.35)] overflow-hidden">
        {/* status bar */}
        <div className="flex items-center justify-between px-7 pt-4 pb-2 font-mono text-[10px] text-[color:var(--color-ink-dim)]">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="size-1 rounded-full bg-[color:var(--color-emerald)]" />
            WIYM
          </span>
        </div>

        {/* notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-[color:var(--color-bg)]" />

        {/* screen content */}
        <div className="px-6 pt-12 pb-6 space-y-5">
          {/* greeting */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
              This morning
            </div>
            <div className="font-display text-2xl mt-1">Good morning, Roger.</div>
          </div>

          {/* job card */}
          <div className="rounded-2xl border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-raised)] p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="size-10 rounded-full bg-gradient-to-br from-[color:var(--color-indigo)] to-[color:var(--color-emerald)] flex items-center justify-center font-display text-base">
                  R
                </div>
                <div>
                  <div className="text-sm font-medium leading-tight">Ramesh K.</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-emerald)]">
                    ✓ Verified · 4.9 / 217
                  </div>
                </div>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-[0.14em] px-2 py-1 rounded-full bg-[color:var(--color-amber)]/15 text-[color:var(--color-amber)]">
                In progress
              </span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
              Maruti Swift · KA 4521
            </div>
            <div className="text-sm mt-1 text-[color:var(--color-ink-dim)] leading-relaxed">
              Front brake pads replaced. Awaiting rotor inspection.
            </div>

            {/* mini line items */}
            <div className="mt-4 space-y-2 border-t border-[color:var(--color-border)] pt-3">
              {[
                ["Brake pad set (front)", "Nrs. 2,400", "Part"],
                ["Labour · 1.2h", "Nrs. 720", "Labour"],
                ["Disposal fee", "Nrs. 80", "Fee"],
              ].map(([k, v, tag]) => (
                <div
                  key={k}
                  className="flex items-center justify-between text-[11px]"
                >
                  <div className="flex items-center gap-2 text-[color:var(--color-ink-dim)]">
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)] w-12">
                      {tag}
                    </span>
                    {k}
                  </div>
                  <div className="font-mono text-[11px]">{v}</div>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2 mt-2 border-t border-[color:var(--color-border)]">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
                  Total · itemised
                </span>
                <span className="font-display text-base text-[color:var(--color-indigo-soft)]">
                  Nrs. 3,200
                </span>
              </div>
            </div>
          </div>

          {/* secondary card: trust pulse */}
          <div className="rounded-2xl border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-raised)] p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
                Trust pulse
              </div>
              <div className="font-mono text-[10px] text-[color:var(--color-emerald)]">
                Receipt-bound
              </div>
            </div>
            <div className="flex items-end gap-1.5 h-10">
              {[40, 70, 55, 90, 65, 80, 95, 70, 88, 92, 75, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[color:var(--color-indigo)]/30 to-[color:var(--color-indigo-soft)]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-[color:var(--color-ink-faint)]">
              <span>12 wk</span>
              <span>217 reviews · 0 disputes</span>
            </div>
          </div>
        </div>

        {/* home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-32 rounded-full bg-[color:var(--color-border-strong)]" />
      </div>

      {/* corner brief tag */}
      <div className="hidden md:block absolute -top-4 -right-4 px-3 py-2 rounded-full bg-[color:var(--color-bg)] border border-[color:var(--color-border-strong)] font-mono text-[10px] uppercase tracking-[0.14em]">
        Filing 001 / iOS · Android
      </div>
    </div>
  );
}
