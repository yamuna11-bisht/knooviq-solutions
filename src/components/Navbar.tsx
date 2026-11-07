import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Layers,
  Award,
  BookOpen,
  Building2,
  Users,
  Store,
  Briefcase,
  Globe2,
  TrendingUp,
  PhoneCall,
  MapPin,
  Server,
  BarChart3,
  Users2,
  Cpu,
  Activity,
  Flame,
  Truck,
  UserCheck,
  Leaf,
  Boxes,
  Zap,
  Workflow,
  Cloud,
  RefreshCw,
  Network,
  Compass,
  Scale,
  FileCheck2,
  Database,
  Brain
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { KnooviqLogo } from './KnooviqLogo';
import { LanguageTranslator } from './LanguageTranslator';


interface ProductNavCategory {
  id: string;
  title: string;
  path?: string;
  badge?: string;
  items: { name: string; path: string }[];
}

const PRODUCTS_NAV_CATEGORIES: ProductNavCategory[] = [
  {
    id: 'accelerated-solutions',
    title: 'Accelerated Solutions',
    badge: 'CORE BTP',
    items: [
      { name: 'Global Trade & Compliance', path: '/exim' },
      { name: 'E-Invoicing Solutions', path: '/e-invoice' },
      { name: 'E-Way Bill Management', path: '/eway-bill' },
      { name: 'GST & Tax Compliance', path: '/products/gst' }
    ]
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    path: '/products',
    badge: 'SUITE',
    items: [
      { name: 'Vendor Management', path: '/products/vendor-management' },
      { name: 'Field Service Management', path: '/products/field-service-management' },
      { name: 'Real Estate Management', path: '/products/real-estate-management' },
      { name: 'Distribution Management', path: '/products/distribution-management' },
      { name: 'Digital Retail Solution', path: '/products/digital-retail-solution' },
      { name: 'Subscription Billing', path: '/products/subscription-billing' },
      { name: 'Sales Force Automation', path: '/products/sales-force-automation' },
      { name: 'Dealer Management System', path: '/products/dealer-management-system' },
      { name: 'Asset Management', path: '/products/asset-management' }
    ]
  },
  {
    id: 'ai-studio',
    title: 'Knooviq AI Studio',
    badge: 'GEN AI',
    items: [
      { name: 'Knooviq AI Consultant', path: '/products/knooviq-ai-consultant' },
      { name: 'Knooviq AI Insights', path: '/products/knooviq-ai-insights' },
      { name: 'Knooviq AI Engagement', path: '/products/knooviq-ai-engagement' }
    ]
  },
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI Products',
    badge: 'INTELLIGENCE',
    items: [
      { name: 'Bank Statement Intelligence', path: '/products/bank-statement-intelligence' },
      { name: 'Supply Chain Intelligence', path: '/products/supply-chain-intelligence' },
      { name: 'Document Intelligence', path: '/products/document-intelligence' },
      { name: 'Accounts Payable Intelligence', path: '/products/accounts-payable-intelligence' },
      { name: 'Expense Intelligence', path: '/products/expense-intelligence' },
      { name: 'Form Intelligence', path: '/products/form-intelligence' }
    ]
  },
  {
    id: 'automation-suite',
    title: 'Automation Suite',
    path: '/products/automation-suite',
    badge: 'RPA / IDP',
    items: [
      { name: 'Automation Studio', path: '/products/automation-studio' },
      { name: 'Automation Evolve', path: '/products/automation-evolve' },
      { name: 'Automation Manager', path: '/products/automation-manager' }
    ]
  }
];

interface TransformationCategory {
  id: string;
  num: string;
  title: string;
  badge: string;
  badgeColor: string;
  iconColor: string;
  icon: React.ReactNode;
  items: { name: string; path: string }[];
}

