import { Prose } from "@/components/PageShell";
import { BarChartCard } from "@/components/blog/charts";
import { Callout, Cite, DataTable, References } from "@/components/blog/blog-ui";
import type { PostMeta } from "./types";

export const meta: PostMeta = {
  slug: "nepal-budget-ev-tax",
  title: "Nepal's New EV Tax, Explained: What the 2083/84 Budget Changes",
  excerpt:
    "The budget presented on 29 May 2026 scrapped Nepal's decade-old motor-power (kW) system for taxing electric cars and replaced it with a flat customs duty plus a price-based fee. Here's what changed, what it costs you, and the bill error that caused a week of confusion.",
  date: "2026-06-02",
  readingMinutes: 8,
  tags: ["EV", "Nepal", "Budget", "Tax"],
  author: "WhoIsYourMechanic Team",
};

const oldCustomsByBracket = [
  { bracket: "0–50 kW", y2080: 10, y2081: 15 },
  { bracket: "51–100 kW", y2080: 15, y2081: 20 },
  { bracket: "101–200 kW", y2080: 20, y2081: 30 },
  { bracket: "201–300 kW", y2080: 40, y2081: 60 },
  { bracket: "301 kW+", y2080: 60, y2081: 80 },
];

const newFeeByBand = [
  { band: "≤ Rs 20 lakh", fee: 2.5 },
  { band: "Rs 20–30 lakh", fee: 20 },
  { band: "Rs 30–40 lakh", fee: 35 },
  { band: "Rs 40–50 lakh", fee: 90 },
  { band: "> Rs 50 lakh", fee: 130 },
];

