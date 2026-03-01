import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Countdown from './components/Countdown';
import AudioPlayer from './components/AudioPlayer';
import RSVPForm from './components/RSVPForm';

const App = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  // Luxury Parallax Transforms
  const doliScroll = useTransform(scrollYProgress, [0, 1], ["100%", "-200%"]);
  const baraatScroll = useTransform(scrollYProgress, [0.3, 1], ["100%", "-100%"]);
  const buddhaOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const buddhaScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);

  return (
    <div ref={containerRef} className="relative bg-texture min-h-[500vh]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-luxury-gold/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">
          <div className="font-serif text-2xl text-luxury-gold flex items-center gap-2">
             <img src="https://img.icons8.com/color/48/dharmachakra.png" className="w-8 h-8 opacity-70" alt="Dharma" />
             A & S
          </div>
          <Countdown targetDate="2024-12-25T10:00:00" />
          <div className="hidden md:block font-serif text-luxury-gold italic">Save The Date</div>
        </div>
      </header>

      {/* Background Connecting Line - Raabta Style */}
      <div className="fixed inset-0 pointer-events-none z-10 flex justify-center">
        <svg className="h-full w-2">
          <motion.path
            d={`M 1 0 L 1 ${window.innerHeight * 5}`}
            style={{ pathLength }}
            stroke="#D4AF37"
            strokeWidth="3"
            strokeDasharray="10 5"
            fill="none"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <motion.img 
          src="https://images.unsplash.com/photo-1542120526-89a7039730ab?auto=format&fit=crop&q=80&w=800" 
          alt="Golden Buddha"
          style={{ opacity: buddhaOpacity, scale: buddhaScale }}
          className="absolute w-[30%] md:w-[20%] object-contain -z-10 brightness-110 grayscale-[30%] opacity-20"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-20"
        >
          <span className="font-serif text-luxury-gold text-lg md:text-2xl tracking-[0.5em] mb-4 block uppercase font-light">Om Mani Padme Hum</span>
          <h1 className="font-serif text-6xl md:text-9xl luxury-text-gradient mb-8 leading-tight">
            Ananya <br/> & <br/> Sidharth
          </h1>
          <p className="font-sans text-stone-600 max-w-xl mx-auto leading-relaxed text-sm md:text-base tracking-widest px-6">
            In the presence of the Enlightened One, we embark on a journey of mindfulness, compassion, and eternal union.
          </p>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-luxury-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Mehendi Section - Peach Theme */}
      <section className="relative h-screen bg-luxury-peach/20 flex flex-col md:flex-row items-center justify-center p-10 overflow-hidden">
        <motion.div style={{ x: doliScroll }} className="absolute whitespace-nowrap opacity-10 pointer-events-none">
           <img src="https://img.icons8.com/bubbles/200/bridal-shower.png" className="w-64 inline-block mx-20" alt="Art" />
           <img src="https://img.icons8.com/bubbles/200/bridal-shower.png" className="w-64 inline-block mx-20" alt="Art" />
        </motion.div>

        <div className="max-w-2xl text-center md:text-left z-20">
          <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/100/external-henna-spa-flatart-icons-flat-flatarticons.png" className="mx-auto md:mx-0 mb-6" alt="Henna" />
          <h2 className="font-serif text-5xl text-luxury-gold mb-4 italic">The Mehendi Ceremony</h2>
          <p className="font-sans text-stone-600 tracking-wide mb-6">
            Intricate patterns of joy and love being etched onto the bride's hands, signaling the beginning of our sacred celebration.
          </p>
          <div className="p-4 border border-luxury-gold/30 rounded-lg inline-block text-luxury-gold font-bold">
            23rd Dec | 2:00 PM onwards | Peach Gardens
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:ml-20 relative">
          <img src="https://images.unsplash.com/photo-1610030469618-2e069151c8a1?auto=format&fit=crop&q=80&w=400" className="w-72 h-96 object-cover rounded-[50%_50%_0_0] border-4 border-white shadow-2xl" alt="Mehendi" />
        </div>
      </section>

      {/* Haldi Section - Lavender/Yellow Theme */}
      <section className="relative h-screen bg-luxury-lavender/30 flex flex-col md:flex-row-reverse items-center justify-center p-10 overflow-hidden">
        <div className="max-w-2xl text-center md:text-right z-20">
          <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/100/external-spa-wellbeing-flatart-icons-lineal-color-flatarticons.png" className="mx-auto md:ml-auto mb-6" alt="Marigold" />
          <h2 className="font-serif text-5xl text-luxury-gold mb-4 italic">The Haldi Ritual</h2>
          <p className="font-sans text-stone-600 tracking-wide mb-6">
            A golden glow of health and prosperity, as family and friends shower us with turmeric blessings and unbridled joy.
          </p>
          <div className="p-4 border border-luxury-gold/30 rounded-lg inline-block text-luxury-gold font-bold">
            24th Dec | 10:00 AM | Saffron Courtyard
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:mr-20">
          <img src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=400" className="w-72 h-96 object-cover rounded-[50%_0_50%_0] border-4 border-white shadow-2xl" alt="Haldi" />
        </div>
      </section>

      {/* The Baraat Parallax */}
      <div className="h-[50vh] bg-luxury-mint/20 relative flex items-center overflow-hidden">
        <motion.div style={{ x: baraatScroll }} className="flex gap-40 whitespace-nowrap items-center">
           <img src="https://img.icons8.com/color/144/trumpet.png" className="w-24" alt="Band" />
           <img src="https://img.icons8.com/color/144/elephant.png" className="w-48" alt="Elephant" />
           <img src="https://img.icons8.com/color/144/drum.png" className="w-24" alt="Dhol" />
           <img src="https://img.icons8.com/color/144/trumpet.png" className="w-24" alt="Band" />
           <img src="https://img.icons8.com/color/144/dance.png" className="w-32" alt="Dance" />
           <img src="https://img.icons8.com/color/144/trumpet.png" className="w-24" alt="Band" />
        </motion.div>
      </div>

      {/* Wedding Section - Mint/Gold Theme */}
      <section className="relative min-h-screen bg-luxury-mint/40 py-20 px-4 text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto glass-card rounded-[80px] p-12 border-luxury-gold shadow-2xl"
        >
          <img src="https://img.icons8.com/color/96/lotus.png" className="mx-auto mb-8 animate-pulse" alt="Lotus" />
          <h2 className="font-serif text-6xl text-luxury-gold mb-6">The Wedding Muhurat</h2>
          <div className="text-xl font-sans text-stone-700 tracking-[0.2em] mb-8">
            25th DECEMBER 2024
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-12">
            <div className="space-y-4">
              <h4 className="font-serif text-2xl text-luxury-gold italic">The Vows</h4>
              <p className="text-stone-600 leading-relaxed font-light">
                Chanting of holy sutras and the exchange of garlands under the Bodhi-leaf inspired Mandap.
              </p>
              <div className="font-bold text-luxury-gold">10:00 AM - 1:00 PM</div>
            </div>
            <div className="space-y-4">
              <h4 className="font-serif text-2xl text-luxury-gold italic">Grand Feast</h4>
              <p className="text-stone-600 leading-relaxed font-light">
                A grand North Indian spread curated with mindful recipes and royal flavors.
              </p>
              <div className="font-bold text-luxury-gold">1:30 PM Onwards</div>
            </div>
          </div>

          <div className="border-t border-luxury-gold/20 pt-12">
            <h4 className="font-serif text-3xl text-luxury-gold mb-6 italic">Venue Location</h4>
            <p className="mb-6 font-sans">The Grand Orchid Resort, Himalayan Foothills</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-10 py-3 border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all rounded-full uppercase text-xs tracking-[0.3em]"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-white">
        <RSVPForm />
        <footer className="text-center mt-20">
          <div className="font-serif text-3xl text-luxury-gold italic mb-2">Happily Ever After</div>
          <div className="font-sans text-xs tracking-widest text-stone-400 uppercase">Designed with Blessings</div>
        </footer>
      </section>

      <AudioPlayer />
    </div>
  );
};

export default App;
