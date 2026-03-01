import React from 'react';
import { motion } from 'framer-motion';

export default function Family() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-2 gap-24 items-center"
      >
        {/* Groom Profile */}
        <motion.div variants={item} className="text-center lg:text-right space-y-12">
           <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.6em] text-rich-gold/60 italic">The Groom</p>
              <h2 className="font-serif text-7xl md:text-9xl gold-text">Ritanshu</h2>
           </div>
           <div className="space-y-4 relative pr-4">
              <div className="hidden lg:block absolute right-[-40px] top-0 bottom-0 w-[1px] vertical-line opacity-20" />
              <p className="text-xs text-champagne/30 uppercase tracking-widest italic">Son of</p>
              <div className="space-y-2">
                 <p className="text-3xl md:text-4xl font-serif text-champagne tracking-wide leading-tight">Smt. Dharmpriya Gautam</p>
                 <p className="text-3xl md:text-4xl font-serif text-champagne tracking-wide leading-tight">
                    <span className="text-sm text-rich-gold/30 mr-3 italic">&</span>
                    Sh. Ranjul Jayant Gautam
                 </p>
              </div>
           </div>
        </motion.div>

        {/* Bride Profile */}
        <motion.div variants={item} className="text-center lg:text-left space-y-12">
           <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.6em] text-rich-gold/60 italic">The Bride</p>
              <h2 className="font-serif text-7xl md:text-9xl gold-text">Ria</h2>
           </div>
           <div className="space-y-4 relative pl-4">
              <div className="hidden lg:block absolute left-[-40px] top-0 bottom-0 w-[1px] vertical-line opacity-20" />
              <p className="text-xs text-champagne/30 uppercase tracking-widest italic">Daughter of</p>
              <div className="space-y-2">
                 <p className="text-3xl md:text-4xl font-serif text-champagne tracking-wide leading-tight">Smt. Usha Keshari</p>
                 <p className="text-3xl md:text-4xl font-serif text-champagne tracking-wide leading-tight">
                    <span className="text-sm text-rich-gold/30 mr-3 italic">&</span>
                    Sh. Om Prakash Keshari
                 </p>
              </div>
           </div>
        </motion.div>
      </motion.div>
    </section>
  );
}