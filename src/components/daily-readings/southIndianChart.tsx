"use client";
import React, { useMemo } from "react";

export type Planet =
  | "Asc" | "Sun" | "Moon" | "Mars" | "Mercury" | "Jupiter"
  | "Venus" | "Saturn" | "Rahu" | "Ketu" | "Uranus" | "Neptune" | "Pluto";

export interface Placement {
  planet: Planet;
  sign: number;  // 0..11 (0 = Aries)
  retro?: boolean;
}

interface Props {
  ascSign: number;
  placements: Placement[];
  showHouses?: boolean;
  compact?: boolean;
  className?: string;
}

/** planet labels */
const P_LABEL: Record<Planet, string> = {
  Asc:"Asc", Sun:"Sun", Moon:"Moon", Mars:"Mar", Mercury:"Mer", Jupiter:"Jup",
  Venus:"Ven", Saturn:"Sat", Rahu:"Rahu", Ketu:"Ketu", Uranus:"Ura", Neptune:"Nep", Pluto:"Plu",
};

function houseOfSign(sign: number, ascSign: number): number {
  return ((sign - ascSign + 12) % 12) + 1;
}

/**
 * Perimeter mapping (clockwise), center is merged.
 * Aries (0) at r2c1 → then clockwise.
 */
const CELL_KEYS: Array<{ key: string; r: number; c: number }> = [
  { key: "r2c1", r: 2, c: 1 }, // 0 Aries
  { key: "r1c1", r: 1, c: 1 }, // 1 Taurus
  { key: "r1c2", r: 1, c: 2 }, // 2 Gemini
  { key: "r1c3", r: 1, c: 3 }, // 3 Cancer
  { key: "r1c4", r: 1, c: 4 }, // 4 Leo
  { key: "r2c4", r: 2, c: 4 }, // 5 Virgo
  { key: "r3c4", r: 3, c: 4 }, // 6 Libra
  { key: "r4c4", r: 4, c: 4 }, // 7 Scorpio
  { key: "r4c3", r: 4, c: 3 }, // 8 Sagittarius
  { key: "r4c2", r: 4, c: 2 }, // 9 Capricorn
  { key: "r4c1", r: 4, c: 1 }, // 10 Aquarius
  { key: "r3c1", r: 3, c: 1 }, // 11 Pisces
];

const SouthIndianChart: React.FC<Props> = ({
  ascSign,
  placements,
  showHouses = true,
  className = "",
}) => {
  const bySign = useMemo(() => {
    const m = new Map<number, Placement[]>();
    placements.forEach((p) => {
      const arr = m.get(p.sign) ?? [];
      arr.push(p);
      m.set(p.sign, arr);
    });
    return m;
  }, [placements]);

  // Controls the whole chart’s size (4 * cellSize wide, 4 * cellSize tall)
  const cellSize = "80px";

  const renderSignCell = (sign: number, tdKey: string) => {
    const planets = bySign.get(sign) ?? [];
    const isAscSign = sign === ascSign;
    const houseNo = houseOfSign(sign, ascSign);

    return (
      <td key={tdKey} className="p-0 align-top" style={{ width: cellSize }}>
        <div
          className="relative border border-blue-300/30 bg-[#0e1842] text-white"
          style={{ height: cellSize }}
        >
          {/* House badge (top-left) */}
          {showHouses && (
            <div className="absolute top-1 left-1 text-[10px] px-1 py-0.5 rounded bg-blue-300/15">
              H {houseNo}
            </div>
          )}

          {/* Ascendant mark: two parallel diagonals (top-right) */}
          {isAscSign && (
            <div className="absolute top-1 right-1 w-4 h-4 pointer-events-none">
              <div
                className="absolute left-1 top-0 h-[2px] w-3 bg-cyan-300/80"
                style={{ transform: "rotate(45deg)" }}
              />
              <div
                className="absolute left-1 top-2 h-[2px] w-3 bg-cyan-300/80"
                style={{ transform: "rotate(45deg)" }}
              />
            </div>
          )}

          {/* Centered planets */}
          <div className="absolute inset-0 flex items-center justify-center px-1">
            {planets.length === 0 ? (
              <span className="opacity-30 text-xs"></span>
            ) : (
              <div className="flex flex-col items-center gap-[2px] leading-none">
                {planets.map((p, i) => (
                  <span key={`${sign}-${p.planet}-${i}`} className="text-xs font-semibold">
                    {P_LABEL[p.planet]}{p.retro ? " ℞" : ""}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </td>
    );
  };

  const keyToSign = new Map<string, number>();
  CELL_KEYS.forEach((v, idx) => keyToSign.set(v.key, idx));
  const tdFor = (key: string) => renderSignCell(keyToSign.get(key)!, key);

  return (
    <div
      className={[
        "rounded-xl overflow-hidden bg-[#0c1233] text-white shadow-lg",
        "mx-auto",
        className,
      ].join(" ")}
    >
      {/* Perfect square & centered */}
      <div
        className="mx-auto"
        style={{
          width: `calc(${cellSize} * 4)`,
          maxWidth: "100%",
        }}
      >
        <table className="w-full border-collapse" style={{ tableLayout: "fixed" }}>
          {/* Force equal column widths */}
          <colgroup>
            <col style={{ width: cellSize }} />
            <col style={{ width: cellSize }} />
            <col style={{ width: cellSize }} />
            <col style={{ width: cellSize }} />
          </colgroup>

          <tbody>
            {/* Row 1 */}
            <tr>
              {tdFor("r1c1")}
              {tdFor("r1c2")}
              {tdFor("r1c3")}
              {tdFor("r1c4")}
            </tr>

            {/* Row 2 */}
            <tr>
              {tdFor("r2c1")}
              {/* Center (merged) — spans rows 2–3 & cols 2–3 */}
              <td className="p-0 align-top" rowSpan={2} colSpan={2}>
                <div
                  className="border border-blue-300/30 bg-[#0b163b] text-white"
                  style={{ height: `calc(${cellSize} * 2)` }}
                />
              </td>
              {tdFor("r2c4")}
            </tr>

            {/* Row 3 */}
            <tr>
              {tdFor("r3c1")}
              {tdFor("r3c4")}
            </tr>

            {/* Row 4 */}
            <tr>
              {tdFor("r4c1")}
              {tdFor("r4c2")}
              {tdFor("r4c3")}
              {tdFor("r4c4")}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SouthIndianChart;
