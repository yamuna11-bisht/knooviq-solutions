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
import { MigrationModernizationPage } from './pages/MigrationModernizationPage';
import { SystemConversionPage } from './pages/SystemConversionPage';
import { GreenfieldPage } from './pages/GreenfieldPage';
import { BrownfieldPage } from './pages/BrownfieldPage';
import { DataMigrationPage } from './pages/DataMigrationPage';
import { CustomCodeMigrationPage } from './pages/CustomCodeMigrationPage';
import { TransformationPage } from './pages/TransformationPage';
import { AdvisoryManagedServicesPage } from './pages/AdvisoryManagedServicesPage';
import { SapStrategyPage } from './pages/SapStrategyPage';
import { SapAssessmentPage } from './pages/advisory/SapAssessmentPage';
import { SolutionArchitecturePage } from './pages/advisory/SolutionArchitecturePage';
import { SapAmsPage } from './pages/advisory/SapAmsPage';
import { ApplicationSupportPage } from './pages/advisory/ApplicationSupportPage';
import { SapBasisPage } from './pages/advisory/SapBasisPage';
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
import { DataAnalyticsAiPage } from './pages/technology/DataAnalyticsAiPage';
import { SapBusinessAiPage } from './pages/technology/SapBusinessAiPage';
import { GenerativeAiPage } from './pages/technology/GenerativeAiPage';
import { AiAgentsPage } from './pages/technology/AiAgentsPage';
import { SapAnalyticsCloudPage } from './pages/technology/SapAnalyticsCloudPage';
import { SapDataspherePage } from './pages/technology/SapDataspherePage';
import { IntelligentAutomationPage } from './pages/technology/IntelligentAutomationPage';
import { ArtificialIntelligencePage } from './pages/ArtificialIntelligencePage';
import { GenerativeAiPracticePage } from './pages/ai/GenerativeAiPracticePage';
import { AiAgentsPracticePage } from './pages/ai/AiAgentsPracticePage';
import { AiAssistantsPracticePage } from './pages/ai/AiAssistantsPracticePage';
import { MachineLearningPracticePage } from './pages/ai/MachineLearningPracticePage';
import { PredictiveAiPracticePage } from './pages/ai/PredictiveAiPracticePage';
import { EnterpriseAiPracticePage } from './pages/ai/EnterpriseAiPracticePage';
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
import { HighTechIndustryPage } from './pages/industries/HighTechIndustryPage';
import { ElectronicsIndustryPage } from './pages/industries/ElectronicsIndustryPage';
import { AerospaceDefenseIndustryPage } from './pages/industries/AerospaceDefenseIndustryPage';
import { WarehouseEwmIndustryPage } from './pages/industries/WarehouseEwmIndustryPage';
import { TransportationLogisticsIndustryPage } from './pages/industries/TransportationLogisticsIndustryPage';
import { BankingIndustryPage } from './pages/industries/BankingIndustryPage';
import { InsuranceIndustryPage } from './pages/industries/InsuranceIndustryPage';
import { FinancialServicesIndustryPage } from './pages/industries/FinancialServicesIndustryPage';
import { FinTechIndustryPage } from './pages/industries/FinTechIndustryPage';
import { ProfessionalServicesIndustryPage } from './pages/industries/ProfessionalServicesIndustryPage';
import { HospitalityIndustryPage } from './pages/industries/HospitalityIndustryPage';
import { TravelTourismIndustryPage } from './pages/industries/TravelTourismIndustryPage';
import { EntertainmentIndustryPage } from './pages/industries/EntertainmentIndustryPage';
import { EducationIndustryPage } from './pages/industries/EducationIndustryPage';

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

          {/* Dedicated SAP Migration & Modernization Suite (6 Dedicated Standalone Pages) */}
          <Route path="/solutions/sap-migration" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/migration-modernization" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/migration-modernization" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/transformation/migration-modernization" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/transformation/migration" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/transformation/sap-migration" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-migration" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/migration" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/ecc-s4hana" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/ecc-to-s4hana" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ecc-s4hana" element={<MigrationModernizationPage onOpenContact={handleOpenContactModal} />} />

          {/* 2. System Conversion */}
          <Route path="/solutions/system-conversion" element={<SystemConversionPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/system-conversion" element={<SystemConversionPage onOpenContact={handleOpenContactModal} />} />

          {/* 3. Greenfield */}
          <Route path="/solutions/greenfield" element={<GreenfieldPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/greenfield" element={<GreenfieldPage onOpenContact={handleOpenContactModal} />} />

          {/* 4. Brownfield */}
          <Route path="/solutions/brownfield" element={<BrownfieldPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/brownfield" element={<BrownfieldPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/selective-data-transition" element={<BrownfieldPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/selective-data-transition" element={<BrownfieldPage onOpenContact={handleOpenContactModal} />} />

          {/* 5. Data Migration */}
          <Route path="/solutions/data-migration" element={<DataMigrationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/data-migration" element={<DataMigrationPage onOpenContact={handleOpenContactModal} />} />

          {/* 6. Custom Code Migration */}
          <Route path="/solutions/custom-code-migration" element={<CustomCodeMigrationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/customer-code-migration" element={<CustomCodeMigrationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/custom-code-migration" element={<CustomCodeMigrationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/customer-code-migration" element={<CustomCodeMigrationPage onOpenContact={handleOpenContactModal} />} />

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

          {/* Dedicated SAP Data, Analytics & AI Suite (SAP BTP Style) */}
          <Route path="/technology/data-analytics-ai" element={<DataAnalyticsAiPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/transformation/data-analytics-ai" element={<DataAnalyticsAiPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/data-analytics-ai" element={<DataAnalyticsAiPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/data-analytics-ai" element={<DataAnalyticsAiPage onOpenContact={handleOpenContactModal} />} />

          {/* 1. SAP Business AI */}
          <Route path="/technology/sap-business-ai" element={<SapBusinessAiPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-business-ai" element={<SapBusinessAiPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-business-ai" element={<SapBusinessAiPage onOpenContact={handleOpenContactModal} />} />

          {/* 2. Generative AI */}
          <Route path="/technology/generative-ai" element={<GenerativeAiPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/generative-ai" element={<GenerativeAiPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/generative-ai" element={<GenerativeAiPage onOpenContact={handleOpenContactModal} />} />

          {/* 3. AI Agents */}
          <Route path="/technology/ai-agents" element={<AiAgentsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/ai-agents" element={<AiAgentsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ai-agents" element={<AiAgentsPage onOpenContact={handleOpenContactModal} />} />

          {/* 4. SAP Analytics Cloud */}
          <Route path="/technology/sap-analytics-cloud" element={<SapAnalyticsCloudPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-analytics-cloud" element={<SapAnalyticsCloudPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-analytics-cloud" element={<SapAnalyticsCloudPage onOpenContact={handleOpenContactModal} />} />

          {/* 5. SAP Datasphere */}
          <Route path="/technology/sap-datasphere" element={<SapDataspherePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-datasphere" element={<SapDataspherePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-datasphere" element={<SapDataspherePage onOpenContact={handleOpenContactModal} />} />

          {/* 6. Intelligent Automation */}
          <Route path="/technology/intelligent-automation" element={<IntelligentAutomationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/intelligent-automation" element={<IntelligentAutomationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/intelligent-automation" element={<IntelligentAutomationPage onOpenContact={handleOpenContactModal} />} />

          <Route path="/transformation" element={<TransformationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/transformation/:slug" element={<TransformationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/transformation" element={<TransformationPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions" element={<SolutionsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/digital-intelligence" element={<ServicesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/digital-intelligence/artificial-intelligence" element={<Navigate to="/digital-intelligence" replace />} />
          <Route path="/technology/artificial-intelligence" element={<ArtificialIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/artificial-intelligence" element={<ArtificialIntelligencePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/artificial-intelligence" element={<ArtificialIntelligencePage onOpenContact={handleOpenContactModal} />} />

          {/* 6 Dedicated Artificial Intelligence Practice Pages */}
          <Route path="/digital-intelligence/generative-ai" element={<GenerativeAiPracticePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ai/generative-ai" element={<GenerativeAiPracticePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/digital-intelligence/ai-agents" element={<AiAgentsPracticePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ai/ai-agents" element={<AiAgentsPracticePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/digital-intelligence/ai-assistants" element={<AiAssistantsPracticePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/digital-intelligence/assistants" element={<AiAssistantsPracticePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ai/ai-assistants" element={<AiAssistantsPracticePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/digital-intelligence/machine-learning" element={<MachineLearningPracticePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/digital-intelligence/ml" element={<MachineLearningPracticePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ai/machine-learning" element={<MachineLearningPracticePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/digital-intelligence/predictive-ai" element={<PredictiveAiPracticePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/digital-intelligence/predictive" element={<PredictiveAiPracticePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ai/predictive-ai" element={<PredictiveAiPracticePage onOpenContact={handleOpenContactModal} />} />

          <Route path="/digital-intelligence/enterprise-ai" element={<EnterpriseAiPracticePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/ai/enterprise-ai" element={<EnterpriseAiPracticePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/services" element={<ServicesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory-managed-services" element={<AdvisoryManagedServicesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/services/advisory-managed-services" element={<AdvisoryManagedServicesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/advisory-managed-services" element={<AdvisoryManagedServicesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-consulting" element={<AdvisoryManagedServicesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-support" element={<AdvisoryManagedServicesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory" element={<AdvisoryManagedServicesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/managed-services" element={<AdvisoryManagedServicesPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory-managed-services/sap-strategy" element={<SapStrategyPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/services/sap-strategy" element={<SapStrategyPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory/sap-strategy" element={<SapStrategyPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-strategy" element={<SapStrategyPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-strategy" element={<SapStrategyPage onOpenContact={handleOpenContactModal} />} />

          {/* 2. SAP Assessment */}
          <Route path="/services/sap-assessment" element={<SapAssessmentPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory/sap-assessment" element={<SapAssessmentPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory-managed-services/sap-assessment" element={<SapAssessmentPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-assessment" element={<SapAssessmentPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-assessment" element={<SapAssessmentPage onOpenContact={handleOpenContactModal} />} />

          {/* 3. Solution Architecture */}
          <Route path="/services/solution-architecture" element={<SolutionArchitecturePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory/solution-architecture" element={<SolutionArchitecturePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory-managed-services/solution-architecture" element={<SolutionArchitecturePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/solution-architecture" element={<SolutionArchitecturePage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solution-architecture" element={<SolutionArchitecturePage onOpenContact={handleOpenContactModal} />} />

          {/* 4. SAP AMS */}
          <Route path="/services/sap-ams" element={<SapAmsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory/sap-ams" element={<SapAmsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory-managed-services/sap-ams" element={<SapAmsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-ams" element={<SapAmsPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-ams" element={<SapAmsPage onOpenContact={handleOpenContactModal} />} />

          {/* 5. Application Support */}
          <Route path="/services/application-support" element={<ApplicationSupportPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory/application-support" element={<ApplicationSupportPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory-managed-services/application-support" element={<ApplicationSupportPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/application-support" element={<ApplicationSupportPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/application-support" element={<ApplicationSupportPage onOpenContact={handleOpenContactModal} />} />

          {/* 6. SAP Basis */}
          <Route path="/services/sap-basis" element={<SapBasisPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory/sap-basis" element={<SapBasisPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/advisory-managed-services/sap-basis" element={<SapBasisPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/solutions/sap-basis" element={<SapBasisPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/sap-basis" element={<SapBasisPage onOpenContact={handleOpenContactModal} />} />
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
          <Route path="/industries/high-tech" element={<HighTechIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/high-tech-electronics" element={<HighTechIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/electronics" element={<ElectronicsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/electronics-manufacturing" element={<ElectronicsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/warehouse-ewm" element={<WarehouseEwmIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/warehouse" element={<WarehouseEwmIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/warehousing" element={<WarehouseEwmIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/warehouse-warehousing" element={<WarehouseEwmIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/transportation-logistics" element={<TransportationLogisticsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/transportation" element={<TransportationLogisticsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/logistics" element={<TransportationLogisticsIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/aerospace-defense" element={<AerospaceDefenseIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/aerospace" element={<AerospaceDefenseIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/defense" element={<AerospaceDefenseIndustryPage onOpenContact={handleOpenContactModal} />} />

          {/* Financial & Business Services Dedicated Industry Pages */}
          <Route path="/industries/banking" element={<BankingIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/insurance" element={<InsuranceIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/financial-services" element={<FinancialServicesIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/financial" element={<FinancialServicesIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/fintech" element={<FinTechIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/professional-services" element={<ProfessionalServicesIndustryPage onOpenContact={handleOpenContactModal} />} />

          {/* Experience, Media & Education Dedicated Industry Pages */}
          <Route path="/industries/hospitality" element={<HospitalityIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/travel-tourism" element={<TravelTourismIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/travel" element={<TravelTourismIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/entertainment" element={<EntertainmentIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/media-entertainment" element={<EntertainmentIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/education" element={<EducationIndustryPage onOpenContact={handleOpenContactModal} />} />
          <Route path="/industries/higher-education" element={<EducationIndustryPage onOpenContact={handleOpenContactModal} />} />

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


