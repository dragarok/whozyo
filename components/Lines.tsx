import { Fragment } from "react";

/**
 * Renders a translated heading as its authored lines, separated by <br/>.
 *
 * Headings on this page are hand-broken for rhythm, and the break points differ
 * per language — Nepali rarely breaks where English does. So the line array is
 * part of the translation (`headingLines` in `lib/i18n/*.ts`) rather than a
 * <br/> baked into JSX.
 */
export function Lines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={line}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  );
}
