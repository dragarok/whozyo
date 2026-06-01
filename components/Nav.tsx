import { Logo } from "./Logo";

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <Logo className="size-8" />
          <span className="font-display text-lg tracking-tight text-[color:var(--color-ink)]">
            WhoIsYourMechanic
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[color:var(--color-ink-dim)]">
          <a href="/#how" className="hover:text-[color:var(--color-ink)]">How it works</a>
          <a href="/#features" className="hover:text-[color:var(--color-ink)]">Features</a>
          <a href="/service-centers" className="hover:text-[color:var(--color-ink)]">Service centers</a>
          <a href="/#mechanics" className="hover:text-[color:var(--color-ink)]">For mechanics</a>
        </div>

        <a href="/#download" className="btn-primary text-[13px] py-2.5 px-4">
          Get the app
        </a>
      </div>
    </nav>
  );
}
