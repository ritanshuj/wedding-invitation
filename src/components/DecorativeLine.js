import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DecorativeLine = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed left-4 md:left-12 top-0 bottom-0 w-[2px] z-10 pointer-events-none hidden sm:block">
      <div className="w-full h-full bg-gold/20 relative">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-saffron via-gold to-gold-dark origin-top"
          style={{ scaleY, height: '100%' }}
        />
        {/* Decorative nodes */}
        {[0.2, 0.4, 0.6, 0.8].map((pos) => (
          <div 
            key={pos}
            className="absolute left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-gold rounded-full bg-maroon"
            style={{ top: `${pos * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default DecorativeLine;