import React from 'react';

const PetalFall = () => {
  const petals = Array.from({ length: 15 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((_, i) => (
        <div
          key={i}
          className="absolute animate-petal-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 7}s`,
          }}
        >
          <div 
            className="w-4 h-4 rounded-full opacity-60"
            style={{
              backgroundColor: i % 2 === 0 ? '#ffccb6' : '#ffd700',
              transform: `scale(${0.5 + Math.random()})`,
              filter: 'blur(1px)'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PetalFall;
