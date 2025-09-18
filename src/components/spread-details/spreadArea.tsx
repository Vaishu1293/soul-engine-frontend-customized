"use client"
import React, { useMemo } from "react";
import 'swiper/css/bundle';
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import SpreadRenderer from "../tarot/spreads/spreadRenderer";

interface SpreadAreaProps {
    title: string;
    spreadName: string;
}

type SpreadType =
  | "dailyReflection"
  | "revelationSpread"
  | "hiddenTruth"
  | "timelineSpread"
  | "treeOfLife"
  | "celticCross"
  | "sixthSense"
  | "twinFlame";

type SpreadCell = {
  card: number;
  reversed?: boolean;
  rotate?: number;
  yOffset?: number;
  overlap?: boolean;
  zIndex?: number;
};

type SpreadData = Record<string, SpreadCell>;

type CardMeta = { id: number; name: string };

interface SpreadAreaProps {
  title: string;
}

/** Optional: centralize card name lookup (extend to full 78 later) */
const CARD_INDEX: Record<number, string> = {
  0: "The Fool",
  1: "The Magician",
  2: "The High Priestess",
  3: "The Empress",
  4: "The Emperor",
  5: "The Hierophant",
  6: "The Lovers",
  7: "The Chariot",
  8: "Strength",
  9: "The Hermit",
  10: "Wheel of Fortune",
  11: "Justice",
  12: "The Hanged Man",
  13: "Death",
  14: "Temperance",
  15: "The Devil",
  16: "The Tower",
  17: "The Star",
  18: "The Moon",
  19: "The Sun",
  20: "Judgement",
  21: "The World",
};

/** Helper to convert display titles to layout keys */
function normalizeTitle(title: string): SpreadType | null {
  const t = title.trim().toLowerCase();
  if (["daily", "daily reflection", "my daily reflection", "daily-readings"].includes(t)) return "dailyReflection";
  if (["revelation", "revelation spread"].includes(t)) return "revelationSpread";
  if (["hidden truth", "hiddentruth"].includes(t)) return "hiddenTruth";
  if (["timeline", "timeline spread", "timeline-readings"].includes(t)) return "timelineSpread";
  if (["tree of life", "treeoflife", "tree-of-life"].includes(t)) return "treeOfLife";
  if (["celtic cross", "celticcross", "cletic-cross"].includes(t)) return "celticCross";
  if (["sixth sense", "sixthsense"].includes(t)) return "sixthSense";
  if (["twin flame", "twinflame"].includes(t)) return "twinFlame";
  return null;
}

/** Define the example spreads per type (you can wire real draws here) */
const SPREAD_PRESETS: Record<
  SpreadType,
  { spread: SpreadData; defaultCardIds: number[] }
