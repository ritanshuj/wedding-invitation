import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen bg-madhubani-maroon flex items-center justify-center overflow-hidden border-b-[15px] border-madhubani-gold">
      {/* Radiant Sun Motif */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[600px] h-[600px] opacity-10 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="#FFD700" strokeWidth="0.8">
           <circle cx="50" cy="50" r="15" />
           {Array.from({length: 32}).map((_, i) => (
             <line key={i} x1="50" y1="30" x2="50" y2="10" transform={`rotate(${i * 11.25} 50 50)`} />
           ))}
        </svg>
      </motion.div>

      <motion.div style={{ y }} className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <span className="font-hindi text-4xl md:text-6xl text-madhubani-gold block mb-10 tracking-[0.4em]">नमो बुद्धाय</span>
        </motion.div>
        
        <h1 className="font-serif text-[18vw] md:text-[14rem] glow-title leading-none font-bold italic">
          Ritanshu <br/>
          <span className="text-4xl md:text-7xl text-madhubani-gold/40 block font-script my-6">Weds</span>
          Ria
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
           <p className="font-serif text-xl md:text-3xl text-madhubani-gold tracking-[0.6em] font-light uppercase">LUCKNOW • MAY 2026</p>
        </motion.div>
      </motion.div>
    </section>
  );
}