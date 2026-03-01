import React from 'react';
import { motion } from 'framer-motion';

const Petals = () => {
  const petals = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: 10 + Math.random() * 15,
    delay: Math.random() * 10,
    size: 15 + Math.random() * 25,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -50, opacity: 0, rotate: p.rotation }}
          animate={{ 
            y: '110vh', 
            opacity: [0, 0.6, 0.6, 0],
            rotate: p.rotation + 360,
            x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "linear"
          }}
          className="absolute text-rich-gold/40"
          style={{ 
            left: p.left,
            fontSize: p.size 
          }}
        >
          {['❀', '❁', '✧', '✺'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}
    </div>
  );
};

export default Petals;