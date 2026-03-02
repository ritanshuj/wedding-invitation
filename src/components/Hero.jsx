import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-royal-maroon">
      <motion.div style={{ y }} className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-10 text-center"
        >
          <p className="font-hindi text-4xl md:text-6xl luxury-gold-vibe tracking-[0.4em] mb-4">नमो बुद्धाय</p>
          <div className="h-[2px] w-48 bg-madhubani-mustard/30 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.h1 
            className="font-serif text-8xl md:text-[13rem] luxury-gold-vibe leading-none italic font-bold"
          >
            Ritanshu <br/>
            <span className="text-4xl md:text-6xl text-madhubani-mustard/40 lowercase block my-8">&</span>
            Ria
          </motion.h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-20 flex flex-col items-center"
        >
           <p className="font-sans text-xl md:text-2xl text-madhubani-mustard tracking-[0.5em] font-light italic">LUCKNOW • 08 MAY 2026</p>
        </motion.div>
      </motion.div>
      
      <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-wrap gap-20 p-20">
         {Array.from({ length: 12 }).map((_, i) => (
           <div key={i} className="w-24 h-24 border-2 border-madhubani-mustard rotate-45 shrink-0" />
         ))}
      </div>
    </section>
  );
}