export function Body() {
  return (
    <article>
      <Prose>
        <p>
          On 29 May 2026, Finance Minister Dr. Swarnim Wagle presented
          Nepal&rsquo;s budget for fiscal year 2083/84 (2026/27) — and it
          quietly rewrote the rules for how electric cars are taxed.
          <Cite n={1} />
          <Cite n={2} /> For roughly a decade, Nepal taxed EVs by their{" "}
          <strong>peak motor power in kilowatts (kW)</strong>. That system is
          now gone. In its place: a <strong>flat 20% customs duty</strong> on the
          car&rsquo;s value, the <strong>abolition of excise duty</strong>, and a
          new, price-banded <strong>&ldquo;Clean Infrastructure Investment
          Fee.&rdquo;</strong>
          <Cite n={1} />
          <Cite n={2} />
          <Cite n={3} />
        </p>
      </Prose>

      <Callout title="The one-line summary" tone="indigo">
        EVs are still taxed far more lightly than petrol/diesel cars — but for
        most models, especially mid- and high-end ones, the{" "}
        <strong>total tax burden has gone up</strong> under the new
        value-based system.<Cite n={4} />
      </Callout>

      <Prose>
        <h2>The old system: taxed by motor power</h2>
        <p>
          Until this budget, an EV&rsquo;s tax depended on how powerful its motor
          was. Lower-powered cars (≤50 kW) paid the least; high-performance EVs
          paid steeply more. And those rates had been climbing: the FY 2081/82
          budget raised customs and excise across every bracket, and FY 2082/83
          left them unchanged.
          <Cite n={5} />
          <Cite n={6} /> The chart below shows how customs duty alone rose between
          FY 2080/81 and FY 2081/82.
        </p>
      </Prose>

      <BarChartCard
        title="Old system — EV customs duty by motor-power bracket (% of value)"
        data={oldCustomsByBracket}
        xKey="bracket"
        series={[
          { key: "y2080", name: "FY 2080/81", color: "#94a3b8" },
          { key: "y2081", name: "FY 2081/82 & 2082/83", color: "#6366f1" },
        ]}
        unit="%"
        caption="Source: Samriddhi Foundation, Techlekh and Nepal Drives [5][6]. Excise duty (5–50%) plus 13% VAT and a 5% road fee applied on top. This entire kW-based schedule was abolished in the 2083/84 budget."
      />

      <Prose>
        <h2>The new system: taxed by price</h2>
        <p>
          From FY 2083/84, every electric four-wheeler pays the same{" "}
          <strong>20% customs duty</strong> regardless of motor power, and{" "}
          <strong>excise duty is abolished entirely</strong>.
          <Cite n={1} />
          <Cite n={2} /> Replacing excise is the new{" "}
          <strong>Clean Infrastructure Investment Fee</strong>, which scales with
          the car&rsquo;s price band — gentle on affordable cars, heavy on
          expensive ones:
        </p>
      </Prose>

      <BarChartCard
        title="New system — Clean Infrastructure Investment Fee by price band (%)"
        data={newFeeByBand}
        xKey="band"
        series={[{ key: "fee", name: "Investment fee", color: "#10b981" }]}
        unit="%"
        horizontal
        caption="Source: Ministry of Finance clarification (~31 May 2026) as reported by Meroauto, Fiscal Nepal and Khoj Samachar [1][3][7]. Levied on the customs value (CIF + customs duty); 13% VAT and a 5% road-construction fee still apply on top. Figures should be confirmed against the gazetted Finance Act 2083."
      />

      <DataTable
        title="EV tax at a glance: old vs new"
        columns={["Component", "Old (kW-based)", "New (FY 2083/84)"]}
        rows={[
          ["Customs duty", "15%–80% by motor power", "20% flat"],
          ["Excise duty", "5%–50% by motor power", "Abolished"],
          ["Clean Infrastructure Investment Fee", "—", "2.5%–130% by price band"],
          ["VAT", "13%", "13%"],
          ["Road construction fee", "5%", "5%"],
        ]}
        caption="Sources: [1][2][3]. Petrol/diesel cars remain taxed separately and far more heavily (by engine cc)."
      />

      <Prose>
        <h2>The week of confusion: a bill that got pulled</h2>
        <p>
          The rollout was messy. The Economic Bill 2083 as first published{" "}
          <strong>omitted the fee rate for the Rs 20–30 lakh band entirely</strong>,
          and the Finance Ministry pulled the bill from its website after the
          error was spotted.
          <Cite n={8} /> Several outlets had already printed an incorrect,
          incomplete set of figures, which is why you may still find conflicting
          numbers online. The Ministry later clarified that the Rs 20–30 lakh
          band fee is <strong>20%</strong>, giving the corrected tiers of{" "}
          <strong>2.5% / 20% / 35% / 90% / 130%</strong> used in the chart above.
          <Cite n={3} />
          <Cite n={7} />
        </p>
      </Prose>

      <Callout title="Confirm before you sign" tone="amber">
        These figures reflect reporting and the Ministry&rsquo;s clarification
        from late May 2026, before the budget completed parliamentary passage.
        Tax experts have warned the Rs 20–30 lakh provision may still be
        ambiguous in the gazetted text.<Cite n={7} /> Always confirm the exact,
        current rate with your dealer and the gazetted Finance Act 2083 before
        committing to a purchase.
      </Callout>

      <Prose>
        <h2>What it costs you</h2>
        <p>
          The practical effect is higher prices on most EVs. Reported estimates
          put the increase at roughly <strong>+NPR 100,000 on entry-level
          EVs</strong> and <strong>+NPR 200,000–250,000 on popular mid-range
          models</strong> such as the BYD Atto 2, MG S5 and Deepal S05, rising to
          more than NPR 4 million on premium vehicles.
          <Cite n={4} />
          <Cite n={9} /> In total-burden terms, mid-range EVs moved from roughly
          63% to around 70% of value, while the most expensive cars now face well
          over 200%.
          <Cite n={4} />
        </p>

        <h2>EVs are still the cheaper choice to import</h2>
        <p>
          Crucially, none of this erases the EV advantage. Petrol and diesel cars
          face customs plus an excise that scales steeply with engine
          displacement, plus the road fee and VAT — a combined landed burden
          often cited in the 200–300% range. A comparable EV, even after this
          increase, typically lands in the ~40–90% range.
          <Cite n={10} /> The gap narrowed; it did not close.
        </p>

        <h2>One genuinely good piece of news</h2>
        <p>
          The budget kept strong incentives for charging infrastructure:
          equipment to build EV charging stations carries just{" "}
          <strong>1% customs duty</strong> with other duties waived, alongside a
          five-year income-tax holiday for charging-infrastructure businesses.
          <Cite n={1} /> Given that thin charging coverage is the biggest brake on
          adoption, that is a sensible place to keep the foot off the tax pedal.
        </p>

        <h2>Bottom line</h2>
        <p>
          Nepal moved EV taxation from &ldquo;how powerful is the motor&rdquo; to
          &ldquo;how expensive is the car.&rdquo; Affordable EVs are barely
          affected; mid-range and premium buyers will pay noticeably more. The
          direction of travel — rising EV duties, budget after budget — is the
          real signal: the extraordinary tax advantage that built Nepal&rsquo;s
          EV market is being slowly dialled back. If you have been waiting to buy,
          the policy is unlikely to get more generous than it has been.
        </p>
      </Prose>

      <References
        items={[
          {
            text: "Govt Revises EV Tax System: 20% Flat Customs Duty Introduced, 'Clean Infrastructure Investment Fee' Replaces Excise Duty — Fiscal Nepal (29 May 2026).",
            url: "https://www.fiscalnepal.com/2026/05/29/26321/govt-revises-ev-tax-system-20-flat-customs-duty-introduced-clean-infrastructure-investment-fee-replaces-excise-duty/",
          },
          {
            text: "EV duties to be based on value rather than motor capacity — The Kathmandu Post (30 May 2026).",
            url: "https://kathmandupost.com/money/2026/05/30/ev-duties-to-be-based-on-value-rather-than-motor-capacity",
          },
          {
            text: "Ministry clarifies EV tax structure, details new calculation formula — Meroauto (~31 May 2026).",
            url: "https://www.en.meroauto.com/ministry-clarifies-ev-tax-structure-details-new-calculation-formula/",
          },
          {
            text: "Nepal Raises Taxes on Electric Vehicles, Increasing Consumer Costs — Fiscal Nepal (30 May 2026).",
            url: "https://www.fiscalnepal.com/2026/05/30/26340/nepal-raises-taxes-on-electric-vehicles-increasing-consumer-costs/",
          },
          {
            text: "Exploring the New Budget 2081/82: Higher Taxes for Electric Vehicles — Samriddhi Foundation (2024).",
            url: "https://samriddhi.org/blog/exploring-the-new-budget-2081-82-higher-taxes-for-electric-vehicles/",
          },
          {
            text: "Budget 2082/83: Taxes on Electric Vehicles Remain Unchanged — Nepal Drives (May 2025).",
            url: "https://www.nepaldrives.com/budget-208283-taxes-on-electric-vehicles-remain-unchanged",
          },
          {
            text: "Finance Ministry Clarification Fails to End EV Tax Debate — Khoj Samachar (May 2026).",
            url: "https://khojsamachar.com/ev-tax-clarification-nepal-budget/",
          },
          {
            text: "Economic Bill 2083 Removed from Finance Ministry Website Due to EV Tax Error — Ratopati (May 2026).",
            url: "https://english.ratopati.com/story/64842/finance-ministry-removes-economic-bill-from-website-after-ev-tax-error-found",
          },
          {
            text: "Market price of EVs to rise significantly with govt's new rule of taxation — myRepublica / Nagarik Network (May 2026).",
            url: "https://myrepublica.nagariknetwork.com/news/market-price-of-evs-to-rise-significantly-with-govts-new-rule-of-taxation-23-47.html",
          },
          {
            text: "Understanding Nepal's Vehicle Import Taxes & Their Impact — Atal Auto (2025).",
            url: "https://www.atalauto.com/blog/vehicle-import-tax-in-nepal-in-2025",
          },
        ]}
      />
    </article>
  );
}
