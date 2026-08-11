import { Phone } from "./Phone";
import {
  ClientHomeScreen,
  MechanicDashboardScreen,
  ServiceCenterScreen,
} from "./PhoneScreens";

type Role = {
  badge: string;
  badgeTone: "indigo" | "emerald" | "amber";
  title: string;
  sub: string;
  bullets: string[];
  screen: React.ReactNode;
};

const ROLES: Role[] = [
  {
    badge: "For owners",
    badgeTone: "indigo",
    title: "Hand over the keys with confidence.",
    sub: "Scan a QR, read the mechanic's record of settled jobs, follow every step of the repair from your phone — and approve the itemised quote before any work begins.",
    bullets: [
      "Profiles built from settled jobs and receipt-bound reviews",
      "Live photo timeline of every part removed",
      "Itemised quotes — parts, labour, fees, broken down",
      "A permanent, itemised receipt for every job",
    ],
    screen: <ClientHomeScreen />,
  },
  {
    badge: "For mechanics",
    badgeTone: "emerald",
    title: "Build a name that travels with you.",
    sub: "Every job you complete adds to a public record only you own. No middlemen, no fake reviews, no arguing about what the quote said — just your work, well documented.",
    bullets: [
      "QR-paired bookings — no phone numbers traded",
      "Tap to mark yourself available for the day",
      "Send itemised quotes in seconds",
      "A record of every bill and receipt, in one place",
    ],
    screen: <MechanicDashboardScreen />,
  },
  {
    badge: "For workshops",
    badgeTone: "amber",
    title: "See the whole team on one screen.",
    sub: "Your mechanics join by scanning a QR. You see who's carrying what today, and you hand a job to one named mechanic — so the customer knows whose hands their vehicle is in.",
    bullets: [
      "Mechanics join by QR — never by being looked up",
      "Every mechanic's load for the day, at a glance",
      "Assign a job to one named mechanic",
      "Shop-wide jobs, quotes, and receipts in one record",
    ],
    screen: <ServiceCenterScreen />,
  },
];

const TONE_BADGE: Record<Role["badgeTone"], string> = {
  indigo: "pill pill-indigo",
  emerald: "pill pill-emerald",
  amber: "pill pill-amber",
};

export function ThreeRoles() {
  return (
    <section
      id="roles"
      className="relative py-24 md:py-32 bg-[color:var(--color-surface)] border-y border-[color:var(--color-border)]"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="max-w-[760px] mb-16">
          <span className="eyebrow">One app · three ways to use it</span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] mt-4 text-[color:var(--color-ink)]">
            Built for everyone in the
            <br />
            repair chain.
          </h2>
          <p className="mt-5 text-[17px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[60ch]">
            Whether you're handing over the keys, holding the wrench, or
            running the workshop — one app, which shows you the screens for
            your actual job rather than a one-size-fits-all template.
          </p>
        </header>

        <div className="space-y-20 md:space-y-28">
          {ROLES.map((r, i) => (
            <div
              key={r.title}
              className="grid grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* phone (alternate sides on desktop) */}
              <div
                className={`col-span-12 lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative h-[560px] flex items-center justify-center">
                  <div className="absolute size-[420px] halo-indigo -z-10" />
                  <Phone tilt={i % 2 === 0 ? "right" : "left"}>{r.screen}</Phone>
                </div>
              </div>

              {/* copy */}
              <div
                className={`col-span-12 lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span className={`${TONE_BADGE[r.badgeTone]}`}>{r.badge}</span>
                <h3 className="font-display text-3xl md:text-5xl tracking-tight leading-tight mt-4 text-[color:var(--color-ink)] max-w-[20ch]">
                  {r.title}
                </h3>
                <p className="mt-5 text-[17px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[58ch]">
                  {r.sub}
                </p>

                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[15px] text-[color:var(--color-ink)]"
                    >
                      <CheckGlyph />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckGlyph() {
  return (
    <span className="mt-0.5 size-5 shrink-0 rounded-full bg-[color:var(--color-emerald-tint)] grid place-items-center">
      <svg viewBox="0 0 16 16" className="size-3 text-[color:var(--color-emerald)]">
        <path
          d="M3 8.5l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </span>
  );
}
