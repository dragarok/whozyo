const STEPS = [
  {
    n: "01",
    title: "Scan the QR.",
    body:
      "Find a mechanic nearby or scan the QR at any partner workshop. A handshake takes ten seconds — no phone numbers traded.",
    icon: <QrIcon />,
  },
  {
    n: "02",
    title: "Approve an itemised quote.",
    body:
      "Parts, labour, fees — every line of the quote is itemised so you know exactly what you're paying for before any work begins.",
    icon: <QuoteIcon />,
  },
  {
    n: "03",
    title: "Watch the work.",
    body:
      "Photos of every part removed, every fluid drained, every check passed — added to a live timeline you can follow from anywhere.",
    icon: <CameraIcon />,
  },
  {
    n: "04",
    title: "Settle up & keep the record.",
    body:
      "Get a permanent itemised receipt once you've paid, and leave a review that's bound to the job — so it actually means something.",
    icon: <ReceiptIcon />,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="max-w-[760px] mb-16">
          <span className="eyebrow">How it works</span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mt-4 text-[color:var(--color-ink)]">
            From scan to receipt
            <br />
            in four taps.
          </h2>
          <p className="mt-5 text-[17px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[60ch]">
            No more hunting for an honest mechanic. No more wondering what
            you're really paying for. Just a clean four-step flow that puts
            the receipt back in your hands.
          </p>
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="card p-7 relative group hover:shadow-[var(--shadow-elevated)] transition-shadow duration-500"
            >
              <div className="absolute top-7 right-7 font-mono text-[11px] font-semibold tracking-widest text-[color:var(--color-ink-faint)]">
                {s.n}
              </div>
              <div className="size-12 rounded-2xl bg-[color:var(--color-indigo-tint)] grid place-items-center text-[color:var(--color-indigo-dark)] group-hover:bg-[color:var(--color-indigo)] group-hover:text-white transition-colors duration-500">
                {s.icon}
              </div>
              <h3 className="font-display text-xl mt-5 text-[color:var(--color-ink)] tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] text-[color:var(--color-ink-dim)] leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function QrIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 14h3v3M20 14v3M14 20h3M20 20v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <path d="M5 4h14v16l-3-2-2 2-2-2-2 2-2-2-3 2V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <path d="M6 3h12v18l-2-1.5L14 21l-2-1.5L10 21l-2-1.5L6 21V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
