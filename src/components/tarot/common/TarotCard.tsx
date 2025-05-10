type Props = {
  image: string;
};

export default function TarotCard({ image }: Props) {
  return (
    <div className="tarot-card-wrapper">
      <img src={image} alt="Tarot" className="tarot-card-image" />
    </div>
  );
}
