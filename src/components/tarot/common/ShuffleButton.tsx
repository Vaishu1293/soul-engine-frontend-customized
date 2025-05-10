type Props = {
  onShuffle: () => void;
};

export default function ShuffleButton({ onShuffle }: Props) {
  return (
    <button onClick={onShuffle} className="shuffle-button">
      Shuffle Cards
    </button>
  );
}
