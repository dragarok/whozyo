// {{PLAY_STORE_URL}} — the Play Store listing does not exist yet (no keystore,
// no Play listing as of the 2026-08-06 release-candidate ledger). The launch
// app is Android-only (android/app/src/main/AndroidManifest.xml, app.json
// package net.whozyo.app) — there is no iOS build, so no App Store badge.
// Fill in the real listing URL once the app is published, and add an Apple
// badge only if an iOS build ships.
export const PLAY_STORE_URL = "{{PLAY_STORE_URL}}";

export function AppStoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="store-badge"
        aria-label="Get it on Google Play"
      >
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
