"use client";

import { useState } from "react";

const FAQS = [
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
    a: "Android is the only platform being built, and it is where WhoIsYourMechanic will open first, in Kathmandu. It is not on Google Play yet, so there is nothing to install today. The app is translated into Nepali as well as English; switch languages anytime in settings.",
  },
  {
    q: "Is there an iPhone version?",
    a: "No. There is no iPhone build — not in testing, not in review, not held back. The app has only ever been built for Android, and no date has been set for changing that. If you see a WhoIsYourMechanic-looking app on the App Store, it is not this one.",
  },
  {
    q: "I run a service centre. Can I onboard my team?",
    a: "Partly. A workshop can hold a team of mechanics, each joining by scanning a QR rather than being looked up, and a job can be assigned to one named mechanic. What doesn't exist is a bay board, a shift roster, or a finished multi-seat back office. If you run a workshop, write to the address below — this part is being built with the shops that use it.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="eyebrow">Common questions</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05] mt-4 text-[color:var(--color-ink)]">
              Anything else
              <br />
              you'd like to know?
            </h2>
            <p className="mt-5 text-[15px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[36ch]">
              If your question isn't here, write to the address below. It lands
              in the inbox behind the app — there is no support queue.
            </p>
            <a
              href="mailto:hello@whoisyourmechanic.com"
              className="btn-ghost mt-6 text-[13px] py-2.5 px-4"
            >
              hello@whoisyourmechanic.com
            </a>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <ul className="border-t border-[color:var(--color-border)]">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={f.q}
                    className="border-b border-[color:var(--color-border)]"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 text-left py-5 group"
                    >
                      <span className="font-display text-lg md:text-xl tracking-tight text-[color:var(--color-ink)] group-hover:text-[color:var(--color-indigo-dark)] transition-colors">
                        {f.q}
                      </span>
                      <span
                        className={`size-8 rounded-full border border-[color:var(--color-border-strong)] grid place-items-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45 bg-[color:var(--color-ink)] text-white border-transparent" : "text-[color:var(--color-ink-dim)]"
                        }`}
                      >
                        <svg viewBox="0 0 16 16" className="size-3.5" fill="none">
                          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-12 text-[15px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[60ch]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
