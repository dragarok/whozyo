import { Phone } from "./Phone";
import { Lines } from "./Lines";
import {
  ClientHomeScreen,
  MechanicDashboardScreen,
  ServiceCenterScreen,
} from "./PhoneScreens";
import { getDictionary, type Lang } from "@/lib/i18n";

/* Badge tone and phone screen are presentation, not copy — they stay here and
   line up with the three roles in `lib/i18n/*.ts` by position. */
const TONE_BADGE = ["pill pill-indigo", "pill pill-emerald", "pill pill-amber"];

export function ThreeRoles({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).roles;
  const SCREENS = [
    <ClientHomeScreen key="client" lang={lang} />,
    <MechanicDashboardScreen key="mechanic" lang={lang} />,
    <ServiceCenterScreen key="workshop" lang={lang} />,
  ];

  return (
    <section
      id="roles"
      className="relative py-24 md:py-32 bg-[color:var(--color-surface)] border-y border-[color:var(--color-border)]"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="max-w-[760px] mb-16">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mt-4 text-[color:var(--color-ink)]">
            <Lines lines={t.headingLines} />
          </h2>
          <p className="mt-5 text-[17px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[60ch]">
            {t.sub}
          </p>
        </header>

        <div className="space-y-20 md:space-y-28">
          {t.items.map((r, i) => (
            <div
              key={r.title}
              className="grid grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* phone (alternate sides on desktop) */}
              <div
                className={`col-span-12 lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative h-[560px] flex items-center justify-center">
                  <div className="absolute size-[420px] halo-indigo -z-10" />
                  <Phone tilt={i % 2 === 0 ? "right" : "left"}>
                    {SCREENS[i]}
                  </Phone>
                </div>
              </div>

              {/* copy */}
              <div
                className={`col-span-12 lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span className={TONE_BADGE[i]}>{r.badge}</span>
                <h3 className="font-display text-3xl md:text-5xl tracking-tight leading-tight mt-4 text-[color:var(--color-ink)] max-w-[20ch]">
                  {r.title}
                </h3>
                <p className="mt-5 text-[17px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[58ch]">
                  {r.sub}
                </p>

                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[15px] text-[color:var(--color-ink)]"
                    >
                      <CheckGlyph />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckGlyph() {
  return (
    <span className="mt-0.5 size-5 shrink-0 rounded-full bg-[color:var(--color-emerald-tint)] grid place-items-center">
      <svg viewBox="0 0 16 16" className="size-3 text-[color:var(--color-emerald)]">
        <path
          d="M3 8.5l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}
