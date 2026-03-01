import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start py-10 overflow-hidden text-center bg-wedding-maroon">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-silk opacity-20 pointer-events-none"></div>
      
      {/* Ceremony Background Layer (Subtle) */}
      <div 
        className="absolute inset-0 opacity-15 grayscale mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>

      {/* Buddha Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="w-32 h-32 md:w-48 md:h-48 relative mb-2">
          {/* Animated Gold Outlined Buddha */}
          <motion.img 
            src="https://workik.com/pstatic/336919/AIWorkspaceCodeFiles/feCWg9dDCmH4xhX6Jj6M/AIImages/c856d5c3-e3bd-4bc5-82d8-2d1aeed4ffeb.png"
            alt="Buddha"
            className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <h2 className="font-hindi text-wedding-gold text-3xl md:text-5xl tracking-widest mb-10 shimmer">
          नमो बुद्धाय
        </h2>
      </motion.div>

      {/* Couple Names */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-10 w-full px-4"
      >
        <div className="flex flex-col items-center">
            <h1 className="font-cursive text-7xl md:text-9xl text-wedding-gold drop-shadow-lg mb-2">
              Ritanshu
            </h1>
            <div className="flex items-center gap-4 my-2">
                <div className="h-[1px] w-12 bg-wedding-gold"></div>
                <span className="font-hindi text-wedding-saffron text-4xl">संग</span>
                <div className="h-[1px] w-12 bg-wedding-gold"></div>
            </div>
            <h1 className="font-cursive text-7xl md:text-9xl text-wedding-gold drop-shadow-lg">
              Ria
            </h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-wedding-cream tracking-[0.3em] font-light text-sm md:text-lg uppercase"
        >
          Begin their journey together
        </motion.p>
      </motion.div>

      {/* Buddhist Lotus Element */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="mt-12 opacity-40"
      >
        <img src="https://img.icons8.com/ios/100/D4AF37/lotus.png" alt="Lotus" className="w-16 h-16"/>
      </motion.div>
    </section>
  );
};

export default Hero;
