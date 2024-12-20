import React, { useState } from "react";
import { X } from "lucide-react";

const memories = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dkemzm4ju/image/upload/v1733504708/photo_2024-12-07_00-04-42_k7rspr.jpg",
    caption: "Picnic Date",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dyjygfrkh/image/upload/v1733416455/2hero_g8zsnz.jpg",
    caption: "Polaroid Collection",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dkemzm4ju/image/upload/v1733502420/photo_2024-12-06_23-25-45_ajuwqz.jpg",
    caption: "Time Together",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dkemzm4ju/image/upload/v1733502420/photo_2024-12-06_23-25-38_gor585.jpg",
    caption: "Art Dating",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dkemzm4ju/image/upload/v1733502421/photo_2024-12-06_23-25-40_mvljvn.jpg",
    caption: "Food Court Hunt",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dkemzm4ju/image/upload/v1733505651/photo_2024-12-07_00-20-28_qs132t.jpg",
    caption: "Picnic in the Park",
  },
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
              <p className="text-white p-4 text-lg font-medium">
                {memory.caption}
              </p>
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
