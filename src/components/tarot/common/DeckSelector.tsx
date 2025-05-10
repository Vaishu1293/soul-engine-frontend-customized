type Props = {
  setDeck: (deck: string[]) => void;
};

export default function DeckSelector({ setDeck }: Props) {
  const handleDeckChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selected deck:", e.target.value);
    setDeck([e.target.value]); // optional: pass selected deck
  };

  return (
    <select onChange={handleDeckChange} className="deck-select">
      <option value="">Choose a Deck</option>
      <option value="rider">Rider Waite</option>
      <option value="custom">Custom Deck</option>
    </select>
  );
}
