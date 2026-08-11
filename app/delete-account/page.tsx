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
 *
 * THREE CLAIMS WERE VERIFIED IN CODE BEFORE BEING WRITTEN HERE, because each one is a
 * promise a person plans around:
 *   1. THE GRACE ESCAPE IS REAL. reactivate_account() (0256 §5) sets BOTH
 *      purge_requested_at = null AND deactivated_at = null, so "Stay on whozyo" cancels
 *      the pending purge outright rather than merely undoing the deactivation. The login
 *      path does NOT refuse a deactivated/leaving account, so signing in during the
 *      window is genuinely possible. BUT nothing in the login path calls reactivate —
 *      the ONLY caller is the button (app/settings/leave.tsx) — so this page says
 *      "sign in AND tap Stay on whozyo", never "signing in brings you back".
 *   2. THE SIGN-OUT IS REAL. Asking to leave revokes every session for the actor
 *      server-side, so "signed out on every device" is true at the moment of the ask.
 *   3. DELETION NOW ENDS SIGN-IN, and this page may finally say so (verified 2026-08-11,
 *      backend d04507d + spine 0257). The old hole: purge_actor() deletes
 *      public.actor_credentials (email/password) but the phone/Google binding lives in
 *      tier.oauth_identities, which the spine cannot reach — so a purged number still
 *      resolved. Both halves are now closed and BOTH were read before this was written:
 *      ForgetActorInTier deletes that row (internal/auth/purge.go:150-170), and
 *      admit() refuses a purged actor outright with ErrAccountPurged while forgetting
 *      the binding on the way out (internal/auth/auth.go:417-443) — belt and braces.
 *      Still NOT claimed, because it is still false: that a purge erases everything
 *      personal. tier.phone_otp_sends keeps one row per number that ever requested a
 *      code (deliberate, purge.go:140-143) and purged media BYTES are only flagged, never
 *      removed from storage (media.Store has no Delete method). Both are disclosed on
 *      /privacy rather than glossed here.
 *
 *   4. THE WAY BACK IS ONE STEP, NOT TWO. admit() cancels a pending deletion inside the
 *      sign-in transaction itself (auth.go:417-428, state 'leaving' -> reactivate_account()),
 *      so "sign in and then tap the button" is no longer what the code does. A deactivated
 *      account is deliberately NOT auto-reactivated by the same function, which is why the
 *      break section below still describes tapping Come back.
 *
 * There is deliberately no "download your data" offer: no such endpoint exists (the
 * backend has no export route of any kind), so the page states its absence plainly
 * instead of implying a person can take their record with them.
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
        <h2>There are two doors, and only one of them is final</h2>
        <p>
          Both live on the same screen in the app —{" "}
          <strong>Settings ▸ Leave whozyo</strong>. Read this bit first, because
          most people who think they want the second one actually want the
          first.
        </p>
        <table>
          <thead>
            <tr>
              <th>Take a break</th>
              <th>Delete my account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nothing is removed.</td>
              <td>Your personal information is removed for good.</td>
            </tr>
            <tr>
              <td>
                You vanish from search and nobody new can reach you. Your chats,
                receipts, reviews and reputation stay exactly as they are.
              </td>
              <td>
                You vanish from search immediately; the deletion itself runs 30
                days later.
              </td>
            </tr>
            <tr>
              <td>
                Reversible any time. Sign in, tap <strong>Come back</strong>.
              </td>
              <td>
                Reversible for 30 days only. After that it cannot be undone.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Never refused</strong>, whatever is open on your account.
              </td>
              <td>Refused while money is still open. See below.</td>
            </tr>
          </tbody>
        </table>
        <p>
          If what you want is to stop the notifications, stop getting new work,
          or simply disappear for a while, <strong>take a break</strong>. It
          costs you nothing and you can undo it in one tap. Deleting is for when
          you want the personal information gone.
        </p>

        <h2>Before you go, look at your record</h2>
        <p>
          Your reputation on whozyo is the thing you built: the jobs, the
          receipts, the reviews people wrote about you. Deleting is the one move
          that takes it off your side for good, so it is worth opening the app
          and reading through it before you decide — your chats, your past jobs
          and your reviews are all still there until the deletion runs.
        </p>
        <p>
          To be straight with you: <strong>we do not yet have a
          &ldquo;download your data&rdquo; file</strong> you can save before you
          leave. You can read your record in the app, but you cannot export it
          in one piece. We would rather say so here than let you discover it
          after the account is gone.
        </p>

        <h2>Two ways to ask</h2>
        <h3>In the app</h3>
        <p>
          Open <strong>Settings</strong> and tap{" "}
          <strong>Leave whozyo</strong>. That screen carries both doors above.
          Deleting starts a 30-day countdown;{" "}
          <strong>Delete now instead</strong> on the same screen skips the wait
          entirely. You never have to write to us to leave.
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
            <strong>Your sign-in, on every device.</strong> The moment you ask,
            you are signed out everywhere — the tablet at home and the old
            handset in a drawer included. When the deletion runs, the way you
            signed in is deleted with it: the email and password, and the record
            binding your phone number to the account.{" "}
            <strong>The account cannot be signed into again</strong>, and
            the same phone number or email starts a new account from nothing.
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
        </ul>

        <h2>What you cannot take back at all</h2>
        <p>
          <strong>Messages you already sent.</strong> Deleting your account does
          not reach into other people&apos;s chats and remove what you said to
          them, any more than it un-sends a receipt. A message you sent sits in
          the other person&apos;s conversation and stays there — so if you typed
          a phone number, an address, or anything else about yourself into a
          chat, <strong>it is still in that chat afterwards</strong>. Your name
          on it becomes &ldquo;Deleted user&rdquo;; the words do not change.
        </p>
        <p>
          This is the one thing on this page that no setting anywhere can undo,
          which is why it has its own heading instead of a line in a list. If
          there is something you would not want left behind, the time to deal
          with it is before you delete.
        </p>

        <h2>The 30 days, and the way back</h2>
        <p>
          The moment you ask, <strong>you go dark</strong>: you disappear from
          search, nobody new can find you or start anything with you, and you
          are signed out on every device. The deletion itself runs{" "}
          <strong>30 days later</strong>.
        </p>
        <p>
          You are not left counting days. From the moment you ask, the{" "}
          <strong>Leave whozyo</strong> screen shows{" "}
          <strong>the actual date your account will be deleted</strong> — a real
          date such as &ldquo;10 September&rdquo;, not &ldquo;in 30
          days&rdquo; — every time you open it.
        </p>
        <h3>How to stop it</h3>
        <p>
          Those 30 days are yours to change your mind in, and stopping the
          deletion takes one step: <strong>sign in again</strong>. Asking to
          leave signed you out everywhere, so you will need to sign in the
          normal way — and that sign-in is itself what cancels the deletion.
        </p>
        <p>
          It cancels it outright — not a pause, not a new request — and brings
          you back exactly as you were: your chats, your record, your
          reputation, your place in search. There is nothing to fill in,
          nothing to tap afterwards, and nothing to ask us for. The{" "}
          <strong>Stay on whozyo</strong> button on the{" "}
          <strong>Settings ▸ Leave whozyo</strong> screen does the same thing if
          you would rather do it deliberately.
        </p>
        <p>
          After that date the deletion runs and{" "}
          <strong>Stay on whozyo</strong> stops working. The account cannot be
          brought back, and we will not pretend otherwise. If the wait is not
          what you want, <strong>Delete now instead</strong> in the app skips it
          entirely.
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
