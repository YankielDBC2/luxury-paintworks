import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, ChevronDown, ChevronUp, MapPin, Phone, Clock, Shield, Star, Award, ThumbsUp, ArrowRight } from 'lucide-react';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';
import { contactInfo } from '../../data/servicesData';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

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
        className="w-full flex items-center justify-between p-3 md:p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <span className="font-semibold text-slate-800 text-sm md:text-base">{question}</span>
        {isOpen ? <ChevronUp className="text-blue-600 flex-shrink-0" size={18} /> : <ChevronDown className="text-blue-600 flex-shrink-0" size={18} />}
      </button>
      {isOpen && (
        <div className="p-3 md:p-4 bg-white text-slate-600 text-sm md:text-base">
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
      className="flex items-center gap-2 md:gap-3"
    >
      <div className="bg-blue-100 p-1.5 md:p-2 rounded-lg flex-shrink-0">
        <Icon className="text-blue-600 w-4 h-4 md:w-5 md:h-5" />
      </div>
      <span className="text-slate-700 text-sm md:text-base">{text}</span>
    </motion.div>
  );
}

export const ServiceDetail = ({ service, navigateTo }) => {
  const { t, tService, language } = useLanguage();
  
  if (!service) return null;
  
  // Get translated content
  const translatedService = tService(service.id, 'title') ? {
    ...service,
    title: tService(service.id, 'title'),
    h1: tService(service.id, 'h1'),
    subtitle: tService(service.id, 'subtitle'),
    intro: tService(service.id, 'intro'),
    benefits: tService(service.id, 'benefits'),
    cta: tService(service.id, 'cta'),
    whyChoose: serviceTranslations[language]?.[service.id]?.whyChoose || service.whyChoose,
    keywords: serviceTranslations[language]?.[service.id]?.keywords || service.keywords
  } : service;
  
  const whyChoose = translatedService.whyChoose || [];

  return (
    <section className="pt-20 md:pt-28 pb-12 md:pb-20">
      <div className="container mx-auto px-3 md:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div {...fadeInUp}>
            <button 
              onClick={() => navigateTo('home')}
              className="mb-4 md:mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-3 md:px-4 py-2 rounded-full w-fit transition-all hover:shadow-md text-sm md:text-base"
            >
              <ChevronRight className="rotate-180 w-4 h-4 md:w-[18px] md:h-[18px]" /> 
              {t('back')}
            </button>
          </motion.div>

          {/* Hero Section */}
          <motion.div {...fadeInUp} className="mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-3 md:mb-4">
              {translatedService.h1}
            </h1>
            {translatedService.subtitle && (
              <p className="text-lg md:text-xl text-blue-600 font-medium mb-4 md:mb-6">
                {translatedService.subtitle}
              </p>
            )}
            
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
              <BeforeAfterSlider 
                beforeImage={service.imageBefore}
                afterImage={service.imageAfter}
                alt={translatedService.title}
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 mb-12 md:mb-16">
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              {/* Introduction */}
              <motion.div {...fadeInUp}>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">
                  {t('whyChooseUs').replace('tu proyecto de', '').trim()} {translatedService.title}
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed border-l-4 border-blue-600 pl-4 md:pl-6 py-2">
                  {translatedService.intro}
                </p>
              </motion.div>

              {/* Benefits */}
              {translatedService.benefits && (
                <motion.div {...fadeInUp} className="bg-gradient-to-r from-blue-50 to-white rounded-2xl md:rounded-3xl p-4 md:p-8 border border-blue-100">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 flex items-center gap-2">
                    <ThumbsUp className="text-blue-600 w-5 h-5" />
                    {t('whyChooseService')}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {translatedService.benefits}
                  </p>
                </motion.div>
              )}

              {/* Why Choose Us */}
              {whyChoose.length > 0 && (
                <motion.div {...fadeInUp}>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">
                    {t('whyHireUs')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {whyChoose.map((item, i) => (
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {service.sections?.map((section, idx) => (
                    <motion.div 
                      key={idx}
                      variants={fadeInUp}
                      className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-3 md:mb-4 flex items-center gap-2">
                        <CheckCircle2 className="text-blue-600 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                        {section.name}
                      </h3>
                      <ul className="space-y-2 md:space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 md:mt-2 flex-shrink-0" />
                            <span className="text-slate-600 text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <motion.div {...fadeInUp} className="mt-8 md:mt-12">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">
                    {t('faqs')}
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    {service.faqs.map((faq, i) => (
                      <FAQItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4 md:space-y-6">
              {/* CTA Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl md:rounded-3xl p-4 md:p-6 text-white shadow-xl"
              >
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  {t('needService')} {translatedService.title}?
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  {language === 'es' ? 'Contamos con años de experiencia y cientos de proyectos exitosos en Miami.' : 'We have years of experience and hundreds of successful projects in Miami.'}
                </p>
                <a 
                  href="#contacto" 
                  className="block text-center bg-white text-blue-600 px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  {translatedService.cta || t('getQuote')}
                  <ArrowRight size={16} />
                </a>
                
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-blue-500">
                  <div className="flex items-center gap-2 text-blue-100 text-sm">
                    <Phone size={14} className="flex-shrink-0" />
                    <span className="text-xs md:text-sm">{contactInfo.phone}</span>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-50 rounded-2xl p-4 md:p-6 border border-slate-200"
              >
                <h4 className="font-bold text-slate-800 mb-3 md:mb-4 text-sm md:text-base">
                  {t('trustUs')}
                </h4>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Shield className="text-green-600 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{t('licenseAndInsurance')}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <Star className="text-yellow-500 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">5.0 {t('rating')}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <Award className="text-blue-600 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">10+ {t('yearsExp')}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <Clock className="text-orange-500 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{t('punctual')}</span>
                  </div>
                </div>
              </motion.div>

              {/* Service Area */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200"
              >
                <h4 className="font-bold text-slate-800 mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                  <MapPin className="text-blue-600 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  {t('serviceArea')}
                </h4>
                <p className="text-sm text-slate-600 mb-2 md:mb-3">
                  {t('serveArea')}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {['Miami', 'Miami Beach', 'Hollywood', 'Fort Lauderdale', 'Hialeah'].map(city => (
                    <span key={city} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                      {city}
                    </span>
                  ))}
                  <span className="text-slate-400 text-xs">+ más</span>
                </div>
              </motion.div>

              {/* Keywords */}
              {translatedService.keywords && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-slate-50 rounded-2xl p-4 md:p-6 border border-slate-200"
                >
                  <h4 className="text-xs md:text-sm font-bold text-slate-800 mb-2 md:mb-3">
                    {t('alsoSearch')}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {translatedService.keywords.slice(0, 8).map((kw, i) => (
                      <span 
                        key={i} 
                        className="bg-white px-2 md:px-3 py-1 rounded-xl text-xs font-medium text-slate-600 border border-slate-200"
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

// Fallback translations for service sections
const serviceTranslations = {
  es: {},
  en: {}
};