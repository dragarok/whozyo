import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)] pt-20 pb-10">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <Logo className="size-9" />
              <div>
                <div className="font-display text-lg tracking-tight text-[color:var(--color-ink)] leading-tight">
                  WhoIsYourMechanic
                </div>
                <div className="text-[12px] text-[color:var(--color-ink-faint)] mt-0.5">
                  Know who fixes your vehicle.
                </div>
              </div>
            </div>
            <p className="mt-6 text-[14px] text-[color:var(--color-ink-dim)] leading-relaxed max-w-[40ch]">
              Made with care in Kathmandu — for every garage in Nepal, and the
              people who keep them moving.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label mb-4">Product</div>
            <ul className="space-y-2 text-[14px] text-[color:var(--color-ink-dim)]">
              <li><a href="/#how" className="hover:text-[color:var(--color-ink)]">How it works</a></li>
              <li><a href="/#features" className="hover:text-[color:var(--color-ink)]">Features</a></li>
              <li><a href="/#screens" className="hover:text-[color:var(--color-ink)]">App tour</a></li>
              <li><a href="/#download" className="hover:text-[color:var(--color-ink)]">Download</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label mb-4">Support</div>
            <ul className="space-y-2 text-[14px] text-[color:var(--color-ink-dim)]">
              <li><a href="/support" className="hover:text-[color:var(--color-ink)]">Help &amp; contact</a></li>
              <li><a href="/privacy" className="hover:text-[color:var(--color-ink)]">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[color:var(--color-ink)]">Terms of Service</a></li>
              <li><a href="/delete-account" className="hover:text-[color:var(--color-ink)]">Delete account</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="label mb-4">Contact</div>
            <ul className="space-y-2 text-[14px] text-[color:var(--color-ink-dim)] font-mono">
              <li>Kathmandu, Nepal</li>
              <li><a href="mailto:support@whozyo.com" className="hover:text-[color:var(--color-ink)]">support@whozyo.com</a></li>
              <li className="flex items-center gap-2 text-[color:var(--color-emerald)]">
                <span className="size-1.5 rounded-full bg-[color:var(--color-emerald)] live-dot" />
                System operational
              </li>
            </ul>
          </div>
        </div>

        <div className="section-rule my-10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-[color:var(--color-ink-faint)]">
          <span>© 2026 WhoIsYourMechanic. All rights reserved.</span>
          <span className="flex items-center gap-4">
            <a href="/support" className="hover:text-[color:var(--color-ink)]">Support</a>
            <span className="opacity-50">·</span>
            <a href="/privacy" className="hover:text-[color:var(--color-ink)]">Privacy</a>
            <span className="opacity-50">·</span>
            <a href="/terms" className="hover:text-[color:var(--color-ink)]">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
