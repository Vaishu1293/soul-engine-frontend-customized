'use client';
import NiceSelectForm from '@/elements/niceSelect/NiceSelectForm';

interface Props {
  tarotDecks: { value: string; label: string }[];
  onSelect: (value: string) => void;
}

export default function DeckSelector({ tarotDecks, onSelect }: Props) {
  return (
    <div className="deck-select-wrapper mt-8">
      <label className="deck-label text-center">Choose Tarot Deck</label>
      <NiceSelectForm
        options={tarotDecks.map((d, i) => ({ id: i, option: d.label, value: d.value }))}
        defaultCurrent={0}
        onChange={(item: any) => item && onSelect(item.value)}
        name="deck"
        className="gender-category-select"
        setSelelectForm={() => { }}
      />
    </div>
  );
}
