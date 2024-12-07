import React, { useState } from "react";
import { Hero } from "./components/Hero";
import { Slideshow } from "./components/Slideshow";
import { Message } from "./components/Message";
import { PhotoGallery } from "./components/PhotoGallery";
import Heart from "./components/Heart";

function App() {
  const [position, setPosition] = useState<{ x: Number; y: number }>({
    x: 0,
    y: 0,
  });

  return (
    <div className="min-h-screen">
      <Hero />
      <Message />
      {/* <Slideshow /> */}
      <PhotoGallery />
    </div>
  );
}

export default App;
