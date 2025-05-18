// spreadLayout.ts
// Contains coordinate maps for multiple spread types

const spreadLayout = {
  celticCross: {
    Self: [1, 2],
    "Higher Power": [2, 1],
    Situation: [2, 2],
    "Recent Past": [2, 3],
    "Near Future": [2, 4],
    Challenges: [3, 2],
    "Long-Term Potential": [4, 1],
    Advice: [4, 2],
    Allies: [4, 3],
    "Blockers & Inhibitions": [4, 4],
  },

  weeklyRevelation: {
    Theme: [1, 2],
    Action: [2, 1],
    Challenge: [2, 3],
    Support: [3, 1],
    Outcome: [3, 3],
  },

  quarterlyReflection: {
    Past: [2, 1],
    Present: [2, 2],
    Future: [2, 3],
  },

  dailyReflection: {
    Reflection: [2, 2],
  },
};

export default spreadLayout;
