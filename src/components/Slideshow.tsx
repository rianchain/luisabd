import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?auto=format&fit=crop&w=1200",
    title: "Our Journey Together",
    description: "Every moment with you is a treasure"
  },
  {
    image: "https://images.unsplash.com/photo-1516589091380-5d8e21be1859?auto=format&fit=crop&w=1200",
    title: "Adventures & Smiles",
    description: "Creating memories that last forever"
  },
  {
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200",
    title: "Love & Laughter",
    description: "The best is yet to come"
  }
];

export function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurrent((curr) => (curr + 1) % slides.length);

  return (
    <div className="relative h-[500px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}