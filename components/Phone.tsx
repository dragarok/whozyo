import { ReactNode } from "react";

type PhoneProps = {
  children: ReactNode;
  /** Visual tilt for stacked-phone hero compositions */
  tilt?: "left" | "right" | "none";
  className?: string;
};

export function Phone({ children, tilt = "none", className = "" }: PhoneProps) {
  const tiltClass =
    tilt === "left"
      ? "rotate-[-4deg]"
      : tilt === "right"
      ? "rotate-[4deg]"
      : "";
  return (
    <div
      className={`relative mx-auto w-full max-w-[320px] aspect-[9/19] ${tiltClass} ${className}`}
    >
      {/* outer chassis */}
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-[6px] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.45),0_8px_32px_-4px_rgba(99,102,241,0.18)]">
        {/* inner screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-[color:var(--color-bg)]">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-semibold text-[color:var(--color-ink)]/80">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block size-1 rounded-full bg-[color:var(--color-emerald)]" />
              WIYM
            </span>
          </div>
          {/* notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-[#0f172a]" />
          {/* content */}
          <div className="pt-8 px-5 pb-5 h-[calc(100%-2.5rem)] overflow-hidden">
            {children}
          </div>
          {/* home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-[color:var(--color-ink)]/15" />
        </div>
      </div>
    </div>
  );
}
