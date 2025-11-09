'use client';

import React from "react";
import getSpreadLayout, { getSpreadSlotNames } from "@/data/spreadLayout";
import TarotCard from "../common/TarotCard";

// Derive the spread key type from the builder’s return type
type AllLayouts = ReturnType<typeof getSpreadLayout>;
type SpreadKey = keyof AllLayouts;

interface Props {
  spread: { [slot: string]: { card: number; reversed: boolean } };
  cardInfo: { id: number; name: string }[];
  spreadType: SpreadKey;
  /** Optional: if you know the number of core questions for angleSpread, pass it.
   * If omitted, we infer it from the spread’s keys (count of "Core Q#" slots) or default to 10.
   */
  angleCoreCount?: number;
}

export default function SpreadRenderer({
  spread,
  cardInfo,
  spreadType,
  angleCoreCount,
}: Props) {
  // If not provided, infer core count from spread keys like "Core Q1", "Core Q2", ...
  const inferredCoreCount =
    angleCoreCount ??
    (() => {
      const count = Object.keys(spread).filter((k) => /^Core Q\d+$/.test(k)).length;
      return count || 10; // sensible default for layout
    })();

  // Build the full layout/slots maps (note: angleSpread depends on core count)
  const layoutAll = getSpreadLayout(
    spreadType === "angleSpread" ? inferredCoreCount : 10
  );
  const slotNamesAll = getSpreadSlotNames(
    spreadType === "angleSpread" ? inferredCoreCount : 10
  );

  const layout = layoutAll[spreadType];
  const slots = slotNamesAll[spreadType];

  if (!slots || !layout) return <p>Invalid layout</p>;

  return (
    <div className={`tarot-grid spread-${spreadType}`}>
      {slots.map((slot) => {
        const card = spread[slot];
        const name = cardInfo.find((c) => c.id === card?.card)?.name || "";
        const layoutInfo = (layout as any)[slot];

        const classNames = [
          "grid-slot",
          layoutInfo?.overlap ? "overlap" : "",
          layoutInfo?.className || "",
        ]
          .join(" ")
          .trim();

        const translate = layoutInfo?.yOffset
          ? `translateY(${layoutInfo.yOffset}px)`
          : "";
        const rotate = layoutInfo?.rotate ? `rotate(${layoutInfo.rotate}deg)` : "";
        const transform =
          [translate, rotate].filter(Boolean).join(" ") || undefined;

        const style: React.CSSProperties = {
          gridColumnStart: layoutInfo.col,
          gridRowStart: layoutInfo.row || 1,
          transform,
          zIndex: layoutInfo?.zIndex || 1,
        };

        return (
          <div key={slot} className={classNames} style={style}>
            <p className="slot-label">{slot}</p>
            {card ? (
              <TarotCard
                cardNum={card.card}
                cardName={name}
                isReversed={card.reversed}
              />
            ) : (
              <div className="tarot-placeholder">?</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
