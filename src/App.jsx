import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Calendar, Clock, Music, Volume2, VolumeX, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Family from './components/Family';
import Timeline from './components/Timeline';
import Petals from './components/Petals';

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
    <div className="relative selection:bg-rich-gold selection:text-royal-maroon">
      <Petals />
      
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" />

      {/* Floating Audio Interface */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={toggleMusic}
        className="fixed bottom-10 right-10 z-[100] p-5 rounded-full glass-card text-rich-gold shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <div className="absolute inset-0 rounded-full bg-rich-gold/10 group-hover:animate-ping opacity-20" />
        {isPlaying ? <Volume2 size={26} /> : <VolumeX size={26} />}
      </motion.button>

      <Hero />
      
      <main className="relative z-10 px-6 space-y-64 pb-48">
        <Family />
        <Timeline />
        
        {/* RSVP / Blessings Section */}
        <section className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[4rem] p-16 md:p-32 text-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="mb-12 inline-block"
            >
              <Heart className="text-rich-gold drop-shadow-glow" size={72} fill="rgba(212, 175, 55, 0.2)" />
            </motion.div>
            
            <h2 className="font-serif text-5xl md:text-7xl gold-text mb-10 italic">Blessings Above All</h2>
            
            <p className="font-sans text-xl md:text-2xl leading-relaxed text-champagne/70 max-w-3xl mx-auto mb-20 italic">
              "Your presence is the only gift we heartly request. We look forward to celebrating this sacred journey 
              with your love and blessings."
            </p>

            <div className="pt-20 border-t border-rich-gold/10 flex flex-col items-center">
               <p className="font-hindi text-4xl text-saffron mb-6 tracking-widest">🙏 नमो बुद्धाय 🙏</p>
               <h3 className="font-serif text-5xl gold-text">Ritanshu & Ria</h3>
               <p className="text-[12px] uppercase tracking-[0.8em] text-rich-gold/40 mt-6">May 08, 2026 • Lucknow</p>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-20 text-center opacity-30 text-[10px] uppercase tracking-widest text-rich-gold">
         Wedding Artistry 2026
      </footer>
    </div>
  );
}

export default App;