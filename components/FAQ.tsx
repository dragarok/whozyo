import { Lines } from "./Lines";
import { FAQAccordion } from "./FAQAccordion";
import { getDictionary, type Lang } from "@/lib/i18n";

export function FAQ({ lang = "en" }: { lang?: Lang }) {
  const t = getDictionary(lang).faq;

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05] mt-4 text-[color:var(--color-ink)]">
              <Lines lines={t.headingLines} />
            </h2>
            <p className="mt-5 text-[15px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[36ch]">
              {t.sub}
            </p>
            <a
              href="mailto:hello@whoisyourmechanic.com"
              className="btn-ghost mt-6 text-[13px] py-2.5 px-4"
            >
              hello@whoisyourmechanic.com
            </a>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <FAQAccordion items={t.items} />
          </div>
        </div>
      </div>
    </section>
  );
}
