import React from 'react';
import { Hero } from './components/Hero';
import { Slideshow } from './components/Slideshow';
import { Message } from './components/Message';
import { PhotoGallery } from './components/PhotoGallery';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Message />
      <Slideshow />
      <PhotoGallery />
    </div>
  );
}

export default App;