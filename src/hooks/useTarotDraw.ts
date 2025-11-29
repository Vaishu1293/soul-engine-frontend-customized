"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchWithAuth } from "@/utils/fetchWithAuth";
import getSpreadLayout, {
  getSpreadSlotNames,
  SlotEntry,
} from "@/data/spreadLayout";

// Zustand store (central app state)
import { useTarotSetupStore } from "@/store/useTarotSetupStore";

type SpreadKey = "angleSpread";
type SlotMap = Record<string, SlotEntry>;

export function useTarotDraw(isRegisterForm: boolean) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const spreadRef = useRef<HTMLDivElement | null>(null);

  const urlSpreadType = (searchParams.get("spread") ||
    "angleSpread") as "angleSpread";

  const roleParam =
    (searchParams.get("role") as "user" | "partner" | "third-party" | null) ?? "user";

  const effectiveSpreadType: SpreadKey = isRegisterForm
    ? "angleSpread"
    : urlSpreadType;

  // Zustand state
  const timeframe = useTarotSetupStore((s) => s.timeframe);
  const isSuperUser = useTarotSetupStore((s) => s.isSuperUser);
  const areaOfInterest = useTarotSetupStore((s) => s.areaOfInterest);
  const userCoreQuestions = useTarotSetupStore((s) => s.userCoreQuestions);
  const partnerCoreQuestions = useTarotSetupStore(
    (s) => s.partnerCoreQuestions
  );
  const thirdPartyCoreQuestions = useTarotSetupStore(
    (s) => s.thirdPartyCoreQuestions
  );
  const partnerMotivation = useTarotSetupStore((s) => s.partnerMotivation);

  const [isShuffling, setIsShuffling] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // ----------------------------------------------------------
  // ⭐ DEBUG LOG – check whatcomes from Zustand
  // ----------------------------------------------------------
  console.log("🟣 Zustand → userCoreQuestions:", userCoreQuestions);
  console.log("🟣 Zustand → partnerCoreQuestions:", partnerCoreQuestions);
  console.log("🟣 Zustand → thirdPartyCoreQuestions:", thirdPartyCoreQuestions);
  console.log("🟣 Zustand → isSuperUser:", isSuperUser);
  console.log("🟣 Zustand → areaOfInterest:", areaOfInterest);
  console.log("🟣 Current role:", roleParam);

  // -------------------------
  // ⭐ Dynamic spread slot count (based on role)
  // -------------------------
  const angleCoreCount =
    roleParam === "partner"
      ? (Array.isArray(partnerCoreQuestions)
        ? partnerCoreQuestions.length
        : 0)
      : roleParam === "third-party"
        ? (Array.isArray(thirdPartyCoreQuestions)
          ? thirdPartyCoreQuestions.length
          : 0)
        : (Array.isArray(userCoreQuestions)
          ? userCoreQuestions.length
          : 0);

  // console.log("🟡 angleCoreCount:", angleCoreCount);

  // -------------------------
  // Build spread layout
  // -------------------------
  const layoutAllSpreads = useMemo(() => {
    // console.log("🔵 Rebuilding layout via getSpreadLayout with count:", angleCoreCount);
    return getSpreadLayout(angleCoreCount);
  }, [angleCoreCount]);

  const slotNamesAll = useMemo(() => {
    // console.log("🟠 Rebuilding slotNames via getSpreadSlotNames with count:", angleCoreCount);
    return getSpreadSlotNames(angleCoreCount);
  }, [angleCoreCount]);

  const spreadSlots =
    slotNamesAll[effectiveSpreadType] as string[];
  const layoutMap: SlotMap =
    layoutAllSpreads[effectiveSpreadType] as SlotMap;

  // SUPER USER: listen to manual card assignment
  // SUPER USER: manual card selection
  useEffect(() => {
    const handler = (e: any) => {
      const { slot, card, reversed } = e.detail;

      // 1️⃣ update spread
      setSpread(prev => ({
        ...prev,
        [slot]: { card, reversed }
      }));

      // 2️⃣ update selectedCards in correct slot order
      setSelectedCards(prev => {
        const slotIndex = spreadSlots.indexOf(slot);
        if (slotIndex === -1) return prev;

        const newArr = [...prev];
        newArr[slotIndex] = card;   // important
        return newArr;
      });
    };

    window.addEventListener("superUserCardSelect", handler);
    return () =>
      window.removeEventListener("superUserCardSelect", handler);
  }, [spreadSlots]);



  // ----------------------------------------------------------
  // ⭐ DEBUG LOG — Verify layout and slots
  // ----------------------------------------------------------
  // console.log("🔺 spreadSlots:", spreadSlots);
  // console.log("🔺 layoutMap:", layoutMap);

  // -------------------------
  // Reset state on role + core count change
  // -------------------------
  useEffect(() => {
    // console.log("⚡ RESET triggered because role or core count changed");
    // console.log("⚡ role:", roleParam, "coreCount:", angleCoreCount);

    setSpread({});
    setSelectedCards([]);
    setCardOrientations({});
    setSelectedDeck("");
    setIsShuffling(false);
    setHighlightedCards([]);
    setCardIndexes([...Array(78)].map((_, i) => i + 1));
  }, [roleParam, angleCoreCount]);

  // -------------------------
  // Card select
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
  // Shuffle logic
  // -------------------------
  const shuffleArray = (length: number): number[] => {
    const arr = Array.from({ length }, (_, i) => i + 1);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleShuffle = () => {
    setSpread({});
    setSelectedCards([]);

    const orientations: { [cardId: number]: boolean } = {};
    for (let i = 1; i <= 78; i++) {
      orientations[i] = Math.random() < 0.04;
    }
    setCardOrientations(orientations);
    setIsShuffling(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isShuffling) {
      const performShuffle = () => {
        const shuffled = shuffleArray(78);
        setCardIndexes(shuffled);

        const highlights = shuffled
          .slice()
          .sort(() => 0.5 - Math.random())
          .slice(0, Math.floor(Math.random() * 3) + 4);

        setHighlightedCards(highlights);
      };

      performShuffle();
      interval = setInterval(performShuffle, 500);
    } else {
      setCardIndexes(Array.from({ length: 78 }, (_, i) => i + 1));
      setHighlightedCards([]);
    }

    return () => clearInterval(interval);
  }, [isShuffling]);

  // -------------------------
  // Load decks + cardInfo
  // -------------------------
  useEffect(() => {
    fetch("/data/tarotDecks.json")
      .then((res) => res.json())
      .then((data) => setTarotDecks(data));

    fetch("/data/rider-waite-card-info.json")
      .then((res) => res.json())
      .then((data) => setCardInfo(data));
  }, []);

  // -------------------------
  // Stop shuffle when done
  // -------------------------
  useEffect(() => {
    if (selectedCards.length === spreadSlots.length) {
      setIsShuffling(false);
    }
  }, [selectedCards, spreadSlots.length]);

  // -------------------------
  // Submit
  // -------------------------
  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      console.log(spreadSlots);
      console.log(spread);
      console.log(cardInfo);
      const cards = spreadSlots.map((slot) => {
        const data = spread[slot];
        const name =
          cardInfo.find((c) => c.id === data.card)?.name || `Card ${data.card}`;
        return { slot, name, reversed: data.reversed };
      });

      const meta =
        roleParam === "partner"
          ? {
            role: "partner",
            coreQuestions: partnerCoreQuestions || [],
            motivation: partnerMotivation || [],
          }
          : roleParam === "third-party"
            ? {
              role: "third-party",
              coreQuestions: thirdPartyCoreQuestions || [],
            }
            : {
              role: "user",
              coreQuestions: userCoreQuestions || [],
            };


      const payload = {
        timeframe,
        areaOfInterest,
        deck:
          tarotDecks.find((d) => d.value === selectedDeck)?.label ||
          selectedDeck,
        spreadType: "angleSpread",
        cards,
        ...meta,
      };

      const response = await fetchWithAuth(
        "http://localhost:5000/api/tarot/analyze-tarot",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Backend error");

      await response.json();


      const aoi = (areaOfInterest || "").toLowerCase();

      // -------------------------
      // RELATIONSHIP ONBOARDING LOGIC
      // Flow: user → partner → third-party → dashboard
      // -------------------------

      if (isRegisterForm) {
        // 1) USER JUST SUBMITTED
        if (roleParam === "user") {
          const partnerExists =
            aoi === "relationship" &&
            partnerCoreQuestions &&
            partnerCoreQuestions.length > 0;

          if (partnerExists) {
            router.push(
              `/tarot-draw?spread=angleSpread&fromRegister=true&role=partner`
            );
            return;
          }
        }

        // 2) PARTNER JUST SUBMITTED
        if (roleParam === "partner") {
          const allowThirdParty =
            aoi === "relationship" &&
            isSuperUser === true &&                    // ⭐ requires SUPERUSER
            thirdPartyCoreQuestions &&
            thirdPartyCoreQuestions.length > 0;

          if (allowThirdParty) {
            router.push(
              `/tarot-draw?spread=angleSpread&fromRegister=true&role=third-party`
            );
            return;
          }
        }

        // 3) THIRD-PARTY JUST SUBMITTED → finish onboarding
        if (roleParam === "third-party") {
          router.push("/dashboard");
          return;
        }
      }

      // -------------------------
      // NON-REGISTER mode → always go direct to dashboard
      // -------------------------
      router.push("/dashboard");

    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    spreadRef,
    isShuffling,
    isSubmitting,
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
    angleCoreCount,
    isSuperUser
  };
}
