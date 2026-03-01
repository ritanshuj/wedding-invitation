import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

const events = [
  {
    title: "Mehendi & Sangeet",
    date: "06 May, 2026",
    time: "06:00 PM",
    venue: "City Club, Lucknow",
    color: "from-royal-maroon via-red-900 to-royal-maroon",
  },
  {
    title: "The Wedding Ceremony",
    date: "08 May, 2026",
    time: "07:00 PM",
    venue: "City Club, Lucknow",
    color: "from-royal-maroon via-orange-950 to-royal-maroon",
    featured: true
  }
];

export default function Timeline() {
  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif text-5xl md:text-6xl gold-gradient">Celebrations</h2>
          <div className="h-1 w-24 bg-rich-gold/30 mx-auto" />
        </div>

        <div className="flex flex-col gap-12">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group rounded-[2.5rem] p-[2px] bg-gradient-to-r from-rich-gold/40 via-transparent to-rich-gold/40`}
            >
              <div className={`p-8 md:p-16 rounded-[calc(2.5rem-2px)] bg-gradient-to-br ${event.color} flex flex-col md:flex-row items-center gap-12`}>
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <h3 className="font-serif text-5xl gold-gradient leading-tight">{event.title}</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-8">
                    <div className="flex items-center gap-3 text-saffron uppercase font-sans font-semibold tracking-widest">
                       <Calendar size={20} /> {event.date}
                    </div>
                    <div className="flex items-center gap-3 text-saffron uppercase font-sans font-semibold tracking-widest">
                       <Clock size={20} /> {event.time}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-[1px] h-[1px] md:h-32 bg-rich-gold/20" />

                <div className="flex-1 flex flex-col items-center md:items-end gap-6 text-center md:text-right">
                  <div className="space-y-2">
                    <p className="flex items-center justify-center md:justify-end gap-2 text-rich-gold uppercase tracking-[0.2em] font-sans text-xs">
                       <MapPin size={16} /> Venue Address
                    </p>
                    <p className="font-serif text-3xl text-champagne">{event.venue}</p>
                    <p className="text-champagne/60 text-sm">Kursi Road, Near St. Mary's Hospital, Lucknow</p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=City+Club+Kursi+Road+Lucknow" 
                    target="_blank" 
                    className="px-10 py-4 border border-rich-gold/50 text-rich-gold uppercase tracking-widest text-xs font-bold hover:bg-rich-gold hover:text-royal-maroon transition-all duration-500 rounded-full"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}