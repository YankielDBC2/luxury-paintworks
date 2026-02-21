import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Star, Award, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Licencia & Seguro',
    description: 'Trabajo protegido y garantizado',
    detail: 'Fully insured & licensed'
  },
  {
    icon: Clock,
    title: 'Rapidez & Limpieza',
    description: 'Respetamos su tiempo y espacio',
    detail: 'On-time, clean service'
  },
  {
    icon: Star,
    title: 'Calidad Premium',
    description: 'Materiales de primera categoría',
    detail: 'Top-quality materials'
  },
  {
    icon: Award,
    title: '10+ Años Experiencia',
    description: 'Miles de proyectos completados',
    detail: 'Proven track record'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const QuickFeatures = () => {
  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={item}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-100 p-3 rounded-full text-blue-600 mb-2"
                >
                  <Icon size={24} />
                </motion.div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm md:text-base">{feature.title}</h3>
                  <p className="text-slate-500 text-xs md:text-sm">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};