import { useEffect, useState, useRef } from "react";
import spreadLayout, { spreadSlotNames } from "@/data/spreadLayout";
import { useRouter } from "next/navigation";

export function useTarotDraw(spreadType: keyof typeof spreadLayout, isRegisterForm: boolean) {
  const spreadRef = useRef(null);
  const router = useRouter();
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardIndexes, setCardIndexes] = useState<number[]>([]);
  const [highlightedCards, setHighlightedCards] = useState<number[]>([]);
  const [selectedDeck, setSelectedDeck] = useState("");
  const [tarotDecks, setTarotDecks] = useState<{ value: string; label: string }[]>([]);
  const [spread, setSpread] = useState<{ [slot: string]: { card: number; reversed: boolean } }>({});
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [cardInfo, setCardInfo] = useState<{ id: number; name: string }[]>([]);
  const [cardOrientations, setCardOrientations] = useState<{ [cardId: number]: boolean }>({});

  const spreadSlots = spreadSlotNames[spreadType];
  const layoutMap = spreadLayout[spreadType];

  // console.log(spreadSlots, layoutMap);

  const handleCardSelect = (cardNumber: number) => {
    if (selectedCards.includes(cardNumber)) return;
    if (selectedCards.length >= spreadSlots.length) return;

    const nextSlot = spreadSlots[selectedCards.length];
    const isReversed = cardOrientations[cardNumber];

    setSpread(prev => ({ ...prev, [nextSlot]: { card: cardNumber, reversed: isReversed } }));
    setSelectedCards(prev => [...prev, cardNumber]);
  };

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
    for (let i = 1; i <= 78; i++) {
      orientations[i] = Math.random() < 0.04;
    }
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

  useEffect(() => {
    fetch("/data/tarotDecks.json")
      .then(res => res.json())
      .then(data => setTarotDecks(data))
      .catch(err => console.error("Error loading deck list:", err));

    fetch("/data/rider-waite-card-info.json")
      .then(res => res.json())
      .then(data => setCardInfo(data))
      .catch(err => console.error("Error loading card info:", err));
  }, []);

  useEffect(() => {
    if (selectedCards.length === spreadSlots.length) {
      setIsShuffling(false);
    }
  }, [selectedCards]);

  const handleSubmit = async () => {
    const cards = spreadSlots.map(slot => {
      const data = spread[slot];
      const cardName = cardInfo.find(c => c.id === data.card)?.name || `Card ${data.card}`;
      return {
        slot,
        name: cardName,
        reversed: data.reversed
      };
    });

    const payload = {
      deck: tarotDecks.find(d => d.value === selectedDeck)?.label || selectedDeck,
      spreadType,
      cards
    };

    console.log(payload);

    try {
      const token = localStorage.getItem("soul_token");
      const response = await fetch("http://localhost:5000/api/tarot/analyze-tarot", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Failed to send tarot reading to backend");

      const result = await response.json();
      console.log("Backend response:", result);

      if (isRegisterForm) {
        const spreadsSequence = ["treeOfLife", "celticCross", "revelationSpread", "dailyReflection"];
        const currentIndex = spreadsSequence.indexOf(spreadType);
        const nextIndex = spreadsSequence.indexOf(spreadType) + 1;

        if (nextIndex < spreadsSequence.length) {
          const nextSpread = spreadsSequence[nextIndex];
          setTimeout(() => {
            router.push(`/tarot-draw?spread=${nextSpread}&fromRegister=true`);
          }, 1000);
        } else {
          // Finished all spreads
          setTimeout(() => {
            router.push("/dashboard");
          }, 1000);
        }
      } else {
        // Non-first-time user
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
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
    handleSubmit
  };
}
