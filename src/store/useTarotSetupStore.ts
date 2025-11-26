import { create } from "zustand";

type Timeframe = {
  type: "day" | "week" | "phase" | "month" | "period";
  start: string;
  end?: string;
};

type TarotSetupState = {
  timeframe: Timeframe | null;
  areaOfInterest: string | null;
  userCoreQuestions: string[];
  partnerCoreQuestions: string[];
  partnerMotivation: string[];

  // Setters
  setTimeframe: (tf: Timeframe) => void;
  setAreaOfInterest: (area: string) => void;
  setUserCoreQ: (q: string[]) => void;
  setPartnerCoreQ: (q: string[]) => void;
  setPartnerMotivation: (q: string[]) => void;

  reset: () => void;
};

export const useTarotSetupStore = create<TarotSetupState>((set) => ({
  timeframe: null,
  areaOfInterest: null,
  userCoreQuestions: [],
  partnerCoreQuestions: [],         // FIXED ✔ always array
  partnerMotivation: [],            // FIXED ✔ always array

  // setters
  setTimeframe: (tf) => set({ timeframe: tf }),
  setAreaOfInterest: (area) => set({ areaOfInterest: area }),
  setUserCoreQ: (q) => set({ userCoreQuestions: q }),
  setPartnerCoreQ: (q) => set({ partnerCoreQuestions: q }),
  setPartnerMotivation: (q) => set({ partnerMotivation: q }),

  reset: () =>
    set({
      timeframe: null,
      areaOfInterest: null,
      userCoreQuestions: [],
      partnerCoreQuestions: [],
      partnerMotivation: [],
    }),
}));
