"use client";
import { useSearchParams } from "next/navigation";
import { useTarotDraw } from "@/hooks/useTarotDraw";
import React from "react";
import TarotDrawPage from "./TarotDrawPage";

const TarotDrawContainer = () => {
  const searchParams = useSearchParams();
  const spreadType = (searchParams.get("spread") || "celticCross") as keyof typeof spreadLayout;
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
      spreadType={spreadType} // pass to renderer
    />
  );
};

export default TarotDrawContainer;
