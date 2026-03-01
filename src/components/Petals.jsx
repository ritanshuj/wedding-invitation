import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Petals = () => {
  const petals = useMemo(() => 
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      size: 10 + Math.random() * 20,
      rotate: Math.random() * 360,
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -50, opacity: 0, rotate: p.rotate }}
          animate={{ 
            y: '110vh', 
            opacity: [0, 0.4, 0.4, 0],
            rotate: p.rotate + 1080,
            x: [0, Math.random() * 60 - 30, Math.random() * 60 - 30, 0]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "linear"
          }}
          className="absolute text-rich-gold/20 flex items-center justify-center"
          style={{ 
            left: p.left,
            fontSize: p.size 
          }}
        >
           {['❀', '✵', '✧', '✺'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}
    </div>
  );
};

export default Petals;