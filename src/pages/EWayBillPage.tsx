import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Car,
  FileText, 
  MapPin, 
  Navigation, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Layers, 
  Clock, 
  Sparkles, 
  Package, 
  AlertTriangle, 
  Activity, 
  Check, 
  Compass, 
  ChevronRight, 
  ChevronLeft,
  RefreshCw,
  Eye,
  Radio,
  Share2,
  Route,
  Building2,
  Map,
  TrendingUp,
  Cpu,
  Database,
  QrCode,
  Globe2,
  Ship,
  Plane
} from 'lucide-react';

interface EWayBillPageProps {
  onOpenContact: (topic?: string) => void;
}

// ==========================================
// SECTION 2: 5-Stage Visual Journey Data
// Invoice Created → Shipment Prepared → E-Way Bill Generated → Goods in Transit → Delivery Completed
// ==========================================
const journeyStages = [
  {
    id: 'step-1',
    number: '01',
    icon: FileText,
    badge: 'SAP Billing Document',
    title: 'Invoice Created',
    subtitle: 'Commercial Data Locked',
    description: 'The sales delivery triggers billing in SAP SD. Commercial value, consignor/consignee 15-digit GSTINs, and line-item HSN codes are locked into the digital transaction record.',
    image: '/images/journey/stage1_invoice_created.jpg',
    telemetry: {
      tcode: 'SAP VF01 / VL02N',
      status: 'PGI Confirmed',
      hsn: '84713010 (6 Units)',
      taxValue: '₹ 24,50,000'
    },
    roadProgress: 8
  },
  {
    id: 'step-2',
    number: '02',
    icon: Package,
    badge: 'Warehouse Dispatch',
    title: 'Shipment Prepared',
    subtitle: 'Physical Packing & Weighment',
    description: 'Warehouse packaging slip is verified. Gross weight, carton count, and consignment packaging units are validated against the SAP outbound delivery order.',
    image: '/images/journey/stage2_shipment_prepared.jpg',
    telemetry: {
      tcode: 'SAP EWM / MM Dock',
      status: 'Pallets Staged',
      weight: '4,280 kg Gross',
      bay: 'Loading Bay #04'
    },
    roadProgress: 32
  },
  {
    id: 'step-3',
    number: '03',
    icon: QrCode,
    badge: 'NIC Portal Handshake',
    title: 'E-Way Bill Generated',
    subtitle: '12-Digit EWB & QR Code Stamped',
    description: 'Single-click or automated background trigger transmits invoice and transporter payload to the NIC portal. A government-signed 12-digit E-Way Bill with 2D barcode is retrieved in < 200ms.',
    image: '/images/journey/stage3_ewaybill_generated.jpg',
    telemetry: {
      tcode: 'API Gateway v1.03',
      status: 'EWB #9182-4410-2819',
      validity: 'Valid for 1,400 km',
      qrCode: 'NIC Digitally Signed'
    },
    roadProgress: 55
  },
  {
    id: 'step-4',
    number: '04',
    icon: Truck,
    badge: 'Highway In-Transit',
    title: 'Goods in Transit',
    subtitle: 'Live Validity & Route Tracking',
    description: 'The commercial truck departs the distribution facility. Validity countdown activates, RFID FASTag toll checkpoints log automated pass-throughs, and Part-B vehicle records remain live.',
    image: '/images/journey/stage4_goods_in_transit.jpg',
    telemetry: {
      tcode: 'Part-B Active (MH-04-GP-8192)',
      status: 'On NH-48 (Highway)',
      eta: 'In Transit • 28h Remaining',
      toll: 'Khed-Shivapur Toll Cleared'
    },
    roadProgress: 78
  },
  {
    id: 'step-5',
    number: '05',
    icon: CheckCircle2,
    badge: 'Consignee Dock Gate-In',
    title: 'Delivery Completed',
    subtitle: 'Proof of Delivery & Archival',
    description: 'Goods arrive at consignee destination. Security scans verify the digital EWB QR code, proof of delivery (POD) is confirmed, and the consignment journey is closed in SAP.',
    image: '/images/journey/stage5_delivery_completed.jpg',
    telemetry: {
      tcode: 'SAP MIGO / Inbound GRN',
      status: 'Delivery Completed',
      closedAt: 'Gurugram Hub Gateway',
      audit: 'Archived for 8-Year Audit'
    },
    roadProgress: 96
  }
];

