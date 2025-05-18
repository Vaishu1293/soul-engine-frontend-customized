'use client';
import TarotCard from '../common/TarotCard';

interface Props {
  spread: { [slot: string]: { card: number; reversed: boolean } };
  cardInfo: { id: number; name: string }[];
}

export default function CelticCross({ spread, cardInfo }: Props) {
  const spreadSlots = [
    'Self', 'Higher Power', 'Situation', 'Recent Past', 'Near Future',
    'Challenges', 'Long-Term Potential', 'Advice', 'Allies', 'Blockers & Inhibitions'
  ];

  const layoutMap: { [key: string]: [number, number] } = {
    'Self': [1, 2], 'Higher Power': [2, 1], 'Situation': [2, 2], 'Recent Past': [2, 3],
    'Near Future': [2, 4], 'Challenges': [3, 2], 'Long-Term Potential': [4, 1],
    'Advice': [4, 2], 'Allies': [4, 3], 'Blockers & Inhibitions': [4, 4]
  };

  return (
    <div className="tarot-grid">
      {spreadSlots.map(slot => {
        const cardData = spread[slot];
        const cardNum = cardData?.card;
        const isReversed = cardData?.reversed || false;
        const cardName = cardInfo.find(c => c.id === cardNum)?.name || '';

        return (
          <div key={slot} style={{ gridColumnStart: layoutMap[slot][0], gridRowStart: layoutMap[slot][1] }} className="grid-slot">
            <p className="slot-label">{slot}</p>
            {cardNum ? <TarotCard cardNum={cardNum} cardName={cardName} isReversed={isReversed} /> : <div className="tarot-placeholder">?</div>}
          </div>
        );
      })}
    </div>
  );
}
