import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ChatbotWidget } from './components/chatbot/ChatbotWidget';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { InsightsPage } from './pages/InsightsPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

// 7 Dedicated About Sub-Pages
import { TheKnooviqStoryPage } from './pages/about/TheKnooviqStoryPage';
import { VisionaryLeadershipPage } from './pages/about/VisionaryLeadershipPage';
import { DigitalSapExcellencePage } from './pages/about/DigitalSapExcellencePage';
import { OurGlobalNetworkPage } from './pages/about/OurGlobalNetworkPage';
import { GrowWithUsPage } from './pages/about/GrowWithUsPage';
import { KnooviqConnectPage } from './pages/about/KnooviqConnectPage';
import { GlobalPresencePage } from './pages/about/GlobalPresencePage';
import { EximPage } from './pages/EximPage';
import { EInvoicePage } from './pages/EInvoicePage';
import { EWayBillPage } from './pages/EWayBillPage';
import { AcceleratedGstPage } from './pages/AcceleratedGstPage';
import { VendorManagementPage } from './pages/VendorManagementPage';
import { SubscriptionBillingPage } from './pages/SubscriptionBillingPage';
import { FieldServiceManagementPage } from './pages/FieldServiceManagementPage';
import { SalesForceAutomationPage } from './pages/SalesForceAutomationPage';
import { DealerManagementSystemPage } from './pages/DealerManagementSystemPage';
import { AssetManagementPage } from './pages/AssetManagementPage';
import { RealEstateManagementPage } from './pages/RealEstateManagementPage';
import { DistributionManagementPage } from './pages/DistributionManagementPage';
import { DigitalRetailSolutionPage } from './pages/DigitalRetailSolutionPage';
import { RaapydProductsPage } from './pages/RaapydProductsPage';
import { KnooviqAIConsultantPage } from './pages/ai/KnooviqAIConsultantPage';
import { KnooviqAIInsightsPage } from './pages/ai/KnooviqAIInsightsPage';
import { KnooviqAIEngagementPage } from './pages/ai/KnooviqAIEngagementPage';
import { AccountsPayableIntelligencePage } from './pages/AccountsPayableIntelligencePage';
import { ExpenseIntelligencePage } from './pages/ExpenseIntelligencePage';
import { FormIntelligencePage } from './pages/FormIntelligencePage';
import { BankStatementIntelligencePage } from './pages/BankStatementIntelligencePage';
import { SupplyChainIntelligencePage } from './pages/SupplyChainIntelligencePage';
import { DocumentIntelligencePage } from './pages/DocumentIntelligencePage';
import { AutomationSuitePage } from './pages/AutomationSuitePage';
import { AutomationStudioPage } from './pages/AutomationStudioPage';
import { AutomationEvolvePage } from './pages/AutomationEvolvePage';
import { AutomationManagerPage } from './pages/AutomationManagerPage';
import { SapS4HanaPage } from './pages/SapS4HanaPage';
import { SapBusinessApplicationsPage } from './pages/SapBusinessApplicationsPage';
import { TransformationPage } from './pages/TransformationPage';
import { RetailEcommerceIndustryPage } from './pages/industries/RetailEcommerceIndustryPage';
import { ConsumerGoodsIndustryPage } from './pages/industries/ConsumerGoodsIndustryPage';
import { FoodBeverageIndustryPage } from './pages/industries/FoodBeverageIndustryPage';
import { FashionLifestyleIndustryPage } from './pages/industries/FashionLifestyleIndustryPage';
import { TextileIndustryPage } from './pages/industries/TextileIndustryPage';
import { TradingIndustryPage } from './pages/industries/TradingIndustryPage';
import { DistributionIndustryPage } from './pages/industries/DistributionIndustryPage';
import { IndustrialManufacturingIndustryPage } from './pages/industries/IndustrialManufacturingIndustryPage';
import { AutomotiveMobilityIndustryPage } from './pages/industries/AutomotiveMobilityIndustryPage';
import { DiscreteManufacturingIndustryPage } from './pages/industries/DiscreteManufacturingIndustryPage';
import { ProcessManufacturingIndustryPage } from './pages/industries/ProcessManufacturingIndustryPage';
import { IndustrialProductsIndustryPage } from './pages/industries/IndustrialProductsIndustryPage';
import { ChemicalsMaterialsIndustryPage } from './pages/industries/ChemicalsMaterialsIndustryPage';
import { HospitalsHealthcareIndustryPage } from './pages/industries/HospitalsHealthcareIndustryPage';
import { PharmaceuticalsIndustryPage } from './pages/industries/PharmaceuticalsIndustryPage';
import { MedicalDevicesIndustryPage } from './pages/industries/MedicalDevicesIndustryPage';
import { DiagnosticsIndustryPage } from './pages/industries/DiagnosticsIndustryPage';
import { WellnessCareIndustryPage } from './pages/industries/WellnessCareIndustryPage';
import { SapBtpPage } from './pages/technology/SapBtpPage';
import { SapHanaPage } from './pages/technology/SapHanaPage';
import { SapFioriPage } from './pages/technology/SapFioriPage';
import { SapIntegrationSuitePage } from './pages/technology/SapIntegrationSuitePage';
import { CloudTransformationPage } from './pages/technology/CloudTransformationPage';
import { OilGasIndustryPage } from './pages/industries/OilGasIndustryPage';
import { PowerUtilitiesIndustryPage } from './pages/industries/PowerUtilitiesIndustryPage';
import { RenewableEnergyIndustryPage } from './pages/industries/RenewableEnergyIndustryPage';
import { MiningMetalsIndustryPage } from './pages/industries/MiningMetalsIndustryPage';
import { EnergyServicesIndustryPage } from './pages/industries/EnergyServicesIndustryPage';
import { EngineeringIndustryPage } from './pages/industries/EngineeringIndustryPage';
import { ConstructionEpcIndustryPage } from './pages/industries/ConstructionEpcIndustryPage';
import { InfrastructureIndustryPage } from './pages/industries/InfrastructureIndustryPage';
import { RealEstateIndustryPage } from './pages/industries/RealEstateIndustryPage';
import { FacilitiesAssetsIndustryPage } from './pages/industries/FacilitiesAssetsIndustryPage';
import { TechnologyServicesIndustryPage } from './pages/industries/TechnologyServicesIndustryPage';
import { SoftwareSaasIndustryPage } from './pages/industries/SoftwareSaasIndustryPage';
import { HighTechElectronicsIndustryPage } from './pages/industries/HighTechElectronicsIndustryPage';
import { WarehouseEwmIndustryPage } from './pages/industries/WarehouseEwmIndustryPage';
import { TransportationLogisticsIndustryPage } from './pages/industries/TransportationLogisticsIndustryPage';

