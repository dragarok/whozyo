import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Support — WhoIsYourMechanic",
  description:
    "Get help with WhoIsYourMechanic — account questions, deleting your account, privacy, or reporting an issue. Email support@whozyo.com.",
};

const SUPPORT_EMAIL = "support@whozyo.com";

export default function SupportPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="We're here to help"
      subtitle="Questions about your account, trouble using the app, or feedback for the team — reach a real person."
    >
      {/* Primary contact card */}
      <div className="card p-6 md:p-8">
        <div className="label mb-4">Email us</div>
        <div className="flex flex-col items-start gap-4">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-display break-all text-[22px] text-[color:var(--color-ink)] hover:text-[color:var(--color-indigo-dark)]"
          >
            {SUPPORT_EMAIL}
          </a>
          <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-dim)]">
            We typically reply within{" "}
            <strong className="font-semibold text-[color:var(--color-ink)]">
              2 business days
            </strong>
            . Please include the email address you signed up with so we can find
            your account quickly.
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
          WhoIsYourMechanic uses your phone number to sign in — we text you a
          one-time code, no password to remember. If you can't sign in, email
          us from the phone number or email address on your account and
          we'll help you recover access.
        </p>

        <h3>Deleting your account</h3>
        <p>
          You can request permanent deletion of your account and personal
          data at any time by email — see{" "}
          <a href="/delete-account">how to delete your account</a>.
        </p>

        <h3>Privacy &amp; your data</h3>
        <p>
          Learn what we collect and how it's used in our{" "}
          <a href="/privacy">Privacy Policy</a>. To request a copy or removal of
          your data, email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>

        <h3>Reporting a problem with a job or mechanic</h3>
        <p>
          If something went wrong with a repair, a quote, or a payment recorded
          in the app, email us with the job details and we'll look into it.
        </p>

        <h2>Where we are</h2>
        <p>
          WhoIsYourMechanic — Kathmandu, Nepal. Support is handled over email at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
