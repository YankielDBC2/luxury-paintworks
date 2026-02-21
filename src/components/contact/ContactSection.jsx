import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Clock, Star } from 'lucide-react';
import { contactInfo } from '../../data/servicesData.js';
import { useYelpReviews, YelpReviews } from '../../hooks/useYelpReviews.jsx';

export const ContactSection = () => {
  const { data: yelpData, loading: yelpLoading, error: yelpError } = useYelpReviews();

  return (
    <section id="contacto" className="py-10 md:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-64 md:w-96 h-64 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-64 md:w-96 h-64 md:h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 px-2">
            ¿Listo para transformar su espacio?
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto px-2">
            Contáctenos hoy y obtenga un presupuesto gratuito sin compromiso
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-blue-700/50 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 md:w-72 h-48 md:h-72 bg-blue-600/20 rounded-full blur-3xl -mr-24 md:-mr-36 -mt-24 md:-mt-36" />
            <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-blue-400/10 rounded-full blur-3xl -ml-24 md:-ml-36 -mb-24 md:-mb-36" />
            
            <div className="relative z-10 p-5 md:p-10 lg:p-12">
              {/* Title */}
              <div className="text-center mb-6 md:mb-10">
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                  Solicite su Presupuesto Gratis
                </h3>
                <p className="text-blue-200 text-sm md:text-lg">
                  Expertos en remodelación con más de 10 años de experiencia en el sur de Florida
                </p>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-10">
                {/* Phone */}
                <div className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-2.5 md:p-3 rounded-xl md:rounded-2xl mb-2 md:mb-3 group-hover:scale-110 transition-transform shadow-lg">
                      <Phone size={20} md:size={24} className="text-white" />
                    </div>
                    <p className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">
                      Llamadas & WhatsApp
                    </p>
                    <a href={`tel:${contactInfo.phoneRaw}`} className="text-base md:text-xl font-bold text-white hover:text-blue-300 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-2.5 md:p-3 rounded-xl md:rounded-2xl mb-2 md:mb-3 group-hover:scale-110 transition-transform shadow-lg">
                      <Mail size={20} md:size={24} className="text-white" />
                    </div>
                    <p className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a href={`mailto:${contactInfo.email}`} className="text-xs md:text-lg font-bold text-white hover:text-blue-300 transition-colors break-all leading-tight">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Coverage */}
                <div className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-2.5 md:p-3 rounded-xl md:rounded-2xl mb-2 md:mb-3 group-hover:scale-110 transition-transform shadow-lg">
                      <MapPin size={20} md:size={24} className="text-white" />
                    </div>
                    <p className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">
                      Área de Cobertura
                    </p>
                    <p className="text-base md:text-xl font-bold text-white">
                      {contactInfo.coverage}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10">
                <a
                  href={`https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 md:py-4 px-4 rounded-xl md:rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 text-sm md:text-base"
                >
                  <MessageCircle size={18} md:size={20} className="md:w-6 md:h-6" />
                  <span>Chatear por WhatsApp</span>
                </a>

                <a
                  href={`sms:${contactInfo.phoneRaw}?body=${encodeURIComponent(contactInfo.smsMessage)}`}
                  className="flex items-center justify-center gap-2 md:gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-3 md:py-4 px-4 rounded-xl md:rounded-2xl transition-all border-2 border-white/30 hover:border-white/50 shadow-xl transform hover:scale-105 active:scale-95 text-sm md:text-base"
                >
                  <MessageCircle size={18} md:size={20} className="md:w-6 md:h-6" />
                  <span>Enviar SMS</span>
                </a>
              </div>

              {/* Divider */}
              <div className="relative mb-6 md:mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-blue-900 px-4 text-blue-300 font-semibold text-xs uppercase tracking-wider">
                    Síguenos
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md p-2.5 md:p-3 rounded-xl hover:bg-white/20 transition-all border border-white/20 group shadow-lg hover:shadow-xl transform hover:scale-110">
                  <Instagram size={20} md:size={24} className="text-white group-hover:text-pink-400 transition-colors" />
                </a>
                <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md p-2.5 md:p-3 rounded-xl hover:bg-white/20 transition-all border border-white/20 group shadow-lg hover:shadow-xl transform hover:scale-110">
                  <Facebook size={20} md:size={24} className="text-white group-hover:text-blue-400 transition-colors" />
                </a>
                <a href={contactInfo.social.tiktok} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md p-2.5 md:p-3 rounded-xl hover:bg-white/20 transition-all border border-white/20 group shadow-lg hover:shadow-xl transform hover:scale-110">
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>

              {/* Yelp Reviews */}
              {yelpLoading ? (
                <div className="bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10 mb-4 md:mb-6">
                  <div className="flex items-center justify-center gap-2 text-blue-300 text-sm">
                    <div className="animate-spin w-5 h-5 border-2 border-blue-300 border-t-transparent rounded-full"></div>
                    <span>Cargando reviews...</span>
                  </div>
                </div>
              ) : yelpError ? (
                <div className="bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10 mb-4 md:mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <img src="https://s3-media0.fl.yelpcdn.com/assets/srvz/yelp_design_web/yelp_bge_logo.svg" alt="Yelp" className="h-5 md:h-6 filter brightness-0 invert" />
                    <span className="text-blue-200 text-sm">Yelp</span>
                  </div>
                </div>
              ) : yelpData && (
                <div className="bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/10 mb-4 md:mb-6">
                  <YelpReviews data={yelpData} />
                </div>
              )}

              {/* Hours */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10">
                  <Clock size={16} md:size={18} className="text-blue-400" />
                  <span className="text-white font-semibold text-xs md:text-sm">
                    Lunes a Sábado: 8:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <p className="text-xl md:text-3xl font-bold text-blue-600 mb-1">10+</p>
              <p className="text-xs md:text-sm font-semibold text-slate-700">Años Experiencia</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <p className="text-xl md:text-3xl font-bold text-blue-600 mb-1">500+</p>
              <p className="text-xs md:text-sm font-semibold text-slate-700">Proyectos</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <p className="text-xl md:text-3xl font-bold text-blue-600 mb-1">100%</p>
              <p className="text-xs md:text-sm font-semibold text-slate-700">Satisfacción</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <p className="text-xl md:text-3xl font-bold text-blue-600 mb-1">24/7</p>
              <p className="text-xs md:text-sm font-semibold text-slate-700">Disponibilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};