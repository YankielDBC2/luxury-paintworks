import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { servicesData, contactInfo } from '../../data/servicesData';

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          {/* Contact Info */}
          <div className="bg-blue-900 text-white p-6 md:p-10 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Solicite su Presupuesto Gratis</h2>
              <p className="text-blue-200 mb-6 md:mb-8 text-base md:text-lg">
                Hablemos de su próximo proyecto. Presupuestos precisos y sin 
                compromiso en todo el sur de Florida.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl md:rounded-2xl">
                    <Phone size={20} className="text-blue-400 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-blue-300 font-bold uppercase tracking-wider">
                      Llamadas & WhatsApp
                    </p>
                    <p className="text-lg md:text-xl font-bold">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl md:rounded-2xl">
                    <Mail size={20} className="text-blue-400 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-blue-300 font-bold uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-lg md:text-xl font-bold break-all">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl md:rounded-2xl">
                    <MapPin size={20} className="text-blue-400 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-blue-300 font-bold uppercase tracking-wider">
                      Cobertura
                    </p>
                    <p className="text-lg md:text-xl font-bold">{contactInfo.coverage}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp & SMS Buttons */}
              <div className="mt-6 md:mt-8 space-y-3">
                <a
                  href={`https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 rounded-xl md:rounded-2xl transition-all shadow-lg text-sm md:text-base"
                >
                  <MessageCircle size={20} className="md:w-6 md:h-6" />
                  Chatear por WhatsApp
                </a>

                <a
                  href={`sms:${contactInfo.phoneRaw}?body=${encodeURIComponent(contactInfo.smsMessage)}`}
                  className="flex items-center justify-center gap-2 md:gap-3 w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-3 md:py-4 rounded-xl md:rounded-2xl transition-all border border-white/20 text-sm md:text-base"
                >
                  <MessageCircle size={20} className="md:w-6 md:h-6" />
                  Enviar SMS
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-6 md:mt-8">
                <p className="text-xs md:text-sm text-blue-300 font-bold uppercase tracking-wider mb-3 md:mb-4">
                  Síguenos en Redes
                </p>
                <div className="flex gap-3 md:gap-4">
                  <a
                    href={contactInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-md p-2.5 md:p-3 rounded-lg md:rounded-xl hover:bg-white/20 transition-all"
                  >
                    <Instagram size={20} className="text-white md:w-6 md:h-6" />
                  </a>
                  <a
                    href={contactInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-md p-2.5 md:p-3 rounded-lg md:rounded-xl hover:bg-white/20 transition-all"
                  >
                    <Facebook size={20} className="text-white md:w-6 md:h-6" />
                  </a>
                  <a
                    href={contactInfo.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-md p-2.5 md:p-3 rounded-lg md:rounded-xl hover:bg-white/20 transition-all"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/10 relative z-10 flex items-center gap-3 md:gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-blue-900" 
                    src={`https://i.pravatar.cc/100?u=${i}`} 
                    alt={`Cliente ${i}`} 
                  />
                ))}
              </div>
              <p className="text-xs md:text-sm text-blue-300">
                +500 clientes satisfechos en Miami
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-10 lg:w-3/5">
            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
              {/* Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wide">
                    Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all focus:bg-white text-sm md:text-base" 
                    placeholder="Ej. Juan Pérez"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wide">
                    Teléfono de Contacto
                  </label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all focus:bg-white text-sm md:text-base" 
                    placeholder="(305) 123-4567"
                    required
                  />
                </div>
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Tipo de Servicio
                </label>
                <select 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all focus:bg-white appearance-none text-sm md:text-base"
                  required
                >
                  <option value="">Seleccione un servicio...</option>
                  {servicesData.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                  <option value="general">Remodelación General</option>
                </select>
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Detalles del Proyecto
                </label>
                <textarea 
                  rows="4" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all focus:bg-white text-sm md:text-base" 
                  placeholder="¿Cómo podemos ayudarle?"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 md:py-5 rounded-xl md:rounded-2xl shadow-xl transition-all transform hover:scale-[1.01] active:scale-95 text-base md:text-lg"
              >
                Enviar Solicitud de Cita
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};