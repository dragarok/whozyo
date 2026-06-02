"use client";

import type { ReactNode } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export type ChartDatum = Record<string, string | number>;

export interface Series {
  key: string;
  name: string;
  color?: string;
}

const PALETTE = ["#6366f1", "#10b981", "#f59e0b", "#ef4444", "#0ea5e9", "#8b5cf6"];

const TICK = { fill: "#64748b", fontSize: 12 } as const;
const AXIS_STROKE = "#cbd5e1";
const GRID = "#eef2f6";

const TOOLTIP_STYLE = {
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  fontSize: 12,
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
} as const;

function unitTickFormatter(unit?: string) {
  return unit ? (value: number) => `${value}${unit}` : undefined;
}

function ChartShell({
  title,
  caption,
  children,
}: {
  title?: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-8 rounded-[var(--radius-lg)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
      {title && (
        <figcaption className="mb-4 text-[14px] font-semibold text-[color:var(--color-ink)]">
          {title}
        </figcaption>
      )}
      <div className="h-[320px] w-full">{children}</div>
      {caption && (
        <p className="mt-3 text-[12px] leading-relaxed text-[color:var(--color-ink-faint)]">
          {caption}
        </p>
      )}
    </figure>
  );
}

export function BarChartCard({
  title,
  caption,
  data,
  xKey,
  series,
  unit,
  horizontal = false,
}: {
  title?: string;
  caption?: string;
  data: ChartDatum[];
  xKey: string;
  series: Series[];
  unit?: string;
  /** render bars horizontally (good for long category labels) */
  horizontal?: boolean;
}) {
  const tickFmt = unitTickFormatter(unit);
  return (
    <ChartShell title={title} caption={caption}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout={horizontal ? "vertical" : "horizontal"}
          margin={{ top: 8, right: 16, bottom: 4, left: horizontal ? 12 : 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={GRID}
            vertical={horizontal}
            horizontal={!horizontal}
          />
          {horizontal ? (
            <>
              <XAxis
                type="number"
                tick={TICK}
                stroke={AXIS_STROKE}
                tickFormatter={tickFmt}
              />
              <YAxis
                type="category"
                dataKey={xKey}
                width={150}
                tick={TICK}
                stroke={AXIS_STROKE}
              />
            </>
          ) : (
            <>
              <XAxis dataKey={xKey} tick={TICK} stroke={AXIS_STROKE} />
              <YAxis tick={TICK} stroke={AXIS_STROKE} tickFormatter={tickFmt} />
            </>
          )}
          <Tooltip
            contentStyle={TOOLTIP_STYLE}
            cursor={{ fill: "rgba(99,102,241,0.06)" }}
          />
          {series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
          {series.map((s, i) => (
            <Bar
              key={s.key}
              dataKey={s.key}
              name={s.name}
              fill={s.color ?? PALETTE[i % PALETTE.length]}
              radius={horizontal ? [0, 6, 6, 0] : [6, 6, 0, 0]}
              maxBarSize={horizontal ? 22 : 48}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}

export function LineChartCard({
  title,
  caption,
  data,
  xKey,
  series,
  unit,
}: {
  title?: string;
  caption?: string;
  data: ChartDatum[];
  xKey: string;
  series: Series[];
  unit?: string;
}) {
  const tickFmt = unitTickFormatter(unit);
  return (
    <ChartShell title={title} caption={caption}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, bottom: 4, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
          <XAxis dataKey={xKey} tick={TICK} stroke={AXIS_STROKE} />
          <YAxis tick={TICK} stroke={AXIS_STROKE} tickFormatter={tickFmt} />
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          {series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
          {series.map((s, i) => (
            <Line
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.name}
              stroke={s.color ?? PALETTE[i % PALETTE.length]}
              strokeWidth={2.5}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}
