import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart, Navigation } from 'lucide-react';

export default function Sections() {
  return (
    <div className="space-y-64 pb-64 overflow-hidden">
      {/* Intro Section */}
      <section className="pt-40 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-12"
        >
          <div className="space-y-4">
             <h3 className="font-script text-4xl text-madhubani-orange">Mithila Magic</h3>
             <h2 className="font-serif text-7xl text-madhubani-indigo italic border-l-8 border-royal-maroon pl-10">Our Sacred Canvas</h2>
          </div>
          <p className="font-sans text-2xl leading-relaxed text-madhubani-indigo/70">
            A wedding inspired by the rhythmic lines and soulful colors of Madhubani art. 
            Just as the Mithila artists paint the walls of their homes with love, we are 
            painting our new life with the hues of Dhamma, tradition, and shared dreams.
          </p>
          <div className="flex gap-10 opacity-60">
             <span className="text-5xl text-madhubani-teal animate-bounce">𓆝</span>
             <span className="text-5xl text-madhubani-mustard animate-pulse">❊</span>
             <span className="text-5xl text-madhubani-orange animate-bounce" style={{animationDelay: '0.5s'}}>✾</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
           <div className="aspect-square premium-card rounded-[5rem] p-1 shadow-2xl overflow-hidden -rotate-2">
              <div className="w-full h-full flex items-center justify-center bg-[#FFFDF0]">
                 <div className="w-48 h-48 border-[12px] border-double border-royal-maroon rounded-full flex items-center justify-center">
                    <Heart className="text-madhubani-orange" size={80} fill="currentColor" />
                 </div>
              </div>
           </div>
        </motion.div>
      </section>

      {/* Lineage Section */}
      <section className="px-6 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16">
           <motion.div 
             initial={{ y: 60, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             className="premium-card bg-[#FFF3E0] p-16 rounded-[4rem] border-madhubani-mustard text-center"
           >
              <p className="text-[11px] uppercase tracking-[0.8em] text-madhubani-orange mb-6 font-bold">The Gautam Lineage</p>
              <h3 className="font-serif text-7xl text-royal-maroon italic mb-10">Ritanshu</h3>
              <div className="h-px w-32 bg-royal-maroon/20 mx-auto mb-10" />
              <div className="space-y-4">
                 <p className="text-xs uppercase tracking-widest opacity-50 italic">Son of</p>
                 <div className="space-y-2">
                    <p className="text-3xl font-serif text-madhubani-indigo">Smt. Dharmpriya Gautam</p>
                    <p className="text-3xl font-serif text-madhubani-indigo"><span className="text-lg mr-2 italic">&</span> Sh. Ranjul Jayant Gautam</p>
                 </div>
              </div>
           </motion.div>

           <motion.div 
             initial={{ y: 60, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             className="premium-card bg-[#E0F2F1] p-16 rounded-[4rem] border-madhubani-teal text-center"
           >
              <p className="text-[11px] uppercase tracking-[0.8em] text-madhubani-teal mb-6 font-bold">The Keshari Lineage</p>
              <h3 className="font-serif text-7xl text-[#004D40] italic mb-10">Ria</h3>
              <div className="h-px w-32 bg-[#004D40]/20 mx-auto mb-10" />
              <div className="space-y-4">
                 <p className="text-xs uppercase tracking-widest opacity-50 italic">Daughter of</p>
                 <div className="space-y-2">
                    <p className="text-3xl font-serif text-madhubani-indigo">Smt. Usha Keshari</p>
                    <p className="text-3xl font-serif text-madhubani-indigo"><span className="text-lg mr-2 italic">&</span> Sh. Om Prakash Keshari</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="px-6 max-w-5xl mx-auto space-y-32">
        <h2 className="font-serif text-7xl text-madhubani-indigo text-center italic">The Celebration</h2>
        
        <div className="space-y-40">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-col md:flex-row items-center gap-16 border-b border-madhubani-mustard/10 pb-20"
           >
              <div className="w-full md:w-1/3 text-center md:text-right">
                 <Calendar className="mx-auto md:ml-auto md:mr-0 text-madhubani-orange mb-4" size={40} />
                 <h4 className="text-4xl font-serif text-madhubani-indigo">06 May, 2026</h4>
                 <p className="text-madhubani-mustard font-bold tracking-widest text-xs">06:00 PM onwards</p>
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                 <h3 className="font-serif text-5xl text-madhubani-indigo italic">Mehendi & Sangeet</h3>
                 <p className="font-hindi text-2xl text-madhubani-teal">मेहंदी एवं संगीत समारोह</p>
                 <p className="flex items-center justify-center md:justify-start gap-2 text-madhubani-indigo font-bold pt-4 text-xl">
                    <MapPin size={24} /> City Club, Lucknow
                 </p>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-col md:flex-row-reverse items-center gap-16 border-b border-madhubani-teal/10 pb-20"
           >
              <div className="w-full md:w-1/3 text-center md:text-left">
                 <Clock className="mx-auto md:mr-auto md:ml-0 text-madhubani-teal mb-4" size={40} />
                 <h4 className="text-4xl font-serif text-madhubani-indigo">08 May, 2026</h4>
                 <p className="text-madhubani-teal font-bold tracking-widest text-xs">07:00 PM onwards</p>
              </div>
              <div className="flex-1 space-y-4 text-center md:text-right">
                 <h3 className="font-serif text-5xl text-madhubani-indigo italic">The Wedding Union</h3>
                 <p className="font-hindi text-2xl text-madhubani-orange">विवाह समारोह</p>
                 <p className="flex items-center justify-center md:justify-end gap-2 text-madhubani-indigo font-bold pt-4 text-xl">
                    <MapPin size={24} /> City Club, Lucknow
                 </p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Blessing Footer */}
      <section className="px-6">
         <motion.div 
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto premium-card rounded-[5rem] p-16 md:p-32 text-center bg-white shadow-2xl"
         >
            <Heart className="mx-auto text-royal-maroon mb-12 animate-bounce" size={72} fill="#3D010122" />
            <h2 className="font-serif text-6xl text-madhubani-indigo italic mb-10 leading-tight">Blessings over Gifts</h2>
            <p className="font-sans text-2xl md:text-3xl leading-relaxed text-madhubani-indigo/70 mb-20 italic">
               "Your presence is the most cherished gift of all. We request only your love 
               and blessings for our new journey in Dhamma."
            </p>
            <div className="pt-24 border-t-2 border-dashed border-madhubani-mustard">
               <p className="font-hindi text-6xl text-madhubani-orange mb-6 tracking-[0.3em]">नमो बुद्धाय</p>
               <h3 className="font-script text-6xl text-royal-maroon">Ritanshu & Ria</h3>
               <p className="text-[12px] uppercase tracking-[0.8em] text-madhubani-indigo/30 mt-12 font-bold">08 • 05 • 2026</p>
            </div>
         </motion.div>
      </section>
    </div>
  );
}