> = {
  dailyReflection: {
    spread: {
      "Daily Lesson": { card: 1, reversed: false },
      "Challenges": { card: 12, reversed: true },
      "Situation": { card: 7, reversed: false },
      "Advice": { card: 19, reversed: false },
      "Near Future": { card: 4, reversed: true },
    },
    defaultCardIds: [1, 12, 7, 19, 4],
  },
  revelationSpread: {
    spread: {
      "The Situation": { card: 9 },
      "You": { card: 1 },
      "Unseen Forces": { card: 3 },
      "The Trusted One": { card: 2 },
      "Self-Sabotage": { card: 17, reversed: true },
      "Revelation": { card: 20 },
    },
    defaultCardIds: [9, 1, 3, 2, 17, 20],
  },
  hiddenTruth: {
    spread: {
      "Your Truth": { card: 11 },
      "Their Truth": { card: 18, reversed: true },
    },
    defaultCardIds: [11, 18],
  },
  timelineSpread: {
    spread: {
      "History": { card: 10 },
      "Recent Events": { card: 16 },
      "The Present": { card: 14 },
      "Near Future": { card: 6 },
      "Far Future": { card: 21 },
    },
    defaultCardIds: [10, 16, 14, 6, 21],
  },
  treeOfLife: {
    spread: {
      "Crown": { card: 19 },
      "Activation": { card: 7 },
      "Contemplation": { card: 9 },
      "Discipline": { card: 4 },
      "Heart": { card: 6 },
      "Wisdom": { card: 2 },
      "Waking Up": { card: 0 },
      "Safety Net": { card: 14 },
      "Cycles": { card: 10 },
      "Outcome": { card: 21 },
    },
    defaultCardIds: [19, 7, 9, 4, 6, 2, 0, 14, 10, 21],
  },
  celticCross: {
    spread: {
      "Love Situation": { card: 6 },
      "Recent Past": { card: 13, rotate: 90, overlap: true, zIndex: 2 },
      "Love & Me": { card: 1 },
      "Love Challenges": { card: 15 },
      "Higher Power": { card: 5 },
      "Near Future": { card: 3 },
      "Long-Term Potential": { card: 17 },
      "Advice": { card: 14 },
      "Significant Other": { card: 2 },
      "Blockers & Inhibitions": { card: 12, reversed: true },
    },
    defaultCardIds: [6, 13, 1, 15, 5, 3, 17, 14, 2, 12],
  },
  sixthSense: {
    spread: {
      "Your Concern": { card: 18, rotate: 45 },
      "Your Mindset": { card: 11, rotate: -45 },
      "Your Sixth Sense": { card: 2 },
      "Your Protection": { card: 8, rotate: 45 },
      "Your Blind Spot": { card: 16, rotate: -45 },
    },
    defaultCardIds: [18, 11, 2, 8, 16],
  },
  twinFlame: {
    spread: {
      "The Mirror": { card: 19 },
      "The Spark": { card: 1, rotate: -25 },
      "The Dynamic": { card: 15, rotate: 25 },
      "Your Soul Evolution": { card: 20 },
    },
    defaultCardIds: [19, 1, 15, 20],
  },
};

const makeCardInfo = (ids: number[]): CardMeta[] =>
  [...new Set(ids)].map((id) => ({ id, name: CARD_INDEX[id] ?? `Card #${id}` }));

const SpreadArea: React.FC<SpreadAreaProps> = ({ title, spreadName }) => {
  useFlashlightAnimation();

  const { spreadType, spread, cardInfo } = useMemo(() => {
    const key = normalizeTitle(spreadName);
    const fallback: SpreadType = "dailyReflection";
    const chosenKey = key ?? fallback;
    const preset = SPREAD_PRESETS[chosenKey];
    return {
      spreadType: chosenKey as SpreadType,
      spread: preset.spread,
      cardInfo: makeCardInfo(preset.defaultCardIds),
    };
  }, [title]);

  return (
    <>
      <div className="dashboard-reflection-wrapper light-effect mt-4 p-6 rounded-xl bg-gradient-to-r from-[#271152] to-[#150624] text-white max-w-5xl mx-auto">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="rounded-xl p-6 md:p-8 text-white"
              style={{
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
                borderBottomLeftRadius: "25px",
                borderBottomRightRadius: "25px",
              }}
            >
              <div
                className="row rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #3a1c71 0%, #5b3abf 50%, #302b63 100%)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  borderTopLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
              >
                <div className="col-lg-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 m-4 p-4">
                    <div>
                      <p className="text-blue-300 text-xl">Today’s Vibe</p>
                      <h3 className="text-2xl font-bold">
                        {title || "My Daily Reflection"}
                      </h3>
                      <p className="text-xl text-gray-300 mb-4">
                        {/* Replace with real date */}
                        June 23, 2025
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-9">
                  <div className="flex flex-col md:items-end m-4 p-4">
                    <div className="w-full md:w-auto">
                      <SpreadRenderer
                        spread={spread}
                        cardInfo={cardInfo}
                        spreadType={spreadType}
                      />
                      {/* Optional: a tiny helper note if title was unknown */}
                      {normalizeTitle(spreadName) === null && (
                        <p className="mt-3 text-sm text-blue-200/80">
                          Unknown spread title “{title}”. Showing Daily
                          Reflection by default.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpreadArea;

