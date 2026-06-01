"use client";

import { useMemo, useState } from "react";
import {
  CITIES,
  type City,
  type ServiceCenter,
  type VehicleType,
} from "@/data/service-centers";

type CityFilter = City | "All";
type TypeFilter = VehicleType | "All";

const TYPE_LABEL: Record<VehicleType, string> = {
  car: "Cars",
  "two-wheeler": "Two-wheelers",
};

const CITY_ORDER: Record<City, number> = {
  Kathmandu: 0,
  Lalitpur: 1,
  Bhaktapur: 2,
  Pokhara: 3,
};

const CONFIDENCE_ORDER = { high: 0, medium: 1, low: 2 } as const;

function mapsUrl(c: ServiceCenter): string {
  const query = [c.name, c.area, c.city, "Nepal"].filter(Boolean).join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`;
}

function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "rounded-full border border-[color:var(--color-indigo)] bg-[color:var(--color-indigo)] px-3.5 py-1.5 text-[13px] font-semibold text-white transition"
          : "rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3.5 py-1.5 text-[13px] font-semibold text-[color:var(--color-ink-dim)] transition hover:border-[color:var(--color-indigo)] hover:text-[color:var(--color-indigo-dark)]"
      }
    >
      {children}
    </button>
  );
}

export function ServiceCenterDirectory({
  centers,
}: {
  centers: ServiceCenter[];
}) {
  const [city, setCity] = useState<CityFilter>("All");
  const [type, setType] = useState<TypeFilter>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return centers
      .filter((c) => (city === "All" ? true : c.city === city))
      .filter((c) => (type === "All" ? true : c.vehicleType === type))
      .filter((c) =>
        q === ""
          ? true
          : `${c.brand} ${c.name} ${c.area ?? ""}`.toLowerCase().includes(q),
      )
      .sort(
        (a, b) =>
          CITY_ORDER[a.city] - CITY_ORDER[b.city] ||
          a.brand.localeCompare(b.brand) ||
          CONFIDENCE_ORDER[a.confidence] - CONFIDENCE_ORDER[b.confidence],
      );
  }, [centers, city, type, query]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Chip active={city === "All"} onClick={() => setCity("All")}>
            All cities
          </Chip>
          {CITIES.map((c) => (
            <Chip key={c} active={city === c} onClick={() => setCity(c)}>
              {c}
            </Chip>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Chip active={type === "All"} onClick={() => setType("All")}>
            All vehicles
          </Chip>
          <Chip active={type === "car"} onClick={() => setType("car")}>
            Cars
          </Chip>
          <Chip
            active={type === "two-wheeler"}
            onClick={() => setType("two-wheeler")}
          >
            Two-wheelers
          </Chip>

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search brand or area…"
            className="ml-auto min-w-[180px] flex-1 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-1.5 text-[14px] text-[color:var(--color-ink)] outline-none placeholder:text-[color:var(--color-ink-faint)] focus:border-[color:var(--color-indigo)] sm:max-w-[260px] sm:flex-none"
          />
        </div>
      </div>

      <p className="mt-6 text-[13px] text-[color:var(--color-ink-faint)]">
        {results.length} service{" "}
        {results.length === 1 ? "center" : "centers"}
      </p>

      {/* Cards */}
      {results.length === 0 ? (
        <div className="mt-6 rounded-[var(--radius-lg)] border border-dashed border-[color:var(--color-border-strong)] p-10 text-center text-[14px] text-[color:var(--color-ink-dim)]">
          No service centers match your filters yet.
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((c, i) => (
            <article
              key={`${c.brand}-${c.name}-${c.area ?? ""}-${i}`}
              className="card flex flex-col gap-3 p-5"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="pill pill-indigo">{c.brand}</span>
                <span className="inline-flex items-center rounded-full bg-[color:var(--color-elevated)] px-2.5 py-0.5 text-[11px] font-semibold text-[color:var(--color-ink-dim)]">
                  {TYPE_LABEL[c.vehicleType]}
                </span>
                <span className="ml-auto text-[12px] font-medium text-[color:var(--color-ink-faint)]">
                  {c.city}
                </span>
              </div>

              <div>
                <h3 className="font-display-semi text-[15px] leading-snug text-[color:var(--color-ink)]">
                  {c.name}
                </h3>
                {(c.area || c.address) && (
                  <p className="mt-1 text-[13px] leading-relaxed text-[color:var(--color-ink-dim)]">
                    {c.address ?? c.area}
                  </p>
                )}
              </div>

              {c.phones.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {c.phones.slice(0, 3).map((p) => (
                    <a
                      key={p}
                      href={telHref(p)}
                      className="inline-flex items-center gap-1 rounded-full bg-[color:var(--color-indigo-tint)] px-2.5 py-1 text-[12px] font-semibold text-[color:var(--color-indigo-dark)] hover:bg-[color:var(--color-elevated)]"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {p}
                    </a>
                  ))}
                </div>
              )}

              <a
                href={mapsUrl(c)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-auto justify-center !py-2 text-[13px]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                View on map
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
