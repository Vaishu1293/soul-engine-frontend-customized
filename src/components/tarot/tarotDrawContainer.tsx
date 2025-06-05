import spreadLayout from "@/data/spreadLayout";
import { useTarotDraw } from "@/hooks/useTarotDraw";
import { useSearchParams } from "next/navigation";
import TarotDrawPage from "./TarotDrawPage";

const TarotDrawContainer = () => {
  const searchParams = useSearchParams();
  const spreadTypeParam = searchParams.get("spread") || "celticCross";

  // Optional: strict type-check
  const spreadType = (spreadTypeParam in spreadLayout ? spreadTypeParam : "celticCross") as keyof typeof spreadLayout;

  const {
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
    handleShuffle,
    handleCardSelect,
    handleSubmit,
    setSelectedDeck,
  } = useTarotDraw(spreadType);

  return (
    <TarotDrawPage
      spreadRef={spreadRef}
      isShuffling={isShuffling}
      cardIndexes={cardIndexes}
      highlightedCards={highlightedCards}
      selectedDeck={selectedDeck}
      tarotDecks={tarotDecks}
      spread={spread}
      selectedCards={selectedCards}
      cardInfo={cardInfo}
      spreadSlots={spreadSlots}
      handleShuffle={handleShuffle}
      handleCardSelect={handleCardSelect}
      handleSubmit={handleSubmit}
      setSelectedDeck={setSelectedDeck}
      spreadType={spreadType} // 👈 Add this prop to TarotDrawPage too
    />
  );
};

export default TarotDrawContainer;
