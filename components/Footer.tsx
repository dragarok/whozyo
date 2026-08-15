import { Logo } from "./Logo";
import { SUPPORT_EMAIL } from "@/lib/contact";
import { getDictionary, homeAnchor, type Lang } from "@/lib/i18n";

export function Footer({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).footer;

  return (
    <footer className="relative border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)] pt-20 pb-10">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <Logo className="size-9" />
              <div>
                <div className="font-display text-lg tracking-tight text-[color:var(--color-ink)] leading-tight">
                  WhoIsYourMechanic
                </div>
                <div className="text-[12px] text-[color:var(--color-ink-faint)] mt-0.5">
                  {t.tagline}
                </div>
              </div>
            </div>
            <p className="mt-6 text-[14px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[40ch]">
              {t.blurb}
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label mb-4">{t.productLabel}</div>
            <ul className="space-y-2 text-[14px] text-[color:var(--color-ink-dim)]">
              <li><a href={homeAnchor(lang, "how")} className="hover:text-[color:var(--color-ink)]">{t.how}</a></li>
              <li><a href={homeAnchor(lang, "features")} className="hover:text-[color:var(--color-ink)]">{t.features}</a></li>
              <li><a href="/service-centers" className="hover:text-[color:var(--color-ink)]">{t.serviceCenters}</a></li>
              <li><a href="/blog" className="hover:text-[color:var(--color-ink)]">{t.blog}</a></li>
              <li><a href={homeAnchor(lang, "download")} className="hover:text-[color:var(--color-ink)]">{t.availability}</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label mb-4">{t.supportLabel}</div>
            <ul className="space-y-2 text-[14px] text-[color:var(--color-ink-dim)]">
              <li><a href="/support" className="hover:text-[color:var(--color-ink)]">{t.help}</a></li>
              <li><a href="/privacy" className="hover:text-[color:var(--color-ink)]">{t.privacy}</a></li>
              <li><a href="/terms" className="hover:text-[color:var(--color-ink)]">{t.terms}</a></li>
              <li><a href="/delete-account" className="hover:text-[color:var(--color-ink)]">{t.deleteAccount}</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="label mb-4">{t.contactLabel}</div>
            <ul className="space-y-2 text-[14px] text-[color:var(--color-ink-dim)] font-mono">
              <li>{t.location}</li>
              <li><a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-[color:var(--color-ink)]">{SUPPORT_EMAIL}</a></li>
            </ul>
          </div>
        </div>

        <div className="section-rule my-10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-[color:var(--color-ink-faint)]">
          <span>{t.disclaimer}</span>
          <span className="flex items-center gap-4">
            <a href="/support" className="hover:text-[color:var(--color-ink)]">{t.supportShort}</a>
            <span className="opacity-50">·</span>
            <a href="/privacy" className="hover:text-[color:var(--color-ink)]">{t.privacyShort}</a>
            <span className="opacity-50">·</span>
            <a href="/terms" className="hover:text-[color:var(--color-ink)]">{t.termsShort}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
