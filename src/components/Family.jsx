import React from 'react';
import { motion } from 'framer-motion';

export default function Family() {
  return (
    <section className="px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        {/* Groom */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-right space-y-6"
        >
          <div className="space-y-2">
            <h3 className="text-rich-gold uppercase tracking-[0.3em] font-sans text-xs">The Groom</h3>
            <h2 className="font-serif text-6xl gold-gradient">Ritanshu</h2>
          </div>
          <div className="h-[1px] w-48 bg-rich-gold/30 ml-auto mr-auto md:mr-0 md:ml-auto" />
          <div className="space-y-4">
            <p className="font-sans text-sm text-champagne/60 uppercase tracking-widest italic">Son of</p>
            <div className="space-y-1">
              <p className="text-2xl font-serif text-champagne leading-tight">Smt. Dharmpriya Gautam</p>
              <p className="text-2xl font-serif text-champagne leading-tight"><span className="text-sm text-rich-gold/50 italic mr-2">&</span>Sh. Ranjul Jayant Gautam</p>
            </div>
          </div>
        </motion.div>

        {/* Center Divider */}
        <div className="hidden md:flex flex-col items-center h-64 justify-center">
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-rich-gold/40 to-transparent" />
        </div>

        {/* Bride */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <div className="space-y-2">
            <h3 className="text-rich-gold uppercase tracking-[0.3em] font-sans text-xs">The Bride</h3>
            <h2 className="font-serif text-6xl gold-gradient">Ria</h2>
          </div>
          <div className="h-[1px] w-48 bg-rich-gold/30 mr-auto ml-auto md:ml-0 md:mr-auto" />
          <div className="space-y-4">
            <p className="font-sans text-sm text-champagne/60 uppercase tracking-widest italic">Daughter of</p>
            <div className="space-y-1">
              <p className="text-2xl font-serif text-champagne leading-tight">Smt. Usha Keshari</p>
              <p className="text-2xl font-serif text-champagne leading-tight"><span className="text-sm text-rich-gold/50 italic mr-2">&</span>Sh. Om Prakash Keshari</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}