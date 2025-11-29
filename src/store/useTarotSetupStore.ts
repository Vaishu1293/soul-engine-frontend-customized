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
  thirdPartyCoreQuestions: string[];
  partnerMotivation: string[];
  isSuperUser: boolean;

  // Setters
  setTimeframe: (tf: Timeframe) => void;
  setAreaOfInterest: (area: string) => void;
  setUserCoreQ: (q: string[]) => void;
  setPartnerCoreQ: (q: string[]) => void;
  setThirdPartyCoreQ: (q: string[]) => void;
  setPartnerMotivation: (q: string[]) => void;
  setIsSuperuser: (q: boolean) => void;

  reset: () => void;
};

export const useTarotSetupStore = create<TarotSetupState>((set) => ({
  timeframe: null,
  areaOfInterest: null,
  userCoreQuestions: [],
  partnerCoreQuestions: [],  
  thirdPartyCoreQuestions: [],       // FIXED ✔ always array
  partnerMotivation: [],  
  isSuperUser: false,          // FIXED ✔ always array

  // setters
  setTimeframe: (tf) => set({ timeframe: tf }),
  setAreaOfInterest: (area) => set({ areaOfInterest: area }),
  setUserCoreQ: (q) => set({ userCoreQuestions: q }),
  setPartnerCoreQ: (q) => set({ partnerCoreQuestions: q }),
  setThirdPartyCoreQ: (q) => set({ thirdPartyCoreQuestions: q }),
  setPartnerMotivation: (q) => set({ partnerMotivation: q }),
  setIsSuperuser: (q) => set({ isSuperUser: q }),

  reset: () =>
    set({
      timeframe: null,
      areaOfInterest: null,
      userCoreQuestions: [],
      partnerCoreQuestions: [],
      thirdPartyCoreQuestions: [],
      partnerMotivation: [],
      isSuperUser: false,
    }),
}));
