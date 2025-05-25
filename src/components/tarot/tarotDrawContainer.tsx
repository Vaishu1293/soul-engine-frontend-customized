"use client";

import { useTarotDraw } from "@/hooks/useTarotDraw";
import React from "react";
import TarotDrawPage from "./TarotDrawPage";

const TarotDrawContainer = () => {
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
  } = useTarotDraw();
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
    />
  );
};

export default TarotDrawContainer;
