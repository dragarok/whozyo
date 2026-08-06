import { AppStoreBadges } from "./AppStoreBadges";
import { Phone } from "./Phone";
import { ClientHomeScreen, MechanicDashboardScreen } from "./PhoneScreens";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* halos */}
      <div className="absolute -top-20 -left-20 size-[520px] halo-indigo -z-10" />
      <div className="absolute top-1/3 right-0 size-[480px] halo-emerald -z-10" />
      {/* grid backdrop */}
      <div className="absolute inset-0 dot-grid opacity-50 -z-10" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10 items-center">
          {/* copy column */}
          <div className="col-span-12 lg:col-span-7">
            <div className="anim-fade">
              <span className="eyebrow">
                <span className="size-1.5 rounded-full bg-[color:var(--color-emerald)] live-dot" />
                Launching in Kathmandu · Android
              </span>
            </div>

            <h1
              className="font-display text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-[-0.03em] mt-5 text-[color:var(--color-ink)] anim-rise"
              style={{ animationDelay: "100ms" }}
            >
              Know who fixes
              <br />
              your{" "}
              <span className="relative inline-block text-[color:var(--color-indigo-dark)]">
                vehicle.
                <Underline />
              </span>
            </h1>

            <p
              className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[color:var(--color-ink-dim)] max-w-[58ch] anim-rise"
              style={{ animationDelay: "200ms" }}
            >
              WhoIsYourMechanic is the trusted way to find a verified mechanic,
              watch the work as it happens, and settle up with a permanent
              itemised receipt — built for every garage in Nepal.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3 anim-rise"
              style={{ animationDelay: "300ms" }}
            >
              <AppStoreBadges />
            </div>

            {/* trust strip */}
            <div
              className="mt-12 flex flex-wrap items-center gap-x-9 gap-y-4 anim-rise"
              style={{ animationDelay: "400ms" }}
            >
              {[
                ["1 app", "Client · Mechanic · Workshop"],
                ["100%", "Receipt-bound reviews"],
                ["EN + नेपाली", "Bilingual, day one"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center gap-3">
                  <div className="font-display text-xl text-[color:var(--color-ink)]">
                    {k}
                  </div>
                  <div className="text-[12px] text-[color:var(--color-ink-faint)] leading-tight max-w-[16ch]">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* phones column */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative h-[560px] sm:h-[620px] flex items-center justify-center">
              {/* glow halo behind phones */}
              <div className="absolute size-[460px] halo-indigo -z-10" />

              {/* back phone */}
              <div className="absolute left-2 top-6 sm:left-0 sm:top-4 w-[58%] max-w-[260px] float-y-slow">
                <Phone tilt="left">
                  <MechanicDashboardScreen />
                </Phone>
              </div>

              {/* front phone */}
              <div className="absolute right-0 bottom-0 w-[64%] max-w-[290px] float-y">
                <Phone tilt="right">
                  <ClientHomeScreen />
                </Phone>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Underline() {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full h-3"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M2 9 Q 50 1, 100 6 T 198 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
    </svg>
  );
}
