import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { S4HanaShowcase } from '../components/S4HanaShowcase';
import { ServicesSection } from '../components/ServicesSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { WhyKnooviqSection } from '../components/WhyKnooviqSection';
import { ProcessSection } from '../components/ProcessSection';
import { TechEcosystemSection } from '../components/TechEcosystemSection';
import { TrainingSection } from '../components/TrainingSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { CareersSection } from '../components/CareersSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onOpenContact: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContact }) => {
  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* Hero Section with Interactive 3D Ecosystem */}
      <Hero 
        onOpenContact={onOpenContact}
        onExploreServices={handleExploreServices}
      />

      {/* About KNOOVIQ Core Overview */}
      <AboutSection onOpenContact={() => onOpenContact()} />

      {/* S/4HANA Story: Legacy -> Transformation -> S/4HANA -> Intelligent Enterprise */}
      <S4HanaShowcase onOpenContact={onOpenContact} />

      {/* Core SAP Services Showcase */}
      <ServicesSection onSelectServiceForConsult={onOpenContact} />

      {/* Industry Verticals */}
      <IndustriesSection onOpenContact={onOpenContact} />

      {/* Why KNOOVIQ Differentiators */}
      <WhyKnooviqSection onOpenContact={onOpenContact} />

      {/* 6-Stage Delivery Process Flow */}
      <ProcessSection onOpenContact={onOpenContact} />

      {/* Technology & Innovation Ecosystem */}
      <TechEcosystemSection onOpenContact={onOpenContact} />

      {/* Corporate SAP Training Programs */}
      <TrainingSection onOpenContact={onOpenContact} />

      {/* Enterprise Case Studies & Metrics */}
      <CaseStudiesSection onOpenContact={() => onOpenContact()} />

      {/* Careers & Talent Pipeline */}
      <CareersSection />

      {/* Official Enterprise Consultation & Contact Form */}
      <ContactSection />
    </div>
  );
};
