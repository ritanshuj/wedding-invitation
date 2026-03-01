import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 text-center relative px-6 border-t-2 border-wedding-gold">
       <div className="absolute inset-0 bg-silk opacity-10"></div>
       
       <div className="relative z-10">
        <img src="https://img.icons8.com/ios-filled/50/D4AF37/lotus.png" alt="lotus" className="mx-auto mb-6 w-10 opacity-70" />
        
        <p className="text-wedding-gold font-cursive text-4xl mb-4 italic">
            Blessings Requested
        </p>
        
        <p className="text-wedding-cream text-xl font-light mb-8 max-w-lg mx-auto leading-relaxed">
            "Your presence and blessings are our greatest gift. We look forward to celebrating this auspicious day with you."
        </p>

        <div className="flex justify-center gap-6 text-wedding-gold/50 mb-10">
            <div className="h-[1px] w-12 bg-wedding-gold/30 self-center"></div>
            <span className="text-xs tracking-[0.4em] uppercase">Ritanshu & Ria</span>
            <div className="h-[1px] w-12 bg-wedding-gold/30 self-center"></div>
        </div>

        <p className="text-wedding-gold/40 text-xs">
            © 2026 Crafted with ❤️ for the Gautam & Keshari Family
        </p>
       </div>
    </footer>
  );
};

export default Footer;
