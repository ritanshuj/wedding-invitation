import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Mail, MapPin, Calendar, Clock, Instagram, Heart, Navigation, ChevronDown } from 'lucide-react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio Blocked', e));
    }
    setIsPlaying(!isPlaying);
  };

  const timer = useCountdown("2026-05-08T19:00:00");

  return (
    <div className="relative">
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" />
      
      {/* 0. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center pointer-events-none">
         <span className="font-serif text-2xl italic font-bold pointer-events-auto mix-blend-difference text-white">R&R</span>
         <button 
           onClick={toggleMusic}
           className="p-4 rounded-full bg-white/20 backdrop-blur-md text-lv-maroon shadow-2xl pointer-events-auto hover:scale-110 active:scale-95 transition-all border border-white/40"
         >
           {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
         </button>
      </nav>

      {/* 1. HERO (Direct Laavan Layout) */}
      <section className="h-screen bg-white relative flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Images / Assets */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
           <img src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="z-10"
        >
          <div className="mb-12">
             <span className="font-hindi text-xl md:text-3xl tracking-[0.5em] block mb-4 uppercase opacity-40">नमो बुद्धाय</span>
             <div className="h-px w-20 bg-lv-gold/30 mx-auto" />
          </div>

          <h1 className="font-serif hero-name font-bold italic text-lv-maroon flex flex-col items-center">
             <span>Ritanshu</span>
             <span className="text-4xl md:text-6xl text-lv-gold my-4 lowercase font-script py-6">weds</span>
             <span>Ria</span>
          </h1>

          <div className="mt-16 space-y-4">
             <p className="font-serif text-lg md:text-2xl tracking-[0.6em] uppercase opacity-40">May 08 • 2026 • LUCKNOW</p>
          </div>
        </motion.div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-12 opacity-30">
           <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* 2. FAMILY REVEAL (Laavan Style) */}
      <section className="py-40 bg-lv-cream text-center px-6 border-y border-lv-gold/10">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto space-y-20"
         >
            <div className="space-y-6">
               <span className="text-lv-gold font-bold tracking-[0.4em] text-[10px] uppercase opacity-60">With the heavenly blessings of</span>
               <h2 className="font-serif text-3xl md:text-5xl italic leading-relaxed text-lv-maroon/90">Smt. Usha Keshari & Sh. Om Prakash Keshari</h2>
            </div>
            
            <div className="h-px w-10 bg-lv-gold/20 mx-auto" />

            <div className="space-y-6">
               <span className="text-lv-gold font-bold tracking-[0.4em] text-[10px] uppercase opacity-60">Together with</span>
               <h2 className="font-serif text-3xl md:text-5xl italic leading-relaxed text-lv-maroon/90">Smt. Dharmpriya Gautam & Sh. Ranjul Jayant Gautam</h2>
            </div>

            <div className="pt-20">
               <h3 className="font-serif text-8xl md:text-[10rem] italic border-b border-lv-gold/20 inline-block pb-4 px-10 uppercase text-lv-maroon">Invite</h3>
               <p className="text-xl md:text-2xl mt-12 font-light italic leading-relaxed max-w-xl mx-auto opacity-70">
                 You to join us in the celebrated union of our children as they begin a new journey in Dhamma.
               </p>
            </div>
         </motion.div>
      </section>

      {/* 3. EVENT CARDS LIST (Clean Layout) */}
      <section className="py-40 bg-white">
         <div className="max-w-6xl mx-auto px-6 space-y-32">
            <h2 className="font-serif text-5xl md:text-8xl italic text-center mb-24 opacity-80">Wedding Events</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
               <EventItem 
                 title="Mehendi"
                 hindi="मेहंदी"
                 date="WEDNESDAY, 06 MAY 2026"
                 time="06:00 PM ONWARDS"
                 venue="CITY CLUB, LUCKNOW"
               />
               <EventItem 
                 title="Wedding"
                 hindi="विवाह समारोह"
                 date="FRIDAY, 08 MAY 2026"
                 time="07:00 PM ONWARDS"
                 venue="CITY CLUB, LUCKNOW"
                 dark={true}
               />
            </div>
         </div>
      </section>

      {/* 4. MEET THE COUPLE */}
      <section className="py-40 bg-lv-cream px-6">
         <div className="max-w-6xl mx-auto space-y-32">
            <h2 className="font-serif text-6xl italic text-center text-lv-maroon">Meet the Bride & Groom</h2>
            <div className="flex flex-wrap justify-center gap-20 md:gap-32">
               <CoupleCard name="Ritanshu" role="The Groom" img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" />
               <CoupleCard name="Ria" role="The Bride" img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" />
            </div>
         </div>
      </section>

      {/* 5. MESSAGE FROM COUPLE */}
      <section className="py-40 px-6 bg-white text-center">
         <div className="max-w-3xl mx-auto space-y-16">
            <h2 className="font-serif text-5xl italic opacity-30">A message from the couple</h2>
            <p className="text-2xl md:text-4xl font-light italic leading-[1.6] text-lv-maroon opacity-80 border-l-[10px] border-lv-gold pl-12 text-left bg-lv-cream/30 py-12 rounded-r-3xl">
              "We are both so delighted that you are able to join us in celebrating what we hope will be 
              one of the happiest days of our lives."
            </p>
            <h3 className="font-script text-8xl text-lv-gold">Ritanshu & Ria</h3>
         </div>
      </section>

      {/* 6. COUNTDOWN */}
      <section className="py-40 bg-lv-maroon text-lv-gold px-6 overflow-hidden">
         <div className="max-w-6xl mx-auto text-center space-y-24">
            <h2 className="font-serif text-4xl italic tracking-[0.5em] uppercase opacity-40">The countdown begins</h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
               {['Days', 'Hours', 'Mins', 'Secs'].map((lbl, i) => (
                 <div key={lbl} className="text-center group">
                    <div className="text-7xl md:text-[10rem] font-serif text-white leading-none tabular-nums group-hover:text-lv-gold transition-colors">
                      {String(Object.values(timer)[i]).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.5em] font-black opacity-30 pt-4">{lbl}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. INFO GRID (Things to know) */}
      <section className="py-40 px-6 bg-lv-cream">
         <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-7xl text-center italic mb-24">Things to know</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
               <InfoItem icon={<Instagram/>} label="Hashtag" value="#RitanshuWedsRia" />
               <InfoItem icon={<Heart/>} label="Policy" value="Blessings Only" />
               <InfoItem icon={<MapPin/>} label="Parking" value="Valet Available" />
               <InfoItem icon={<Navigation/>} label="RSVP" value="By April End" />
            </div>
         </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-32 bg-white text-center flex flex-col items-center border-t border-lv-gold/20">
         <Heart className="text-lv-maroon mb-10 animate-pulse" size={48} fill="#51040411" />
         <p className="font-hindi text-3xl tracking-[0.5em] opacity-40 uppercase mb-8">भवतु सब्ब मंगलं</p>
         <div className="h-px w-32 bg-lv-gold/20 mb-8" />
         <p className="text-[10px] uppercase tracking-[1em] opacity-20 font-black">Lucknow • 2026</p>
      </footer>
    </div>
  );
}

function EventItem({ title, hindi, date, time, venue, dark }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-16 text-center space-y-10 rounded-[3rem] shadow-sm border ${dark ? 'bg-lv-maroon text-white border-none shadow-2xl skew-y-1' : 'bg-white text-lv-maroon border-lv-gold/20'}`}
    >
       <div className="space-y-4">
          <h3 className={`font-serif text-7xl italic leading-none ${dark ? 'text-lv-gold' : ''}`}>{title}</h3>
          <p className="font-hindi text-2xl opacity-40">{hindi}</p>
       </div>
       <div className="space-y-4 font-serif text-xl opacity-60">
          <p className="flex items-center justify-center gap-3"><Calendar size={18}/> {date}</p>
          <p className="flex items-center justify-center gap-3"><Clock size={18}/> {time}</p>
          <p className="italic text-2xl pt-6"><MapPin size={20} className="inline mr-2" /> {venue}</p>
       </div>
       <a href="https://maps.google.com" target="_blank" className={`inline-block pt-10 text-[10px] tracking-[0.5em] font-black uppercase border-b-2 pb-2 ${dark ? 'border-lv-gold text-lv-gold' : 'border-lv-maroon'}`}>See the route</a>
    </motion.div>
  );
}

function CoupleCard({ name, role, img }) {
  return (
    <div className="text-center group">
       <div className="w-80 h-80 rounded-full border border-lv-gold/10 p-2 shadow-2xl mb-10 group-hover:scale-105 transition-all overflow-hidden bg-white">
          <div className="w-full h-full rounded-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" style={{backgroundImage: `url(${img})`}} />
       </div>
       <h4 className="font-serif text-5xl italic text-lv-maroon">{name}</h4>
       <p className="text-[10px] uppercase tracking-[0.8em] text-lv-gold font-bold mt-4">{role}</p>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="bg-white p-12 text-center space-y-4 border border-lv-gold/10 rounded-[3rem] hover:shadow-2xl transition-all">
       <div className="text-lv-gold mx-auto mb-4">{icon}</div>
       <h4 className="font-serif text-xl italic font-bold">{label}</h4>
       <p className="text-xs uppercase font-black tracking-widest opacity-40">{value}</p>
    </div>
  );
}

const useCountdown = (target) => {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const i = setInterval(() => {
      const diff = +new Date(target) - +new Date();
      if (diff > 0) setT({
        d: Math.floor(diff/8.64e7),
        h: Math.floor((diff/3.6e6)%24),
        m: Math.floor((diff/6e4)%60),
        s: Math.floor((diff/1e3)%60)
      });
    }, 1000);
    return () => clearInterval(i);
  }, [target]);
  return t;
};