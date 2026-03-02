import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen bg-madhubani-maroon flex items-center justify-center overflow-hidden border-b-[12px] border-madhubani-gold">
      {/* Floating Sun Motif */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 pointer-events-none opacity-20"
      >
        <svg width="600" height="600" viewBox="0 0 100 100">
           <circle cx="50" cy="50" r="20" stroke="#FFD700" strokeWidth="0.5" fill="none" />
           {Array.from({length: 24}).map((_, i) => (
             <line key={i} x1="50" y1="20" x2="50" y2="10" stroke="#FFD700" strokeWidth="0.5" transform={`rotate(${i * 15} 50 50)`} />
           ))}
        </svg>
      </motion.div>

      <motion.div style={{ scale, opacity }} className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="font-hindi text-4xl md:text-6xl text-madhubani-gold block mb-8 tracking-[0.3em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">नमो बुद्धाय</span>
        </motion.div>
        
        <h1 className="font-serif text-[15vw] md:text-[12rem] gold-shimmer leading-none font-bold italic">
          Ritanshu <br/>
          <span className="text-4xl md:text-6xl text-madhubani-gold/50 block font-script my-4">and</span>
          Ria
        </h1>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
           <div className="h-px w-64 bg-madhubani-gold/40" />
           <p className="font-serif text-xl md:text-3xl text-madhubani-gold tracking-[0.5em] font-light">LUCKNOW • 08 MAY 2026</p>
           <div className="h-px w-64 bg-madhubani-gold/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}