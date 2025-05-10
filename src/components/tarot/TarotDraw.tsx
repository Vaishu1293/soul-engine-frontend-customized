'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Listbox } from '@headlessui/react';

const TarotDrawPage = () => {
  const spreadRef = useRef(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [cardIndexes, setCardIndexes] = useState<number[]>([]);
  const [highlightedCards, setHighlightedCards] = useState<number[]>([]);
  const [selectedDeck, setSelectedDeck] = useState('');
  const [tarotDecks, setTarotDecks] = useState<{ value: string; label: string }[]>([]);
  const [spread, setSpread] = useState<{ [slot: string]: { card: number; reversed: boolean } }>({});
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [cardInfo, setCardInfo] = useState<{ id: number, name: string }[]>([]);
  const [cardOrientations, setCardOrientations] = useState<{ [cardId: number]: boolean }>({});

  const spreadSlots = [
    'Self', 'Higher Power', 'Situation', 'Recent Past', 'Near Future',
    'Challenges', 'Long-Term Potential', 'Advice', 'Allies', 'Blockers & Inhibitions'
  ];

  const handleCardSelect = (cardNumber: number) => {
    if (selectedCards.includes(cardNumber)) return;
    if (selectedCards.length >= spreadSlots.length) return;

    const nextSlot = spreadSlots[selectedCards.length];
    const isReversed = cardOrientations[cardNumber];

    setSpread(prev => ({ ...prev, [nextSlot]: { card: cardNumber, reversed: isReversed } }));
    setSelectedCards(prev => [...prev, cardNumber]);
  };

  const shuffleArray = (length: number): number[] => {
    const array = Array.from({ length }, (_, i) => i + 1);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleShuffle = () => {
    setSpread({});
    setSelectedCards([]);

    const orientations: { [cardId: number]: boolean } = {};
    for (let i = 1; i <= 78; i++) {
      orientations[i] = Math.random() < 0.04;
    }
    setCardOrientations(orientations);

    setIsShuffling(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isShuffling) {
      const doShuffle = () => {
        const shuffled = shuffleArray(78);
        setCardIndexes(shuffled);
        const highlights = shuffled.sort(() => 0.5 - Math.random()).slice(0, 4);
        setHighlightedCards(highlights);
      };

      doShuffle();
      interval = setInterval(doShuffle, 500);
    } else {
      setCardIndexes(Array.from({ length: 78 }, (_, i) => i + 1));
      setHighlightedCards([]);
    }

    return () => clearInterval(interval);
  }, [isShuffling]);

  useEffect(() => {
    fetch('/data/tarotDecks.json')
      .then(res => res.json())
      .then(data => setTarotDecks(data))
      .catch(err => console.error('Error loading deck list:', err));

    fetch('/data/rider-waite-card-info.json')
      .then(res => res.json())
      .then(data => setCardInfo(data))
      .catch(err => console.error('Error loading card info:', err));
  }, []);

  useEffect(() => {
    if (selectedCards.length === spreadSlots.length) {
      setIsShuffling(false);
    }
  }, [selectedCards]);

  const renderCard = (slot: string) => {
    const cardData = spread[slot];
    const cardNum = cardData?.card;
    const isReversed = cardData?.reversed;
    const cardName = cardInfo.find(c => c.id === cardNum)?.name;

    return cardNum ? (
      <div className="tarot-card-container">
        <img
          src={`/cosmic-deck/${cardNum}.jpg`}
          alt={`Card ${cardNum}`}
          className={`tarot-card ${isReversed ? 'reversed' : ''}`}
        />
        <p className="tarot-label">{cardName} {isReversed ? '(Reversed)' : ''}</p>
      </div>
    ) : (
      <div className="tarot-placeholder">?</div>
    );
  };

  const handleSubmit = async () => {
    const cards = spreadSlots.map(slot => {
      const data = spread[slot];
      const cardName = cardInfo.find(c => c.id === data.card)?.name || `Card ${data.card}`;
      return {
        slot,
        name: cardName,
        reversed: data.reversed
      };
    });

    const payload = {
      deck: tarotDecks.find(d => d.value === selectedDeck)?.label || selectedDeck,
      spreadType: 'Celtic Cross',
      cards
    };

    try {
      const response = await fetch('http://localhost:5000/api/tarot/analyze-tarot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log('Backend response:', result);
    } catch (error) {
      console.error('Submit error:', error);
    }
  };

  return (
    <div className="tarot-wrapper">
      <button onClick={handleShuffle} className="shuffle-button">Shuffle<br />Cards</button>

      <p className="self-label">Choose Self Card:</p>

      <div className="card-strip">
        <div className="card-row">
          {cardIndexes.map((cardNumber, i) => (
            <motion.div
              key={cardNumber + '-' + i}
              className={`card-slot ${highlightedCards.includes(cardNumber) ? 'highlighted' : ''}`}
              animate={isShuffling ? { x: ['0%', '-3%', '3%', '0%'], rotate: ['0deg', '-2deg', '2deg', '0deg'] } : {}}
              transition={isShuffling ? { repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: i * 0.05 } : {}}
              onClick={() => handleCardSelect(cardNumber)}>
              <div className="card-index">{cardNumber}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <Listbox value={selectedDeck} onChange={setSelectedDeck}>
        <div className="deck-dropdown">
          <Listbox.Button className="deck-button">
            {selectedDeck ? tarotDecks.find(d => d.value === selectedDeck)?.label : 'Choose Deck'}
          </Listbox.Button>
          <Listbox.Options className="deck-options">
            {tarotDecks.map(deck => (
              <Listbox.Option key={deck.value} value={deck.value} className={({ active }) => `deck-option ${active ? 'active' : ''}`}>
                {deck.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>

      {selectedDeck && (
        <p className="deck-selected">Selected Deck: <span>{tarotDecks.find(d => d.value === selectedDeck)?.label}</span></p>
      )}

      <div ref={spreadRef} className="tarot-grid">
        {spreadSlots.map((slot) => {
          const layoutMap: { [key: string]: [number, number] } = {
            'Self': [1, 2], 'Higher Power': [2, 1], 'Situation': [2, 2], 'Recent Past': [2, 3],
            'Near Future': [2, 4], 'Challenges': [3, 2], 'Long-Term Potential': [4, 1],
            'Advice': [4, 2], 'Allies': [4, 3], 'Blockers & Inhibitions': [4, 4]
          };
          const [col, row] = layoutMap[slot];

          return (
            <div key={slot} style={{ gridColumnStart: col, gridRowStart: row }} className="grid-slot">
              <p className="slot-label">{slot}</p>
              <div className="card-container">{renderCard(slot)}</div>
            </div>
          );
        })}
      </div>

      <button onClick={handleSubmit} disabled={selectedCards.length < spreadSlots.length} className={`submit-button ${selectedCards.length === spreadSlots.length ? 'enabled' : 'disabled'}`}>
        Submit Reading
      </button>
    </div>
  );
};

export default TarotDrawPage;