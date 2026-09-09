import React, { useState, useRef } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio play blocked by browser policy:", err);
      });
    }
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-happy-birthday-113988.mp3"
        loop
        preload="auto"
      />
      <button className="music-btn" onClick={togglePlay}>
        {isPlaying ? '🔊 Pause Song' : '🎵 Play Birthday Song'}
      </button>
    </div>
  );
}