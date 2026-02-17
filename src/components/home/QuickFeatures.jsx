import React from 'react';
import { ShieldCheck, Clock, Star } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Licencia & Seguro',
    description: 'Trabajo protegido y garantizado'
  },
  {
    icon: Clock,
    title: 'Rapidez & Limpieza',
    description: 'Respetamos su tiempo y espacio'
  },
  {
    icon: Star,
    title: 'Calidad Premium',
    description: 'Materiales de primera categoría'
  }
];

export const QuickFeatures = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-500">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};