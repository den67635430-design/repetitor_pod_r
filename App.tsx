import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import ChatSection from './components/ChatSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />
      <HeroSection />
      <ProblemsSection />
      <ChatSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;
