import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Shield, Clock, Award, ArrowUpRight } from 'lucide-react';
import { useServicesData } from '../../hooks/useServicesData.js';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const ServicesGrid = ({ navigateTo }) => {
  const { t, language } = useLanguage();
  const servicesData = useServicesData();
  
  return (
    <section id="servicios" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-3 md:px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            {t('servicesTitle')}
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 px-2">
            {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
          </h2>
          <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 md:mt-6 text-slate-600 max-w-2xl mx-auto text-sm md:text-lg px-2">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100/50 cursor-pointer"
                onClick={() => navigateTo(service.id)}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Service Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Title on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-5 md:p-6 relative">
                  <p className="text-slate-600 mb-5 line-clamp-2 leading-relaxed text-sm">
                    {service.intro?.substring(0, 90)}...
                  </p>
                  
                  {/* Benefits preview - modern badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-emerald-100">
                      <Shield size={12} /> {t('professional')}
                    </span>
                    <span className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-blue-100">
                      <Clock size={12} /> {t('clean')}
                    </span>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-blue-600 font-bold flex items-center gap-1.5 text-sm group-hover:gap-2 transition-all">
                      {t('viewDetails')} 
                      <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <a 
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 text-sm md:text-base"
          >
            {t('requestQuote')}
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};