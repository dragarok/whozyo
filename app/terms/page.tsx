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
      updated="11 August 2026"
    >
      <DraftBanner />
      <Prose>
        <h2>1. What whozyo is</h2>
        <p>
          <strong>whozyo</strong> is the name of the app. It is not yet
          registered as a business, and it is being launched in Nepal in a
          testing phase. Registration and the formal legal arrangements that
          follow it are intended, and these terms will be revised when that
          happens. Everything below should be read in that light.
        </p>

        <h2>2. The service</h2>
        <p>
          WhoIsYourMechanic is an app that helps people in Nepal find and work
          with mechanics and other local service providers. It gives you the
          chat, the quote, the evidence, the payment record, and the review —
          a shared record of the job. <strong>We are not a party to the job
          itself.</strong> The repair, service, or other work is an agreement
          directly between you and the other person; we record it, we do not
          perform it, guarantee it, or insure it.
        </p>

        <h2>3. Your account</h2>
        <ul>
          <li>
            There are two ways in: an <strong>email address and a
            password</strong>, or your <strong>phone number</strong> with a
            one-time code. You pick one when you sign up.
          </li>
          <li>
            You are responsible for keeping your password, your phone, and
            your account access secure.
          </li>
          <li>You must provide accurate information.</li>
          <li>You are responsible for activity that happens under your account.</li>
        </ul>

        <h2>4. Acceptable use</h2>
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

        <h2>5. Jobs, quotes, and payments</h2>
        <p>
          Quotes, prices, work, and any money that changes hands are agreed
          and settled <strong>directly between the two people involved</strong>
          — the app is the record and the introduction, not the payer, the
          payee, or the guarantor. No money passes through us: the app writes
          down what you agreed and what was paid, and the payment itself
          happens between you, in cash or through your own wallet or bank. We
          do not guarantee the
          quality, safety, legality, or price of any job, and we are not
          responsible for a dispute between users about the work itself.
          Where a payment is made through the app, we record the transfer and
          its receipt; that receipt is a fact of what happened and, once
          settled, is not something either party can rewrite or erase.
        </p>

        <h2>6. Reviews and reputation</h2>
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

        <h2>7. Disagreements and abuse</h2>
        <p>
          If a job goes wrong, the first answer is: talk to the other person —
          that is what the thread is for. Where the app offers a structured way
          to flag a problem, such as disputing a charge, filing one does not
          automatically punish anyone, hide anyone, or reverse a payment.
        </p>
        <p>
          There is no moderation team and no arbitration process. A report sent
          to the support address is read by the person building whozyo, and that
          is the whole of it: no fixed response time, no guaranteed outcome, and
          nothing in the app that reverses a payment, removes a listing, or
          penalises an account because a report was filed. What you have instead
          is the record — the quote that was approved, the photos, and the
          receipt — which does not change to suit either side afterwards.
        </p>

        <h2>8. Content you provide</h2>
        <p>
          You keep ownership of the content you add (such as messages,
          photos, voice notes, and job details). You grant us the limited
          rights needed to store and show that content to you and the people
          you work with, in order to run the service.
        </p>

        <h2>9. Termination and deletion</h2>
        <p>
          You may stop using the app and delete your account at any time, from
          inside the app or by email (see{" "}
          <a href="/delete-account">Delete your account</a>). Access may be
          suspended or ended if these terms are broken or to protect other
          people using the app.
        </p>

        <h2>10. What is not promised</h2>
        <p>
          The app is <strong>in testing</strong> and is offered as it is. It
          can have bugs, it can be down, and a feature can change or go away.
          Nothing here is a warranty that it will work for a particular
          purpose.
        </p>
        <p>
          whozyo is not yet registered as a business, and these terms should be
          read accordingly. What whozyo commits to is narrow and specific: it
          keeps the record of your jobs, it does not sell your information, and
          it deletes your account when you ask it to. It does not warrant the
          quality, safety, legality, or price of any job, and it is not
          answerable for the conduct of any mechanic, provider, or client using
          it.
        </p>

        <h2>11. Changes to these terms</h2>
        <p>
          These terms will change — most of all when whozyo is registered as a
          real business, which will rewrite this page properly. The{" "}
          <strong>Last updated</strong> date above changes when they do.
          Continued use means you accept the updated terms.
        </p>

        <h2>12. Where this applies</h2>
        <p>
          The app is being launched in <strong>Nepal</strong>, and the laws of
          Nepal apply. For any question about these terms, write to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </Prose>
    </PageShell>
  );
}
