import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';

const FishIcon = ({ color }) => (
  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M5 10 C 10 2 30 2 35 10 C 30 18 10 18 5 10 Z" />
    <path d="M35 10 L 40 5 M 35 10 L 40 15" />
  </svg>
);

export default function Sections() {
  return (
    <div className="py-32 space-y-56">
      {/* Intro Section - High Vibrance */}
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-madhubani-teal/10 p-16 rounded-[4rem] border-l-[12px] border-madhubani-maroon relative group overflow-hidden"
        >
          <Sparkles className="absolute top-10 right-10 text-madhubani-orange animate-pulse" size={40} />
          <h2 className="font-serif text-7xl text-madhubani-maroon mb-10 leading-tight">A Vibrant <br/><span className="text-madhubani-orange italic">Mithila</span> Celebration</h2>
          <p className="text-2xl md:text-3xl text-madhubani-teal font-medium leading-relaxed mb-12">
            Just like the rhythms of Madhubani art, our lives are coming together in a festive splash of <span className="text-madhubani-red">Deep Reds</span>, <span className="text-madhubani-yellow">Cheerful Saffrons</span>, and <span className="text-madhubani-teal">Earthy Teals</span>.
          </p>
          <div className="flex gap-8">
             <FishIcon color="#D32F2F" />
             <FishIcon color="#EF6C00" />
             <FishIcon color="#00695C" />
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ rotate: 2 }}
          className="relative aspect-square vibrant-shimmer-card rounded-[5rem] bg-white flex items-center justify-center overflow-hidden"
        >
          {/* FIXED: The dotted background uses CSS instead of complex nested quotes in JSX to avoid build errors */}
          <div className="absolute inset-0 dotted-pattern opacity-10" />
          <div className="text-center relative z-10 p-10">
             <Heart size={140} className="mx-auto text-madhubani-red animate-float mb-8" fill="#D32F2F22" />
             <h3 className="font-script text-6xl text-madhubani-maroon">Utsav of Love</h3>
          </div>
        </motion.div>
      </section>

      {/* Cheerful Lineage Cards */}
      <section className="px-6 max-w-7xl mx-auto space-y-20">
        <div className="text-center border-b-8 border-madhubani-maroon pb-8 w-full max-w-sm mx-auto">
           <h3 className="font-hindi text-6xl text-madhubani-maroon">शुभ मंगलम</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-madhubani-yellow p-16 rounded-[4rem] border-4 border-madhubani-maroon shadow-[15px_15px_0px_#580C1F] text-center relative"
          >
             <div className="absolute top-8 left-8 text-4xl opacity-20">𑁍</div>
             <p className="uppercase tracking-widest text-madhubani-maroon font-black text-sm mb-6 opacity-60">Groom's Side</p>
             <h4 className="font-serif text-8xl md:text-9xl text-madhubani-maroon mb-12 italic tracking-tighter">Ritanshu</h4>
             <div className="space-y-6 text-madhubani-maroon pt-10 border-t-4 border-dotted border-madhubani-maroon/20">
                <p className="text-sm font-black uppercase text-madhubani-red">Beloved Son of</p>
                <div className="space-y-2">
                   <p className="text-4xl font-serif font-black underline decoration-madhubani-red decoration-2 underline-offset-8">Smt. Dharmpriya Gautam</p>
                   <p className="text-4xl font-serif font-black">& Sh. Ranjul Jayant Gautam</p>
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-madhubani-teal text-white p-16 rounded-[4rem] border-4 border-white shadow-[15px_15px_0px_#FFF] text-center relative"
          >
             <div className="absolute bottom-8 right-8 text-4xl opacity-20">𑁍</div>
             <p className="uppercase tracking-widest text-white/50 font-black text-sm mb-6">Bride's Side</p>
             <h4 className="font-serif text-8xl md:text-9xl text-madhubani-gold mb-12 italic tracking-tighter">Ria</h4>
             <div className="space-y-6 pt-10 border-t-4 border-dotted border-white/20">
                <p className="text-sm font-black uppercase text-madhubani-gold">Beloved Daughter of</p>
                <div className="space-y-2">
                   <p className="text-4xl font-serif font-black underline decoration-madhubani-gold decoration-2 underline-offset-8">Smt. Usha Keshari</p>
                   <p className="text-4xl font-serif font-black">& Sh. Om Prakash Keshari</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Vibrant High-Energy Schedule */}
      <section className="bg-madhubani-red py-40 relative">
         <div className="absolute inset-0 opacity-10 dotted-pattern invert" />
         <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-32">
            <h2 className="font-serif text-8xl text-center italic text-madhubani-gold drop-shadow-lg">The Festivities</h2>
            
            <div className="space-y-20">
               <motion.div 
                 whileInView={{ x: [0, 10, -10, 0] }}
                 className="bg-white p-12 md:p-20 rounded-[5rem] border-[8px] border-double border-madhubani-maroon flex flex-col md:flex-row gap-12 items-center shadow-2xl"
               >
                  <div className="text-center md:text-left space-y-6 flex-1">
                     <span className="bg-madhubani-yellow text-madhubani-maroon px-10 py-3 rounded-full font-black uppercase tracking-widest text-sm">06 May, 2026</span>
                     <h3 className="text-7xl font-serif text-madhubani-maroon italic">Mehendi & Sangeet</h3>
                     <p className="font-hindi text-4xl text-madhubani-teal font-bold uppercase tracking-widest">मेहंदी एवं संगीत उत्सव</p>
                  </div>
                  <div className="space-y-6 text-center md:text-right border-l-4 border-madhubani-maroon/10 md:pl-20">
                     <p className="text-3xl font-serif text-madhubani-maroon font-bold flex items-center justify-center md:justify-end gap-3"><Clock className="text-madhubani-orange" /> 06 PM onwards</p>
                     <p className="text-3xl font-serif text-madhubani-maroon font-bold flex items-center justify-center md:justify-end gap-3"><MapPin className="text-madhubani-orange" /> City Club, Lucknow</p>
                  </div>
               </motion.div>

               <motion.div 
                 whileInView={{ x: [0, -10, 10, 0] }}
                 className="bg-madhubani-maroon p-12 md:p-20 rounded-[5rem] border-[10px] border-madhubani-gold flex flex-col md:flex-row gap-12 items-center shadow-[30px_30px_0px_#EF6C00]"
               >
                  <div className="text-center md:text-left space-y-6 flex-1">
                     <span className="bg-white text-madhubani-maroon px-10 py-3 rounded-full font-black uppercase tracking-widest text-sm">08 May, 2026</span>
                     <h3 className="text-7xl font-serif text-madhubani-gold italic">Grand Wedding</h3>
                     <p className="font-hindi text-4xl text-white font-bold tracking-widest">विवाह समारोह</p>
                  </div>
                  <div className="space-y-6 text-center md:text-right md:pl-20">
                     <p className="text-3xl font-serif text-white font-bold flex items-center justify-center md:justify-end gap-3"><Clock className="text-madhubani-gold" /> 07 PM onwards</p>
                     <p className="text-3xl font-serif text-white font-bold flex items-center justify-center md:justify-end gap-3"><MapPin className="text-madhubani-gold" /> City Club, Lucknow</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Cheerful Blessing Footer */}
      <section className="px-6 text-center max-w-6xl mx-auto space-y-24">
         <motion.div
           initial={{ scale: 0.9 }}
           whileInView={{ scale: 1 }}
           className="space-y-16"
         >
           <h2 className="font-serif text-8xl text-madhubani-maroon italic">Blessings over Gifts</h2>
           <p className="text-3xl md:text-5xl text-madhubani-maroon font-script leading-snug max-w-4xl mx-auto">
             "Your presence at our Utsav is the most incredible gift we could ask for. Come, bless our walk into the path of Dhamma."
           </p>
           
           <div className="py-24 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] bg-madhubani-maroon rounded-[6rem] border-[12px] border-double border-madhubani-gold text-madhubani-gold shadow-2xl">
              <p className="font-hindi text-7xl mb-12 tracking-widest drop-shadow-lg">नमो बुद्धाय</p>
              <h3 className="font-script text-[10rem] md:text-[12rem] mb-12 leading-none">Ritanshu & Ria</h3>
              <div className="h-1 w-64 bg-madhubani-gold/30 mx-auto mb-12" />
              <p className="text-sm font-black uppercase tracking-[1em] opacity-40">Lucknow • Summer 2026</p>
           </div>
         </motion.div>
      </section>
    </div>
  );
}