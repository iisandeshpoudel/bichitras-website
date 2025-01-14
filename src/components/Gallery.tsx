import React from 'react';

const Gallery = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
          Gallery
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* First Image - Kathmandu Durbar Square */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/public/temple.png" 
              alt="Beautiful temple in Nepal with mountains in background" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Second Image - Fewa Lake */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/public/lake.jpg" 
              alt="Scenic l`ake view with mountains in Nepal" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
