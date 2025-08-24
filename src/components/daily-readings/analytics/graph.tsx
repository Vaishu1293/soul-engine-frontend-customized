"use client";
import React, { useId } from "react";
import "swiper/css/bundle";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

interface GraphsVisualsProps {
  title?: string;
  positiveBondDays?: number;
  negativeWeakDays?: number;
  tensionDays?: number;
  homeChangeHints?: number;
  intimacyYouC?: number;
  intimacyRC?: number;
  physicallyTogether?: number;
  emotionallyDetached?: number;
  totalDays?: number;
}

const PALETTES = {
  grape: { from: "#7A44FF", to: "#D83DFF" },
  indigo: { from: "#5B7CFF", to: "#A07CFF" },
  teal: { from: "#00C2FF", to: "#17C3B2" },
  amber: { from: "#FF7A59", to: "#FFB703" },
};

const GRID = "rgba(122,68,255,0.18)";
const TOOLTIP_BG = "rgba(17,24,39,0.9)";
const TOOLTIP_BORDER = "rgba(216,61,255,0.25)";

export default function GraphsVisuals({
  title = "Weekly Graphs",
  positiveBondDays = 5,
  negativeWeakDays = 2,
  tensionDays = 4,
  homeChangeHints = 3,
  intimacyYouC = 7,
  intimacyRC = 0,
  physicallyTogether = 6,
  emotionallyDetached = 7,
  totalDays = 7,
}: GraphsVisualsProps) {
  useFlashlightAnimation();
  const gid = useId();

  const calmDays = Math.max(totalDays - tensionDays, 0);
  const notTogether = Math.max(totalDays - physicallyTogether, 0);
  const emotionallyConnected = Math.max(totalDays - emotionallyDetached, 0);

  const tensionPie = [
    { name: "Tension", value: tensionDays },
    { name: "Calm", value: calmDays },
  ];
  const togetherPie = [
    { name: "Together", value: physicallyTogether },
    { name: "Not Together", value: notTogether },
  ];
  const emotionalPie = [
    { name: "Detached", value: emotionallyDetached },
    { name: "Connected", value: emotionallyConnected },
  ];
  const radarFactors = [
    { label: "Bond +", val: positiveBondDays },
    { label: "Bond -", val: negativeWeakDays },
    { label: "Tension", val: tensionDays },
    { label: "Home Hints", val: homeChangeHints },
  ];

  const makePercentLabel = (total: number) => (entry: any) =>
    `${entry.name}: ${Math.round((entry.value / Math.max(total, 1)) * 100)}%`;

  return (
    <div className="w-full space-y-6 px-3">
      {/* Center the stack & limit width */}
      <div className="row justify-content-center mx-auto max-w-6xl">
        <div className="col-12 col-md-6">
          <Card title="Tension vs Calm">
            <ResponsiveContainer width="100%" height={360}>
              <PieChart>
                <defs>
                  <TwoStopGradient id={`${gid}-tension-a`} from={PALETTES.grape.from} to={PALETTES.grape.to} />
                  <TwoStopGradient id={`${gid}-tension-b`} from={PALETTES.grape.to} to={PALETTES.grape.from} />
                </defs>
                <ThemedTooltip />
                <Legend iconType="circle" />
                <Pie
                  data={tensionPie}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label={makePercentLabel(totalDays)}
                  labelLine={false}
                >
                  <Cell fill={`url(#${gid}-tension-a)`} />
                  <Cell fill={`url(#${gid}-tension-b)`} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="col-12 col-md-6">
          <Card title="Physically Together">
            <ResponsiveContainer width="100%" height={360}>
              <PieChart>
                <defs>
                  <TwoStopGradient id={`${gid}-together-a`} from={PALETTES.indigo.from} to={PALETTES.indigo.to} />
                  <TwoStopGradient id={`${gid}-together-b`} from={PALETTES.indigo.to} to={PALETTES.indigo.from} />
                </defs>
                <ThemedTooltip />
                <Legend iconType="circle" />
                <Pie
                  data={togetherPie}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label={makePercentLabel(totalDays)}
                  labelLine={false}
                >
                  <Cell fill={`url(#${gid}-together-a)`} />
                  <Cell fill={`url(#${gid}-together-b)`} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="col-12 col-md-6">
          <Card title="Emotional State">
            <ResponsiveContainer width="100%" height={360}>
              <PieChart>
                <defs>
                  <TwoStopGradient id={`${gid}-emo-a`} from={PALETTES.teal.from} to={PALETTES.teal.to} />
                  <TwoStopGradient id={`${gid}-emo-b`} from={PALETTES.teal.to} to={PALETTES.teal.from} />
                </defs>
                <ThemedTooltip />
                <Legend iconType="circle" />
                <Pie
                  data={emotionalPie}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label={makePercentLabel(totalDays)}
                  labelLine={false}
                >
                  <Cell fill={`url(#${gid}-emo-a)`} />
                  <Cell fill={`url(#${gid}-emo-b)`} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="col-12 col-md-6">
          <Card title="At-a-Glance (Radar)">
            <ResponsiveContainer width="100%" height={360}>
              <RadarChart data={radarFactors} outerRadius={110}>
                <defs>
                  <TwoStopGradient id={`${gid}-radar`} from={PALETTES.amber.from} to={PALETTES.amber.to} />
                </defs>
                <PolarGrid stroke={GRID} />
                <PolarAngleAxis dataKey="label" tick={{ fill: "currentColor", fontSize: 12 }} />
                <PolarRadiusAxis stroke={GRID} tick={{ fill: "currentColor", fontSize: 10 }} />
                <Radar
                  dataKey="val"
                  name="Score"
                  stroke={PALETTES.amber.from}
                  fill={`url(#${gid}-radar)`}
                  fillOpacity={1}
                />
                <ThemedTooltip />
                <Legend iconType="circle" />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="m-3 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
      {/* Header */}
      <div className="p-3 pb-0 flex items-center justify-between">
        <h3 className="text-base font-semibold">{title}</h3>
      </div>

      {/* Body with inner padding for ALL items */}
      <div>
        <div className="rounded-xl [&>*]:p-1 md:[&>*]:p-1 space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
}


function ThemedTooltip() {
  return (
    <Tooltip
      wrapperStyle={{
        background: TOOLTIP_BG,
        border: `1px solid ${TOOLTIP_BORDER}`,
        borderRadius: 12,
        color: "#fff",
      }}
    />
  );
}

function TwoStopGradient({
  id,
  from,
  to,
  x1 = "0",
  y1 = "0",
  x2 = "1",
  y2 = "0",
  fromOpacity = 0.55,
  toOpacity = 0.22,
}: {
  id: string;
  from: string;
  to: string;
  x1?: string;
  y1?: string;
  x2?: string;
  y2?: string;
  fromOpacity?: number;
  toOpacity?: number;
}) {
  return (
    <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2}>
      <stop offset="0%" stopColor={from} stopOpacity={fromOpacity} />
      <stop offset="100%" stopColor={to} stopOpacity={toOpacity} />
    </linearGradient>
  );
}
