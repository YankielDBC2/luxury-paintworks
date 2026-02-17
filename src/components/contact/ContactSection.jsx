import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Clock } from 'lucide-react';
import { servicesData, contactInfo } from '../../data/servicesData';

export const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            ¿Listo para transformar su espacio?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Contáctenos hoy y obtenga un presupuesto gratuito sin compromiso
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-blue-700/50 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl -mr-36 -mt-36" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -ml-36 -mb-36" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              {/* Title */}
              <div className="text-center mb-10 md:mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Solicite su Presupuesto Gratis
                </h3>
                <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto">
                  Expertos en remodelación con más de 6 años de experiencia en el sur de Florida
                </p>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
                {/* Phone */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Phone size={28} className="text-white" />
                    </div>
                    <p className="text-sm text-blue-300 font-bold uppercase tracking-wider mb-2">
                      Llamadas & WhatsApp
                    </p>
                    <a href={`tel:${contactInfo.phoneRaw}`} className="text-xl md:text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Mail size={28} className="text-white" />
                    </div>
                    <p className="text-sm text-blue-300 font-bold uppercase tracking-wider mb-2">
                      Email
                    </p>
                    <a href={`mailto:${contactInfo.email}`} className="text-lg md:text-xl font-bold text-white hover:text-blue-300 transition-colors break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Coverage */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <MapPin size={28} className="text-white" />
                    </div>
                    <p className="text-sm text-blue-300 font-bold uppercase tracking-wider mb-2">
                      Área de Cobertura
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-white">
                      {contactInfo.coverage}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 md:mb-12">
                <a
                  href={`https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-5 px-6 rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={24} />
                  <span className="text-lg">Chatear por WhatsApp</span>
                </a>

                <a
                  href={`sms:${contactInfo.phoneRaw}?body=${encodeURIComponent(contactInfo.smsMessage)}`}
                  className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-5 px-6 rounded-2xl transition-all border-2 border-white/30 hover:border-white/50 shadow-xl transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={24} />
                  <span className="text-lg">Enviar SMS</span>
                </a>
              </div>

              {/* Divider */}
              <div className="relative mb-10 md:mb-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-blue-900 px-6 text-blue-300 font-semibold text-sm uppercase tracking-wider">
                    Síguenos
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex justify-center gap-4 mb-10 md:mb-12">
                <a
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md p-4 rounded-2xl hover:bg-white/20 transition-all border border-white/20 group shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <Instagram size={28} className="text-white group-hover:text-pink-400 transition-colors" />
                </a>
                <a
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md p-4 rounded-2xl hover:bg-white/20 transition-all border border-white/20 group shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <Facebook size={28} className="text-white group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href={contactInfo.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md p-4 rounded-2xl hover:bg-white/20 transition-all border border-white/20 group shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <svg className="w-7 h-7 text-white group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>

              {/* Social Proof */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <img 
                        key={i} 
                        className="w-12 h-12 rounded-full border-4 border-blue-900 shadow-lg" 
                        src={`https://i.pravatar.cc/100?u=${i}`} 
                        alt={`Cliente ${i}`} 
                      />
                    ))}
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-white font-bold text-lg mb-1">
                      +50 Clientes Satisfechos
                    </p>
                    <p className="text-blue-300 text-sm">
                      Calificación promedio: ⭐⭐⭐⭐⭐ 5/5
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                  <Clock size={20} className="text-blue-400" />
                  <span className="text-white font-semibold">
                    Lunes a Viernes: 8:00 AM - 8:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <p className="text-3xl font-bold text-blue-600 mb-2">6+</p>
              <p className="text-sm font-semibold text-slate-700">Años de Experiencia</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <p className="text-3xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-sm font-semibold text-slate-700">Proyectos Completados</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <p className="text-3xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-sm font-semibold text-slate-700">Satisfacción</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <p className="text-3xl font-bold text-blue-600 mb-2">24/7</p>
              <p className="text-sm font-semibold text-slate-700">Disponibilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};