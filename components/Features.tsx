const FEATURES = [
  {
    title: "QR pairing",
    body:
      "A ten-second QR scan creates a verified link between you and your mechanic. No phone numbers exchanged, no contact-saving, no spam.",
    tone: "indigo" as const,
    icon: <QrIcon />,
  },
  {
    title: "Itemised quotes",
    body:
      "Every quote breaks down into parts, labour, and fees — line by line. No 'service charges,' no surprises at the till.",
    tone: "indigo" as const,
    icon: <ListIcon />,
  },
  {
    title: "Photo timeline",
    body:
      "The mechanic snaps before-and-after of every part. The photos attach to your job and stay with you forever.",
    tone: "emerald" as const,
    icon: <CameraIcon />,
  },
  {
    title: "Receipt-bound reviews",
    body:
      "A review can only exist if a paid job exists. No fake stars, no review-farms, no removal-as-a-service.",
    tone: "emerald" as const,
    icon: <StarIcon />,
  },
  {
    title: "Vehicle garage",
    body:
      "Add every car, bike, and scooter you own. Every service, every part, every km — saved against the vehicle's record.",
    tone: "amber" as const,
    icon: <CarIcon />,
  },
  {
    title: "One clear bill",
    body:
      "The itemised bill and payment record live in the app, so there's one place to check what you owe and what you've paid — however you settle it with the mechanic.",
    tone: "amber" as const,
    icon: <WalletIcon />,
  },
  {
    title: "EN + नेपाली",
    body:
      "The app speaks English and Nepali, day one. Switch languages anytime — every label, every screen, every notification.",
    tone: "indigo" as const,
    icon: <GlobeIcon />,
  },
  {
    title: "Workshop floor view",
    body:
      "Service centres see every bay, every mechanic, and every customer in one workspace. Add staff via QR.",
    tone: "emerald" as const,
    icon: <DashIcon />,
  },
  {
    title: "Service history",
    body:
      "Every quote, photo, payment, and mechanic note for every job — kept in the vehicle's record, recoverable any time.",
    tone: "amber" as const,
    icon: <HistoryIcon />,
  },
];

const TONE: Record<string, string> = {
  indigo:
    "bg-[color:var(--color-indigo-tint)] text-[color:var(--color-indigo-dark)]",
  emerald:
    "bg-[color:var(--color-emerald-tint)] text-[color:var(--color-emerald)]",
  amber: "bg-[color:var(--color-amber-tint)] text-[#92400e]",
};

export function Features() {
  return (
    <section
      id="features"
      className="relative py-24 md:py-32 bg-[color:var(--color-surface)] border-y border-[color:var(--color-border)]"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="max-w-[760px] mb-16">
          <span className="eyebrow">Everything in the box</span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mt-4 text-[color:var(--color-ink)]">
            Designed for the real
            <br />
            way repairs happen.
          </h2>
          <p className="mt-5 text-[17px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[60ch]">
            Nine features that turn an opaque, anxious experience into
            something you'd actually recommend to your family.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card p-7 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`size-11 rounded-xl grid place-items-center ${TONE[f.tone]}`}>
                {f.icon}
              </div>
              <h3 className="font-display text-xl tracking-tight mt-5 text-[color:var(--color-ink)]">
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--color-ink-dim)]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── icons ──────────────────────────────────────────────────────────────── */
function QrIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 14h3v3M20 14v3M14 20h3M20 20v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="m12 3 2.6 5.6 6 .9-4.4 4.2 1 6.1L12 17l-5.2 2.8 1-6.1L3.4 9.5l6-.9L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="M4 13l2-5a2 2 0 0 1 1.9-1.4h8.2A2 2 0 0 1 18 8l2 5M4 13h16v5h-2l-1 2h-2l-1-2h-4l-1 2H7l-1-2H4v-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="8" cy="15.5" r="1.2" fill="currentColor" />
      <circle cx="16" cy="15.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="M3 7a2 2 0 0 1 2-2h12v4M3 7v10a2 2 0 0 0 2 2h15v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="14" y="11" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function DashIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="3" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="13" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="13" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function HistoryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 3v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
