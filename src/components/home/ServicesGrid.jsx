import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Shield, Clock, Award } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const ServicesGrid = ({ navigateTo }) => {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Servicios Profesionales en Miami
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
            Soluciones integrales de construcción y remodelación para aumentar la seguridad, el 
            valor y la belleza de su propiedad.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id} 
                variants={item}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group cursor-pointer"
                onClick={() => navigateTo(service.id)}
                whileHover={{ y: -8 }}
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-600/90 backdrop-blur-sm p-2.5 rounded-xl">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <p className="text-slate-600 mb-5 line-clamp-2 leading-relaxed text-sm">
                    {service.intro?.substring(0, 120)}...
                  </p>
                  
                  {/* Benefits preview */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.benefits && (
                      <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                        <Shield size={12} /> Profesional
                      </span>
                    )}
                    <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                      <Clock size={12} /> Limpio
                    </span>
                    <span className="bg-purple-50 text-purple-700 px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                      <Award size={12} /> Garantizado
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                      Ver detalles <ChevronRight size={16} />
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star 
                          key={i} 
                          size={10} 
                          className="fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="#contacto"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Solicitar Cotización Gratis
            <ChevronRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};