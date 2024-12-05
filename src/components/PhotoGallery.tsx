import React, { useState } from 'react';
import { X } from 'lucide-react';

const memories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800",
    caption: "Our First Date"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800",
    caption: "Beach Sunset"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800",
    caption: "Coffee Shop Memories"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516589091380-5d8e21be1859?auto=format&fit=crop&w=800",
    caption: "Weekend Adventures"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800",
    caption: "Movie Night"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?auto=format&fit=crop&w=800",
    caption: "Picnic in the Park"
  }
];

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="py-16 px-4 bg-pink-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-800">
        Our Beautiful Memories
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={memory.image}
              alt={memory.caption}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-4 text-lg font-medium">{memory.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={memories[selectedImage].image}
            alt={memories[selectedImage].caption}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}