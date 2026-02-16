import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export const ServicesGrid = ({ navigateTo }) => {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Servicios Profesionales en Miami
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Soluciones integrales de construcción y remodelación para aumentar la seguridad, el 
            valor y la belleza de su propiedad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group cursor-pointer"
                onClick={() => navigateTo(service.id)}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white flex items-center gap-2">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                  <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                    {service.intro}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:gap-3 transition-all">
                      Ver detalles <ChevronRight size={18} />
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star 
                          key={i} 
                          size={12} 
                          className="fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
