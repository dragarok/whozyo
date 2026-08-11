import { Prose } from "@/components/PageShell";
import { BarChartCard } from "@/components/blog/charts";
import { Callout, Cite, DataTable, References } from "@/components/blog/blog-ui";
import type { PostMeta } from "./types";

export const meta: PostMeta = {
  slug: "ev-vs-ice-cost-nepal",
  title: "EV vs Petrol in Nepal: The Real Cost Comparison (2026)",
  excerpt:
    "Petrol runs around NPR 217 a litre; charging at home costs about NPR 10 a unit. We put real, sourced Nepali numbers into a running-cost, purchase-price and five-year ownership comparison — and label every assumption.",
  date: "2026-06-02",
  readingMinutes: 9,
  tags: ["EV", "ICE", "Cost", "Nepal"],
  author: "WhoIsYourMechanic",
};

const costPerKm = [
  { scenario: "EV — home charge", cost: 1.43 },
  { scenario: "EV — public DC fast", cost: 3.33 },
  { scenario: "Diesel SUV", cost: 12.5 },
  { scenario: "Petrol car", cost: 15.5 },
];

const tco = [
  { vehicle: "EV (Nexon EV, ~Rs 49L)", cost: 51.3 },
  { vehicle: "Petrol (Creta, ~Rs 54L)", cost: 69.0 },
];

