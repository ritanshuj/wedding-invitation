import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import CultureSection from './components/CultureSection';
import Footer from './components/Footer';
import PetalFall from './components/PetalFall';
import { Music, Music2 } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')); // Placeholder for Upbeat Buddha Fusion

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log("Audio playback failed", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full overflow-x-hidden selection:bg-wedding-saffron selection:text-white">
      {/* Background Decor */}
      <PetalFall />
      
      {/* Floating Music Button */}
      <button 
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[60] bg-wedding-gold p-4 rounded-full shadow-2xl animate-bounce hover:scale-110 active:scale-95 transition-all outline-none"
      >
        {isPlaying ? <Music className="text-wedding-maroon" /> : <Music2 className="text-wedding-maroon" />}
      </button>

      {/* Main Sections */}
      <Hero />
      <Details />
      <CultureSection />
      <Footer />
    </div>
  );
}

export default App;
