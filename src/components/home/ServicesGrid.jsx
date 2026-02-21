import React from 'react';
import { ChevronRight, Star, Shield, Clock, Award } from 'lucide-react';
import { servicesData } from '../../data/servicesData.js';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export const ServicesGrid = ({ navigateTo }) => {
  const { t } = useLanguage();
  
  return (
    <section id="servicios" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-3 md:px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4 px-2">
            {t('servicesTitle')}
          </h2>
          <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 md:mt-6 text-slate-600 max-w-2xl mx-auto text-sm md:text-lg px-2">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group cursor-pointer"
                onClick={() => navigateTo(service.id)}
              >
                {/* Service Image */}
                <div className="relative h-44 md:h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 md:top-4 right-3 md:right-4">
                    <div className="bg-blue-600/90 backdrop-blur-sm p-2 md:p-2.5 rounded-xl">
                      <Icon size={18} md:size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 md:bottom-4 left-4 md:left-6 right-4 md:right-6">
                    <h3 className="text-lg md:text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-4 md:p-6">
                  <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                    {service.intro?.substring(0, 100)}...
                  </p>
                  
                  {/* Benefits preview */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                      <Shield size={12} /> {t('professional')}
                    </span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                      <Clock size={12} /> {t('clean')}
                    </span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                      <Award size={12} /> {t('guaranteed')}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-100">
                    <span className="text-blue-600 font-bold flex items-center gap-1 text-sm">
                      {t('viewDetails')} <ChevronRight size={14} md:size={16} />
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-16">
          <a 
            href="#contacto"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            {t('requestQuote')}
            <ChevronRight size={18} md:size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};