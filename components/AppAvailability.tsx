
// The store-availability notice, rendered in the hero and the download CTA.
//
// ## History, because this file has been reversed twice
//
// Until 2026-08-12 this carried two store badges. They were removed on the
// reasoning that both listings pointed at a different product: the app "this
// project builds" was taken to be `net.whozyo.app`, the Expo project in
// `whozyo_app`, which has no iOS target and has never been published.
//
// That identification was wrong about which repository this site is for. This
// site describes WhoIsYourMechanic — clients, mechanics and service centres,
// QR pairing, itemised receipts — which is the Flutter app in
// `trustyourrepair/app`, applicationId `com.whozyo.mechanic`. `whozyo_app` is
// a separate product sharing an owner and a domain.
//
// Restored 2026-08-18, with the checks written down in `lib/stores.ts` — read
// that file before touching a store URL. The rule the removal was protecting
// still stands: never link a listing that cannot be shown to be this app.
//
// The links themselves are NOT here. Everything install-shaped goes through
// /get, which redirects a phone to its own store and shows a QR to everyone
// else. This component only says what the situation is.

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
