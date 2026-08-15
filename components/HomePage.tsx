import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ThreeRoles } from "@/components/ThreeRoles";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { TrustSection } from "@/components/TrustSection";
import { Mechanics } from "@/components/Mechanics";
import { FAQ } from "@/components/FAQ";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";
import { DEFAULT_LANG, type Lang } from "@/lib/i18n";

/**
 * The whole marketing home page, in one language. `/` renders it as `en`,
 * `/ne` as `ne`; there is no second copy of the layout to keep in sync.
 *
 * The `lang` attribute is set here rather than on <html> because the root
 * layout is shared with the English-only pages and cannot see which route is
 * rendering. A nested `lang` is what screen readers and hyphenation actually
 * resolve against; search engines get the pairing from the `alternates.
 * languages` metadata on each route.
 */
export function HomePage({ lang }: { lang: Lang }) {
  return (
    <main
      className="min-h-screen"
      lang={lang === DEFAULT_LANG ? undefined : lang}
    >
      <Nav lang={lang} />
      <Hero lang={lang} />
      <ThreeRoles lang={lang} />
      <HowItWorks lang={lang} />
      <Features lang={lang} />
      <Showcase lang={lang} />
      <TrustSection lang={lang} />
      <Mechanics lang={lang} />
      <FAQ lang={lang} />
      <DownloadCTA lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
