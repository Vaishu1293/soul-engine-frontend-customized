'use client';

import spreadLayout, { spreadSlotNames } from "@/data/spreadLayout";
import TarotCard from "../common/TarotCard";

interface Props {
  spread: { [slot: string]: { card: number; reversed: boolean } };
  cardInfo: { id: number; name: string }[];
  spreadType: keyof typeof spreadLayout;
}

export default function SpreadRenderer({ spread, cardInfo, spreadType }: Props) {
  const layout = spreadLayout[spreadType];
  const slots = spreadSlotNames[spreadType];

  if (!slots || !layout) return <p>Invalid layout</p>;

  return (
    <div className={`tarot-grid spread-${spreadType}`}>
      {slots.map((slot) => {
        const card = spread[slot];
        const name = cardInfo.find((c) => c.id === card?.card)?.name || "";
        const layoutInfo = layout[slot];

        const classNames = [
          "grid-slot",
          layoutInfo?.overlap ? "overlap" : "",
          layoutInfo?.className || ""
        ].join(" ").trim();

        const style: React.CSSProperties = {
          gridColumnStart: layoutInfo.col,
          gridRowStart: layoutInfo.row || 1,
          transform: `
    ${layoutInfo?.yOffset ? `translateY(${layoutInfo.yOffset}px)` : ''}
    ${layoutInfo?.rotate ? `rotate(${layoutInfo.rotate}deg)` : ''}
  `.trim(),
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
