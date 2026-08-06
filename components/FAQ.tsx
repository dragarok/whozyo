"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Where is WhoIsYourMechanic available?",
    a: "We're launching in Kathmandu, with mechanics and workshops onboarding across the valley right now. The plan is to expand region-by-region across Nepal through 2026.",
  },
  {
    q: "Is it free to use?",
    a: "The app is free to use today, for vehicle owners and mechanics alike — no listing fees, no subscriptions. That may change as the platform grows.",
  },
  {
    q: "How do I know a mechanic is really verified?",
    a: "A verified badge means a real person on our team checked the mechanic's identity — a phone number and, where given, a government ID or business registration — before it was added to their profile. Every mechanic's job and review history is visible on their profile so you can judge for yourself.",
  },
  {
    q: "What if I'm unhappy with the work?",
    a: "Message the mechanic in the app first — every job has photos, itemised quotes, and a receipt attached, so it's resolved against the real record, not memory. If you can't work it out together, email us with the job details and a person will look into it.",
  },
  {
    q: "Does it work on Android phones?",
    a: "Yes — WhoIsYourMechanic launches on Android, in Kathmandu. The app is also translated into Nepali; switch languages anytime in settings.",
  },
  {
    q: "I run a service centre. Can I onboard my team?",
    a: "Not yet as a dedicated multi-seat dashboard — today, each mechanic and each service centre uses their own account. Email us if you run a workshop and want to talk about how the team fits in.",
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
              If you don't see your question, write to us — we read every
              message.
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
