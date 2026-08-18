import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { InstallQr } from "@/components/InstallQr";
import { PageShell } from "@/components/PageShell";
import {
  APP_STORE_URL,
  PLAY_URL,
  platformFromUserAgent,
} from "@/lib/stores";

/**
 * `whozyo.com/get` — the one address printed on every poster, sticker and
 * handout card, and the only install link on the site.
 *
 * A phone is sent straight to its own store. A desktop is not: it gets the QR,
 * because someone reading this on a laptop cannot install anything from it,
 * and searching a store by name is exactly where people give up — "WIYM"
 * returns other things.
 *
 * Never statically rendered: the whole point is that the response depends on
 * who is asking.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Install WhoIsYourMechanic",
  description:
    "Install WhoIsYourMechanic on Android or iPhone. Scan the QR with your phone, or open the store link for your device.",
  alternates: { canonical: "/get" },
};

export default async function GetPage() {
  const platform = platformFromUserAgent((await headers()).get("user-agent"));

  if (platform === "android") redirect(PLAY_URL);
  if (platform === "ios") redirect(APP_STORE_URL);

  return (
    <PageShell
      eyebrow="Install"
      title="Point your phone at this."
      subtitle="You're on a desktop, so there is nothing to install here. Scan the code with your phone's camera and it will open the right store for you — the same code that is on the posters."
    >
      <div className="card p-6 md:p-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          <div className="shrink-0 rounded-[var(--radius-md)] bg-white p-3 ring-1 ring-[color:var(--color-border-strong)]">
            <InstallQr className="size-[220px] md:size-[240px]" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="label mb-3">Scan to install — free</div>
            <p
              lang="ne"
              className="mb-6 text-[15px] leading-relaxed text-[color:var(--color-ink-dim)]"
            >
              QR स्क्यान गरी एप इन्स्टल गर्नुहोस् — निःशुल्क
            </p>

            <p className="mb-5 text-[14px] leading-relaxed text-[color:var(--color-ink-dim)]">
              One code works on both. Or open your store directly:
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={PLAY_URL}
                className="btn-primary text-[14px]"
                rel="noopener"
              >
                Android — Google Play
              </a>
              <a
                href={APP_STORE_URL}
                className="btn-ghost text-[14px]"
                rel="noopener"
              >
                iPhone — App Store
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[13px] leading-relaxed text-[color:var(--color-ink-faint)]">
        On a phone, this page sends you straight to your store instead of
        showing the code. If it did not, the two links above are the same
        destinations.
      </p>
    </PageShell>
  );
}
