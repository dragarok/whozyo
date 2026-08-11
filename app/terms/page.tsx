import type { Metadata } from "next";
import { PageShell, Prose, DraftBanner } from "@/components/PageShell";

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
      updated="6 August 2026"
    >
      <DraftBanner />
      <Prose>
        <h2>1. The service</h2>
        <p>
          WhoIsYourMechanic, operated by <strong>whozyo</strong>,
          is a platform that helps people in Nepal find and work with
          mechanics and other local service providers. We give you the chat,
          the quote, the evidence, the payment record, and the review — a
          shared record of the job. <strong>We are not a party to the job
          itself.</strong> The repair, service, or other work is an agreement
          directly between you and the other person; we record it, we do not
          perform it, guarantee it, or insure it.
        </p>

        <h2>2. Your account</h2>
        <ul>
          <li>
            You sign in with your phone number and a one-time code. You are
            responsible for keeping your phone and account access secure.
          </li>
          <li>You must provide accurate information.</li>
          <li>You are responsible for activity that happens under your account.</li>
        </ul>

        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Break the law or infringe others&apos; rights while using the app.</li>
          <li>Misrepresent your identity, qualifications, or the work you offer.</li>
          <li>
            Upload content you don&apos;t have the right to share, or that is
            harmful, abusive, or misleading.
          </li>
          <li>
            Interfere with, probe, or attempt to disrupt the service or its
            security.
          </li>
        </ul>

        <h2>4. Jobs, quotes, and payments</h2>
        <p>
          Quotes, prices, work, and any money that changes hands are agreed
          and settled <strong>directly between the two people involved</strong>
          — WhoIsYourMechanic is the record and the introduction, not the
          payer, the payee, or the guarantor. We do not guarantee the
          quality, safety, legality, or price of any job, and we are not
          responsible for a dispute between users about the work itself.
          Where a payment is made through the app, we record the transfer and
          its receipt; that receipt is a fact of what happened and, once
          settled, is not something either party can rewrite or erase.
        </p>

        <h2>5. Reviews and reputation</h2>
        <p>
          A review is a rating and comment tied to a specific completed job,
          left by the person who was the other party to it. Once posted, a
          review is a permanent part of the record and cannot be edited or
          deleted by either party — it is a fact about a job that happened,
          not a message either side can take back. The same is true of a
          settled receipt and an outstanding balance: they survive account
          changes, and they survive a block (see{" "}
          <a href="/delete-account">Delete your account</a> for what
          deletion does and does not remove).
        </p>

        <h2>6. Disagreements and abuse</h2>
        <p>
          If a job goes wrong, our first answer is: talk to the other person
          — that is what the thread is for. Where the app offers a
          structured way to flag a problem (such as disputing a charge or
          reporting a person), filing one does not automatically punish
          anyone, hide anyone, or reverse a payment. A person on our side
          reads reports and disputes and follows up; we do not promise a
          fixed timeline or a guaranteed outcome.
        </p>

        <h2>7. Content you provide</h2>
        <p>
          You keep ownership of the content you add (such as messages,
          photos, voice notes, and job details). You grant us the limited
          rights needed to store and show that content to you and the people
          you work with, in order to run the service.
        </p>

        <h2>8. Termination and deletion</h2>
        <p>
          You may stop using the service and request deletion of your account
          at any time (see <a href="/delete-account">Delete your account</a>).
          We may suspend or end access if these terms are broken or to
          protect users and the service.
        </p>

        <h2>9. Disclaimers and liability</h2>
        <p>
          The service is provided &ldquo;as is&rdquo; without warranties of
          any kind. To the extent permitted by law, WhoIsYourMechanic is not
          liable for indirect or consequential losses, or for the acts of
          any mechanic, provider, or client using the platform.
        </p>

        <h2>10. Changes to these terms</h2>
        <p>
          We may update these terms from time to time. We&apos;ll revise the
          &ldquo;Last updated&rdquo; date above when we do. Continued use
          means you accept the updated terms.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These terms are governed by the laws of{" "}
          <strong>Nepal</strong>. Questions? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
