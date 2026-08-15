/* Reusable in-phone screen compositions for hero, role section, gallery.
 *
 * These are mockups of the app's own UI, and the app itself is bilingual — so
 * they are translated too. A Nepali landing page showing English app screens
 * would be advertising a product that doesn't exist. Copy lives in
 * `lib/i18n/*.ts` under `screens`; vehicle models and number plates stay in
 * Latin in both languages because that is how they are actually written. */

import { getDictionary, type Lang } from "@/lib/i18n";

export function ClientHomeScreen({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).screens.client;

  return (
    <div className="space-y-4">
      <div>
        <div className="label text-[10px]">{t.label}</div>
        <div className="font-display text-xl text-[color:var(--color-ink)]">
          {t.greeting}
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
                {t.mechanic}
              </div>
              <div className="text-[10px] font-mono text-[color:var(--color-emerald)] mt-0.5">
                {t.verified}
              </div>
            </div>
          </div>
          <span className="pill pill-amber text-[10px]">{t.status}</span>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)]">
          {t.vehicle}
        </div>
        <div className="text-[12px] mt-1 text-[color:var(--color-ink-dim)] leading-snug">
          {t.note}
        </div>
        <div className="mt-3 pt-3 border-t border-[color:var(--color-border)] flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)]">
            {t.quoteLabel}
          </span>
          <span className="font-display text-base text-[color:var(--color-indigo-dark)]">
            {t.amount}
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
            {t.qrTitle}
          </div>
          <div className="text-[10px] text-[color:var(--color-ink-dim)]">
            {t.qrSub}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MechanicDashboardScreen({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).screens.mechanic;
  const TONES = ["amber", "indigo", "emerald"] as const;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="label text-[10px]">{t.label}</div>
          <div className="font-display text-xl text-[color:var(--color-ink)]">
            {t.heading}
          </div>
        </div>
        <div className="flex items-center gap-1.5 pill pill-emerald text-[10px]">
          <span className="size-1.5 rounded-full bg-[color:var(--color-emerald)] live-dot" />
          {t.on}
        </div>
      </div>

      {/* mini stats row */}
      <div className="grid grid-cols-3 gap-2">
        {t.stats.map((s) => (
          <div key={s.k} className="card p-2.5 text-center">
            <div className="font-display text-lg text-[color:var(--color-ink)]">{s.v}</div>
            <div className="text-[9px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)]">{s.k}</div>
          </div>
        ))}
      </div>

      {/* job list */}
      <div className="space-y-2">
        {t.jobs.map((j, i) => (
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
            <span className={`pill pill-${TONES[i % TONES.length]} text-[9px]`}>
              {j.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QuoteScreen({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).screens.quote;
  // Tag text is translated, so the colour can no longer key off the label —
  // it keys off position in the quote instead: part, part, labour, fee.
  const TAGS = [
    { text: t.tagPart, cls: "text-[color:var(--color-indigo-dark)]" },
    { text: t.tagPart, cls: "text-[color:var(--color-indigo-dark)]" },
    { text: t.tagLabour, cls: "text-[color:var(--color-emerald)]" },
    { text: t.tagFee, cls: "text-[color:var(--color-amber)]" },
  ];

  return (
    <div className="space-y-4">
      <div>
        <div className="label text-[10px]">{t.label}</div>
        <div className="font-display text-xl text-[color:var(--color-ink)] mt-1">
          {t.heading}
        </div>
      </div>

      <div className="card p-4 space-y-2.5">
        {t.lines.map((l, i) => (
          <div key={l.label} className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2 text-[color:var(--color-ink-dim)]">
              <span
                className={`text-[8px] font-mono uppercase tracking-wider w-12 shrink-0 ${TAGS[i].cls}`}
              >
                {TAGS[i].text}
              </span>
              <span>{l.label}</span>
            </div>
            <div className="font-mono text-[11px] text-[color:var(--color-ink)]">{l.v}</div>
          </div>
        ))}
        <div className="border-t border-[color:var(--color-border)] pt-3 mt-2 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)]">
            {t.totalLabel}
          </span>
          <span className="font-display text-lg text-[color:var(--color-indigo-dark)]">
            {t.total}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="rounded-full bg-[color:var(--color-indigo)] text-white text-[11px] font-semibold py-2.5">
          {t.approve}
        </button>
        <button className="rounded-full bg-white border border-[color:var(--color-border)] text-[color:var(--color-ink)] text-[11px] font-semibold py-2.5">
          {t.discuss}
        </button>
      </div>
    </div>
  );
}

export function ServiceCenterScreen({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).screens.workshop;
  // Last member of the mock team is off shift — the dot goes grey.
  const lastIndex = t.team.length - 1;

  return (
    <div className="space-y-4">
      <div>
        <div className="label text-[10px]">{t.label}</div>
        <div className="font-display text-xl text-[color:var(--color-ink)] mt-1">
          {t.heading}
        </div>
      </div>

      {/* big tiles */}
      <div className="grid grid-cols-3 gap-2">
        {t.tiles.map((tile) => (
          <div key={tile.k} className="card-tinted p-3 text-center">
            <div className="font-display text-2xl text-[color:var(--color-indigo-dark)]">{tile.v}</div>
            <div className="text-[9px] font-mono uppercase tracking-wider text-[color:var(--color-ink-faint)] mt-1">{tile.k}</div>
          </div>
        ))}
      </div>

      {/* mechanics */}
      <div>
        <div className="label text-[10px] mb-2">{t.teamLabel}</div>
        <div className="space-y-2">
          {t.team.map((m, i) => {
            const on = i !== lastIndex;
            return (
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
                    on
                      ? "bg-[color:var(--color-emerald)] live-dot"
                      : "bg-[color:var(--color-ink-ghost)]"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function VehicleScreen({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).screens.vehicle;

  return (
    <div className="space-y-4">
      <div>
        <div className="label text-[10px]">{t.label}</div>
        <div className="font-display text-xl text-[color:var(--color-ink)] mt-1">
          {t.heading}
        </div>
      </div>

      {t.vehicles.map((v) => (
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
              {t.lastServiceLabel}
            </span>
            <span className="text-[10px] text-[color:var(--color-ink-dim)]">
              {v.lastService}
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
