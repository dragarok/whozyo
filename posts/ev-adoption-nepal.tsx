import { Prose } from "@/components/PageShell";
import { BarChartCard } from "@/components/blog/charts";
import { Callout, Cite, DataTable, References } from "@/components/blog/blog-ui";
import type { PostMeta } from "./types";

export const meta: PostMeta = {
  slug: "ev-adoption-nepal",
  title: "Nepal's Quiet EV Revolution: How a Himalayan Nation Became #2 in the World",
  excerpt:
    "Electric vehicles made up roughly 73% of Nepal's four-wheeler imports in 2024/25 — second only to Norway. Here's what's driving one of the fastest EV transitions on the planet, and what could still stall it.",
  date: "2026-06-02",
  readingMinutes: 9,
  tags: ["EV", "Nepal", "Adoption"],
  author: "WhoIsYourMechanic",
};

const importsByYear = [
  { fy: "2020/21", units: 249 },
  { fy: "2021/22", units: 1807 },
  { fy: "2022/23", units: 4050 },
  { fy: "2023/24", units: 11701 },
  { fy: "2024/25", units: 16701 },
];

const shareByYear = [
  { year: "2019", share: 8 },
  { year: "2025", share: 73 },
];

const globalRanking = [
  { country: "Norway", share: 97 },
  { country: "Nepal", share: 73 },
];

