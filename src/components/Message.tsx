import React from "react";
import { HeartHandshake } from "lucide-react";

export function Message() {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-pink-100 to-white">
      <div className="max-w-3xl mx-auto text-center">
        <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-pink-500" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          To My Beautiful Girlfriend
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Every moment with you feels like a gift, and on your special day, I
          want to celebrate all the joy and love you bring into my life. Your
          smile brightens my darkest days, and your love makes every moment
          magical. Here's to many more years of creating beautiful memories
          together.
        </p>
        <p className="mt-8 text-xl font-semibold text-pink-600">
          Happy Birthday Luisa, My Love! ❤️
        </p>
      </div>
    </div>
  );
}
