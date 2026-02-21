import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Star, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const features = [
  {
    icon: ShieldCheck,
    key: 'licenseInsurance',
    descKey: 'licenseInsuranceDesc'
  },
  {
    icon: Clock,
    key: 'speedClean',
    descKey: 'speedCleanDesc'
  },
  {
    icon: Star,
    key: 'premiumQuality',
    descKey: 'premiumQualityDesc'
  },
  {
    icon: Award,
    key: 'experience',
    descKey: 'experienceDesc'
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
  const { t } = useLanguage();
  
  return (
    <section className="py-8 md:py-10 bg-white border-b border-slate-100">
      <div className="container mx-auto px-3 md:px-4">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={feature.key}
                variants={item}
                className="flex flex-col items-center text-center gap-2 p-3 md:p-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-100 p-2 md:p-3 rounded-full text-blue-600 mb-1 md:mb-2"
                >
                  <Icon size={20} md:size={24} />
                </motion.div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-0.5 text-xs md:text-sm">{t(feature.key)}</h3>
                  <p className="text-slate-500 text-xs">{t(feature.descKey)}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};