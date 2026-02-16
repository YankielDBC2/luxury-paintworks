import React from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';

export const ServiceDetail = ({ service, navigateTo }) => {
  if (!service) return null;

  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with Before/After Slider */}
          <div className="mb-12">
            <button 
              onClick={() => navigateTo('home')}
              className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-4 py-2 rounded-full w-fit"
            >
              <ChevronRight className="rotate-180" size={18} /> 
              Volver al Inicio
            </button>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              {service.h1}
            </h1>

            <BeforeAfterSlider 
              beforeImage={service.imageBefore}
              afterImage={service.imageAfter}
              alt={service.title}
            />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              {/* Introduction */}
              <p className="text-xl text-slate-600 leading-relaxed mb-12 border-l-4 border-blue-600 pl-6">
                {service.intro}
              </p>
              
              {/* Service Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.sections.map((section, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
                  >
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                      <CheckCircle2 className="text-blue-600" />
                      {section.name}
                    </h3>
                    <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Keywords */}
              <div className="bg-slate-100 rounded-3xl p-8">
                <h4 className="text-lg font-bold text-blue-900 mb-4">
                  Especialistas en:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((kw, i) => (
                    <span 
                      key={i} 
                      className="bg-white px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 border border-slate-200 uppercase"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">
                  ¿Proyecto de {service.title}?
                </h3>
                <p className="text-blue-100 mb-6">
                  Ofrecemos los mejores precios en Miami con la máxima calidad.
                </p>
                <a 
                  href="#contacto" 
                  className="block text-center bg-white text-blue-600 px-6 py-4 rounded-xl font-extrabold hover:bg-slate-100 transition-all shadow-lg"
                >
                  Cotizar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};