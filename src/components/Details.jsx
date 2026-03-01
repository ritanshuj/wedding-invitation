import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart } from 'lucide-react';

const Details = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="bg-wedding-deep py-20 px-6 relative overflow-hidden">
        {/* Decorative Indian Pattern Overlay */}
        <div 
            className="absolute top-0 left-0 w-full h-32 opacity-10"
            style={{ 
                backgroundImage: `url('https://www.transparenttextures.com/patterns/ep-natural-white.png')`,
                transform: 'rotate(180deg)'
            }}
        ></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <Heart className="mx-auto text-wedding-saffron mb-4 animate-pulse" fill="#FF9933" size={32} />
          <h3 className="text-wedding-gold font-cursive text-4xl mb-6">Our Families</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-wedding-cream">
            <div className="p-6 border border-wedding-gold/30 rounded-lg bg-black/20">
              <p className="text-wedding-saffron text-sm uppercase tracking-widest mb-2 font-bold">Groom's Parents</p>
              <p className="text-xl mb-1">Smt. Dharmpriya Gautam</p>
              <p className="text-xl">& Sh. Ranjul Jayant Gautam</p>
            </div>
            
            <div className="p-6 border border-wedding-gold/30 rounded-lg bg-black/20">
              <p className="text-wedding-saffron text-sm uppercase tracking-widest mb-2 font-bold">Bride's Parents</p>
              <p className="text-xl mb-1">Smt. Usha Keshari</p>
              <p className="text-xl">& Sh. Om Prakash Keshari</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16 gold-border bg-wedding-maroon p-8">
          <Calendar className="mx-auto text-wedding-gold mb-4" size={32} />
          <h3 className="text-wedding-gold font-cursive text-4xl mb-4">Save the Date</h3>
          <p className="text-5xl font-bold text-wedding-gold mb-2">08</p>
          <p className="text-2xl text-wedding-saffron font-light uppercase tracking-widest">May 2026</p>
          <div className="h-[2px] w-24 bg-wedding-gold mx-auto my-4"></div>
          <p className="text-wedding-cream text-lg">Friday | 7:00 PM Onwards</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <MapPin className="mx-auto text-wedding-gold mb-4" size={32} />
          <h3 className="text-wedding-gold font-cursive text-4xl mb-4">Venue</h3>
          <p className="text-2xl text-wedding-cream font-semibold mb-2">City Club | Kursi Road</p>
          <p className="text-wedding-cream/80 text-lg mb-6">
            Near St. Mary's Hospital,<br />
            Lucknow, Uttar Pradesh
          </p>
          <a 
            href="https://www.google.com/maps/search/City+Club+Kursi+Road+Lucknow" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-wedding-gold text-wedding-maroon px-8 py-3 font-bold rounded-full hover:bg-wedding-saffron transition-colors duration-300"
          >
            GET DIRECTIONS
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Details;
