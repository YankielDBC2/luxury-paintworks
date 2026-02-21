import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

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
        Tu navegador no soporta videos HTML5.
      </video>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="text-center text-white"
        >
          <motion.h1 
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto uppercase tracking-tight"
          >
            Transformamos su{' '}
            <span className="text-blue-400">Hogar</span> y{' '}
            <span className="text-blue-400">Negocio</span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed"
          >
            Servicios profesionales de pintura, ventanas de impacto y remodelación en Miami. 
            <span className="block mt-2 text-white font-medium">Calidad garantizada, precios justos.</span>
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" href="#servicios">
              Ver Servicios
            </Button>
            <Button variant="secondary" size="lg" href="#contacto">
              Cotización Gratis
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={item}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">10+</p>
              <p className="text-sm text-blue-200">Años</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">500+</p>
              <p className="text-sm text-blue-200">Proyectos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">5.0</p>
              <p className="text-sm text-blue-200">⭐ Yelp</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">100%</p>
              <p className="text-sm text-blue-200">Garantía</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};