const TRANSFORMATION_CATEGORIES_DATA: TransformationCategory[] = [
  {
    id: 'business-transformation',
    num: '01',
    title: 'Business Transformation',
    badge: 'CORE',
    badgeColor: 'text-sky-600 dark:text-cyan-300 bg-sky-50 dark:bg-cyan-500/10 border-sky-200 dark:border-cyan-500/30',
    iconColor: 'bg-gradient-to-br from-sky-500/20 to-blue-600/15 border-sky-500/30 text-[#00A3E0] dark:text-cyan-300',
    icon: <Workflow className="w-3.5 h-3.5" />,
    items: [
      { name: 'SAP S/4HANA Transformation', path: '/transformation/sap-s4hana' },
      { name: 'ERP Transformation', path: '/transformation/erp-transformation' },
      { name: 'Digital Transformation', path: '/transformation/digital-transformation' },
      { name: 'Enterprise Transformation', path: '/transformation/sap-s4hana' },
      { name: 'Business Process Transformation', path: '/transformation/sap-s4hana' },
      { name: 'Intelligent Enterprise', path: '/technology/sap-business-ai' },
      { name: 'SAP Business Suite Transformation', path: '/transformation/sap-s4hana' },
      { name: 'RISE with SAP Transformation', path: '/transformation/rise-with-sap' },
      { name: 'SAP Cloud Transformation', path: '/transformation/cloud-transformation' },
      { name: 'Transformation Roadmap', path: '/transformation/sap-s4hana' }
    ]
  },
  {
    id: 'business-applications',
    num: '02',
    title: 'Business Applications',
    badge: 'ERP SUITE',
    badgeColor: 'text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30',
    iconColor: 'bg-gradient-to-br from-indigo-500/20 to-purple-600/15 border-indigo-500/30 text-indigo-600 dark:text-indigo-400',
    icon: <Layers className="w-3.5 h-3.5" />,
    items: [
      { name: 'SAP S/4HANA', path: '/transformation/business-applications?app=s4hana' },
      { name: 'Finance: SAP FI, CO, Treasury', path: '/transformation/business-applications?app=finance' },
      { name: 'Supply Chain: MM, SD, PP, EWM, TM', path: '/transformation/business-applications?app=supply-chain' },
      { name: 'Human Capital: SuccessFactors', path: '/transformation/business-applications?app=human-capital' },
      { name: 'Customer Experience: SAP CX, CRM', path: '/transformation/business-applications?app=cx' },
      { name: 'Asset Management', path: '/solutions/asset-management' },
      { name: 'Quality Management', path: '/transformation/sap-s4hana' }
    ]
  },
  {
    id: 'sap-technology',
    num: '03',
    title: 'SAP Technology',
    badge: 'PLATFORM',
    badgeColor: 'text-teal-600 dark:text-teal-300 bg-teal-50 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/30',
    iconColor: 'bg-gradient-to-br from-teal-500/20 to-emerald-600/15 border-teal-500/30 text-teal-600 dark:text-teal-400',
    icon: <Cpu className="w-3.5 h-3.5" />,
    items: [
      { name: 'SAP BTP', path: '/technology/sap-btp' },
      { name: 'SAP HANA', path: '/technology/sap-hana' },
      { name: 'SAP Fiori', path: '/technology/sap-fiori' },
      { name: 'SAP UI5', path: '/technology/sap-fiori' },
      { name: 'SAP ABAP', path: '/technology/sap-btp' },
      { name: 'SAP Integration Suite', path: '/technology/sap-integration-suite' },
      { name: 'SAP APIs', path: '/technology/sap-integration-suite' },
      { name: 'SAP Extensions', path: '/technology/sap-btp' },
      { name: 'Enterprise Architecture', path: '/technology/cloud-transformation' },
      { name: 'SAP Security', path: '/technology/sap-btp' }
    ]
  },
  {
    id: 'data-analytics-ai',
    num: '04',
    title: 'Data, Analytics & AI',
    badge: 'AI/ML',
    badgeColor: 'text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30',
    iconColor: 'bg-gradient-to-br from-purple-500/20 to-fuchsia-600/15 border-purple-500/30 text-purple-600 dark:text-purple-400',
    icon: <Sparkles className="w-3.5 h-3.5" />,
    items: [
      { name: 'SAP Business AI', path: '/technology/sap-business-ai' },
      { name: 'Generative AI', path: '/technology/generative-ai' },
      { name: 'AI Agents', path: '/technology/ai-agents' },
      { name: 'Machine Learning', path: '/products/knooviq-ai-insights' },
      { name: 'SAP Analytics Cloud', path: '/technology/sap-analytics-cloud' },
      { name: 'SAP Datasphere', path: '/technology/sap-datasphere' },
      { name: 'Business Intelligence', path: '/technology/sap-analytics-cloud' },
      { name: 'Predictive Analytics', path: '/technology/sap-analytics-cloud' },
      { name: 'Process Intelligence', path: '/solutions/sap-s4hana' },
      { name: 'Intelligent Automation', path: '/technology/intelligent-automation' }
    ]
  },
  {
    id: 'cloud-transformation',
    num: '05',
    title: 'Cloud Transformation',
    badge: 'CLOUD',
    badgeColor: 'text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30',
    iconColor: 'bg-gradient-to-br from-cyan-500/20 to-sky-600/15 border-cyan-500/30 text-cyan-600 dark:text-cyan-400',
    icon: <Cloud className="w-3.5 h-3.5" />,
    items: [
      { name: 'RISE with SAP', path: '/solutions/rise-with-sap' },
      { name: 'ERP Transformation', path: '/solutions/sap-s4hana?tab=erp' },
      { name: 'S/4HANA Cloud', path: '/solutions/grow-with-sap' },
      { name: 'Public Cloud', path: '/solutions/grow-with-sap' },
      { name: 'Private Cloud', path: '/solutions/rise-with-sap' },
      { name: 'Hybrid Cloud', path: '/solutions/sap-btp' },
      { name: 'Cloud Migration', path: '/solutions/sap-migration' },
      { name: 'Cloud Architecture', path: '/solutions/sap-s4hana' },
      { name: 'Cloud Integration', path: '/solutions/sap-btp' },
      { name: 'Cloud Operations', path: '/services' }
    ]
  },
  {
    id: 'migration-modernization',
    num: '06',
    title: 'Migration & Modernization',
    badge: 'CLEAN CORE',
    badgeColor: 'text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30',
    iconColor: 'bg-gradient-to-br from-amber-500/20 to-orange-600/15 border-amber-500/30 text-amber-600 dark:text-amber-400',
    icon: <RefreshCw className="w-3.5 h-3.5" />,
    items: [
      { name: 'System Conversion', path: '/transformation/system-conversion' },
      { name: 'Greenfield', path: '/transformation/greenfield' },
      { name: 'Brownfield', path: '/transformation/brownfield' },
      { name: 'Data Migration', path: '/transformation/data-migration' },
      { name: 'Custom Code Migration', path: '/transformation/custom-code-migration' }
    ]
  },
  {
    id: 'integration-ecosystem',
    num: '07',
    title: 'Integration & Ecosystem',
    badge: 'CONNECTED',
    badgeColor: 'text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30',
    iconColor: 'bg-gradient-to-br from-blue-500/20 to-indigo-600/15 border-blue-500/30 text-blue-600 dark:text-blue-400',
    icon: <Network className="w-3.5 h-3.5" />,
    items: [
      { name: 'SAP Integration Suite', path: '/solutions/sap-btp' },
      { name: 'SAP & Non-SAP Integration', path: '/solutions/sap-btp' },
      { name: 'API Integration', path: '/solutions/sap-btp' },
      { name: 'Application Integration', path: '/solutions/sap-btp' },
      { name: 'Data Integration', path: '/solutions/sap-datasphere' },
      { name: 'Third-Party Integration', path: '/solutions/sap-btp' },
      { name: 'Banking Integration', path: '/products/bank-statement-intelligence' },
      { name: 'Government Integration', path: '/products/gst' },
      { name: 'E-Commerce Integration', path: '/solutions/sap-cx' },
      { name: 'Enterprise Integration', path: '/solutions/sap-btp' }
    ]
  },
  {
    id: 'advisory-consulting',
    num: '08',
    title: 'Advisory & Consulting',
    badge: 'STRATEGIC',
    badgeColor: 'text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30',
    iconColor: 'bg-gradient-to-br from-rose-500/20 to-pink-600/15 border-rose-500/30 text-rose-600 dark:text-rose-400',
    icon: <Compass className="w-3.5 h-3.5" />,
    items: [
      { name: 'Advisory & Managed Services', path: '/advisory-managed-services' },
      { name: 'SAP Strategy', path: '/services/sap-strategy' },
      { name: 'SAP Assessment', path: '/services/sap-assessment' },
      { name: 'Solution Architecture', path: '/services/solution-architecture' },
      { name: 'Implementation & Integration', path: '/advisory-managed-services#implementation' },
      { name: 'ERP Strategy', path: '/services/sap-strategy' },
      { name: 'Digital Transformation Advisory', path: '/advisory-managed-services' },
      { name: 'Cloud Advisory', path: '/solutions/rise-with-sap' },
      { name: 'Transformation Roadmap', path: '/services/sap-strategy' }
    ]
  },
  {
    id: 'managed-services',
    num: '09',
    title: 'Managed Services',
    badge: '24×7 AMS',
    badgeColor: 'text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30',
    iconColor: 'bg-gradient-to-br from-emerald-500/20 to-teal-600/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    items: [
      { name: 'SAP AMS', path: '/services/sap-ams' },
      { name: 'Application Support', path: '/services/application-support' },
      { name: 'SAP Basis & Technical Ops', path: '/services/sap-basis' },
      { name: 'Continuous Monitoring', path: '/services/sap-ams#application-monitoring' },
      { name: 'Performance Management', path: '/services/sap-basis' },
      { name: 'Incident & Problem Management', path: '/services/sap-ams' },
      { name: 'Change & Release Governance', path: '/services/sap-ams' },
      { name: 'Upgrade & Patch Operations', path: '/services/sap-basis' },
      { name: '24×7 Global Support', path: '/services/sap-ams' }
    ]
  },
  {
    id: 'compliance-localization',
    num: '10',
    title: 'Compliance & Localization',
    badge: 'REGULATORY',
    badgeColor: 'text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30',
    iconColor: 'bg-gradient-to-br from-cyan-500/20 to-blue-600/15 border-cyan-500/30 text-cyan-600 dark:text-cyan-400',
    icon: <Scale className="w-3.5 h-3.5" />,
    items: [
      { name: 'India Localization', path: '/products/gst' },
      { name: 'GST Compliance', path: '/products/gst' },
      { name: 'E-Invoicing', path: '/e-invoice' },
      { name: 'E-Way Bill', path: '/eway-bill' },
      { name: 'Tax Compliance', path: '/products/gst' },
      { name: 'Statutory Reporting', path: '/products/gst' },
      { name: 'Regulatory Reporting', path: '/products/gst' },
      { name: 'Digital Compliance', path: '/products/gst' },
      { name: 'EXIM Compliance', path: '/exim' },
      { name: 'Localization Services', path: '/products/gst' }
    ]
  }
];

