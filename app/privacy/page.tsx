import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/lib/contact";
import { PageShell, Prose, DraftBanner } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — WhoIsYourMechanic",
  description:
    "What the WhoIsYourMechanic app stores, who can see it, what leaves the app, and how long it is kept.",
};

/**
 * THE PRIVACY POLICY, WRITTEN AGAINST THE CODE.
 *
 * The standard here is not "legally safe" — it is FACTUALLY CORRECT. This page has
 * shipped false claims before (an unfilled token rendered to users; "no password door"
 * while two doors shipped; a retention clause contradicting the deletion page), so the
 * rule is now absolute: A CLAIM THAT CANNOT BE POINTED AT CODE DOES NOT GO ON THE PAGE.
 * Where the honest answer is "not built" or "not automated yet", the page says that
 * instead of a comfortable sentence.
 *
 * whozyo is NOT a registered business. No sentence here may imply a company, staff, a
 * legal department, or a GDPR role ("controller"/"processor") — none of those exist. The
 * subject of the sentences is the app.
 *
 * THE FACTS THIS PAGE RESTS ON, each verified before it was written:
 *
 *  · TWO SIGN-IN DOORS, both shipped and reachable: email+password (app/login.tsx →
 *    POST /v1/auth/signup|login, argon2id at internal/auth/password.go:32-38) and phone
 *    +code (app/phone-login.tsx, routed from login.tsx:405). SMS DELIVERY IS NOT WIRED —
 *    WHOZYO_SMS_ENDPOINT is set nowhere, so NewSMSSenderFromEnv returns LogSender
 *    (internal/auth/sms.go:92-95). The door works; the message does not arrive.
 *  · ANALYTICS IS INERT IN SHIPPED BUILDS. src/obs/analytics.ts:75 gates the whole
 *    module on EXPO_PUBLIC_POSTHOG_KEY, and that key is set in NO env file, app.json, or
 *    ship script in the repo. "whozyo uses PostHog" would be FALSE today; the page says
 *    it is switched off and states what it could carry if switched on.
 *  · SENTRY IS INERT for the same reason (EXPO_PUBLIC_SENTRY_DSN unset, src/obs/sentry.ts:19;
 *    backend SENTRY_DSN commented out in .env.example:126).
 *  · NO LOCATION IS TAKEN. No ACCESS_FINE/COARSE_LOCATION in any manifest, expo-location
 *    is not a dependency, and no geo column exists in the spine.
 *  · METADATA IS STRIPPED SERVER-SIDE, BEFORE STORAGE — rewritten 2026-08-12; this bullet
 *    said the exact opposite ("ZERO EXIF stripping... stores bytes verbatim") and was
 *    true when written. Images landed 2026-08-11 (0601894e), audio 2026-08-12 (bdc98d2b).
 *    internal/media/scrub.go:63 Scrubbable = {jpeg,png,webp,mp4,m4a,x-m4a} and
 *    internal/api/media.go:48 mediaAllowlist is asserted EQUAL to it by
 *    TestAllowlistIsExactlyWhatCanBeScrubbed — so there is no pass-through arm: every
 *    accepted byte is scrubbed and the scrubbed bytes are what the ref addresses.
 *    A format that cannot be promised is REFUSED 415, not stored intact (media.go:236):
 *    image/heic (EXIF in an ISOBMFF meta box addressed by iloc offsets), audio/ogg
 *    (CRC32 paged comment header) and audio/webm (Tags edit shifts SeekHead/Cues).
 *    m4a is NEUTERED not deleted — offending boxes rewritten in place as zeroed `free`
 *    boxes of identical size, so no stco/co64 offset moves (scrub_audio.go). What a
 *    container scrub CANNOT reach, and the page says so: the encoded bitstream, the
 *    codec config (esds/stsd), duration, and the content itself.
 *    NO BACKFILL of pre-scrub uploads has run — the page states the two cutover dates
 *    rather than implying old files were cleaned.
 *  · THERE IS NO "STRANGER SEES LESS" RULE. This page was briefed that a masked-name rule
 *    limits what an unconnected stranger sees. IT DOES NOT EXIST. actors.name_public
 *    DEFAULTS TO TRUE (0157_name_privacy.sql:29) — full name to every signed-in user —
 *    and the opt-in mask is BYPASSED by directory_search, actor_trust and the reviews
 *    read, which all project the raw display_name (reads.go:499). The page states the
 *    default and the gap rather than describing a protection that is not there.
 *  · PUSH DOES NOT EXIST (expo-notifications not a dependency; no device token endpoint).
 *  · NO MONEY MOVES THROUGH whozyo (internal/api/pay_qr.go is funnel calls only — no
 *    payment SDK, no bank/wallet client, no webhook).
 *  · DELETION: the 30-day clock is account_purge_grace() = interval '30 days'
 *    (0256:175), and the sweep IS wired — main.go:205-209 starts it, hourly by default.
 *    The login binding in tier.oauth_identities is outside the spine's reach and is
 *    removed by the BACKEND (purge.go:150-170), immediately on "delete now" and by
 *    reconciliation when the 30-day purge fires. ONE thing genuinely survives and is
 *    disclosed: tier.phone_otp_sends keeps one row per number that ever requested a code
 *    (tier.sql:175, deliberately never deleted).
 *    MEDIA BYTES ARE NOW DELETED — rewritten 2026-08-12; this bullet said they were "only
 *    flagged, never removed (media.Store has no Delete method at all)" and that was true
 *    when written. media.Store now declares Delete (store.go:49, disk.go:129, s3.go:217)
 *    and auth.DeletePurgedMediaBytes (purge.go:458) deletes the objects behind every blob
 *    the spine marked purged — wired into the hourly sweep (purge.go:371) AND run
 *    immediately by the delete-now door (api/account.go:224). Order is list → delete →
 *    mark, never mark-first (D-320), so a refused delete is retried rather than lost.
 */
