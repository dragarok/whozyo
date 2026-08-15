import { Phone } from "./Phone";
import { Lines } from "./Lines";
import {
  ClientHomeScreen,
  QuoteScreen,
  VehicleScreen,
  MechanicDashboardScreen,
} from "./PhoneScreens";
import { getDictionary, type Lang } from "@/lib/i18n";

export function Showcase({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).showcase;
  /* Screens line up with `showcase.captions` in `lib/i18n/*.ts` by position. */
  const SCREENS = [
    <ClientHomeScreen key="client" lang={lang} />,
    <QuoteScreen key="quote" lang={lang} />,
    <VehicleScreen key="vehicle" lang={lang} />,
    <MechanicDashboardScreen key="mechanic" lang={lang} />,
  ];

  return (
    <section
      id="screens"
      className="relative py-24 md:py-32 bg-[color:var(--color-ink)] text-white overflow-hidden"
    >
      {/* halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-[color:var(--color-indigo)]/30 blur-[120px] -z-10" />

      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="max-w-[760px] mb-16">
          <span className="eyebrow !bg-white/10 !text-[color:var(--color-indigo-soft)]">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mt-4 text-white">
            <Lines lines={t.headingLines} />
          </h2>
          <p className="mt-5 text-[17px] text-white/65 leading-relaxed max-w-[60ch]">
            {t.sub}
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.captions.map((caption, i) => (
            <div key={caption} className="flex flex-col items-center gap-4">
              <div className="w-full float-y" style={{ animationDelay: `${i * 0.4}s` }}>
                <Phone>{SCREENS[i]}</Phone>
              </div>
              <div className="text-[12px] font-mono uppercase tracking-wider text-white/55 text-center">
                {caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
