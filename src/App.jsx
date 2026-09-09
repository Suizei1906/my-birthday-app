import React from 'react';
import BirthdayCard from './components/BirthdayCard';
import Confetti from './components/Confetti';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Confetti />
      <MusicPlayer />
      <BirthdayCard />
    </div>
  );
}