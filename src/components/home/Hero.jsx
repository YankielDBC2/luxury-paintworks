import React from 'react';
import { Button } from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

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
      </video>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-16 md:top-20 left-4 md:left-10 w-24 md:w-32 h-24 md:h-32 bg-blue-500/20 rounded-full blur-2xl md:blur-3xl"></div>
        <div className="absolute bottom-16 md:bottom-20 right-4 md:right-10 w-32 md:w-48 h-32 md:h-48 bg-blue-400/20 rounded-full blur-2xl md:blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-3 md:px-4 relative z-20">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight max-w-4xl mx-auto uppercase tracking-tight">
            {t('heroTitle')}
          </h1>
          
          <p className="text-base md:text-xl mb-8 md:10 text-blue-100 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0">
            <Button variant="primary" size="lg" href="#servicios">
              {t('viewServices')}
            </Button>
            <Button variant="secondary" size="lg" href="#contacto">
              {t('freeQuote')}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 md:16 flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-400">10+</p>
              <p className="text-xs md:text-sm text-blue-200">{t('experience')}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-400">500+</p>
              <p className="text-xs md:text-sm text-blue-200">{t('projectsCompleted')}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-400">5.0</p>
              <p className="text-xs md:text-sm text-blue-200">⭐ Yelp</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-400">100%</p>
              <p className="text-xs md:text-sm text-blue-200">{t('satisfaction')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-5 md:w-6 h-8 md:h-10 border-2 border-white/50 rounded-full flex justify-center pt-1.5 md:pt-2">
          <div className="w-1 h-1.5 md:h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};