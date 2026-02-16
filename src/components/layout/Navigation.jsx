import React, { useState } from 'react';
import { ShieldCheck, ChevronRight, Menu, X } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export const Navigation = ({ currentPage, navigateTo, scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (pageId) => {
    navigateTo(pageId);
    setIsMenuOpen(false);
  };

  const isHome = currentPage === 'home';
  const textColor = !scrolled && isHome ? 'text-white' : 'text-slate-700';
  const logoColor = !scrolled && isHome ? 'text-white' : 'text-blue-900';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'
      }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('home')}>
          <img src="/logo.png" alt="Luxury Paintworks Inc" className="h-10" />
          <span className={`text-xl font-bold tracking-tight ${logoColor}`}>
            Luxury Paintworks Inc
          </span>
        </div>        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => handleNavigate('home')}
            className={`font-medium hover:text-blue-500 transition-colors ${textColor}`}
          >
            Inicio
          </button>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className={`font-medium flex items-center gap-1 hover:text-blue-500 transition-colors ${textColor}`}
            >
              Servicios <ChevronRight size={16} className="rotate-90" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-100">
              {servicesData.map(service => (
                <button
                  key={service.id}
                  onClick={() => handleNavigate(service.id)}
                  className="w-full text-left px-4 py-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-3 border-b border-slate-50 last:border-0"
                >
                  <span className="text-blue-500">
                    <service.icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-medium">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          <a
            href="#contacto"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            Cotización Gratis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ?
            <X size={28} className={logoColor} /> :
            <Menu size={28} className={logoColor} />
          }
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-2">
            <button
              onClick={() => handleNavigate('home')}
              className="p-3 text-left font-semibold text-slate-700 border-b border-slate-100"
            >
              Inicio
            </button>

            <div className="p-3 font-bold text-blue-600">Nuestros Servicios:</div>

            {servicesData.map(service => (
              <button
                key={service.id}
                onClick={() => handleNavigate(service.id)}
                className="p-3 text-left text-slate-600 hover:bg-blue-50 flex items-center gap-3 rounded-lg"
              >
                <span className="text-blue-500">
                  <service.icon className="w-5 h-5" />
                </span>
                {service.title}
              </button>
            ))}

            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-blue-600 text-white text-center p-4 rounded-xl font-bold"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
