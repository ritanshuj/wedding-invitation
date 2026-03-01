import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, MapPin, Calendar, Clock, Music, Volume2, VolumeX } from 'lucide-react';

const MadhubaniIllustration = ({ type }) => {
  if (type === 'fish') return (
    <svg width="100" height="60" viewBox="0 0 100 60" className="opacity-80">
      <path d="M10 30 Q 30 10 50 30 T 90 30" stroke="#800000" strokeWidth="2" fill="none" />
      <path d="M10 30 Q 30 50 50 30 T 90 30" stroke="#EBB035" strokeWidth="2" fill="none" />
      <circle cx="20" cy="30" r="2" fill="#800000" />
    </svg>
  );
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" className="opacity-80">
      <circle cx="50" cy="50" r="30" stroke="#800000" strokeWidth="2" fill="none" strokeDasharray="5,5" />
      <path d="M50 20 L50 80 M20 50 L80 50" stroke="#008080" strokeWidth="1" />
      <circle cx="50" cy="50" r="5" fill="#FF6B35" />
    </svg>
  );
};

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(null);
  const { scrollYProgress } = useScroll();
  
  const toggleMusic = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-madhubani-cream selection:bg-madhubani-red selection:text-white">
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" />
      
      {/* Fixed Left Madhubani Border */}
      <div className="madhubani-left-border" />

      {/* Music Toggle */}
      <button 
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[100] p-4 rounded-full bg-madhubani-red text-madhubani-mustard shadow-xl border-2 border-madhubani-mustard"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      <div className="main-content">
        {/* Hero Section: Dark Maroon Premium Vibe */}
        <section className="relative h-screen bg-madhubani-red flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center px-6 relative z-10"
          >
            <div className="mb-8 border-b-2 border-madhubani-mustard/30 inline-block pb-4">
              <p className="font-hindi text-xl md:text-3xl text-madhubani-mustard tracking-[0.3em]">🙏 नमो बुद्धाय 🙏</p>
            </div>
            
            <h1 className="font-serif text-7xl md:text-[10rem] text-madhubani-cream leading-none tracking-tight">
              Ritanshu <br/>
              <span className="text-4xl md:text-6xl text-madhubani-mustard italic font-handwritten">&</span> <br/>
              Ria
            </h1>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 text-madhubani-mustard font-sans tracking-[0.5em] text-lg md:text-2xl"
            >
              08 MAY 2026 • LUCKNOW
            </motion.div>
          </motion.div>
          
          {/* Subtle Parallax Background elements */}
          <div className="absolute inset-0 opacity-10 fish-pattern" />
          <div className="absolute top-10 right-10 animate-float"><MadhubaniIllustration type="sun" /></div>
          <div className="absolute bottom-20 left-20 animate-float" style={{animationDelay: '1s'}}><MadhubaniIllustration type="fish" /></div>
        </section>

        {/* Story Section: Vibrant Madhubani Style */}
        <section className="py-32 px-6 md:px-20 bg-madhubani-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 border-l-8 border-b-8 border-madhubani-indigo rounded-bl-full" />
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="font-serif text-5xl text-madhubani-indigo italic border-l-4 border-madhubani-orange pl-6">The Union of Souls</h2>
              <p className="text-xl leading-relaxed text-madhubani-indigo/80 font-sans">
                Inspired by the folk art of Mithila, our wedding theme celebrates the vibrant colors of nature and the infinite lines of tradition. Like a Madhubani painting, our lives are now woven together with intricate patterns of love and devotion.
              </p>
              <div className="flex gap-4"><MadhubaniIllustration type="fish" /><MadhubaniIllustration type="fish" /></div>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square bg-madhubani-mustard rounded-2xl rotate-3 absolute inset-0 opacity-20" />
              <div className="aspect-square bg-white border-8 border-madhubani-red shadow-2xl relative z-10 flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10 madhubani-border" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-4 border-double border-madhubani-teal rounded-full flex items-center justify-center"
                >
                  <Heart size={80} className="text-madhubani-red" fill="#800000" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Family Cards: Multi-vibrant Madhubani Colors */}
        <section className="py-32 px-6 bg-madhubani-indigo text-madhubani-cream">
           <div className="max-w-6xl mx-auto space-y-20">
              <div className="text-center">
                 <h2 className="font-serif text-5xl gold-text mb-4 tracking-widest">The Lineage</h2>
                 <div className="w-24 h-1 bg-madhubani-orange mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                 <motion.div 
                   whileHover={{ y: -10 }}
                   className="bg-madhubani-red/20 border-2 border-madhubani-mustard p-12 rounded-[2rem] text-center space-y-8"
                 >
                    <div className="space-y-2">
                       <p className="text-madhubani-mustard uppercase tracking-widest text-xs">Groom's Family</p>
                       <h3 className="text-5xl font-serif text-madhubani-mustard">Ritanshu</h3>
                    </div>
                    <div className="space-y-4">
                       <p className="text-madhubani-cream/60 italic">Son of</p>
                       <p className="text-2xl font-serif leading-tight">Smt. Dharmpriya Gautam <br/> & <br/> Sh. Ranjul Jayant Gautam</p>
                    </div>
                 </motion.div>

                 <motion.div 
                   whileHover={{ y: -10 }}
                   className="bg-madhubani-teal/20 border-2 border-madhubani-orange p-12 rounded-[2rem] text-center space-y-8"
                 >
                    <div className="space-y-2">
                       <p className="text-madhubani-orange uppercase tracking-widest text-xs">Bride's Family</p>
                       <h3 className="text-5xl font-serif text-madhubani-orange">Ria</h3>
                    </div>
                    <div className="space-y-4">
                       <p className="text-madhubani-cream/60 italic">Daughter of</p>
                       <p className="text-2xl font-serif leading-tight">Smt. Usha Keshari <br/> & <br/> Sh. Om Prakash Keshari</p>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Timeline Section: Parallax Scrolling Events */}
        <section className="py-32 bg-madhubani-cream">
           <div className="max-w-5xl mx-auto px-6 space-y-24">
              <div className="flex items-center gap-8">
                <div className="h-px flex-1 bg-madhubani-red/20" />
                <h2 className="font-serif text-6xl text-madhubani-red italic">The Happening</h2>
                <div className="h-px flex-1 bg-madhubani-red/20" />
              </div>

              <div className="space-y-32">
                 {/* Event 1 */}
                 <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="flex flex-col md:flex-row items-center gap-16 border-b border-madhubani-red/10 pb-20"
                 >
                    <div className="w-full md:w-1/3 text-center md:text-right">
                       <h4 className="text-madhubani-orange font-bold uppercase tracking-widest mb-2">06 MAY 2026</h4>
                       <p className="text-madhubani-indigo text-xl">06:00 PM onwards</p>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-madhubani-red flex items-center justify-center shrink-0">
                       <div className="w-8 h-8 rounded-full bg-madhubani-mustard animate-pulse" />
                    </div>
                    <div className="flex-1 space-y-4">
                       <h3 className="text-4xl font-serif text-madhubani-red">Mehendi Ceremony</h3>
                       <p className="font-hindi text-xl text-madhubani-teal">मेहंदी रस्म एवं संगीत</p>
                       <p className="text-madhubani-indigo/70">A vibrant evening filled with songs, dance, and the intricate art of henna.</p>
                       <p className="flex items-center gap-2 text-madhubani-indigo font-bold pt-2"><MapPin size={18}/> City Club, Lucknow</p>
                    </div>
                 </motion.div>

                 {/* Event 2 */}
                 <motion.div 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="flex flex-col md:flex-row-reverse items-center gap-16 border-b border-madhubani-red/10 pb-20"
                 >
                    <div className="w-full md:w-1/3 text-center md:text-left">
                       <h4 className="text-madhubani-indigo font-bold uppercase tracking-widest mb-2">08 MAY 2026</h4>
                       <p className="text-madhubani-orange text-xl">07:00 PM onwards</p>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-madhubani-indigo flex items-center justify-center shrink-0">
                       <div className="w-8 h-8 rounded-full bg-madhubani-teal animate-pulse" />
                    </div>
                    <div className="flex-1 text-center md:text-right space-y-4">
                       <h3 className="text-4xl font-serif text-madhubani-indigo">The Wedding</h3>
                       <p className="font-hindi text-xl text-madhubani-orange">विवाह समारोह</p>
                       <p className="text-madhubani-indigo/70">The auspicious moment of our union in the presence of family and Dhamma.</p>
                       <p className="flex items-center justify-center md:justify-end gap-2 text-madhubani-indigo font-bold pt-2"><MapPin size={18}/> City Club, Lucknow</p>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Footer: Blessings Request */}
        <section className="py-40 bg-madhubani-indigo text-center px-6 relative">
          <div className="absolute inset-0 opacity-5 madhubani-border" />
          <div className="max-w-2xl mx-auto space-y-12 relative z-10">
            <Heart size={64} className="mx-auto text-madhubani-orange mb-8 cursor-pointer hover:scale-125 transition-transform" />
            <h2 className="font-serif text-5xl md:text-6xl text-madhubani-mustard italic">Blessings over Gifts</h2>
            <p className="text-2xl text-madhubani-cream font-light leading-relaxed">
              "In the spirit of true mindfulness, your presence and blessings are our greatest treasure. No gifts, only love requested."
            </p>
            <div className="pt-20 border-t border-madhubani-mustard/20">
               <p className="font-hindi text-4xl text-madhubani-mustard mb-4 tracking-[0.2em]">🙏 नमो बुद्धाय 🙏</p>
               <h3 className="font-handwritten text-4xl text-madhubani-cream">Ritanshu & Ria</h3>
               <p className="text-xs uppercase tracking-[0.5em] text-madhubani-mustard/40 mt-10">Created with love • 2026</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;