import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.2]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img 
          src="https://workik.com/pstatic/336919/AIWorkspaceCodeFiles/feCWg9dDCmH4xhX6Jj6M/AIImages/6fc18f41-ac3a-40c8-b500-dfe1ce4a3d53.png" 
          className="w-full h-full object-cover grayscale-[40%] brightness-[0.4]"
          alt="Wedding Ceremony"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0101] via-transparent to-[#1A0101]" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Glowing Buddha Symbol */}
        <motion.div
           initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
           animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
           transition={{ duration: 2 }}
           className="mb-16"
        >
          <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
             <motion.path
               d="M50 20c-5 0-8 3-8 8s3 8 8 8 8-3 8-8-3-8-8-8zm-12 40c0-8 6-12 12-12s12 4 12 12-4 15-12 18-12-10-12-18z"
               fill="none"
               stroke="#D4AF37"
               strokeWidth="1.2"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 3, ease: 'easeInOut' }}
             />
          </svg>
        </motion.div>

        <motion.h2 
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="font-hindi text-4xl md:text-6xl gold-text tracking-[0.3em] mb-12 drop-shadow-2xl"
        >
           नमो बुद्धाय
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.8, duration: 1.2 }}
           className="space-y-4"
        >
          <p className="text-[10px] uppercase tracking-[0.8em] text-rich-gold/60 mb-6">Together with their families</p>
          <h1 className="font-serif text-8xl md:text-[12rem] gold-text leading-[0.85] tracking-tight">
            Ritanshu <br/>
            <span className="text-4xl md:text-6xl text-champagne/40 lowercase italic block my-8">&</span>
            Ria
          </h1>
        </motion.div>

        <motion.div 
           initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 2.8, duration: 1, type: 'spring' }}
           className="mt-20 border-y border-rich-gold/20 py-5 px-16"
        >
           <p className="font-sans text-xl md:text-3xl text-saffron tracking-[0.5em] font-light">08 • MAY • 2026</p>
        </motion.div>
      </div>

      {/* Decorative Parallax scroll line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
         <div className="w-[1px] h-20 vertical-line animate-pulse" />
      </div>
    </section>
  );
}