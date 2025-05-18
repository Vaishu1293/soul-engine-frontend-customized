import React from "react";
import ShuffleButton from "./common/ShuffleButton";
import CardSelector from "./common/CardSelector";
import DeckSelector from "./common/DeckSelector";
import CelticCross from "./spreads/CleticCross";

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
  handleShuffle,
  handleCardSelect,
  handleSubmit,
  setSelectedDeck,
}: Props) => {
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
        <CelticCross spread={spread} cardInfo={cardInfo} />
      </div>

      <button
        onClick={handleSubmit}
        disabled={selectedCards.length < 10 || !selectedDeck}
        className={`submit-button ${
          selectedCards.length === 10 && selectedDeck ? "enabled" : "disabled"
        }`}
      >
        Submit Reading
      </button>
    </div>
  );
};

export default TarotDrawPage;
