import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music, Music2, Heart, MapPin, Calendar, Clock, Volume2, VolumeX } from 'lucide-react';
import Hero from './components/Hero';
import Sections from './components/Sections';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax for borders
  const leftBorderY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rightBorderY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const toggleMusic = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen">
      <div className="hand-paper-texture" />
      
      {/* Parallax Left Border */}
      <motion.div 
        style={{ translateY: leftBorderY }}
        className="madhubani-border madhubani-border-left" 
      />
      
      {/* Parallax Right Border */}
      <motion.div 
        style={{ translateY: rightBorderY }}
        className="madhubani-border madhubani-border-right" 
      />

      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" />

      <button 
        onClick={toggleMusic}
        className="fixed bottom-8 right-12 z-[300] p-4 rounded-full bg-madhubani-maroon text-madhubani-gold shadow-[0_0_20px_rgba(255,215,0,0.4)] border-2 border-madhubani-gold scale-125 transition-transform hover:scale-150"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      <div className="main-content">
        <Hero />
        <Sections />
      </div>
    </div>
  );
}