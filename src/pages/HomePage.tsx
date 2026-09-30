import React from 'react';
import { Hero } from '../components/Hero';
import { WhatKnooviqDoesSection } from '../components/home/WhatKnooviqDoesSection';
import { IntelligentErpSection } from '../components/home/IntelligentErpSection';
import { DataToIntelligenceSection } from '../components/home/DataToIntelligenceSection';
import { HomeIndustriesSection } from '../components/home/HomeIndustriesSection';
import { WhyKnooviqTypographySection } from '../components/home/WhyKnooviqTypographySection';
import { FeaturedSolutionsSection } from '../components/home/FeaturedSolutionsSection';

interface HomePageProps {
  onOpenContact: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContact }) => {
  const handleExploreServices = () => {
    const el = document.getElementById('what-knooviq-does');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0 bg-white min-h-screen">
      {/* 1. Hero Section with 3D Globe Centerpiece (Preserved Untouched) */}
      <Hero 
        onOpenContact={onOpenContact}
        onExploreServices={handleExploreServices}
      />

      {/* 2. What KNOOVIQ Does: 6 Premium Service Cards */}
      <WhatKnooviqDoesSection onOpenContact={onOpenContact} />

      {/* 4. Intelligent ERP for Facilities & Smart Asset Operations: Interactive Modules + Futuristic Dashboard UI */}
      <IntelligentErpSection onOpenContact={onOpenContact} />

      {/* 5. From Data to Intelligence: 5-Stage Connected Cyber Flow (Connect → Collect → Analyze → Automate → Optimize) */}
      <DataToIntelligenceSection />

      {/* 5. Solutions by Industry: 50% Content & 50% Image */}
      <HomeIndustriesSection onOpenContact={onOpenContact} />

      {/* 6. Why KNOOVIQ: Bold Typographic Statement & 4 Pillars (Innovation, Intelligence, Scalability, Reliability) */}
      <WhyKnooviqTypographySection />

      {/* 7. Case Studies / Featured Solutions: Smart Facilities, Cloud Infrastructure, Enterprise Automation */}
      <FeaturedSolutionsSection onOpenContact={onOpenContact} />
    </div>
  );
};

export default HomePage;
