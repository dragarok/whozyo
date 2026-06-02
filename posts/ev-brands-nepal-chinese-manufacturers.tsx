import { Prose } from "@/components/PageShell";
import { BarChartCard } from "@/components/blog/charts";
import { Callout, Cite, DataTable, References } from "@/components/blog/blog-ui";
import type { PostMeta } from "./types";

export const meta: PostMeta = {
  slug: "ev-brands-nepal-chinese-manufacturers",
  title: "Who Actually Makes Your EV? Nepal's Electric Brands and Their Parent Companies",
  excerpt:
    "About 80% of Nepal's EVs come from China — but the badges hide a much smaller set of giant parent groups. Here's who really owns BYD, MG, Deepal, Zeekr, Leapmotor, Wuling and the rest, and why the parent matters for the car you buy.",
  date: "2026-06-02",
  readingMinutes: 9,
  tags: ["EV", "Brands", "Nepal", "China"],
  author: "WhoIsYourMechanic Team",
};

const marketShare = [
  { brand: "BYD", share: 18.6 },
  { brand: "Tata", share: 15.3 },
  { brand: "Hyundai", share: 12.6 },
  { brand: "MG", share: 8.8 },
  { brand: "Mahindra", share: 4.0 },
];

export function Body() {
  return (
    <article>
      <Prose>
        <p>
          Walk through Nepal&rsquo;s EV showrooms and you&rsquo;ll see a dozen
          badges: BYD, MG, Deepal, Zeekr, Leapmotor, Wuling, Nammi, Omoda. What
          you won&rsquo;t see is that most of them roll up to a handful of giant
          parent groups — and that of the 16,701 EVs imported in FY 2024/25,
          about <strong>80% were Chinese-made</strong>.
          <Cite n={1} /> Knowing who actually builds your car tells you a lot
          about its battery tech, its shared platform, and — critically — whether
          parts and warranty support will still exist in five years.
        </p>

        <h2>Who&rsquo;s winning in Nepal</h2>
        <p>
          BYD leads the market outright, with Tata (India) the fastest-growing
          incumbent and MG breaking out in 2025. Chinese newcomers such as
          Changan/Deepal and Omoda &amp; Jaecoo posted the steepest growth of
          all.
          <Cite n={2} />
          <Cite n={4} />
        </p>
      </Prose>

      <BarChartCard
        title="Nepal EV brand market share, 2025 / FY 2081-82 (%)"
        data={marketShare}
        xKey="brand"
        series={[{ key: "share", name: "Market share", color: "#6366f1" }]}
        unit="%"
        caption="Source: brand-share compilations by EV News Nepal and Best Selling Cars Blog [2][4]. Hard import totals (16,701 EVs; ~80% Chinese) are from the Department of Customs via The Kathmandu Post [1]. Brand shares are media compilations — treat as indicative."
      />

      <Prose>
        <h2>The badge-to-parent map</h2>
        <p>
          Here is what sits behind the names sold in Nepal — the parent group,
          its home country, and the local distributor that actually backs your
          car:
        </p>
      </Prose>

      <DataTable
        title="EV brands in Nepal → parent manufacturer → distributor"
        columns={["Brand", "Parent group", "HQ", "Nepal distributor"]}
        rows={[
          ["BYD", "BYD Auto", "China", "Cimex Inc."],
          ["MG", "SAIC Motor", "China", "Paramount Motors"],
          ["Tata", "Tata Motors", "India", "Sipradi Trading"],
          ["Hyundai", "Hyundai Motor Group", "South Korea", "Laxmi Intercontinental"],
          ["Mahindra", "Mahindra & Mahindra", "India", "Agni Group"],
          ["Deepal", "Changan Automobile", "China", "MAW Vriddhi Autocorp"],
          ["Leapmotor", "Zhejiang Leapmotor*", "China", "Shangrila Motors"],
          ["Zeekr", "Geely", "China", "Pioneer Moto Corp"],
          ["GWM / Ora", "Great Wall Motor", "China", "VG Impex"],
          ["Wuling", "SAIC-GM-Wuling*", "China", "EV Nepal Motors"],
          ["Nammi", "Dongfeng Motor", "China", "MAW Vriddhi Autocorp"],
          ["Omoda & Jaecoo", "Chery Automobile", "China", "Omoda Jaecoo Nepal"],
        ]}
        caption="Sources: OEM corporate pages, distributor sites and auto media [5][9][10][11][12][13][14][15][16][18][19]. *Ownership has nuances — see below."
      />

      <Prose>
        <h2>Four ownership facts that trip people up</h2>
        <p>
          The corporate reality is messier than the marketing, and a few details
          matter for buyers:
        </p>
      </Prose>

      <Callout title="Read the ownership fine print" tone="indigo">
        <ul className="mt-1 list-disc space-y-1.5 pl-5">
          <li>
            <strong>Leapmotor is not a Stellantis brand.</strong> It&rsquo;s an
            independent Chinese company (Zhejiang Leapmotor) in which Stellantis
            holds only a <strong>~19% minority stake</strong>; Stellantis controls
            the separate export joint venture, not the carmaker.<Cite n={5} />
          </li>
          <li>
            <strong>Wuling is part-American.</strong> The Wuling/Baojun brands sit
            under the SAIC-GM-Wuling JV, where <strong>General Motors owns
            44%</strong> — it isn&rsquo;t purely Chinese-owned.<Cite n={6} />
          </li>
          <li>
            <strong>Zeekr is now fully Geely.</strong> Geely bought out the
            remaining shares and delisted Zeekr from the NYSE in December 2025,
            making it a wholly-owned subsidiary.<Cite n={7} />
          </li>
          <li>
            <strong>Neta&rsquo;s parent is in trouble.</strong> Hozon Auto, which
            makes Neta, entered <strong>bankruptcy review in mid-2025</strong> — a
            real red flag if you&rsquo;re relying on long-term parts and warranty
            support.<Cite n={8} />
          </li>
        </ul>
      </Callout>

      <Prose>
        <h2>Why the parent company matters to <em>you</em></h2>
        <p>
          Two cars wearing different badges often share the same platform,
          battery chemistry and software when they belong to the same group —
          everything under SAIC (MG), Changan (Deepal), Geely (Zeekr), Chery
          (Omoda/Jaecoo) or BYD benefits from that group&rsquo;s battery R&amp;D
          and manufacturing scale.
          <Cite n={9} /> That scale is also your insurance policy: a BYD or Geely
          buyer is backed by a profitable global giant, whereas a buyer of a
          brand whose parent is in financial distress is exposed if parts,
          software updates or warranty claims dry up.
          <Cite n={8} />
        </p>
        <p>
          So when comparing two similarly priced EVs in Nepal, look past the
          badge to three things: <strong>the parent group&rsquo;s financial
          health</strong>, <strong>whether the platform is shared with
          higher-volume models</strong> (which helps parts availability), and{" "}
          <strong>the local importer&rsquo;s service depth</strong>. The first two
          you can read off the table above; the third you can check in our{" "}
          <a href="/service-centers">service-centers directory</a>.
        </p>

        <h2>A few things to keep straight</h2>
        <p>
          Dongfeng&rsquo;s EV presence in Nepal is the <strong>Nammi</strong>{" "}
          sub-brand, not its premium Voyah line, which we couldn&rsquo;t confirm
          is sold here.
          <Cite n={16} /> Tesla and XPeng have only recently entered, and a wave
          of additional models (from Geely, Leapmotor, Tata and others) is
          announced for 2026 but not yet on sale.
          <Cite n={3} /> The picture changes fast — but the underlying lesson
          doesn&rsquo;t: in a market this young, the strength of the parent and
          the importer behind your EV is as important as the car itself.
        </p>
      </Prose>

      <References
        items={[
          {
            text: "China's dominance in Nepal EV market leaves India trailing — The Kathmandu Post (11 Aug 2025).",
            url: "https://kathmandupost.com/money/2025/08/11/china-s-dominance-in-nepal-ev-market-leaves-india-trailing",
          },
          {
            text: "Nepal Fiscal Year 2081/82: BEVs account for 73% of sales — Best Selling Cars Blog (Dec 2025).",
            url: "https://bestsellingcarsblog.com/2025/12/nepal-fiscal-year-2081-82-bevs-account-for-73-of-sales/",
          },
          {
            text: "Six new EVs expected to enter the Nepali market in 2026 — Meroauto (2025).",
            url: "https://www.en.meroauto.com/six-new-evs-expected-to-enter-the-nepali-market-in-2026/",
          },
          {
            text: "EV Brand Reputation Rankings in Nepal (2026) — EV News Nepal (2026).",
            url: "https://evnewsnepal.com/news/ev-brand-reputation-rankings-nepal-2026",
          },
          {
            text: "Leapmotor — Wikipedia (accessed Jun 2026).",
            url: "https://en.wikipedia.org/wiki/Leapmotor",
          },
          {
            text: "SAIC-GM-Wuling — Wikipedia (accessed Jun 2026).",
            url: "https://en.wikipedia.org/wiki/SAIC-GM-Wuling",
          },
          {
            text: "Zeekr — Wikipedia (accessed Jun 2026).",
            url: "https://en.wikipedia.org/wiki/Zeekr",
          },
          {
            text: "Hozon Auto — Wikipedia (accessed Jun 2026).",
            url: "https://en.wikipedia.org/wiki/Hozon_Auto",
          },
          {
            text: "Automobile manufacturers and brands of China — Wikipedia (accessed Jun 2026).",
            url: "https://en.wikipedia.org/wiki/Automobile_manufacturers_and_brands_of_China",
          },
          {
            text: "About Changan Nepal / MAW — Changan Nepal.",
            url: "http://changannepal.com/about-maw",
          },
          {
            text: "Shangrila Motors Named Official Leapmotor Dealer for Nepal — Nepal Drives.",
            url: "https://www.nepaldrives.com/shangrila-motors-named-official-leapmotor-dealer-for-nepal",
          },
          {
            text: "Cimex Inc — Official BYD Electric Vehicles Dealer in Nepal.",
            url: "https://cimex.com.np/",
          },
          {
            text: "Paramount Motors — authorized distributor of MG Motors for Nepal.",
            url: "https://www.mgmotors.com.np/site/dealer",
          },
          {
            text: "Tata car distributor (Sipradi Trading) / Hyundai (Laxmi Intercontinental) — CarNepal.",
            url: "https://carnepal.com/tata/",
          },
          {
            text: "GWM Ora 5 electric SUV arrives in Nepal — Meroauto.",
            url: "https://www.en.meroauto.com/gwm-ora-5-electric-suv-arrives-in-nepal/",
          },
          {
            text: "Decoding the Rise of Electric Vehicles in Nepal (distributors) — Nepal Economic Forum.",
            url: "https://nepaleconomicforum.org/decoding-the-rise-of-electric-vehicles-in-nepal/",
          },
          {
            text: "Dongfeng Nammi — Dongfeng Nepal.",
            url: "https://dongfengnepal.com/",
          },
          {
            text: "Omoda & Jaecoo Nepal — official site.",
            url: "https://omodajaecoonepal.com/",
          },
          {
            text: "Zeekr partners with Pioneer Moto Corp for distribution in Nepal — Business 360° (29 Aug 2024).",
            url: "https://www.b360nepal.com/detail/23323/",
          },
        ]}
      />
    </article>
  );
}
