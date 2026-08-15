import { LANGUAGES, homePath, type Lang } from "@/lib/i18n";

/**
 * EN / नेपाली segmented control, shown in the nav on every page.
 *
 * It always targets the HOME page of the other language, never the current
 * path — because the home page is the only page that has been translated. The
 * blog, the service-centre directory and the legal pages are English-only, so
 * a per-path switcher would promise a Nepali `/privacy` that does not exist.
 * Sending a reader to `/ne` is a real destination; a 404 is not.
 */
export function LanguageSwitcher({
  lang,
  tone = "light",
  label,
}: {
  lang: Lang;
  tone?: "light" | "on-ink";
  label: string;
}) {
  const onInk = tone === "on-ink";

  return (
    <div
      role="group"
      aria-label={label}
      className={[
        "flex items-center gap-0.5 rounded-full border p-0.5",
        onInk
          ? "border-white/20 bg-white/10"
          : "border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)]",
      ].join(" ")}
    >
      {LANGUAGES.map((l) => {
        const active = l.lang === lang;
        return (
          <a
            key={l.lang}
            href={homePath(l.lang)}
            hrefLang={l.htmlLang}
            lang={l.htmlLang}
            aria-current={active ? "true" : undefined}
            className={[
              "rounded-full px-2.5 py-1 text-[12px] font-semibold leading-none transition-colors",
              active
                ? onInk
                  ? "bg-white text-[color:var(--color-ink)]"
                  : "bg-[color:var(--color-ink)] text-white"
                : onInk
                ? "text-white/70 hover:text-white"
                : "text-[color:var(--color-ink-dim)] hover:text-[color:var(--color-ink)]",
            ].join(" ")}
          >
            {l.label}
          </a>
        );
      })}
    </div>
  );
}