interface TransformationMegaItem {
  name: string;
  path: string;
}

interface TransformationMegaCategory {
  id: string;
  title: string;
  badge?: string;
  path: string;
  items: TransformationMegaItem[];
}

const TRANSFORMATION_MEGA_MENU: TransformationMegaCategory[] = [
  {
    id: 'business-transformation',
    title: 'Business Transformation',
    path: '/transformation/sap-s4hana',
    items: [
      { name: 'SAP S/4HANA Transformation', path: '/transformation/sap-s4hana' },
      { name: 'ERP Transformation', path: '/transformation/erp-transformation' },
      { name: 'Digital Transformation', path: '/transformation/digital-transformation' },
      { name: 'RISE with SAP', path: '/transformation/rise-with-sap' }
    ]
  },
  {
    id: 'sap-business-applications',
    title: 'SAP Business Applications',
    path: '/transformation/business-applications',
    items: [
      { name: 'SAP S/4HANA', path: '/transformation/business-applications?app=s4hana' },
      { name: 'Finance', path: '/transformation/business-applications?app=finance' },
      { name: 'Supply Chain', path: '/transformation/business-applications?app=supply-chain' },
      { name: 'Human Capital', path: '/transformation/business-applications?app=human-capital' },
      { name: 'Customer Experience', path: '/transformation/business-applications?app=cx' }
    ]
  },
  {
    id: 'sap-technology-cloud',
    title: 'SAP Technology & Cloud',
    path: '/technology/sap-btp',
    items: [
      { name: 'SAP BTP', path: '/technology/sap-btp' },
      { name: 'SAP HANA', path: '/technology/sap-hana' },
      { name: 'SAP Fiori', path: '/technology/sap-fiori' },
      { name: 'SAP Integration Suite', path: '/technology/sap-integration-suite' },
      { name: 'Cloud Transformation', path: '/transformation/cloud-transformation' }
    ]
  },
  {
    id: 'data-analytics-ai',
    title: 'Data, Analytics & AI',
    badge: 'GEN AI',
    path: '/technology/data-analytics-ai',
    items: [
      { name: 'SAP Business AI', path: '/technology/sap-business-ai' },
      { name: 'Generative AI', path: '/technology/generative-ai' },
      { name: 'AI Agents', path: '/technology/ai-agents' },
      { name: 'SAP Analytics Cloud', path: '/technology/sap-analytics-cloud' },
      { name: 'SAP Datasphere', path: '/technology/sap-datasphere' },
      { name: 'Intelligent Automation', path: '/technology/intelligent-automation' }
    ]
  },
  {
    id: 'migration-modernization',
    title: 'Migration & Modernization',
    badge: 'CLEAN CORE',
    path: '/transformation/migration-modernization',
    items: [
      { name: 'Clean Core Architecture', path: '/transformation/migration-modernization' },
      { name: 'Cloud Modernization', path: '/transformation/cloud-transformation' },
      { name: 'System Conversion', path: '/transformation/system-conversion' },
      { name: 'Greenfield', path: '/transformation/greenfield' },
      { name: 'Brownfield', path: '/transformation/brownfield' },
      { name: 'Data Migration', path: '/transformation/data-migration' },
      { name: 'Custom Code Migration', path: '/transformation/custom-code-migration' }
    ]
  },
  {
    id: 'advisory-managed-services',
    title: 'Advisory & Managed Services',
    path: '/advisory-managed-services',
    items: [
      { name: 'SAP Strategy', path: '/services/sap-strategy' },
      { name: 'SAP Assessment', path: '/services/sap-assessment' },
      { name: 'Solution Architecture', path: '/services/solution-architecture' },
      { name: 'SAP AMS', path: '/services/sap-ams' },
      { name: 'Application Support', path: '/services/application-support' },
      { name: 'SAP Basis', path: '/services/sap-basis' }
    ]
  }
];

interface CloudOpsMegaCategory {
  id: string;
  title: string;
  badge?: string;
  path: string;
  items: { name: string; path: string }[];
}

const CLOUD_OPS_MEGA_MENU: CloudOpsMegaCategory[] = [
  {
    id: 'cloud-strategy',
    title: 'Cloud Strategy',
    badge: 'ADVISORY',
    path: '/cloud-operations/strategy',
    items: [
      { name: 'Cloud Readiness', path: '/cloud-operations/readiness' },
      { name: 'Cloud Strategy', path: '/cloud-operations/strategy' },
      { name: 'Cloud Adoption', path: '/cloud-operations/adoption' },
      { name: 'Cloud Operating Model', path: '/cloud-operations/operating-model' }
    ]
  },
  {
    id: 'cloud-infrastructure-platforms',
    title: 'Cloud Infrastructure & Platforms',
    badge: 'PLATFORMS',
    path: '/cloud-operations/infrastructure',
    items: [
      { name: 'Public Cloud', path: '/cloud-operations/infrastructure/public-cloud' },
      { name: 'Private Cloud', path: '/cloud-operations/infrastructure/private-cloud' },
      { name: 'Hybrid Cloud', path: '/cloud-operations/infrastructure/hybrid-cloud' },
      { name: 'Cloud Architecture', path: '/cloud-operations/infrastructure/cloud-architecture' }
    ]
  },
  {
    id: 'cloud-provider-platforms',
    title: 'Cloud Provider Platforms',
    badge: 'HYPERSCALERS',
    path: '/cloud-operations/aws',
    items: [
      { name: 'Amazon Web Services (AWS)', path: '/cloud-operations/aws' },
      { name: 'Microsoft Azure', path: '/cloud-operations/azure' },
      { name: 'Google Cloud (GCP)', path: '/cloud-operations/gcp' }
    ]
  },
  {
    id: 'application-operations',
    title: 'Application Operations',
    badge: 'SRE & APM',
    path: '/cloud-operations/application-operations',
    items: [
      { name: 'Application Operations', path: '/cloud-operations/application-operations' },
      { name: 'Monitoring & Observability', path: '/cloud-operations/monitoring-observability' },
      { name: 'Performance Management', path: '/cloud-operations/performance-management' },
      { name: 'Availability & Reliability', path: '/cloud-operations/availability-reliability' }
    ]
  },
  {
    id: 'it-operations-managed-operations',
    title: 'IT Operations & Managed Operations',
    badge: '24×7 NOC',
    path: '/cloud-operations/managed-operations',
    items: [
      { name: 'Infrastructure Operations', path: '/cloud-operations/infrastructure-operations' },
      { name: 'Service Management', path: '/cloud-operations/service-management' },
      { name: 'Incident Management', path: '/cloud-operations/incident-management' },
      { name: 'Problem Management', path: '/cloud-operations/problem-management' },
      { name: 'Change Management', path: '/cloud-operations/change-management' }
    ]
  },
  {
    id: 'security-resilience',
    title: 'Security & Resilience',
    badge: 'ZERO TRUST',
    path: '/cloud-operations/security',
    items: [
      { name: 'Cybersecurity', path: '/cloud-operations/cybersecurity' },
      { name: 'Identity & Access Management', path: '/cloud-operations/iam' },
      { name: 'Data Protection', path: '/cloud-operations/data-protection' },
      { name: 'Business Continuity', path: '/cloud-operations/business-continuity' },
      { name: 'Disaster Recovery', path: '/cloud-operations/disaster-recovery' }
    ]
  }
];