export const EWayBillPage: React.FC<EWayBillPageProps> = ({ onOpenContact }) => {
  // Section 2: Journey Stage State (0 to 4) - Starts from Stage 0: "Invoice Created"
  const [activeJourneyStep, setActiveJourneyStep] = useState<number>(0);
  const [truckVisualProgress, setTruckVisualProgress] = useState<number>(journeyStages[0].roadProgress);
  const [truckAnimationEnabled, setTruckAnimationEnabled] = useState<boolean>(true);
  const [truckOpacity, setTruckOpacity] = useState<number>(1);

  // Section 3: Command Center Capability State
  const [activeCapabilityId, setActiveCapabilityId] = useState<string>('automated');

  // Section 4: Architecture Layer State
  const [activeArchLayer, setActiveArchLayer] = useState<'digital' | 'process' | 'physical'>('process');

  // Section 5: Map Route State
  const [selectedRouteId, setSelectedRouteId] = useState<string>('us-canada');

  // Section 2: 1-second auto-rotation starting from "Invoice Created", paused for 5 seconds on user click
  const journeyIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const journeyPauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Forward advancement: at stage 4 (Delivery Completed, 96%), truck drives forward past FINISH to exit (106%),
  // then enters seamlessly from the left (-6%) into Stage 01 (Invoice Created, 8%) with zero reverse backwards motion.
  const advanceJourneyStep = React.useCallback(() => {
    setActiveJourneyStep((currentStep) => {
      if (currentStep === 4) {
        // Step 4 -> Step 0: Drive forward out of FINISH gate
        setTruckAnimationEnabled(true);
        setTruckVisualProgress(106);
        setTruckOpacity(0.2);

        setTimeout(() => {
          // Teleport behind START line on left while hidden
          setTruckAnimationEnabled(false);
          setTruckVisualProgress(-6);
          setTruckOpacity(0);

          setTimeout(() => {
            // Re-enable animation and drive forward into Stage 01 (8%)
            setTruckAnimationEnabled(true);
            setTruckOpacity(1);
            setTruckVisualProgress(journeyStages[0].roadProgress);
            setActiveJourneyStep(0);
          }, 50);
        }, 320);

        return currentStep;
      } else {
        const nextStep = currentStep + 1;
        setTruckAnimationEnabled(true);
        setTruckOpacity(1);
        setTruckVisualProgress(journeyStages[nextStep].roadProgress);
        return nextStep;
      }
    });
  }, []);

  // Auto-cycle through the 5 journey stages every 1 second
  const startJourneyAutoCycle = React.useCallback(() => {
    if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
    journeyIntervalRef.current = setInterval(() => {
      advanceJourneyStep();
    }, 1000);
  }, [advanceJourneyStep]);

  // On user click (milestone or navigation), pause rotation for 5 seconds on the clicked stage, then resume 1s auto-cycle
  const handleJourneyStageClick = (targetIndex: number) => {
    if (journeyIntervalRef.current) {
      clearInterval(journeyIntervalRef.current);
      journeyIntervalRef.current = null;
    }
    if (journeyPauseTimerRef.current) {
      clearTimeout(journeyPauseTimerRef.current);
    }

    if (targetIndex === activeJourneyStep) {
      // Already at this stage
    } else if (targetIndex < activeJourneyStep) {
      // User clicked an earlier stage: fade out and appear forward without backwards sliding
      setTruckOpacity(0);
      setTruckAnimationEnabled(false);
      setTimeout(() => {
        setActiveJourneyStep(targetIndex);
        setTruckVisualProgress(journeyStages[targetIndex].roadProgress);
        setTimeout(() => {
          setTruckAnimationEnabled(true);
          setTruckOpacity(1);
        }, 50);
      }, 150);
    } else {
      // Moving forward to higher stage: smooth forward drive
      setTruckAnimationEnabled(true);
      setTruckOpacity(1);
      setActiveJourneyStep(targetIndex);
      setTruckVisualProgress(journeyStages[targetIndex].roadProgress);
    }

    journeyPauseTimerRef.current = setTimeout(() => {
      startJourneyAutoCycle();
    }, 5000);
  };

  useEffect(() => {
    startJourneyAutoCycle();
    return () => {
      if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
      if (journeyPauseTimerRef.current) clearTimeout(journeyPauseTimerRef.current);
    };
  }, [startJourneyAutoCycle]);

  // ==========================================
  // SECTION 3: 6 Connected Command Center Capabilities
  // Auto-cycles through the 6 capabilities every 2.5s, pauses for 5s on click/hover
  // ==========================================
  const capabilityIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const capabilityPauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const capabilityIds = React.useMemo(() => [
    'automated',
    'invoice',
    'transport',
    'validation',
    'visibility',
    'exception'
  ], []);

  const startCapabilityAutoCycle = React.useCallback(() => {
    if (capabilityIntervalRef.current) clearInterval(capabilityIntervalRef.current);
    capabilityIntervalRef.current = setInterval(() => {
      setActiveCapabilityId((current) => {
        const idx = capabilityIds.indexOf(current);
        return capabilityIds[(idx + 1) % capabilityIds.length];
      });
    }, 1000);
  }, [capabilityIds]);

  const handleCapabilityClick = (id: string) => {
    setActiveCapabilityId(id);
    if (capabilityIntervalRef.current) {
      clearInterval(capabilityIntervalRef.current);
      capabilityIntervalRef.current = null;
    }
    if (capabilityPauseTimerRef.current) {
      clearTimeout(capabilityPauseTimerRef.current);
    }
    capabilityPauseTimerRef.current = setTimeout(() => {
      startCapabilityAutoCycle();
    }, 5000);
  };

  useEffect(() => {
    startCapabilityAutoCycle();
    return () => {
      if (capabilityIntervalRef.current) clearInterval(capabilityIntervalRef.current);
      if (capabilityPauseTimerRef.current) clearTimeout(capabilityPauseTimerRef.current);
    };
  }, [startCapabilityAutoCycle]);

  const commandCapabilities = [
    {
      id: 'automated',
      title: 'Automated Processing',
      badge: 'ZERO MANUAL EFFORT',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-400/30',
      tag: 'Event-Driven Dispatch Automation',
      short: 'Reduce repetitive manual activities.',
      detail: 'Eliminate duplicate data entry by auto-triggering E-Way Bill generation directly upon SAP delivery creation (VL02N) or invoice save (VF01). Dispatches flow out of warehouse bays without administrative roadblocks.',
      icon: Zap,
      accent: 'from-blue-600 to-cyan-500',
      dataOutput: 'Automated background queue • Sub-200ms processing • Zero manual portal logins',
      metrics: [
        { label: 'Trigger Event', val: 'SAP VL02N / PGI' },
        { label: 'Processing Speed', val: '< 185 ms' },
        { label: 'Manual Touchpoints', val: '0 Manual Steps' }
      ],
      pipeline: ['SAP Billing Save', 'Schema Validate', 'NIC TLS Handshake', 'EWB Stamped']
    },
    {
      id: 'invoice',
      title: 'Invoice Connectivity',
      badge: 'SEAMLESS SAP MAPPING',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-400/30',
      tag: 'Native SAP SD Table Synchronization',
      short: 'Bring relevant invoice information into the E-Way Bill process.',
      detail: 'Native integration extracts taxable amounts, HSN/SAC codes, CGST/SGST/IGST rates, consignor/consignee GSTINs, and invoice line items directly from standard SAP tables (VBRK/VBRP) without staging intermediaries.',
      icon: FileText,
      accent: 'from-cyan-600 to-blue-500',
      dataOutput: 'Direct VBRK/VBRP extraction • 100% Tax ledger match • Multi-item consignment support',
      metrics: [
        { label: 'SAP Tables', val: 'VBRK / VBRP Native' },
        { label: 'Tax Accuracy', val: '100% Exact Match' },
        { label: 'Consignment Mode', val: 'Multi-Item STO & Sales' }
      ],
      pipeline: ['Commercial Values', 'HSN 84713010', '15-Digit GSTIN', 'Zero Staging DB']
    },
    {
      id: 'transport',
      title: 'Transport Information',
      badge: 'PART-B & MULTI-MODAL',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-400/30',
      tag: 'Dynamic Fleet & Part-B Orchestration',
      short: 'Manage essential movement and transportation details.',
      detail: 'Effortlessly maintain Transporter IDs, vehicle registration numbers, railway RR numbers, and airway bill details. Easily update Part-B for transshipment or breakdown scenarios right inside SAP.',
      icon: Truck,
      accent: 'from-indigo-600 to-cyan-400',
      dataOutput: 'Multi-modal road/rail/air support • Transporter GSTIN mapping • Instant Part-B vehicle switch',
      metrics: [
        { label: 'Active Vehicle', val: 'MH-04-GP-8192' },
        { label: 'Carrier Mode', val: 'Road / Rail / Air' },
        { label: 'FASTag RFID', val: 'Synced & Active' }
      ],
      pipeline: ['Transporter Bound', 'Part-B Added', 'Multi-Modal Hub', 'Breakdown Swap']
    },
    {
      id: 'validation',
      title: 'Validation Engine',
      badge: 'PRE-FLIGHT ACCURACY',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-400/30',
      tag: 'Pre-Flight Statutory Risk Prevention',
      short: 'Improve accuracy before goods movement.',
      detail: 'Government PIN-to-PIN distance validation, vehicle number format verification, and consignee GSTIN active-status auditing prevent transit penalties and schema rejections before the truck starts moving.',
      icon: ShieldCheck,
      accent: 'from-emerald-600 to-teal-500',
      dataOutput: 'Government PIN-to-PIN API check • 100% Validated vehicle patterns • Zero transit seizures',
      metrics: [
        { label: 'PIN-to-PIN API', val: 'Exact Km Validated' },
        { label: 'Vehicle Number', val: 'Format Verified' },
        { label: 'Consignee Status', val: 'Active in GSTN' }
      ],
      pipeline: ['PIN Distance Audit', 'Tax Rate Check', 'Pattern Validation', 'Zero Seizure Risk']
    },
    {
      id: 'visibility',
      title: 'Status Visibility',
      badge: 'REAL-TIME TRACKING',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-400/30',
      tag: 'Real-Time Highway Validity Tracking',
      short: 'Know the current processing and movement status.',
      detail: 'Live status indicators show whether an E-Way Bill is Active, Cancelled, Expired, or In-Transit. Color-coded countdown timers alert plant dispatchers before legal transit validity lapses.',
      icon: Eye,
      accent: 'from-amber-500 to-orange-500',
      dataOutput: 'Live countdown timers • Active/Expired status pills • Real-time plant dispatch ledger',
      metrics: [
        { label: 'Validity Window', val: '72 Hours Left' },
        { label: 'Last Toll Log', val: 'NH-48 Khed Toll' },
        { label: 'Current State', val: 'Active In-Transit' }
      ],
      pipeline: ['RFID Toll Check', 'Milestone Telemetry', 'Expiry Warning', 'Audit Trail Log']
    },
    {
      id: 'exception',
      title: 'Exception Management',
      badge: 'PROACTIVE RESOLUTION',
      badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-400/30',
      tag: 'Automated Contingency & Extension Hub',
      short: 'Highlight issues that require attention.',
      detail: 'Intelligent alerting for vehicle breakdowns, route deviations, transshipment delays, or validity extension requirements. Update vehicle details or request validity extension in one click within statutory timeframes.',
      icon: AlertTriangle,
      accent: 'from-rose-500 to-pink-500',
      dataOutput: 'One-click validity extensions • Vehicle breakdown workflow • Instant dispatch resolution',
      metrics: [
        { label: 'Validity Extension', val: '1-Click Rule Engine' },
        { label: 'Transshipment', val: 'Instant Part-B Swap' },
        { label: 'Incident Risk', val: 'Proactive Alerting' }
      ],
      pipeline: ['Breakdown Alert', 'Route Protocol', 'Extension Request', 'SAP Sync Update']
    }
  ];

  const currentCapability = commandCapabilities.find(c => c.id === activeCapabilityId) || commandCapabilities[0];

  // ==========================================
  // SECTION 4: 3-Tier Technical Architecture Data
  // ==========================================
  const architectureTiers = [
    {
      id: 'digital' as const,
      tierNumber: 'TIER 01',
      title: 'Digital Business Data',
      subtitle: 'SAP ECC 6.0 / SAP S/4HANA (Cloud & On-Premise)',
      description: 'Your enterprise commercial core manages sales orders, deliveries, inventory postings, and billing documents. All financial and tax determinants originate from standard enterprise records.',
      bullets: [
        'Outbound Deliveries (VL01N / VL02N)',
        'Billing Documents (VF01 / VF04)',
        'Stock Transport Orders (STO - ME21N)',
        'Customer Master & Business Partner (BP)'
      ],
      icon: Database,
      accent: 'border-blue-500/40 text-blue-600 dark:text-cyan-400'
    },
    {
      id: 'process' as const,
      tierNumber: 'TIER 02',
      title: 'E-Way Bill Process',
      subtitle: 'The Connected Data & Validation Engine',
      description: 'The intelligent orchestration layer bridges digital ERP records with government systems. It validates consignments, maps transport parameters, and executes the government NIC handshake.',
      bullets: [
        'Invoice Data Extraction (Amounts, Taxes, HSN)',
        'Goods Information (Gross Weight, Volume, Packages)',
        'Transport Details (Transporter GSTIN, Vehicle Reg)',
        'Automated Validation (PIN-to-PIN Distance API)'
      ],
      icon: Cpu,
      accent: 'border-cyan-500/60 text-cyan-600 dark:text-cyan-300'
    },
    {
      id: 'physical' as const,
      tierNumber: 'TIER 03',
      title: 'Real-World Movement',
      subtitle: 'Physical Logistics & Destination Delivery',
      description: 'Goods travel physically across highways and multi-modal corridors. Trucks pass through RFID FASTag toll checkpoints, security verify barcodes, and destinations receive consignments safely.',
      bullets: [
        'Warehouse Dock Dispatch & Gate-Pass Print',
        'Highway Carrier Transit & RFID Toll Scans',
        'Transshipment Hub Part-B Vehicle Updates',
        'Consignee Destination Receipt & Proof of Delivery'
      ],
      icon: Truck,
      accent: 'border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
    }
  ];

  // ==========================================
  // SECTION 5: Global Multi-Country Logistics Corridors & Telemetry
  // ==========================================
  const mapRoutes = [
    {
      id: 'us-canada',
      region: 'North America',
      name: 'Chicago (US) ➔ Toronto (CA)',
      flags: '🇺🇸 ➔ 🇨🇦',
      countries: 'United States & Canada',
      corridor: 'Great Lakes USMCA Corridor • I-94 / Hwy 401',
      distance: '835 km',
      mode: 'Cross-Border Freight Truck',
      trucks: 148,
      avgEta: '14 Hours',
      validity: 'ACE / USMCA Pre-Cleared',
      compliance: 'US CBP & CBSA e-Manifest',
      sampleEwb: 'ACE-MANIFEST-2026-9182',
      vehicle: 'Freightliner Cascadia (IL-924-US)',
      origin: { name: 'Chicago, USA', x: 245, y: 180 },
      destination: { name: 'Toronto, Canada', x: 285, y: 165 },
      cargo: 'Automotive Assemblies & EV Tech • $ 920,000',
      path: 'M 245 180 Q 265 170 285 165',
      pingPos: { cx: 265, cy: 172 }
    },
    {
      id: 'europe-uk',
      region: 'Europe & UK',
      name: 'Frankfurt (DE) ➔ London (UK)',
      flags: '🇩🇪 ➔ 🇬🇧',
      countries: 'Germany, Netherlands & UK',
      corridor: 'Trans-European North Sea Spine • A3 / E30 / Channel',
      distance: '760 km',
      mode: 'Multimodal Road & Short-Sea',
      trucks: 192,
      avgEta: '15 Hours',
      validity: 'EU Peppol & e-CMR Valid',
      compliance: 'EU e-Invoicing & Green Lane Telemetry',
      sampleEwb: 'EU-CMR-2026-44019',
      vehicle: 'Volvo FH Electric (F-DE-8820)',
      origin: { name: 'Frankfurt, Germany', x: 505, y: 160 },
      destination: { name: 'London, UK', x: 465, y: 148 },
      cargo: 'Pharma & High-Tech Medical Gear • € 1,450,000',
      path: 'M 505 160 Q 485 152 465 148',
      pingPos: { cx: 485, cy: 153 }
    },
    {
      id: 'uae-saudi',
      region: 'Middle East (GCC)',
      name: 'Dubai (AE) ➔ Riyadh (SA)',
      flags: '🇦🇪 ➔ 🇸🇦',
      countries: 'UAE & Saudi Arabia',
      corridor: 'GCC Express Trade Corridor • Route 10 / HWY 522',
      distance: '980 km',
      mode: 'Bonded Cross-Border Highway',
      trucks: 114,
      avgEta: '18 Hours',
      validity: 'ZATCA Phase 2 Cleared',
      compliance: 'ZATCA Fatoora & GCC Transit Bond',
      sampleEwb: 'ZATCA-EWB-2026-8819',
      vehicle: 'Mercedes Actros (DXB-K-9012)',
      origin: { name: 'Dubai, UAE', x: 645, y: 240 },
      destination: { name: 'Riyadh, Saudi Arabia', x: 605, y: 245 },
      cargo: 'Clean Energy Hardware & Solar Tech • SAR 3,850,000',
      path: 'M 645 240 Q 625 242 605 245',
      pingPos: { cx: 625, cy: 242 }
    },
    {
      id: 'apac-asean',
      region: 'Asia-Pacific',
      name: 'Singapore ➔ Bangkok (TH)',
      flags: '🇸🇬 ➔ 🇹🇭',
      countries: 'Singapore, Malaysia & Thailand',
      corridor: 'ASEAN High-Tech Supply Chain • AH2 Expressway',
      distance: '1,840 km',
      mode: 'High-Speed Express Transit',
      trucks: 126,
      avgEta: '32 Hours',
      validity: 'ASEAN Single Window Valid',
      compliance: 'Cross-Border e-Customs & RFID Smart Seal',
      sampleEwb: 'ASEAN-TR-2026-3029',
      vehicle: 'Scania R-Series (SG-8190-X)',
      origin: { name: 'Jurong, Singapore', x: 755, y: 325 },
      destination: { name: 'Bangkok, Thailand', x: 735, y: 270 },
      cargo: 'Semiconductor Wafers & Optoelectronics • $ 3,100,000',
      path: 'M 755 325 Q 745 295 735 270',
      pingPos: { cx: 745, cy: 295 }
    },
    {
      id: 'india-national',
      region: 'India & South Asia',
      name: 'Mumbai ➔ Delhi NCR (IN)',
      flags: '🇮🇳',
      countries: 'India Inter-State Network',
      corridor: 'Delhi-Mumbai Expressway & DFC Corridor',
      distance: '1,385 km',
      mode: 'Direct Highway & DFC Rail',
      trucks: 218,
      avgEta: '24 Hours',
      validity: 'GST E-Way Bill Active (NIC)',
      compliance: 'National GST Portal (Form GST EWB-01)',
      sampleEwb: 'EWB-2026-981042',
      vehicle: 'Tata Prima 5530 (MH-04-GP-8192)',
      origin: { name: 'Bhiwandi, Mumbai', x: 670, y: 265 },
      destination: { name: 'Gurugram, Delhi NCR', x: 680, y: 220 },
      cargo: 'Automotive Assemblies & Precision Tools • ₹ 48,50,000',
      path: 'M 670 265 Q 672 240 680 220',
      pingPos: { cx: 673, cy: 242 }
    },
    {
      id: 'global-maritime',
      region: 'Trans-Oceanic',
      name: 'JNPT (IN) ➔ Rotterdam (NL)',
      flags: '🇮🇳 ➔ 🇦🇪 ➔ 🇳🇱',
      countries: 'India, UAE & Netherlands',
      corridor: 'International Maritime & Air Cargo Gateway',
      distance: '6,700 nm',
      mode: 'Container Cargo & Air Freight',
      trucks: 64,
      avgEta: '10 Days (Sea) / 10h (Air)',
      validity: 'IMO e-BL & ICEGATE Cleared',
      compliance: 'Electronic Bill of Lading & Direct Customs Sync',
      sampleEwb: 'ICEGATE-BL-2026-1180',
      vehicle: 'Maersk Voyager (IMO 984021) / B777-F',
      origin: { name: 'JNPT Port, Mumbai', x: 670, y: 265 },
      destination: { name: 'Rotterdam Port, NL', x: 485, y: 155 },
      cargo: 'High-Value Industrial Exports & Pharma • $ 5,800,000',
      path: 'M 670 265 Q 630 250 560 215 Q 520 180 485 155',
      pingPos: { cx: 560, cy: 215 }
    }
  ];

  const currentRoute = mapRoutes.find(r => r.id === selectedRouteId) || mapRoutes[0];

  // ==========================================
  // SECTION 6: 6 Circular Benefits Data
  // ==========================================
  const circularBenefits = [
    {
      title: 'Less Manual Effort',
      stat: '90% Less Typing',
      desc: 'Auto-populates Part-A and Part-B directly from SAP outbound delivery documents without manual re-entry.',
      icon: Zap,
      color: 'text-blue-500 dark:text-cyan-400'
    },
    {
      title: 'Faster Processing',
      stat: '< 200ms Latency',
      desc: 'Direct government API interface generates verified 12-digit E-Way Bills in sub-seconds during dispatch.',
      icon: Clock,
      color: 'text-cyan-500 dark:text-cyan-300'
    },
    {
      title: 'Better Data Accuracy',
      stat: '100% Tax Match',
      desc: 'Eliminates PIN code mismatches, distance calculation errors, and incorrect HSN code lengths.',
      icon: ShieldCheck,
      color: 'text-emerald-500 dark:text-emerald-400'
    },
    {
      title: 'Improved Shipment Visibility',
      stat: '24/7 Control',
      desc: 'Real-time countdown clocks and automated alerts notify teams before E-Way Bill validity expires on road.',
      icon: Eye,
      color: 'text-amber-500 dark:text-amber-400'
    },
    {
      title: 'Easier Exception Handling',
      stat: '1-Click Updates',
      desc: 'Update vehicle registration for breakdowns or extend transit validity right from your SAP screen.',
      icon: RefreshCw,
      color: 'text-purple-500 dark:text-purple-400'
    },
    {
      title: 'Stronger Process Control',
      stat: 'Audit Ready',
      desc: 'Complete tamper-proof digital audit trail linking SAP billing, transporter GSTIN, and gate-pass records.',
      icon: CheckCircle2,
      color: 'text-indigo-500 dark:text-blue-400'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden font-sans">

      {/* =========================================================================
          SECTION 1 — HERO: “Every Shipment Has a Story”
          Headline: “Move Goods. Manage Compliance. Stay in Control.”
          Supporting Text + CTA + Single Realistic Logistics Photography with Subtle Digital Overlay
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 min-h-[600px] lg:min-h-[640px] flex items-center overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-[#F0F7FF] dark:from-[#030712] dark:via-[#071324] dark:to-[#0A1A30] border-b border-slate-200/80 dark:border-white/10">
        
        {/* Soft Ambient Colorful Radiant Glow */}
        <div className="absolute top-20 left-1/4 w-[550px] h-[350px] bg-cyan-500/10 dark:bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-36 right-1/4 w-[500px] h-[350px] bg-blue-600/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Hero Narrative & CTAs (6 Cols) */}
            <div className="lg:col-span-6 text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm mb-6"
              >
                <Truck className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
                <span>SAP-Integrated Goods Movement & E-Way Bill</span>
              </motion.div>

              {/* Exact Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6"
              >
                Move Goods.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Manage Compliance.
                </span>{' '}
                Stay in Control.
              </motion.h1>

              {/* Exact Supporting Text */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed font-sans mb-8 max-w-xl"
              >
                Transform the way your business manages E-Way Bills with a connected solution that brings invoice data, transportation details and shipment movement together.
              </motion.p>

              {/* Action CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
              >
                <a
                  href="#journey"
                  className="btn-primary-gradient shimmer-sweep px-8 py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-cyan-500/25 transition-all text-center"
                >
                  <span>Explore the Solution</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  onClick={() => onOpenContact('SAP E-Way Bill Solutions')}
                  className="px-6 py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-display text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer"
                >
                  Talk to an Expert
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>NIC Portal API Authorized</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Sub-200ms Generation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Pan-India FASTag & RFID</span>
                </div>
              </div>

            </div>

            {/* Right Column: Premium High-Definition Logistics Cargo Video with Digital Overlay (6 Cols) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-cyan-500/30 bg-slate-900 group"
              >
                {/* Commercial Cargo Logistics Video Stream */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-[390px] sm:h-[450px] lg:h-[490px] object-cover rounded-3xl group-hover:scale-104 transition-transform duration-700"
                >
                  <source src="/videos/ewaybill-hero.mp4" type="video/mp4" />
                  <source src="https://videos.pexels.com/video-files/32536402/13875215_1920_1080_24fps.mp4" type="video/mp4" />
                </video>

                {/* Transparent Subtle Darkening Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-slate-900/10 pointer-events-none" />

                {/* SUBTLE DIGITAL OVERLAY (Transparent Information Layer: Invoice → E-Way Bill → Shipment) */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-950/70 backdrop-blur-md border border-cyan-500/30 text-white flex items-center gap-2 text-[11px] font-mono shadow-lg">
                    <span className="text-slate-300 font-bold">Invoice</span>
                    <ArrowRight className="h-3 w-3 text-cyan-400" />
                    <span className="text-cyan-300 font-black">E-Way Bill</span>
                    <ArrowRight className="h-3 w-3 text-cyan-400" />
                    <span className="text-emerald-400 font-bold">Shipment</span>
                  </div>

                  <div className="px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Active Highway Dispatch</span>
                  </div>
                </div>

                {/* Animated Route Line Overlay (Connecting highway to destination) */}
                <div className="absolute bottom-28 left-6 right-6 z-10 pointer-events-none hidden sm:block">
                  <div className="relative h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 animate-pulse" />
                    <div className="absolute top-0 bottom-0 w-8 bg-white rounded-full blur-[2px] animate-[translateX_2s_infinite]" />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-slate-300 pt-1">
                    <span>Bhiwandi Hub (MH)</span>
                    <span className="text-cyan-300 font-bold">1,385 km Highway Corridor</span>
                    <span>Gurugram Gateway (HR)</span>
                  </div>
                </div>

                {/* ONE FLOATING DIGITAL DOCUMENT CARD (Glassmorphic Document Card) */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 sm:p-4 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/15 text-white text-left shadow-2xl">
                  <div className="flex items-start justify-between gap-3">
                    
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                          EWB-9182-4410-2819
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Valid • 4 Days Left
                        </span>
                      </div>
                      
                      <div className="text-xs font-display font-bold text-white truncate">
                        Bhiwandi (MH) ➔ Gurugram (HR) • 1,385 km
                      </div>
                      
                      <div className="flex items-center gap-3 text-[10px] font-mono text-slate-300 pt-0.5">
                        <span className="flex items-center gap-1 text-slate-300">
                          <Truck className="h-3 w-3 text-cyan-400" />
                          <span>MH-04-GP-8192 (Part-B Active)</span>
                        </span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-300">SAP VL02N Linked</span>
                      </div>
                    </div>

                    {/* QR Code Verification Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white p-1 shrink-0 flex flex-col items-center justify-center shadow-md">
                      <QrCode className="w-full h-full text-slate-950" />
                    </div>

                  </div>
                </div>

              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — “FROM INVOICE TO ROAD”
          Visual Storytelling Section — Digital Journey Map:
          📄 Invoice Created → 📦 Shipment Prepared → 📑 E-Way Bill Generated → 🚚 Goods in Transit → 🏁 Delivery Completed
          Scroll & interactive progression with truck moving along the route
          ========================================================================= */}
      <section id="journey" className="py-16 sm:py-20 relative bg-white dark:bg-[#070E1C] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm mb-3">
              <Route className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Digital Journey Map</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              From Invoice{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                to Road
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Experience the end-to-end voyage of enterprise goods — from the initial billing document to physical highway transit and final consignee gate delivery.
            </p>
          </div>

          {/* HIGHWAY ROAD TRACK WITH REALISTIC ASPHALT & ANIMATED MOVING CAR */}
          <div className="relative mb-10 px-2 sm:px-6">
            
            {/* The Road Surface */}
            <div className="relative h-24 sm:h-28 rounded-2xl bg-[#14161b] border-2 border-slate-700/80 dark:border-slate-600/60 overflow-hidden shadow-[inset_0_4px_16px_rgba(0,0,0,0.8),0_10px_25px_rgba(0,0,0,0.4)]">
              
              {/* Top Concrete Road Shoulder with Solid White Edge Line */}
              <div className="absolute top-0 left-0 right-0 h-3.5 bg-gradient-to-b from-stone-800 to-stone-900 border-b-2 border-white/80 flex items-center overflow-hidden">
                <div className="w-full h-[2px] bg-gradient-to-r from-amber-400/40 via-white/70 to-amber-400/40" />
              </div>

              {/* Asphalt Granular Texture Background */}
              <div 
                className="absolute inset-x-0 top-3.5 bottom-3.5 bg-[#1a1d24]" 
                style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 1px, transparent 1px), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '8px 8px, 12px 12px'
                }}
              />

              {/* Active Glowing Traveled Route (Illuminated Highway Corridor) */}
              <div 
                className={`absolute left-0 top-3.5 bottom-3.5 bg-gradient-to-r from-blue-600/35 via-cyan-500/30 to-cyan-400/20 border-r-2 border-cyan-400/90 pointer-events-none ${
                  truckAnimationEnabled ? 'transition-all duration-700 ease-out' : ''
                }`}
                style={{ 
                  width: `${Math.max(0, Math.min(100, truckVisualProgress))}%`,
                  transitionProperty: truckAnimationEnabled ? 'width' : 'none'
                }}
              >
                {/* Traveled tyre tracks */}
                <div className="absolute top-2 left-0 right-0 h-[1px] bg-cyan-400/25" />
                <div className="absolute bottom-2 left-0 right-0 h-[1px] bg-cyan-400/25" />
              </div>

              {/* Highway Center Dashed Divider (High-visibility amber highway line) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center pointer-events-none z-10">
                <div 
                  className="w-full h-1.5 sm:h-2"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, #f59e0b 0, #f59e0b 24px, transparent 24px, transparent 44px)'
                  }}
                />
              </div>

              {/* Highway Directional Road Markings (>>>) */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-around pointer-events-none opacity-25 text-slate-300 font-mono text-[11px] tracking-widest z-10">
                <span>&gt;&gt;&gt;</span>
                <span>&gt;&gt;&gt;</span>
                <span>&gt;&gt;&gt;</span>
                <span>&gt;&gt;&gt;</span>
                <span>&gt;&gt;&gt;</span>
                <span>&gt;&gt;&gt;</span>
              </div>

              {/* Start Point Marker (Origin Dispatch Gate) */}
              <div className="absolute left-2.5 top-3.5 bottom-3.5 z-10 flex flex-col justify-between items-center py-1 border-r border-dashed border-emerald-400/60 pr-1.5">
                <span className="text-[8px] font-mono font-bold text-emerald-400 uppercase tracking-tighter">START</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Destination Finish Line Marker (Consignee Delivery Gate) */}
              <div className="absolute right-2.5 top-3.5 bottom-3.5 z-10 flex flex-col justify-between items-center py-1 border-l border-dashed border-amber-400/60 pl-1.5">
                <span className="text-[8px] font-mono font-bold text-amber-400 uppercase tracking-tighter">FINISH</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              </div>

              {/* Bottom Concrete Road Shoulder with Solid White Edge Line */}
              <div className="absolute bottom-0 left-0 right-0 h-3.5 bg-gradient-to-t from-stone-800 to-stone-900 border-t-2 border-white/80 flex items-center overflow-hidden">
                <div className="w-full h-[2px] bg-gradient-to-r from-amber-400/40 via-white/70 to-amber-400/40" />
              </div>

              {/* Visual Animated Truck Indicator moving along the route */}
              <div 
                className={`absolute top-1/2 z-30 flex flex-col items-center pointer-events-none ${
                  truckAnimationEnabled ? 'transition-all duration-700 ease-out' : ''
                }`}
                style={{ 
                  left: `${truckVisualProgress}%`,
                  transform: 'translate(-50%, -50%)',
                  opacity: truckOpacity,
                  transitionProperty: truckAnimationEnabled ? 'left, opacity' : 'none'
                }}
              >
                {/* Live Floating Status Badge above Truck */}
                <div className="mb-1 px-2.5 py-0.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300 shadow-md flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <Truck className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Truck • {journeyStages[activeJourneyStep].roadProgress}% On Route</span>
                </div>

                {/* The Truck Vehicle Body with Headlights & Tail Lights */}
                <div className="relative flex items-center">
                  {/* Conical Headlight Beam spreading forward onto the highway */}
                  <div className="absolute left-[105px] top-1/2 -translate-y-1/2 w-32 h-14 bg-gradient-to-r from-cyan-300/60 via-cyan-400/20 to-transparent pointer-events-none blur-[2px] rounded-r-full" />
                  
                  {/* Red Taillight Glow behind */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-red-500/50 rounded-full blur-sm pointer-events-none" />

                  {/* Modern Commercial Heavy Cargo Truck SVG */}
                  <svg 
                    viewBox="0 0 124 44" 
                    className="w-28 sm:w-34 h-10 sm:h-12 filter drop-shadow-[0_6px_10px_rgba(0,0,0,0.7)]"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Asphalt Drop Shadow */}
                    <ellipse cx="62" cy="40" rx="58" ry="3.5" fill="#000000" fillOpacity="0.8" />

                    {/* Container Trailer Body */}
                    <rect x="4" y="6" width="70" height="27" rx="2" fill="url(#truckTrailerGrad)" />
                    <rect x="4" y="6" width="70" height="27" rx="2" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />

                    {/* Vertical Corrugated Container Ribs */}
                    <line x1="14" y1="6" x2="14" y2="33" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.35" />
                    <line x1="24" y1="6" x2="24" y2="33" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.35" />
                    <line x1="34" y1="6" x2="34" y2="33" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.35" />
                    <line x1="44" y1="6" x2="44" y2="33" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.35" />
                    <line x1="54" y1="6" x2="54" y2="33" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.35" />
                    <line x1="64" y1="6" x2="64" y2="33" stroke="#0284c7" strokeWidth="1" strokeOpacity="0.35" />

                    {/* E-Way Bill Branding on Container */}
                    <text x="39" y="21" fill="#e0f2fe" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">E-WAY BILL</text>

                    {/* Rear Door Frame & Lock Rods */}
                    <line x1="7" y1="6" x2="7" y2="33" stroke="#0f172a" strokeWidth="1.5" />
                    {/* Rear Red LED Brake Strip */}
                    <rect x="3" y="23" width="2" height="7" rx="1" fill="#ef4444" />

                    {/* Cab Tractor Unit */}
                    <path 
                      d="M74 17 L84 17 L92 9 L110 9 C113 9 116 11 117 14 L120 25 L120 33 L74 33 Z" 
                      fill="url(#truckCabGrad)" 
                    />

                    {/* Aerodynamic Wind Deflector Roof */}
                    <path d="M84 9 Q98 5 110 9" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />

                    {/* Cab Windshield & Windows */}
                    <path 
                      d="M87 11 L108 11 C110 11 112 12 113 14 L115 20 L87 20 Z" 
                      fill="url(#cabGlassGrad)" 
                      stroke="#38bdf8" 
                      strokeWidth="0.8" 
                    />
                    <line x1="99" y1="11" x2="99" y2="20" stroke="#0f172a" strokeWidth="1.5" />
                    {/* Windshield Reflection */}
                    <path d="M100 11 L112 20" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" />

                    {/* Front Chrome Radiator Grille */}
                    <rect x="117" y="22" width="3" height="9" rx="1" fill="#334155" stroke="#94a3b8" strokeWidth="0.5" />

                    {/* Headlight LED Projector */}
                    <polygon points="116,23 120,23 119,27 115,26" fill="#38bdf8" />
                    <circle cx="118" cy="25" r="1.8" fill="#ffffff" />

                    {/* Exhaust Stack */}
                    <rect x="76" y="5" width="2.5" height="12" rx="1" fill="#94a3b8" />

                    {/* Truck Wheels (4 Heavy-Duty Wheels) */}
                    {/* Trailer Dual Rear Wheels */}
                    <g>
                      <circle cx="18" cy="34" r="6.5" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                      <circle cx="18" cy="34" r="3.8" fill="#334155" />
                      <circle cx="18" cy="34" r="1.8" fill="#cbd5e1" />
                      <line x1="18" y1="30.5" x2="18" y2="37.5" stroke="#94a3b8" strokeWidth="0.8" />
                      <line x1="14.5" y1="34" x2="21.5" y2="34" stroke="#94a3b8" strokeWidth="0.8" />
                    </g>
                    <g>
                      <circle cx="34" cy="34" r="6.5" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                      <circle cx="34" cy="34" r="3.8" fill="#334155" />
                      <circle cx="34" cy="34" r="1.8" fill="#cbd5e1" />
                      <line x1="34" y1="30.5" x2="34" y2="37.5" stroke="#94a3b8" strokeWidth="0.8" />
                      <line x1="30.5" y1="34" x2="37.5" y2="34" stroke="#94a3b8" strokeWidth="0.8" />
                    </g>

                    {/* Tractor Rear Drive Wheel */}
                    <g>
                      <circle cx="82" cy="34" r="6.5" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                      <circle cx="82" cy="34" r="3.8" fill="#334155" />
                      <circle cx="82" cy="34" r="1.8" fill="#cbd5e1" />
                      <line x1="82" y1="30.5" x2="82" y2="37.5" stroke="#94a3b8" strokeWidth="0.8" />
                      <line x1="78.5" y1="34" x2="85.5" y2="34" stroke="#94a3b8" strokeWidth="0.8" />
                    </g>

                    {/* Tractor Front Steering Wheel */}
                    <g>
                      <circle cx="107" cy="34" r="6.5" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                      <circle cx="107" cy="34" r="3.8" fill="#334155" />
                      <circle cx="107" cy="34" r="1.8" fill="#cbd5e1" />
                      <line x1="107" y1="30.5" x2="107" y2="37.5" stroke="#94a3b8" strokeWidth="0.8" />
                      <line x1="103.5" y1="34" x2="110.5" y2="34" stroke="#94a3b8" strokeWidth="0.8" />
                    </g>

                    {/* Linear Gradients */}
                    <defs>
                      <linearGradient id="truckTrailerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0369a1" />
                        <stop offset="45%" stopColor="#0284c7" />
                        <stop offset="100%" stopColor="#0c4a6e" />
                      </linearGradient>
                      <linearGradient id="truckCabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0284c7" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0369a1" />
                      </linearGradient>
                      <linearGradient id="cabGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0f172a" />
                        <stop offset="60%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

            </div>

            {/* 5 Milestone Point Badges along the route */}
            <div className="grid grid-cols-5 gap-1 sm:gap-2 mt-3 text-center">
              {journeyStages.map((stage, idx) => {
                const isActive = activeJourneyStep === idx;
                const Icon = stage.icon;
                return (
                  <button
                    key={stage.id}
                    onClick={() => handleJourneyStageClick(idx)}
                    className={`py-2 px-1 rounded-xl transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                      isActive 
                        ? 'text-blue-600 dark:text-cyan-400 font-bold scale-102' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                        : 'bg-slate-100 dark:bg-white/10 text-slate-500'
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-display text-[11px] sm:text-xs font-bold truncate max-w-full">
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* ACTIVE STAGE SHOWCASE CARD (Storytelling Card with Real Image & Telemetry) */}
          <div className="rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-cyan-500/20 shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Real Stage Photography (5 Cols) */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 bg-slate-900 group">
                <img
                  src={journeyStages[activeJourneyStep].image}
                  alt={journeyStages[activeJourneyStep].title}
                  className="w-full h-56 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-[10px] font-mono font-bold text-cyan-300">
                  {journeyStages[activeJourneyStep].badge}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-left font-mono text-xs">
                  <span className="text-slate-300 block text-[10px] uppercase">Operational Milestone</span>
                  <span className="font-bold text-white">{journeyStages[activeJourneyStep].subtitle}</span>
                </div>
              </div>

              {/* Right Side: Narrative Details & SAP Runbook (7 Cols) */}
              <div className="lg:col-span-7 text-left space-y-4">
                
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-blue-600 dark:text-cyan-400 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-cyan-950/60 border border-blue-200 dark:border-cyan-500/30">
                    STAGE {journeyStages[activeJourneyStep].number} OF 05
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {journeyStages[activeJourneyStep].subtitle}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {journeyStages[activeJourneyStep].title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  {journeyStages[activeJourneyStep].description}
                </p>

                {/* Technical Telemetry Grid */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">SAP Integration</span>
                    <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 block truncate">
                      {journeyStages[activeJourneyStep].telemetry.tcode}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">Movement Status</span>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block truncate">
                      {journeyStages[activeJourneyStep].telemetry.status}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">Consignment Spec</span>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 block truncate">
                      {journeyStages[activeJourneyStep].telemetry.hsn || journeyStages[activeJourneyStep].telemetry.weight || journeyStages[activeJourneyStep].telemetry.validity || journeyStages[activeJourneyStep].telemetry.eta || journeyStages[activeJourneyStep].telemetry.closedAt}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">Compliance Lock</span>
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block truncate">
                      {journeyStages[activeJourneyStep].telemetry.taxValue || journeyStages[activeJourneyStep].telemetry.bay || journeyStages[activeJourneyStep].telemetry.qrCode || journeyStages[activeJourneyStep].telemetry.toll || journeyStages[activeJourneyStep].telemetry.audit}
                    </span>
                  </div>
                </div>

                {/* Stage Navigator Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleJourneyStageClick(activeJourneyStep === 0 ? 4 : activeJourneyStep - 1)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
                    >
                      ← Previous Stage
                    </button>
                    <button
                      onClick={() => handleJourneyStageClick((activeJourneyStep + 1) % 5)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
                    >
                      Next Stage →
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenContact(`E-Way Bill Journey Consultation: Stage ${journeyStages[activeJourneyStep].title}`)}
                    className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Connect Your Workflow</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — “WHAT POWERS THE JOURNEY?”
          Interactive E-Way Bill Command Center:
          Central E-Way Bill document surrounded by 6 connected capabilities:
          1. Automated Processing  2. Invoice Connectivity  3. Transport Information
          4. Validation  5. Status Visibility  6. Exception Management
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative bg-[#F8FAFC] dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 shadow-sm mb-3">
              <Compass className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Connected Command Center</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              What Powers{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                the Journey?
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Explore the six core capabilities that orchestrate seamless compliance, vehicle dispatch, and live shipment tracking around a single central E-Way Bill record.
            </p>
          </div>

          {/* COMMAND CENTER INTERACTIVE ECOSYSTEM (Central Document + 6 Satellite Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 3 Capabilities (Col 4) */}
            <div className="lg:col-span-4 space-y-4">
              {commandCapabilities.slice(0, 3).map((cap) => {
                const isSelected = activeCapabilityId === cap.id;
                const Icon = cap.icon;
                return (
                  <button
                    key={cap.id}
                    onClick={() => handleCapabilityClick(cap.id)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-3.5 relative overflow-hidden group ${
                      isSelected 
                        ? 'bg-white dark:bg-[#0B1528] border-cyan-500 shadow-xl shadow-cyan-500/10 scale-102 ring-1 ring-cyan-500/40' 
                        : 'bg-white/60 dark:bg-[#07101E]/60 border-slate-200 dark:border-white/5 opacity-75 hover:opacity-100 hover:border-cyan-500/40'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-cyan-400" />
                    )}
                    <div className={`p-2.5 rounded-xl shrink-0 transition-all ${
                      isSelected 
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/30 scale-105' 
                        : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 group-hover:bg-slate-200 dark:group-hover:bg-white/15'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                          {cap.badge}
                        </span>
                        {isSelected && (
                          <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                        )}
                      </div>
                      <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                        {cap.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5 line-clamp-2">
                        {cap.short}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Center: Radiant, Eye-Catching Interactive Capability Showcase */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="w-full min-h-[460px] rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#081329] to-slate-950 text-white p-6 sm:p-7 border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.2)] relative overflow-hidden flex flex-col justify-between transition-all duration-300">
                
                {/* Radiant Ambient Background Glows */}
                <div className="absolute -top-20 -right-20 w-52 h-52 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.07] pointer-events-none" />

                {/* Top Header: Step Tracker & Badge */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                      CAPABILITY 0{capabilityIds.indexOf(activeCapabilityId) + 1} / 06
                    </span>
                  </div>

                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${currentCapability.badgeColor}`}>
                    {currentCapability.badge}
                  </span>
                </div>

                {/* Animated Showcase Content */}
                <div className="my-auto py-4 relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentCapability.id}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="flex flex-col items-center text-center"
                    >
                      {/* Vibrant Glowing Icon */}
                      <div className="relative mb-4">
                        <div className={`absolute -inset-2.5 bg-gradient-to-r ${currentCapability.accent} rounded-3xl opacity-50 blur-xl animate-pulse`} />
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${currentCapability.accent} p-4 shadow-xl shadow-cyan-500/20 flex items-center justify-center text-white border border-white/20`}>
                          <currentCapability.icon className="w-10 h-10 drop-shadow-md" />
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight">
                        {currentCapability.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-300 font-medium mt-1">
                        {currentCapability.tag}
                      </p>

                      {/* Clean Descriptive Text */}
                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mt-3 max-w-sm">
                        {currentCapability.detail}
                      </p>

                      {/* Sleek Standout Badge */}
                      <div className="mt-4 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-[11px] font-mono flex items-center gap-2 shadow-inner">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="font-semibold">{currentCapability.short}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom Timeline: 6 interactive pill dots */}
                <div className="pt-3.5 border-t border-white/10 relative z-10 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    {commandCapabilities.map((c) => {
                      const isCur = c.id === activeCapabilityId;
                      return (
                        <button
                          key={c.id}
                          onClick={() => handleCapabilityClick(c.id)}
                          aria-label={c.title}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            isCur 
                              ? 'w-7 bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.9)]' 
                              : 'w-2 bg-white/20 hover:bg-white/40'
                          }`}
                        />
                      );
                    })}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                    Auto-rotating 1s • Click card to pause 5s
                  </span>
                </div>

              </div>
            </div>

            {/* Right 3 Capabilities (Col 4) */}
            <div className="lg:col-span-4 space-y-4">
              {commandCapabilities.slice(3, 6).map((cap) => {
                const isSelected = activeCapabilityId === cap.id;
                const Icon = cap.icon;
                return (
                  <button
                    key={cap.id}
                    onClick={() => handleCapabilityClick(cap.id)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-3.5 relative overflow-hidden group ${
                      isSelected 
                        ? 'bg-white dark:bg-[#0B1528] border-cyan-500 shadow-xl shadow-cyan-500/10 scale-102 ring-1 ring-cyan-500/40' 
                        : 'bg-white/60 dark:bg-[#07101E]/60 border-slate-200 dark:border-white/5 opacity-75 hover:opacity-100 hover:border-cyan-500/40'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-500" />
                    )}
                    <div className={`p-2.5 rounded-xl shrink-0 transition-all ${
                      isSelected 
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/30 scale-105' 
                        : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 group-hover:bg-slate-200 dark:group-hover:bg-white/15'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                          {cap.badge}
                        </span>
                        {isSelected && (
                          <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                        )}
                      </div>
                      <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                        {cap.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5 line-clamp-2">
                        {cap.short}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — “SAP → E-WAY BILL → PHYSICAL MOVEMENT”
          Main Technical Visual Section:
          Futuristic 3-Layer Architecture:
          1. DIGITAL BUSINESS DATA (SAP ECC / S/4HANA)
          2. E-WAY BILL PROCESS (Invoice Data, Goods Information, Transport Details, Validation)
          3. REAL-WORLD MOVEMENT (Warehouse → Truck → Transit → Destination)
          Animated data particles traveling from SAP → E-Way Bill → Truck
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative bg-white dark:bg-[#070E1C] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm mb-3">
              <Layers className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              <span>3-Tier Technical Architecture</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              SAP → E-Way Bill →{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Physical Movement
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Bridge your digital business transactions with the physical movement of highway carriers. Discover how commercial ERP records seamlessly transform into verified transit documentation.
            </p>
          </div>

          {/* 3-LAYER ARCHITECTURE VISUAL MATRIX WITH DOWNWARD DATA FLOW */}
          <div className="max-w-4xl mx-auto space-y-6 relative">
            
            {/* Layer 1: Digital Business Data */}
            <div className="rounded-3xl bg-slate-50 dark:bg-[#0B1528] border-2 border-blue-500/30 p-6 sm:p-7 shadow-lg text-left relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-600 text-white">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 font-bold uppercase">LAYER 01</span>
                    <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      Digital Business Data
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  SAP ECC 6.0 / SAP S/4HANA
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mb-4">
                Transactional records initiate commercial movement: sales orders establish customer consignee destinations, outbound delivery records confirm picking/packing, and billing registers freeze statutory GST liabilities.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-blue-600 dark:text-cyan-400 font-bold">• Sales Orders (VA01)</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-blue-600 dark:text-cyan-400 font-bold">• Delivery Orders (VL02N)</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-blue-600 dark:text-cyan-400 font-bold">• Billing Docs (VF01)</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-blue-600 dark:text-cyan-400 font-bold">• Stock Transfers (STO)</span>
                </div>
              </div>
            </div>

            {/* Connecting Flow Indicator 1 -> 2 (Animated downward pulse) */}
            <div className="flex items-center justify-center py-1">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-[#07101E] border border-blue-200 dark:border-cyan-500/30 text-[11px] font-mono font-bold text-blue-600 dark:text-cyan-300 shadow-sm">
                <span>Payload Transmitted to E-Way Bill Middleware</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>
            </div>

            {/* Layer 2: E-Way Bill Process */}
            <div className="rounded-3xl bg-slate-50 dark:bg-[#0B1528] border-2 border-cyan-500/50 p-6 sm:p-7 shadow-xl text-left relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-600 text-white">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-300 font-bold uppercase">LAYER 02</span>
                    <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      E-Way Bill Process
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold">
                  The Intelligent Data & Validation Gateway
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mb-4">
                Pre-audits commercial fields, matches PIN-to-PIN distances via government APIs, formats the statutory JSON schema v1.03, and securely communicates with the NIC portal via TLS 1.3 encryption in under 200 milliseconds.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-cyan-600 dark:text-cyan-300 font-bold">1. Invoice Data (HSN/Tax)</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-cyan-600 dark:text-cyan-300 font-bold">2. Goods Weight & Unit</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-cyan-600 dark:text-cyan-300 font-bold">3. Transport Details</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-cyan-600 dark:text-cyan-300 font-bold">4. Government Validation</span>
                </div>
              </div>
            </div>

            {/* Connecting Flow Indicator 2 -> 3 (Animated downward pulse) */}
            <div className="flex items-center justify-center py-1">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-[#07101E] border border-emerald-200 dark:border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-300 shadow-sm">
                <span>12-Digit EWB Stamped ➔ Carrier Gate-Pass Issued</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>

            {/* Layer 3: Real-World Movement */}
            <div className="rounded-3xl bg-slate-50 dark:bg-[#0B1528] border-2 border-emerald-500/40 p-6 sm:p-7 shadow-lg text-left relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-600 text-white">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">LAYER 03</span>
                    <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      Real-World Movement
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Physical Highway Logistics & Destination Gate-In
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mb-4">
                Physical transit flows smoothly without inspection delays. FASTag readers log toll clearances automatically, security teams verify the digital QR code on driver mobile devices, and destination receipt triggers digital POD in SAP.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">• Warehouse Dock Dispatch</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">• Highway Transit Scans</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">• Transshipment Hub Part-B</span>
                </div>
                <div className="p-2 rounded-lg bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">• Customer Delivery Complete</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — “ONE VIEW. EVERY MOVEMENT.”
          Global Shipment Visibility Dashboard:
          Worldwide Logistics Control Center showing:
          Active Global Shipments | Compliant Digital Waybills | In Transit | Delivered | Gateways
          Interactive Global World Map with cross-border trade corridors across countries worldwide:
          US-Canada | Europe-UK | Middle East (GCC) | Asia-Pacific | India | Global Maritime
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative bg-[#F8FAFC] dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 shadow-sm mb-3">
              <Globe2 className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Worldwide Logistics & Movement Control Center</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              One View.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Every Movement.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Real-time enterprise dashboard providing global supply chain directors, logistics heads, and plant dispatchers complete cross-border visibility across international and domestic trade corridors spanning 50+ countries.
            </p>
          </div>

          {/* CONTROL CENTER DASHBOARD CONTAINER */}
          <div className="rounded-3xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-cyan-500/30 shadow-2xl p-6 sm:p-8">
            
            {/* TOP 5 GLOBAL KPI TILES */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
              
              <div className="p-4 rounded-2xl bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5 text-left">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Active Global Shipments</span>
                <span className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">18,450+</span>
                <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 block mt-1">Across 54 Countries</span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5 text-left">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Compliant E-Waybills</span>
                <span className="font-display text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400">17,890</span>
                <span className="text-[10px] font-mono text-cyan-500 block mt-1">GST • ZATCA • Peppol • ACE</span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5 text-left">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">In Cross-Border Transit</span>
                <span className="font-display text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">12,340</span>
                <span className="text-[10px] font-mono text-blue-500 block mt-1">Multimodal Road, Sea & Air</span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5 text-left">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Delivered Worldwide</span>
                <span className="font-display text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">5,120</span>
                <span className="text-[10px] font-mono text-emerald-500 block mt-1">Global POD Confirmed</span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5 text-left col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Border & Port Gateways</span>
                <span className="font-display text-2xl sm:text-3xl font-black text-amber-500">18</span>
                <span className="text-[10px] font-mono text-amber-500 block mt-1">Fast-Track Customs Hubs</span>
              </div>

            </div>

            {/* INTERACTIVE WORLD MAP & MULTI-COUNTRY ROUTE TELEMETRY SPLIT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Side: Interactive World Map with Global Shipment Corridors (7 Cols) */}
              <div className="lg:col-span-7 rounded-2xl bg-slate-900 dark:bg-black p-5 border border-white/10 relative overflow-hidden min-h-[420px] sm:min-h-[460px] flex flex-col justify-between">
                
                {/* Header & Live Multi-Country Pulse */}
                <div className="flex items-center justify-between z-10 pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      Global Logistics Corridors & Multi-Country Freight
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Live Worldwide Telemetry
                  </span>
                </div>

                {/* Stylized Vector World Map Container */}
                <div className="relative w-full h-[280px] sm:h-[320px] my-2">
                  <svg viewBox="0 0 1000 500" className="w-full h-full">
                    {/* Graticule / Lat-Long Grid */}
                    <g stroke="#00A3E0" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.12">
                      <line x1="30" y1="90" x2="970" y2="90" />
                      <line x1="30" y1="170" x2="970" y2="170" />
                      <line x1="30" y1="250" x2="970" y2="250" strokeWidth="0.8" opacity="0.25" />
                      <line x1="30" y1="330" x2="970" y2="330" />
                      <line x1="30" y1="410" x2="970" y2="410" />
                      <line x1="150" y1="40" x2="150" y2="460" />
                      <line x1="300" y1="40" x2="300" y2="460" />
                      <line x1="450" y1="40" x2="450" y2="460" />
                      <line x1="500" y1="40" x2="500" y2="460" strokeWidth="0.8" opacity="0.25" />
                      <line x1="650" y1="40" x2="650" y2="460" />
                      <line x1="800" y1="40" x2="800" y2="460" />
                    </g>

                    {/* Continents Silhouettes */}
                    <g fill="#0b172a" stroke="#0284c7" strokeWidth="0.9" opacity="0.8">
                      {/* North America */}
                      <path d="M 85 80 L 130 65 L 180 85 L 240 75 L 310 95 L 300 135 L 280 160 L 305 190 L 280 230 L 225 265 L 195 305 L 175 275 L 160 225 L 130 165 L 90 120 Z" />
                      
                      {/* Greenland */}
                      <path d="M 330 45 L 380 40 L 395 75 L 360 100 L 335 80 Z" />

                      {/* South America */}
                      <path d="M 255 270 L 295 265 L 340 285 L 380 335 L 360 405 L 320 465 L 295 470 L 275 405 L 270 325 Z" />

                      {/* Europe & UK */}
                      <path d="M 445 135 L 485 90 L 530 95 L 560 135 L 535 175 L 485 180 L 445 170 Z" />
                      <path d="M 450 140 L 470 130 L 468 160 L 448 155 Z" />
                      <path d="M 495 65 L 525 60 L 535 105 L 505 115 Z" />

                      {/* Africa */}
                      <path d="M 455 195 L 555 190 L 605 250 L 565 355 L 545 425 L 505 425 L 465 335 L 445 255 Z" />
                      <path d="M 610 345 L 625 355 L 615 390 L 600 375 Z" />

                      {/* Asia */}
                      <path d="M 565 80 L 670 65 L 790 85 L 870 125 L 850 195 L 795 235 L 735 275 L 685 305 L 655 270 L 630 275 L 585 225 L 565 145 Z" />
                      
                      {/* India Subcontinent Accent Polygon */}
                      <path d="M 645 225 L 710 220 L 715 265 L 675 315 L 645 265 Z" fill="#0e2a47" stroke="#00d2ff" strokeWidth="1.2" opacity="0.95" />

                      {/* Japan */}
                      <path d="M 850 175 L 865 170 L 860 215 L 845 205 Z" />

                      {/* Southeast Asia Archipelago */}
                      <path d="M 735 320 L 775 320 L 785 345 L 740 345 Z" />
                      <path d="M 760 355 L 820 355 L 810 375 L 755 375 Z" />

                      {/* Australia & New Zealand */}
                      <path d="M 805 345 L 875 335 L 910 380 L 885 435 L 825 440 L 795 390 Z" />
                      <path d="M 925 420 L 945 420 L 935 455 L 920 445 Z" />
                    </g>

                    {/* Animated Multi-Country Corridors */}
                    {mapRoutes.map((r) => {
                      const isSelected = selectedRouteId === r.id;
                      return (
                        <g key={r.id}>
                          <path
                            d={r.path}
                            fill="none"
                            stroke={isSelected ? '#00d2ff' : '#1e3a5f'}
                            strokeWidth={isSelected ? '2.8' : '1.2'}
                            strokeDasharray={isSelected ? '5 3' : '3 3'}
                            className={isSelected ? 'filter drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]' : ''}
                          />
                          {/* Origin & Destination Nodes */}
                          <circle cx={r.origin.x} cy={r.origin.y} r={isSelected ? '4' : '2.5'} fill={isSelected ? '#00d2ff' : '#38bdf8'} />
                          <circle cx={r.destination.x} cy={r.destination.y} r={isSelected ? '4' : '2.5'} fill={isSelected ? '#38bdf8' : '#64748b'} />
                          
                          {/* Animated Moving Beacon on Selected Active Route */}
                          {isSelected && (
                            <circle cx={r.pingPos.cx} cy={r.pingPos.cy} r="4.5" fill="#38bdf8" className="animate-ping" />
                          )}
                        </g>
                      );
                    })}

                    {/* Global Hub Labels */}
                    <text x="210" y="175" fill="#94a3b8" fontSize="11" fontFamily="monospace">Chicago/US</text>
                    <text x="288" y="160" fill="#94a3b8" fontSize="11" fontFamily="monospace">Toronto/CA</text>
                    <text x="430" y="142" fill="#94a3b8" fontSize="11" fontFamily="monospace">London/UK</text>
                    <text x="515" y="160" fill="#94a3b8" fontSize="11" fontFamily="monospace">Frankfurt/DE</text>
                    <text x="550" y="245" fill="#94a3b8" fontSize="11" fontFamily="monospace">Riyadh/SA</text>
                    <text x="655" y="240" fill="#94a3b8" fontSize="11" fontFamily="monospace">Dubai/AE</text>
                    <text x="650" y="215" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">Delhi/IN</text>
                    <text x="630" y="275" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">Mumbai/IN</text>
                    <text x="765" y="330" fill="#94a3b8" fontSize="11" fontFamily="monospace">Singapore</text>
                    <text x="745" y="265" fill="#94a3b8" fontSize="11" fontFamily="monospace">Bangkok</text>
                    <text x="860" y="195" fill="#64748b" fontSize="10" fontFamily="monospace">Tokyo</text>
                    <text x="895" y="420" fill="#64748b" fontSize="10" fontFamily="monospace">Sydney</text>
                  </svg>
                </div>

                {/* Bottom Route Quick Switcher (6 Global Corridors) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-white/10 z-10">
                  {mapRoutes.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRouteId(r.id)}
                      className={`p-2 rounded-xl font-mono text-[10px] sm:text-xs text-left transition-all cursor-pointer flex items-center justify-between gap-1.5 ${
                        selectedRouteId === r.id
                          ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/25 border border-cyan-400/40'
                          : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-transparent'
                      }`}
                    >
                      <span className="truncate">{r.flags} {r.region}</span>
                      <span className="text-[9px] opacity-75 shrink-0">{r.distance}</span>
                    </button>
                  ))}
                </div>

              </div>

              {/* Right Side: Selected Route Telemetry Card (5 Cols) */}
              <div className="lg:col-span-5 text-left space-y-3.5">
                
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 font-bold uppercase flex items-center gap-1.5">
                      <Globe2 className="h-3 w-3" />
                      SELECTED GLOBAL TRADE CORRIDOR
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold">
                      {currentRoute.validity}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      {currentRoute.name}
                    </h3>
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mt-0.5">
                      {currentRoute.countries} • {currentRoute.mode}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 block text-[9px] uppercase">Trade Corridor</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200 truncate block">{currentRoute.corridor}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 block text-[9px] uppercase">Route Distance</span>
                      <span className="font-bold text-cyan-600 dark:text-cyan-400 block">{currentRoute.distance}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 block text-[9px] uppercase">Transit ETA</span>
                      <span className="text-slate-700 dark:text-slate-300 block">{currentRoute.avgEta}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                      <span className="text-slate-400 block text-[9px] uppercase">Active Fleet</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 block">{currentRoute.trucks} Active Transits</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <span className="text-[11px] font-semibold truncate">Statutory: {currentRoute.compliance}</span>
                  </div>
                </div>

                {/* Sample Live Telemetry Stamped Record */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">
                    Sample Consignment Electronic Manifest
                  </span>
                  <div className="text-xs font-mono space-y-1 text-slate-700 dark:text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Government / Customs ID:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{currentRoute.sampleEwb}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Carrier / Fleet / Vessel:</span>
                      <span className="text-blue-600 dark:text-cyan-400 font-bold">{currentRoute.vehicle}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Cargo Declaration:</span>
                      <span className="text-slate-700 dark:text-slate-300 truncate max-w-[210px]">{currentRoute.cargo}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact(`Global Logistics Freight: ${currentRoute.name}`)}
                  className="w-full py-3 rounded-xl bg-blue-50 dark:bg-cyan-950/40 border border-blue-200 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-300 font-mono text-xs font-bold hover:bg-blue-100 dark:hover:bg-cyan-900/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Globe2 className="h-3.5 w-3.5" />
                  <span>Inquire About Global Multi-Country Logistics</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — “WHY BUSINESSES CHOOSE A CONNECTED APPROACH”
          Six compact benefit blocks arranged around a central “Connected E-Way Bill” visual
          Benefits:
          1. Less Manual Effort  2. Faster Processing  3. Better Data Accuracy
          4. Improved Shipment Visibility  5. Easier Exception Handling  6. Stronger Process Control
          Short statements + animated icons + subtle circular rotating orbit
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative bg-white dark:bg-[#070E1C] border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 shadow-sm mb-3">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Measurable Operational Value</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Why Businesses Choose a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Connected Approach
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Moving away from standalone portal logins and manual spreadsheets gives your enterprise instant processing speed, statutory accuracy, and full control over goods in transit.
            </p>
          </div>

          {/* CIRCULAR ORBIT BENEFITS GRID (6 Compact Benefit Blocks around Central Hub) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {circularBenefits.map((benefit, bIdx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={bIdx}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl p-5 sm:p-6 bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-cyan-500/20 shadow-md text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#07101E] border border-slate-200 dark:border-white/5 text-blue-600 dark:text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40">
                        {benefit.stat}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-black text-slate-900 dark:text-white mb-1.5">
                      {benefit.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-blue-600 dark:text-cyan-400 font-bold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>SAP S/4HANA & ECC Native</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — FINAL CTA: “KEEP GOODS MOVING.”
          Headline: “Keep Goods Moving. Keep Your Process Connected.”
          Supporting text + Primary Button
          Visual: Wide cinematic logistics image of a truck moving toward destination
          Subtle animated route line moving toward CTA
          ========================================================================= */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EEF5FC] to-[#E0EDFB] dark:from-[#030712] dark:via-[#071324] dark:to-[#0A1B33] border-t border-slate-200/80 dark:border-white/10">
        
        {/* Soft Radiant Ambient Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-400/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-cyan-500/30 shadow-2xl p-8 sm:p-12 lg:p-14 overflow-hidden relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Column: Heading, Copy & Action CTAs (7 Cols) */}
              <div className="lg:col-span-7 text-left space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>CONNECTED GOODS MOVEMENT</span>
                </div>

                {/* Exact Headline */}
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                  Keep Goods Moving.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                    Keep Your Process Connected.
                  </span>
                </h2>

                {/* Exact Supporting Text */}
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-xl">
                  Bring your E-Way Bill process closer to your SAP environment and gain a more connected way to manage documentation, transportation and goods movement.
                </p>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => onOpenContact('E-Way Bill Transformation Consultation')}
                    className="btn-primary-gradient shimmer-sweep px-8 py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-cyan-500/25 transition-all"
                  >
                    <span>Talk to Our E-Way Bill Experts</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Link
                    to="/solutions"
                    className="px-6 py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-display text-xs font-bold uppercase tracking-wider transition-all text-center"
                  >
                    Explore All Solutions
                  </Link>
                </div>

                {/* Trust Checkpoints */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 gap-3 text-xs font-mono text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>NIC Direct API Interface</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>&lt; 200ms EWB Generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Clean Core Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Pan-India Transporter Sync</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Wide Cinematic Logistics Image with Subtle Animated Route Line (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-950 text-white text-left group">
                  
                  {/* Cinematic Logistics Image: Commercial truck moving toward destination */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop"
                      alt="Commercial logistics carrier on highway moving toward destination horizon"
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-[10px] font-mono font-bold text-cyan-300">
                      KNOOVIQ LOGISTICS ADVISORY
                    </div>

                    {/* Subtle Animated Route Line Moving Toward Destination */}
                    <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                      <div className="relative h-1 w-full bg-white/20 rounded-full overflow-hidden mb-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 animate-pulse" />
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-300">
                        <span>Dispatch Verified</span>
                        <span className="text-cyan-300 font-bold">Continuous Highway Movement</span>
                        <span>Destination Clear</span>
                      </div>
                    </div>
                  </div>

                  {/* Implementation Guarantee Box */}
                  <div className="p-4 space-y-2 bg-slate-950">
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1.5 text-xs font-mono text-slate-200">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">
                        Implementation Assurance
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>2–3 Weeks Rapid Go-Live for SAP ECC / S/4HANA</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>Zero modification to standard SAP billing tables</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default EWayBillPage;
