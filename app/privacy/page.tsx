import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/PageShell";

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
      updated="1 June 2026"
    >
      <Prose>
        <h2>Who we are</h2>
        <p>
          WhoIsYourMechanic (&ldquo;WIYM&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) is a mobile app that connects vehicle owners with
          mechanics and service centres in Nepal. This policy applies to the
          WhoIsYourMechanic mobile app and this website.
        </p>

        <h2>Information we collect</h2>
        <p>We collect only what we need to run the service:</p>
        <ul>
          <li>
            <strong>Account information</strong> — your name and email address
            from Sign in with Apple, Google, or email sign-up, plus your phone
            number and the role you choose (client, mechanic, or service centre).
          </li>
          <li>
            <strong>Profile details</strong> — for mechanics and service
            centres, your garage or business name and address; an optional
            profile photo.
          </li>
          <li>
            <strong>Service content</strong> — vehicles you add, jobs, quotes,
            service records, notes, and photos you upload while using the app.
          </li>
          <li>
            <strong>Technical data</strong> — basic information needed to operate
            the app securely, such as authentication tokens and error logs.
          </li>
        </ul>
        <p>
          If you use Sign in with Apple and choose to hide your email, we receive
          Apple's private relay address rather than your real one.
        </p>

        <h2>How we use your information</h2>
        <ul>
          <li>To create and manage your account and role.</li>
          <li>
            To connect clients, mechanics, and service centres and to record the
            jobs, quotes, and payments you agree to in the app.
          </li>
          <li>To provide support and respond to your requests.</li>
          <li>To keep the service secure and to comply with the law.</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not use it for
          third-party advertising.
        </p>

        <h2>Sharing and service providers</h2>
        <p>
          We share information only as needed to operate the service or when
          required by law:
        </p>
        <ul>
          <li>
            <strong>Other users you interact with</strong> — when you pair with a
            mechanic or service centre, the information needed to complete the
            job (such as your name, vehicle, and job details) is shared with that
            party.
          </li>
          <li>
            <strong>Supabase</strong> — our backend and database provider, which
            stores your data securely on our behalf.
          </li>
          <li>
            <strong>Apple and Google</strong> — when you choose to sign in with
            their services, for authentication only.
          </li>
        </ul>

        <h2>Data retention</h2>
        <p>
          We keep your personal information for as long as your account is
          active. When you delete your account, your personal details are
          removed; anonymized records of past jobs may be retained for the other
          parties involved (see{" "}
          <a href="/delete-account">deleting your account</a>).
        </p>

        <h2>Your rights and choices</h2>
        <ul>
          <li>
            <strong>Access and correction</strong> — you can view and edit your
            profile in the app.
          </li>
          <li>
            <strong>Deletion</strong> — you can permanently delete your account
            from the app or by request. See{" "}
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
          WhoIsYourMechanic is not intended for children under 13, and we do not
          knowingly collect information from them.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. We'll revise the
          &ldquo;Last updated&rdquo; date above when we do.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> — WhoIsYourMechanic,
          Kathmandu, Nepal.
        </p>
      </Prose>
    </PageShell>
  );
}
