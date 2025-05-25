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
  // Add others...
};


// derived slot names
export const spreadSlotNames = Object.fromEntries(
  Object.entries(spreadLayout).map(([spread, slots]) => [
    spread,
    Object.keys(slots),
  ])
);


export default spreadLayout;
