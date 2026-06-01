import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Delete your account — WhoIsYourMechanic",
  description:
    "How to permanently delete your WhoIsYourMechanic account and personal data — directly in the app, or by emailing support@whozyo.com.",
};

const SUPPORT_EMAIL = "support@whozyo.com";

export default function DeleteAccountPage() {
  return (
    <PageShell
      eyebrow="Your data"
      title="Delete your account"
      subtitle="You can permanently remove your personal information from WhoIsYourMechanic at any time."
    >
      <Prose>
        <h2>Delete from the app (recommended)</h2>
        <p>The fastest way to delete your account is from inside the app:</p>
        <ol>
          <li>Open WhoIsYourMechanic and sign in.</li>
          <li>
            Go to the <strong>Profile</strong> tab.
          </li>
          <li>
            Scroll down to the <strong>Account</strong> section.
          </li>
          <li>
            Tap <strong>Delete account</strong>.
          </li>
          <li>
            Type <strong>DELETE</strong> to confirm, then confirm the dialog.
          </li>
        </ol>
        <p>
          Your personal details are removed immediately and you're signed out.
        </p>

        <h2>What's removed and what's kept</h2>
        <p>
          <strong>Permanently removed:</strong> your name, phone number, email
          address, address, profile photo, and any garage or business details.
        </p>
        <p>
          <strong>Kept in anonymized form:</strong> records of past jobs and
          service history remain on file for the clients and mechanics you
          worked with, but with your identity scrubbed so you can no longer be
          identified from them. This preserves the other party's legitimate
          service records. This action cannot be undone.
        </p>

        <h2>Can't access the app?</h2>
        <p>
          If you can no longer sign in, you can still request deletion. Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from the email
          address associated with your account and ask us to delete it. We verify
          ownership and complete the deletion within{" "}
          <strong>30 days</strong> (usually much sooner).
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
