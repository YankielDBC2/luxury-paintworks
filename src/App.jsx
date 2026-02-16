import React, { useState } from 'react';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { QuickFeatures } from './components/home/QuickFeatures';
import { ServicesGrid } from './components/home/ServicesGrid';
import { ServiceDetail } from './components/services/ServiceDetail';
import { ContactSection } from './components/contact/ContactSection';
import { useScroll } from './hooks/useScroll';
import { servicesData } from './data/servicesData';

const App = () => {
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
};

export default App;
