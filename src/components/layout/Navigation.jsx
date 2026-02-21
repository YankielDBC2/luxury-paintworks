import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Phone } from 'lucide-react';
import { useServicesData } from '../../hooks/useServicesData.js';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { LanguageToggle } from '../../contexts/LanguageContext.jsx';
import { contactInfo } from '../../data/servicesData.js';

export const Navigation = ({ currentPage, navigateTo, scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useLanguage();
  const servicesData = useServicesData();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigate = (pageId) => {
    navigateTo(pageId);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isHome = currentPage === 'home';
  const textColor = !scrolled && isHome ? 'text-white' : 'text-slate-700';
  const logoColor = !scrolled && isHome ? 'text-white' : 'text-blue-900';
  const bgColor = scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${bgColor} ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-3 md:px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('home')}>
          <img src="/logo.png" alt="Luxury Paintworks Corp" className="h-9 md:h-11" />
          <span className={`text-lg md:text-xl font-bold tracking-tight ${logoColor}`}>
            Luxury Paintworks <span className="hidden md:inline">Corp</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-1">
          <button
            onClick={() => handleNavigate('home')}
            className={`px-4 py-2 rounded-full font-semibold hover:bg-white/10 transition-all ${textColor} ${!scrolled && isHome ? 'hover:bg-white/20' : 'hover:bg-blue-50'}`}
          >
            Inicio
          </button>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className={`px-4 py-2 rounded-full font-semibold flex items-center gap-1 transition-all ${textColor} ${!scrolled && isHome ? 'hover:bg-white/10' : 'hover:bg-blue-50'}`}
            >
              {t('ourServices')} <ChevronRight size={16} className={`transition-transform ${isServicesOpen ? 'rotate-90' : ''}`} />
            </button>
            
            {/* Dropdown Panel */}
            <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="p-2">
                {servicesData.map((service, idx) => (
                  <button
                    key={service.id}
                    onClick={() => handleNavigate(service.id)}
                    className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/50 text-slate-700 hover:text-blue-700 transition-all flex items-center gap-3 rounded-xl"
                  >
                    <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <service.icon className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-sm font-semibold block">{service.title}</span>
                      <span className="text-xs text-slate-400">{service.subtitle?.substring(0, 30)}...</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100/30 border-t border-blue-100">
                <button 
                  onClick={() => handleNavigate('pintura')}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  {t('viewDetails')} <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Phone CTA */}
          <a
            href={`tel:${contactInfo.phoneRaw}`}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${textColor} ${!scrolled && isHome ? 'hover:bg-white/10' : 'hover:bg-blue-50'}`}
          >
            <Phone size={16} />
            <span>{contactInfo.phone}</span>
          </a>

          {/* Language Toggle */}
          <LanguageToggle />

          <a
            href="#contacto"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            {t('getQuote')}
          </a>
        </div>

        {/* Mobile: Menu */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={`tel:${contactInfo.phoneRaw}`}
            className="p-2"
          >
            <Phone size={20} className={logoColor} />
          </a>
          <LanguageToggle className="text-xs" />
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ?
              <X size={24} className={logoColor} /> :
              <Menu size={24} className={logoColor} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col p-4 gap-2">
            {/* Quick Contact */}
            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl text-blue-700 font-semibold"
            >
              <Phone size={20} />
              {contactInfo.phone}
            </a>

            <button
              onClick={() => handleNavigate('home')}
              className="p-3 text-left font-semibold text-slate-700 border-b border-slate-100"
            >
              {t('backToHome')}
            </button>

            <div className="p-2 font-bold text-blue-600 text-sm">{t('ourServices')}:</div>

            {servicesData.map(service => (
              <button
                key={service.id}
                onClick={() => handleNavigate(service.id)}
                className="p-3 text-left text-slate-600 hover:bg-blue-50 flex items-center gap-3 rounded-xl"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <service.icon className="w-4 h-4" />
                </span>
                {service.title}
              </button>
            ))}

            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center p-4 rounded-xl font-bold"
            >
              {t('getQuote')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