interface IndustryNavCategory {
  id: string;
  name: string;
  iconName: 'Store' | 'Cpu' | 'Activity' | 'Flame' | 'Building2' | 'Truck' | 'Briefcase' | 'Sparkles';
  items: string[];
}

const INDUSTRIES_NAV_CATEGORIES: IndustryNavCategory[] = [
  {
    id: 'consumer-commerce',
    name: 'Consumer & Commerce',
    iconName: 'Store',
    items: [
      'Retail & E-Commerce',
      'Consumer Goods',
      'Food & Beverage',
      'Fashion & Lifestyle',
      'Textile',
      'Trading',
      'Distribution'
    ]
  },
  {
    id: 'industrial-manufacturing',
    name: 'Industrial & Manufacturing',
    iconName: 'Cpu',
    items: [
      'Automotive & Mobility',
      'Discrete Manufacturing',
      'Process Manufacturing',
      'Industrial Products',
      'Chemicals & Materials'
    ]
  },
  {
    id: 'health-life-sciences',
    name: 'Health & Life Sciences',
    iconName: 'Activity',
    items: [
      'Hospitals & Healthcare',
      'Pharmaceuticals',
      'Medical Devices',
      'Diagnostics',
      'Wellness & Care'
    ]
  },
  {
    id: 'energy-resources',
    name: 'Energy & Resources',
    iconName: 'Flame',
    items: [
      'Oil & Gas',
      'Power & Utilities',
      'Renewable Energy',
      'Mining & Metals',
      'Energy Services'
    ]
  },
  {
    id: 'built-environment',
    name: 'Built Environment',
    iconName: 'Building2',
    items: [
      'Engineering',
      'Construction & EPC',
      'Infrastructure',
      'Real Estate',
      'Facilities & Assets'
    ]
  },
  {
    id: 'technology-logistics-mobility',
    name: 'Technology, Logistics & Mobility',
    iconName: 'Truck',
    items: [
      'Technology Services',
      'Software & SaaS',
      'High-Tech',
      'Electronics',
      'Warehouse & Warehousing',
      'Transportation & Logistics',
      'Aerospace & Defense'
    ]
  },
  {
    id: 'financial-business-services',
    name: 'Financial & Business Services',
    iconName: 'Briefcase',
    items: [
      'Banking',
      'Insurance',
      'Financial Services',
      'FinTech',
      'Professional Services'
    ]
  },
  {
    id: 'experience-media-education',
    name: 'Experience, Media & Education',
    iconName: 'Sparkles',
    items: [
      'Hospitality',
      'Travel & Tourism',
      'Entertainment',
      'Education'
    ]
  }
];

const INDUSTRY_ROUTE_MAP: Record<string, string> = {
  'Retail & E-Commerce': '/industries/retail-ecommerce',
  'Consumer Goods': '/industries/consumer-goods',
  'Food & Beverage': '/industries/food-beverage',
  'Fashion & Lifestyle': '/industries/fashion-lifestyle',
  'Textile': '/industries/textile',
  'Trading': '/industries/trading',
  'Distribution': '/industries/distribution',
  'Automotive & Mobility': '/industries/automotive-mobility',
  'Discrete Manufacturing': '/industries/discrete-manufacturing',
  'Process Manufacturing': '/industries/process-manufacturing',
  'Industrial Products': '/industries/industrial-products',
  'Chemicals & Materials': '/industries/chemicals-materials',
  'Hospitals & Healthcare': '/industries/hospitals-healthcare',
  'Pharmaceuticals': '/industries/pharmaceuticals',
  'Medical Devices': '/industries/medical-devices',
  'Diagnostics': '/industries/diagnostics',
  'Wellness & Care': '/industries/wellness-care',
  'Oil & Gas': '/industries/oil-gas',
  'Power & Utilities': '/industries/power-utilities',
  'Renewable Energy': '/industries/renewable-energy',
  'Mining & Metals': '/industries/mining-metals',
  'Energy Services': '/industries/energy-services',
  'Engineering': '/industries/engineering',
  'Construction & EPC': '/industries/construction-epc',
  'Infrastructure': '/industries/infrastructure',
  'Real Estate': '/industries/real-estate',
  'Facilities & Assets': '/industries/facilities-assets',
  'Technology Services': '/industries/technology-services',
  'Software & SaaS': '/industries/software-saas',
  'High-Tech': '/industries/high-tech',
  'Electronics': '/industries/electronics',
  'Warehouse & Warehousing': '/industries/warehouse-ewm',
  'Transportation & Logistics': '/industries/transportation-logistics',
  'Aerospace & Defense': '/industries/aerospace-defense',
  'Banking': '/industries/banking',
  'Insurance': '/industries/insurance',
  'Financial Services': '/industries/financial-services',
  'FinTech': '/industries/fintech',
  'Professional Services': '/industries/professional-services',
  'Hospitality': '/industries/hospitality',
  'Travel & Tourism': '/industries/travel-tourism',
  'Entertainment': '/industries/entertainment',
  'Education': '/industries/education',
};

const AI_PRACTICE_ROUTES: Record<string, string> = {
  'Generative AI': '/digital-intelligence/generative-ai',
  'Data Strategy': '/digital-intelligence/data-strategy',
  'Data Architecture': '/digital-intelligence/data-architecture',
  'Data Engineering': '/digital-intelligence/data-engineering',
  'Data Governance': '/digital-intelligence/data-governance',
  'Data Quality': '/digital-intelligence/data-quality',
  'Data Platforms': '/digital-intelligence/data-platforms',
  'Business Intelligence': '/digital-intelligence/business-intelligence',
  'Predictive Analytics': '/digital-intelligence/predictive-analytics',
  'Real-time Analytics': '/digital-intelligence/real-time-analytics',
  'Real-Time Analytics': '/digital-intelligence/real-time-analytics',
  'Workflow Automation': '/digital-intelligence/workflow-automation',
  'RPA': '/digital-intelligence/rpa',
  'Intelligent Document Processing': '/digital-intelligence/intelligent-document-processing',
  'IDP': '/digital-intelligence/intelligent-document-processing',
  'Process Automation': '/digital-intelligence/process-automation',
  'AI-powered Automation': '/digital-intelligence/ai-powered-automation',
  'AI-Powered Automation': '/digital-intelligence/ai-powered-automation',
  'AI Agents': '/digital-intelligence/ai-agents',
  'AI Assistants': '/digital-intelligence/ai-assistants',
  'Machine Learning': '/digital-intelligence/machine-learning',
  'Predictive AI': '/digital-intelligence/predictive-ai',
  'Enterprise AI': '/digital-intelligence/enterprise-ai',
  'Process Discovery': '/digital-intelligence/process-discovery',
  'Process Mining': '/digital-intelligence/process-mining',
  'Process Monitoring': '/digital-intelligence/process-monitoring',
  'Process Optimization': '/digital-intelligence/process-optimization',
  'Continuous Improvement': '/digital-intelligence/continuous-improvement',
  'Customer Experience': '/digital-intelligence/customer-experience',
  'Employee Experience': '/digital-intelligence/employee-experience',
  'Digital Applications': '/digital-intelligence/digital-applications',
  'Personalization': '/digital-intelligence/personalization',
  'Experience Analytics': '/digital-intelligence/experience-analytics',
  'Decision Support': '/digital-intelligence/decision-support',
  'Forecasting & Planning': '/digital-intelligence/forecasting-planning',
  'Forecasting and Planning': '/digital-intelligence/forecasting-planning',
  'Scenario Analysis': '/digital-intelligence/scenario-analysis',
  'Risk Intelligence': '/digital-intelligence/risk-intelligence',
  'Business Performance Insights': '/digital-intelligence/business-performance-insights',
};

