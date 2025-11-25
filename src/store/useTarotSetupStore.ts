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
  partnerMotivation: string[] | null;

  // Setters
  setTimeframe: (tf: Timeframe) => void;
  setAreaOfInterest: (area: string) => void;
  setUserCoreQ: (q: string[]) => void;
  setPartnerCoreQ: (q: string[]) => void;
  setPartnerMotivation: (q: string[]) => void;

  reset: () => void;
};

export const useTarotSetupStore = create<TarotSetupState>((set: any) => ({
  timeframe: null,
  areaOfInterest: null,
  userCoreQuestions: [],
  partnerCoreQuestions: [],
  partnerMotivation: null,

  // setters
  setTimeframe: (tf: any) => set({ timeframe: tf }),
  setAreaOfInterest: (area: any) => set({ areaOfInterest: area }),
  setUserCoreQ: (q: any) => set({ userCoreQuestions: q }),
  setPartnerCoreQ: (q: any) => set({ partnerCoreQuestions: q }),
  setPartnerMotivation: (q: any) => set({ partnerMotivation: q }),

  reset: () =>
    set({
      timeframe: null,
      areaOfInterest: null,
      userCoreQuestions: [],
      partnerCoreQuestions: [],
      partnerMotivation: null,
    }),
}));
