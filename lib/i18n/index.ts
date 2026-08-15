import { en, type Dict } from "./en";
import { ne } from "./ne";

export type { Dict };

export type Lang = "en" | "ne";

/** The site's default. `/` serves this; every other language gets a prefix. */
export const DEFAULT_LANG: Lang = "en";

const DICTS: Record<Lang, Dict> = { en, ne };

export function getDictionary(lang: Lang): Dict {
  return DICTS[lang];
}

/**
 * Language menu, in the order it is shown. `label` is what the switcher renders
 * — each written in its OWN language, which is the whole point of a switcher:
 * a Nepali reader looking at an English page has to recognise their option
 * without reading English first.
 */
export const LANGUAGES: { lang: Lang; label: string; htmlLang: string }[] = [
  { lang: "en", label: "EN", htmlLang: "en" },
  { lang: "ne", label: "नेपाली", htmlLang: "ne" },
];

/**
 * Where the home page lives for a language. Only the home page is translated,
 * so this is also the only path the language switcher can ever target.
 */
export function homePath(lang: Lang): string {
  return lang === DEFAULT_LANG ? "/" : `/${lang}`;
}

/** An in-page anchor on the home page, resolved for the current language. */
export function homeAnchor(lang: Lang, hash: string): string {
  const base = homePath(lang);
  return base === "/" ? `/#${hash}` : `${base}#${hash}`;
}
