"use client";

import { useSearchParams } from "next/navigation";
import { useTarotDraw } from "@/hooks/useTarotDraw";
import React from "react";
import TarotDrawPage from "./TarotDrawPage";
import SpinnerOverlay from "@/components/common/SpinnerOverlay";   // ⭐ NEW

const TarotDrawContainer = () => {
  const searchParams = useSearchParams();

  // Read all query params
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
    isSubmitting,
    angleCoreCount   // ⭐ NEW
  } = useTarotDraw(isRegisterForm);

  return (
    <>
    <div className="tarot-draw-wrapper">
          <div className="tarot-header">
            <h4>Draw Your First Tarot Spread</h4>
            <p>
              Begin your Soul-Engine journey by drawing cards for your Relationship Celtic Cross spread.
            </p>
          </div>
          {/* SHOW ONLY SPINNER WHEN SUBMITTING */}
      {isSubmitting ? (
        <>
        <div className="m-4">
          <SpinnerOverlay />
        </div>
        </>
      ) : (
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
          angleCoreCount={angleCoreCount}
          role={role}
        />
      )}
        </div>
    </>
  );

};

export default TarotDrawContainer;
