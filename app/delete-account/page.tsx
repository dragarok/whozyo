import type { Metadata } from "next";
import { PageShell, Prose, DraftBanner } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Delete your account — WhoIsYourMechanic",
  description:
    "How to request deletion of your WhoIsYourMechanic account and personal data, and what stays on record afterward.",
};

const SUPPORT_EMAIL = "support@whozyo.com";

export default function DeleteAccountPage() {
  return (
    <PageShell
      eyebrow="Your data"
      title="Delete your account"
      subtitle="You can request permanent removal of your personal information from WhoIsYourMechanic at any time."
      updated="6 August 2026"
    >
      <DraftBanner />
      <Prose>
        <h2>How to request deletion</h2>
        <p>
          The app does not yet have a self-service &ldquo;Delete
          account&rdquo; button. Today, every deletion is handled by a
          person: email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Account%20deletion%20request`}>
            {SUPPORT_EMAIL}
          </a>{" "}
          from the phone number or account you signed up with, and ask us to
          delete your account. We verify it&apos;s really you, then act on
          the request.
        </p>
        <p>
          We aim to complete a deletion within{" "}
          <strong>{"{{DELETION_SLA}}"}</strong>. This is a manual process
          while the in-app flow is being built — we will not silently sit on
          a request.
        </p>

        <h2>What&apos;s removed and what stays on the record</h2>
        <p>
          <strong>Removed:</strong> your ability to sign in, your phone
          number as a login credential, your display name and handle, and
          any vehicles or other items you registered that no one else
          depends on.
        </p>
        <p>
          <strong>Stays on the record, because it is not only your fact:</strong>
        </p>
        <ul>
          <li>
            A <strong>settled payment receipt</strong> — once a payment
            clears, the receipt is a shared record for both people in that
            job. Deleting your account does not un-happen a payment.
          </li>
          <li>
            An <strong>outstanding balance</strong> — if you owe money to, or
            are owed money by, someone else on the platform, deleting your
            account does not cancel that debt. Please settle it first, or
            contact us if that&apos;s not possible.
          </li>
          <li>
            A <strong>published review</strong> — a review you left or
            received about a completed job is a fact about that job for the
            other party, and stays up after your account is gone.
          </li>
        </ul>
        <p>
          We will remove or scrub your name and contact details from these
          records everywhere we technically can, but we will not delete the
          underlying job, payment, or review itself — we cannot honestly
          promise a clean erase of a fact that belongs to two people, only
          one of whom asked to leave. This action, once completed, cannot be
          undone.
        </p>

        <h2>Can&apos;t access the app or your phone number?</h2>
        <p>
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and
          tell us what you can about the account (name, approximate sign-up
          date, anyone you transacted with). We&apos;ll work with you to
          verify ownership before deleting anything.
        </p>
      </Prose>

      <div className="card p-6 md:p-8">
        <div className="label mb-4">Request deletion by email</div>
        <div className="flex flex-col items-start gap-5">
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Account%20deletion%20request`}
            className="font-display break-all text-[20px] text-[color:var(--color-ink)] hover:text-[color:var(--color-indigo-dark)]"
          >
            {SUPPORT_EMAIL}
          </a>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Account%20deletion%20request`}
            className="btn-primary text-[14px]"
          >
            Request account deletion
          </a>
        </div>
      </div>
    </PageShell>
  );
}
