import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service — WhoIsYourMechanic",
  description:
    "The terms that govern your use of the WhoIsYourMechanic app and website.",
};

const SUPPORT_EMAIL = "support@whozyo.com";

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="These terms govern your use of the WhoIsYourMechanic app and website. By using the service, you agree to them."
      updated="1 June 2026"
    >
      <Prose>
        <h2>1. The service</h2>
        <p>
          WhoIsYourMechanic is a platform that helps vehicle owners find and work
          with mechanics and service centres, and lets those parties record jobs,
          quotes, and service history. We provide the software that connects you;
          we are not a party to the repair agreement between a client and a
          mechanic or service centre.
        </p>

        <h2>2. Your account</h2>
        <ul>
          <li>
            You must provide accurate information and keep your account secure.
          </li>
          <li>
            You choose a role — client, mechanic, or service centre — when you
            sign up. Some features depend on your role.
          </li>
          <li>You are responsible for activity that happens under your account.</li>
        </ul>

        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Break the law or infringe others' rights while using the app.</li>
          <li>Misrepresent your identity, qualifications, or services.</li>
          <li>
            Upload content you don't have the right to share, or that is
            harmful, abusive, or misleading.
          </li>
          <li>
            Interfere with, probe, or attempt to disrupt the service or its
            security.
          </li>
        </ul>

        <h2>4. Jobs, quotes, and payments</h2>
        <p>
          Quotes, prices, repairs, and any payments are agreed directly between
          clients and mechanics or service centres. WhoIsYourMechanic records
          this information for your convenience but does not guarantee the
          quality, safety, legality, or pricing of any repair, and is not
          responsible for disputes between users. Please resolve service issues
          with the other party; we can help where we reasonably can.
        </p>

        <h2>5. Content you provide</h2>
        <p>
          You keep ownership of the content you add (such as photos, notes, and
          vehicle details). You grant us the limited rights needed to store and
          display that content to operate the service for you and the parties you
          work with.
        </p>

        <h2>6. Termination and deletion</h2>
        <p>
          You may stop using the service and delete your account at any time (see{" "}
          <a href="/delete-account">Delete your account</a>). We may suspend or
          end access if these terms are broken or to protect users and the
          service.
        </p>

        <h2>7. Disclaimers and liability</h2>
        <p>
          The service is provided &ldquo;as is&rdquo; without warranties of any
          kind. To the extent permitted by law, WhoIsYourMechanic is not liable
          for indirect or consequential losses, or for the acts of mechanics,
          service centres, or clients using the platform.
        </p>

        <h2>8. Changes to these terms</h2>
        <p>
          We may update these terms from time to time. We'll revise the
          &ldquo;Last updated&rdquo; date above when we do. Continued use means
          you accept the updated terms.
        </p>

        <h2>9. Governing law</h2>
        <p>
          These terms are governed by the laws of Nepal. Questions? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
