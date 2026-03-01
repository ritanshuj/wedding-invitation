import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Family from './components/Family';
import Timeline from './components/Timeline';
import Petals from './components/Petals';
import { Heart } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="relative overflow-x-hidden bg-[#2D0505]">
      <Petals />
      
      {/* Premium Background Audio - Reference only */}
      <audio id="bg-audio" loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" />

      <motion.div style={{ opacity }} className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <div className="flex flex-col items-center gap-2">
           <p className="text-xs uppercase tracking-[0.5em] text-rich-gold animate-pulse">Scroll to Begin</p>
           <div className="h-10 w-[1px] bg-rich-gold/50" />
        </div>
      </motion.div>

      <Hero />
      
      <div className="relative z-10 space-y-32 pb-32">
        <Family />
        <Timeline />
        
        <section className="px-6 text-center max-w-4xl mx-auto">
          <div className="glass p-12 rounded-[2rem] border border-rich-gold/20 flex flex-col items-center gap-8">
            <Heart className="text-rich-gold animate-bounce" size={48} fill="#D4AF37" />
            <div>
              <h2 className="font-serif text-4xl md:text-5xl gold-gradient mb-6">Our Deepest Thanks</h2>
              <p className="font-sans text-xl leading-relaxed text-champagne/90 italic">
                "As we start this new chapter in our lives, your presence and blessings are 
                the greatest gifts we could ever receive. We look forward to celebrating our 
                union with you."
              </p>
              <p className="font-hindi text-2xl text-saffron mt-10">
                आपकी उपस्थिति ही हमारा सबसे बड़ा उपहार है।
              </p>
            </div>
            
            <div className="w-full h-px bg-rich-gold/20 my-4" />
            
            <footer className="text-center">
               <h3 className="font-serif text-3xl gold-gradient mb-2">Ritanshu & Ria</h3>
               <p className="text-xs uppercase tracking-widest text-rich-gold/60">May 8th, 2026 • City Club Lucknow</p>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;