import React, { useState } from 'react';
import { Navigation } from './components/layout/Navigation.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/home/Hero.jsx';
import { QuickFeatures } from './components/home/QuickFeatures.jsx';
import { ServicesGrid } from './components/home/ServicesGrid.jsx';
import { ServiceDetail } from './components/services/ServiceDetail.jsx';
import { ContactSection } from './components/contact/ContactSection.jsx';
import { LanguageProvider, LanguageSelector } from './contexts/LanguageContext.jsx';
import { useScroll } from './hooks/useScroll.js';
import { useServicesData } from './hooks/useServicesData.js';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const scrolled = useScroll(20);
  const servicesData = useServicesData();

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  const currentService = servicesData.find(s => s.id === currentPage);
  const isHome = currentPage === 'home';

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <LanguageSelector />
      <Navigation 
        currentPage={currentPage}
        navigateTo={navigateTo}
        scrolled={scrolled}
      />

      {isHome && (
        <>
          <Hero />
          <QuickFeatures />
          <ServicesGrid navigateTo={navigateTo} />
        </>
      )}

      {!isHome && currentService && (
        <ServiceDetail 
          service={currentService}
          navigateTo={navigateTo}
        />
      )}

      <ContactSection />
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;