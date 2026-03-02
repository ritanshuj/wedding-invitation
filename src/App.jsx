import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Volume2, VolumeX } from 'lucide-react';
import Hero from './components/Hero';
import Sections from './components/Sections';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen bg-[#FFFDF0]">
      <div className="madhubani-border-left" />
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" />
      
      <button 
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[110] p-4 rounded-full bg-royal-maroon text-madhubani-mustard shadow-2xl border-2 border-madhubani-mustard hover:scale-110 active:scale-95 transition-all"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      <div className="content-wrapper">
        <Hero />
        <Sections />
      </div>
    </div>
  );
}

export default App;