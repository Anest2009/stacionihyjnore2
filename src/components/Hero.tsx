import React from 'react';
import { Button } from './Button';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#B5CDA3]/30 via-black/30 to-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 drop-shadow-lg">
          Shenjtërorja juaj për
          <span className="block mt-2 text-[#B5CDA3]">Vetëdije dhe rritje shpirtërore</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Zbuloni paqen e brendshme dhe rritjen shpirtërore përmes meditimit të drejtuar, praktikave të ndërgjegjes dhe zhvillimit personal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" className="backdrop-blur-sm">Pronoto Nje Seance</Button>
          <Button variant="outline" className="!text-white !border-white hover:!bg-white/10">
            Eksploro Sherbimet Tona
          </Button>
        </div>
      </div>
    </div>
  );
}
