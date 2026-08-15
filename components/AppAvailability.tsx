// This file deliberately contains NO store links, and none should be added back
// until the app this project actually builds is actually listed.
//
// What stood here until 2026-08-12 were two store badges:
//
//   App Store  → apps.apple.com/us/app/wiym-vehicle-service-tracker/id6769426409
//   Google Play → play.google.com/store/apps/details?id=com.whozyo.mechanic
//
// Both URLs resolve (HTTP 200, verified live), and an earlier revert kept them
// on exactly that reasoning. Resolving is not the test. Reading the listings:
// the Apple one is "WIYM: Vehicle Service Tracker" by "Aakash Regmi"; the Play
// one is "WIYM", package com.whozyo.mechanic. The app this project builds is
// net.whozyo.app (whozyo_app/android/app/build.gradle:111 and app.json), at
// versionCode 1 / versionName 0.1.0, with release signing not yet configured —
// it has never been published to any store, and the string "com.whozyo.mechanic"
// appears nowhere in whozyo_app. whozyo_app/docs/RELEASE.md:60-61 treats
// net.whozyo.app as the Play identity this project will eventually ship under.
//
// So both badges sent a visitor to a DIFFERENT product than the one this site
// describes. Someone who tapped "Download on the App Store" installed a binary
// that is not this app and cannot talk to this backend, while believing it was
// WhoIsYourMechanic. There is additionally no iOS build at all: whozyo_app has
// no ios/ directory and never has.
//
// If and when net.whozyo.app is listed, link it by that package id.

import { getDictionary, type Lang } from "@/lib/i18n";

export function AppAvailability({
  tone = "light",
  className = "",
  lang = "en",
}: {
  tone?: "light" | "on-indigo";
  className?: string;
  lang?: Lang;
}) {
  const onIndigo = tone === "on-indigo";
  const t = getDictionary(lang).availability;

  return (
    <div
      className={[
        "inline-flex items-start gap-3 rounded-[var(--radius-md)] border px-4 py-3.5 max-w-[46ch]",
        onIndigo
          ? "border-white/25 bg-white/10 backdrop-blur"
          : "border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)]",
        className,
      ].join(" ")}
    >
      <span
        aria-hidden
        className={[
          "mt-[7px] size-1.5 shrink-0 rounded-full",
          onIndigo
            ? "bg-[color:var(--color-amber-soft)]"
            : "bg-[color:var(--color-amber)]",
        ].join(" ")}
      />
      <p
        className={[
          "text-[14px] leading-relaxed",
          onIndigo ? "text-white/85" : "text-[color:var(--color-ink-dim)]",
        ].join(" ")}
      >
        <strong
          className={
            onIndigo
              ? "font-semibold text-white"
              : "font-semibold text-[color:var(--color-ink)]"
          }
        >
          {t.strong}
        </strong>{" "}
        {t.body}
      </p>
    </div>
  );
}
