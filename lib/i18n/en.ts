// The English copy for the marketing home page, and the SHAPE every other
// language must fill. `Dict` is derived from this object, so `lib/i18n/ne.ts`
// is a compile error the moment a key is added here and not translated there.
//
// Only the home page (`/` and `/ne`) is translated. The blog, the service-centre
// directory and the legal pages are English-only and deliberately stay that way
// — see components/Nav.tsx for how that is disclosed to a Nepali reader.

export const en = {
  /* ── chrome ───────────────────────────────────────────────────────────── */
  nav: {
    how: "How it works",
    features: "Features",
    serviceCenters: "Service centers",
    blog: "Blog",
    forMechanics: "For mechanics",
    cta: "Install the app",
    languageLabel: "Language",
    // Shown on links whose destination has no Nepali version yet.
    englishOnly: "in English",
  },

  /* ── availability notice (hero + download CTA) ────────────────────────── */
  availability: {
    strong: "You can install it now.",
    body:
      "WhoIsYourMechanic is on Google Play and the App Store, free for vehicle owners. Open whozyo.com/get on your phone and it opens the right store for you; on a computer it shows a QR to scan.",
  },

  /* ── hero ─────────────────────────────────────────────────────────────── */
  hero: {
    eyebrow: "Live in Kathmandu · Android & iPhone",
    // Rendered as: lines joined by <br/>, then a space, then the accented word.
    headingLines: ["Know who fixes", "your"],
    headingAccent: "vehicle.",
    sub:
      "WhoIsYourMechanic is the trusted way to find a verified mechanic, watch the work as it happens, and settle up with a permanent itemised receipt — built for every garage in Nepal.",
    stats: [
      { k: "1 app", v: "Client · Mechanic · Workshop" },
      { k: "100%", v: "Receipt-bound reviews" },
      { k: "EN + नेपाली", v: "Bilingual, day one" },
    ],
  },

  /* ── three roles ──────────────────────────────────────────────────────── */
  roles: {
    eyebrow: "One app · three ways to use it",
    headingLines: ["Built for everyone in the", "repair chain."],
    sub:
      "Whether you're handing over the keys, holding the wrench, or running the workshop — one app, which shows you the screens for your actual job rather than a one-size-fits-all template.",
    items: [
      {
        badge: "For owners",
        title: "Hand over the keys with confidence.",
        sub:
          "Scan a QR, read the mechanic's record of settled jobs, follow every step of the repair from your phone — and approve the itemised quote before any work begins.",
        bullets: [
          "Profiles built from settled jobs and receipt-bound reviews",
          "Live photo timeline of every part removed",
          "Itemised quotes — parts, labour, fees, broken down",
          "A permanent, itemised receipt for every job",
        ],
      },
      {
        badge: "For mechanics",
        title: "Build a name that travels with you.",
        sub:
          "Every job you complete adds to a public record only you own. No middlemen, no fake reviews, no arguing about what the quote said — just your work, well documented.",
        bullets: [
          "QR-paired bookings — no phone numbers traded",
          "Tap to mark yourself available for the day",
          "Send itemised quotes in seconds",
          "A record of every bill and receipt, in one place",
        ],
      },
      {
        badge: "For workshops",
        title: "See the whole team on one screen.",
        sub:
          "Your mechanics join by scanning a QR. You see who's carrying what today, and you hand a job to one named mechanic — so the customer knows whose hands their vehicle is in.",
        bullets: [
          "Mechanics join by QR — never by being looked up",
          "Every mechanic's load for the day, at a glance",
          "Assign a job to one named mechanic",
          "Shop-wide jobs, quotes, and receipts in one record",
        ],
      },
    ],
  },

  /* ── how it works ─────────────────────────────────────────────────────── */
  how: {
    eyebrow: "How it works",
    headingLines: ["From scan to receipt", "in four taps."],
    sub:
      "No more hunting for an honest mechanic. No more wondering what you're really paying for. Just a clean four-step flow that puts the receipt back in your hands.",
    steps: [
      {
        title: "Scan the QR.",
        body:
          "Search the directory, or scan the mechanic's QR when you're standing in front of them. The handshake takes ten seconds — no phone numbers traded.",
      },
      {
        title: "Approve an itemised quote.",
        body:
          "Parts, labour, fees — every line of the quote is itemised so you know exactly what you're paying for before any work begins.",
      },
      {
        title: "Watch the work.",
        body:
          "Photos of every part removed, every fluid drained, every check passed — added to a live timeline you can follow from anywhere.",
      },
      {
        title: "Settle up & keep the record.",
        body:
          "Get a permanent itemised receipt once you've paid, and leave a review that's bound to the job — so it actually means something.",
      },
    ],
  },

  /* ── features ─────────────────────────────────────────────────────────── */
  features: {
    eyebrow: "Everything in the box",
    headingLines: ["Designed for the real", "way repairs happen."],
    sub:
      "Nine features that turn an opaque, anxious experience into something you'd actually recommend to your family.",
    items: [
      {
        title: "QR pairing",
        body:
          "A ten-second QR scan creates a direct link between you and your mechanic. No phone numbers exchanged, no contact-saving, no spam.",
      },
      {
        title: "Itemised quotes",
        body:
          "Every quote breaks down into parts, labour, and fees — line by line. No 'service charges,' no surprises at the till.",
      },
      {
        title: "Photo timeline",
        body:
          "The mechanic snaps before-and-after as the work goes. The photos attach to the job and stay attached to it — they are part of the record, not a message either side can take back.",
      },
      {
        title: "Receipt-bound reviews",
        body:
          "A review can only be written by the person who was on the other side of a settled job — and once written, neither party can edit or delete it. No fake stars, no review-farms, no removal-as-a-service.",
      },
      {
        title: "Vehicle garage",
        body:
          "Add every car, bike, and scooter you own. Every service, every part, every km — saved against the vehicle's record.",
      },
      {
        title: "One clear bill",
        body:
          "The itemised bill and payment record live in the app, so there's one place to check what you owe and what you've paid — however you settle it with the mechanic.",
      },
      {
        title: "EN + नेपाली",
        body:
          "The app speaks English and Nepali, day one. Switch languages anytime — every label, every screen, dates in Bikram Sambat.",
      },
      {
        title: "Workshop team view",
        body:
          "A service centre sees its mechanics and what each is carrying today, and assigns a job to one named mechanic. Staff join by scanning a QR — never by being looked up.",
      },
      {
        title: "Service history",
        body:
          "Every quote, photo, payment, and mechanic note for every job — kept in the vehicle's record, recoverable any time.",
      },
    ],
  },

  /* ── showcase ─────────────────────────────────────────────────────────── */
  showcase: {
    eyebrow: "A look inside",
    headingLines: ["Quietly powerful.", "Loudly transparent."],
    sub:
      "Designed to disappear when you don't need it, and to show you exactly what's happening when you do.",
    captions: [
      "Your jobs at a glance",
      "Approve the itemised quote",
      "Every vehicle's history",
      "Mechanic dashboard",
    ],
  },

  /* ── trust ────────────────────────────────────────────────────────────── */
  trust: {
    eyebrow: "Built on trust",
    headingLines: ["Trust isn't a feeling."],
    headingAccent: "It's a record.",
    sub:
      "The important part isn't a feature. It's a system that makes dishonest work harder than honest work — for everyone involved.",
    card: {
      disclaimer: "Example profile — not a real mechanic",
      name: "Ramesh K.",
      verified: "✓ Verified mechanic",
      stats: [
        { v: "217", k: "Jobs" },
        { v: "4.9", k: "Rating" },
        { v: "83", k: "Reviews" },
      ],
      note: "Every number here comes from a settled job",
    },
    pillars: [
      {
        title: "Verified means one narrow thing.",
        body:
          "The account proved control of a real phone number, recorded automatically at sign-in. Nobody verifies themselves; nobody buys it. It is not an ID check — it's a door, not a character reference. What it opens is the part worth reading: only a verified mechanic can be reviewed at all.",
      },
      {
        title: "Reviews tied to settled jobs.",
        body:
          "A review can only be written by the person who was on the other side of the job, and only once that job is actually settled. Once written it can't be edited or deleted by either party. No five-star bots, no star-farming, no removal-as-a-service.",
      },
      {
        title: "The record does the talking.",
        body:
          "Not a score. Plain sentences worked out from settled jobs: whether the price quoted was the price paid, how many customers came back, how quickly they reply, how much of the work was photographed. There is no hidden rating to game.",
      },
      {
        title: "Problems keep their receipts.",
        body:
          "If something goes wrong, the photos, the quote, and the payment record go with it — so a disagreement starts from what actually happened, not from memory. Nobody here decides who was right; the record just refuses to disappear.",
      },
    ],
  },

  /* ── for mechanics & workshops ────────────────────────────────────────── */
  mechanics: {
    eyebrow: "For mechanics & workshops",
    headingLines: ["Your work, finally"],
    headingAccent: "on the record.",
    sub:
      "Stop fighting for visibility on someone else's platform. Every job you do on WhoIsYourMechanic adds to a public record only you own — a name customers can find, and one that travels with you wherever you work.",
    bullets: [
      { t: "Zero listing fees", b: "Free to join. Free to use." },
      {
        t: "No fake competition",
        b: "Receipt-bound reviews mean nobody can buy stars over you.",
      },
      {
        t: "You keep your customers",
        b: "Customer relationships live in your record, not the platform's.",
      },
      {
        t: "One itemised record",
        b: "Every quote, job, and receipt kept in one place — no more chasing a bill from memory.",
      },
    ],
    ctaMechanic: "Join as a mechanic",
    ctaWorkshop: "I run a workshop",
  },

  /* ── faq ──────────────────────────────────────────────────────────────── */
  faq: {
    eyebrow: "Common questions",
    headingLines: ["Anything else", "you'd like to know?"],
    sub:
      "If your question isn't here, write to the address below. It lands in the inbox behind the app — there is no support queue.",
    items: [
      {
        q: "Where is WhoIsYourMechanic available?",
        a: "Kathmandu first. The app is in testing there — it is not yet open across the valley, and there is no roster of onboarded workshops waiting for you. If you'd like to be among the first mechanics or workshops on it, write to the address below. The intention is to open region by region across Nepal from there.",
      },
      {
        q: "Is it free to use?",
        a: "Yes, today — for vehicle owners and mechanics alike. No listing fees, no subscriptions, and no way to pay for one: nothing in the app charges anyone money. That may change later, and this page will say so when it does.",
      },
      {
        q: "What does a verified badge actually mean?",
        a: "One narrow thing: the account proved control of a real phone number — a code was sent to it and entered back — and that proof was recorded automatically at sign-in. Nobody can mark themselves verified and nobody can buy it. It is not an identity check: no citizenship card is inspected, no licence, no business registration, and there is no team performing checks. The badge matters for what it gates, not for what it says — a review can only be left against a verified mechanic, and only by the person who was on the other side of a job that was actually settled. So read the job and review history underneath the badge. That is the part that is hard to fake.",
      },
      {
        q: "What if I'm unhappy with the work?",
        a: "Message the mechanic in the app first. Every job carries its photos, its itemised quote, and its receipt, so you're arguing from the record rather than from memory. If you can't settle it between you, write to the address below with the job details. Be clear about what that is and isn't: there is no claims desk, no arbitration, no promised response time, and nothing in the app reverses a payment or overrules either of you. What the record gives you is proof of what was agreed and what was paid.",
      },
      {
        q: "Does it work on Android phones?",
        a: "Yes. WhoIsYourMechanic is on Google Play, free for vehicle owners, and Kathmandu is where it opens first. The app is translated into Nepali as well as English; switch languages anytime in settings.",
      },
      {
        q: "Is there an iPhone version?",
        a: "Yes — it is on the App Store as well as Google Play. The surest way to get the right one either way is whozyo.com/get: open it on the phone you are installing on and it takes you straight to that phone's store, so you never have to search a store by name.",
      },
      {
        q: "I run a service centre. Can I onboard my team?",
        a: "Partly. A workshop can hold a team of mechanics, each joining by scanning a QR rather than being looked up, and a job can be assigned to one named mechanic. What doesn't exist is a bay board, a shift roster, or a finished multi-seat back office. If you run a workshop, write to the address below — this part is being built with the shops that use it.",
      },
    ],
  },

  /* ── download CTA ─────────────────────────────────────────────────────── */
  download: {
    badge: "Launching in Kathmandu",
    headingLines: ["Find a mechanic you can", "actually trust."],
    sub:
      "Scan a QR at the garage, watch the repair as it happens, and settle with an itemised receipt that stays. Android and iPhone, free for owners.",
    note: "Free for vehicle owners",
    installCta: "Install the app",
  },

  /* ── footer ───────────────────────────────────────────────────────────── */
  footer: {
    tagline: "Know who fixes your vehicle.",
    blurb:
      "Made in Kathmandu — for every garage in Nepal, and the people who keep them moving.",
    productLabel: "Product",
    supportLabel: "Support",
    contactLabel: "Contact",
    how: "How it works",
    features: "Features",
    serviceCenters: "Service centers",
    blog: "Blog",
    availability: "Availability",
    help: "Help & contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    deleteAccount: "Delete account",
    location: "Kathmandu, Nepal",
    disclaimer:
      "WhoIsYourMechanic — an app in testing, not a registered business.",
    supportShort: "Support",
    privacyShort: "Privacy",
    termsShort: "Terms",
  },

  /* ── in-phone mockup screens ──────────────────────────────────────────── */
  screens: {
    client: {
      label: "This morning",
      greeting: "Good morning, Roger.",
      status: "In progress",
      mechanic: "Ramesh K.",
      verified: "✓ Verified · 4.9 (217)",
      vehicle: "Maruti Swift · KA 4521",
      note: "Front brake pads replaced. Awaiting rotor inspection.",
      quoteLabel: "Quote · itemised",
      amount: "Nrs. 3,200",
      qrTitle: "Pair with a mechanic",
      qrSub: "Scan their QR · 10-second handshake",
    },
    mechanic: {
      label: "Today",
      heading: "4 active jobs",
      on: "On",
      stats: [
        { v: "4", k: "Active" },
        { v: "12", k: "This wk" },
        { v: "4.9", k: "Rating" },
      ],
      jobs: [
        { name: "Maruti Swift", reg: "KA 4521", status: "In progress" },
        { name: "Honda Civic", reg: "BA 8807", status: "Awaiting quote" },
        { name: "Tata Nexon", reg: "LU 1129", status: "Paid" },
      ],
    },
    quote: {
      label: "Quote · awaiting your approval",
      heading: "Front brake job",
      tagPart: "Part",
      tagLabour: "Labour",
      tagFee: "Fee",
      lines: [
        { label: "Brake pad set (front)", v: "Nrs. 2,400" },
        { label: "Brake fluid (top-up)", v: "Nrs. 180" },
        { label: "Labour · 1.2 h", v: "Nrs. 720" },
        { label: "Disposal fee", v: "Nrs. 80" },
      ],
      totalLabel: "Total",
      total: "Nrs. 3,380",
      approve: "Approve",
      discuss: "Discuss",
    },
    workshop: {
      label: "Workshop · Today",
      heading: "Auto Care Patan",
      tiles: [
        { v: "08", k: "In bay" },
        { v: "12", k: "Waiting" },
        { v: "06", k: "Done" },
      ],
      teamLabel: "Team on shift",
      team: [
        { name: "Ramesh K.", load: "2 jobs" },
        { name: "Suresh M.", load: "1 job" },
        { name: "Bikash T.", load: "Off" },
      ],
    },
    vehicle: {
      label: "My garage",
      heading: "2 vehicles",
      vehicles: [
        {
          name: "Maruti Swift",
          reg: "KA 4521",
          year: "2019",
          km: "48,210 km",
          lastService: "12 Mar · Brake pads",
        },
        {
          name: "Honda Activa",
          reg: "BA 8807",
          year: "2022",
          km: "12,950 km",
          lastService: "12 Mar · Brake pads",
        },
      ],
      lastServiceLabel: "Last service",
    },
  },
};

export type Dict = typeof en;
