"use client";

import { useSearchParams } from "next/navigation";
import { useTarotDraw } from "@/hooks/useTarotDraw";
import React from "react";
import TarotDrawPage from "./TarotDrawPage";

const TarotDrawContainer = () => {
  const searchParams = useSearchParams();

  // Always use angleSpread for this flow
  const spreadType = "angleSpread";
  const isRegisterForm = searchParams.get("fromRegister") === "true";

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
    role,
    tarotPayload,
  } = useTarotDraw(spreadType, isRegisterForm);

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
      // 👇 pass role and tarotPayload for display context
      role={role}
      tarotPayload={tarotPayload}
    />
  );
};

export default TarotDrawContainer;
