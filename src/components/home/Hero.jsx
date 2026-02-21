import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext';

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
  const { t } = useLanguage();
  
  return (
    <section className="relative h-[85vh] md:h-[90vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute top-16 md:top-20 left-4 md:left-10 w-24 md:w-32 h-24 md:h-32 bg-blue-500/20 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-16 md:bottom-20 right-4 md:right-10 w-32 md:w-48 h-32 md:h-48 bg-blue-400/20 rounded-full blur-2xl md:blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-3 md:px-4 relative z-20">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="text-center text-white"
        >
          <motion.h1 
            variants={item}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight max-w-4xl mx-auto uppercase tracking-tight"
          >
            {t('heroTitle')}
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-base md:text-xl mb-8 md:10 text-blue-100 max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
          >
            {t('heroSubtitle')}
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0"
          >
            <Button variant="primary" size="lg" href="#servicios">
              {t('viewServices')}
            </Button>
            <Button variant="secondary" size="lg" href="#contacto">
              {t('freeQuote')}
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={item}
            className="mt-12 md:16 flex flex-wrap justify-center gap-6 md:gap-8"
          >
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-400">10+</p>
              <p className="text-xs md:text-sm text-blue-200">{t('yearsExperience').split(' ')[0]}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-400">500+</p>
              <p className="text-xs md:text-sm text-blue-200">{t('projectsCompleted').split(' ')[0]}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-400">5.0</p>
              <p className="text-xs md:text-sm text-blue-200">⭐ Yelp</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-400">100%</p>
              <p className="text-xs md:text-sm text-blue-200">{t('satisfaction').split(' ')[0]}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 md:w-6 h-8 md:h-10 border-2 border-white/50 rounded-full flex justify-center pt-1.5 md:pt-2"
        >
          <div className="w-1 h-1.5 md:h-2 bg-white/70 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};