interface DigitalIntelligenceNavCategory {
  id: string;
  name: string;
  badge?: string;
  items: string[];
}

const DIGITAL_INTELLIGENCE_NAV_CATEGORIES: DigitalIntelligenceNavCategory[] = [
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    badge: 'CORE AI',
    items: [
      'Generative AI',
      'AI Agents',
      'AI Assistants',
      'Machine Learning',
      'Predictive AI',
      'Enterprise AI'
    ]
  },
  {
    id: 'data-intelligence',
    name: 'Data Intelligence',
    badge: 'DATA FABRIC',
    items: [
      'Data Strategy',
      'Data Architecture',
      'Data Engineering',
      'Data Governance',
      'Data Quality',
      'Data Platforms',
      'Business Intelligence',
      'Predictive Analytics',
      'Real-time Analytics'
    ]
  },
  {
    id: 'intelligent-automation',
    name: 'Intelligent Automation',
    badge: 'HYPER-AUTOMATION',
    items: [
      'Workflow Automation',
      'RPA',
      'Intelligent Document Processing',
      'Process Automation',
      'AI-powered Automation'
    ]
  },
  {
    id: 'process-intelligence',
    name: 'Process Intelligence',
    badge: 'PROCESS MINING',
    items: [
      'Process Discovery',
      'Process Mining',
      'Process Monitoring',
      'Process Optimization',
      'Continuous Improvement'
    ]
  },
  {
    id: 'digital-experience',
    name: 'Digital Experience',
    badge: 'EXPERIENCE',
    items: [
      'Customer Experience',
      'Employee Experience',
      'Digital Applications',
      'Personalization',
      'Experience Analytics'
    ]
  },
  {
    id: 'decision-intelligence',
    name: 'Decision Intelligence',
    badge: 'PRESCRIPTIVE',
    items: [
      'Decision Support',
      'Forecasting & Planning',
      'Scenario Analysis',
      'Risk Intelligence',
      'Business Performance Insights'
    ]
  }
];

interface NavbarProps {
  onOpenContact?: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop active menu state: 'about' | 'products' | 'transformation' | 'cloud' | 'solutions' | 'services' | 'industries'
  const [activeMenu, setActiveMenu] = useState<'about' | 'products' | 'transformation' | 'cloud' | 'solutions' | 'services' | 'industries' | null>(null);

