import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-royal-maroon">
      <motion.div style={{ y }} className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-10"
        >
          <p className="font-hindi text-3xl md:text-5xl gold-luxury-text tracking-[0.5em] mb-4">नमो बुद्धाय</p>
          <div className="h-px w-32 bg-madhubani-mustard/30 mx-auto" />
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-serif text-8xl md:text-[13rem] gold-luxury-text leading-none italic font-bold"
        >
          Ritanshu <br/>
          <span className="text-4xl md:text-6xl text-madhubani-mustard/40 lowercase block my-4">&</span>
          Ria
        </h1 >

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex flex-col items-center"
        >
           <p className="font-sans text-xl md:text-2xl text-madhubani-mustard tracking-[0.4em] font-light italic">LUCKNOW • 08 MAY 2026</p>
        </motion.div>
      </motion.div>
      
      {/* Subtle Background Motifs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <div className="absolute top-10 right-10 w-96 h-96 border-[40px] border-madhubani-mustard rounded-full blur-3xl" />
         <div className="absolute bottom-10 left-10 w-64 h-64 border-[20px] border-madhubani-orange rotate-45 opacity-20" />
      </div>
    </section>
  );
}