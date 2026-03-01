import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, MapPin, Calendar, Clock, Heart } from 'lucide-react';
import PetalFall from './components/PetalFall';
import DecorativeLine from './components/DecorativeLine';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  // Countdown logic
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date('2026-05-08T18:00:00');
      const diff = target - new Date();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / (1000 * 60)) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play().catch(() => {});
      setIsPlaying(!isPlaying);
    }
  };

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="relative selection:bg-gold selection:text-maroon">
      <PetalFall />
      <DecorativeLine />
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" loop />

      {/* Music Toggle */}
      <button 
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[60] p-4 bg-gold shadow-lg rounded-full text-maroon hover:scale-110 active:scale-95 transition-all"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Floating Countdown */}
      <div className="fixed top-0 left-0 right-0 z-[50] glassmorphism bg-maroon/80 border-b border-gold/30 backdrop-blur-md py-4 px-6 flex justify-center items-center gap-6 md:gap-12 overflow-x-auto whitespace-nowrap">
        {Object.entries(timeLeft).map(([label, val]) => (
          <div key={label} className="text-center group">
            <div className="text-2xl md:text-3xl font-bold text-gold group-hover:scale-110 transition-transform">{val}</div>
            <div className="text-[10px] uppercase tracking-tighter text-saffron">{label}</div>
          </div>
        ))}
      </div>

      <main className="silk-overlay">
        {/* Intro Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 border-2 border-gold rounded-full p-4 flex items-center justify-center animate-pulse-slow">
              <img 
                src="https://workik.com/pstatic/336919/AIWorkspaceCodeFiles/feCWg9dDCmH4xhX6Jj6M/AIImages/c856d5c3-e3bd-4bc5-82d8-2d1aeed4ffeb.png" 
                alt="Buddha"
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
              />
            </div>
          </motion.div>
          <h2 className="font-devanagari text-4xl md:text-6xl text-gold mb-6 tracking-wide drop-shadow-lg">नमो बुद्धाय</h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="space-y-4"
          >
            <h3 className="font-serif text-2xl text-saffron uppercase tracking-widest">We Invite You To Celebrate The Wedding Of</h3>
            <h1 className="text-6xl md:text-9xl font-bold gold-gradient-text font-serif">Ritanshu <span className="text-4xl md:text-6xl block md:inline text-cream">&</span> Ria</h1>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 text-gold animate-bounce"
          >
            <div className="w-1 h-12 bg-gradient-to-b from-gold to-transparent mx-auto rounded-full" />
          </motion.div>
        </section>

        {/* Story Section - Ceremony Parallax */}
        <section className="py-24 px-6 md:px-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-serif text-5xl text-gold mb-8">The Sacred Union</h2>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                In the presence of the Blessed One, we unite our souls to walk the path of Dhamma together. 
                With mindfulness and compassion, we invite you to be part of our spiritual journey as we begin our life together as one.
              </p>
            </div>
            <div className="flex-1 relative group px-6">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="relative z-20 rounded-2xl border-4 border-gold shadow-2xl overflow-hidden aspect-video bg-maroon-dark"
               >
                 <img 
                   src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
                   alt="Buddhist Ceremony" 
                   className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                 />
                 <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-gradient-to-t from-maroon to-transparent">
                    <p className="font-devanagari text-2xl text-gold">बुद्धं सरणं गच्छामि | धम्मं सरणं गच्छामि | संघं सरणं गच्छामि</p>
                 </div>
               </motion.div>
               <div className="absolute -top-4 -right-4 w-full h-full border-2 border-saffron rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            </div>
          </div>
        </section>

        {/* Family Section */}
        <section className="py-24 bg-maroon-dark/50 backdrop-blur-sm relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
            {/* Groom's Side */}
            <div className="text-center p-8 border border-gold/20 rounded-3xl bg-maroon-deep/40 shadow-xl">
              <h3 className="text-3xl text-gold font-serif mb-6 uppercase tracking-widest border-b border-gold/30 pb-4">The Groom</h3>
              <div className="space-y-2">
                <p className="text-4xl font-bold font-serif text-cream">Ritanshu</p>
                <div className="pt-4 space-y-1">
                  <p className="text-sm text-saffron uppercase font-bold tracking-tighter">Son of</p>
                  <p className="text-xl">Smt. Dharmpriya Gautam</p>
                  <p className="text-gold">&</p>
                  <p className="text-xl">Sh. Ranjul Jayant Gautam</p>
                </div>
              </div>
            </div>
            
            {/* Bride's Side */}
            <div className="text-center p-8 border border-gold/20 rounded-3xl bg-maroon-deep/40 shadow-xl">
              <h3 className="text-3xl text-gold font-serif mb-6 uppercase tracking-widest border-b border-gold/30 pb-4">The Bride</h3>
              <div className="space-y-2">
                <p className="text-4xl font-bold font-serif text-cream">Ria</p>
                <div className="pt-4 space-y-1">
                  <p className="text-sm text-saffron uppercase font-bold tracking-tighter">Daughter of</p>
                  <p className="text-xl">Smt. Usha Keshari</p>
                  <p className="text-gold">&</p>
                  <p className="text-xl">Sh. Om Prakash Keshari</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative mandala bg element */}
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] border-[40px] border-gold rounded-full" />
        </section>

        {/* Events Section - Animated cards */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-5xl font-serif text-gold mb-16">The Happening Events</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Mehendi', 
                hindi: 'मेहंदी', 
                date: '06 May 2026', 
                time: '06:00 PM', 
                icon: '👐', 
                color: 'from-pink-900 to-maroon',
                dhol: true 
              },
              { 
                title: 'Haldi', 
                hindi: 'हल्दी', 
                date: '07 May 2026', 
                time: '11:00 AM', 
                icon: '🌼', 
                color: 'from-yellow-900 to-maroon',
                dhol: false
              },
              { 
                title: 'Wedding', 
                hindi: 'विवाह समारोह', 
                date: '08 May 2026', 
                time: '07:00 PM', 
                icon: '💍', 
                color: 'from-red-900 to-maroon-dark',
                dhol: true 
              }
            ].map((event, idx) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-1 bg-gradient-to-b from-gold/50 to-transparent rounded-[2rem] shadow-2xl overflow-hidden`}
              >
                <div className={`h-full bg-gradient-to-b ${event.color} p-10 flex flex-col items-center gap-6 rounded-[calc(2rem-4px)]`}>
                  <div className="text-6xl mb-2">{event.icon}</div>
                  <div>
                    <h4 className="text-3xl font-serif text-gold mb-1">{event.title}</h4>
                    <p className="font-devanagari text-xl text-saffron">{event.hindi}</p>
                  </div>
                  <div className="w-16 h-[2px] bg-gold/30" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-cream"><Calendar size={18}/> {event.date}</div>
                    <div className="flex items-center gap-2 text-cream"><Clock size={18}/> {event.time}</div>
                  </div>
                  {event.dhol && (
                    <motion.div 
                      animate={{ rotate: [0, -10, 10, 0] }} 
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-4xl mt-4"
                    >
                      🥁
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Venue Section */}
        <section className="py-24 px-6 md:px-24">
          <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-2 border-gold/40">
            <div className="bg-maroon-dark p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                  <div className="inline-flex items-center justify-center p-3 bg-gold/20 rounded-full mb-6 text-gold">
                    <MapPin size={32} />
                  </div>
                  <h2 className="text-4xl font-serif text-gold mb-4">The Grand Venue</h2>
                  <p className="text-2xl font-bold mb-2">City Club</p>
                  <p className="text-lg opacity-80 mb-8">Kursi Road, Near St. Mary's Hospital,<br/>Lucknow, Uttar Pradesh</p>
                  <a 
                    href="https://maps.google.com/?q=City+Club+Kursi+Road+Lucknow" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-gold px-8 py-4 rounded-full text-maroon font-bold text-lg hover:bg-gold-light hover:shadow-gold/20 hover:scale-105 transition-all shadow-lg"
                  >
                    Open in Maps
                  </a>
               </div>
               <div className="flex-1 w-full h-[300px] rounded-3xl overflow-hidden grayscale contrast-125 opacity-70 border border-gold/20">
                 <iframe 
                   title="map"
                   width="100%" 
                   height="100%" 
                   frameBorder="0" 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113847.6627068579!2d80.938!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999564619b16f31%3A0xc3f95e5058cd485e!2sCity%20Club!5e0!3m2!1sen!2sin!4v1700000000"
                   allowFullScreen
                 />
               </div>
            </div>
          </div>
        </section>

        {/* RSVP Section */}
        <section className="py-24 px-6 text-center">
           <div className="max-w-2xl mx-auto bg-maroon-deep/30 p-12 rounded-[3rem] border border-gold/10 backdrop-blur-xl">
             <Heart className="mx-auto text-gold mb-6 animate-pulse" size={48} />
             <h2 className="text-4xl font-serif text-gold mb-8">Blessings Only</h2>
             <p className="text-lg opacity-90 mb-12">
                "No Gift, only your presence and blessings are heartly requested."
             </p>
             <form className="space-y-6" onSubmit={(e) => {e.preventDefault(); alert('Attendance Noted! Thank you 🙏');}}>
               <input 
                 type="text" 
                 placeholder="Your Name" 
                 className="w-full bg-maroon/50 border border-gold/30 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold text-cream"
                 required
               />
               <div className="grid grid-cols-2 gap-4">
                 <select className="bg-maroon/50 border border-gold/30 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold text-cream">
                    <option>Attending</option>
                    <option>Regretably No</option>
                 </select>
                 <select className="bg-maroon/50 border border-gold/30 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold text-cream">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3+ Guests</option>
                 </select>
               </div>
               <button className="w-full bg-gold/10 border-2 border-gold text-gold py-4 rounded-2xl font-bold hover:bg-gold hover:text-maroon transition-all">Submit Attendance</button>
             </form>
           </div>
        </section>

        {/* Final Footer */}
        <footer className="py-24 text-center border-t border-gold/10">
          <p className="text- gold opacity-50 mb-4 tracking-tighter">WE CAN'T WAIT TO SEE YOU THERE</p>
          <h2 className="text-4xl font-serif italic text-gold">Ritanshu & Ria</h2>
          <div className="mt-12 text-6xl">🙌</div>
        </footer>
      </main>
    </div>
  );
};

export default App;