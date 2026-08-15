import { AppAvailability } from "./AppAvailability";
import { Lines } from "./Lines";
import { getDictionary, type Lang } from "@/lib/i18n";

export function DownloadCTA({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).download;

  return (
    <section
      id="download"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="relative rounded-[28px] bg-gradient-to-br from-[color:var(--color-indigo-dark)] via-[color:var(--color-indigo)] to-[#7C3AED] p-10 md:p-16 overflow-hidden">
          {/* decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute -top-32 -right-32 size-[420px] rounded-full bg-[color:var(--color-emerald)]/30 blur-[100px]" />

          <div className="relative grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-white/90 font-semibold text-[12px] tracking-[0.06em] uppercase">
                <span className="size-1.5 rounded-full bg-[color:var(--color-emerald-soft)] live-dot" />
                {t.badge}
              </span>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02] mt-4 text-white">
                <Lines lines={t.headingLines} />
              </h2>
              <p className="mt-5 text-[17px] text-white/80 leading-relaxed max-w-[52ch]">
                {t.sub}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:justify-self-end">
              <div className="flex flex-col gap-3 lg:items-end">
                <AppAvailability tone="on-indigo" lang={lang} />
                <div className="text-[11px] font-mono uppercase tracking-wider text-white/55 lg:text-right">
                  {t.note}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
