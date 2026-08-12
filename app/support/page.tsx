import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/lib/contact";
import { PageShell, Prose } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Support — WhoIsYourMechanic",
  description: `Get help with WhoIsYourMechanic — account questions, deleting your account, privacy, or reporting an issue. Email ${SUPPORT_EMAIL}.`,
};

export default function SupportPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="Getting help"
      subtitle="Questions about your account, trouble using the app, or feedback — there is one email address, and it is read."
    >
      {/* Primary contact card */}
      <div className="card p-6 md:p-8">
        <div className="label mb-4">Where to write</div>
        <div className="flex flex-col items-start gap-4">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-display break-all text-[22px] text-[color:var(--color-ink)] hover:text-[color:var(--color-indigo-dark)]"
          >
            {SUPPORT_EMAIL}
          </a>
          <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-dim)]">
            whozyo is an app in testing, not a registered business, so there is
            no support desk and{" "}
            <strong className="font-semibold text-[color:var(--color-ink)]">
              no promised response time
            </strong>
            . Mail is read and answered. Please include the email address or
            phone number you signed up with, so your account can be found.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="btn-primary text-[14px]"
          >
            Email support
          </a>
        </div>
      </div>

      <Prose>
        <h2>Common topics</h2>

        <h3>Account &amp; sign-in</h3>
        <p>
          There are two ways to sign in: an email address and a password, or
          your phone number with a one-time code. You choose one when you sign
          up. One caveat while the app is in testing: no SMS gateway is
          connected yet, so a one-time code is not actually delivered to a phone
          — for now, email and password is the door that works end to end.
          There is no password-reset feature yet either, so if you cannot sign
          in, write from the phone number or email address on your account and
          your access can be restored by hand.
        </p>

        <h3>Deleting your account</h3>
        <p>
          You can request permanent deletion of your account and personal
          data at any time by email — see{" "}
          <a href="/delete-account">how to delete your account</a>.
        </p>

        <h3>Privacy &amp; your data</h3>
        <p>
          Learn what is collected, who can see it, and how long it is kept in
          the <a href="/privacy">Privacy Policy</a>. There is no
          &ldquo;download your data&rdquo; file yet — your record is readable in
          the app but cannot be exported as a file. To ask about your
          information or to have it removed, email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>

        <h3>Reporting a problem with a job or mechanic</h3>
        <p>
          If something went wrong with a repair, a quote, or a payment recorded
          in the app, write with the job details and it will be read. Be clear
          about what that is and isn&rsquo;t: there is no moderation team, no
          arbitration, and nothing that reverses a payment or removes a
          mechanic&rsquo;s listing on its own. What the app gives you is the
          record — the quote you approved, the photos, and the receipt — which
          survives whatever either side later remembers.
        </p>
        <p>
          If you are in immediate danger, this is not the place: call the Nepal
          Police on 100.
        </p>

        <h2>Where this is</h2>
        <p>
          WhoIsYourMechanic — Kathmandu, Nepal. Everything runs over email at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
