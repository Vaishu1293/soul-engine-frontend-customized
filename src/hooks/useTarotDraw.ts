"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchWithAuth } from "@/utils/fetchWithAuth";
import getSpreadLayout, { getSpreadSlotNames, SlotEntry } from "@/data/spreadLayout";

type SpreadKey = "angleSpread";
type SlotMap = Record<string, SlotEntry>;

export function useTarotDraw(spreadType: SpreadKey, isRegisterForm: boolean) {
  const spreadRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Default role = user (first loop)
  const roleParam = (searchParams.get("role") as "user" | "partner" | null) ?? "user";

  const [isShuffling, setIsShuffling] = useState(false);
  const [cardIndexes, setCardIndexes] = useState<number[]>([]);
  const [highlightedCards, setHighlightedCards] = useState<number[]>([]);
  const [selectedDeck, setSelectedDeck] = useState("");
  const [tarotDecks, setTarotDecks] = useState<{ value: string; label: string }[]>([]);
  const [spread, setSpread] = useState<{ [slot: string]: { card: number; reversed: boolean } }>({});
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [cardInfo, setCardInfo] = useState<{ id: number; name: string }[]>([]);
  const [cardOrientations, setCardOrientations] = useState<{ [cardId: number]: boolean }>({});

  const [tarotPayload, setTarotPayload] = useState<any>(null);

  // 🧭 Load tarotPayload from sessionStorage (set at registration)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const payload =
        JSON.parse(sessionStorage.getItem("tarotPayload") || "null") ||
        JSON.parse(localStorage.getItem("tarotPayload") || "null");
      if (payload) setTarotPayload(payload);
    } catch {
      setTarotPayload(null);
    }
  }, []);

  // 🧩 Dynamic core count
  const angleCoreCount = useMemo(() => {
    if (!tarotPayload) return 0;
    if (roleParam === "partner" && Array.isArray(tarotPayload.partnerCoreQuestions)) {
      return tarotPayload.partnerCoreQuestions.length;
    }
    if (Array.isArray(tarotPayload.userCoreQuestions)) {
      return tarotPayload.userCoreQuestions.length;
    }
    return 0;
  }, [tarotPayload, roleParam]);

  // Build layout + slot names dynamically
  const layoutAllSpreads = useMemo(() => getSpreadLayout(angleCoreCount), [angleCoreCount]);
  const slotNamesAll = useMemo(() => getSpreadSlotNames(angleCoreCount), [angleCoreCount]);

  const spreadSlots = slotNamesAll["angleSpread"] as string[];
  const layoutMap: SlotMap = layoutAllSpreads["angleSpread"] as SlotMap;

  // 🎴 Handle card selection
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

  // 🔁 Shuffle mechanics
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
    const orientations: { [cardId: number]: boolean } = {};
    for (let i = 1; i <= 78; i++) orientations[i] = Math.random() < 0.04;
    setCardOrientations(orientations);
    setIsShuffling(true);
  };

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

  // 🃏 Load decks and card info
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

  useEffect(() => {
    if (selectedCards.length === spreadSlots.length) {
      setIsShuffling(false);
    }
  }, [selectedCards, spreadSlots.length]);

  // 🚀 Submit spread
  const handleSubmit = async () => {
    const cards = spreadSlots.map((slot: string) => {
      const data = spread[slot];
      const cardName = cardInfo.find((c) => c.id === data.card)?.name || `Card ${data.card}`;
      return { slot, name: cardName, reversed: data.reversed };
    });

    const meta =
      roleParam === "partner"
        ? {
            role: "partner",
            coreQuestions: tarotPayload?.partnerCoreQuestions ?? [],
          }
        : {
            role: "user",
            coreQuestions: tarotPayload?.userCoreQuestions ?? [],
          };

    const payload = {
      deck: tarotDecks.find((d) => d.value === selectedDeck)?.label || selectedDeck,
      spreadType: "angleSpread",
      cards,
      ...meta,
    };

    try {
      const token = localStorage.getItem("soul_token");
      const response = await fetchWithAuth("http://localhost:5000/api/tarot/analyze-tarot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send tarot reading to backend");
      await response.json();

      // ⚡ Registration Flow Logic
      const areaOfInterest = tarotPayload?.areaOfInterest?.toLowerCase() || "";

      if (isRegisterForm) {
        if (roleParam === "user") {
          const shouldRunPartner =
            areaOfInterest === "relationship" &&
            Array.isArray(tarotPayload?.partnerCoreQuestions) &&
            tarotPayload.partnerCoreQuestions.length > 0;

          if (shouldRunPartner) {
            // ➡ Run partner spread next
            console.log("Proceeding to partner's angle spread...");
            setTimeout(() => {
              router.push(
                `/tarot-draw?spread=angleSpread&fromRegister=true&role=partner`
              );
            }, 1200);
            return;
          }
        }

        // ✅ Partner done OR not relationship: finish registration
        console.log("Both spreads complete → Navigating to dashboard");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1200);
      } else {
        // Non-registration use case
        setTimeout(() => {
          router.push("/dashboard");
        }, 1200);
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

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
    tarotPayload,
  };
}