export function Body() {
  return (
    <article>
      <Prose>
        <p>
          If you had to guess which country sits second in the world for
          electric-vehicle adoption, you would probably reach for a wealthy
          European state or a tech-forward city-state. The answer is Nepal. In
          fiscal year 2081/82 (mid-2024 to mid-2025), battery-electric vehicles
          made up roughly <strong>73% of all four-wheeler imports</strong> —
          16,701 EVs out of 22,907 cars — placing Nepal second globally on EV
          share of new car sales, behind only Norway.
          <Cite n={1} />
          <Cite n={2} />
          <Cite n={3} />
        </p>
        <p>
          That is not a rounding error or a one-off. Nepal&rsquo;s EV share of
          new cars climbed from about <strong>8% in 2019</strong> to roughly{" "}
          <strong>73% in 2025</strong> — one of the steepest national
          transitions ever recorded.
          <Cite n={3} />
          <Cite n={4} /> For a lower-middle-income country with rugged terrain
          and a young road network, that is a genuinely remarkable story. Here is
          how it happened.
        </p>
      </Prose>

      <BarChartCard
        title="Electric four-wheeler imports into Nepal, by fiscal year (units)"
        data={importsByYear}
        xKey="fy"
        series={[{ key: "units", name: "EV four-wheelers", color: "#6366f1" }]}
        caption="Source: Nepal Department of Customs, as reported by The Kathmandu Post, myRepublica and Nepal Economic Forum [1][2][6]. The 2020/21 base is approximate (sources differ between ~236 and ~249 units)."
      />

      <Prose>
        <h2>The market didn&rsquo;t grow — it flipped</h2>
        <p>
          Look at the chart above and you can see the inflection. EV imports went
          from a few hundred units in 2020/21 to over 16,700 four years later — a
          roughly 65× increase. But the more telling number is{" "}
          <em>share</em>. Nepal didn&rsquo;t just add EVs on top of a growing
          petrol market; buyers switched. By 2025, nearly three of every four
          new cars cleared through customs were electric.
          <Cite n={1} />
        </p>
      </Prose>

      <BarChartCard
        title="EV share of Nepal's new four-wheeler sales (%)"
        data={shareByYear}
        xKey="year"
        series={[{ key: "share", name: "EV share", color: "#10b981" }]}
        unit="%"
        caption="Source: IEA Global EV Outlook 2025 (via Visual Capitalist and WRI) and Nepal Department of Customs [2][3][4][5]. 2019 and 2025 measure slightly different windows; treat as directional."
      />

      <Prose>
        <h2>Why Nepal? Three forces line up</h2>
        <p>
          <strong>1. Tax policy made EVs dramatically cheaper.</strong> This is
          the big one. For years, a private electric four-wheeler attracted an
          effective tax of around <strong>23%</strong> (roughly 10% customs duty
          plus 13% VAT), while a comparable petrol or diesel car could be taxed
          at up to <strong>~261%</strong> once customs, excise and road levies
          stacked up.
          <Cite n={6} /> That gap routinely made an EV cheaper on the road than a
          smaller combustion car — a powerful nudge for price-sensitive buyers.
        </p>
        <p>
          <strong>2. Electricity is cheap, clean and increasingly abundant.</strong>{" "}
          More than 95% of Nepal&rsquo;s roughly 3,400 MW of installed capacity
          is hydropower.
          <Cite n={7} /> Charging an EV overnight on hydro power costs a fraction
          of filling a tank with imported fuel, and the country has swung from
          chronic load-shedding to seasonal surplus.
        </p>
        <p>
          <strong>3. The fuel-import bill is a national headache.</strong>{" "}
          Petroleum is Nepal&rsquo;s single largest import. In just the first 11
          months of FY 2022/23, the country spent about{" "}
          <strong>NPR 321 billion</strong> on petroleum.
          <Cite n={8} /> Every EV on the road is a small dent in that outflow —
          which is exactly why the government has leaned into electrification.
        </p>
      </Prose>

      <Callout title="Where the cars come from" tone="indigo">
        China now supplies the overwhelming majority of Nepal&rsquo;s EVs. Of the
        16,701 EVs imported in FY 2024/25, about <strong>13,338 (~80%)</strong>{" "}
        were Chinese-made, with Indian brands losing a lead they had held until
        around 2022.<Cite n={2} />
      </Callout>

      <Prose>
        <h2>How Nepal stacks up globally</h2>
        <p>
          Nepal&rsquo;s 73% share puts it right behind Norway (~97%) and well
          ahead of the headline EV markets most people think of. It is, in
          effect, a developing-country counterexample to the idea that mass EV
          adoption requires a rich consumer base.
          <Cite n={3} />
          <Cite n={4} />
        </p>
      </Prose>

      <BarChartCard
        title="EV share of new car sales, 2025 — global leaders"
        data={globalRanking}
        xKey="country"
        series={[{ key: "share", name: "EV share", color: "#6366f1" }]}
        unit="%"
        caption="Source: IEA Global EV Outlook 2025, as compiled by Visual Capitalist and WRI [3][4][5]."
      />

      <DataTable
        title="The lever behind it all: EV vs ICE tax burden (private four-wheeler)"
        columns={["Vehicle type", "Approx. effective tax"]}
        rows={[
          ["Private EV four-wheeler (historic entry band)", "~23% (10% duty + 13% VAT)"],
          ["Comparable petrol/diesel car", "up to ~261%"],
        ]}
        caption="Source: The Kathmandu Post, citing customs and tax-policy reporting [6]. These are historic reference figures; the duty structure has since changed (see our budget article)."
      />

      <Prose>
        <h2>The government&rsquo;s stated ambition</h2>
        <p>
          Nepal&rsquo;s targets are deliberately aggressive. Its Second
          Nationally Determined Contribution (submitted December 2020) set a goal
          of <strong>25% of private passenger-vehicle sales electric by 2025</strong>{" "}
          and <strong>90% by 2030</strong>, plus parallel targets for public
          four-wheelers.
          <Cite n={8} /> On the private-car front, the 2025 milestone has
          already been comfortably overtaken — the policy question now is whether
          the trajectory can survive its own success.
        </p>

        <h2>What could still stall it</h2>
        <p>
          <strong>Charging infrastructure remains thin and urban-heavy.</strong>{" "}
          The Nepal Electricity Authority brought 51 fast chargers into operation
          in 2023 and announced plans for 500 more, but reliable national totals
          are hard to pin down and coverage outside the Kathmandu Valley and main
          highways is still patchy.
          <Cite n={9} /> Range anxiety on long hill routes is real.
        </p>
        <p>
          <strong>Tax policy is volatile.</strong> The duty advantage that built
          this market is not fixed in stone — it is rewritten in the budget every
          year, and recent budgets have steadily raised EV duties. That
          uncertainty is the single biggest risk to the trajectory, and it is the
          subject of our companion piece on the latest budget.
        </p>
        <p>
          <strong>After-sales depth matters.</strong> A market that went from a
          few hundred EVs to tens of thousands in four years now has to service
          them. Spare-parts availability, battery support and a trained mechanic
          base — exactly the gaps a platform like WhoIsYourMechanic exists to
          close — will shape whether today&rsquo;s buyers become tomorrow&rsquo;s
          repeat buyers.
        </p>

        <h2>The bottom line</h2>
        <p>
          Nepal&rsquo;s EV story is a rare case of policy, geography and
          economics pulling in the same direction: cheap hydro power, a punishing
          fuel-import bill, and a tax code that made the clean choice the cheap
          choice. The result is a transition that, by share, leads almost the
          entire world. Sustaining it is now less about convincing buyers — they
          are already convinced — and more about charging networks, stable
          policy, and a service ecosystem that can keep all these new EVs on the
          road.
        </p>
      </Prose>

      <References
        items={[
          {
            text: "Nepal shifts gears as EVs hit 73 percent of 4-wheeler imports — The Kathmandu Post (28 July 2025).",
            url: "https://kathmandupost.com/money/2025/07/28/nepal-shifts-gears-as-evs-hit-73-percent-of-4-wheeler-imports",
          },
          {
            text: "China's dominance in Nepal EV market leaves India trailing — The Kathmandu Post (11 Aug 2025).",
            url: "https://kathmandupost.com/money/2025/08/11/china-s-dominance-in-nepal-ev-market-leaves-india-trailing",
          },
          {
            text: "Trends in electric car markets — Global EV Outlook 2025, International Energy Agency (2025).",
            url: "https://www.iea.org/reports/global-ev-outlook-2025/trends-in-electric-car-markets-2",
          },
          {
            text: "The Countries Adopting Electric Vehicles the Fastest — World Resources Institute (2025).",
            url: "https://www.wri.org/insights/countries-adopting-electric-vehicles-fastest",
          },
          {
            text: "Ranked: EV Share of New Car Sales by Country in 2025 — Visual Capitalist (2025).",
            url: "https://www.visualcapitalist.com/ev-share-new-car-sales-by-country-2019-vs-2025/",
          },
          {
            text: "Decoding the Rise of Electric Vehicles in Nepal — Nepal Economic Forum (2025).",
            url: "https://nepaleconomicforum.org/decoding-the-rise-of-electric-vehicles-in-nepal/",
          },
          {
            text: "Nepal's EV boom: A green leap or a digital trap? — The Kathmandu Post (12 Aug 2025).",
            url: "https://kathmandupost.com/columns/2025/08/12/nepal-s-ev-boom-a-green-leap-or-a-digital-trap",
          },
          {
            text: "Can Nepal Achieve its 2030 Electric Vehicle Targets? — Nepal Economic Forum (2025).",
            url: "https://nepaleconomicforum.org/can-nepal-achieve-its-2030-electric-vehicle-targets/",
          },
          {
            text: "51 electric vehicle charging stations of NEA come into operation — The Rising Nepal (7 Sept 2023).",
            url: "https://risingnepaldaily.com/news/32081",
          },
        ]}
      />
    </article>
  );
}
