// data/spreadLayout.ts

// ---------- Types ----------
export type SlotEntry = {
  col: number;
  row: number;
  yOffset?: number;
  rotate?: number;
  zIndex?: number;
  overlap?: boolean;
};

// ---------- Helper ----------
const MAX_PAIRS_PER_ROW = 5;
const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

// ---------- Function to build angleSpread dynamically ----------
function buildAngleSpread(coreCount: number): Record<string, SlotEntry> {
  // Require 3..10 core Qs to keep the layout nice even if input is small/undefined
  const n = clamp(coreCount, 3, 8);

  const slots: Record<string, SlotEntry> = {
    // Header row
    "Situation": { col: 2, row: 1, yOffset: 40 },
    "Challenge": { col: 3, row: 1, yOffset: 20 },
    "Angle (Overall)": { col: 4, row: 1, yOffset: 0 },
    "Advice": { col: 5, row: 1, yOffset: 20 },
    "Outcome": { col: 6, row: 1, yOffset: 40 },

    // Fixed Life Areas row
    "Health": { col: 1, row: 3, yOffset: 0 },
    "Angle (Health)": { col: 2, row: 3, yOffset: 0 },
    "Wealth": { col: 3, row: 3, yOffset: 0 },
    "Angle (Wealth)": { col: 4, row: 3, yOffset: 0 },
    "Career or Public Image": { col: 5, row: 3, yOffset: 0 },
    "Angle (Career or Public Image)": { col: 6, row: 3, yOffset: 0 },
    "Relationships": { col: 7, row: 3, yOffset: 0 },
    "Angle (Relationships)": { col: 8, row: 3, yOffset: 0 },
  };

  // Add variable number of Core Question + Angle pairs
  // Layout constants for the core/angle pairs
  const MAX_COLS = 8;                          // your grid is 5 columns wide
  const PAIRS_PER_ROW = Math.floor(MAX_COLS / 2); // 2 pairs per row for 5 cols
  const START_ROW = 5;                         // start below your header/areas

  for (let i = 0; i < n; i++) {
    const pairIndex = i % PAIRS_PER_ROW;                // 0,1 then wrap
    const blockIndex = Math.floor(i / PAIRS_PER_ROW);   // row block number
    const baseRow = START_ROW + blockIndex;             // 5,6,7...
    const startCol = pairIndex * 2 + 1;                 // 1,3 then wrap
    const qNum = i + 1;

    // Core and its Angle go NEXT to each other on the same row
    slots[`Core Q${qNum}`] = { col: startCol, row: baseRow };
    slots[`Angle Q${qNum}`] = { col: startCol + 1, row: baseRow, yOffset: 0 };
  }


  return slots;
}


// ---------- Builder (returns all spreads for a given angle core size) ----------
export function getSpreadLayout(coreCount: number = 8) {
  return {
    dailyReflection: {
      "Daily Lesson": { col: 1, row: 1, yOffset: 160 },
      "Challenges": { col: 2, row: 1, yOffset: 80 },
      "Situation": { col: 3, row: 1, yOffset: 0 },
      "Advice": { col: 4, row: 1, yOffset: 80 },
      "Near Future": { col: 5, row: 1, yOffset: 160 },
    },
    revelationSpread: {
      "The Situation": { col: 2, row: 1, yOffset: 80 },
      "You": { col: 3, row: 1, yOffset: 0 },
      "Unseen Forces": { col: 4, row: 1, yOffset: 80 },
      "The Trusted One": { col: 2, row: 2, yOffset: 80 },
      "Self-Sabotage": { col: 3, row: 2, yOffset: 0 },
      "Revelation": { col: 4, row: 2, yOffset: 80 },
    },
    hiddenTruth: {
      "Your Truth": { col: 2, row: 1 },
      "Their Truth": { col: 4, row: 1 },
    },
    timelineSpread: {
      "History": { col: 1, row: 1 },
      "Recent Events": { col: 2, row: 1 },
      "The Present": { col: 3, row: 1 },
      "Near Future": { col: 4, row: 1 },
      "Far Future": { col: 5, row: 1 },
    },
    treeOfLife: {
      "Crown": { col: 3, row: 1 },
      "Activation": { col: 1, row: 1, yOffset: 40 },
      "Contemplation": { col: 5, row: 1, yOffset: 40 },
      "Discipline": { col: 1, row: 3 },
      "Heart": { col: 3, row: 3 },
      "Wisdom": { col: 5, row: 3 },
      "Waking Up": { col: 1, row: 4 },
      "Safety Net": { col: 3, row: 4 },
      "Cycles": { col: 5, row: 4 },
      "Outcome": { col: 3, row: 5 },
    },
    celticCross: {
      "Love Situation": { col: 2, row: 2, zIndex: 1 },
      "Recent Past": { col: 2, row: 2, zIndex: 2, overlap: true, rotate: 90 },
      "Love & Me": { col: 1, row: 2 },
      "Love Challenges": { col: 4, row: 2 },
      "Higher Power": { col: 2, row: 1 },
      "Near Future": { col: 2, row: 3 },
      "Long-Term Potential": { col: 5, row: 1 },
      "Advice": { col: 5, row: 2 },
      "Significant Other": { col: 5, row: 3 },
      "Blockers & Inhibitions": { col: 5, row: 4 },
    },
    sixthSense: {
      "Your Concern": { col: 2, row: 1, rotate: 45 },
      "Your Mindset": { col: 4, row: 1, rotate: -45 },
      "Your Sixth Sense": { col: 3, row: 2 },
      "Your Protection": { col: 4, row: 3, rotate: 45 },
      "Your Blind Spot": { col: 2, row: 3, rotate: -45 },
    },
    twinFlame: {
      "The Mirror": { col: 3, row: 1 },
      "The Spark": { col: 2, row: 1, rotate: -25, yOffset: 40 },
      "The Dynamic": { col: 4, row: 1, rotate: 25, yOffset: 40 },
      "Your Soul Evolution": { col: 3, row: 2 },
    },
    angleSpread: buildAngleSpread(coreCount),
  };

}

// ---------- Derived slot names ----------
export function getSpreadSlotNames(coreCount: number = 10) {
  const layout = getSpreadLayout(coreCount);
  return Object.fromEntries(
    Object.entries(layout).map(([spread, slots]) => [spread, Object.keys(slots)])
  ) as Record<string, string[]>;
}

// Optional default export for convenience
export default getSpreadLayout;
