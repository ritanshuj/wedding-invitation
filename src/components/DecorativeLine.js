import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const DecorativeLine = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiff: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed left-4 md:left-1/2 top-0 bottom-0 w-[2px] z-0 pointer-events-none opacity-20 md:-translate-x-1/2">
      {/* Background track */}
      <div className="absolute inset-0 bg-wedding-gold/20" />
      
      {/* Growing progress line */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-wedding-gold origin-top"
        style={{ scaleY }}
      />
      
      {/* Decorative dots along the line */}
      {[0.1, 0.25, 0.4, 0.6, 0.8, 0.95].map((pos) => (
        <div 
          key={pos}
          className="absolute w-3 h-3 bg-wedding-gold rounded-full border-2 border-white -translate-x-[5px]"
          style={{ top: `${pos * 100}%` }}
        />
      ))}
    </div>
  );
};

export default DecorativeLine;
