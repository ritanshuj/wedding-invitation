import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MapPin, Calendar, Clock, Heart, Music, Sparkles } from 'lucide-react';
import PetalFall from './components/PetalFall';
import DecorativeLine from './components/DecorativeLine';

const Section = ({ children, className, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative min-h-screen w-full py-20 px-4 flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
};

const App = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={targetRef} className="relative watercolor-bg">
      <PetalFall />
      <DecorativeLine />

      {/* Hero Section */}
      <Section className="bg-transparent">
        <div className="absolute top-10 flex flex-col items-center z-10">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 mb-4"
          >
            <svg viewBox="0 0 100 100" className="fill-wedding-gold opacity-80">
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
            </svg>
          </motion.div>
          <p className="font-serif tracking-[0.3em] text-wedding-gold text-sm uppercase">Namo Buddhaya</p>
        </div>

        <motion.div style={{ y: y1 }} className="z-20 text-center max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1542369653-b8387140e241?auto=format&fit=crop&q=80&w=800" 
            alt="Buddha" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto mb-8 object-cover border-8 border-white shadow-2xl animate-float"
          />
          <h1 className="font-handwriting text-5xl md:text-8xl text-wedding-maroon mb-4 text-shadow-gold">
            Rahul & Sunita
          </h1>
          <p className="font-serif text-lg md:text-2xl text-wedding-gold italic mb-8">
            Begin their journey of mindfulness and love
          </p>
          <div className="flex justify-center space-x-4">
             <div className="h-[1px] w-12 bg-wedding-gold self-center" />
             <span className="font-serif text-xl tracking-widest uppercase">24 November 2024</span>
             <div className="h-[1px] w-12 bg-wedding-gold self-center" />
          </div>
        </motion.div>

        {/* Parallax elements */}
        <motion.div 
          style={{ y: y2, rotate }}
          className="absolute -right-20 top-40 w-64 h-64 opacity-10 pointer-events-none"
        >
          <img src="https://www.transparentpng.com/download/lotus/pT6j0v-lotus-flower-png.png" alt="" className="w-full" />
        </motion.div>
      </Section>

      {/* The Story / Invitation Text */}
      <Section className="bg-wedding-mint/30">
         <div className="max-w-2xl text-center z-10 px-6">
            <h2 className="font-serif text-3xl md:text-5xl text-wedding-maroon mb-8">The Union of Souls</h2>
            <p className="text-lg md:text-xl leading-relaxed font-light mb-6">
              "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."
            </p>
            <p className="text-md md:text-lg text-wedding-gold font-serif italic mb-12">
              With the blessings of Lord Buddha, we invite you to celebrate the wedding of our children.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 border border-wedding-gold/20 rounded-lg bg-white/50 backdrop-blur-sm">
                 <h3 className="font-serif text-xl text-wedding-maroon mb-2">The Groom</h3>
                 <p className="font-bold">Rahul Vardhan</p>
                 <p className="text-sm text-gray-600">S/o Mr. & Mrs. Vardhan</p>
              </div>
              <div className="p-6 border border-wedding-gold/20 rounded-lg bg-white/50 backdrop-blur-sm">
                 <h3 className="font-serif text-xl text-wedding-maroon mb-2">The Bride</h3>
                 <p className="font-bold">Sunita Shakya</p>
                 <p className="text-sm text-gray-600">D/o Mr. & Mrs. Shakya</p>
              </div>
            </div>
         </div>
      </Section>

      {/* Mehendi - Peach Theme */}
      <Section className="bg-wedding-peach/20" id="mehendi">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-wedding-peach/40 rounded-full text-wedding-maroon mb-6">
              <Music className="w-4 h-4 mr-2" />
              <span className="text-sm uppercase tracking-widest font-bold">The Art of Henna</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-wedding-maroon mb-6">Mehendi Ceremony</h2>
            <p className="text-lg mb-8 leading-relaxed">
              Join us for an afternoon of music, dance, and intricate henna designs as we kick off the celebrations.
            </p>
            <div className="space-y-4 font-serif">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-4 text-wedding-gold" />
                <span>November 22, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-4 text-wedding-gold" />
                <span>11:00 AM onwards</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-4 text-wedding-gold" />
                <span>Royal Orchid Garden, New Delhi</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1590111663118-f297299fd839?auto=format&fit=crop&q=80&w=800" 
              alt="Mehendi" 
              className="rounded-t-full border-8 border-white shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-lg rounded-lg">
              <p className="font-handwriting text-3xl text-wedding-gold italic">Dress Code: Floral Vibes</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Haldi - Saffron/Yellow Theme - Happening Vibe */}
      <Section className="bg-yellow-50" id="haldi">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full flex flex-wrap gap-20 p-20">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-20 h-20 bg-wedding-saffron rounded-full blur-3xl opacity-30" />
              ))}
           </div>
        </div>
        <div className="z-10 text-center">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-8"
          >
            <Sparkles className="w-12 h-12 text-wedding-saffron mx-auto" />
          </motion.div>
          <h2 className="font-serif text-5xl md:text-7xl text-wedding-maroon mb-4">Haldi & Holi</h2>
          <p className="font-handwriting text-3xl text-wedding-saffron mb-10">Pure Happiness, Golden Memories</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
             <div className="bg-white/80 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-wedding-saffron">
                <Clock className="mx-auto mb-4 text-wedding-saffron" />
                <h4 className="font-bold mb-2">When</h4>
                <p>Nov 23, 10:00 AM</p>
             </div>
             <div className="bg-white/80 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-wedding-saffron scale-110">
                <img src="https://images.unsplash.com/photo-1621236304195-0c1150822102?auto=format&fit=crop&q=80&w=400" alt="Dhol" className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-2 border-wedding-saffron animate-bounce" />
                <h4 className="font-bold mb-2 uppercase tracking-widest">Grand Baraat</h4>
                <p>Dhol & Dhamaka</p>
             </div>
             <div className="bg-white/80 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-wedding-saffron">
                <MapPin className="mx-auto mb-4 text-wedding-saffron" />
                <h4 className="font-bold mb-2">Where</h4>
                <p>The Terrace Suite</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Main Wedding Ceremony - Mint & Gold */}
      <Section className="bg-wedding-mint/40" id="wedding">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center opacity-5">
           <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vw] fill-wedding-gold rotate-45">
             <path d="M50 0 L100 50 L50 100 L0 50 Z" />
           </svg>
        </div>

        <div className="z-10 text-center max-w-4xl mx-auto">
          <div className="w-24 h-24 mx-auto mb-8 border-2 border-wedding-gold flex items-center justify-center rounded-full">
            <Heart className="w-10 h-10 text-wedding-gold fill-wedding-gold" />
          </div>
          <h2 className="font-serif text-5xl md:text-8xl text-wedding-maroon mb-6">Wedding Ceremony</h2>
          <p className="font-serif text-xl md:text-2xl text-wedding-gold italic mb-12 tracking-wide">
            "Under the Bodhi Tree of Love"
          </p>
          
          <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-wedding-gold/30 shadow-2xl relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-wedding-gold text-white px-8 py-2 rounded-full font-serif uppercase tracking-[0.2em] text-sm">
               The Nuptial Vows
            </div>
            <div className="space-y-8">
              <div>
                <p className="uppercase tracking-[0.3em] text-wedding-gold text-xs mb-2">Date & Venue</p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
                   <div className="text-center">
                      <p className="text-3xl font-serif">Sunday</p>
                      <p className="text-xl">Nov 24, 2024</p>
                   </div>
                   <div className="h-10 w-[1px] bg-wedding-gold hidden md:block" />
                   <div className="text-center max-w-xs">
                      <p className="font-bold">Grand Ballroom</p>
                      <p className="text-sm">The Leela Palace, Chanakyapuri, New Delhi</p>
                   </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-wedding-gold/20 grid grid-cols-2 gap-4">
                 <div>
                    <p className="font-serif text-wedding-maroon text-lg">Departure of Baraat</p>
                    <p className="text-sm">06:00 PM</p>
                 </div>
                 <div>
                    <p className="font-serif text-wedding-maroon text-lg">Pheras & Blessings</p>
                    <p className="text-sm">08:00 PM</p>
                 </div>
              </div>
            </div>
          </div>

          <button className="mt-16 gold-shimmer bg-wedding-maroon text-white px-12 py-4 rounded-full font-serif text-xl tracking-widest uppercase hover:bg-red-900 transition-all shadow-xl">
             RSVP TO ATTEND
          </button>
        </div>
      </Section>

      {/* Footer / Blessing */}
      <footer className="py-20 bg-white text-center border-t-8 border-wedding-gold">
         <div className="max-w-2xl mx-auto px-6">
            <img 
              src="https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=400" 
              alt="Lotus Logo" 
              className="w-16 h-16 mx-auto mb-6 opacity-30 grayscale saturate-0"
            />
            <p className="font-serif text-2xl text-wedding-maroon mb-2">No Gifts, Only Blessings</p>
            <p className="text-gray-500 italic mb-8">"Your presence is the most meaningful gift to us."</p>
            <div className="flex justify-center space-x-6 text-wedding-gold">
               <span className="text-xs uppercase tracking-[0.5em] font-bold">Compassion</span>
               <span className="text-xs uppercase tracking-[0.5em] font-bold">•</span>
               <span className="text-xs uppercase tracking-[0.5em] font-bold">Joy</span>
               <span className="text-xs uppercase tracking-[0.5em] font-bold">•</span>
               <span className="text-xs uppercase tracking-[0.5em] font-bold">Love</span>
            </div>
            <p className="mt-12 text-[10px] text-gray-300 uppercase tracking-widest">Meticulously crafted for Rahul & Sunita</p>
         </div>
      </footer>
    </div>
  );
};

export default App;
