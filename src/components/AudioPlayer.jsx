import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3')); // Relaxing Fusion Track

  useEffect(() => {
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser"));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-8 right-8 z-50 p-4 bg-white/80 border-2 border-luxury-gold rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center text-luxury-gold"
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      {isPlaying && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-luxury-gold"></span>
        </span>
      )}
    </button>
  );
};

export default AudioPlayer;
