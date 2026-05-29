export function AppStoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href="#download" className="store-badge" aria-label="Download on the App Store">
        <span className="size-7 shrink-0 grid place-items-center">
          <AppleGlyph />
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="store-eyebrow">Download on the</span>
          <span className="store-name">App Store</span>
        </span>
      </a>
      <a href="#download" className="store-badge" aria-label="Get it on Google Play">
        <span className="size-7 shrink-0 grid place-items-center">
          <PlayGlyph />
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="store-eyebrow">Get it on</span>
          <span className="store-name">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-[26px]" aria-hidden>
      <path
        fill="white"
        d="M16.5 12.5c0-2.7 2.2-4 2.3-4.1-1.2-1.8-3.2-2-3.9-2.1-1.6-.2-3.2 1-4 1-.8 0-2.1-1-3.5-1-1.8 0-3.5 1.1-4.4 2.7-1.9 3.3-.5 8.1 1.3 10.8.9 1.3 2 2.7 3.4 2.6 1.4-.1 1.9-.9 3.6-.9 1.6 0 2.1.9 3.6.9 1.5 0 2.4-1.3 3.3-2.6.6-.9 1-1.8 1.4-2.7-3.7-1.5-3.4-5.5-3.1-4.6Zm-2.7-8.2c.8-1 1.3-2.4 1.2-3.7-1.1.1-2.4.7-3.2 1.7-.7.9-1.4 2.3-1.2 3.6 1.2.1 2.4-.6 3.2-1.6Z"
      />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <defs>
        <linearGradient id="pg1" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0" stopColor="#00D2FF" />
          <stop offset="1" stopColor="#5B86E5" />
        </linearGradient>
        <linearGradient id="pg2" x1="0" y1="24" x2="24" y2="0">
          <stop offset="0" stopColor="#FFD200" />
          <stop offset="1" stopColor="#F7971E" />
        </linearGradient>
        <linearGradient id="pg3" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0" stopColor="#FF512F" />
          <stop offset="1" stopColor="#DD2476" />
        </linearGradient>
        <linearGradient id="pg4" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0" stopColor="#43E97B" />
          <stop offset="1" stopColor="#38F9D7" />
        </linearGradient>
      </defs>
      <path d="M3.5 2.5v19l10.6-9.5L3.5 2.5Z" fill="url(#pg1)" />
      <path d="M14.1 12 3.5 2.5l13 7.5L14.1 12Z" fill="url(#pg4)" />
      <path d="M14.1 12l2.4 2 4.5-2.5c1.3-.8 1.3-2.2 0-2.9L16.5 6 14.1 12Z" fill="url(#pg2)" />
      <path d="M14.1 12 3.5 21.5l13-7.5L14.1 12Z" fill="url(#pg3)" />
    </svg>
  );
}
