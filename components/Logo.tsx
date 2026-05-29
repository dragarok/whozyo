import Image from "next/image";

/**
 * Renders the WIYM app icon. Pass `size-N` Tailwind class (or any width/height
 * class) on the wrapper element to control display size; intrinsic image is
 * 128×128 for crisp 4× rendering up to 32px / 2× up to 64px.
 */
export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      <Image
        src="/app-icon.png"
        alt="WhoIsYourMechanic"
        fill
        sizes="128px"
        priority
        className="object-contain"
      />
    </span>
  );
}
