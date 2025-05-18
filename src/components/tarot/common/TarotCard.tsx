interface Props {
  cardNum: number;
  cardName: string;
  isReversed: boolean;
}

export default function TarotCard({ cardNum, cardName, isReversed }: Props) {
  return (
    <>
      <div className="card-container">
        <img
          src={`/cosmic-deck/${cardNum}.jpg`}
          alt={`Card ${cardNum}`}
          className={`tarot-card ${isReversed ? 'reversed' : ''}`}
        />
      </div>
      <p className="tarot-label">{cardName} {isReversed ? '(Reversed)' : ''}</p>
    </>
  );
}
