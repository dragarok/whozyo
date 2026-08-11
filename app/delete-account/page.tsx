import type { Metadata } from "next";
import { PageShell, Prose } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Delete your account — WhoIsYourMechanic",
  description:
    "How to delete your WhoIsYourMechanic account, in the app or by email: what is deleted, what stays and why, the 30-day window, and when deletion has to wait.",
};

const SUPPORT_EMAIL = "support@whozyo.com";
const MAILTO = `mailto:${SUPPORT_EMAIL}?subject=Account%20deletion%20request`;

/**
 * The account-deletion page Google Play requires: publicly reachable, no install
 * needed, linked from the store listing.
 *
 * EVERY CLAIM BELOW IS THE BEHAVIOUR OF SPINE MIGRATION 0256 (whozyo, db/runtime,
 * "the ratings stay, the person goes"), reached through the backend's /v1/me/account*
 * routes and the app's Settings ▸ Leave whozyo screen. Nothing here is a template
 * sentence: if 0256 does not do it, it is not on this page. Where the migration
 * deliberately keeps something (a block, a sent message, a settled receipt) this page
 * says so and says why, because that is the part a person is actually owed.
 */
export default function DeleteAccountPage() {
  return (
    <PageShell
      eyebrow="Your data"
      title="Delete your account"
      subtitle="Delete your WhoIsYourMechanic account from inside the app, or ask us by email. This page says exactly what is deleted, what stays, and why."
      updated="11 August 2026"
    >
      <Prose>
        <h2>Two ways to ask</h2>
        <h3>In the app</h3>
        <p>
          Open <strong>Settings</strong> and tap{" "}
          <strong>Leave whozyo</strong>. That screen carries both doors:{" "}
          <strong>Take a break</strong>, which hides you but keeps everything,
          and <strong>Delete my account</strong>, which removes your personal
          information for good. Deleting starts a 30-day countdown;{" "}
          <strong>Delete now instead</strong> on the same screen skips the wait.
          You never have to write to us to leave.
        </p>

        <h3>Without the app</h3>
        <p>
          Email <a href={MAILTO}>{SUPPORT_EMAIL}</a>. Tell us the{" "}
          <strong>name and the phone number or email you sign in with</strong>,
          and say whether you want the 30-day deletion or immediate deletion.
          Here is exactly what happens next:
        </p>
        <ol>
          <li>
            A person reads it and replies to confirm we have your request.
          </li>
          <li>
            We establish that it is your account before we touch anything —
            by matching what you have told us against the account, and where
            that is not conclusive, by asking for something only the account
            holder would know.
          </li>
          <li>
            We then run the <em>same</em> deletion the app&apos;s button runs —
            not a different, gentler process. The 30-day window and the
            conditions below apply identically.
          </li>
          <li>We write to you again once the deletion has run.</li>
        </ol>
        <p>
          There is no form on this page that deletes an account, and we will not
          put one here until it really works. A button that quietly posts
          nowhere is worse than an email address that a person actually reads.
        </p>

        <h2>What is deleted</h2>
        <ul>
          <li>
            <strong>Your name and your handle.</strong> Everywhere your name
            would have appeared to someone else, they now read{" "}
            <strong>&ldquo;Deleted user&rdquo;</strong>.
          </li>
          <li>
            <strong>The login stored on your account.</strong> The sign-in
            credential held against your account is deleted, and every session
            on every device you were signed in on is ended immediately — the
            tablet at home and the old handset in a drawer included.
          </li>
          <li>
            <strong>Your devices.</strong> The push registrations that let us
            reach your phone are removed, so nothing can notify you again.
          </li>
          <li>
            <strong>Your payment QR codes</strong>, and the wallet or bank
            handles printed on them.
          </li>
          <li>
            <strong>Your private layer</strong> — the tags you invented and the
            colours you gave them, the people-lists you built, and the trust
            ratings cached for your eyes only. Someone else&apos;s list that
            happens to contain you is <em>their</em> record, and is not touched.
          </li>
          <li>
            <strong>Identifying details on the things you registered.</strong>{" "}
            Anything the item&apos;s own form does not require is stripped: a
            plate number, a VIN, a serial number. Make and model stay, because a
            receipt for a repair has to still say what was repaired.
          </li>
          <li>
            <strong>Photos you sent on a chat that never became a deal.</strong>{" "}
            Those image files are deleted. The line in the chat saying a photo
            was sent stays, because that is the other person&apos;s record of
            the conversation.
          </li>
          <li>
            <strong>Your listings.</strong> Anything you were offering stops
            being listed and bookable the moment the account goes — nobody
            should be able to book someone who cannot be reached.
          </li>
        </ul>

        <h2>What stays, with your name taken off it</h2>
        <p>
          The line we hold is simple: <strong>a fact that is also somebody
          else&apos;s record is not yours alone to erase.</strong> Everything
          below survives, attached to an account that now reads
          &ldquo;Deleted user&rdquo;.
        </p>
        <ul>
          <li>
            <strong>The ratings and reviews you wrote.</strong> They belong to
            the people you rated. Taking them back would change someone
            else&apos;s score — a mechanic could lose a year of standing because
            a customer left.
          </li>
          <li>
            <strong>Settled transactions and their money facts.</strong> A
            receipt is the other person&apos;s record as much as yours, and
            deleting your account does not un-happen a payment.
          </li>
          <li>
            <strong>Evidence attached to a deal that settled.</strong> The photo
            of a part before the work is the other side&apos;s proof of what
            arrived. It stays, detached from your name.
          </li>
          <li>
            <strong>Reports you filed about someone&apos;s safety.</strong> A
            safety report is a fact about the person reported, not about you.
          </li>
          <li>
            <strong>Anyone you blocked stays blocked.</strong> A block exists to
            stop someone reaching a person. Quietly undoing it on your way out
            would be a favour to nobody.
          </li>
          <li>
            <strong>Messages you already sent.</strong> We cannot take these
            back. They sit in someone else&apos;s chat the same way a receipt
            does, so if you typed a phone number into a conversation, it is
            still in that conversation. We would rather say that here than let
            you find it out later.
          </li>
        </ul>

        <h2>The 30 days, and the way back</h2>
        <p>
          The moment you ask, <strong>you go dark</strong>: you disappear from
          search, and nobody new can find you or start anything with you. The
          deletion itself runs <strong>30 days later</strong>.
        </p>
        <p>
          Those 30 days are yours to change your mind in.{" "}
          <strong>Sign in before that date and tap &ldquo;Stay on
          whozyo&rdquo;</strong>, and everything comes back exactly as it was —
          your chats, your record, your reputation. There is nothing to fill in
          and nothing to ask us for.
        </p>
        <p>
          After the 30 days there is nothing to come back to. The personal
          information is gone, the account cannot be revived, and we will not
          pretend otherwise. If the wait is not what you want,{" "}
          <strong>Delete now instead</strong> in the app skips it entirely.
        </p>

        <h2>When deletion has to wait</h2>
        <p>
          Deletion is refused while money is still open, because the other side
          is owed an answer first. There are exactly four cases, and the app
          names the one you are in before you tap anything:
        </p>
        <ul>
          <li>a bill that has not been paid</li>
          <li>money still being held, such as a deposit</li>
          <li>a tab (khata) that has not been settled</li>
          <li>an argument (dispute) that has not been settled</li>
        </ul>
        <p>
          Settle or close it and the door opens.{" "}
          <strong>Taking a break is never refused for money</strong> — it stays
          available at that exact moment, and it is usually the right move:
          going quiet is how you stop taking new work while you clear an old
          bill.
        </p>
        <p>
          If you have already asked to leave and something re-opens inside the
          30 days, <strong>we do not cancel your request</strong>. It stands, and
          the deletion runs on the first sweep after the last obligation closes.
          You never have to ask twice.
        </p>

        <h2>Taking a break instead</h2>
        <p>
          A break is not a deletion and nothing is removed. You disappear from
          search, nobody new can reach you, and your chats and your record stay
          exactly as they are. Sign in any time and tap{" "}
          <strong>Come back</strong>. It is available immediately, whatever else
          is open on your account.
        </p>

        <h2>If you cannot get into the app or your email</h2>
        <p>
          Write to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from
          any address and tell us what you can about the account: the name you
          used, roughly when you signed up, and anyone you dealt with through
          the app. We will work with you to establish that it is your account
          before deleting anything — refusing to delete the wrong person&apos;s
          account is part of the same job.
        </p>

        <h2>Related</h2>
        <p>
          <a href="/privacy">Privacy Policy</a> ·{" "}
          <a href="/terms">Terms of Service</a> ·{" "}
          <a href="/support">Support</a>
        </p>
      </Prose>

      <div className="card p-6 md:p-8">
        <div className="label mb-4">Request deletion by email</div>
        <div className="flex flex-col items-start gap-5">
          <a
            href={MAILTO}
            className="font-display break-all text-[20px] text-[color:var(--color-ink)] hover:text-[color:var(--color-indigo-dark)]"
          >
            {SUPPORT_EMAIL}
          </a>
          <a href={MAILTO} className="btn-primary text-[14px]">
            Request account deletion
          </a>
        </div>
        <p className="mt-5 text-[13px] leading-relaxed text-[color:var(--color-ink-dim)]">
          Include the name and the phone number or email you sign in with. We
          reply to confirm the request, and again when the deletion has run.
        </p>
      </div>
    </PageShell>
  );
}
