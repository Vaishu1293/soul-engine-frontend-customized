"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchWithAuth } from "@/utils/fetchWithAuth";
import getSpreadLayout, {
  getSpreadSlotNames,
  SlotEntry,
} from "@/data/spreadLayout";

// ⭐ NEW: Zustand store (Angular-like observable)
import { useTarotSetupStore } from "@/store/useTarotSetupStore";

type SpreadKey = "angleSpread";
type SlotMap = Record<string, SlotEntry>;

/**
 * ⭐ useTarotDraw Hook
 *
 * This hook manages:
 *  - shuffling logic
 *  - deck select logic
 *  - card selection for angle spread
 *  - auto-rotation / reversed assignment
 *  - layout building (spreadSlot positions)
 *  - submission to backend
 *
 * REFACTORED:
 *  - Removed sessionStorage / localStorage
 *  - Removed URL timeframe / tarotPayload
 *  - Reads all tarot metadata from Zustand observables:
 *     - timeframe
 *     - core questions
 *     - partner core questions
 *     - partner motivation
 *     - area of interest
 */
export function useTarotDraw(isRegisterForm: boolean) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Ref for screenshot & animations
  const spreadRef = useRef<HTMLDivElement | null>(null);

  // -------------------------
  // 🔥 URL Params (Only minimal safe params)
  // -------------------------
  const spreadType = (searchParams.get("spread") ||
    "angleSpread") as "angleSpread";

  const roleParam =
    (searchParams.get("role") as "user" | "partner" | null) ?? "user";

  // -------------------------
  // ⭐ Zustand: Tarot Meta State
  // Replaces tarotPayload + timeframeParam + URL passing
  // -------------------------
  const timeframe = useTarotSetupStore((s) => s.timeframe);
  const areaOfInterest = useTarotSetupStore((s) => s.areaOfInterest);
  const userCoreQuestions = useTarotSetupStore((s) => s.userCoreQuestions);
  const partnerCoreQuestions = useTarotSetupStore(
    (s) => s.partnerCoreQuestions
  );
  const partnerMotivation = useTarotSetupStore((s) => s.partnerMotivation);

  // -------------------------
  // INTERNAL UI STATE
  // -------------------------
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardIndexes, setCardIndexes] = useState<number[]>([]);
  const [highlightedCards, setHighlightedCards] = useState<number[]>([]);
  const [selectedDeck, setSelectedDeck] = useState("");
  const [tarotDecks, setTarotDecks] = useState<
    { value: string; label: string }[]
  >([]);
  const [spread, setSpread] = useState<{
    [slot: string]: { card: number; reversed: boolean };
  }>({});
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [cardInfo, setCardInfo] = useState<{ id: number; name: string }[]>([]);
  const [cardOrientations, setCardOrientations] = useState<{
    [cardId: number]: boolean;
  }>({});

  // -------------------------
  // ⭐ Calculate dynamic number of core questions
  // This determines number of extra angle slots
  // -------------------------
  const angleCoreCount = useMemo(() => {
    if (roleParam === "partner") return partnerCoreQuestions.length;
    return userCoreQuestions.length;
  }, [roleParam, userCoreQuestions, partnerCoreQuestions]);

  // -------------------------
  // Build dynamic spread layout
  // -------------------------
  const layoutAllSpreads = useMemo(
    () => getSpreadLayout(angleCoreCount),
    [angleCoreCount]
  );

  const slotNamesAll = useMemo(
    () => getSpreadSlotNames(angleCoreCount),
    [angleCoreCount]
  );

  const spreadSlots = slotNamesAll["angleSpread"] as string[];
  const layoutMap: SlotMap = layoutAllSpreads["angleSpread"] as SlotMap;

  // -------------------------
  // 🎴 Card selection logic
  // -------------------------
  const handleCardSelect = (cardNumber: number) => {
    if (selectedCards.includes(cardNumber)) return;
    if (selectedCards.length >= spreadSlots.length) return;

    const nextSlot = spreadSlots[selectedCards.length];
    const isReversed = !!cardOrientations[cardNumber];

    setSpread((prev) => ({
      ...prev,
      [nextSlot]: { card: cardNumber, reversed: isReversed },
    }));

    setSelectedCards((prev) => [...prev, cardNumber]);
  };

  // -------------------------
  // 🔁 Shuffle animations
  // -------------------------
  const shuffleArray = (length: number): number[] => {
    const array = Array.from({ length }, (_, i) => i + 1);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleShuffle = () => {
    setSpread({});
    setSelectedCards([]);

    // Random reversed assignment
    const orientations: { [cardId: number]: boolean } = {};
    for (let i = 1; i <= 78; i++) {
      orientations[i] = Math.random() < 0.04; // 4% reversed
    }
    setCardOrientations(orientations);

    setIsShuffling(true);
  };

  // Shuffle animations timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isShuffling) {
      const doShuffle = () => {
        const shuffled = shuffleArray(78);
        setCardIndexes(shuffled);

        const highlights = shuffled
          .slice()
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.floor(Math.random() * 3) + 4);

        setHighlightedCards(highlights);
      };

      doShuffle();
      interval = setInterval(doShuffle, 500);
    } else {
      setCardIndexes(Array.from({ length: 78 }, (_, i) => i + 1));
      setHighlightedCards([]);
    }

    return () => clearInterval(interval);
  }, [isShuffling]);

  // -------------------------
  // 🃏 Load tarot decks + card info
  // -------------------------
  useEffect(() => {
    fetch("/data/tarotDecks.json")
      .then((res) => res.json())
      .then((data) => setTarotDecks(data))
      .catch((err) => console.error("Error loading deck list:", err));

    fetch("/data/rider-waite-card-info.json")
      .then((res) => res.json())
      .then((data) => setCardInfo(data))
      .catch((err) => console.error("Error loading card info:", err));
  }, []);

  // Stop shuffle when spread slots are filled
  useEffect(() => {
    if (selectedCards.length === spreadSlots.length) {
      setIsShuffling(false);
    }
  }, [selectedCards, spreadSlots.length]);

  // -------------------------
  // 🚀 Submit spread to backend
  // -------------------------
  const handleSubmit = async () => {
    const cards = spreadSlots.map((slot: string) => {
      const data = spread[slot];
      const cardName =
        cardInfo.find((c) => c.id === data.card)?.name || `Card ${data.card}`;
      return { slot, name: cardName, reversed: data.reversed };
    });

    // Select correct meta for role
    const meta =
      roleParam === "partner"
        ? {
            role: "partner",
            coreQuestions: partnerCoreQuestions,
            motivation: partnerMotivation,
          }
        : {
            role: "user",
            coreQuestions: userCoreQuestions,
          };

    const payload = {
      timeframe, // full object { type, start, end? }
      areaOfInterest,
      deck:
        tarotDecks.find((d) => d.value === selectedDeck)?.label || selectedDeck,
      spreadType: "angleSpread",
      cards,
      ...meta,
    };

    try {
      const response = await fetchWithAuth(
        "http://localhost:5000/api/tarot/analyze-tarot",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok)
        throw new Error("Failed to send tarot reading to backend");

      await response.json();

      // -------------------------
      // ⚡ Registration Flow
      // -------------------------
      const aoi = (areaOfInterest || "").toLowerCase();

      // If user AND relationship AND partner questions exist → run partner
      if (isRegisterForm && roleParam === "user") {
        if (
          aoi === "relationship" &&
          partnerCoreQuestions &&
          partnerCoreQuestions.length > 0
        ) {
          console.log("Proceeding to partner's angle spread...");

          setTimeout(() => {
            router.push(
              `/tarot-draw?spread=angleSpread&fromRegister=true&role=partner`
            );
          }, 1200);

          return;
        }
      }

      // Final step
      console.log("Tarot flows complete → Navigating to dashboard");
      setTimeout(() => router.push("/dashboard"), 1200);
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  // -------------------------
  // Return hook API
  // -------------------------
  return {
    spreadRef,
    isShuffling,
    cardIndexes,
    highlightedCards,
    selectedDeck,
    tarotDecks,
    spread,
    selectedCards,
    cardInfo,
    spreadSlots,
    layoutMap,
    setSelectedDeck,
    handleCardSelect,
    handleShuffle,
    handleSubmit,
    role: roleParam,
  };
}
