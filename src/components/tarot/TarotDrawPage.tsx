import React from "react";
import ShuffleButton from "./common/ShuffleButton";
import CardSelector from "./common/CardSelector";
import DeckSelector from "./common/DeckSelector";
import SpreadRenderer from "./spreads/spreadRenderer";
import { useSearchParams } from "next/navigation";
import spreadLayout from "@/data/spreadLayout";

type Props = {
  spreadRef: React.RefObject<HTMLDivElement>;
  isShuffling: boolean;
  cardIndexes: number[];
  highlightedCards: number[];
  selectedDeck: string;
  tarotDecks: { value: string; label: string }[];
  spread: { [slot: string]: { card: number; reversed: boolean } };
  selectedCards: number[];
  cardInfo: { id: number; name: string }[];
  spreadSlots: string[];
  handleShuffle: () => void;
  handleCardSelect: (cardNumber: number) => void;
  handleSubmit: () => void;
  setSelectedDeck: (deck: string) => void;
};

const TarotDrawPage = ({
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
}: Props) => {
  const searchParams = useSearchParams();
  const spreadType = searchParams.get("spread") || "celticCross";
  const isRegisterForm = searchParams.get("fromRegister") === "true";
  return (
    <div className="tarot-wrapper w-full min-h-screen">
      <ShuffleButton onShuffle={handleShuffle} />

      <p className="self-label">Choose Self Card:</p>

      <CardSelector
        cardIndexes={cardIndexes}
        highlightedCards={highlightedCards}
        isShuffling={isShuffling}
        onSelect={handleCardSelect}
      />

      <DeckSelector tarotDecks={tarotDecks} onSelect={setSelectedDeck} />

      {selectedDeck && (
        <p className="deck-selected">
          Selected Deck: <span>{tarotDecks.find(d => d.value === selectedDeck)?.label}</span>
        </p>
      )}

      <div ref={spreadRef}>
        <SpreadRenderer
          spread={spread}
          cardInfo={cardInfo}
          spreadType={spreadType as keyof typeof spreadLayout} // or dynamically from URL or dropdown
        />

      </div>
      <button
        onClick={handleSubmit}
        disabled={selectedCards.length < spreadSlots.length || !selectedDeck}
        className={`submit-button ${selectedCards.length === spreadSlots.length && selectedDeck ? "enabled" : "disabled"
          }`}
      >
        Submit Reading
      </button>
    </div>
  );
};

export default TarotDrawPage;
