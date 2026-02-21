import React from 'react';
import { ShieldCheck, Clock, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { contactInfo } from '../../data/servicesData';

export const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Luxury Paintworks Corp" className="h-12" />
              <div>
                <span className="text-xl font-bold block">Luxury Paintworks</span>
                <span className="text-blue-400 text-sm font-medium">Corp</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              Expertos en pintura profesional, ventanas de impacto y remodelación en todo el sur de Florida. 
              Más de 10 años de experiencia construyendo confianza en cada proyecto.
            </p>
            <div className="flex gap-4">
              <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              Servicios
            </h4>
            <ul className="space-y-3 text-slate-400">
              {servicesData.slice(0, 5).map(service => (
                <li key={service.id}>
                  <button 
                    onClick={() => navigateTo(service.id)} 
                    className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></span>
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              Contacto
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">{contactInfo.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">{contactInfo.location}</p>
                  <p className="text-sm">Miami-Dade, Broward, Palm Beach</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <a href={`tel:${contactInfo.phoneRaw}`} className="font-medium text-white hover:text-blue-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="font-medium text-white hover:text-blue-400 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-slate-800 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <ShieldCheck className="text-blue-400" size={24} />
            </div>
            <div>
              <p className="font-bold text-white">Licencia & Seguro</p>
              <p className="text-xs text-slate-400">100% Protegido</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Clock className="text-blue-400" size={24} />
            </div>
            <div>
              <p className="font-bold text-white">10+ Años</p>
              <p className="text-xs text-slate-400">Experiencia</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-white">500+ Proyectos</p>
              <p className="text-xs text-slate-400">Completados</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-xl">★</span>
            </div>
            <div>
              <p className="font-bold text-white">5.0 Rating</p>
              <p className="text-xs text-slate-400">En Yelp</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Luxury Paintworks Corp. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
