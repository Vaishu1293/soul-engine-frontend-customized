// spreadLayout.ts

// ---------- Types ----------
type SlotEntry = {
  col: number;
  row: number;
  yOffset?: number;
  rotate?: number;
  zIndex?: number;
  overlap?: boolean;
};

// ---------- Helper ----------
const MAX_PAIRS_PER_ROW = 5;
const clamp = (n: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, n));

// ---------- Function to build angleSpread dynamically ----------
function buildAngleSpread(coreCount: number): Record<string, SlotEntry> {
  const n = clamp(coreCount, 3, 10);

  const slots: Record<string, SlotEntry> = {
    // Header row (mirroring your design style)
    "Situation": { col: 1, row: 1, yOffset: 120 },
    "Challenge": { col: 2, row: 1, yOffset: 60 },
    "Advice": { col: 3, row: 1, yOffset: 0 },
    "Outcome": { col: 4, row: 1, yOffset: 60 },
    "Angle (Overall)": { col: 5, row: 1, yOffset: 120 },

    // Fixed Life Areas row
    "Health": { col: 1, row: 2 },
    "Wealth": { col: 2, row: 2 },
    "Career or Public Image": { col: 3, row: 2 },
    "Relationships": { col: 4, row: 2 },

    // Angle cards for Life Areas
    "Angle (Health)": { col: 1, row: 3, yOffset: 40 },
    "Angle (Wealth)": { col: 2, row: 3, yOffset: 40 },
    "Angle (Career or Public Image)": { col: 3, row: 3, yOffset: 40 },
    "Angle (Relationships)": { col: 4, row: 3, yOffset: 40 },
  };

  // Add variable number of Core Question + Angle pairs
  for (let i = 0; i < n; i++) {
    const col = (i % MAX_PAIRS_PER_ROW) + 1;
    const blockIndex = Math.floor(i / MAX_PAIRS_PER_ROW);
    const baseRow = 4 + blockIndex * 2;
    const qNum = i + 1;

    slots[`Core Q${qNum}`] = { col, row: baseRow };
    slots[`Angle Q${qNum}`] = { col, row: baseRow + 1, yOffset: 40 };
  }

  return slots;
}

// ---------- All Spreads ----------
const spreadLayout = {
  dailyReflection: {
    "Daily Lesson": { col: 1, row: 1, yOffset: 160 },
    "Challenges": { col: 2, row: 1, yOffset: 80 },
    "Situation": { col: 3, row: 1, yOffset: 0 }, // center raised
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
    // Top crown
    "Crown": { col: 3, row: 1 },

    // Level 2
    "Activation": { col: 1, row: 1, yOffset: 40 },
    "Contemplation": { col: 5, row: 1, yOffset: 40 },

    // Level 3
    "Discipline": { col: 1, row: 3 },
    "Heart": { col: 3, row: 3 },
    "Wisdom": { col: 5, row: 3 },

    // Level 4
    "Waking Up": { col: 1, row: 4 },
    "Safety Net": { col: 3, row: 4 },
    "Cycles": { col: 5, row: 4 },

    // Final card at base
    "Outcome": { col: 3, row: 5 },
  },
  celticCross: {
    // Center cross
    "Love Situation": { col: 2, row: 2, zIndex: 1 },
    "Recent Past": { col: 2, row: 2, zIndex: 2, overlap: true, rotate: 90 }, // overlaps center

    // Cross arms
    "Love & Me": { col: 1, row: 2 },
    "Love Challenges": { col: 4, row: 2 },
    "Higher Power": { col: 2, row: 1 },
    "Near Future": { col: 2, row: 3 },

    // Right vertical column
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
    "The Mirror": { col: 3, row: 1 }, // Top center
    "The Spark": { col: 2, row: 1, rotate: -25, yOffset: 40 },
    "The Dynamic": { col: 4, row: 1, rotate: 25, yOffset: 40 },
    "Your Soul Evolution": { col: 3, row: 2 },
  },

  // -------- NEW SPREAD ADDED HERE --------
  angleSpread: buildAngleSpread(10), // Default 10 core questions (change dynamically in UI)
};

// ---------- Derived slot names ----------
export const spreadSlotNames = Object.fromEntries(
  Object.entries(spreadLayout).map(([spread, slots]) => [
    spread,
    Object.keys(slots),
  ])
);

export default spreadLayout;
