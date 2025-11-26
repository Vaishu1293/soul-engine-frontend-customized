'use client';

import React from "react";
import ShuffleButton from "./common/ShuffleButton";
import CardSelector from "./common/CardSelector";
import DeckSelector from "./common/DeckSelector";
import SpreadRenderer from "./spreads/spreadRenderer";

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
  role?: "user" | "partner";
  tarotPayload?: any;
  angleCoreCount: number;
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
  role = "user",
  tarotPayload,
  angleCoreCount
}: Props) => {
  return (
    <div className="tarot-wrapper w-full min-h-screen">
      {/* Optional visual role header */}
      <div className="flex flex-col items-center my-4">
        <h2 className="text-xl font-semibold text-center">
          {role === "partner" ? "Partner's Angle Spread" : "Your Angle Spread"}
        </h2>
        {tarotPayload?.areaOfInterest && (
          <p className="text-sm text-gray-400">
            Area of Interest: {tarotPayload.areaOfInterest}
          </p>
        )}
      </div>

      {/* Shuffle Button */}
      <ShuffleButton onShuffle={handleShuffle} />

      {/* Self Card Selector */}
      <p className="self-label">Choose Self Card:</p>
      <CardSelector
        cardIndexes={cardIndexes}
        highlightedCards={highlightedCards}
        isShuffling={isShuffling}
        onSelect={handleCardSelect}
      />

      {/* Deck Selector */}
      <DeckSelector tarotDecks={tarotDecks} onSelect={setSelectedDeck} />

      {/* Selected Deck Display */}
      {selectedDeck && (
        <p className="deck-selected">
          Selected Deck:{" "}
          <span>
            {tarotDecks.find((d) => d.value === selectedDeck)?.label ||
              selectedDeck}
          </span>
        </p>
      )}

      {/* Spread Renderer */}
      <div ref={spreadRef}>
        <SpreadRenderer
          spread={spread}
          cardInfo={cardInfo}
          spreadType="angleSpread"
          angleCoreCount={angleCoreCount}   // ⭐ TRUE COUNT
        />

      </div>

      {/* Submit Button */}
      <>
      <div className="align-items-center mt-4 mb-10 ms-4">
          <button
        onClick={handleSubmit}
        disabled={selectedCards.length < spreadSlots.length || !selectedDeck}
        className={`submit-button ${selectedCards.length === spreadSlots.length && selectedDeck
            ? "enabled"
            : "disabled"
          }`}
      >
        Submit Reading
      </button>
      </div>
      </>
    </div>
  );
};

export default TarotDrawPage;
