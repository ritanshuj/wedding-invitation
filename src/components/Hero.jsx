import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background - Ceremony Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 opacity-40 scale-110"
      >
        <img 
          src="https://workik.com/pstatic/336919/AIWorkspaceCodeFiles/feCWg9dDCmH4xhX6Jj6M/AIImages/6fc18f41-ac3a-40c8-b500-dfe1ce4a3d53.png" 
          className="w-full h-full object-cover grayscale-[20%] brightness-[0.7]"
          alt="Ceremony BG"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D0505] via-transparent to-[#2D0505]" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Animated Buddha */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-rich-gold/20 rounded-full blur-3xl animate-pulse" />
          <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-glow">
            <motion.path
              d="M50 15c-6 0-10 4-10 10s4 10 10 10 10-4 10-10-4-10-10-10zm-15 45c0-10 8-15 15-15s15 5 15 15-5 18-15 20-15-10-15-20z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-hindi text-5xl md:text-7xl gold-gradient tracking-widest"
        >
          नमो बुद्धाय
        </motion.h2>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2, duration: 1 }}
           className="space-y-4"
        >
           <p className="font-sans text-xs uppercase tracking-[1em] text-rich-gold/80 mb-4">You are cordially invited to the wedding of</p>
           <h1 className="font-serif text-7xl md:text-[10rem] gold-gradient leading-none">
             Ritanshu <br className="md:hidden" /> 
             <span className="text-4xl md:text-6xl text-champagne/40 mx-4 italic">&</span> <br className="md:hidden" />
             Ria
           </h1>
        </motion.div>

        <motion.div 
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 3, duration: 0.8 }}
           className="mt-8 border-t border-b border-rich-gold/30 py-4 px-12"
        >
           <p className="font-sans text-2xl md:text-3xl text-saffron font-light uppercase tracking-[0.2em]">MAY 08, 2026</p>
        </motion.div>
      </div>
    </section>
  );
}