  // Mobile accordion state
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);


  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

    // Click outside and Escape key to close active mega menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMenuToggle = (menu: 'about' | 'products' | 'transformation' | 'cloud' | 'solutions' | 'services' | 'industries') => {
    setActiveMenu(prev => prev === menu ? null : menu);
  };

  const handleNavClick = (path: string) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled && !activeMenu && !mobileMenuOpen;

  const navLinkClass = (isActive: boolean) =>
    `flex items-center gap-1 px-3 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 ${
      isActive
        ? 'text-white bg-[#00A3E0] font-bold shadow-md shadow-[#00A3E0]/25'
        : isTransparent
        ? 'text-white hover:text-cyan-300 hover:bg-white/10'
        : 'text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5'
    }`;

  const navChevronClass = (isOpen: boolean) =>
    `h-3.5 w-3.5 transition-transform duration-200 ${
      isOpen ? 'rotate-180 text-white' : isTransparent ? 'text-white/70' : 'text-slate-400'
    }`;

  return (
    <>
      {/* Dimmed backdrop scrim to eliminate transparency bleed & highlight mega menus */}
      {activeMenu && (
        <div
          className="fixed inset-0 top-[68px] bg-slate-950/70 dark:bg-black/85 z-40 backdrop-blur-sm transition-opacity duration-200"
          onClick={() => setActiveMenu(null)}
        />
      )}

      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent border-b border-transparent py-3.5'
            : 'bg-white/90 dark:bg-[#030712]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-cyan-500/20 shadow-md py-3'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand Logo */}
            <Link
              to="/"
              onClick={() => { setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group flex-shrink-0 mr-4 flex items-center justify-center my-auto self-center"
            >
              <KnooviqLogo size="md" forceDark={isTransparent} />
            </Link>

            {/* Desktop Navigation Links:
                1. Home
                2. About
                3. Products
                4. Transformation
                5. Services
                6. Industries
            */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-semibold">

              {/* Primary Navigation Links Group: Home to Industries (shifted slightly left via margins, without CSS transforms to preserve position:fixed mega menus) */}
              <div className="flex items-center gap-1 xl:gap-2 -ml-3 sm:-ml-4 lg:-ml-5 xl:-ml-6 mr-2 sm:mr-3 lg:mr-4 xl:mr-5">

                {/* 1. HOME */}
              <Link
                to="/"
                onClick={() => { setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`px-3 py-2 rounded-xl transition-all ${
                  isTransparent
                    ? 'text-white hover:text-cyan-300 hover:bg-white/10'
                    : 'text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              {/* 2. ABOUT (Dropdown) */}
              <div
                className="relative"
              >
                <button
                  onClick={() => handleMenuToggle('about')}
                  type="button"
                  className={navLinkClass(activeMenu === 'about' || location.pathname === '/about')}
                >
                  <span className="whitespace-nowrap">About</span>
                  <ChevronDown className={navChevronClass(activeMenu === 'about')} />
                </button>

                {/* About Dropdown - Exact structure with Image 2 (industry-category-item) typography, size, weight & colors */}
                {activeMenu === 'about' && (
                  <div
                    className="absolute top-full left-0 w-64 pt-2 transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                  >
                    <div className="rounded-2xl border border-slate-200 dark:border-cyan-500/30 bg-white dark:bg-[#070E1C] p-2 shadow-2xl space-y-0.5">
                      <Link to="/about/the-knooviq-story" onClick={() => setActiveMenu(null)} className="industry-category-item px-2.5 py-1.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10">
                        <span className="truncate">The Knooviq Story</span>
                      </Link>
                      <Link to="/about/visionary-leadership" onClick={() => setActiveMenu(null)} className="industry-category-item px-2.5 py-1.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10">
                        <span className="truncate">Visionary Leadership</span>
                      </Link>
                      <Link to="/about/digital-sap-excellence" onClick={() => setActiveMenu(null)} className="industry-category-item px-2.5 py-1.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10">
                        <span className="truncate">Digital & SAP Excellence</span>
                      </Link>
                      <Link to="/about/our-global-network" onClick={() => setActiveMenu(null)} className="industry-category-item px-2.5 py-1.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10">
                        <span className="truncate">Our Global Network</span>
                      </Link>
                      <Link to="/about/grow-with-us" onClick={() => setActiveMenu(null)} className="industry-category-item px-2.5 py-1.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10">
                        <span className="truncate">Grow With Us</span>
                      </Link>
                      <Link to="/about/knooviq-connect" onClick={() => setActiveMenu(null)} className="industry-category-item px-2.5 py-1.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10">
                        <span className="truncate">Knooviq Connect</span>
                      </Link>
                      <Link to="/about/global-presence" onClick={() => setActiveMenu(null)} className="industry-category-item px-2.5 py-1.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10">
                        <span className="truncate">Global Presence</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. PRODUCTS */}
              <div className="relative">
                <button
                  onClick={() => handleMenuToggle('products')}
                  type="button"
                  className={navLinkClass(activeMenu === 'products' || location.pathname.startsWith('/products'))}
                >
                  <span className="whitespace-nowrap">Products</span>
                  <ChevronDown className={navChevronClass(activeMenu === 'products')} />
                </button>

                {/* Products Mega Menu Dropdown */}
                {activeMenu === 'products' && (
                  <div className="fixed left-0 right-0 top-[68px] w-full transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50 px-4 whitespace-normal">
                    <div className="max-w-7xl mx-auto rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-4 lg:p-5 shadow-2xl">
                      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2.5 lg:gap-3">
                        {PRODUCTS_NAV_CATEGORIES.map((cat) => (
                          <div
                            key={cat.id}
                            className="bg-slate-50 dark:bg-[#0B1528] p-2.5 sm:p-3 rounded-xl border border-slate-200/70 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 hover:shadow-md transition-all flex flex-col justify-start"
                          >
                            <div className="pb-1 mb-1.5 border-b border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                              <h4
                                className="font-[800] font-extrabold text-[13px] tracking-wide uppercase text-[#0A1931] dark:text-white select-none py-0.5 leading-snug"
                                style={{ fontWeight: 800 }}
                              >
                                {cat.title}
                              </h4>
                            </div>
                            <ul className="space-y-0.5">
                              {cat.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.path}
                                    onClick={() => setActiveMenu(null)}
                                    className="industry-category-item px-2 py-0.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 text-[11px] font-medium leading-snug"
                                  >
                                    <span>{item.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. TRANSFORMATION */}
              <div className="relative">
                <button
                  onClick={() => handleMenuToggle('transformation')}
                  type="button"
                  className={navLinkClass(activeMenu === 'transformation' || location.pathname.startsWith('/transformation'))}
                >
                  <span className="whitespace-nowrap">Transformation</span>
                  <ChevronDown className={navChevronClass(activeMenu === 'transformation')} />
                </button>

                {/* Transformation Mega Menu Dropdown */}
                {activeMenu === 'transformation' && (
                  <div className="fixed left-0 right-0 top-[68px] w-full transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50 px-4 whitespace-normal">
                    <div className="max-w-7xl mx-auto rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-4 lg:p-5 shadow-2xl">
                      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 lg:gap-3">
                        {TRANSFORMATION_MEGA_MENU.map((category) => (
                          <div
                            key={category.id}
                            className="bg-slate-50 dark:bg-[#0B1528] p-2.5 sm:p-3 rounded-xl border border-slate-200/70 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 hover:shadow-md transition-all flex flex-col justify-start"
                          >
                            <div className="pb-1 mb-1.5 border-b border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                              <h4
                                className="font-[800] font-extrabold text-[13px] tracking-wide uppercase text-[#0A1931] dark:text-white select-none py-0.5 leading-snug"
                                style={{ fontWeight: 800 }}
                              >
                                {category.title}
                              </h4>
                            </div>
                            <ul className="space-y-0.5">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.path}
                                    onClick={() => setActiveMenu(null)}
                                    className="industry-category-item px-2 py-0.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 text-[11px] font-medium leading-snug"
                                  >
                                    <span>{item.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4.5 CLOUD & OPERATIONS */}
              <div className="relative">
                <button
                  onClick={() => handleMenuToggle('cloud')}
                  type="button"
                  className={navLinkClass(activeMenu === 'cloud' || location.pathname.startsWith('/cloud-operations'))}
                >
                  <span className="whitespace-nowrap">Cloud & Operations</span>
                  <ChevronDown className={navChevronClass(activeMenu === 'cloud')} />
                </button>

                {/* Cloud & Operations Mega Menu Dropdown */}
                {activeMenu === 'cloud' && (
                  <div className="fixed left-0 right-0 top-[68px] w-full transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50 px-4 whitespace-normal">
                    <div className="max-w-7xl mx-auto rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-4 lg:p-5 shadow-2xl">
                      
                      {/* 6 Cloud & Operations Capabilities in 1 Row - Identical Structure to Digital Intelligence */}
                      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 lg:gap-3">
                        {CLOUD_OPS_MEGA_MENU.map((category) => (
                          <div
                            key={category.id}
                            className="bg-slate-50 dark:bg-[#0B1528] p-2.5 sm:p-3 rounded-xl border border-slate-200/70 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 hover:shadow-md transition-all flex flex-col justify-start"
                          >
                            <div className="pb-1 mb-1.5 border-b border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                              <h4
                                className="font-[800] font-extrabold text-[13px] tracking-wide uppercase text-[#0A1931] dark:text-white select-none py-0.5 leading-snug"
                                style={{ fontWeight: 800 }}
                              >
                                {category.title}
                              </h4>
                            </div>
                            <ul className="space-y-0.5">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.path}
                                    onClick={() => setActiveMenu(null)}
                                    className="industry-category-item px-2 py-0.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 text-[11px] font-medium leading-snug"
                                  >
                                    <span>{item.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* 5. DIGITAL INTELLIGENCE (Replaces Services, structured identically to Industries) */}
              <div
                className="relative"
              >
                <button
                  onClick={() => handleMenuToggle('services')}
                  type="button"
                  className={navLinkClass(activeMenu === 'services' || location.pathname === '/digital-intelligence' || location.pathname === '/services')}
                >
                  <span className="whitespace-nowrap">Digital Intelligence</span>
                  <ChevronDown className={navChevronClass(activeMenu === 'services')} />
                </button>

                {/* Digital Intelligence Mega Menu Dropdown */}
                {activeMenu === 'services' && (
                  <div
                    className="fixed left-0 right-0 top-[68px] w-full transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50 px-4 whitespace-normal"
                  >
                    <div className="max-w-7xl mx-auto rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-4 lg:p-5 shadow-2xl">

                      {/* 6 Digital Intelligence Practices in 1 Row */}
                      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 lg:gap-3">
                        {DIGITAL_INTELLIGENCE_NAV_CATEGORIES.map((cat) => (
                          <div
                            key={cat.id}
                            className="bg-slate-50 dark:bg-[#0B1528] p-2.5 sm:p-3 rounded-xl border border-slate-200/70 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 hover:shadow-md transition-all flex flex-col justify-start"
                          >
                            <div className="pb-1 mb-1.5 border-b border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                              <h4
                                className="font-[800] font-extrabold text-[13px] tracking-wide uppercase text-[#0A1931] dark:text-white select-none py-0.5 leading-snug"
                                style={{ fontWeight: 800 }}
                              >
                                {cat.name}
                              </h4>
                            </div>
                            <ul className="space-y-0.5">
                              {cat.items.map((subItem) => (
                                <li key={subItem}>
                                  <Link
                                    to={AI_PRACTICE_ROUTES[subItem] || `/digital-intelligence?category=${cat.id}&item=${encodeURIComponent(subItem)}`}
                                    onClick={() => setActiveMenu(null)}
                                    className="industry-category-item px-2 py-0.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 text-[11px] font-medium leading-snug"
                                  >
                                    <span>{subItem}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* 6. INDUSTRIES (Accely Image 4 - 2 Rows x 5 Columns) */}
              <div
                className="relative"
              >
                <button
                  onClick={() => handleMenuToggle('industries')}
                  type="button"
                  className={navLinkClass(activeMenu === 'industries')}
                >
                  <span className="whitespace-nowrap">Industries</span>
                  <ChevronDown className={navChevronClass(activeMenu === 'industries')} />
                </button>

                {/* Industries Mega Menu Dropdown */}
                {activeMenu === 'industries' && (
                  <div
                    className="fixed left-0 right-0 top-[68px] w-full transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50 px-4 whitespace-normal"
                  >
                    <div className="max-w-7xl mx-auto rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-4 lg:p-5 shadow-2xl">

                      {/* 8 Industry Vertical Practices (4 Columns x 2 Rows) */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 lg:gap-3">
                        {INDUSTRIES_NAV_CATEGORIES.map((cat) => (
                          <div
                            key={cat.id}
                            className="bg-slate-50 dark:bg-[#0B1528] p-2.5 sm:p-3 rounded-xl border border-slate-200/70 dark:border-white/5 hover:border-sky-300 dark:hover:border-cyan-500/30 hover:shadow-md transition-all flex flex-col justify-start"
                          >
                            <div className="pb-1 mb-1 border-b border-slate-200/60 dark:border-white/10">
                              {INDUSTRY_ROUTE_MAP[cat.name] ? (
                                <Link
                                  to={INDUSTRY_ROUTE_MAP[cat.name]}
                                  onClick={() => setActiveMenu(null)}
                                  className="industry-category-title text-[#0A1931] dark:text-white hover:text-[#0070C0] dark:hover:text-cyan-300 transition-colors flex items-center justify-between group/cat text-[13px] font-[800] font-extrabold uppercase tracking-wide select-none py-0.5 leading-snug"
                                  style={{ fontWeight: 800 }}
                                >
                                  <span>{cat.name}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/cat:opacity-100 group-hover/cat:translate-x-0.5 transition-all shrink-0" />
                                </Link>
                              ) : (
                                <h4
                                  className="industry-category-title text-[#0A1931] dark:text-white text-[13px] font-[800] font-extrabold uppercase tracking-wide select-none py-0.5 leading-snug"
                                  style={{ fontWeight: 800 }}
                                >
                                  {cat.name}
                                </h4>
                              )}
                            </div>
                            <ul className="space-y-0.5">
                              {cat.items.map((subItem) => {
                                const industryRoute = INDUSTRY_ROUTE_MAP[subItem];
                                return (
                                  <li key={subItem}>
                                    <Link
                                      to={industryRoute || '/industries'}
                                      onClick={() => setActiveMenu(null)}
                                      className="industry-category-item px-2 py-0.5 rounded-lg block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 text-[11px] font-medium leading-snug"
                                    >
                                      <span>{subItem}</span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                )}
              </div>

              </div>

              {/* Language Translator (Between Industries and CONTACT US) */}
              <LanguageTranslator isTransparentHeader={isTransparent} />

              {/* CONTACT US -> Pill Button (matching user image) */}
              <button
                onClick={() => onOpenContact && onOpenContact()}
                className="btn-primary-gradient shimmer-sweep rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-blue-500/25 flex items-center gap-2 active:scale-95 font-display ml-1 shrink-0"
              >
                <span>CONTACT US</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

            </nav>

            {/* Mobile Actions (Hamburger) */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageTranslator isMobile={true} />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${
                  isTransparent
                    ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
                    : 'border-slate-300 dark:border-sky-500/20 bg-slate-100 dark:bg-[#0B1528] text-slate-800 dark:text-slate-200'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>
        {/* Mobile Drawer with sequence: Home, About, Products, Solutions, Services, Industries */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 dark:border-sky-500/25 bg-white dark:bg-[#070E1C] px-4 pt-3 pb-6 space-y-2 shadow-2xl max-h-[80vh] overflow-y-auto">

            {/* 1. Mobile Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl"
            >
              Home
            </Link>

            {/* 2. Mobile About Accordion */}
            <div className="border border-slate-200 dark:border-white/10 rounded-2xl p-2 bg-slate-50 dark:bg-[#050B17]">
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'about' ? null : 'about')}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <span className="flex items-center gap-1.5 text-[#00A3E0]">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>About Us</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'about' ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubmenu === 'about' && (
                <div className="pt-2 pl-2 space-y-1.5 border-t border-slate-200 dark:border-white/5 mt-1 text-xs">
                  <Link to="/about/the-knooviq-story" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• The Knooviq Story</Link>
                  <Link to="/about/visionary-leadership" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Visionary Leadership</Link>
                  <Link to="/about/digital-sap-excellence" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Digital & SAP Excellence</Link>
                  <Link to="/about/our-global-network" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Our Global Network</Link>
                  <Link to="/about/grow-with-us" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Grow With Us</Link>
                  <Link to="/about/knooviq-connect" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Knooviq Connect</Link>
                  <Link to="/about/global-presence" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Global Presence</Link>
                </div>
              )}
            </div>

            {/* 3. Mobile Products Accordion */}
            <div className="border border-slate-200 dark:border-white/10 rounded-2xl p-2 bg-slate-50 dark:bg-[#050B17]">
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'products' ? null : 'products')}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <span className="flex items-center gap-1.5 text-[#00A3E0]">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Products & Accelerators</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubmenu === 'products' && (
                <div className="pt-2 pl-2 space-y-1.5 border-t border-slate-200 dark:border-white/5 mt-1 text-xs">
                  <p className="font-bold text-[#00A3E0] pt-1">Knooviq Accelerated Solutions</p>
                  <Link to="/exim" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• EXIM (Export & Import Solutions)</Link>
                  <Link to="/e-invoice" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• E-Invoice (Automated Compliance)</Link>
                  <Link to="/eway-bill" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• E-Way Bill (Goods Movement & Compliance)</Link>
                  <Link to="/products/gst" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• GST Compliance</Link>

                  <div className="pt-1.5 pb-0.5">
                    <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="font-bold text-[#00A3E0] hover:underline">
                      Knooviq Enterprise Solutions
                    </Link>
                  </div>
                  <Link to="/products/vendor-management" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Vendor Management</Link>
                  <Link to="/products/field-service-management" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Field Service Management</Link>
                  <Link to="/products/real-estate-management" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Real Estate Management</Link>
                  <Link to="/products/distribution-management" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Distribution Management</Link>
                  <Link to="/products/digital-retail-solution" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Digital Retail Solution</Link>
                  <Link to="/products/subscription-billing" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Subscription Billing</Link>
                  <Link to="/products/sales-force-automation" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Sales Force Automation</Link>
                  <Link to="/products/dealer-management-system" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Dealer Management System</Link>
                  <Link to="/products/asset-management" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Asset Management</Link>

                  <p className="font-bold text-[#00A3E0] pt-1">Knooviq AI Studio</p>
                  <Link to="/products/knooviq-ai-consultant" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Knooviq AI Consultant</Link>
                  <Link to="/products/knooviq-ai-insights" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Knooviq AI Insights</Link>
                  <Link to="/products/knooviq-ai-engagement" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Knooviq AI Engagement</Link>

                  <p className="font-bold text-[#00A3E0] pt-1">Enterprise AI Products</p>
                  <Link to="/products/bank-statement-intelligence" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Bank Statement Intelligence</Link>
                  <Link to="/products/supply-chain-intelligence" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Supply Chain Intelligence</Link>
                  <Link to="/products/document-intelligence" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Document Intelligence</Link>
                  <Link to="/products/accounts-payable-intelligence" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Accounts Payable Intelligence</Link>
                  <Link to="/products/expense-intelligence" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Expense Intelligence</Link>
                  <Link to="/products/form-intelligence" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Form Intelligence</Link>
                  <div className="pt-1.5 pb-0.5">
                    <Link to="/products/automation-suite" onClick={() => setMobileMenuOpen(false)} className="font-bold text-[#00A3E0] hover:underline">
                      Knooviq Automation Suite
                    </Link>
                  </div>
                  <Link to="/products/automation-studio" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Automation Studio</Link>
                  <Link to="/products/automation-evolve" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Automation Evolve</Link>
                  <Link to="/products/automation-manager" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Automation Manager</Link>
                </div>
              )}
            </div>

            {/* 4. Mobile Transformation Accordion */}
            <div className="border border-slate-200 dark:border-white/10 rounded-2xl p-2 bg-slate-50 dark:bg-[#050B17]">
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'transformation' ? null : 'transformation')}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <span className="flex items-center gap-1.5 text-[#00A3E0]">
                  <Workflow className="h-3.5 w-3.5" />
                  <span>Transformation</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'transformation' ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubmenu === 'transformation' && (
                <div className="pt-2 pl-2 space-y-2 border-t border-slate-200 dark:border-white/5 mt-1 text-xs max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
                  {TRANSFORMATION_MEGA_MENU.map((category) => (
                    <div key={category.id} className="pt-1">
                      <p className="font-bold text-[#00A3E0] pt-1 flex items-center justify-between">
                        <span>{category.title}</span>
                        {category.badge && (
                          <span className="text-[9px] bg-[#00A3E0] text-white px-1.5 py-0.5 rounded font-bold">
                            {category.badge}
                          </span>
                        )}
                      </p>
                      <div className="space-y-0.5 pt-0.5 pl-2">
                        {category.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium hover:text-[#00A3E0]"
                          >
                            • {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-slate-200 dark:border-white/5">
                    <Link
                      to="/transformation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-bold text-[#00A3E0] hover:underline flex items-center gap-1"
                    >
                      <span>Explore All Transformation Practices</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4.5 Mobile Cloud & Operations Accordion */}
            <div className="border border-slate-200 dark:border-white/10 rounded-2xl p-2 bg-slate-50 dark:bg-[#050B17]">
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'cloud' ? null : 'cloud')}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <span className="flex items-center gap-1.5 text-[#00A3E0]">
                  <Cloud className="h-3.5 w-3.5" />
                  <span>Cloud & Operations (6 Capabilities)</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'cloud' ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubmenu === 'cloud' && (
                <div className="pt-2 pl-2 space-y-2 border-t border-slate-200 dark:border-white/5 mt-1 text-xs max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
                  {CLOUD_OPS_MEGA_MENU.map((category) => (
                    <div key={category.id} className="pt-1">
                      <p className="font-bold text-[#00A3E0] pt-1 flex items-center justify-between">
                        <span>{category.title}</span>
                        {category.badge && (
                          <span className="text-[9px] bg-[#00A3E0] text-white px-1.5 py-0.5 rounded font-bold">
                            {category.badge}
                          </span>
                        )}
                      </p>
                      <div className="space-y-0.5 pt-0.5 pl-2">
                        {category.items.map((item, idx) => {
                          const isItemActive = location.pathname === item.path || (item.path.includes('?') && location.pathname + location.search === item.path);
                          return (
                            <Link
                              key={idx}
                              to={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-1 px-2 rounded-lg text-xs font-medium transition-colors ${
                                isItemActive
                                  ? 'bg-[#00A3E0] text-white font-bold'
                                  : 'text-slate-700 dark:text-slate-300 hover:text-[#00A3E0]'
                              }`}
                            >
                              • {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-slate-200 dark:border-white/5">
                    <Link
                      to="/cloud-operations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-bold text-[#00A3E0] hover:underline flex items-center gap-1"
                    >
                      <span>Explore All Cloud & Operations Capabilities</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Mobile Digital Intelligence Accordion */}
            <div className="border border-slate-200 dark:border-white/10 rounded-2xl p-2 bg-slate-50 dark:bg-[#050B17]">
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <span className="flex items-center gap-1.5 text-sky-500">
                  <Brain className="h-3.5 w-3.5" />
                  <span>Digital Intelligence (6 Practices)</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubmenu === 'services' && (
                <div className="pt-2 pl-2 space-y-2 border-t border-slate-200 dark:border-white/5 mt-1 text-xs max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
                  {DIGITAL_INTELLIGENCE_NAV_CATEGORIES.map((category) => (
                    <div key={category.id} className="pt-1.5">
                      <div className="font-black text-xs tracking-wider uppercase text-[#0A1931] dark:text-[#00A3E0] pb-0.5 border-b border-slate-200/50 dark:border-white/5">
                        {category.name}
                      </div>
                      <div className="space-y-0.5 pt-1 pl-2">
                        {category.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={AI_PRACTICE_ROUTES[item] || `/digital-intelligence?category=${category.id}&item=${encodeURIComponent(item)}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium hover:text-[#00A3E0]"
                          >
                            • {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-slate-200 dark:border-white/5">
                    <Link
                      to="/digital-intelligence"
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-bold text-[#00A3E0] hover:underline flex items-center gap-1"
                    >
                      <span>Explore All Digital Intelligence</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 6. Mobile Industries Accordion */}
            <div className="border border-slate-200 dark:border-white/10 rounded-2xl p-2 bg-slate-50 dark:bg-[#050B17]">
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'industries' ? null : 'industries')}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <span className="flex items-center gap-1.5 text-amber-500">
                  <Store className="h-3.5 w-3.5" />
                  <span>Industries (8 Practices)</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'industries' ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubmenu === 'industries' && (
                <div className="pt-2 pl-2 space-y-2 border-t border-slate-200 dark:border-white/5 mt-1">
                  <div className="pb-1.5 mb-1 border-b border-slate-200 dark:border-white/5 space-y-1">
                    <p className="industry-category-title text-slate-500 dark:text-slate-400 px-2 pt-0.5">Industry Practices</p>
                    {Object.entries(INDUSTRY_ROUTE_MAP).map(([name, path]) => (
                      <Link
                        key={name}
                        to={path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="industry-category-item flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#0070C0]/10 text-[#0070C0] dark:text-cyan-300"
                      >
                        <span>{name}</span>
                      </Link>
                    ))}
                  </div>
                  {INDUSTRIES_NAV_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to="/industries"
                      onClick={() => setMobileMenuOpen(false)}
                      className="industry-category-item block py-1 px-2 text-slate-700 dark:text-slate-300 hover:text-[#00A3E0]"
                    >
                      • {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 8. Mobile Contact */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="w-full text-left block px-3 py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl"
            >
              Contact Us
            </button>

            {/* Drawer Footer CTA */}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full justify-center inline-flex items-center gap-2 rounded-xl bg-[#E05A47] hover:bg-[#C94735] py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg"
              >
                <span>Contact us</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <Link
                to="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-sky-500/20 bg-slate-100 dark:bg-white/5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-400 hover:text-[#00A3E0] dark:hover:text-white"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#00A3E0]" />
                <span>Internal Admin Security Console</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};





