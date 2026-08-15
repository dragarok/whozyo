import { Phone } from "./Phone";
import { Lines } from "./Lines";
import { MechanicDashboardScreen } from "./PhoneScreens";
import { getDictionary, type Lang } from "@/lib/i18n";

export function Mechanics({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).mechanics;

  return (
    <section
      id="mechanics"
      className="relative py-24 md:py-32 bg-[color:var(--color-elevated)] border-y border-[color:var(--color-border)]"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-[700px] halo-indigo -z-10" />

      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-7">
            <span className="eyebrow !bg-white">{t.eyebrow}</span>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mt-4 text-[color:var(--color-ink)]">
              <Lines lines={t.headingLines} />
              <br />
              <span className="text-[color:var(--color-indigo-dark)]">
                {t.headingAccent}
              </span>
            </h2>
            <p className="mt-5 text-[17px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[58ch]">
              {t.sub}
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {t.bullets.map((bullet) => (
                <li key={bullet.t} className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-[color:var(--color-emerald)] shrink-0" />
                  <div>
                    <div className="text-[15px] font-semibold text-[color:var(--color-ink)]">{bullet.t}</div>
                    <div className="text-[13px] text-[color:var(--color-ink-dim)] mt-0.5 leading-snug">{bullet.b}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="mailto:mechanics@whoisyourmechanic.com" className="btn-primary">
                {t.ctaMechanic}
              </a>
              <a href="mailto:workshops@whoisyourmechanic.com" className="btn-ghost">
                {t.ctaWorkshop}
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="relative h-[600px] flex items-center justify-center">
              <div className="absolute size-[420px] halo-indigo -z-10" />
              <Phone tilt="right">
                <MechanicDashboardScreen lang={lang} />
              </Phone>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
