// const spreadLayout = {
//   celticCross: {
//     Self: [1, 2],
//     "Higher Power": [2, 1],
//     Situation: [2, 2],
//     "Recent Past": [2, 3],
//     "Near Future": [2, 4],
//     Challenges: [3, 2],
//     "Long-Term Potential": [4, 1],
//     Advice: [4, 2],
//     Allies: [4, 3],
//     "Blockers & Inhibitions": [4, 4],
//   },
//   weeklyRevelation: {
//     Theme: [1, 2],
//     Action: [2, 1],
//     Challenge: [2, 3],
//     Support: [3, 1],
//     Outcome: [3, 3],
//   },
//   quarterlyReflection: {
//     Past: [2, 1],
//     Present: [2, 2],
//     Future: [2, 3],
//   },
//   dailyReflection: {
//   "Daily Lesson": [1, 3],
//   "Challenges": [2, 2],
//   "Situation": [3, 1],
//   "Advice": [4, 2],
//   "Near Future": [5, 3],
// }
// };

// spreadLayout.ts
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
    "The Mirror": { col: 3, row: 1 },              // Top center
    "The Spark": { col: 2, row: 1, rotate: -25, yOffset: 40 }, // Left tilted inward
    "The Dynamic": { col: 4, row: 1, rotate: 25, yOffset: 40 },  // Right tilted inward
    "Your Soul Evolution": { col: 3, row: 2 },              // Bottom center
  }

};


// derived slot names
export const spreadSlotNames = Object.fromEntries(
  Object.entries(spreadLayout).map(([spread, slots]) => [
    spread,
    Object.keys(slots),
  ])
);


export default spreadLayout;
