import React from 'react';
import { ShieldCheck, Clock, Star, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

const features = [
  { icon: ShieldCheck, key: 'licenseInsurance', descKey: 'licenseInsuranceDesc' },
  { icon: Clock, key: 'speedClean', descKey: 'speedCleanDesc' },
  { icon: Star, key: 'premiumQuality', descKey: 'premiumQualityDesc' },
  { icon: Award, key: 'experience', descKey: 'experienceDesc' }
];

export const QuickFeatures = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-8 md:py-10 bg-white border-b border-slate-100">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-2 p-3 md:p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="bg-blue-100 p-2 md:p-3 rounded-full text-blue-600 mb-1 md:mb-2">
                  <Icon size={20} md:size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-0.5 text-xs md:text-sm">{t(feature.key)}</h3>
                  <p className="text-slate-500 text-xs">{t(feature.descKey)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};