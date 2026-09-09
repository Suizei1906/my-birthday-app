import React, { useEffect, useState } from 'react';

export default function Confetti() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const emojis = ['🌸', '💖', '✨', '🎂', '🌷', '💕', '💐'];
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5,
      size: 16 + Math.random() * 20,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="confetti-container">
      {particles.map((p) => (
        <span
          key={p.id}
          className="confetti-particle"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            fontSize: `${p.size}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}