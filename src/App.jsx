import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import Hero from './components/Hero';
import Sections from './components/Sections';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const toggleMusic = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen">
      <div className="handcrafted-overlay" />
      
      <motion.div style={{ translateY: leftY }} className="madhubani-parallex-border madhubani-left hide-on-mobile" />
      <motion.div style={{ translateY: rightY }} className="madhubani-parallex-border madhubani-right hide-on-mobile" />

      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" />

      <button 
        onClick={toggleMusic}
        className="fixed bottom-8 right-12 z-[300] p-4 rounded-full bg-madhubani-maroon text-madhubani-gold shadow-2xl border-2 border-madhubani-gold transition-all hover:scale-125"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      <div className="canvas-container">
        <Hero />
        <Sections />
      </div>
    </div>
  );
}