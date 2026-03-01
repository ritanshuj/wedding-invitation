import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ children, speed = 1, direction = "up" }) => {
  const { scrollYProgress } = useScroll();
  
  const yRange = direction === "up" ? [0, -200 * speed] : [0, 200 * speed];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
