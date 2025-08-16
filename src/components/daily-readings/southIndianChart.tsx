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

/** Short planet labels */
const P_LABEL: Record<Planet, string> = {
  Asc:"Asc", Sun:"Sun", Moon:"Moon", Mars:"Mar", Mercury:"Mer", Jupiter:"Jup",
  Venus:"Ven", Saturn:"Sat", Rahu:"Rahu", Ketu:"Ketu", Uranus:"Ura", Neptune:"Nep", Pluto:"Plu",
};

function houseOfSign(sign: number, ascSign: number): number {
  return ((sign - ascSign + 12) % 12) + 1;
}

/**
 * Perimeter mapping (clockwise), center is merged.
 * We place Aries (0) at r2c1 and go clockwise.
 *
 * Row 1:  r1c1  r1c2  r1c3  r1c4
 * Row 2:  r2c1  [center spans r2c2 r2c3 r3c2 r3c3]  r2c4
 * Row 3:  r3c1                                      r3c4
 * Row 4:  r4c1  r4c2  r4c3  r4c4
 */
const CELL_KEYS: Array<{ key: string; r: number; c: number }> = [
  { key: "r2c1", r: 2, c: 1 }, // Aries (0)
  { key: "r1c1", r: 1, c: 1 }, // Taurus (1)
  { key: "r1c2", r: 1, c: 2 }, // Gemini (2)
  { key: "r1c3", r: 1, c: 3 }, // Cancer (3)
  { key: "r1c4", r: 1, c: 4 }, // Leo (4)
  { key: "r2c4", r: 2, c: 4 }, // Virgo (5)
  { key: "r3c4", r: 3, c: 4 }, // Libra (6)
  { key: "r4c4", r: 4, c: 4 }, // Scorpio (7)
  { key: "r4c3", r: 4, c: 3 }, // Sagittarius (8)
  { key: "r4c2", r: 4, c: 2 }, // Capricorn (9)
  { key: "r4c1", r: 4, c: 1 }, // Aquarius (10)
  { key: "r3c1", r: 3, c: 1 }, // Pisces (11)
];

const SouthIndianChart: React.FC<Props> = ({
  ascSign,
  placements,
  showHouses = true,
  className = "",
}) => {
  // group planets by sign for quick lookup
  const bySign = useMemo(() => {
    const m = new Map<number, Placement[]>();
    placements.forEach(p => {
      const arr = m.get(p.sign) ?? [];
      arr.push(p);
      m.set(p.sign, arr);
    });
    return m;
  }, [placements]);

  // size for each small cell (center becomes 2x tall)
  const cellSize = "80px";

  // Render a perimeter cell for a given sign index
  const renderSignCell = (sign: number, tdKey: string) => {
    const planets = bySign.get(sign) ?? [];
    const isAscSign = sign === ascSign;
    const houseNo = houseOfSign(sign, ascSign);

    return (
      <td key={tdKey} className="p-0 align-top">
        <div
          className="relative border border-blue-300/30 bg-[#0e1842] text-white"
          style={{ height: cellSize }}
        >
          {/* House badge (top-left) */}
          {showHouses && (
            <div className="absolute top-1 left-1 text-[10px] px-1 py-0.5 rounded bg-blue-300/15 border border-blue-300/30">
              H{houseNo}
            </div>
          )}

          {/* Ascendant mark (two parallel mini-lines) at top-right */}
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
              <span className="opacity-30 text-xs">—</span>
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

  // helpers for blank corner cells if you still want them elsewhere
  const blank = (key: string) => (
    <td key={key} className="p-0 align-top">
      <div
        className="border border-blue-300/30 bg-[#0b163b] text-white"
        style={{ height: cellSize }}
      />
    </td>
  );

  // Build a quick map from td key -> sign index
  const keyToSign = new Map<string, number>();
  CELL_KEYS.forEach((v, idx) => keyToSign.set(v.key, idx));

  // td render helpers that route to the right sign
  const tdFor = (key: string) => renderSignCell(keyToSign.get(key)!, key);

  return (
    <div
      className={[
        "rounded-xl overflow-hidden bg-[#0c1233] text-white shadow-lg",
        "mx-auto",
        className,
      ].join(" ")}
    >
      {/* Fixed-width wrapper so the table is a perfect square and centered */}
      <div
        className="mx-auto"
        style={{
          width: `calc(${cellSize} * 4)`,
          maxWidth: "100%",
        }}
      >
        <table className="w-full table-fixed border-collapse">
          <tbody>
            {/* Row 1 */}
            <tr>
              {tdFor("r1c1")} {/* Taurus (1) */}
              {tdFor("r1c2")} {/* Gemini (2) */}
              {tdFor("r1c3")} {/* Cancer (3) */}
              {tdFor("r1c4")} {/* Leo (4) */}
            </tr>

            {/* Row 2 */}
            <tr>
              {tdFor("r2c1")} {/* Aries (0) */}

              {/* Center (merged) — spans rows 2–3 & cols 2–3 */}
              <td className="p-0 align-top" rowSpan={2} colSpan={2}>
                <div
                  className="border border-blue-300/30 bg-[#0b163b] text-white"
                  style={{ height: `calc(${cellSize} * 2)` }}
                />
              </td>

              {tdFor("r2c4")} {/* Virgo (5) */}
            </tr>

            {/* Row 3 */}
            <tr>
              {tdFor("r3c1")} {/* Pisces (11) */}
              {tdFor("r3c4")} {/* Libra (6) */}
            </tr>

            {/* Row 4 */}
            <tr>
              {tdFor("r4c1")} {/* Aquarius (10) */}
              {tdFor("r4c2")} {/* Capricorn (9) */}
              {tdFor("r4c3")} {/* Sagittarius (8) */}
              {tdFor("r4c4")} {/* Scorpio (7) */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SouthIndianChart;
