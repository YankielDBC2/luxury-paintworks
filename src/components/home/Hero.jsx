import React from 'react';
import { Button } from '../common/Button';

export const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 z-10" />
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/vidbanner.mp4" type="video/mp4" />
        {/* Fallback para navegadores que no soportan video */}
        Tu navegador no soporta videos HTML5.
      </video>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto uppercase tracking-tight">
          Transformamos su Hogar y Negocio en{' '}
          <span className="text-blue-400">Miami</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Hacemos la remodelación completa y dejamos su espacio limpio, sin polvo ni basura.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href="#servicios">
            Nuestros Servicios
          </Button>
          <Button variant="secondary" size="lg" href="#contacto">
            Presupuesto Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};