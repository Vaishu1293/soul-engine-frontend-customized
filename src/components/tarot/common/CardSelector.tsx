import TarotCard from "./TarotCard";

type Props = {
  label: string;
  card?: string;
};

export default function CardSlot({ label, card }: Props) {
  return (
    <div className="card-slot">
      <div className="card-container">
        {card ? <TarotCard image={card} /> : <span className="placeholder">?</span>}
      </div>
      <p className="card-label">{label}</p>
    </div>
  );
}
