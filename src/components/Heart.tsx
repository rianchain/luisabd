import React, { useEffect } from "react";
import "../Heart.css";

interface HeartProps {
  x: number;
  y: number;
}

const Heart: React.FC<HeartProps> = ({ x, y }) => {
  useEffect(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    const timer = setTimeout(() => {
      heart.remove();
    }, 1000);

    return () => clearTimeout(timer);
  }, [x, y]);

  return null;
};

export default Heart;
