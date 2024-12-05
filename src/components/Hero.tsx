import React from 'react';
import { Heart } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 blur-sm"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=2000")'
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="relative z-20 text-center text-white px-4">
        <Heart className="w-16 h-16 mx-auto mb-6 text-pink-500 animate-pulse" />
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Happy Birthday</h1>
        <p className="text-2xl md:text-3xl italic">My Dearest Love</p>
      </div>
    </div>
  );
}