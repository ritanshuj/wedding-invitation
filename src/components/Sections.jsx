import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Calendar, Clock, Navigation, Sparkles } from 'lucide-react';

const MadhubaniFish = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 25 C 20 5 80 5 90 25 C 80 45 20 45 10 25 Z" />
    <path d="M90 25 L 100 15 M 90 25 L 100 35" />
    <circle cx="25" cy="25" r="3" fill="currentColor" />
    <path d="M40 15 Q 50 25 40 35 M 55 15 Q 65 25 55 35 M 70 15 Q 80 25 70 35" />
  </svg>
);

export default function Sections() {
  return (
    <div className="py-20 space-y-40">
      {/* Cheerful Intro Section */}
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8 bg-madhubani-teal/10 p-12 rounded-[3rem] border-4 border-dashed border-madhubani-teal relative overflow-hidden"
        >
          <Sparkles className="absolute top-4 right-4 text-madhubani-orange animate-pulse" />
          <h2 className="font-serif text-6xl md:text-7xl text-madhubani-maroon">A Canvas of Love</h2>
          <p className="text-xl md:text-2xl text-madhubani-teal font-medium leading-relaxed">
            Our wedding celebration is conceptualized on the <span className="underline decoration-madhubani-orange decoration-4">Vibrant Soul of Mithila</span>. 
            Like the intricate lines of Madhubani art, our lives are coming together in a rhythmic dance of colors and joy.
          </p>
          <div className="flex gap-4">
             <MadhubaniFish className="w-20 text-madhubani-orange" />
             <MadhubaniFish className="w-20 text-madhubani-green" />
             <MadhubaniFish className="w-20 text-madhubani-red" />
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="relative aspect-square rounded-[4rem] border-[10px] border-madhubani-maroon bg-white flex items-center justify-center p-8 overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23580C1F"/%3E%3C/svg%3E')]" />
          <div className="text-center space-y-4 relative z-10">
             <Heart size={120} className="mx-auto text-madhubani-red animate-float" fill="#D32F2F22" />
             <p className="font-script text-5xl text-madhubani-maroon">The Eternal Bond</p>
          </div>
        </motion.div>
      </section>

      {/* Vibrant Family Cards */}
      <section className="px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center pb-8 border-b-4 border-madhubani-maroon inline-block mx-auto w-full">
           <h3 className="font-hindi text-5xl text-madhubani-maroon">शुभ मंगलम</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Groom Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-madhubani-yellow/30 p-12 rounded-[3.5rem] border-4 border-madhubani-orange shadow-xl relative"
          >
             <div className="absolute top-6 left-6 text-3xl">𑁍</div>
             <p className="uppercase tracking-widest text-madhubani-orange font-bold text-sm mb-4">Groom's Family</p>
             <h4 className="font-serif text-7xl text-madhubani-maroon mb-10 italic">Ritanshu</h4>
             <div className="space-y-4 text-madhubani-maroon/80 border-t-2 border-madhubani-orange/20 pt-8">
                <p className="text-sm italic font-bold">Son of</p>
                <div className="space-y-1">
                   <p className="text-3xl font-serif">Smt. Dharmpriya Gautam</p>
                   <p className="text-3xl font-serif">& Sh. Ranjul Jayant Gautam</p>
                </div>
             </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-madhubani-paper p-12 rounded-[3.5rem] border-4 border-madhubani-teal shadow-xl relative"
          >
             <div className="absolute bottom-6 right-6 text-3xl">𑁍</div>
             <p className="uppercase tracking-widest text-madhubani-teal font-bold text-sm mb-4">Bride's Family</p>
             <h4 className="font-serif text-7xl text-madhubani-maroon mb-10 italic">Ria</h4>
             <div className="space-y-4 text-madhubani-maroon/80 border-t-2 border-madhubani-teal/20 pt-8">
                <p className="text-sm italic font-bold">Daughter of</p>
                <div className="space-y-1">
                   <p className="text-3xl font-serif">Smt. Usha Keshari</p>
                   <p className="text-3xl font-serif">& Sh. Om Prakash Keshari</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Cheerful Events Timeline */}
      <section className="bg-madhubani-red py-32 text-white relative">
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />
         <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-24">
            <h2 className="font-serif text-7xl text-center italic text-madhubani-gold">The Festivities</h2>
            
            <div className="space-y-16">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="bg-white/10 backdrop-blur-md rounded-[4rem] p-12 md:p-20 border-2 border-dashed border-madhubani-gold flex flex-col md:flex-row gap-12 items-center"
               >
                  <div className="text-center md:text-left space-y-4">
                     <span className="bg-madhubani-gold text-madhubani-maroon px-8 py-2 rounded-full font-bold uppercase tracking-widest text-xs">06 May, 2026</span>
                     <h3 className="text-6xl font-serif">Mehendi & Sangeet</h3>
                     <p className="font-hindi text-3xl opacity-80">मेहंदी एवं संगीत समारोह</p>
                  </div>
                  <div className="md:ml-auto space-y-4 text-center md:text-right">
                     <p className="flex items-center justify-center md:justify-end gap-3 text-2xl font-serif"><Clock className="text-madhubani-gold" /> 06:00 PM onwards</p>
                     <p className="flex items-center justify-center md:justify-end gap-3 text-2xl font-serif"><MapPin className="text-madhubani-gold" /> City Club, Lucknow</p>
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="bg-madhubani-maroon p-12 md:p-20 rounded-[4rem] border-4 border-madhubani-gold shadow-2xl flex flex-col md:flex-row gap-12 items-center"
               >
                  <div className="text-center md:text-left space-y-4">
                     <span className="bg-white text-madhubani-maroon px-8 py-2 rounded-full font-bold uppercase tracking-widest text-xs">08 May, 2026</span>
                     <h3 className="text-6xl font-serif text-madhubani-gold italic">The Wedding Union</h3>
                     <p className="font-hindi text-3xl opacity-80">विवाह समारोह</p>
                  </div>
                  <div className="md:ml-auto space-y-4 text-center md:text-right">
                     <p className="flex items-center justify-center md:justify-end gap-3 text-2xl font-serif text-white"><Clock className="text-madhubani-gold" /> 07:00 PM onwards</p>
                     <p className="flex items-center justify-center md:justify-end gap-3 text-2xl font-serif text-white"><MapPin className="text-madhubani-gold" /> City Club, Lucknow</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Blessing Footer */}
      <section className="px-6 text-center max-w-4xl mx-auto space-y-12">
         <div className="section-divider mb-20" />
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="space-y-12"
         >
           <h2 className="font-serif text-6xl text-madhubani-maroon italic">Blessings over Gifts</h2>
           <p className="text-3xl md:text-4xl text-madhubani-maroon/70 font-script leading-relaxed">
             "Your presence is our most cherished gift. We request only your love and 
             blessings for our journey together in the path of Dhamma."
           </p>
           
           <div className="py-20 bg-madhubani-maroon rounded-[5rem] text-madhubani-gold shadow-inner border-y-8 border-madhubani-gold">
              <p className="font-hindi text-6xl mb-8 tracking-widest">नमो बुद्धाय</p>
              <h3 className="font-script text-7xl mb-8">Ritanshu & Ria</h3>
              <p className="text-xs uppercase tracking-[0.8em] opacity-40">Lucknow • Summer of 2026</p>
           </div>
         </motion.div>
      </section>
    </div>
  );
}