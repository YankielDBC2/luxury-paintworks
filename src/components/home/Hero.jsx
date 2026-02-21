import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { ShieldCheck, Clock, Star, Users } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Clock, value: '10+', label: t('experience') },
    { icon: Users, value: '500+', label: t('projectsCompleted') },
    { icon: Star, value: '5.0', label: 'Yelp' },
    { icon: ShieldCheck, value: '100%', label: t('satisfaction') }
  ];
  
  return (
    <section className="relative h-[85vh] md:h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70 z-10" />
      
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-3 md:px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-blue-300 text-sm font-medium">✦ Miami · Broward · Palm Beach</span>
          </motion.div>
          
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white"
          >
            {t('heroTitle')}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed"
          >
            {t('heroSubtitle')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="cta" size="lg" href="#contacto">
              <span>💬</span> {t('freeQuote')}
            </Button>
            <Button variant="secondary" size="lg" href="#servicios">
              {t('viewServices')}
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-500/20 transition-all">
                  <stat.icon className="text-blue-400" size={24} />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs md:text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/70 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};
