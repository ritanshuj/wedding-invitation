import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart } from 'lucide-react';

export default function Sections() {
  return (
    <div className="space-y-40 pb-40">
      {/* Story / Intro */}
      <section className="pt-32 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8"
        >
          <h2 className="font-serif text-6xl text-madhubani-indigo italic border-l-8 border-madhubani-orange pl-8">The Madhubani Story</h2>
          <p className="font-sans text-xl leading-relaxed text-madhubani-indigo/80">
            A celebration as vibrant as the lines of Mithila art. Our wedding is a tapestry woven with 
            tradition, Dhamma, and the infinite colors of togetherness. We invite you to be a part 
            of this living masterpiece.
          </p>
          <div className="flex gap-6 opacity-40">
             <span className="text-4xl text-madhubani-teal animate-bounce">𓆝</span>
             <span className="text-4xl text-madhubani-orange animate-pulse">✿</span>
             <span className="text-4xl text-madhubani-mustard animate-bounce" style={{animationDelay: '0.5s'}}>❈</span>
          </div>
        </motion.div>
        
        <div className="flex-1 relative">
           <div className="aspect-square madhubani-card rounded-[3rem] p-1 shadow-2xl overflow-hidden rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover grayscale brightness-110 opacity-50"
                alt="Motif"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 border-8 border-double border-royal-maroon rounded-full flex items-center justify-center">
                    <Heart className="text-madhubani-orange" size={48} fill="currentColor" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
           <motion.div 
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 10, opacity: 1 }}
             className="madhubani-card bg-[#FFEECC] p-12 rounded-[4rem] border-madhubani-mustard text-center"
           >
              <p className="text-[10px] uppercase tracking-widest text-madhubani-orange mb-4 font-bold">The Groom's Lineage</p>
              <h3 className="font-serif text-6xl text-royal-maroon italic mb-8">Ritanshu</h3>
              <div className="h-px w-20 bg-royal-maroon/20 mx-auto mb-8" />
              <div className="space-y-3">
                 <p className="text-xs uppercase tracking-widest opacity-40 italic">Son of</p>
                 <p className="text-3xl font-serif text-madhubani-indigo tracking-tight">Smt. Dharmpriya Gautam</p>
                 <p className="text-3xl font-serif text-madhubani-indigo tracking-tight"><span className="text-lg mr-2 italic">&</span> Sh. Ranjul Jayant Gautam</p>
              </div>
           </motion.div>

           <motion.div 
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: -10, opacity: 1 }}
             className="madhubani-card bg-[#E0F2F1] p-12 rounded-[4rem] border-madhubani-teal text-center"
           >
              <p className="text-[10px] uppercase tracking-widest text-madhubani-teal mb-4 font-bold">The Bride's Lineage</p>
              <h3 className="font-serif text-6xl text-[#004D40] italic mb-8">Ria</h3>
              <div className="h-px w-20 bg-[#004D40]/20 mx-auto mb-8" />
              <div className="space-y-3">
                 <p className="text-xs uppercase tracking-widest opacity-40 italic">Daughter of</p>
                 <p className="text-3xl font-serif text-madhubani-indigo tracking-tight">Smt. Usha Keshari</p>
                 <p className="text-3xl font-serif text-madhubani-indigo tracking-tight"><span className="text-lg mr-2 italic">&</span> Sh. Om Prakash Keshari</p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 max-w-5xl mx-auto space-y-24">
        <div className="text-center space-y-4">
           <h2 className="font-serif text-7xl text-madhubani-indigo italic">The Happening</h2>
           <div className="h-[2px] w-40 bg-madhubani-mustard mx-auto opacity-40" />
        </div>

        <div className="space-y-32">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="flex flex-col md:flex-row items-center gap-10 md:gap-20"
           >
              <div className="w-full md:w-1/3 text-center md:text-right">
                 <Calendar className="mx-auto md:ml-auto md:mr-0 text-madhubani-orange mb-4" size={32} />
                 <h4 className="text-3xl font-serif text-madhubani-indigo">06 May, 2026</h4>
                 <p className="text-madhubani-mustard font-bold tracking-widest text-sm">MEHENDI & SANGEET</p>
              </div>
              <div className="hidden md:block w-px h-32 bg-madhubani-mustard/20" />
              <div className="flex-1 space-y-4 text-center md:text-left">
                 <h3 className="font-serif text-4xl text-madhubani-indigo italic">A Splash of Henna</h3>
                 <p className="font-hindi text-xl text-madhubani-teal">मेहंदी एवं संगीत समारोह</p>
                 <div className="flex items-center justify-center md:justify-start gap-2 text-madhubani-indigo/60">
                    <MapPin size={18} /> <span className="text-sm font-bold">City Club, Lucknow</span>
                 </div>
              </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20"
           >
              <div className="w-full md:w-1/3 text-center md:text-left">
                 <Clock className="mx-auto md:mr-auto md:ml-0 text-madhubani-teal mb-4" size={32} />
                 <h4 className="text-3xl font-serif text-madhubani-indigo">08 May, 2026</h4>
                 <p className="text-madhubani-teal font-bold tracking-widest text-sm">THE WEDDING CEREMONY</p>
              </div>
              <div className="hidden md:block w-px h-32 bg-madhubani-teal/20" />
              <div className="flex-1 space-y-4 text-center md:text-right">
                 <h3 className="font-serif text-4xl text-madhubani-indigo italic">The Sacred Union</h3>
                 <p className="font-hindi text-xl text-madhubani-orange">विवाह समारोह</p>
                 <div className="flex items-center justify-center md:justify-end gap-2 text-madhubani-indigo/60">
                    <MapPin size={18} /> <span className="text-sm font-bold">City Club, Lucknow</span>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Blessings */}
      <section className="px-6">
         <motion.div 
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           className="max-w-4xl mx-auto madhubani-card rounded-[4rem] p-12 md:p-32 text-center bg-[#FFFDF0]"
         >
            <Heart className="mx-auto text-madhubani-orange mb-10 animate-bounce" size={60} fill="currentColor" />
            <h2 className="font-serif text-5xl text-madhubani-indigo italic mb-10">Blessings over Gifts</h2>
            <p className="font-sans text-2xl leading-relaxed text-madhubani-indigo/70 mb-20 italic">
               "Your presence is the most cherished gift of all. We request only your love 
               and blessings for our new journey in Dhamma."
            </p>
            <div className="pt-20 border-t-2 border-dashed border-madhubani-mustard">
               <p className="font-hindi text-5xl text-madhubani-orange mb-4 tracking-widest">नमो बुद्धाय</p>
               <h3 className="font-script text-5xl text-royal-maroon">Ritanshu & Ria</h3>
               <p className="text-xs uppercase tracking-[0.6em] text-madhubani-indigo/30 mt-10">May 2026 • Lucknow</p>
            </div>
         </motion.div>
      </section>
    </div>
  );
}