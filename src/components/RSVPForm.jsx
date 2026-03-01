import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const RSVPForm = () => {
  const [form, setForm] = useState({ name: '', guests: 1, event: 'All Events' });

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFDAB9', '#FFFDD0']
    });
    alert(`Thank you ${form.name}! Your RSVP for ${form.guests} guests is received.`);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl max-w-md mx-auto border-luxury-gold/30">
      <h3 className="font-serif text-3xl text-luxury-gold mb-6 text-center italic">Will You Join Us?</h3>
      <div className="space-y-4">
        <input
          className="w-full bg-white/50 border-b border-luxury-gold p-3 focus:outline-none focus:border-b-2 font-sans"
          placeholder="Your Full Name"
          required
          onChange={e => setForm({...form, name: e.target.value})}
        />
        <select 
          className="w-full bg-white/50 border-b border-luxury-gold p-3 focus:outline-none focus:border-b-2 font-sans appearance-none"
          onChange={e => setForm({...form, guests: e.target.value})}
        >
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} {n===1?'Guest':'Guests'}</option>)}
        </select>
        <button className="w-full bg-luxury-gold text-white font-serif py-4 rounded-full mt-4 hover:bg-luxury-gold/90 transition-all uppercase tracking-widest shadow-lg">
          Submit Blessing
        </button>
      </div>
    </form>
  );
};

export default RSVPForm;
