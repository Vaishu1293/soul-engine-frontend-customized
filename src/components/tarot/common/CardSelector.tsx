'use client';
import { motion } from 'framer-motion';

interface Props {
  cardIndexes: number[];
  highlightedCards: number[];
  isShuffling: boolean;
  onSelect: (card: number) => void;
}

export default function CardSelector({ cardIndexes, highlightedCards, isShuffling, onSelect }: Props) {
  return (
    <div className="card-strip">
      <div className="card-row">
        {cardIndexes.map((cardNumber, i) => (
          <motion.div
            key={`${cardNumber}-${i}`}
            className={`card-slot ${highlightedCards.includes(cardNumber) ? 'highlighted' : ''}`}
            animate={isShuffling ? { x: ['0%', '-3%', '3%', '0%'], rotate: ['0deg', '-2deg', '2deg', '0deg'] } : {}}
            transition={isShuffling ? { repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: i * 0.05 } : {}}
            onClick={() => onSelect(cardNumber)}
          />
        ))}
      </div>
    </div>
  );
}
