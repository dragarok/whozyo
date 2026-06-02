import { Prose } from "@/components/PageShell";
import { BarChartCard } from "@/components/blog/charts";
import { Callout, Cite, DataTable, References } from "@/components/blog/blog-ui";
import type { PostMeta } from "./types";

export const meta: PostMeta = {
  slug: "ev-tradeoffs-future-proofing",
  title: "Buying an EV in Nepal? How to Read the Tradeoffs and Future-Proof Your Money",
  excerpt:
    "EVs win on running cost — but batteries degrade, ranges shrink in the hills, resale is uncertain, and Nepal hasn't settled on a charging standard. A practical, sourced guide to the tradeoffs and the five things that future-proof your purchase.",
  date: "2026-06-02",
  readingMinutes: 10,
  tags: ["EV", "Buying Guide", "Nepal", "Batteries"],
  author: "WhoIsYourMechanic Team",
};

const retentionAt8 = [
  { profile: "Mostly home / slow charge", retained: 88 },
  { profile: "Average usage", retained: 81.6 },
  { profile: "Heavy DC fast charge", retained: 76 },
];

export function Body() {
  return (
    <article>
      <Prose>
        <p>
          Our cost comparison makes the running-cost case for EVs in Nepal hard
          to argue with. But money saved at the pump is only half the decision.
          EVs carry a different risk profile from petrol cars — around batteries,
          range, resale, charging standards and service — and in Nepal some of
          those risks are sharper. Here is how to read each tradeoff, and the
          five things that genuinely future-proof your purchase.
        </p>

        <h2>1. Battery degradation: real, but slower than the fear</h2>
        <p>
          The headline worry is the battery wearing out. The best current data —
          Geotab&rsquo;s 2025 analysis of more than 22,700 EVs across 21 models —
          puts average degradation at about <strong>2.3% per year</strong>,
          leaving roughly <strong>81.6% of capacity after eight years</strong>.
          <Cite n={1} />
          <Cite n={2} /> That is healthier than most buyers expect, but{" "}
          <em>how you charge</em> matters: heavy reliance on high-power DC fast
          charging pushes degradation toward 3%/year (about 76% retained at eight
          years), while mostly home/slow charging holds nearer 88%.
          <Cite n={1} />
        </p>
      </Prose>

      <BarChartCard
        title="Battery capacity retained after 8 years, by charging habit (%)"
        data={retentionAt8}
        xKey="profile"
        series={[{ key: "retained", name: "Capacity retained", color: "#10b981" }]}
        unit="%"
        horizontal
        caption="Source: Geotab EV Battery Health study, 2025 (n≈22,700 EVs) [1][3]. Hot climates add roughly +0.4%/yr of degradation. Charging mostly to 20–80% and avoiding constant fast-charging extends pack life."
      />

      <Prose>
        <h2>2. Chemistry: LFP vs NMC is the choice under the badge</h2>
        <p>
          Two battery chemistries dominate. <strong>LFP</strong> (lithium iron
          phosphate) lasts more charge cycles, tolerates being charged to 100%
          daily, is markedly safer in a fire, and is about 30% cheaper — at the
          cost of lower energy density (less range per kg) and slightly weaker
          cold performance. <strong>NMC</strong> packs more range into less
          weight and does a little better in the cold, but cycles fewer times and
          prefers to live between 20–80%.
          <Cite n={6} />
          <Cite n={7} />
          <Cite n={8} />
        </p>
      </Prose>

      <DataTable
        title="LFP vs NMC battery chemistry"
        columns={["Attribute", "LFP", "NMC"]}
        rows={[
          ["Full cycles to 80%", "3,000–6,000", "1,000–2,500"],
          ["Energy density (pack)", "~160 Wh/kg", "~241–255 Wh/kg"],
          ["Daily 100% charging", "Fine", "Avoid"],
          ["Cold (−20°C) retention", "~60–70%", "~70–80%"],
          ["Thermal-runaway onset", "~270°C (safer)", "~210°C"],
          ["Relative cost / kWh", "~30% cheaper", "Baseline"],
          ["Best for", "Daily/urban, hot, budget, safety", "Long-range, cold, premium"],
        ]}
        caption="Sources: Recharged LFP-vs-NMC analysis, BYD Blade specs, IEA Global EV Outlook 2025 [6][7][8]. For most Nepali city/highway use, LFP's longevity and safety are compelling."
      />

      <Prose>
        <h2>3. Range in the real world — and in the hills</h2>
        <p>
          Quoted ranges are lab figures. In practice, cold weather can cut range
          14–39%, highway speeds add a 10–20% penalty, and running the AC costs
          another 5–10%.
          <Cite n={9} /> Nepal&rsquo;s issue isn&rsquo;t deep cold — Kathmandu
          rarely freezes — it&rsquo;s <strong>altitude, gradients and
          sustained climbs</strong>. A Himalayan hill route with the AC on will
          eat into range fast, so buy meaningful range headroom over your daily
          need rather than just enough.
        </p>

        <h2>4. Resale value: be honest about the uncertainty</h2>
        <p>
          Globally, EVs have depreciated <em>slightly faster</em> than petrol
          cars — roughly 38–42% over three years versus 35–40% — though the gap
          is narrowing and varies hugely by model.
          <Cite n={10} />
          <Cite n={11} /> Some Nepali outlets argue local EVs actually hold value
          better than petrol cars; we&rsquo;d treat that more optimistic,
          single-source local claim with caution, because it runs against the
          better-evidenced global data.
          <Cite n={14} /> The safe planning assumption: don&rsquo;t bank on strong
          resale, and favour models and brands with staying power.
        </p>
      </Prose>

      <Callout title="The single biggest future-proofing risk in Nepal" tone="amber">
        Nepal has <strong>no mandated charging standard</strong>. Most passenger
        EVs sold here (BYD, MG, Hyundai) use <strong>CCS2</strong>, while many
        Chinese buses and commercial vehicles use <strong>GB/T</strong>. Until the
        government standardises, CCS2 is the safer long-term bet for a private
        car — but it&rsquo;s a genuine open question.<Cite n={13} />
      </Callout>

      <Prose>
        <h2>5. In Nepal, the importer matters more than the brand</h2>
        <p>
          A global badge means little if the local distributor can&rsquo;t supply
          parts or honour a battery warranty three years from now. Service
          networks are concentrated in the Kathmandu Valley and tied to specific
          importers; spare-parts lead times and warranty support depend on that
          importer&rsquo;s longevity, not the brand&rsquo;s global scale.
          <Cite n={12} /> Before buying, check where the nearest authorised
          service centre is and how deep the parts pipeline runs — exactly the
          kind of question our{" "}
          <a href="/service-centers">service-centers directory</a> is built to
          help answer.
        </p>

        <h2>What the warranty actually promises</h2>
        <p>
          The industry standard is <strong>8 years / 160,000 km</strong> with a{" "}
          <strong>~70% minimum capacity</strong> guarantee; Tesla covers up to
          192,000–240,000 km, and BYD extended its cover to 8 years / 250,000 km
          in December 2025.
          <Cite n={4} />
          <Cite n={5} /> Read the fine print: that 70% floor is a{" "}
          <em>replacement trigger</em>, not a performance promise — a pack can
          legally drift to ~71% within warranty with no remedy.
          <Cite n={4} />
        </p>
      </Prose>

      <Callout title="The five-point future-proofing checklist" tone="emerald">
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>
            <strong>Battery &amp; warranty:</strong> prefer LFP for longevity and
            safety; confirm at least 8 yr / 160,000 km cover.
          </li>
          <li>
            <strong>Charging standard:</strong> choose CCS2 for a private car
            until Nepal standardises.
          </li>
          <li>
            <strong>Range headroom:</strong> buy well above your daily need to
            absorb hills, AC and winter losses.
          </li>
          <li>
            <strong>Importer service depth:</strong> check the nearest authorised
            service centre and parts availability.
          </li>
          <li>
            <strong>Parent-company stability:</strong> a financially solid OEM is
            more likely to support parts, software and warranty in five years.
          </li>
        </ul>
      </Callout>

      <Prose>
        <h2>Bottom line</h2>
        <p>
          None of these tradeoffs undoes the EV running-cost advantage — they
          shape <em>which</em> EV you should buy. Pick a sensible chemistry, a
          standard charging port, honest range headroom, and a brand whose
          importer will still be answering the phone in 2031. Do that, and the
          biggest risks largely take care of themselves.
        </p>
      </Prose>

      <References
        items={[
          {
            text: "EV Battery Health: Key Findings from 22,700 Vehicle Data Analysis — Geotab (2025).",
            url: "https://www.geotab.com/blog/ev-battery-health/",
          },
          {
            text: "Geotab Study: EV Batteries Retain Over 90% of Capacity After 160,000 km — Latam Mobility (2026).",
            url: "https://latamobility.com/en/geotab-study-ev-batteries-retain-90-percent-capacity-160000-km/",
          },
          {
            text: "Latest Geotab study finds EV batteries lose just 2.3% life per year — Electric Autonomy (13 Jan 2026).",
            url: "https://electricautonomy.ca/ev-supply-chain/batteries/2026-01-13/latest-geotab-study-finds-ev-batteries-lose-just-2-3-life-per-year/",
          },
          {
            text: "EV Battery Warranty Comparison 2026: All Major Brands — Recharged (2026).",
            url: "https://recharged.com/articles/ev-battery-warranty-comparison-all-brands/",
          },
          {
            text: "BYD increases EV battery warranty to 8 years / 250,000 km — Electrek (15 Dec 2025).",
            url: "https://electrek.co/2025/12/15/byd-increases-ev-battery-warranty-to-8-years-250000-km-surpassing-teslas/",
          },
          {
            text: "LFP vs NMC Battery in Electric Cars: 2026 Comparison — Recharged (2026).",
            url: "https://recharged.com/articles/lfp-vs-nmc-battery-in-electric-cars/",
          },
          {
            text: "BYD Blade battery (energy density / specs) — Wikipedia.",
            url: "https://en.wikipedia.org/wiki/BYD_Blade_battery",
          },
          {
            text: "Global EV Outlook 2025 — International Energy Agency (May 2025).",
            url: "https://www.iea.org/reports/global-ev-outlook-2025",
          },
          {
            text: "AAA Study: What's the Real Range of Electric Vehicles? — AAA (2025–2026).",
            url: "https://info.oregon.aaa.com/aaa-study-whats-the-real-range-of-electric-vehicles/",
          },
          {
            text: "EVs vs ICE: Which are worse for resale? — New Atlas (2025).",
            url: "https://newatlas.com/automotive/ev-vs-ice-depreciation/",
          },
          {
            text: "EV Depreciation vs ICE: Resale Value Data & 5-Year Loss 2025 — EV Energy Hub (Nov 2025).",
            url: "https://evenergyhub.com/ev-depreciation-vs-ice/",
          },
          {
            text: "MG Motor Nepal Expansion 2026: Models, Prices & Network — GaadiKey (2026).",
            url: "https://blog.gaadikey.com/mg-motor-nepal-expansion-2026-new-ev-models-prices-network-strategy/",
          },
          {
            text: "Nepal's public EVs need one charging standard — Bizness News English (2025).",
            url: "https://english.biznessnews.com/posts/nepal's-public-evs-need-one-charging-standard",
          },
          {
            text: "EV Resale Value in Nepal: Do Electric Cars Hold Their Value? — EV News Nepal (2025).",
            url: "https://evnewsnepal.com/news/ev-resale-value-in-nepal-do-electric-cars-hold-their-value",
          },
        ]}
      />
    </article>
  );
}
