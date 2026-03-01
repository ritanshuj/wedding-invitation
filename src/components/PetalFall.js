import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const PetalFall = () => {
  const petals = useMemo(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      rotation: Math.random() * 360,
      size: 20 + Math.random() * 20
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -50, x: `${p.x}vw`, rotate: p.rotation, opacity: 0 }}
          animate={{ 
            y: '110vh', 
            x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`],
            rotate: p.rotation + 720,
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "linear"
          }}
          className="absolute text-gold-light opacity-60"
          style={{ fontSize: p.size }}
        >
          {['🌸', '🌼', '✨', '🍃'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}
    </div>
  );
};

export default PetalFall;