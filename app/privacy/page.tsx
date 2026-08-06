import type { Metadata } from "next";
import { PageShell, Prose, DraftBanner } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — WhoIsYourMechanic",
  description:
    "How WhoIsYourMechanic collects, uses, and protects your personal information.",
};

const SUPPORT_EMAIL = "support@whozyo.com";

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="This policy explains what information WhoIsYourMechanic collects, why, and the choices you have."
      updated="6 August 2026"
    >
      <DraftBanner />
      <Prose>
        <h2>Who we are</h2>
        <p>
          WhoIsYourMechanic (&ldquo;WIYM&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) is a mobile app, operated by{" "}
          <strong>{"{{LEGAL_ENTITY}}"}</strong>, that connects people in Nepal
          — starting in Kathmandu — with mechanics and other local service
          providers, and gives them a shared record of the job: the chat, the
          quote, the photos, the payment, and the review. This policy applies
          to the WhoIsYourMechanic mobile app and this website.
        </p>

        <h2>Information we collect</h2>
        <p>We collect only what the app needs to run:</p>
        <ul>
          <li>
            <strong>Phone number</strong> — you sign in with your phone
            number and a one-time code sent by SMS. We do not currently offer
            sign-in with Apple, Google, or a password.
          </li>
          <li>
            <strong>Profile</strong> — the display name you choose, and an
            optional handle. There is no separate profile-photo upload today.
          </li>
          <li>
            <strong>Vehicles and other items you register</strong> — details
            you type (such as make, model, year, or plate) and an optional
            photo you attach.
          </li>
          <li>
            <strong>Messages and evidence</strong> — the messages you send in
            a job thread, and any photos, voice notes, videos, or files you
            choose to attach as evidence.
          </li>
          <li>
            <strong>Jobs, quotes, bills, and payment records</strong> — the
            quotes, invoices, line items, and payments you or the other party
            record in the app, and the receipt once a payment clears.
          </li>
          <li>
            <strong>Reviews and vouches</strong> — a rating and comment you
            leave for a completed job, and endorsements ("vouches") you give
            to other people you know.
          </li>
          <li>
            <strong>Device permissions</strong> — camera (to take an evidence
            photo), microphone (to record a voice note), and photo-library
            access (to attach an existing photo) — each requested only at the
            moment you choose to use it.
          </li>
          <li>
            <strong>Crash and error data</strong> — if error reporting is
            switched on for your build of the app, technical details about a
            crash (such as the error and the screen it happened on) are sent
            to our crash-reporting tool. This is off by default in
            development builds.
          </li>
        </ul>
        <p>
          <strong>What we do not collect today:</strong> we do not collect
          precise device location, and the app does not currently register
          your device for push notifications — that feature exists in our
          backend but is not yet turned on in the app you install.
        </p>

        <h2>How we use your information</h2>
        <ul>
          <li>To create and run your account and sign you in.</li>
          <li>
            To connect you with a mechanic or other provider, and to record
            the job, quote, chat, payment, and review you and they agree to
            in the app.
          </li>
          <li>To show you and the other party a shared, honest record of the job.</li>
          <li>To provide support and respond to your requests.</li>
          <li>To keep the service secure and to fix bugs.</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not use it for
          third-party advertising.
        </p>

        <h2>Sharing and service providers</h2>
        <p>
          We share information only as needed to run the service, or when the
          law requires it:
        </p>
        <ul>
          <li>
            <strong>The other person in your job</strong> — when you message
            or transact with a mechanic or another user, the name, messages,
            evidence, job, and payment details relevant to that job are
            visible to them, the same way a normal conversation and receipt
            would be.
          </li>
          <li>
            <strong>Our own servers and storage</strong> — today, your data is
            stored on servers and object storage we (
            {"{{LEGAL_ENTITY}}"}) operate. We do not currently use a
            third-party backend-as-a-service provider.
          </li>
          <li>
            <strong>Crash reporting</strong> — if enabled for your build,
            technical crash and error details are sent to Sentry, our
            crash-reporting tool, so we can find and fix bugs. This is
            gated by a setting in the build and is not active in every
            version of the app.
          </li>
          <li>
            <strong>SMS provider</strong> — sending you a one-time sign-in
            code requires sharing your phone number with an SMS delivery
            provider for that message only.
          </li>
        </ul>

        <h2>Data retention</h2>
        <p>
          We keep your account information for as long as your account is
          active. Some records are shared facts between two people — a
          settled payment receipt, an outstanding balance, or a published
          review — and by their nature they outlive either person deleting
          their own profile; see{" "}
          <a href="/delete-account">deleting your account</a> for exactly
          what that means. Beyond that, we retain data for{" "}
          <strong>{"{{RETENTION_PERIOD}}"}</strong> unless the law requires
          otherwise.
        </p>

        <h2>Your rights and choices</h2>
        <ul>
          <li>
            <strong>Access and correction</strong> — you can view and edit
            your profile in the app.
          </li>
          <li>
            <strong>Deletion</strong> — you can request deletion of your
            account and personal data. See{" "}
            <a href="/delete-account">Delete your account</a>.
          </li>
          <li>
            <strong>Questions</strong> — email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> for any
            privacy request.
          </li>
        </ul>

        <h2>Children</h2>
        <p>
          WhoIsYourMechanic is not intended for children under 13, and we do
          not knowingly collect information from them.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. We&apos;ll revise the
          &ldquo;Last updated&rdquo; date above when we do.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> —
          WhoIsYourMechanic, {"{{POSTAL_ADDRESS}}"}.
        </p>
      </Prose>
    </PageShell>
  );
}
