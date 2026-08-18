/**
 * Where the app actually is, in one place.
 *
 * ## Why this file exists, and what it corrects
 *
 * `components/AppAvailability.tsx` carried a standing rule from 2026-08-12:
 * no store links until "the app this project actually builds" is listed. The
 * reasoning identified that app as `net.whozyo.app` — the Expo project in
 * `whozyo_app`, which has no iOS target and has never been published — and
 * concluded both store listings pointed at a different product.
 *
 * That premise was about the wrong repository. This site describes
 * WhoIsYourMechanic: clients, mechanics and service centres, QR pairing,
 * itemised receipts. That is the Flutter app in `trustyourrepair/app`, whose
 * `applicationId` is `com.whozyo.mechanic` — the exact package the Play
 * listing serves. `whozyo_app` is a separate product that happens to share an
 * owner and a domain.
 *
 * Checked before writing these constants (2026-08-18):
 *   - Play, `com.whozyo.mechanic` — matches
 *     `trustyourrepair/app/android/app/build.gradle.kts:40` verbatim.
 *   - App Store, id6769426409 — "WIYM: Vehicle Service Tracker", listed
 *     developer website **whozyo.com**, and a description that is this app
 *     ("repair notes, photos, mechanic updates, quotes, service history and
 *     customer feedback"). Seller reads as a personal name rather than a
 *     company, which is expected: whozyo is not a registered business yet.
 *
 * The old rule stands in spirit — never link a store listing that is not this
 * app. It is satisfied now, and the check above is what satisfying it looks
 * like. If either listing is ever taken down or re-pointed, fix it here: every
 * link on the site and the `/get` redirect read from these four constants.
 */

export const ANDROID_PACKAGE = "com.whozyo.mechanic";
export const APPLE_APP_ID = "6769426409";

export const PLAY_URL =
  `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

export const APP_STORE_URL =
  `https://apps.apple.com/us/app/wiym-vehicle-service-tracker/id${APPLE_APP_ID}`;

/**
 * The single address on every printed poster, sticker and handout card.
 *
 * Printed material cannot be recalled, so this string is effectively frozen:
 * change the destination behind it, never the string itself.
 */
export const GET_URL = "https://whozyo.com/get";

export type Platform = "android" | "ios" | "desktop";

/**
 * Which store a visitor should land in, from their user agent alone.
 *
 * Two deliberate non-detections:
 *
 *   - **Crawlers resolve to `desktop`.** Googlebot Smartphone advertises
 *     Android; redirecting it would mean the only thing indexed at /get is a
 *     hop to the Play Store. Bots get the real page.
 *   - **iPadOS 13+ resolves to `desktop`.** It reports itself as Macintosh and
 *     is indistinguishable from a Mac server-side. An iPad user therefore sees
 *     the QR page, which still has a working App Store button on it — the
 *     wrong-but-harmless answer, unlike sending a Mac to the App Store app.
 */
export function platformFromUserAgent(ua: string | null | undefined): Platform {
  if (!ua) return "desktop";
  if (/bot|crawler|spider|crawling|preview|facebookexternalhit|slurp/i.test(ua)) {
    return "desktop";
  }
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}
