import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sun, 
  Moon, 
  Search, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Award, 
  BookOpen, 
  FileText, 
  Video, 
  Newspaper, 
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
  FileCheck2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { KnooviqLogo } from './KnooviqLogo';

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
      { name: 'SAP S/4HANA Transformation', path: '/solutions/sap-s4hana' },
      { name: 'ERP Transformation', path: '/solutions/sap-s4hana?tab=erp' },
      { name: 'Digital Transformation', path: '/services' },
      { name: 'Enterprise Transformation', path: '/solutions/sap-s4hana' },
      { name: 'Business Process Transformation', path: '/solutions/sap-s4hana' },
      { name: 'Intelligent Enterprise', path: '/solutions/sap-business-ai' },
      { name: 'SAP Business Suite Transformation', path: '/solutions/sap-s4hana' },
      { name: 'RISE with SAP Transformation', path: '/solutions/rise-with-sap' },
      { name: 'SAP Cloud Transformation', path: '/solutions/grow-with-sap' },
      { name: 'Transformation Roadmap', path: '/solutions/sap-s4hana' }
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
      { name: 'SAP S/4HANA', path: '/solutions/sap-s4hana' },
      { name: 'Finance: SAP FI, CO, Treasury', path: '/solutions/sap-datasphere' },
      { name: 'Supply Chain: MM, SD, PP, EWM, TM', path: '/solutions/sap-supply-chain' },
      { name: 'Human Capital: SuccessFactors', path: '/solutions/sap-successfactors' },
      { name: 'Customer Experience: SAP CX, CRM', path: '/solutions/sap-cx' },
      { name: 'Asset Management', path: '/solutions/asset-management' },
      { name: 'Quality Management', path: '/solutions/sap-s4hana' }
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
      { name: 'SAP Business AI', path: '/solutions/sap-business-ai' },
      { name: 'Generative AI', path: '/ai-consultant' },
      { name: 'AI Agents', path: '/products/knooviq-ai-engagement' },
      { name: 'Machine Learning', path: '/products/knooviq-ai-insights' },
      { name: 'SAP Analytics Cloud', path: '/solutions/sap-datasphere' },
      { name: 'SAP Datasphere', path: '/solutions/sap-datasphere' },
      { name: 'Business Intelligence', path: '/solutions/sap-datasphere' },
      { name: 'Predictive Analytics', path: '/solutions/sap-datasphere' },
      { name: 'Process Intelligence', path: '/solutions/sap-s4hana' },
      { name: 'Intelligent Automation', path: '/products/automation-suite' }
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
      { name: 'ECC → S/4HANA', path: '/solutions/sap-migration' },
      { name: 'System Conversion', path: '/solutions/rise-with-sap' },
      { name: 'Greenfield', path: '/solutions/sap-s4hana' },
      { name: 'Brownfield', path: '/solutions/rise-with-sap' },
      { name: 'Selective Data Transition', path: '/solutions/sap-migration' },
      { name: 'Data Migration', path: '/solutions/sap-migration' },
      { name: 'SAP Upgrade', path: '/solutions/sap-migration' },
      { name: 'Custom Code Migration', path: '/solutions/sap-migration' },
      { name: 'Application Modernization', path: '/services' },
      { name: 'Legacy Modernization', path: '/solutions/sap-migration' }
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
      { name: 'SAP Strategy', path: '/solutions/sap-consulting' },
      { name: 'SAP Assessment', path: '/solutions/sap-s4hana' },
      { name: 'ERP Strategy', path: '/solutions/sap-consulting' },
      { name: 'Digital Transformation Advisory', path: '/services' },
      { name: 'Business Process Consulting', path: '/solutions/sap-consulting' },
      { name: 'Solution Architecture', path: '/solutions/sap-s4hana' },
      { name: 'Enterprise Architecture', path: '/solutions/sap-s4hana' },
      { name: 'Cloud Advisory', path: '/solutions/rise-with-sap' },
      { name: 'Transformation Roadmap', path: '/solutions/sap-s4hana' },
      { name: 'SAP Optimization', path: '/solutions/sap-consulting' }
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
      { name: 'SAP AMS', path: '/solutions/sap-support' },
      { name: 'Application Support', path: '/solutions/sap-support' },
      { name: 'SAP Basis', path: '/solutions/sap-support' },
      { name: 'Monitoring', path: '/solutions/sap-support' },
      { name: 'Performance Management', path: '/solutions/sap-support' },
      { name: 'Incident Management', path: '/solutions/sap-support' },
      { name: 'Change Management', path: '/solutions/sap-support' },
      { name: 'Upgrade & Patch Management', path: '/solutions/sap-support' },
      { name: 'SAP Security', path: '/solutions/sap-support' },
      { name: '24×7 Support', path: '/solutions/sap-support' }
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
    path: '/solutions/sap-s4hana',
    items: [
      { name: 'SAP S/4HANA Transformation', path: '/solutions/sap-s4hana' },
      { name: 'ERP Transformation', path: '/solutions/sap-s4hana?tab=erp' },
      { name: 'Digital Transformation', path: '/solutions/sap-s4hana?tab=digital' },
      { name: 'RISE with SAP', path: '/solutions/sap-s4hana?tab=rise' }
    ]
  },
  {
    id: 'sap-business-applications',
    title: 'SAP Business Applications',
    path: '/solutions/sap-business-applications',
    items: [
      { name: 'SAP S/4HANA', path: '/solutions/sap-business-applications?app=s4hana' },
      { name: 'Finance', path: '/solutions/sap-business-applications?app=finance' },
      { name: 'Supply Chain', path: '/solutions/sap-business-applications?app=supply-chain' },
      { name: 'Human Capital', path: '/solutions/sap-business-applications?app=human-capital' },
      { name: 'Customer Experience', path: '/solutions/sap-business-applications?app=cx' }
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
      { name: 'Cloud Transformation', path: '/technology/cloud-transformation' }
    ]
  },
  {
    id: 'data-analytics-ai',
    title: 'Data, Analytics & AI',
    badge: 'GEN AI',
    path: '/transformation#data-analytics-ai',
    items: [
      { name: 'SAP Business AI', path: '/solutions/sap-business-ai' },
      { name: 'Generative AI', path: '/ai-consultant' },
      { name: 'AI Agents', path: '/products/knooviq-ai-engagement' },
      { name: 'SAP Analytics Cloud', path: '/solutions/sap-datasphere' },
      { name: 'SAP Datasphere', path: '/solutions/sap-datasphere' },
      { name: 'Intelligent Automation', path: '/products/automation-suite' }
    ]
  },
  {
    id: 'migration-modernization',
    title: 'Migration & Modernization',
    path: '/transformation#migration-modernization',
    items: [
      { name: 'ECC → S/4HANA', path: '/transformation#migration-modernization' },
      { name: 'System Conversion', path: '/transformation#migration-modernization' },
      { name: 'Greenfield', path: '/transformation#migration-modernization' },
      { name: 'Brownfield', path: '/transformation#migration-modernization' },
      { name: 'Data Migration', path: '/transformation#migration-modernization' },
      { name: 'Custom Code Migration', path: '/transformation#migration-modernization' }
    ]
  },
  {
    id: 'advisory-managed-services',
    title: 'Advisory & Managed Services',
    path: '/transformation#advisory-consulting',
    items: [
      { name: 'SAP Strategy', path: '/transformation#advisory-consulting' },
      { name: 'SAP Assessment', path: '/transformation#advisory-consulting' },
      { name: 'Solution Architecture', path: '/transformation#advisory-consulting' },
      { name: 'SAP AMS', path: '/transformation#managed-services' },
      { name: 'Application Support', path: '/transformation#managed-services' },
      { name: 'SAP Basis', path: '/transformation#managed-services' }
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
  'High-Tech': '/industries/high-tech-electronics',
  'Electronics': '/industries/high-tech-electronics',
  'Warehouse & Warehousing': '/industries/warehouse-ewm',
  'Transportation & Logistics': '/industries/transportation-logistics',
  'Aerospace & Defense': '/industries/transportation-logistics',
};

interface NavbarProps {
  onOpenContact?: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Desktop active menu state: 'about' | 'products' | 'transformation' | 'solutions' | 'services' | 'industries' | 'insights'
  const [activeMenu, setActiveMenu] = useState<'about' | 'products' | 'transformation' | 'solutions' | 'services' | 'industries' | 'insights' | null>(null);
  
  // Mobile accordion state
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  
  // Search modal state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    setSearchOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (menu: 'about' | 'products' | 'transformation' | 'solutions' | 'services' | 'industries' | 'insights') => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 250);
  };

  const handleMenuToggle = (menu: 'about' | 'products' | 'transformation' | 'solutions' | 'services' | 'industries' | 'insights') => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(prev => prev === menu ? null : menu);
  };

  const handleNavClick = (path: string) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-[#030712] ${
          isScrolled || activeMenu
            ? 'border-b border-slate-200 dark:border-cyan-500/20 shadow-xl py-3'
            : 'border-b border-slate-200/70 dark:border-white/10 py-3.5'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link
              to="/"
              onClick={() => { setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group flex-shrink-0 mr-4"
            >
              <KnooviqLogo size="md" />
            </Link>

            {/* Desktop Navigation Links in EXACT user-requested order:
                1. Home
                2. About
                3. Products
                4. Solutions
                5. Services
                6. Industries
                7. Insights
            */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-semibold">
              
              {/* 1. HOME */}
              <Link
                to="/"
                onClick={() => { setActiveMenu(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`px-3 py-2 rounded-xl transition-all ${
                  location.pathname === '/' && activeMenu === null
                    ? 'text-white bg-[#00A3E0] font-bold shadow-md shadow-[#00A3E0]/25'
                    : 'text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                Home
              </Link>

              {/* 2. ABOUT (Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
              >
                <button
                  onClick={() => handleMenuToggle('about')}
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                    activeMenu === 'about' || location.pathname === '/about'
                      ? 'text-white bg-[#00A3E0] font-bold shadow-md shadow-[#00A3E0]/25' 
                      : 'text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>About</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === 'about' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                </button>

                {/* About Dropdown */}
                {activeMenu === 'about' && (
                  <div 
                    className="absolute top-full left-0 w-64 pt-2 transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                    onMouseEnter={() => handleMouseEnter('about')}
                  >
                    <div className="rounded-2xl border border-slate-200 dark:border-cyan-500/30 bg-white dark:bg-[#070E1C] p-2 shadow-2xl space-y-0.5">
                      <Link to="/about/the-knooviq-story" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <BookOpen className="h-3.5 w-3.5 text-[#00A3E0] flex-shrink-0" />
                        <span className="truncate">The KnoovIQ Story</span>
                      </Link>
                      <Link to="/about/visionary-leadership" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <Award className="h-3.5 w-3.5 text-purple-500 flex-shrink-0" />
                        <span className="truncate">Visionary Leadership</span>
                      </Link>
                      <Link to="/about/digital-sap-excellence" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <Sparkles className="h-3.5 w-3.5 text-sky-400 flex-shrink-0" />
                        <span className="truncate">Digital & SAP Excellence</span>
                      </Link>
                      <Link to="/about/our-global-network" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <Globe2 className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" />
                        <span className="truncate">Our Global Network</span>
                      </Link>
                      <Link to="/about/grow-with-us" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <TrendingUp className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                        <span className="truncate">Grow With Us</span>
                      </Link>
                      <Link to="/about/knooviq-connect" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <PhoneCall className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">KnoovIQ Connect</span>
                      </Link>
                      <Link to="/about/global-presence" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <MapPin className="h-3.5 w-3.5 text-rose-500 flex-shrink-0" />
                        <span className="truncate">Global Presence</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. PRODUCTS (Accely Image 1) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('products')}
              >
                <button
                  onClick={() => handleMenuToggle('products')}
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                    activeMenu === 'products'
                      ? 'text-white bg-[#00A3E0] font-bold shadow-md shadow-[#00A3E0]/25' 
                      : 'text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                </button>

                {/* Products Mega Menu Dropdown */}
                {activeMenu === 'products' && (
                  <div 
                    className="fixed left-0 right-0 top-[68px] w-full transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50 px-4"
                    onMouseEnter={() => handleMouseEnter('products')}
                  >
                    <div className="max-w-7xl mx-auto rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-7 shadow-2xl">
                      <div className="grid grid-cols-5 gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
                        
                        {/* Column 1: Knooviq Accelerated Solutions */}
                        <div className="space-y-3 bg-slate-50 dark:bg-[#0B1528] p-4 rounded-xl border border-slate-200/60 dark:border-white/5">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1931] dark:text-[#00A3E0]">
                            Knooviq Accelerated Solutions
                          </h4>
                          <ul className="space-y-1.5 text-xs">
                            <li><Link to="/exim" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">EXIM</Link></li>
                            <li><Link to="/e-invoice" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">E-Invoice</Link></li>
                            <li><Link to="/eway-bill" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">E-Way Bill</Link></li>
                            <li><Link to="/products/gst" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">GST</Link></li>
                          </ul>
                        </div>

                        {/* Column 2: Knooviq Enterprise Solutions */}
                        <div className="space-y-3 bg-slate-50 dark:bg-[#0B1528] p-4 rounded-xl border border-slate-200/60 dark:border-white/5">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1931] dark:text-[#00A3E0]">
                            <Link 
                              to="/products" 
                              onClick={() => setActiveMenu(null)} 
                              className="hover:underline block"
                            >
                              <span>Knooviq Enterprise Solutions</span>
                            </Link>
                          </h4>
                          <ul className="space-y-1 text-xs">
                            <li><Link to="/products/vendor-management" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Vendor Management</Link></li>
                            <li><Link to="/products/field-service-management" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Field Service Management</Link></li>
                            <li><Link to="/products/real-estate-management" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Real Estate Management</Link></li>
                            <li><Link to="/products/distribution-management" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Distribution Management</Link></li>
                            <li><Link to="/products/digital-retail-solution" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Digital Retail Solution</Link></li>
                            <li><Link to="/products/subscription-billing" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Subscription Billing</Link></li>
                            <li><Link to="/products/sales-force-automation" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Sales Force Automation</Link></li>
                            <li><Link to="/products/dealer-management-system" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Dealer Management System</Link></li>
                            <li><Link to="/products/asset-management" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Asset Management</Link></li>
                          </ul>
                        </div>

                        {/* Column 3: Knooviq AI Studio */}
                        <div className="space-y-3 bg-slate-50 dark:bg-[#0B1528] p-4 rounded-xl border border-slate-200/60 dark:border-white/5">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1931] dark:text-[#00A3E0] flex items-center justify-between">
                            <span>Knooviq AI Studio</span>
                            <span className="text-[9px] bg-[#00A3E0] text-white px-1.5 py-0.5 rounded font-bold">GEN AI</span>
                          </h4>
                          <ul className="space-y-1.5 text-xs">
                            <li><Link to="/products/knooviq-ai-consultant" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Knooviq AI Consultant</Link></li>
                            <li><Link to="/products/knooviq-ai-insights" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Knooviq AI Insights</Link></li>
                            <li><Link to="/products/knooviq-ai-engagement" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Knooviq AI Engagement</Link></li>
                          </ul>
                        </div>

                        {/* Column 4: Enterprise AI Products */}
                        <div className="space-y-3 bg-slate-50 dark:bg-[#0B1528] p-4 rounded-xl border border-slate-200/60 dark:border-white/5">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1931] dark:text-[#00A3E0]">
                            Enterprise AI Products
                          </h4>
                          <ul className="space-y-1 text-xs">
                            <li><Link to="/products/bank-statement-intelligence" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Bank Statement Intelligence</Link></li>
                            <li><Link to="/products/supply-chain-intelligence" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Supply Chain Intelligence</Link></li>
                            <li><Link to="/products/document-intelligence" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Document Intelligence</Link></li>
                            <li><Link to="/products/accounts-payable-intelligence" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Accounts Payable Intelligence</Link></li>
                            <li><Link to="/products/expense-intelligence" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Expense Intelligence</Link></li>
                            <li><Link to="/products/form-intelligence" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Form Intelligence</Link></li>
                          </ul>
                        </div>

                        {/* Column 5: Knooviq Automation Suite */}
                        <div className="space-y-3 bg-slate-50 dark:bg-[#0B1528] p-4 rounded-xl border border-slate-200/60 dark:border-white/5">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1931] dark:text-[#00A3E0]">
                            <Link 
                              to="/products/automation-suite" 
                              onClick={() => setActiveMenu(null)} 
                              className="hover:underline block"
                            >
                              <span>Knooviq Automation Suite</span>
                            </Link>
                          </h4>
                          <ul className="space-y-1.5 text-xs">
                            <li><Link to="/products/automation-studio" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Automation Studio</Link></li>
                            <li><Link to="/products/automation-evolve" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Automation Evolve</Link></li>
                            <li><Link to="/products/automation-manager" onClick={() => setActiveMenu(null)} className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium">Automation Manager</Link></li>
                          </ul>
                        </div>

                      </div>

                      {/* Bottom Recommended Strip */}
                      <div className="pt-4 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">RECOMMENDED FOR YOU:</span>
                          <span className="text-slate-900 dark:text-white font-bold">Accelerated EXIM & E-Invoicing BTP Extensions</span>
                        </div>
                        <Link to="/solutions" onClick={() => setActiveMenu(null)} className="font-bold text-[#00A3E0] hover:underline flex items-center gap-1">
                          <span>Explore All Products & Accelerators</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. TRANSFORMATION */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('transformation')}
              >
                <button
                  onClick={() => handleMenuToggle('transformation')}
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                    activeMenu === 'transformation' || location.pathname.startsWith('/transformation') || location.pathname.startsWith('/solutions')
                      ? 'text-white bg-[#00A3E0] font-bold shadow-md shadow-[#00A3E0]/25' 
                      : 'text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>Transformation</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === 'transformation' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                </button>

                {/* Transformation Mega Menu Dropdown (Exact Product Format) */}
                {activeMenu === 'transformation' && (
                  <div 
                    className="fixed left-0 right-0 top-[68px] w-full transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50 px-4"
                    onMouseEnter={() => handleMouseEnter('transformation')}
                  >
                    <div className="max-w-7xl mx-auto rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-7 shadow-2xl">
                      
                      {/* 6 Category Cards in exact Product layout (1 row of 6 on xl, 3 cols on lg, 2 cols on md) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5 pb-6 border-b border-slate-200 dark:border-white/10">
                        {TRANSFORMATION_MEGA_MENU.map((category) => (
                          <div 
                            key={category.id} 
                            className="space-y-3 bg-slate-50 dark:bg-[#0B1528] p-4 rounded-xl border border-slate-200/60 dark:border-white/5 flex flex-col justify-between"
                          >
                            <div>
                              <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1931] dark:text-[#00A3E0] mb-3">
                                <Link 
                                  to={category.path} 
                                  onClick={() => setActiveMenu(null)} 
                                  className="hover:underline flex items-center justify-between group"
                                >
                                  <span className="leading-snug">{category.title}</span>
                                  {category.badge && (
                                    <span className="text-[9px] bg-[#00A3E0] text-white px-1.5 py-0.5 rounded font-bold shrink-0 ml-1">
                                      {category.badge}
                                    </span>
                                  )}
                                </Link>
                              </h4>
                              <ul className="space-y-1 text-xs">
                                {category.items.map((item, idx) => (
                                  <li key={idx}>
                                    <Link 
                                      to={item.path} 
                                      onClick={() => setActiveMenu(null)} 
                                      className="text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2 py-1 rounded-lg block transition-colors font-medium leading-snug"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Recommended Strip matching Product Format */}
                      <div className="pt-4 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                            RECOMMENDED FOR YOU:
                          </span>
                          <span className="text-slate-900 dark:text-white font-bold">
                            Clean Core Architecture & S/4HANA Cloud Modernization
                          </span>
                        </div>
                        <Link 
                          to="/transformation" 
                          onClick={() => setActiveMenu(null)} 
                          className="font-bold text-[#00A3E0] hover:underline flex items-center gap-1"
                        >
                          <span>Explore All Transformation Practices</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* 5. SERVICES (Accely Image 3) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
              >
                <button
                  onClick={() => handleMenuToggle('services')}
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                    activeMenu === 'services'
                      ? 'text-white bg-[#00A3E0] font-bold shadow-md shadow-[#00A3E0]/25' 
                      : 'text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                </button>

                {/* Services Mega Menu Dropdown */}
                {activeMenu === 'services' && (
                  <div 
                    className="fixed left-0 right-0 top-[68px] w-full transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50 px-4"
                    onMouseEnter={() => handleMouseEnter('services')}
                  >
                    <div className="max-w-5xl mx-auto rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-7 shadow-2xl">
                      <div className="grid grid-cols-2 gap-8 pb-6 border-b border-slate-200 dark:border-white/10">
                        
                        {/* Section 1: Strategy and Consulting */}
                        <div className="space-y-3 bg-slate-50 dark:bg-[#0B1528] p-5 rounded-xl border border-slate-200/60 dark:border-white/5">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1931] dark:text-[#00A3E0]">
                            Strategy and Consulting
                          </h4>
                          <ul className="space-y-2 text-xs">
                            <li><Link to="/services" onClick={() => setActiveMenu(null)} className="text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2.5 py-1.5 rounded-lg block transition-colors font-semibold">Business Consulting</Link></li>
                            <li><Link to="/services" onClick={() => setActiveMenu(null)} className="text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2.5 py-1.5 rounded-lg block transition-colors font-semibold">Process Consulting</Link></li>
                            <li><Link to="/services" onClick={() => setActiveMenu(null)} className="text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2.5 py-1.5 rounded-lg block transition-colors font-semibold">Technology Consulting</Link></li>
                            <li><Link to="/services" onClick={() => setActiveMenu(null)} className="text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2.5 py-1.5 rounded-lg block transition-colors font-semibold">Clean Core Architecture & BTP Advisory</Link></li>
                          </ul>
                        </div>

                        {/* Section 2: SAP Support */}
                        <div className="space-y-3 bg-slate-50 dark:bg-[#0B1528] p-5 rounded-xl border border-slate-200/60 dark:border-white/5">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1931] dark:text-[#00A3E0]">
                            SAP Support & Operations
                          </h4>
                          <ul className="space-y-2 text-xs">
                            <li><Link to="/services" onClick={() => setActiveMenu(null)} className="text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2.5 py-1.5 rounded-lg block transition-colors font-semibold">SAP Managed Services</Link></li>
                            <li><Link to="/services" onClick={() => setActiveMenu(null)} className="text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2.5 py-1.5 rounded-lg block transition-colors font-semibold">SAP AMS (24/7/365 Support)</Link></li>
                            <li><Link to="/services" onClick={() => setActiveMenu(null)} className="text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2.5 py-1.5 rounded-lg block transition-colors font-semibold">SAP Migration & Database Conversion</Link></li>
                            <li><Link to="/services" onClick={() => setActiveMenu(null)} className="text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2.5 py-1.5 rounded-lg block transition-colors font-semibold">SAP Discovery & Evaluation</Link></li>
                            <li><Link to="/services" onClick={() => setActiveMenu(null)} className="text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2.5 py-1.5 rounded-lg block transition-colors font-semibold">SAP Implementation and Rollout</Link></li>
                            <li><Link to="/services" onClick={() => setActiveMenu(null)} className="text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-white dark:hover:bg-white/10 px-2.5 py-1.5 rounded-lg block transition-colors font-semibold">SAP Upgrade Services</Link></li>
                          </ul>
                        </div>

                      </div>

                      {/* Highlighted Yellow/Cyan Banner matching Image 3 */}
                      <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Need dedicated SAP talent or specialized S/4HANA migration advisory?
                        </p>
                        <button
                          onClick={() => {
                            setActiveMenu(null);
                            if (onOpenContact) onOpenContact('SAP Expert Consultation');
                            else handleNavClick('/contact');
                          }}
                          className="rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-black font-extrabold px-6 py-2.5 text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2"
                        >
                          <span>Talk to an SAP expert &rarr;</span>
                        </button>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* 6. INDUSTRIES (Accely Image 4 - 2 Rows x 5 Columns) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('industries')}
              >
                <button
                  onClick={() => handleMenuToggle('industries')}
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                    activeMenu === 'industries'
                      ? 'text-white bg-[#00A3E0] font-bold shadow-md shadow-[#00A3E0]/25' 
                      : 'text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                </button>

                {/* Industries Mega Menu Dropdown */}
                {activeMenu === 'industries' && (
                  <div 
                    className="fixed left-0 right-0 top-[68px] w-full transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50 px-4"
                    onMouseEnter={() => handleMouseEnter('industries')}
                  >
                    <div className="max-w-7xl mx-auto rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-7 shadow-2xl space-y-5">
                      
                      {/* 8 Industry Vertical Practices (4 Columns x 2 Rows) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {INDUSTRIES_NAV_CATEGORIES.map((cat) => (
                          <div 
                            key={cat.id}
                            className="space-y-2 bg-slate-50 dark:bg-[#0B1528] p-3.5 rounded-xl border border-slate-200/70 dark:border-white/5 hover:border-sky-300 dark:hover:border-cyan-500/30 hover:shadow-md transition-all flex flex-col justify-start"
                          >
                            <div className="pb-1.5 border-b border-slate-200/60 dark:border-white/10">
                              {INDUSTRY_ROUTE_MAP[cat.name] ? (
                                <Link 
                                  to={INDUSTRY_ROUTE_MAP[cat.name]} 
                                  onClick={() => setActiveMenu(null)}
                                  className="industry-category-title text-[#0A1931] dark:text-[#00A3E0] hover:text-[#0070C0] dark:hover:text-cyan-300 transition-colors flex items-center justify-between group/cat"
                                >
                                  <span>{cat.name}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/cat:opacity-100 group-hover/cat:translate-x-0.5 transition-all shrink-0" />
                                </Link>
                              ) : (
                                <h4 className="industry-category-title text-[#0A1931] dark:text-[#00A3E0]">
                                  {cat.name}
                                </h4>
                              )}
                            </div>
                                <ul className="space-y-1">
                                  {cat.items.map((subItem) => {
                                    const industryRoute = INDUSTRY_ROUTE_MAP[subItem];
                                    return (
                                      <li key={subItem}>
                                        <Link 
                                          to={industryRoute || '/industries'} 
                                          onClick={() => setActiveMenu(null)} 
                                          className="industry-category-item px-2 py-1 rounded block transition-colors text-slate-700 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10"
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

              {/* 7. INSIGHTS (Accely Image 5 Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('insights')}
              >
                <button
                  onClick={() => handleMenuToggle('insights')}
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                    activeMenu === 'insights' || location.pathname === '/insights'
                      ? 'text-white bg-[#00A3E0] font-bold shadow-md shadow-[#00A3E0]/25' 
                      : 'text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>Insights</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeMenu === 'insights' ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                </button>

                {/* Insights Dropdown */}
                {activeMenu === 'insights' && (
                  <div 
                    className="absolute top-full -left-12 w-64 pt-2 transition-all animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                    onMouseEnter={() => handleMouseEnter('insights')}
                  >
                    <div className="rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-3 shadow-2xl space-y-1">
                      <Link to="/insights" onClick={() => setActiveMenu(null)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <Award className="h-4 w-4 text-[#00A3E0]" />
                        <span>Customer Stories</span>
                      </Link>
                      <Link to="/insights" onClick={() => setActiveMenu(null)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <BookOpen className="h-4 w-4 text-emerald-500" />
                        <span>Blogs</span>
                      </Link>
                      <Link to="/insights" onClick={() => setActiveMenu(null)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <Newspaper className="h-4 w-4 text-purple-500" />
                        <span>Newsroom</span>
                      </Link>
                      <Link to="/insights" onClick={() => setActiveMenu(null)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <FileText className="h-4 w-4 text-indigo-500" />
                        <span>White Papers</span>
                      </Link>
                      <Link to="/insights" onClick={() => setActiveMenu(null)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <Video className="h-4 w-4 text-rose-500" />
                        <span>Videos</span>
                      </Link>
                      <Link to="/insights" onClick={() => setActiveMenu(null)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                        <BookOpen className="h-4 w-4 text-amber-500" />
                        <span>Brochures</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

            </nav>

            {/* Right Action Utilities (Search, Theme Toggle, Contact Us Button) */}
            <div className="hidden lg:flex items-center gap-3">
              
              {/* Search Icon (Accely top right) */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 dark:text-slate-300 hover:text-[#00A3E0] hover:bg-slate-100 dark:hover:bg-white/10 transition-all border border-slate-200 dark:border-white/10"
              >
                <Search className="h-4 w-4" />
              </button>

              {/* Premium "Contact us ->" Button with Shimmer */}
              <button
                onClick={() => onOpenContact ? onOpenContact() : handleNavClick('/contact')}
                className="btn-primary-gradient shimmer-sweep rounded-2xl px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-lg flex items-center gap-2 active:scale-95 font-display"
              >
                <span>Contact us</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Mobile Actions (Hamburger) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-sky-500/20 bg-slate-100 dark:bg-[#0B1528] text-slate-800 dark:text-slate-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Interactive Search Overlay */}
        {searchOpen && (
          <div className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#070E1C] px-4 py-3 shadow-2xl transition-all">
            <div className="max-w-4xl mx-auto flex items-center gap-3">
              <Search className="h-4 w-4 text-[#00A3E0]" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search solutions, SAP modules, products, industries, or services..." 
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none font-medium"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    setSearchOpen(false);
                    navigate(`/solutions?q=${encodeURIComponent(searchQuery)}`);
                  }
                }}
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white px-2 py-1 bg-slate-100 dark:bg-white/10 rounded"
              >
                ESC
              </button>
            </div>
          </div>
        )}

        {/* Mobile Drawer with exact sequence: Home, About, Products, Solutions, Services, Industries, Insights */}
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
                  <Link to="/about/the-knooviq-story" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• The KnoovIQ Story</Link>
                  <Link to="/about/visionary-leadership" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Visionary Leadership</Link>
                  <Link to="/about/digital-sap-excellence" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Digital & SAP Excellence</Link>
                  <Link to="/about/our-global-network" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Our Global Network</Link>
                  <Link to="/about/grow-with-us" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Grow With Us</Link>
                  <Link to="/about/knooviq-connect" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• KnoovIQ Connect</Link>
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

            {/* 5. Mobile Services Accordion */}
            <div className="border border-slate-200 dark:border-white/10 rounded-2xl p-2 bg-slate-50 dark:bg-[#050B17]">
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <span className="flex items-center gap-1.5 text-sky-500">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>Services & Strategy Consulting</span>
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubmenu === 'services' && (
                <div className="pt-2 pl-2 space-y-1.5 border-t border-slate-200 dark:border-white/5 mt-1 text-xs">
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• Business & Process Consulting</Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• SAP Managed Services & 24/7 AMS</Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• SAP S/4HANA Implementation & Rollout</Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• ECC to S/4HANA Migration</Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-0.5 text-slate-700 dark:text-slate-300 font-medium">• SAP Discovery & Evaluation Audit</Link>
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

            {/* 7. Mobile Insights */}
            <Link
              to="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl"
            >
              Insights & White Papers
            </Link>

            {/* 8. Mobile Contact */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl"
            >
              Contact Us
            </Link>

            {/* Drawer Footer CTA */}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                  else handleNavClick('/contact');
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





