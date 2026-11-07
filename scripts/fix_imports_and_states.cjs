const fs = require('fs');
const path = require('path');

// 1. Fix SapSupplyChainSolutionView.tsx
{
  const p = path.resolve('src/components/transformation/SapSupplyChainSolutionView.tsx');
  let c = fs.readFileSync(p, 'utf8');
  if (!c.includes('TrendingUp,')) {
    c = c.replace("  TrendingDown,", "  TrendingDown,\n  TrendingUp,");
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log('Fixed SapSupplyChainSolutionView.tsx');
}

// 2. Fix SapAssessmentPage.tsx
{
  const p = path.resolve('src/pages/advisory/SapAssessmentPage.tsx');
  let c = fs.readFileSync(p, 'utf8');
  // Clean framer-motion import
  c = c.replace(/import\s*\{\s*Maximize2,\s*X,\s*motion,\s*AnimatePresence\s*\}\s*from\s*'framer-motion';/, "import { motion, AnimatePresence } from 'framer-motion';");
  c = c.replace(/import\s*\{\s*Search,/, "import {\n  Maximize2,\n  X,\n  ShieldCheck,\n  Search,");

  // Add isFullscreenImageOpen state inside component
  const compDef = 'export const SapAssessmentPage: React.FC<SapAssessmentPageProps> = ({ onOpenContact }) => {';
  const stateCode = `export const SapAssessmentPage: React.FC<SapAssessmentPageProps> = ({ onOpenContact }) => {
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreenImageOpen(false);
    };
    if (isFullscreenImageOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreenImageOpen]);`;

  if (!c.includes('const [isFullscreenImageOpen, setIsFullscreenImageOpen]')) {
    c = c.replace(compDef, stateCode);
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log('Fixed SapAssessmentPage.tsx');
}

// 3. Fix SapIntegrationSuitePage.tsx
{
  const p = path.resolve('src/pages/technology/SapIntegrationSuitePage.tsx');
  let c = fs.readFileSync(p, 'utf8');
  // Clean framer-motion import
  c = c.replace(/import\s*\{\s*Maximize2,\s*X,\s*motion\s*\}\s*from\s*'framer-motion';/, "import { motion } from 'framer-motion';");
  c = c.replace(/import\s*\{\s*Network,/, "import {\n  Maximize2,\n  X,\n  Network,");

  const compDef = 'export const SapIntegrationSuitePage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {';
  const stateCode = `export const SapIntegrationSuitePage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreenImageOpen(false);
    };
    if (isFullscreenImageOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreenImageOpen]);`;

  if (!c.includes('const [isFullscreenImageOpen, setIsFullscreenImageOpen]')) {
    c = c.replace(compDef, stateCode);
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log('Fixed SapIntegrationSuitePage.tsx');
}

// 4. Fix SapBtpPage.tsx
{
  const p = path.resolve('src/pages/technology/SapBtpPage.tsx');
  let c = fs.readFileSync(p, 'utf8');
  // Add React hooks import
  c = c.replace("import React from 'react';", "import React, { useState, useEffect } from 'react';");
  c = c.replace(/import\s*\{\s*Layers,/, "import {\n  Maximize2,\n  X,\n  Layers,");

  const compDef = 'export const SapBtpPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {';
  const stateCode = `export const SapBtpPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreenImageOpen(false);
    };
    if (isFullscreenImageOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreenImageOpen]);`;

  if (!c.includes('const [isFullscreenImageOpen, setIsFullscreenImageOpen]')) {
    c = c.replace(compDef, stateCode);
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log('Fixed SapBtpPage.tsx');
}

// 5. Fix CloudStrategyPage.tsx
{
  const p = path.resolve('src/pages/cloud/CloudStrategyPage.tsx');
  let c = fs.readFileSync(p, 'utf8');

  const compDef = 'export const CloudStrategyPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {';
  const stateCode = `export const CloudStrategyPage: React.FC<ChildPageProps> = ({ onOpenContact }) => {
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreenImageOpen(false);
    };
    if (isFullscreenImageOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreenImageOpen]);`;

  if (!c.includes('const [isFullscreenImageOpen, setIsFullscreenImageOpen]')) {
    c = c.replace(compDef, stateCode);
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log('Fixed CloudStrategyPage.tsx');
}

// 6. Fix PublicCloudPage.tsx
{
  const p = path.resolve('src/pages/cloud/PublicCloudPage.tsx');
  let c = fs.readFileSync(p, 'utf8');

  const compDef = 'export const PublicCloudPage: React.FC<PublicCloudPageProps> = ({ onOpenContact }) => {';
  const stateCode = `export const PublicCloudPage: React.FC<PublicCloudPageProps> = ({ onOpenContact }) => {
  const [isFullscreenImageOpen, setIsFullscreenImageOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreenImageOpen(false);
    };
    if (isFullscreenImageOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreenImageOpen]);`;

  if (!c.includes('const [isFullscreenImageOpen, setIsFullscreenImageOpen]')) {
    c = c.replace(compDef, stateCode);
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log('Fixed PublicCloudPage.tsx');
}