export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="What the app stores, who can see it, what leaves it, and how long it is kept. Every statement below describes what the software actually does today."
      updated="12 August 2026"
    >
      <DraftBanner />
      <Prose>
        <h2>About this policy</h2>
        <p>
          <strong>whozyo</strong> is the app behind WhoIsYourMechanic. It helps
          people in Nepal find a trusted mechanic or other local provider, agree
          the work in a chat, attach photographic evidence, record what was
          paid, and leave a review. This policy covers the WhoIsYourMechanic
          mobile app and this website.
        </p>
        <p>
          This policy describes the app as it is built today, not as it is
          intended to become. Where something is not built, or is built but
          switched off, the policy says so. whozyo is in a testing phase in
          Nepal, and this page is revised whenever the software changes what it
          does with your information.
        </p>

        <h2>What whozyo stores</h2>
        <ul>
          <li>
            <strong>Your sign-in.</strong> The app has two doors and you use
            one. With the email door, whozyo stores your email address and a
            scrambled form of your password — never the password itself.
            With the phone door, whozyo stores your phone number as the record
            of which account is yours. Sign-in with Google or Apple is not
            available.
          </li>
          <li>
            <strong>Your profile.</strong> The display name you choose and an
            optional handle. whozyo has no profile photo and no field for your
            address, your area, or your date of birth.
          </li>
          <li>
            <strong>Things you register.</strong> Details you type about a
            vehicle or other item — such as make, model, year, or plate — and a
            photo if you attach one.
          </li>
          <li>
            <strong>Messages and evidence.</strong> The messages you send in a
            job thread, and the photographs and voice notes you attach to it.
            whozyo accepts images and audio only; it does not accept video or
            document files.
          </li>
          <li>
            <strong>Jobs, quotes, bills, and payment records.</strong> The
            quotes, bills, line items, tabs, and payments that you and the
            other person record, and the receipt once a payment is confirmed.
          </li>
          <li>
            <strong>Reviews and ratings.</strong> The rating and comment you
            leave after a job, and those left about you.
          </li>
        </ul>

        <h2>What whozyo does not collect</h2>
        <ul>
          <li>
            <strong>Your location.</strong> The app asks for no location
            permission, contains no map or GPS feature, and there is no field
            anywhere in whozyo that records where you are. See the note on
            photographs below, which is the one real exception.
          </li>
          <li>
            <strong>Your contacts.</strong> whozyo never reads your address
            book. It asks for no contacts permission.
          </li>
          <li>
            <strong>Advertising identifiers.</strong> whozyo carries no
            advertising software, no attribution or install-tracking tool, and
            no social-media tracking pixel. Your information is not sold and is
            not used for advertising.
          </li>
          <li>
            <strong>Your keystrokes or screen.</strong> whozyo does not record
            your screen, does not replay your sessions, and does not
            automatically capture what you tap or type.
          </li>
        </ul>
        <p>
          The permissions the app does request are camera, microphone, and
          access to a photo you pick — each asked for at the moment you use it,
          and each used only for that purpose.
        </p>

        <h2>Photographs and voice notes carry information of their own</h2>
        <p>
          A photograph taken on a phone can carry hidden details inside the
          image file itself — most importantly the <strong>GPS coordinates of
          where it was taken</strong>, along with the time and the camera model.
          A voice note can carry the same: some Android recorders write the
          location of the recording straight into the audio file.
        </p>
        <p>
          <strong>
            whozyo removes this information on its servers, before the file is
            stored.
          </strong>{" "}
          Every photograph and every voice note the app accepts is rewritten
          with those hidden details stripped out, and the stripped version is
          the only one kept — no untouched original is held anywhere, so what is
          served is what was cleaned. Nothing is accepted that cannot be
          cleaned: file types whose hidden details cannot be reliably removed —
          iPhone HEIC photographs, and Ogg or WebM recordings — are refused at
          upload rather than stored as they arrived.
        </p>
        <p>
          Be clear about what that does and does not reach. Stripping removes
          the information wrapped <em>around</em> a recording, never what is
          inside it: the words spoken in a voice note, and whatever is visible
          in the photograph itself, are untouched — a photograph of your house
          is still a photograph of your house, and anyone entitled to view it
          may recognise the place. A recording&rsquo;s length, and the technical
          settings a player needs in order to open it, also remain.
        </p>
        <p>
          One more limit worth stating: this is recent. Photographs uploaded
          before 11 August 2026, and voice notes uploaded before 12 August 2026,
          were stored as they arrived, and those older files have{" "}
          <strong>not</strong> been cleaned up retrospectively.
        </p>

        <h2>Who can see what</h2>
        <p>
          This is the most important section on the page, because whozyo is a
          trust product: a reputation only means something if other people can
          see it. Nothing on whozyo is readable by the open internet — every
          part of the app requires an account — but <strong>&ldquo;visible&rdquo;
          means visible to any signed-in whozyo user</strong>, not only to
          people you have dealt with.
        </p>
        <h3>Visible to any signed-in user</h3>
        <ul>
          <li>Your display name and handle.</li>
          <li>
            Your star rating, your number of reviews, your number of completed
            jobs, and whether your account is verified.
          </li>
          <li>Anything you list as a service, including its prices and photos.</li>
          <li>
            <strong>The reviews written about you, with the full text and the
            name of the person who wrote each one.</strong> Reviews on whozyo
            are never anonymous, in either direction: you can see who rated you,
            and anyone can see what you wrote about someone else.
          </li>
        </ul>
        <h3>Visible only to the other person in a job</h3>
        <ul>
          <li>
            Your messages, your photographs and voice notes, and the quotes,
            bills, and payment records for that job. These are limited to the
            people in that thread and are not readable by anyone else.
          </li>
        </ul>
        <h3>Hiding your name, and what that does not cover</h3>
        <p>
          whozyo has a setting that replaces your name with its first and last
          letter, so &ldquo;Alok Regmi&rdquo; reads &ldquo;A***i&rdquo;.{" "}
          <strong>It is off by default: unless you turn it on, your full name is
          shown to every signed-in user.</strong>
        </p>
        <p>
          Being straight about its limits, because a half-working privacy
          setting is worse than none: the setting does{" "}
          <strong>not</strong> currently apply to search results, to the trust
          card on your profile, or to reviews you have written — in those three
          places your full name is still shown. It does not hide your rating,
          your job count, your verified badge, or your handle, which stay
          visible by design. This gap is known and is being closed.
        </p>
        <h3>Share links</h3>
        <p>
          If you send someone a claim or receipt link, that single link opens
          without a whozyo account and shows the shop name, its rating, the
          staff name, the amount, and any photograph attached. Treat such a link
          as readable by whoever receives it.
        </p>

        <h2>Analytics and crash reporting</h2>
        <p>
          <strong>Both are switched off in the app being released.</strong> The
          app contains a product-analytics component and a crash-reporting
          component, and each is turned on only by a setting supplied when the
          app is built. Neither setting is supplied. With them unset, no
          analytics tool starts, no crash reporter starts, and{" "}
          <strong>nothing is sent anywhere</strong>.
        </p>
        <p>
          If analytics is ever switched on, this is what the software permits it
          to send, because these limits are built into the code rather than
          promised in prose:
        </p>
        <ul>
          <li>
            <strong>Nothing from your conversations.</strong> There is no
            measurement of messages at all — not their content, not their
            number.
          </li>
          <li>
            <strong>No name and no phone number.</strong> An account is
            identified only by its random internal reference, and the code
            refuses any identifier that is not one.
          </li>
          <li>
            <strong>No exact money figures.</strong> Amounts are only ever
            recorded as broad ranges.
          </li>
          <li>
            <strong>A fixed, short list of nine events</strong> — the app
            opening, a screen being viewed, how long a screen took to load, a
            search being opened or used or abandoned, which kind of service was
            opened, and a step being refused together with the machine reason
            code for it. Anything the app tries to record beyond that list is
            discarded rather than sent.
          </li>
          <li>
            <strong>No screen or item names.</strong> A screen address has every
            identifying part removed before it is recorded, so a specific job,
            person, or vehicle cannot be picked out of it.
          </li>
        </ul>
        <p>
          Two things would be sent by the analytics software itself rather than
          by that list: the technical details of an error, and a check of
          whether analytics is meant to be running. Turning analytics on would
          also mean the company providing it could derive an approximate
          location from the internet connection the app is using, in the way any
          web service can. The app itself never sends a location.
        </p>
        <p>
          Crash reporting, if switched on, sends the technical details of a
          crash: the error and where in the app it happened. It does not send
          your messages or your files. This policy is updated before either is
          turned on.
        </p>

        <h2>Where your information is kept, and what leaves the app</h2>
        <p>
          Your information is stored in whozyo&apos;s own database and its own
          file storage, on servers whozyo runs. It is not held by an outside
          service provider, and photographs and voice notes are served through
          whozyo rather than from a public file address — every request for one
          is checked against whether you are entitled to see it.
        </p>
        <p>
          <strong>Today, nothing about you is sent to any outside company.</strong>{" "}
          There is no advertising network, no data broker, no analytics service
          receiving anything, and no third-party service that processes your
          photographs. The app is built so that this remains checkable rather
          than a matter of trust: the software has only three outside
          connections it is capable of making at all — file storage, analytics,
          and crash reporting — and the second and third are switched off.
        </p>
        <p>
          Two things will change this, and this policy will be updated when they
          do. Sending a one-time code by SMS will require passing your phone
          number to an SMS company, and that is not connected yet — which is
          why a code does not currently arrive. Notifications sent to your phone
          are not built at all; whozyo has no push notifications today and
          stores no device token for them.
        </p>
        <p>
          Payments do not pass through whozyo. A payment QR code is an image the
          provider uploaded of their own bank or wallet code; the payment
          happens directly between the two of you, and whozyo records that it
          was made. No bank, wallet, or card company receives anything from
          whozyo.
        </p>

        <h2>How long whozyo keeps it</h2>
        <p>
          Your information is kept for as long as your account exists. You can
          delete your account from{" "}
          <strong>Settings ▸ Leave whozyo</strong> in the app, or by writing to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
        <p>
          <strong>
            When you ask whozyo to delete your account, you are hidden from
            everyone immediately and signed out on every device, and the
            deletion itself runs 30 days later. Signing in again at any point
            within those 30 days cancels the deletion and restores your account.
            The app also offers an immediate deletion that skips the wait
            entirely.
          </strong>{" "}
          The 30-day period is fixed in the software and the deletion runs
          automatically. Deletion is refused only while money is still open
          between you and someone else — an unpaid bill, a held deposit, an
          unsettled tab, or an open dispute — and where that is the case the app
          names it before you ask. If you have already asked to leave and an
          obligation reopens, your request stands and the deletion runs once the
          last one closes, which can be later than 30 days.
        </p>
        <p>
          Asking to leave signs you out on every device, so returning means
          signing in the ordinary way — and that sign-in is itself what cancels
          the deletion. Once the deletion has run, the account cannot be signed
          into again and cannot be restored.
        </p>
        <p>
          Deletion removes your name, your handle, your sign-in, your payment QR
          codes, your listings, your private notes and lists, identifying
          details such as a plate or serial number, and the photographs you sent
          on chats that never became a completed job. What remains is what
          belongs to somebody else as much as to you: reviews you wrote about
          other people, settled receipts, evidence attached to a completed job,
          safety reports, blocks, and the messages already sitting in other
          people&apos;s chats.{" "}
          <a href="/delete-account">Deleting your account</a> sets out the exact
          list and the reason for each item.
        </p>
        <h3>One thing that outlasts a deletion</h3>
        <p>
          This is stated because a policy that quietly omitted it would be
          wrong:
        </p>
        <ul>
          <li>
            <strong>A phone number that has ever requested a sign-in code</strong>{" "}
            is kept in a separate record used to stop that number being flooded
            with codes. Deleting your account does not remove it. It is not
            linked to your profile and is not used for anything else.
          </li>
        </ul>
        <p>
          The photographs and voice notes of a deleted account are not on that
          list. They stop being served immediately, and the files themselves are
          deleted from storage — right away when you choose to delete now, and
          otherwise by the sweep that runs when the thirty days are up.
        </p>

        <h2>Keeping it safe</h2>
        <p>
          Passwords are stored using a slow, modern scrambling method and are
          never stored or written down in readable form. Sign-in tokens are
          stored only as a fingerprint on the server, and on your phone they are
          held in the Android secure keystore. Each part of the database
          enforces for itself who is allowed to read a row, so a mistake in one
          screen cannot expose another person&apos;s thread.
        </p>
        <p>
          Two limits worth knowing. whozyo keeps a copy of recent screens on
          your phone so the app works without a signal; that copy contains
          names, amounts, and job details and is not separately encrypted, so
          protect your phone with a screen lock. And whozyo cannot yet verify
          that an email address belongs to the person entering it, so an email
          address alone should not be treated as proof of who someone is.
        </p>
        <p>
          If a security problem affects your information, whozyo will say so on
          this site and by email where it can reach you.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>
            <strong>See and correct your information.</strong> Your profile,
            your jobs, your receipts, and your reviews are all readable in the
            app, and your profile is editable there.
          </li>
          <li>
            <strong>Hide your name.</strong> The setting described above, with
            the limits described above.
          </li>
          <li>
            <strong>Take a break instead of deleting.</strong> This hides you
            from everyone and stops new work reaching you while keeping your
            record intact. It is reversible in one tap and is never refused.
          </li>
          <li>
            <strong>Delete your account.</strong> In the app, or by writing to{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. See{" "}
            <a href="/delete-account">Delete your account</a>.
          </li>
          <li>
            <strong>Download your information.</strong> Not available. whozyo
            has no export feature, so your record can be read in the app but
            cannot be taken away as a file. This is stated plainly rather than
            left to be discovered after an account is deleted.
          </li>
          <li>
            <strong>Turn analytics off.</strong> There is no such setting,
            because there is nothing to turn off — analytics is not running. A
            control will be added before that changes.
          </li>
        </ul>
        <p>
          whozyo also has no password-reset feature yet. If you sign in with an
          email address and forget the password, write to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>

        <h2>Children</h2>
        <p>
          WhoIsYourMechanic is not intended for children under 13, and whozyo
          does not knowingly collect information from them. If you believe a
          child has created an account, write to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and it will be
          removed.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          This policy changes when the app changes. The{" "}
          <strong>Last updated</strong> date above is revised each time. Where a
          change means whozyo starts collecting something it did not collect
          before — analytics, notifications, or SMS delivery among them — this
          page is updated before that change reaches you.
        </p>

        <h2>Contact</h2>
        <p>
          For any question or request about your information, write to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
        <p>
          whozyo · Lalitpur, Nepal. The app is launched in Nepal and the laws of
          Nepal apply.
        </p>
        <p>
          Related: <a href="/delete-account">Delete your account</a> ·{" "}
          <a href="/terms">Terms of Service</a> ·{" "}
          <a href="/support">Support</a>
        </p>
      </Prose>
    </PageShell>
  );
}
