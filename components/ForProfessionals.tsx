export function ForProfessionals() {
  return (
    <section
      id="professionals"
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-[color:var(--color-border)]"
    >
      {/* halo */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-[700px] halo-indigo pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-3">
            <div className="label">Section 04 — Join</div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              For the people
              <br />
              <em className="swash text-[color:var(--color-indigo-soft)]">
                already doing the work.
              </em>
            </h2>
            <p className="mt-8 max-w-[58ch] text-[color:var(--color-ink-dim)] text-lg leading-relaxed">
              If you're a mechanic, doctor, plumber, electrician — or you run a
              shop full of them — Whozyo is how the next ten years of customers
              will find out you're worth trusting. Get on the index early.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* card 1 */}
              <div className="border-l border-[color:var(--color-border-strong)] pl-6">
                <div className="label mb-3">Individuals</div>
                <div className="font-display text-3xl mb-3 tracking-tight">
                  Your name, verified.
                </div>
                <p className="text-[color:var(--color-ink-dim)] leading-relaxed mb-6 max-w-[40ch]">
                  A public, permanent record of the work you've done — owned by
                  you, portable across employers, recognised by customers.
                </p>
                <a href="mailto:professionals@whozyo.com" className="btn-primary">
                  Apply as a professional →
                </a>
              </div>

              {/* card 2 */}
              <div className="border-l border-[color:var(--color-border-strong)] pl-6">
                <div className="label mb-3">Shops & Centres</div>
                <div className="font-display text-3xl mb-3 tracking-tight">
                  Bring your team.
                </div>
                <p className="text-[color:var(--color-ink-dim)] leading-relaxed mb-6 max-w-[40ch]">
                  Service centres, clinics, and firms get a multi-seat workspace
                  with QR-onboarded staff, shared jobs, and one unified record.
                </p>
                <a href="mailto:partners@whozyo.com" className="btn-ghost">
                  Talk to partnerships
                </a>
              </div>
            </div>

            {/* stat strip */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)]">
              {[
                ["Live verticals", "01"],
                ["Pilot region", "Nepal"],
                ["Filed verticals", "06"],
                ["Disputes resolved", "100%"],
              ].map(([k, v]) => (
                <div key={k} className="bg-[color:var(--color-bg)] p-6">
                  <div className="font-display text-4xl mb-1">{v}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-ink-faint)]">
                    {k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
