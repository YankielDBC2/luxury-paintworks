import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

const translations = {
  es: {
    backToHome: 'Volver al Inicio',
    ourServices: 'Servicios',
    contactUs: 'Contáctenos',
    getQuote: 'Cotización Gratis',
    viewDetails: 'Ver detalles',
    heroTitle: 'Transformamos su Hogar y Negocio',
    heroSubtitle: 'Servicios profesionales de pintura, ventanas de impacto y remodelación en Miami. Calidad garantizada, precios justos.',
    viewServices: 'Ver Servicios',
    freeQuote: 'Cotización Gratis',
    licenseInsurance: 'Licencia & Seguro',
    licenseInsuranceDesc: 'Trabajo protegido',
    speedClean: 'Rapidez & Limpieza',
    speedCleanDesc: 'Respetamos su tiempo',
    premiumQuality: 'Calidad Premium',
    premiumQualityDesc: 'Materiales de primera',
    experience: '10+ Años',
    experienceDesc: 'Miles de proyectos',
    servicesTitle: 'Servicios Profesionales en Miami',
    servicesSubtitle: 'Soluciones integrales de construcción y remodelación.',
    professional: 'Profesional',
    clean: 'Limpio',
    guaranteed: 'Garantizado',
    requestQuote: 'Solicitar Cotización',
    readyToTransform: '¿Listo para transformar su espacio?',
    contactSubtitle: 'Contáctenos hoy y obtenga un presupuesto gratuito',
    requestBudget: 'Solicite su Presupuesto',
    contactDesc: 'Expertos en remodelación con más de 10 años de experiencia',
    callsWhatsapp: 'Llamadas & WhatsApp',
    email: 'Email',
    coverageArea: 'Área de Cobertura',
    chatWhatsapp: 'Chat WhatsApp',
    sendSMS: 'Enviar SMS',
    followUs: 'Síguenos',
    hours: 'Lun-Sáb: 8am-6pm',
    yearsExperience: 'Años Experiencia',
    projectsCompleted: 'Proyectos',
    satisfaction: 'Satisfacción',
    availability: 'Disponibilidad',
    back: 'Volver',
    loadingReviews: 'Cargando reviews...',
    rating: 'en Yelp',
    yearsExp: 'años exp',
    punctual: 'Puntuales',
    serviceArea: 'Área de Servicio',
    serveArea: 'Servimos en todo el sur de Florida:',
    alsoSearch: 'Buscan también:',
    trustUs: '¿Por qué confiar en nosotros?',
    licenseAndInsurance: 'Licencia y seguro'
  },
  en: {
    backToHome: 'Back to Home',
    ourServices: 'Services',
    contactUs: 'Contact Us',
    getQuote: 'Free Quote',
    viewDetails: 'View Details',
    heroTitle: 'We Transform Your Home & Business',
    heroSubtitle: 'Professional painting, impact windows and remodeling services in Miami. Guaranteed quality, fair prices.',
    viewServices: 'View Services',
    freeQuote: 'Free Quote',
    licenseInsurance: 'License & Insurance',
    licenseInsuranceDesc: 'Protected work',
    speedClean: 'Speed & Clean',
    speedCleanDesc: 'We respect your time',
    premiumQuality: 'Premium Quality',
    premiumQualityDesc: 'Top-quality materials',
    experience: '10+ Years',
    experienceDesc: 'Thousands of projects',
    servicesTitle: 'Professional Services in Miami',
    servicesSubtitle: 'Comprehensive construction and remodeling solutions.',
    professional: 'Professional',
    clean: 'Clean',
    guaranteed: 'Guaranteed',
    requestQuote: 'Request Free Quote',
    readyToTransform: 'Ready to transform your space?',
    contactSubtitle: 'Contact us today for a free estimate',
    requestBudget: 'Request Your Free Estimate',
    contactDesc: 'Remodeling experts with over 10 years experience',
    callsWhatsapp: 'Calls & WhatsApp',
    email: 'Email',
    coverageArea: 'Service Area',
    chatWhatsapp: 'Chat on WhatsApp',
    sendSMS: 'Send SMS',
    followUs: 'Follow Us',
    hours: 'Mon-Sat: 8am-6pm',
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects',
    satisfaction: 'Satisfaction',
    availability: 'Availability',
    back: 'Back',
    loadingReviews: 'Loading reviews...',
    rating: 'on Yelp',
    yearsExp: 'years exp',
    punctual: 'Punctual',
    serviceArea: 'Service Area',
    serveArea: 'We serve all of South Florida:',
    alsoSearch: 'Also search for:',
    trustUs: 'Why trust us?',
    licenseAndInsurance: 'License and insurance'
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLang] = useState('es');
  
  useEffect(() => {
    const saved = localStorage.getItem('luxury-paintworks-language');
    if (saved) {
      setLang(saved);
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith('en')) setLang('en');
    }
  }, []);
  
  const setLanguage = (lang) => {
    setLang(lang);
    localStorage.setItem('luxury-paintworks-language', lang);
  };
  
  const t = (key) => translations[language]?.[key] || translations['es'][key] || key;
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

// Language Selector Modal
export function LanguageSelector() {
  const { setLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('luxury-paintworks-language');
    if (!saved) {
      setTimeout(() => setShowModal(true), 1500);
    } else {
      setHasSelected(true);
    }
  }, []);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setShowModal(false);
    setHasSelected(true);
  };

  if (hasSelected) return null;

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => handleSelect('es')} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full"
          >
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-blue-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Select your language</h2>
              <p className="text-slate-600 mb-6">Seleccione su idioma</p>
              <div className="flex gap-4">
                <button onClick={() => handleSelect('es')} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all hover:shadow-lg">
                  🇪🇸 Español
                </button>
                <button onClick={() => handleSelect('en')} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-4 px-6 rounded-xl transition-all hover:shadow-lg">
                  🇺🇸 English
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Small toggle for navbar
export function LanguageToggle({ className = '' }) {
  const { language, setLanguage } = useLanguage();
  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-sm transition-colors ${className}`}
    >
      <Globe size={16} />
      <span>{language === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
}