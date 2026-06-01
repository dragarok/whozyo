import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ServiceCenterDirectory } from "@/components/ServiceCenterDirectory";
import { serviceCenters } from "@/data/service-centers";

export const metadata: Metadata = {
  title: "Official service centers in Nepal — WhoIsYourMechanic",
  description:
    "Find authorized car and two-wheeler service centers in Kathmandu, Lalitpur, Bhaktapur and Pokhara — with phone numbers and map directions, all in one place.",
};

export default function ServiceCentersPage() {
  return (
    <PageShell
      wide
      eyebrow="Directory"
      title="Official service centers in Nepal"
      subtitle="Authorized car and two-wheeler service centers in major cities — phone numbers and directions, all in one place."
    >
      <p className="mb-6 rounded-[var(--radius-md)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-[13px] leading-relaxed text-[color:var(--color-ink-dim)]">
        Listings are compiled from official brand and public sources. Details
        can change — please confirm with the service center before visiting.
        Spotted something wrong or missing?{" "}
        <a
          href="mailto:support@whozyo.com?subject=Service%20center%20directory"
          className="font-semibold text-[color:var(--color-indigo-dark)] underline underline-offset-2"
        >
          Let us know
        </a>
        .
      </p>

      <ServiceCenterDirectory centers={serviceCenters} />
    </PageShell>
  );
}
