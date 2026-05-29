/* Reusable in-phone screen compositions for hero, role section, gallery. */

export function ClientHomeScreen() {
  return (
    <div className="space-y-4">
      <div>
        <div className="label text-[10px]">This morning</div>
        <div className="font-display text-xl text-[color:var(--color-ink)]">
          Good morning, Roger.
        </div>
      </div>

      {/* Live job card */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="size-10 rounded-full bg-gradient-to-br from-[color:var(--color-indigo)] to-[color:var(--color-emerald)] grid place-items-center text-white font-display text-sm">
              R
            </div>
            <div>
              <div className="text-[13px] font-semibold leading-tight text-[color:var(--color-ink)]">
                Ramesh K.
              </div>
              <div className="text-[10px] font-mono text-[color:var(--color-emerald)] mt-0.5">
                ✓ Verified · 4.9 (217)
              </div>
            </div>
          </div>
          <span className="pill pill-amber text-[10px]">In progress</span>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)]">
          Maruti Swift · KA 4521
        </div>
        <div className="text-[12px] mt-1 text-[color:var(--color-ink-dim)] leading-snug">
          Front brake pads replaced. Awaiting rotor inspection.
        </div>
        <div className="mt-3 pt-3 border-t border-[color:var(--color-border)] flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)]">
            Quote · itemised
          </span>
          <span className="font-display text-base text-[color:var(--color-indigo-dark)]">
            Nrs. 3,200
          </span>
        </div>
      </div>

      {/* QR card */}
      <div className="card-tinted p-4 flex items-center gap-3">
        <div className="size-12 rounded-lg bg-white grid place-items-center">
          <QrIcon className="size-7 text-[color:var(--color-indigo-dark)]" />
        </div>
        <div className="flex-1">
          <div className="text-[12px] font-semibold text-[color:var(--color-ink)]">
            Pair with a mechanic
          </div>
          <div className="text-[10px] text-[color:var(--color-ink-dim)]">
            Scan their QR · 10-second handshake
          </div>
        </div>
      </div>
    </div>
  );
}