export function Body() {
  return (
    <article>
      <Prose>
        <p>
          The EV-versus-petrol debate in Nepal usually starts with the sticker
          price. But the more interesting story is what happens{" "}
          <em>after</em> you drive off the lot. With petrol at around{" "}
          <strong>NPR 217 per litre</strong> (Kathmandu, June 2026) and home
          electricity at roughly <strong>NPR 10 per unit</strong> for a household
          that also charges a car, the running-cost gap is enormous.
          <Cite n={1} />
          <Cite n={2} />
          <Cite n={3} /> Let&rsquo;s put real numbers to it.
        </p>

        <h2>Running cost: where EVs win, decisively</h2>
        <p>
          A typical EV in Nepal travels roughly 7 km per kWh (a slightly
          optimistic but commonly used figure; real-world is closer to 5.5–6.5).
          A petrol car returns maybe 14 km per litre in city driving. Plug the
          cited rates in and the per-kilometre cost isn&rsquo;t close:
          <Cite n={2} />
        </p>
      </Prose>

      <BarChartCard
        title="Running cost per kilometre (NPR)"
        data={costPerKm}
        xKey="scenario"
        series={[{ key: "cost", name: "NPR per km", color: "#6366f1" }]}
        unit=" NPR"
        horizontal
        caption="Computed from cited rates: petrol NPR 217/L [1], home charging NPR 10/kWh [2][3], public DC fast ~NPR 20/kWh, EV ~7 km/kWh, petrol ~14 km/L, diesel ~18 km/L [2]. Home-charge EV cost is a marginal-slab approximation; assumptions noted below."
      />

      <Prose>
        <p>
          Charging at home, an EV costs roughly <strong>NPR 1.4–1.8 per
          km</strong> against <strong>NPR 13–15.5 for a petrol car</strong> — a
          4–5× difference. Even leaning on more expensive public DC fast
          charging, the EV stays well ahead. EV News Nepal&rsquo;s own blended
          five-year calculator lands at about NPR 4.3/km for an EV versus NPR
          19.1/km for petrol once periodic costs are folded in.
          <Cite n={2} />
        </p>
      </Prose>

      <Callout title="A fair-play caveat on the home rate" tone="amber">
        Nepal&rsquo;s electricity is billed in rising slabs. Adding a car
        typically pushes a household into the 51–100+ unit tiers, so the{" "}
        <em>marginal</em> cost of charging is about NPR 9.5–11/unit — we use NPR
        10. Your actual rate depends on your monthly consumption. The
        much-shared &ldquo;NPR 0.70/unit for EVs&rdquo; figure is a misquote of
        the wholesale charging-station tariff and does not apply to home
        charging.<Cite n={7} />
      </Callout>

      <Prose>
        <h2>Purchase price: EVs often undercut comparable petrol cars</h2>
        <p>
          This is Nepal&rsquo;s twist. Because EVs have been taxed far more
          lightly than combustion cars, a well-equipped electric SUV can cost{" "}
          <em>less</em> on the road than a smaller petrol one. Here are
          representative 2026 prices for models sold in Nepal:
        </p>
      </Prose>

      <DataTable
        title="Representative on-road prices, EV vs petrol (NPR lakh, 2026)"
        columns={["Model", "Type", "Price (Rs lakh)", "Powertrain"]}
        rows={[
          ["MG Comet EV", "EV micro", "19.99–22.74", "17.3 kWh"],
          ["Tata Nexon EV", "EV compact SUV", "41.99–48.99", "45 kWh"],
          ["BYD Dolphin", "EV hatch", "~41.15", "44.9 kWh"],
          ["BYD Atto 3", "EV SUV", "56.90–67.80", "49.9–60.5 kWh"],
          ["Hyundai Creta (petrol)", "ICE SUV", "53.96–78.96", "1.5L, ~16.8 km/L"],
          ["Kia Seltos (petrol)", "ICE SUV", "52.90–82.90", "1.5L, ~16.1 km/L"],
        ]}
        caption="Sources: Nepal Drives, Techlekh, EV Nepal, EV News Nepal, CarNepal (2026). Note how a Tata Nexon EV / BYD Dolphin (~Rs 42–49L) undercuts a Creta/Seltos petrol (~Rs 53–83L) — driven by EV duty far below ICE [5][8]. New 2083/84 duties (see our budget piece) nudge several of these upward."
      />

      <Prose>
        <h2>Annual tax and maintenance</h2>
        <p>
          Annual (&ldquo;Bluebook&rdquo;) vehicle tax also favours EVs in most
          bands, though it is no longer always zero — Bagmati Province removed the
          exemption that small EVs once enjoyed.
          <Cite n={9} /> And because an EV has no engine oil, spark plugs, timing
          belt or exhaust, routine servicing is cheaper; most EV brands in Nepal
          bundle two to five years of free service.
          <Cite n={2} />
        </p>
      </Prose>

      <DataTable
        title="Annual vehicle tax, FY 2082/83 (NPR)"
        columns={["ICE engine (cc)", "Tax", "EV motor (kW)", "Tax"]}
        rows={[
          ["≤ 1000", "22,000", "≤ 49", "10,000"],
          ["1001–1500", "25,000", "50–125", "15,000"],
          ["1501–2000", "27,000", "126–225", "20,000"],
          ["2001–2500", "37,000", "226+", "30,000"],
          ["2901+", "65,000", "—", "—"],
        ]}
        caption="Source: BizSewa, FY 2082/83 [6]. Bagmati Province now taxes small EVs that were previously exempt [9]."
      />

      <Prose>
        <h2>The five-year picture</h2>
        <p>
          Put purchase, energy, tax and maintenance together over five years
          (75,000 km) and the EV&rsquo;s cheaper running cost compounds. The
          illustrative comparison below pits a Tata Nexon EV (~Rs 49 lakh)
          against a Hyundai Creta petrol (~Rs 54 lakh):
        </p>
      </Prose>

      <BarChartCard
        title="Illustrative 5-year total cost of ownership (NPR lakh)"
        data={tco}
        xKey="vehicle"
        series={[{ key: "cost", name: "5-yr TCO (Rs lakh)", color: "#10b981" }]}
        unit=" L"
        caption="Assumptions: 15,000 km/yr; home charging NPR 10/kWh; petrol NPR 217/L; EV maintenance much of it free, petrol ~Rs 2L over 5 yrs. Purchase, fuel and tax are sourced [1][2][6]; maintenance and mileage are assumptions. Excludes depreciation/resale and battery-replacement risk."
      />

      <DataTable
        title="5-year TCO breakdown (NPR)"
        columns={["Component", "EV (Nexon EV)", "Petrol (Creta)"]}
        rows={[
          ["Purchase (on-road)", "49,00,000", "54,00,000"],
          ["Energy / fuel (5 yr)", "~1,07,000", "~11,60,000"],
          ["Annual tax (5 yr)", "~75,000", "~1,35,000"],
          ["Maintenance (5 yr)", "~50,000", "~2,00,000"],
          ["Indicative 5-yr total", "~51,32,000", "~68,95,000"],
        ]}
        caption="Sourced inputs: purchase prices, fuel/electricity rates and tax bands [1][2][6]. Maintenance and annual mileage are assumptions. Excludes resale value and battery-replacement risk, both of which matter — see our tradeoffs article."
      />

      <Prose>
        <h2>So is the EV cheaper? Almost always — with caveats</h2>
        <p>
          On the numbers, an EV in Nepal is cheaper to buy than a comparable
          petrol SUV, and dramatically cheaper to run. Over five years the gap
          can run to well over NPR 15 lakh. The honest asterisks: our TCO leaves
          out two real risks — <strong>depreciation/resale</strong> and the
          tail-risk of a <strong>battery replacement</strong> — and the new
          2083/84 budget has raised duties on mid- and upper-range EVs. We cover
          both the resale question and how to protect yourself in our companion
          piece on EV tradeoffs and future-proofing.
        </p>
        <p>
          For most Nepali buyers driving city and highway kilometres on
          home-charged hydro power, though, the running-cost math is hard to
          argue with.
        </p>
      </Prose>

      <References
        items={[
          {
            text: "Petrol/diesel price table (eff. 1 June 2026) — Nepal Oil Corporation.",
            url: "https://noc.org.np/petrol",
          },
          {
            text: "EV vs Petrol Car in Nepal — Cost Comparison Calculator 2026 — EV News Nepal.",
            url: "https://evnewsnepal.com/ev-vs-petrol-cost-nepal",
          },
          {
            text: "NEA Electricity Tariff Rates — Nepal Energy Forum.",
            url: "http://www.nepalenergyforum.com/nea-electricity-tariff-rates/",
          },
          {
            text: "Nepal electricity prices (Sept 2025) — GlobalPetrolPrices.com.",
            url: "https://www.globalpetrolprices.com/Nepal/electricity_prices/",
          },
          {
            text: "Government keeps taxes on EVs unchanged for FY 2025-26 — The Kathmandu Post (29 May 2025).",
            url: "https://kathmandupost.com/money/2025/05/29/government-keeps-taxes-on-electric-vehicles-unchanged-for-fy-2025-26",
          },
          {
            text: "Vehicle Tax Rate in Nepal (2082/83) — BizSewa.",
            url: "https://bizsewa.com/vehicle-tax-rate-in-nepal/",
          },
          {
            text: "NEA reduces electricity tariff rate for charging stations — myRepublica / Nagarik Network.",
            url: "https://myrepublica.nagariknetwork.com/news/nea-reduces-electricity-tariff-rate-for-charging-stations/",
          },
          {
            text: "Plug-in electric vehicles in Nepal (EV vs ICE duty contrast) — Wikipedia.",
            url: "https://en.wikipedia.org/wiki/Plug-in_electric_vehicles_in_Nepal",
          },
          {
            text: "Bagmati Province Imposes Yearly Tax on Small Electric Cars — Nepal Drives.",
            url: "https://www.nepaldrives.com/electric-cars-annual-tax-bagmati",
          },
        ]}
      />
    </article>
  );
}
