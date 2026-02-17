import React from 'react';
import { ShieldCheck, Clock, MapPin } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Luxury Paintworks Corp" className="h-10" />
              <span className="text-2xl font-bold tracking-tight">
                Luxury Paintworks Corp
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-lg">
              Calidad artesanal y compromiso profesional en cada proyecto de 
              remodelación en todo Florida. Construyendo confianza en cada proyecto.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-400">
              Nuestros Servicios
            </h4>
            <ul className="space-y-4 text-slate-400">
              {servicesData.map(service => (
                <li key={service.id}>
                  <button 
                    onClick={() => navigateTo(service.id)} 
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-400">
              Atención al Cliente
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-2">
                <Clock size={16} /> Lun - Vie: 8am - 8pm
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Miami, Florida
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('home')} 
                  className="hover:text-white transition-colors"
                >
                  Volver al Inicio
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Luxury Paintworks Corp. Todos los derechos 
            reservados.
          </p>
          <div className="flex gap-8">
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