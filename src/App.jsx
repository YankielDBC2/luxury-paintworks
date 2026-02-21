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
import { servicesData } from './data/servicesData.js';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const scrolled = useScroll(20);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  const currentService = servicesData.find(s => s.id === currentPage);
  const isHome = currentPage === 'home';

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Language Selector Modal */}
      <LanguageSelector />

      {/* Navigation */}
      <Navigation 
        currentPage={currentPage}
        navigateTo={navigateTo}
        scrolled={scrolled}
      />

      {/* Home Page Content */}
      {isHome && (
        <>
          <Hero />
          <QuickFeatures />
          <ServicesGrid navigateTo={navigateTo} />
        </>
      )}

      {/* Service Detail Page */}
      {!isHome && currentService && (
        <ServiceDetail 
          service={currentService}
          navigateTo={navigateTo}
        />
      )}

      {/* Contact Section - Always visible */}
      <ContactSection />

      {/* Footer */}
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