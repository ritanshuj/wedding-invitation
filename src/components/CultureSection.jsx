import React from 'react';
import { motion } from 'framer-motion';

const CultureSection = () => {
    return (
        <section className="bg-wedding-maroon py-20 overflow-hidden text-center">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center"
                >
                    <div className="flex gap-4 mb-10">
                        {/* Dhol Player Animation */}
                        <motion.img 
                            animate={{ rotate: [-5, 5, -5] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            src="https://img.icons8.com/emoji/96/drum-emoji.png" 
                            className="w-16 h-16"
                        />
                        <motion.img 
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 0.7, repeat: Infinity }}
                            src="https://img.icons8.com/color/96/dancing-party.png" 
                            className="w-16 h-16"
                        />
                         <motion.img 
                            animate={{ rotate: [5, -5, 5] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            src="https://img.icons8.com/emoji/96/drum-emoji.png" 
                            className="w-16 h-16"
                        />
                    </div>
                    
                    <h2 className="text-wedding-gold font-cursive text-5xl mb-6">Joyful Celebration</h2>
                    <p className="text-wedding-cream text-lg max-w-md mx-auto leading-relaxed">
                        Join us for an evening filled with love, laughter, and traditions as we 
                        commence our new life under the guidance of the Enlightened One.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CultureSection;
