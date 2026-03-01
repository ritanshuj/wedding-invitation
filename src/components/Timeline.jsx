import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, ArrowUpRight } from 'lucide-react';

const events = [
  {
    title: "Mehendi Ceremony",
    hindi: "मेहंदी रस्म",
    date: "May 06, 2026",
    time: "06:00 PM onwards",
    tag: "Celebration",
    color: "from-[#2A0505] to-[#1A0101]"
  },
  {
    title: "Wedding Ceremony",
    hindi: "विवाह समारोह",
    date: "May 08, 2026",
    time: "07:00 PM onwards",
    tag: "The Big Day",
    featured: true,
    color: "from-[#350202] to-[#1A0101]"
  }
];

export default function Timeline() {
  return (
    <section className="container mx-auto">
      <div className="text-center mb-32 space-y-4">
         <h2 className="font-serif text-6xl md:text-8xl gold-text italic">The Happening</h2>
         <p className="text-[10px] uppercase tracking-[0.8em] text-rich-gold/40">Events & Celebrations</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
            className={`glass-card rounded-[4rem] p-12 md:p-20 relative overflow-hidden flex flex-col justify-between h-full bg-gradient-to-br ${event.color}`}
          >
            {event.featured && (
               <div className="absolute top-10 right-10 flex items-center gap-2 text-saffron scale-75 uppercase tracking-widest border border-saffron/30 px-4 py-2 rounded-full font-bold">
                  The Union
               </div>
            )}

            <div className="space-y-16">
              <div className="space-y-4">
                 <h3 className="font-serif text-6xl md:text-7xl gold-text leading-tight">{event.title}</h3>
                 <p className="font-hindi text-3xl text-saffron tracking-wider">{event.hindi}</p>
              </div>
              
              <div className="space-y-10 border-y border-rich-gold/10 py-12">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                       <p className="text-[10px] uppercase text-rich-gold/40 tracking-wider">Date</p>
                       <p className="text-2xl font-serif text-champagne/90 flex items-center gap-3">
                          <Calendar size={20} className="text-rich-gold" /> {event.date}
                       </p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] uppercase text-rich-gold/40 tracking-wider">Time</p>
                       <p className="text-2xl font-serif text-champagne/90 flex items-center gap-3">
                          <Clock size={20} className="text-rich-gold" /> {event.time}
                       </p>
                    </div>
                 </div>
                 
                 <div className="space-y-2 pt-4">
                    <p className="text-[10px] uppercase text-rich-gold/40 tracking-wider">Location</p>
                    <div className="flex items-start gap-4">
                       <MapPin className="text-rich-gold shrink-0 mt-1" size={28} />
                       <div className="space-y-1">
                          <p className="text-3xl font-serif text-champagne tracking-wide leading-none">City Club</p>
                          <p className="text-sm text-champagne/40 tracking-wide font-light">Kursi Road, near St. Mary's Hospital, Lucknow</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="mt-16">
              <a 
                href="https://maps.google.com/?q=City+Club+Kursi+Road+Lucknow" 
                target="_blank"
                className="group relative inline-flex items-center gap-4 bg-rich-gold/5 border border-rich-gold/20 py-5 px-12 rounded-full overflow-hidden transition-all hover:bg-rich-gold"
              >
                <div className="absolute inset-x-0 h-full w-full scale-0 group-hover:scale-100 transition-transform bg-rich-gold" />
                <span className="relative z-10 text-rich-gold group-hover:text-royal-maroon uppercase tracking-widest font-bold text-xs">View on Maps</span>
                <ArrowUpRight className="relative z-10 text-rich-gold group-hover:text-royal-maroon" size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}