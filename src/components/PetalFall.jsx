import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PetalFall = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 10,
        size: 15 + Math.random() * 15,
        type: Math.random() > 0.5 ? 'marigold' : 'jasmine'
      }));
      setPetals(newPetals);
    };
    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -50, x: `${petal.left}vw`, rotate: 0, opacity: 0 }}
          animate={{
            y: '110vh',
            x: `${petal.left + (Math.random() * 10 - 5)}vw`,
            rotate: 360,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: petal.size,
            height: petal.size,
            borderRadius: petal.type === 'marigold' ? '50% 0 50% 50%' : '50%',
            background: petal.type === 'marigold' ? '#FF9933' : '#FFFDF0',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
          }}
        />
      ))}
    </div>
  );
};

export default PetalFall;
