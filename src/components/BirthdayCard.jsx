import React, { useState } from 'react';

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-container">
      <div
        className={`card ${isOpen ? 'is-open' : ''}`}
        onClick={handleToggle}
        onTouchEnd={(e) => {
          e.preventDefault();
          handleToggle();
        }}
      >
        {/* Front side */}
        <div className="card-side card-front">
          <div className="decorations">🌸 💖 ✨ 💖 🌸</div>
          <h1 className="front-title">Happy Birthday, Mom!</h1>
          <p className="front-subtitle">Tap to open your card ❤️</p>
        </div>

        {/* Back side */}
        <div className="card-side card-back">
          <h2 className="back-title">To the Best Mom in the World 🎉</h2>
          <p className="back-message">
            Thank you for your endless love, kindness, and unwavering support. 
            You make every day brighter just by being you! 
            May your special day be filled with as much joy and happiness as 
            you bring to everyone around you.
          </p>
          <p className="back-closing">
            With all my love,<br />
            <strong>[Your Name]</strong>
          </p>
        </div>
      </div>
    </div>
  );
}