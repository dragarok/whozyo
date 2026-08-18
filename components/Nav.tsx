import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getDictionary, homeAnchor, homePath, type Lang } from "@/lib/i18n";

export function Nav({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).nav;
  const home = homePath(lang);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 h-16 flex items-center justify-between gap-3">
        <a href={home} className="flex items-center gap-2.5">
          <Logo className="size-8" />
          {/* The wordmark yields to the language switcher on narrow screens —
              the mark alone still reads as home. */}
          <span className="hidden sm:inline font-display text-lg tracking-tight text-[color:var(--color-ink)]">
            WhoIsYourMechanic
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[color:var(--color-ink-dim)]">
          <a href={homeAnchor(lang, "how")} className="hover:text-[color:var(--color-ink)]">
            {t.how}
          </a>
          <a href={homeAnchor(lang, "features")} className="hover:text-[color:var(--color-ink)]">
            {t.features}
          </a>
          <a href="/service-centers" className="hover:text-[color:var(--color-ink)] inline-flex items-center gap-1.5">
            {t.serviceCenters}
            <EnglishOnlyMark lang={lang} title={t.englishOnly} />
          </a>
          <a href="/blog" className="hover:text-[color:var(--color-ink)] inline-flex items-center gap-1.5">
            {t.blog}
            <EnglishOnlyMark lang={lang} title={t.englishOnly} />
          </a>
          <a href={homeAnchor(lang, "mechanics")} className="hover:text-[color:var(--color-ink)]">
            {t.forMechanics}
          </a>
        </div>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher lang={lang} label={t.languageLabel} />
          <a
            href="/get"
            className="btn-primary text-[13px] py-2.5 px-4 whitespace-nowrap"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}

/**
 * Only the home page is translated. When a Nepali reader is on `/ne`, the links
 * that leave it land on English pages, so they get marked rather than silently
 * switching language under the reader.
 */
function EnglishOnlyMark({ lang, title }: { lang: Lang; title: string }) {
  if (lang === "en") return null;
  return (
    <span
      title={title}
      className="rounded px-1 py-px font-mono text-[9px] font-semibold uppercase tracking-wider text-[color:var(--color-ink-faint)] ring-1 ring-[color:var(--color-border-strong)]"
    >
      EN
      <span className="sr-only"> — {title}</span>
    </span>
  );
}