export function MechanicDashboardScreen() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="label text-[10px]">Today</div>
          <div className="font-display text-xl text-[color:var(--color-ink)]">
            4 active jobs
          </div>
        </div>
        <div className="flex items-center gap-1.5 pill pill-emerald text-[10px]">
          <span className="size-1.5 rounded-full bg-[color:var(--color-emerald)] live-dot" />
          On
        </div>
      </div>

      {/* mini stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          ["4", "Active"],
          ["12", "This wk"],
          ["4.9", "Rating"],
        ].map(([v, k]) => (
          <div key={k} className="card p-2.5 text-center">
            <div className="font-display text-lg text-[color:var(--color-ink)]">{v}</div>
            <div className="text-[9px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)]">{k}</div>
          </div>
        ))}
      </div>

      {/* job list */}
      <div className="space-y-2">
        {[
          { name: "Maruti Swift", reg: "KA 4521", status: "In progress", tone: "amber" as const },
          { name: "Honda Civic", reg: "BA 8807", status: "Awaiting quote", tone: "indigo" as const },
          { name: "Tata Nexon", reg: "LU 1129", status: "Paid", tone: "emerald" as const },
        ].map((j) => (
          <div
            key={j.reg}
            className="card p-3 flex items-center justify-between"
          >
            <div>
              <div className="text-[12px] font-semibold text-[color:var(--color-ink)]">
                {j.name}
              </div>
              <div className="text-[10px] font-mono text-[color:var(--color-ink-faint)] mt-0.5">
                {j.reg}
              </div>
            </div>
            <span className={`pill pill-${j.tone} text-[9px]`}>{j.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QuoteScreen() {
  return (
    <div className="space-y-4">
      <div>
        <div className="label text-[10px]">Quote · awaiting your approval</div>
        <div className="font-display text-xl text-[color:var(--color-ink)] mt-1">
          Front brake job
        </div>
      </div>

      <div className="card p-4 space-y-2.5">
        {[
          { label: "Brake pad set (front)", v: "Nrs. 2,400", tag: "Part" },
          { label: "Brake fluid (top-up)", v: "Nrs. 180", tag: "Part" },
          { label: "Labour · 1.2 h", v: "Nrs. 720", tag: "Labour" },
          { label: "Disposal fee", v: "Nrs. 80", tag: "Fee" },
        ].map((l) => (
          <div key={l.label} className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2 text-[color:var(--color-ink-dim)]">
              <span
                className={`text-[8px] font-mono uppercase tracking-wider w-12 ${
                  l.tag === "Part"
                    ? "text-[color:var(--color-indigo-dark)]"
                    : l.tag === "Labour"
                    ? "text-[color:var(--color-emerald)]"
                    : "text-[color:var(--color-amber)]"
                }`}
              >
                {l.tag}
              </span>
              <span>{l.label}</span>
            </div>
            <div className="font-mono text-[11px] text-[color:var(--color-ink)]">{l.v}</div>
          </div>
        ))}
        <div className="border-t border-[color:var(--color-border)] pt-3 mt-2 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)]">
            Total
          </span>
          <span className="font-display text-lg text-[color:var(--color-indigo-dark)]">
            Nrs. 3,380
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="rounded-full bg-[color:var(--color-indigo)] text-white text-[11px] font-semibold py-2.5">
          Approve
        </button>
        <button className="rounded-full bg-white border border-[color:var(--color-border)] text-[color:var(--color-ink)] text-[11px] font-semibold py-2.5">
          Discuss
        </button>
      </div>
    </div>
  );
}

export function ServiceCenterScreen() {
  return (
    <div className="space-y-4">
      <div>
        <div className="label text-[10px]">Workshop · Today</div>
        <div className="font-display text-xl text-[color:var(--color-ink)] mt-1">
          Auto Care Patan
        </div>
      </div>

      {/* big tiles */}
      <div className="grid grid-cols-3 gap-2">
        {[
          ["08", "In bay"],
          ["12", "Waiting"],
          ["06", "Done"],
        ].map(([v, k]) => (
          <div key={k} className="card-tinted p-3 text-center">
            <div className="font-display text-2xl text-[color:var(--color-indigo-dark)]">{v}</div>
            <div className="text-[9px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)] mt-1">{k}</div>
          </div>
        ))}
      </div>

      {/* mechanics */}
      <div>
        <div className="label text-[10px] mb-2">Team on shift</div>
        <div className="space-y-2">
          {[
            { name: "Ramesh K.", load: "2 jobs", on: true },
            { name: "Suresh M.", load: "1 job", on: true },
            { name: "Bikash T.", load: "Off", on: false },
          ].map((m) => (
            <div
              key={m.name}
              className="card p-2.5 flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <div className="size-7 rounded-full bg-[color:var(--color-indigo-tint)] text-[color:var(--color-indigo-dark)] grid place-items-center text-[11px] font-bold">
                  {m.name[0]}
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-[color:var(--color-ink)] leading-tight">
                    {m.name}
                  </div>
                  <div className="text-[9px] font-mono text-[color:var(--color-ink-faint)] mt-0.5">
                    {m.load}
                  </div>
                </div>
              </div>
              <span
                className={`size-2 rounded-full ${
                  m.on
                    ? "bg-[color:var(--color-emerald)] live-dot"
                    : "bg-[color:var(--color-ink-ghost)]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VehicleScreen() {
  return (
    <div className="space-y-4">
      <div>
        <div className="label text-[10px]">My garage</div>
        <div className="font-display text-xl text-[color:var(--color-ink)] mt-1">
          2 vehicles
        </div>
      </div>

      {[
        { name: "Maruti Swift", reg: "KA 4521", year: "2019", km: "48,210 km" },
        { name: "Honda Activa", reg: "BA 8807", year: "2022", km: "12,950 km" },
      ].map((v) => (
        <div key={v.reg} className="card p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[13px] font-semibold text-[color:var(--color-ink)] leading-tight">
                {v.name}
              </div>
              <div className="text-[10px] font-mono text-[color:var(--color-ink-faint)] mt-0.5">
                {v.reg} · {v.year}
              </div>
            </div>
            <div className="text-[10px] font-mono text-[color:var(--color-ink-dim)]">
              {v.km}
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-[color:var(--color-border)] flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)]">
              Last service
            </span>
            <span className="text-[10px] text-[color:var(--color-ink-dim)]">
              12 Mar · Brake pads
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Small QR icon used inside the client screen */
function QrIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="6" y="6" width="1.5" height="1.5" fill="currentColor" />
      <rect x="17" y="6" width="1.5" height="1.5" fill="currentColor" />
      <rect x="6" y="17" width="1.5" height="1.5" fill="currentColor" />
      <path d="M14 14h3v3M20 14v3M14 20h3M20 20v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