// Wrapper component to selectively show public layout elements (Navbar, Footer, Chatbot)
const AppContent: React.FC = () => {
  const location = useLocation();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  const isAdminRoute = location.pathname.startsWith('/admin');

  // Always scroll to top immediately whenever route changes
  React.useEffect(() => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  const handleOpenContactModal = (service?: string) => {
    setSelectedServiceForModal(service);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050B17] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      {/* Public Navigation */}
      {!isAdminRoute && (
        <Navbar onOpenContact={handleOpenContactModal} />
      )}

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenContact={handleOpenContactModal} />} />
          
          {/* Main About Directory Hub */}
          <Route path="/about" element={<AboutPage onOpenContact={handleOpenContactModal} />} />

          {/* 7 Dedicated About Sub-Pages */}
          <Route path="/about/the-knooviq-story" element={<TheKnooviqStoryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/about/story" element={<TheKnooviqStoryPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/about/visionary-leadership" element={<VisionaryLeadershipPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/about/leadership" element={<VisionaryLeadershipPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/about/digital-sap-excellence" element={<DigitalSapExcellencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/about/excellence" element={<DigitalSapExcellencePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/about/our-global-network" element={<OurGlobalNetworkPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/about/network" element={<OurGlobalNetworkPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/about/grow-with-us" element={<GrowWithUsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/about/grow" element={<GrowWithUsPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/about/knooviq-connect" element={<KnooviqConnectPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/about/connect" element={<KnooviqConnectPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/about/global-presence" element={<GlobalPresencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/about/presence" element={<GlobalPresencePage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated SAP-Powered EXIM Solution Page (Exactly 7 Sections) */}
          <Route path="/exim" element={<EximPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/exim" element={<EximPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/products/exim" element={<EximPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated SAP-Powered E-Invoicing Solution Page (Exactly 7 Sections) */}
          <Route path="/e-invoice" element={<EInvoicePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/e-invoicing" element={<EInvoicePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/e-invoice" element={<EInvoicePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/products/e-invoice" element={<EInvoicePage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated SAP-Powered E-Way Bill Solution Page (Exactly 7 Sections) */}
          <Route path="/eway-bill" element={<EWayBillPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/e-way-bill" element={<EWayBillPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ewaybill" element={<EWayBillPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/eway-bill" element={<EWayBillPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/e-way-bill" element={<EWayBillPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/products/eway-bill" element={<EWayBillPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/products/e-way-bill" element={<EWayBillPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated SAP-Powered Accelerated GST Solution Page (Exactly 5 Sections) */}
          <Route path="/products/gst" element={<AcceleratedGstPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/accelerated-gst" element={<AcceleratedGstPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/gst" element={<AcceleratedGstPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/gst" element={<AcceleratedGstPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated B2B Enterprise Vendor Management Solution Page (10 Dedicated Sections) */}
          <Route path="/products/vendor-management" element={<VendorManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/vendor-management" element={<VendorManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/vendor-management" element={<VendorManagementPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Subscription Billing Solution Page ("The Billing Pulse" - Exactly 7 Sections) */}
          <Route path="/products/subscription-billing" element={<SubscriptionBillingPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/subscription-billing" element={<SubscriptionBillingPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/subscription-billing" element={<SubscriptionBillingPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Field Service Management Page ("From Service Request to Resolution" - Exactly 7 Sections) */}
          <Route path="/products/field-service-management" element={<FieldServiceManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/field-service-management" element={<FieldServiceManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/field-service-management" element={<FieldServiceManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/fsm" element={<FieldServiceManagementPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Sales Force Automation Page ("Route-to-Market Engine" - Exactly 7 Sections) */}
          <Route path="/products/sales-force-automation" element={<SalesForceAutomationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sales-force-automation" element={<SalesForceAutomationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sales-force-automation" element={<SalesForceAutomationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sfa" element={<SalesForceAutomationPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Dealer Management System Page ("Bimodal Channel Bridge" - Exactly 7 Sections) */}
          <Route path="/products/dealer-management-system" element={<DealerManagementSystemPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/dealer-management-system" element={<DealerManagementSystemPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/dealer-management-system" element={<DealerManagementSystemPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/dms" element={<DealerManagementSystemPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Asset Management (EAM) Page ("Digital Twin Diagnostic Chamber" - Exactly 7 Sections) */}
          <Route path="/products/asset-management" element={<AssetManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/asset-management" element={<AssetManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/asset-management" element={<AssetManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/eam" element={<AssetManagementPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Real Estate Management (RE-FX) Page ("Intelligent Property Governance" - Exactly 7 Sections) */}
          <Route path="/products/real-estate-management" element={<RealEstateManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/real-estate-management" element={<RealEstateManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/real-estate-management" element={<RealEstateManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/rem" element={<RealEstateManagementPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Distribution Management Page ("Intelligent Distribution" - Exactly 7 Sections) */}
          <Route path="/products/distribution-management" element={<DistributionManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/distribution-management" element={<DistributionManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/distribution-management" element={<DistributionManagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/distribution" element={<DistributionManagementPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Digital Retail Solution Page ("Reinvent Digital Retail" - Exactly 5 Sections) */}
          <Route path="/products/digital-retail-solution" element={<DigitalRetailSolutionPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/digital-retail-solution" element={<DigitalRetailSolutionPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/digital-retail-solution" element={<DigitalRetailSolutionPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/digital-retail" element={<DigitalRetailSolutionPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Raapyd Products Hub Page (Zero Dashboards, Zero Metrics, Pure Enterprise Architecture) */}
          <Route path="/products" element={<RaapydProductsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/raapyd-products" element={<RaapydProductsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/products/raapyd" element={<RaapydProductsPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Knooviq AI Product Pages */}
          <Route path="/products/knooviq-ai-consultant" element={<KnooviqAIConsultantPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/knooviq-ai-consultant" element={<KnooviqAIConsultantPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ai-consultant" element={<KnooviqAIConsultantPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/products/knooviq-ai-insights" element={<KnooviqAIInsightsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/knooviq-ai-insights" element={<KnooviqAIInsightsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ai-insights" element={<KnooviqAIInsightsPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/products/knooviq-ai-engagement" element={<KnooviqAIEngagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/knooviq-ai-engagement" element={<KnooviqAIEngagementPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ai-engagement" element={<KnooviqAIEngagementPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Intelligence Product Pages */}
          <Route path="/products/bank-statement-intelligence" element={<BankStatementIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/bank-statement-intelligence" element={<BankStatementIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/bank-statements-extraction" element={<BankStatementIntelligencePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/products/supply-chain-intelligence" element={<SupplyChainIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/supply-chain-intelligence" element={<SupplyChainIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/supply-chain-automation" element={<SupplyChainIntelligencePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/products/document-intelligence" element={<DocumentIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/document-intelligence" element={<DocumentIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/document-data-extraction" element={<DocumentIntelligencePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/products/accounts-payable-intelligence" element={<AccountsPayableIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/accounts-payable-intelligence" element={<AccountsPayableIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/accounts-payable" element={<AccountsPayableIntelligencePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/products/expense-intelligence" element={<ExpenseIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/expense-intelligence" element={<ExpenseIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/expense-management" element={<ExpenseIntelligencePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/products/form-intelligence" element={<FormIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/form-intelligence" element={<FormIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/form-data-extraction" element={<FormIntelligencePage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated Knooviq Automation Suite Pages */}
          <Route path="/products/automation-suite" element={<AutomationSuitePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/automation-suite" element={<AutomationSuitePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/products/knooviq-automation-suite" element={<AutomationSuitePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/products/automation-studio" element={<AutomationStudioPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/automation-studio" element={<AutomationStudioPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/products/automation-evolve" element={<AutomationEvolvePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/automation-evolve" element={<AutomationEvolvePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/products/automation-manager" element={<AutomationManagerPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/automation-manager" element={<AutomationManagerPage onOpenContact={handleOpenContactModal} />} />

          {/* Dedicated SAP S/4HANA & Business Transformation Suite */}
          <Route path="/solutions/sap-s4hana" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="sap-s4hana" />} />
          <Route path="/transformation/sap-s4hana" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="sap-s4hana" />} />
          <Route path="/transformation/erp-transformation" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="erp" />} />
          <Route path="/solutions/erp-transformation" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="erp" />} />
          <Route path="/erp-transformation" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="erp" />} />
          <Route path="/transformation/digital-transformation" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="digital" />} />
          <Route path="/solutions/digital-transformation" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="digital" />} />
          <Route path="/digital-transformation" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="digital" />} />
          <Route path="/transformation/rise-with-sap" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="rise" />} />
          <Route path="/transformation/business-transformation" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="sap-s4hana" />} />
          <Route path="/solutions/rise-with-sap" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="rise" />} />
          <Route path="/sap-s4hana" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="sap-s4hana" />} />
          <Route path="/solutions/s4hana" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="sap-s4hana" />} />
          <Route path="/grow-with-sap" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="sap-s4hana" />} />
          <Route path="/rise-with-sap" element={<SapS4HanaPage onOpenContact={handleOpenContactModal} initialTab="rise" />} />

          {/* Dedicated SAP Business Applications Suite (5 Applications, 8 Sections) */}
          <Route path="/solutions/sap-business-applications" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-finance" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} initialApp="finance" />} />
          <Route path="/solutions/sap-supply-chain" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} initialApp="supply-chain" />} />
          <Route path="/solutions/sap-successfactors" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} initialApp="human-capital" />} />
          <Route path="/solutions/sap-cx" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} initialApp="cx" />} />
          <Route path="/solutions/sap-s4hana-app" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} initialApp="s4hana" />} />
          <Route path="/transformation/business-applications" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/transformation/finance" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} initialApp="finance" />} />
          <Route path="/transformation/supply-chain" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} initialApp="supply-chain" />} />
          <Route path="/transformation/human-capital" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} initialApp="human-capital" />} />
          <Route path="/transformation/customer-experience" element={<SapBusinessApplicationsPage onOpenContact={handleOpenContactModal} initialApp="cx" />} />

          {/* Dedicated SAP Technology & Cloud Suite (5 Dedicated Pages, Exactly 7 Sections Each) */}
          <Route path="/technology/sap-btp" element={<SapBtpPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-btp" element={<SapBtpPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-btp" element={<SapBtpPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/technology/sap-hana" element={<SapHanaPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-hana" element={<SapHanaPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-hana" element={<SapHanaPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/technology/sap-fiori" element={<SapFioriPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-fiori" element={<SapFioriPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-fiori" element={<SapFioriPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/technology/sap-integration-suite" element={<SapIntegrationSuitePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-integration-suite" element={<SapIntegrationSuitePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-integration-suite" element={<SapIntegrationSuitePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/technology/cloud-transformation" element={<CloudTransformationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/transformation/cloud-transformation" element={<CloudTransformationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/cloud-transformation" element={<CloudTransformationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/cloud-transformation" element={<CloudTransformationPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/transformation" element={<TransformationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/transformation/:slug" element={<TransformationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/transformation" element={<TransformationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions" element={<SolutionsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/services" element={<ServicesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries" element={<IndustriesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerceIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/retail" element={<RetailEcommerceIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/retail-ecommerce" element={<RetailEcommerceIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/consumer-goods" element={<ConsumerGoodsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/food-beverage" element={<FoodBeverageIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/fashion-lifestyle" element={<FashionLifestyleIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/textile" element={<TextileIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/trading" element={<TradingIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/distribution" element={<DistributionIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/industrial-manufacturing" element={<IndustrialManufacturingIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industrial-manufacturing" element={<IndustrialManufacturingIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/automotive-mobility" element={<AutomotiveMobilityIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/automotive" element={<AutomotiveMobilityIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/discrete-manufacturing" element={<DiscreteManufacturingIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/process-manufacturing" element={<ProcessManufacturingIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/industrial-products" element={<IndustrialProductsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/chemicals-materials" element={<ChemicalsMaterialsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/chemicals" element={<ChemicalsMaterialsIndustryPage onOpenContact={handleOpenContactModal} />} />
          
          {/* Health & Life Sciences Dedicated Industry Pages */}
          <Route path="/industries/hospitals-healthcare" element={<HospitalsHealthcareIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/hospitals" element={<HospitalsHealthcareIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/healthcare" element={<HospitalsHealthcareIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/pharmaceuticals" element={<PharmaceuticalsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/pharma" element={<PharmaceuticalsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/medical-devices" element={<MedicalDevicesIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/diagnostics" element={<DiagnosticsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/wellness-care" element={<WellnessCareIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/wellness" element={<WellnessCareIndustryPage onOpenContact={handleOpenContactModal} />} />

          {/* Energy & Resources Dedicated Industry Pages */}
          <Route path="/industries/oil-gas" element={<OilGasIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/oil-and-gas" element={<OilGasIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/power-utilities" element={<PowerUtilitiesIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/power-and-utilities" element={<PowerUtilitiesIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/renewable-energy" element={<RenewableEnergyIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/mining-metals" element={<MiningMetalsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/mining-and-metals" element={<MiningMetalsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/energy-services" element={<EnergyServicesIndustryPage onOpenContact={handleOpenContactModal} />} />

          {/* Built Environment Dedicated Industry Pages */}
          <Route path="/industries/engineering" element={<EngineeringIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/construction-epc" element={<ConstructionEpcIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/construction" element={<ConstructionEpcIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/infrastructure" element={<InfrastructureIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/real-estate" element={<RealEstateIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/facilities-assets" element={<FacilitiesAssetsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/facilities-management" element={<FacilitiesAssetsIndustryPage onOpenContact={handleOpenContactModal} />} />

          {/* Technology, Logistics & Mobility Dedicated Industry Pages */}
          <Route path="/industries/technology-services" element={<TechnologyServicesIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/professional-staffing" element={<TechnologyServicesIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/software-saas" element={<SoftwareSaasIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/subscription-billing" element={<SoftwareSaasIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/high-tech-electronics" element={<HighTechElectronicsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/high-tech" element={<HighTechElectronicsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/electronics" element={<HighTechElectronicsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/warehouse-ewm" element={<WarehouseEwmIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/warehouse" element={<WarehouseEwmIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/warehousing" element={<WarehouseEwmIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/transportation-logistics" element={<TransportationLogisticsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/transportation" element={<TransportationLogisticsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/logistics" element={<TransportationLogisticsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/aerospace-defense" element={<TransportationLogisticsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/aerospace" element={<TransportationLogisticsIndustryPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/insights" element={<InsightsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Private Admin Platform */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Public Footer */}
      {!isAdminRoute && <Footer />}

      {/* Global Accessible Contact Consultation Modal */}
      {!isAdminRoute && (
        <ContactModal 
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          defaultService={selectedServiceForModal}
        />
      )}

      {/* Interactive 3D AI Chatbot Assistant on Public Pages */}
      {!isAdminRoute && (
        <ChatbotWidget onOpenContact={handleOpenContactModal} />
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SmoothScroll>
          <AppContent />
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;


