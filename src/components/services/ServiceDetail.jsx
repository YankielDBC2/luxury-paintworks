import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, ChevronDown, ChevronUp, MapPin, Phone, Clock, Shield, Star, Award, ThumbsUp, ArrowRight } from 'lucide-react';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';
import { contactInfo } from '../../data/servicesData';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <span className="font-semibold text-slate-800">{question}</span>
        {isOpen ? <ChevronUp className="text-blue-600" size={20} /> : <ChevronDown className="text-blue-600" size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-slate-600">
          {answer}
        </div>
      )}
    </div>
  );
}

function WhyChooseItem({ icon: Icon, text, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-3"
    >
      <div className="bg-blue-100 p-2 rounded-lg">
        <Icon className="text-blue-600" size={20} />
      </div>
      <span className="text-slate-700">{text}</span>
    </motion.div>
  );
}

export const ServiceDetail = ({ service, navigateTo }) => {
  if (!service) return null;

  return (
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div {...fadeInUp}>
            <button 
              onClick={() => navigateTo('home')}
              className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-4 py-2 rounded-full w-fit transition-all hover:shadow-md"
            >
              <ChevronRight className="rotate-180" size={18} /> 
              Volver al Inicio
            </button>
          </motion.div>

          {/* Hero Section */}
          <motion.div {...fadeInUp} className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              {service.h1}
            </h1>
            {service.subtitle && (
              <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
                {service.subtitle}
              </p>
            )}
            
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <BeforeAfterSlider 
                beforeImage={service.imageBefore}
                afterImage={service.imageAfter}
                alt={service.title}
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  ¿Por qué elegirnos para tu proyecto de {service.title.toLowerCase()}?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-600 pl-6 py-2">
                  {service.intro}
                </p>
              </motion.div>

              {/* Benefits */}
              {service.benefits && (
                <motion.div {...fadeInUp} className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ThumbsUp className="text-blue-600" />
                    ¿Por qué es importante este servicio?
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.benefits}
                  </p>
                </motion.div>
              )}

              {/* Why Choose Us */}
              {service.whyChoose && (
                <motion.div {...fadeInUp}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    ¿Por qué contratarnos?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.whyChoose.map((item, i) => (
                      <WhyChooseItem 
                        key={i} 
                        icon={CheckCircle2} 
                        text={item} 
                        delay={i * 0.1} 
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Service Sections */}
              <motion.div variants={staggerContainer} initial="initial" animate="animate">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.sections.map((section, idx) => (
                    <motion.div 
                      key={idx}
                      variants={fadeInUp}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="text-blue-600" />
                        {section.name}
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <motion.div {...fadeInUp} className="mt-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Preguntas Frecuentes
                  </h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, i) => (
                      <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 text-white shadow-xl"
              >
                <h3 className="text-xl font-bold mb-3">
                  ¿Necesitas {service.title}?
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Contamos con años de experiencia y cientos de proyectos exitosos en Miami.
                </p>
                <a 
                  href="#contacto" 
                  className="block text-center bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {service.cta || 'Cotizar Ahora'}
                  <ArrowRight size={18} />
                </a>
                
                <div className="mt-4 pt-4 border-t border-blue-500">
                  <div className="flex items-center gap-2 text-blue-100 text-sm">
                    <Phone size={16} />
                    <span>{contactInfo.phone}</span>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <h4 className="font-bold text-slate-800 mb-4">
                  ¿Por qué confiar en nosotros?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="text-green-600" size={20} />
                    <span className="text-sm text-slate-600">Licencia y seguro</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="text-yellow-500" size={20} />
                    <span className="text-sm text-slate-600">5.0 rating en Yelp</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-blue-600" size={20} />
                    <span className="text-sm text-slate-600">10+ años experiencia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-orange-500" size={20} />
                    <span className="text-sm text-slate-600">Puntuales</span>
                  </div>
                </div>
              </motion.div>

              {/* Service Area */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
              >
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <MapPin className="text-blue-600" />
                  Área de Servicio
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Servimos en todo el sur de Florida:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Miami', 'Miami Beach', 'Hollywood', 'Fort Lauderdale', 'Hialeah'].map(city => (
                    <span key={city} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                      {city}
                    </span>
                  ))}
                  <span className="text-slate-400 text-xs">+ más</span>
                </div>
              </motion.div>

              {/* Keywords */}
              {service.keywords && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                >
                  <h4 className="text-sm font-bold text-slate-800 mb-3">
                    Buscan también:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.slice(0, 10).map((kw, i) => (
                      <span 
                        key={i} 
                        className="bg-white px-3 py-1.5 rounded-xl text-xs font-medium text-slate-600 border border-slate-200"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};