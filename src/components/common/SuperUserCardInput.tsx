"use client";

import React, { useState } from "react";

type CardInfo = { id: number; name: string };

interface Props {
  slot: string;
  cardInfo: CardInfo[];
}

export default function SuperUserCardInput({ slot, cardInfo }: Props) {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  // Filter matching card names
  const suggestions = cardInfo.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  // Dispatch global event to assign card manually
  const assignCard = (cardId: number) => {
    const event = new CustomEvent("superUserCardSelect", {
      detail: { slot, card: cardId, reversed: isReversed },
    });

    window.dispatchEvent(event);

    setQuery("");
    setShowList(false);
  };

  return (
    <div className="mt-4">
      {/* INPUT BOX */}
      <div className="single-input-unit">
        <input
          type="text"
          value={query}
          placeholder="Type card name…"
          onChange={(e) => {
            setQuery(e.target.value);
            setShowList(true);
          }}
          onBlur={() => setTimeout(() => setShowList(false), 150)}
          className="superuser-card-input"
        />
      </div>

      {/* REVERSED TOGGLE */}
      <div className="flex items-center gap-2 my-2">
        <input
          type="checkbox"
          id={`rev_${slot}`}
          checked={isReversed}
          onChange={(e) => setIsReversed(e.target.checked)}
        />
        <label htmlFor={`rev_${slot}`} className="ms-2">Reversed</label>
      </div>

      {/* AUTOCOMPLETE LIST */}
      {showList && query.length > 0 && (
        <div className="superuser-suggestions">
          {suggestions.length === 0 && (
            <div className="superuser-option disabled">No matches</div>
          )}

          {suggestions.map((card) => (
            <div
              key={card.id}
              className="superuser-option"
              onMouseDown={() => assignCard(card.id)}
            >
              {card.name} {isReversed ? "(Reversed)" : ""}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
