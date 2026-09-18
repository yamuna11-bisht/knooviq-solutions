import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  Navigation,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Truck,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Cpu,
  RotateCcw,
  Check,
  ChevronRight,
  ChevronLeft,
  Radio,
  FileText,
  UserCheck,
  Compass,
  Gauge,
  Sliders,
  Award,
  Globe,
  BarChart2,
  Maximize2,
  Workflow,
  X,
  Smartphone,
  Eye,
  Crosshair,
  QrCode,
  PenTool,
  BatteryCharging,
  Wifi,
  Play,
  Pause
} from 'lucide-react';

interface FieldServiceManagementPageProps {
  onOpenContact: (topic?: string) => void;
}

export const FieldServiceManagementPage: React.FC<FieldServiceManagementPageProps> = ({ onOpenContact }) => {
  // Set document title
  useEffect(() => {
    document.title = 'Field Service Management | Connected From Dispatch to Resolution | KNOOVIQ';
  }, []);

  // =========================================================================
  // STATE: Section 1 - Hero Tactical Mission Controller
  // =========================================================================
  const [heroMissionStep, setHeroMissionStep] = useState<number>(0);
  const [isHeroAutoPlaying, setIsHeroAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isHeroAutoPlaying) return;
    const timer = setInterval(() => {
      setHeroMissionStep((prev) => (prev + 1) % 5);
    }, 2800);
    return () => clearInterval(timer);
  }, [isHeroAutoPlaying]);

  const heroMissionStages = [
    {
      id: 'req',
      code: 'REQ-7402',
      time: '10:14:02',
      event: 'Vibration Anomaly Spike Detected',
      location: 'Aero Systems Mfg • Line 2 Pump Bay',
      status: 'INGESTED',
      badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      action: 'Telemetry alarm parsed from IoT sensor #SEN-9912. Threshold: 2.8 mm/s.'
    },
    {
      id: 'wo',
      code: 'WO-9841',
      time: '10:14:45',
      event: 'SAP Service Order Initialized',
      location: 'Contract Account #VKONT-4482',
      status: 'P1 CRITICAL',
      badgeClass: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      action: '2-hour response SLA triggered. Parts reserved in regional hub.'
    },
    {
      id: 'dispatch',
      code: 'DISPATCH',
      time: '10:15:10',
      event: 'Optimal Technician Assigned',
      location: 'Marcus Vance (Level 4 Heavy Mech)',
      status: '98% MATCH',
      badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      action: 'Algorithm matched required certification, proximity (2.4 km), and truck stock.'
    },
    {
      id: 'route',
      code: 'TRANSIT',
      time: '10:16:30',
      event: 'Vehicle Route Telematics Active',
      location: 'Route 102 Expressway Transit',
      status: 'EN ROUTE',
      badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      action: 'Live GPS navigation synchronized. Customer notified with 14m ETA.'
    },
    {
      id: 'onsite',
      code: 'ON-SITE',
      time: '10:28:15',
      event: 'Technician Check-In at Gate 4',
      location: 'Aero Systems Industrial Security Dock',
      status: 'ARRIVED',
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      action: 'Geofence arrival timestamp recorded. Proceeding to machine bay.'
    }
  ];

  // =========================================================================
  // STATE: Section 2 - The Spatial Service Journey (Panoramic Landscape Explorer)
  // =========================================================================
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number>(0);
  const [isJourneyPaused, setIsJourneyPaused] = useState<boolean>(false);
  const journeyIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const journeyPauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const journeyStages = [
    {
      step: '01',
      title: 'Customer Request',
      shortLabel: 'Customer Request',
      sector: 'INCIDENT INTAKE',
      sapContext: 'SAP S/4HANA Service Core',
      role: 'Client Maintenance Desk',
      icon: Radio,
      image: '/images/journey/stage1_invoice_erp_analytics.jpg',
      imageAlt: 'Customer Portal & Incident Telemetry Reception in SAP S/4HANA',
      summary: 'Capture service alarms from IoT telemetry gateways, customer self-service portals, or emergency hotlines with automated SLA countdown validation.',
      telemetryLog: 'INGEST: [10:14:02] tenant_aero_systems SENSOR_VIB_SPIKE val=2.8mm/s [SLA_START]',
      checkpoint: 'Warranty and SLA coverage confirmed without human delay',
      kpi: '< 2 min Ingestion'
    },
    {
      step: '02',
      title: 'Work Order Creation',
      shortLabel: 'Work Order Creation',
      sector: 'ORDER INITIALIZATION',
      sapContext: 'SAP Maintenance Order (IW31)',
      role: 'SAP S/4HANA Asset Ops',
      icon: FileText,
      image: '/images/journey/stage2_warehouse_inventory_tablet.jpg',
      imageAlt: 'SAP Work Order preparation with bill of materials on rugged tablet',
      summary: 'Generate standardized maintenance packages pre-populated with required safety gear, step-by-step schematics, and auto-reserved spare parts.',
      telemetryLog: 'CREATE: [10:14:45] WO-9841 PRIO_1 BOM_RESERVED item=SR-902 qty=1 [COMMITTED]',
      checkpoint: 'Automated BOM stock reservation in regional warehouse',
      kpi: '100% Automated BOM'
    },
    {
      step: '03',
      title: 'Smart Dispatch',
      shortLabel: 'Smart Dispatch',
      sector: 'AI RESOURCE MATCHING',
      sapContext: 'SAP FSM Dispatch Board',
      role: 'Autonomous AI Dispatcher',
      icon: Compass,
      image: '/images/fsm_smart_dispatch_map.jpg',
      imageAlt: 'AI Dispatch Board Territory Map and Technician Route Matrix',
      summary: 'Evaluate technician certifications, real-time geofence proximity, open shift availability, and truck consignment inventory to pick the best engineer.',
      telemetryLog: 'MATCH: [10:15:10] tech_id=MV_881 cert=TURBINE_L4 dist=2.4km score=0.98 [DISPATCHED]',
      checkpoint: 'Multi-skill matrix prevents assigning unqualified technicians',
      kpi: '98% Optimal Match'
    },
    {
      step: '04',
      title: 'Technician En Route',
      shortLabel: 'Technician En Route',
      sector: 'FLEET TELEMATICS',
      sapContext: 'FSM Mobile & Live GPS',
      role: 'Unit GFS-2024 • Marcus Vance',
      icon: Truck,
      image: '/images/fsm_technician_en_route.png',
      imageAlt: 'Field Service Engineer reviewing diagnostic telemetry and operations',
      summary: 'Equip service vans with industrial turn-by-turn routing and provide customers with automated live tracking links and dynamic arrival notifications.',
      telemetryLog: 'ROUTE: [10:16:30] unit=GFS-2024 lat=37.7749 long=-122.4194 speed=48kmh [ETA_14M]',
      checkpoint: 'Customer arrival alert triggered automatically via geofencing',
      kpi: 'ETA 14 min Accurate'
    },
    {
      step: '05',
      title: 'On-Site Execution',
      shortLabel: 'On-Site Execution',
      sector: 'MOBILE DIGITAL TOOLKIT',
      sapContext: 'SAP FSM Rugged Mobile App',
      role: 'Senior Field Specialist',
      icon: Wrench,
      image: '/images/fsm_on_site_execution.png',
      imageAlt: 'Field Specialist executing on-site operations and diagnostics',
      summary: 'Technicians execute precision repairs using rugged tablets: accessing 3D schematics, verifying torque specs, scanning part barcodes, and capturing photo logs.',
      telemetryLog: 'SERVICE: [10:32:00] lock_tag_out=VERIFIED torque=145Nm part_scan=OK [EXECUTING]',
      checkpoint: '100% offline-first sync guarantees zero field disruption',
      kpi: '100% Offline Capable'
    },
    {
      step: '06',
      title: 'Resolution & Sign-Off',
      shortLabel: 'Resolution & Sign-Off',
      sector: 'FIRST-TIME FIX VERIFICATION',
      sapContext: 'Digital Service Report PDF',
      role: 'Customer Plant Supervisor',
      icon: PenTool,
      image: '/images/fsm_resolution_signoff.png',
      imageAlt: 'Field service solution and digital sign-off verification',
      summary: 'Confirm restored machine operating tolerances with live post-repair sensor diagnostics, followed by customer digital signature on the tablet glass.',
      telemetryLog: 'RESOLVE: [11:15:30] post_test_vib=0.8mm/s client_sign=CAPTURED [FIX_CONFIRMED]',
      checkpoint: 'Post-service diagnostic verification confirms baseline return',
      kpi: 'Digital E-Signature'
    },
    {
      step: '07',
      title: 'Customer Satisfaction',
      shortLabel: 'Customer Satisfaction',
      sector: 'FINANCIAL & CSAT CLOSING',
      sapContext: 'SAP ACDOCA Universal Journal',
      role: 'Finance & Quality Director',
      icon: ShieldCheck,
      image: '/images/fsm_customer_satisfaction.png',
      imageAlt: 'Customer satisfaction feedback loop covering quality, efficiency, service, and reliability',
      summary: 'Capture instant customer feedback, reconcile technician labor hours and parts consumed, and post journal entries directly into SAP Finance.',
      telemetryLog: 'FINANCE: [11:16:10] labor=1.25hr parts=$420.00 ACDOCA_POSTED [CSAT_5_STARS]',
      checkpoint: 'Zero-touch invoice generation with 100% audit lineage',
      kpi: '5-Star CSAT Closed'
    }
  ];

  const startJourneyAutoCycle = useCallback(() => {
    if (journeyIntervalRef.current) clearInterval(journeyIntervalRef.current);
    journeyIntervalRef.current = setInterval(() => {
      setActiveJourneyIndex((prev) => (prev + 1) % journeyStages.length);
    }, 3200);
  }, [journeyStages.length]);

  const stopJourneyAutoCycle = useCallback(() => {
    if (journeyIntervalRef.current) {
      clearInterval(journeyIntervalRef.current);
      journeyIntervalRef.current = null;
    }
  }, []);

  const handleJourneyStageClick = (index: number) => {
    setActiveJourneyIndex(index);
    setIsJourneyPaused(true);
    stopJourneyAutoCycle();

    if (journeyPauseTimerRef.current) {
      clearTimeout(journeyPauseTimerRef.current);
    }

    journeyPauseTimerRef.current = setTimeout(() => {
      setIsJourneyPaused(false);
      startJourneyAutoCycle();
    }, 5000);
  };

  const handleJourneyStepNav = (direction: 'next' | 'prev' = 'next') => {
    setActiveJourneyIndex((prev) => {
      let nextIdx = direction === 'next' ? prev + 1 : prev - 1;
      if (nextIdx >= journeyStages.length) nextIdx = 0;
      if (nextIdx < 0) nextIdx = journeyStages.length - 1;
      handleJourneyStageClick(nextIdx);
      return nextIdx;
    });
  };

  useEffect(() => {
    startJourneyAutoCycle();
    return () => {
      stopJourneyAutoCycle();
      if (journeyPauseTimerRef.current) clearTimeout(journeyPauseTimerRef.current);
    };
  }, [startJourneyAutoCycle, stopJourneyAutoCycle]);

  const currentJourneyStage = journeyStages[activeJourneyIndex] || journeyStages[0];

  // =========================================================================
  // STATE: Section 3 - Intelligent Scheduling & Dispatch Matrix
  // =========================================================================
  const [selectedTicketId, setSelectedTicketId] = useState<string>('ticket-aero');
  const [isDispatchPaused, setIsDispatchPaused] = useState<boolean>(false);
  const dispatchIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const dispatchPauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const dispatchTickets = [
    {
      id: 'ticket-aero',
      client: 'Aero Systems Manufacturing',
      facility: 'Line 2 Pump Assembly',
      issue: 'Centrifugal Pump Vibration Anomaly',
      priority: 'P1 Critical',
      slaWindow: '120 min max',
      reqSkill: 'Heavy Mechanical & Turbines (L4)',
      requiredParts: 'Seal Kit #SR-902 (In Truck)',
      zone: 'North-West Industrial Sector',
      image: '/images/fsm_smart_dispatch_map.jpg',
      optimalTech: {
        name: 'Marcus Vance',
        callsign: 'UNIT 04-MV',
        distance: '2.4 km • ETA 8m',
        score: 98
      },
      candidates: [
        {
          id: 'tech-marcus',
          name: 'Marcus Vance',
          callsign: 'UNIT 04-MV',
          certLevel: 'Turbines & Heavy Mechanical (Level 4)',
          distanceKm: 2.4,
          transitEta: '8 mins',
          matchScore: 98,
          status: 'AVAILABLE IMMEDIATELY',
          truckParts: 'Seal Kit #SR-902 in Truck Bin B3',
          shiftLoad: '2 of 6 Completed',
          isOptimal: true
        },
        {
          id: 'tech-elena',
          name: 'Elena Rostova',
          callsign: 'UNIT 09-ER',
          certLevel: 'PLC, SCADA & Automation Controls (Level 3)',
          distanceKm: 8.1,
          transitEta: '24 mins',
          matchScore: 74,
          status: 'FINISHING SITE WORK (15M)',
          truckParts: 'General Diagnostic Sensors',
          shiftLoad: '4 of 5 Completed',
          isOptimal: false
        },
        {
          id: 'tech-david',
          name: 'David Chen',
          callsign: 'UNIT 14-DC',
          certLevel: 'High-Voltage & Power Systems (Level 4)',
          distanceKm: 14.5,
          transitEta: '36 mins',
          matchScore: 62,
          status: 'EN ROUTE TO BASE',
          truckParts: 'Electrical Calibration Rig',
          shiftLoad: '3 of 5 Completed',
          isOptimal: false
        }
      ]
    },
    {
      id: 'ticket-energy',
      client: 'East Metro Substation 12',
      facility: 'Primary Switchgear Grid',
      issue: '33kV Breaker Trip Anomaly',
      priority: 'P2 High',
      slaWindow: '240 min max',
      reqSkill: 'High-Voltage Switchgear & Electrical (L4)',
      requiredParts: 'Vacuum Interrupter Cartridge',
      zone: 'East Industrial Sector',
      image: '/images/energy_utilities_industry.png',
      optimalTech: {
        name: 'David Chen',
        callsign: 'UNIT 14-DC',
        distance: '3.1 km • ETA 11m',
        score: 99
      },
      candidates: [
        {
          id: 'tech-david',
          name: 'David Chen',
          callsign: 'UNIT 14-DC',
          certLevel: 'High-Voltage & Power Systems (Level 4)',
          distanceKm: 3.1,
          transitEta: '11 mins',
          matchScore: 99,
          status: 'AVAILABLE IMMEDIATELY',
          truckParts: 'Vacuum Interrupter Cartridge in Rack 2',
          shiftLoad: '1 of 5 Completed',
          isOptimal: true
        },
        {
          id: 'tech-elena',
          name: 'Elena Rostova',
          callsign: 'UNIT 09-ER',
          certLevel: 'PLC, SCADA & Automation Controls (Level 3)',
          distanceKm: 6.4,
          transitEta: '20 mins',
          matchScore: 79,
          status: 'FINISHING SITE WORK (10M)',
          truckParts: 'Grid Telemetry Sensors',
          shiftLoad: '3 of 5 Completed',
          isOptimal: false
        },
        {
          id: 'tech-marcus',
          name: 'Marcus Vance',
          callsign: 'UNIT 04-MV',
          certLevel: 'Turbines & Heavy Mechanical (Level 4)',
          distanceKm: 12.0,
          transitEta: '32 mins',
          matchScore: 54,
          status: 'REQUIRES HV CLEARANCE',
          truckParts: 'Mechanical Tools Kit',
          shiftLoad: '2 of 6 Completed',
          isOptimal: false
        }
      ]
    },
    {
      id: 'ticket-logistics',
      client: 'City Central Cold Storage',
      facility: 'Refrigeration Rack 4',
      issue: 'Ammonia Compressor Pressure Leak',
      priority: 'P1 Critical',
      slaWindow: '90 min max',
      reqSkill: 'Industrial HVAC & Cryogenics (L3)',
      requiredParts: 'Shaft Seal & Solenoid Valve',
      zone: 'Central Urban Sector',
      image: '/images/distribution_design_story.png',
      optimalTech: {
        name: 'Elena Rostova',
        callsign: 'UNIT 09-ER',
        distance: '1.8 km • ETA 6m',
        score: 97
      },
      candidates: [
        {
          id: 'tech-elena',
          name: 'Elena Rostova',
          callsign: 'UNIT 09-ER',
          certLevel: 'PLC, SCADA & Cryogenics (Level 3)',
          distanceKm: 1.8,
          transitEta: '6 mins',
          matchScore: 97,
          status: 'AVAILABLE IMMEDIATELY',
          truckParts: 'Solenoid Valve & Pressure Rig in Bin A2',
          shiftLoad: '2 of 5 Completed',
          isOptimal: true
        },
        {
          id: 'tech-marcus',
          name: 'Marcus Vance',
          callsign: 'UNIT 04-MV',
          certLevel: 'Turbines & Heavy Mechanical (Level 4)',
          distanceKm: 4.5,
          transitEta: '14 mins',
          matchScore: 75,
          status: 'AVAILABLE IN 20 MINS',
          truckParts: 'Compressor Seal Flange',
          shiftLoad: '2 of 6 Completed',
          isOptimal: false
        },
        {
          id: 'tech-david',
          name: 'David Chen',
          callsign: 'UNIT 14-DC',
          certLevel: 'High-Voltage & Power Systems (Level 4)',
          distanceKm: 16.2,
          transitEta: '40 mins',
          matchScore: 48,
          status: 'EN ROUTE OTHER ZONE',
          truckParts: 'Electrical Calibration Rig',
          shiftLoad: '3 of 5 Completed',
          isOptimal: false
        }
      ]
    }
  ];

  const currentTicket = dispatchTickets.find((t) => t.id === selectedTicketId) || dispatchTickets[0];

  const startDispatchAutoCycle = useCallback(() => {
    if (dispatchIntervalRef.current) clearInterval(dispatchIntervalRef.current);
    dispatchIntervalRef.current = setInterval(() => {
      setSelectedTicketId((prevId) => {
        const currentIndex = dispatchTickets.findIndex((t) => t.id === prevId);
        const nextIndex = (currentIndex + 1) % dispatchTickets.length;
        return dispatchTickets[nextIndex].id;
      });
    }, 3200);
  }, [dispatchTickets.length]);

  const stopDispatchAutoCycle = useCallback(() => {
    if (dispatchIntervalRef.current) {
      clearInterval(dispatchIntervalRef.current);
      dispatchIntervalRef.current = null;
    }
  }, []);

  const handleTicketSelectWithPause = (ticketId: string) => {
    setSelectedTicketId(ticketId);
    setIsDispatchPaused(true);
    stopDispatchAutoCycle();

    if (dispatchPauseTimerRef.current) {
      clearTimeout(dispatchPauseTimerRef.current);
    }

    dispatchPauseTimerRef.current = setTimeout(() => {
      setIsDispatchPaused(false);
      startDispatchAutoCycle();
    }, 5000);
  };

  const handleDispatchImageClick = (direction: 'next' | 'prev' = 'next') => {
    const currentIndex = dispatchTickets.findIndex((t) => t.id === selectedTicketId);
    let targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (targetIndex >= dispatchTickets.length) targetIndex = 0;
    if (targetIndex < 0) targetIndex = dispatchTickets.length - 1;
    handleTicketSelectWithPause(dispatchTickets[targetIndex].id);
  };

  useEffect(() => {
    startDispatchAutoCycle();
    return () => {
      stopDispatchAutoCycle();
      if (dispatchPauseTimerRef.current) clearTimeout(dispatchPauseTimerRef.current);
    };
  }, [startDispatchAutoCycle, stopDispatchAutoCycle]);

  // =========================================================================
  // STATE: Section 4 - Circular Connected Technician Operational Hub
  // =========================================================================
  const [activeToolkitIndex, setActiveToolkitIndex] = useState<number>(0);
  const [isToolkitPaused, setIsToolkitPaused] = useState<boolean>(false);
  const [signatureDrawn, setSignatureDrawn] = useState<boolean>(false);
  const toolkitIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const toolkitPauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const toolkitParts = [
    {
      id: 'wo',
      stepNum: '01',
      angleDeg: -90, // Top
      label: 'Work Order Details',
      shortLabel: 'Work Order',
      tag: 'WO-9841 • SLA 120m',
      badge: 'P1 CRITICAL EMERGENCY',
      badgeColor: 'text-rose-400 bg-rose-500/20 border-rose-500/40',
      icon: FileText,
      image: '/images/fsm_toolkit_work_order.png',
      headline: 'WO-9841: Centrifugal Pump Inspection',
      subline: 'Aero Systems Mfg • Line 2 Assembly • Contract #CS-2026',
      primaryStat: { label: 'SLA REMAINING', val: '42 mins (of 120m)' },
      secondaryStat: { label: 'CONTACT PERSON', val: 'K. Schneider (Facility Dir)' },
      detailText: 'Symptom: Severe bearing vibration spike detected via IoT sensor telemetry on Main Line 2. Prevent catastrophic seizure before evening production shift.',
      actionNote: 'SAP Service Order WO-9841 Synced to Mobile'
    },
    {
      id: 'safety',
      stepNum: '02',
      angleDeg: -30, // Top Right
      label: 'Site Protocol & Access',
      shortLabel: 'Site Protocol',
      tag: 'Gate 4 Clearance',
      badge: 'BIOMETRIC PASS ACTIVE',
      badgeColor: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/40',
      icon: MapPin,
      image: '/images/fsm_toolkit_site_protocol.jpg',
      headline: 'Gate 4 Industrial Clearance & Protocol',
      subline: 'Aero Systems Security Facility • North Gate Entrance',
      primaryStat: { label: 'DOCK ACCESS CODE', val: '#8819 (Active 4h)' },
      secondaryStat: { label: 'LOTO ISOLATION', val: 'Breaker #CB-401 Locked' },
      detailText: 'Mandatory PPE: Hardhat, steel-toe boots, eye protection. Geofence arrival recorded at 10:28 AM. Pre-entry safety briefing verified.',
      actionNote: 'Facility Security Authenticated via S/4HANA'
    },
    {
      id: 'twin',
      stepNum: '03',
      angleDeg: 30, // Bottom Right
      label: 'Asset History Lineage',
      shortLabel: 'Asset Twin',
      tag: '14,892 Operating Hours',
      badge: 'SAP PM DIGITAL TWIN',
      badgeColor: 'text-blue-400 bg-blue-500/20 border-blue-500/40',
      icon: Activity,
      image: '/images/fsm_toolkit_asset_lineage.png',
      headline: 'Turbine Pump #EQ-88319 Digital Twin',
      subline: 'Line 2 Continuous Feed • Centrifugal Multi-Stage',
      primaryStat: { label: 'OPERATING HOURS', val: '14,892 Hrs' },
      secondaryStat: { label: 'MTBF BENCHMARK', val: '4,200 Hrs (Nominal)' },
      detailText: 'Maintenance Lineage: Bearing journal #2 showed thermal expansion warning during Q2 inspection. Replacement seal kit recommended during this cycle.',
      actionNote: 'Master Asset History Linked to Maintenance Order'
    },
    {
      id: 'manual',
      stepNum: '04',
      angleDeg: 90, // Bottom
      label: 'Step-by-Step Manual',
      shortLabel: 'Procedure',
      tag: 'Torque Spec: 145 Nm',
      badge: 'OEM STANDARD WORK',
      badgeColor: 'text-amber-400 bg-amber-500/20 border-amber-500/40',
      icon: Wrench,
      image: '/images/fsm_toolkit_step_manual.png',
      headline: 'Standard Work Procedure: Seal Replacement',
      subline: 'OEM Procedure SOP-8831 • Revision 4.2 Verified',
      primaryStat: { label: 'TORQUE SPEC', val: '145 Nm Exact' },
      secondaryStat: { label: 'PRESSURE GAUGE', val: '0.00 psi Verified' },
      detailText: 'Step 1: Depressurize chamber (0.00 psi). Step 2: Remove collar bolts in cross-diagonal sequence. Step 3: Install Seal Kit #SR-902 and torque bolts to 145 Nm.',
      actionNote: 'Interactive SOP Guided Workflow with Photo Check'
    },
    {
      id: 'parts',
      stepNum: '05',
      angleDeg: 150, // Bottom Left
      label: 'Truck Parts Scan',
      shortLabel: 'Parts Scan',
      tag: 'Kit #SR-902 Verified',
      badge: '100% BARCODE MATCH',
      badgeColor: 'text-cyan-400 bg-cyan-500/20 border-cyan-500/40',
      icon: QrCode,
      image: '/images/fsm_toolkit_truck_parts_scan.png',
      headline: 'Truck Consignment Inventory Verification',
      subline: 'Service Van 04 Bin B3 • SAP MM Material #MAT-009821',
      primaryStat: { label: 'BIN LOCATION', val: 'Van 04 - Bin B3' },
      secondaryStat: { label: 'STOCK DEDUCTION', val: 'Auto-Committed' },
      detailText: 'Seal Kit #SR-902 verified via optical barcode scanner. Automatic inventory deduction committed to SAP S/4HANA Materials Management upon installation.',
      actionNote: 'Instant Inventory Consumption Reconciliation'
    },
    {
      id: 'signoff',
      stepNum: '06',
      angleDeg: 210, // Top Left
      label: 'Digital Customer Sign-Off',
      shortLabel: 'Sign-Off',
      tag: 'On-Glass PDF Signature',
      badge: 'JOB COMPLETE (100%)',
      badgeColor: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/40',
      icon: PenTool,
      image: '/images/fsm_toolkit_customer_signoff.png',
      headline: 'Customer Acceptance & Service Sign-Off',
      subline: 'Post-Repair Vibration: 0.8 mm/s (PASSED) • CSAT: 5 Stars',
      primaryStat: { label: 'VIBRATION TEST', val: '0.8 mm/s (PASSED)' },
      secondaryStat: { label: 'INVOICE TRIGGER', val: 'SAP ACDOCA Ready' },
      detailText: 'Client Facility Director K. Schneider confirmed nominal machine operation. Digital signature captured on glass with automated PDF dispatch to SAP ERP.',
      actionNote: 'Direct Journal Entry to SAP Universal Journal'
    }
  ];

  const startToolkitAutoCycle = useCallback(() => {
    if (toolkitIntervalRef.current) clearInterval(toolkitIntervalRef.current);
    toolkitIntervalRef.current = setInterval(() => {
      setActiveToolkitIndex((prev) => (prev + 1) % 6);
    }, 2800);
  }, []);

  const stopToolkitAutoCycle = useCallback(() => {
    if (toolkitIntervalRef.current) {
      clearInterval(toolkitIntervalRef.current);
      toolkitIntervalRef.current = null;
    }
  }, []);

  const handleToolkitPartClick = (index: number) => {
    setActiveToolkitIndex(index);
    setIsToolkitPaused(true);
    stopToolkitAutoCycle();

    if (toolkitPauseTimerRef.current) {
      clearTimeout(toolkitPauseTimerRef.current);
    }

    toolkitPauseTimerRef.current = setTimeout(() => {
      setIsToolkitPaused(false);
      startToolkitAutoCycle();
    }, 5000);
  };

  useEffect(() => {
    startToolkitAutoCycle();
    return () => {
      stopToolkitAutoCycle();
      if (toolkitPauseTimerRef.current) clearTimeout(toolkitPauseTimerRef.current);
    };
  }, [startToolkitAutoCycle, stopToolkitAutoCycle]);

  // =========================================================================
  // STATE: Section 5 - The Digital Asset Telemetry Chamber
  // =========================================================================
  const [assetSimState, setAssetSimState] = useState<'nominal' | 'anomaly' | 'dispatched' | 'repaired'>('nominal');

  // =========================================================================
  // STATE: Section 6 - Service Ecosystem Nerve Center
  // =========================================================================
  const [activeEcosystemQuadrant, setActiveEcosystemQuadrant] = useState<'fleet' | 'enterprise'>('fleet');

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white min-h-screen selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      {/* =====================================================================
          SECTION 1: HERO — "THE SERVICE MISSION" (TACTICAL DISPATCH RADAR)
          ===================================================================== */}
      <section className="relative pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/30 dark:from-[#02050B] dark:via-[#060D1F] dark:to-[#09152E] border-b border-slate-200/80 dark:border-white/10 transition-colors">
        
        {/* Tactical Coordinates Header Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 p-2 px-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-slate-900 dark:text-white">FIELD DISPATCH SECTOR 04</span>
              <span>•</span>
              <span>LAT 37.7749&deg; N, LONG 122.4194&deg; W</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">48 FLEET UNITS ACTIVE</span>
              <span>•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">AVG RESPONSE: 18.4 MINS</span>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* LEFT: Bold Typography & Action Controls */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30">
                <Crosshair className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
                <span>SAP S/4HANA &amp; Field Service Management Native</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Field Service Management, Connected From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Dispatch to Resolution.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-semibold leading-relaxed">
                Empower field teams with intelligent scheduling, real-time visibility and connected service operations.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Connect customers, dispatchers, technicians, assets and service operations through one intelligent field service experience.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={() => onOpenContact('Field Service Management Consultation')}
                  className="btn-primary-gradient px-7 py-3.5 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:shadow-cyan-500/25 transition-all"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#journey"
                  className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-display text-xs font-bold uppercase tracking-wider transition-all text-center"
                >
                  Explore the Solution
                </a>
              </div>

              {/* Live Tactical Fleet Meter Tape */}
              <div className="pt-2 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10">
                  <span className="text-lg font-bold text-blue-600 dark:text-cyan-400 block font-display">65%</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Faster Dispatch</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10">
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400 block font-display">92.8%</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">First-Time Fix</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10">
                  <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 block font-display">98.6%</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Customer CSAT</span>
                </div>
              </div>

            </div>

            {/* RIGHT: "THE SERVICE MISSION" — TACTICAL DISPATCH SCREEN */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 dark:border-cyan-500/30 shadow-2xl bg-slate-950 group">
                
                {/* Visual Header Ribbon */}
                <div className="px-4 py-2 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-cyan-400 font-bold uppercase tracking-wider text-[11px]">
                      LIVE DISPATCH TELEMATICS
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    MISSION: #WO-9841
                  </span>
                </div>

                {/* Hero Mission Image with Animated SVG Route */}
                <div className="relative overflow-hidden bg-slate-950">
                  <img 
                    src="/images/fsm_hero_mission.jpg" 
                    alt="Field Service Mission: Field technician, service vehicle, customer industrial plant, route"
                    className="w-full h-[360px] sm:h-[400px] object-cover object-center transform group-hover:scale-[1.015] transition-transform duration-700"
                  />

                  {/* SVG Animated Route connecting Dispatch -> Travel -> Customer */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="heroPathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.95" />
                      </linearGradient>
                      <filter id="heroPathGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="glow" />
                        <feComposite in="SourceGraphic" in2="glow" operator="over" />
                      </filter>
                    </defs>

                    <path
                      d="M 100 370 Q 230 320 300 270 T 500 220 T 760 190"
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      className="opacity-40"
                    />

                    <path
                      d="M 100 370 Q 230 320 300 270 T 500 220 T 760 190"
                      fill="none"
                      stroke="url(#heroPathGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      filter="url(#heroPathGlow)"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* Real-Time Mission Event Log Card */}
                  <div className="absolute bottom-3 inset-x-3 bg-slate-950/92 backdrop-blur-md p-3 rounded-xl border border-cyan-500/40 text-white shadow-2xl space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${heroMissionStages[heroMissionStep].badgeClass}`}>
                          {heroMissionStages[heroMissionStep].status}
                        </span>
                        <span className="text-slate-400 text-[10px]">
                          {heroMissionStages[heroMissionStep].time}
                        </span>
                      </div>
                      <span className="text-cyan-400 text-[10px] font-bold">
                        {heroMissionStages[heroMissionStep].code}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                          {heroMissionStages[heroMissionStep].event}
                        </h4>
                        <p className="text-[11px] text-slate-300 font-normal leading-tight mt-0.5">
                          {heroMissionStages[heroMissionStep].action}
                        </p>
                      </div>

                      {/* Manual Stepper Controls */}
                      <div className="flex items-center gap-1 shrink-0 pt-0.5">
                        <button
                          onClick={() => {
                            setIsHeroAutoPlaying(false);
                            setHeroMissionStep((prev) => (prev === 0 ? 4 : prev - 1));
                          }}
                          className="p-1 rounded bg-white/10 hover:bg-white/20 text-white text-[10px] cursor-pointer"
                          aria-label="Previous step"
                        >
                          &larr;
                        </button>
                        <button
                          onClick={() => {
                            setIsHeroAutoPlaying(false);
                            setHeroMissionStep((prev) => (prev + 1) % 5);
                          }}
                          className="p-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold cursor-pointer"
                          aria-label="Next step"
                        >
                          &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Sub-strip: Vehicle & Telematics Footprint */}
                <div className="p-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Truck className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Unit #GFS-2024 • Telematics Active</span>
                  </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="h-3 w-3" /> SAP S/4HANA Linked
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: THE SPATIAL SERVICE JOURNEY (PANORAMIC EXPEDITION)
          ===================================================================== */}
      <section id="journey" className="py-14 sm:py-16 bg-white dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10 transition-colors relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Header & Status Indicator */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300 font-semibold">
                <Workflow className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
                <span>THE CONNECTED OPERATIONAL LIFECYCLE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">
                From Service Request to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Resolution.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Coordinate every stage of field service through one connected operational journey. Follow real-world execution across customer intake, dispatch, vehicle transit, on-site diagnostics, and financial closing.
              </p>
            </div>

            {/* Live Playback / Pause Indicator */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono transition-all ${
                isJourneyPaused
                  ? 'bg-amber-50 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/40 text-amber-800 dark:text-amber-300 shadow-sm'
                  : 'bg-blue-50 dark:bg-cyan-500/10 border-blue-200 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-300'
              }`}>
                {isJourneyPaused ? (
                  <>
                    <Pause className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 animate-pulse" />
                    <span>PAUSED ON STAGE {currentJourneyStage.step} • RESUMES IN 5s</span>
                  </>
                ) : (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-cyan-500"></span>
                    </span>
                    <span>AUTO-STAGE PLAYBACK (3.2s)</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* =================================================================
              1. 7-STAGE CLEAN STEP SWITCHER (SIMPLE & INTUITIVE)
              ================================================================= */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {journeyStages.map((stage, idx) => {
              const isActive = activeJourneyIndex === idx;
              const isPast = idx < activeJourneyIndex;
              const StageIcon = stage.icon;
              return (
                <button
                  key={stage.step}
                  onClick={() => handleJourneyStageClick(idx)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between relative group ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-500/25 scale-[1.02]'
                      : isPast
                      ? 'bg-white dark:bg-[#0B1528] border-emerald-300 dark:border-emerald-800/50 text-slate-800 dark:text-slate-200 hover:border-emerald-400'
                      : 'bg-white dark:bg-[#0B1528] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : isPast
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}>
                      {stage.step}
                    </span>
                    <StageIcon className={`h-4 w-4 ${
                      isActive
                        ? 'text-white'
                        : isPast
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-400 group-hover:text-blue-600'
                    }`} />
                  </div>

                  <div className="font-bold text-xs truncate">
                    {stage.title}
                  </div>

                  <div className={`text-[10px] font-mono truncate mt-0.5 ${
                    isActive
                      ? 'text-blue-100'
                      : isPast
                      ? 'text-emerald-600 dark:text-emerald-400 font-medium'
                      : 'text-slate-400'
                  }`}>
                    {isPast ? '✓ Completed' : isActive ? '● Active' : 'Step ' + stage.step}
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeJourneyBar"
                      className="absolute -bottom-1 left-3 right-3 h-1 bg-cyan-400 rounded-full shadow-sm"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* =================================================================
              2. THE MAIN SHOWCASE STAGE: SIMPLE & CLEAR WITH DEDICATED IMAGE
              ================================================================= */}
          <div className="rounded-3xl bg-white dark:bg-[#060D1F] border border-slate-200 dark:border-cyan-500/20 shadow-xl overflow-hidden p-5 sm:p-7 space-y-6">
            
            {/* Top Operational Status Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
                  STAGE {currentJourneyStage.step} OF 07: {currentJourneyStage.sector}
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-blue-600 dark:text-cyan-400 font-semibold">{currentJourneyStage.title}</span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <span className="hidden sm:inline">SAP Context: <strong className="text-slate-900 dark:text-white">{currentJourneyStage.sapContext}</strong></span>
                <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">{currentJourneyStage.kpi}</span>
              </div>
            </div>

            {/* Split Showcase Grid: Left = Dedicated Image / Right = Clear Stage Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* LEFT: Distinct, Dedicated Image for this Stage */}
              <div 
                onClick={() => handleJourneyStepNav('next')}
                className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner group cursor-pointer bg-slate-100 dark:bg-slate-900"
                title="Click image to advance to next stage (pauses 5s)"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentJourneyStage.image}
                    src={currentJourneyStage.image}
                    alt={currentJourneyStage.imageAlt}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-cover select-none group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </AnimatePresence>

                {/* Gentle Gradient for Tag Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none" />

                {/* Floating Left Chevron */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleJourneyStepNav('prev');
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 dark:bg-slate-900/90 hover:bg-blue-600 hover:text-white text-slate-800 dark:text-white shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all z-10 cursor-pointer"
                  title="Previous Stage"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Floating Right Chevron */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleJourneyStepNav('next');
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 dark:bg-slate-900/90 hover:bg-blue-600 hover:text-white text-slate-800 dark:text-white shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all z-10 cursor-pointer"
                  title="Next Stage"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Floating Top-Left Stage Badge */}
                <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/10 shadow-md text-xs font-mono flex items-center gap-2 pointer-events-none">
                  <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="font-bold text-slate-900 dark:text-white">STAGE {currentJourneyStage.step}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-blue-600 dark:text-cyan-400 font-semibold">{currentJourneyStage.title}</span>
                </div>

                {/* Floating Top-Right KPI Badge */}
                <div className="absolute top-3 right-3 bg-emerald-600 text-white font-mono text-xs font-bold px-3 py-1.5 rounded-xl shadow-md pointer-events-none flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{currentJourneyStage.kpi}</span>
                </div>

                {/* Bottom Centered Hint */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-slate-200/80 dark:border-white/10 text-[10px] font-mono text-slate-600 dark:text-slate-300 pointer-events-none shadow-sm flex items-center gap-1.5">
                  <span>Click image or arrows to advance • Pauses 5s for review</span>
                </div>
              </div>

              {/* RIGHT: Clear Operational Narrative & Execution Details */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                
                {/* Stage Title & Role */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-300 font-mono text-xs font-bold">
                      MILESTONE {currentJourneyStage.step} OF 07
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {currentJourneyStage.sector}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {currentJourneyStage.title}
                  </h3>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Enterprise Target:</span>
                      <strong className="text-blue-600 dark:text-cyan-400">{currentJourneyStage.sapContext}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Key Stakeholder:</span>
                      <strong className="text-slate-800 dark:text-slate-200">{currentJourneyStage.role}</strong>
                    </div>
                  </div>
                </div>

                {/* Summary Description */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Operational Execution Narrative
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {currentJourneyStage.summary}
                  </p>
                </div>

                {/* Verified Audit Checkpoint */}
                <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-800/40 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">
                    Automated Verification Checkpoint
                  </span>
                  <div className="flex items-start gap-2 text-xs font-mono text-emerald-900 dark:text-emerald-200">
                    <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-semibold leading-snug">{currentJourneyStage.checkpoint}</span>
                  </div>
                </div>

                {/* Live Telemetry Log Feed */}
                <div className="p-3 rounded-xl bg-slate-950 text-cyan-300 border border-slate-800 font-mono text-xs space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-slate-800">
                    <span className="text-cyan-400 font-bold uppercase flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Live Telemetry Ingest
                    </span>
                    <span>SAP S/4HANA SYNCED</span>
                  </div>
                  <div className="text-[11px] text-cyan-200 break-all leading-tight pt-0.5 font-mono">
                    {currentJourneyStage.telemetryLog}
                  </div>
                </div>

                {/* Stepper Navigation Footer */}
                <div className="flex items-center justify-between pt-1 text-xs font-mono">
                  <button
                    onClick={() => handleJourneyStepNav('prev')}
                    className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>

                  {/* 7 Little Dots Indicator */}
                  <div className="flex items-center gap-1.5">
                    {journeyStages.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => handleJourneyStageClick(dotIdx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          activeJourneyIndex === dotIdx
                            ? 'w-6 bg-blue-600 dark:bg-cyan-400'
                            : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                        }`}
                        title={`Go to Stage ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => handleJourneyStepNav('next')}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <span>Next Stage</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 3: INTELLIGENT SCHEDULING & DISPATCH (CLEAN LIGHT SHOWCASE)
          ===================================================================== */}
      <section id="dispatch" className="py-14 sm:py-16 bg-slate-50/80 dark:bg-[#070E1E] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Header & Status Indicator */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300 font-semibold">
                <Compass className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
                <span>AI MATCH CONDUIT • REAL-TIME DISPATCH</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">
                Put the Right Technician in the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Right Place.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                The dispatch engine evaluates technician skill certifications, real-time GPS proximity, open shift availability, and truck consignment inventory in milliseconds to assign the optimal engineer.
              </p>
            </div>

            {/* Live Auto-cycle & Pause Status Indicator */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
                isDispatchPaused 
                  ? 'bg-amber-50 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/40 text-amber-800 dark:text-amber-300 shadow-sm'
                  : 'bg-blue-50 dark:bg-cyan-500/10 border-blue-200 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-300'
              }`}>
                {isDispatchPaused ? (
                  <>
                    <Pause className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 animate-pulse" />
                    <span>PAUSED FOR INSPECTION • RESUMES IN 5s</span>
                  </>
                ) : (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-cyan-500"></span>
                    </span>
                    <span>AUTO-DISPATCH CYCLING (3.2s)</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Incident Selector Tabs (Clean, Bright Switcher) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {dispatchTickets.map((ticket, idx) => {
              const isSelected = selectedTicketId === ticket.id;
              return (
                <button
                  key={ticket.id}
                  onClick={() => handleTicketSelectWithPause(ticket.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white dark:bg-[#0B1528] border-blue-600 dark:border-cyan-400 shadow-md ring-2 ring-blue-500/15 scale-[1.01]'
                      : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`h-8 w-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                      isSelected 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}>
                      0{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {ticket.issue}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {ticket.client}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                    isSelected
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {ticket.optimalTech.score}% Match
                  </span>
                </button>
              );
            })}
          </div>

          {/* =================================================================
              THE MAIN SHOWCASE STAGE: BRIGHT, CLEAN & SIMPLE DISPATCH BAY
              ================================================================= */}
          <div className="rounded-3xl bg-white dark:bg-[#060D1F] border border-slate-200 dark:border-cyan-500/20 shadow-xl overflow-hidden p-5 sm:p-7 space-y-6">
            
            {/* Top Operational Context Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
                  ACTIVE DISPATCH TRAJECTORY
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-blue-600 dark:text-cyan-400 font-semibold">{currentTicket.zone}</span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <span>SLA Max: <strong className="text-slate-900 dark:text-white">{currentTicket.slaWindow}</strong></span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="text-slate-500 dark:text-slate-400">Click image to switch incident</span>
              </div>
            </div>

            {/* 1. Natural Bright Facility / Incident Visual (Clean, not dark!) */}
            <div 
              onClick={() => handleDispatchImageClick('next')}
              className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner group cursor-pointer bg-slate-100 dark:bg-slate-950"
              title="Click image to switch incident territory"
            >
              {/* Dynamic Image with Natural Lighting */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentTicket.image}
                  src={currentTicket.image}
                  alt={currentTicket.issue}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-cover select-none group-hover:scale-[1.02] transition-transform duration-500"
                />
              </AnimatePresence>

              {/* Gentle Vignette Gradient for Tag Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40 pointer-events-none" />

              {/* Floating Left & Right Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDispatchImageClick('prev');
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/95 dark:bg-slate-900/90 hover:bg-blue-600 hover:text-white text-slate-800 dark:text-white shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all z-10 cursor-pointer"
                title="Previous Incident"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDispatchImageClick('next');
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/95 dark:bg-slate-900/90 hover:bg-blue-600 hover:text-white text-slate-800 dark:text-white shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all z-10 cursor-pointer"
                title="Next Incident"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Floating Top Left Pill */}
              <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-white/10 shadow-md text-xs font-mono flex items-center gap-2 pointer-events-none">
                <Navigation className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
                <span className="font-bold text-slate-900 dark:text-white">{currentTicket.client}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 dark:text-slate-400">{currentTicket.facility}</span>
              </div>

              {/* Floating Top Right Match Badge */}
              <div className="absolute top-3 right-3 bg-emerald-600 text-white font-mono text-xs font-bold px-3 py-1.5 rounded-xl shadow-md pointer-events-none flex items-center gap-1.5">
                <Sparkles className="h-3 w-3" />
                <span>{currentTicket.optimalTech.score}% OPTIMAL MATCH</span>
              </div>

              {/* Bottom Centered Helpful Hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 dark:border-white/10 text-[10px] font-mono text-slate-600 dark:text-slate-300 pointer-events-none shadow-sm flex items-center gap-1.5">
                <span>Click image or arrows to switch incident • Pauses 5s for inspection</span>
              </div>
            </div>

            {/* 2. Three Clean, Simple Light Cards (Incident ➔ Match ➔ Engineer) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Card 1: Incoming Incident */}
              <div className="rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300 font-mono text-[10px] font-bold">
                    <AlertTriangle className="h-3 w-3 text-rose-600 dark:text-rose-400" />
                    {currentTicket.priority.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 font-bold">
                    INCIDENT ALARM
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {currentTicket.issue}
                  </h3>
                  <p className="text-xs font-mono text-rose-700 dark:text-rose-300 mt-0.5">
                    {currentTicket.client}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-rose-200/60 dark:border-rose-900/40 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Skill Needed:</span>
                    <strong className="text-slate-900 dark:text-white">{currentTicket.reqSkill.split('(')[0]}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Truck Parts:</span>
                    <strong className="text-emerald-700 dark:text-emerald-400">{currentTicket.requiredParts.split('(')[0]}</strong>
                  </div>
                </div>
              </div>

              {/* Card 2: AI Dispatch Matching Conduit */}
              <div className="rounded-2xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 p-4 sm:p-5 flex flex-col items-center justify-center text-center space-y-3">
                <span className="text-[10px] font-mono text-blue-700 dark:text-blue-300 font-bold uppercase tracking-wider">
                  Algorithm Match isolated
                </span>

                <div className="px-5 py-2 rounded-2xl bg-blue-600 text-white font-black text-xl font-mono shadow-sm flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span>{currentTicket.optimalTech.score}% MATCH</span>
                </div>

                <div className="space-y-1 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="text-emerald-700 dark:text-emerald-400 font-bold">✓ Skill Matrix Verified</div>
                  <div className="text-blue-800 dark:text-blue-300 font-bold">✓ Distance: {currentTicket.optimalTech.distance}</div>
                  <div className="text-slate-700 dark:text-slate-300">✓ Consignment in Van Bin</div>
                </div>
              </div>

              {/* Card 3: Dispatched Field Engineer */}
              <div className="rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-mono text-[10px] font-bold">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    DISPATCHED &amp; EN ROUTE
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                    {currentTicket.optimalTech.score}% FIT
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold font-mono text-base shadow-sm shrink-0">
                    {currentTicket.optimalTech.name[0]}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {currentTicket.optimalTech.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block">
                      {currentTicket.optimalTech.callsign} • {currentTicket.candidates[0].certLevel}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-emerald-200/60 dark:border-emerald-900/40 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Live Proximity:</span>
                    <strong className="text-emerald-700 dark:text-emerald-400">{currentTicket.optimalTech.distance}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Van Inventory:</span>
                    <strong className="text-slate-900 dark:text-white truncate max-w-[150px]">{currentTicket.candidates[0].truckParts}</strong>
                  </div>
                </div>
              </div>

            </div>

            {/* 3. Bottom Evaluated Candidate Pool Bar (Clean, Light) */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                  Evaluated Engineers:
                </span>
                {currentTicket.candidates.map((cand) => (
                  <button
                    key={cand.id}
                    onClick={() => handleTicketSelectWithPause(currentTicket.id)}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] transition-all cursor-pointer ${
                      cand.isOptimal
                        ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-600 font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {cand.name} ({cand.matchScore}%)
                  </button>
                ))}
              </div>

              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                Formula: Skill (40%) + Proximity (30%) + Shift (20%) + Parts (10%)
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 4: THE CONNECTED TECHNICIAN (CIRCULAR OPERATIONAL HUB)
          ===================================================================== */}
      <section className="py-14 sm:py-16 bg-white dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
                <Smartphone className="h-3.5 w-3.5" />
                <span>THE CONNECTED TECHNICIAN • 360° OPERATIONAL WHEEL</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">
                Give Technicians the Right Information,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Right Where Work Happens.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Connect technicians with work orders, customer information, asset history, service instructions and required parts while they are in the field. Information travels with the technician.
              </p>
            </div>

            {/* Live Auto-cycle & Pause Status Indicator */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${
                isToolkitPaused 
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
              }`}>
                {isToolkitPaused ? (
                  <>
                    <Pause className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                    <span>PAUSED ON SELECTION • RESUMES IN 5s</span>
                  </>
                ) : (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span>AUTO-CYCLING (2.8s)</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* MAIN CIRCULAR COCKPIT CONTAINER */}
          <div className="rounded-3xl bg-slate-900 border-2 border-slate-800 dark:border-cyan-500/20 p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden space-y-6">
            
            {/* Top Industrial Hardware Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-wide">KNOOVIQ FSM RUGGED 360°</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  LIVE TELEMETRY
                </span>
                <span className="hidden sm:inline-block text-[11px] text-slate-500">• Unit: Marcus Vance (Level 4 Mech)</span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1 text-cyan-400"><Wifi className="h-3.5 w-3.5" /> 5G Industrial</span>
                <span className="flex items-center gap-1 text-emerald-400"><BatteryCharging className="h-3.5 w-3.5" /> 94%</span>
                <span className="text-slate-300 bg-slate-800 px-2 py-0.5 rounded text-[10px]">SAP PM LINKED</span>
              </div>
            </div>

            {/* 3-COLUMN ORBITAL ARCHITECTURE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* LEFT COLUMN: Satellite Cards 01, 02, 03 (3 cols) */}
              <div className="lg:col-span-3 flex flex-col gap-3 order-2 lg:order-1">
                {toolkitParts.slice(0, 3).map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeToolkitIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleToolkitPartClick(idx)}
                      className={`relative text-left p-3.5 rounded-2xl border transition-all cursor-pointer group ${
                        isActive
                          ? 'bg-blue-600/90 text-white border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)] scale-[1.02] ring-1 ring-cyan-300'
                          : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-2 rounded-xl transition-colors ${
                            isActive ? 'bg-white/20 text-white' : 'bg-slate-900 text-cyan-400 group-hover:bg-slate-800'
                          }`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-white/10 text-cyan-200">
                                {item.stepNum}
                              </span>
                              <span className="font-bold text-xs tracking-tight block">
                                {item.label}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                              {item.tag}
                            </span>
                          </div>
                        </div>

                        {/* Right Pointer Indicator toward center circle */}
                        <div className={`hidden lg:flex items-center justify-center h-6 w-6 rounded-full transition-transform ${
                          isActive ? 'text-cyan-300 translate-x-1' : 'text-slate-600 opacity-40'
                        }`}>
                          <ChevronRight className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Micro Progress Bar on Active Item */}
                      {isActive && (
                        <div className="mt-2 w-full bg-white/20 h-1 rounded-full overflow-hidden">
                          <motion.div 
                            className="bg-cyan-300 h-full rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: isToolkitPaused ? 5 : 2.8, ease: 'linear' }}
                            key={`${activeToolkitIndex}-${isToolkitPaused}`}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* CENTER COLUMN: THE GRAND CIRCULAR OPERATIONAL HUB (6 cols) */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 py-2 sm:py-4">
                
                {/* Circular Stage Container with Radial Geometry */}
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
                  
                  {/* Outer Orbital Rotating Reticle Ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-[spin_60s_linear_infinite] pointer-events-none" />
                  
                  {/* Outer Secondary Tech Tick Ring */}
                  <div className="absolute inset-4 rounded-full border border-slate-700/60 pointer-events-none" />

                  {/* 6 Clickable Circular Orbital Satellite Pins on the Circumference */}
                  {toolkitParts.map((part, idx) => {
                    // Radius percentage for positioning around the center: ~42% from center (84% diameter)
                    const radius = 42; 
                    const angleRad = (part.angleDeg * Math.PI) / 180;
                    const leftPct = 50 + radius * Math.cos(angleRad);
                    const topPct = 50 + radius * Math.sin(angleRad);
                    const isActive = activeToolkitIndex === idx;
                    const PartIcon = part.icon;

                    return (
                      <button
                        key={`orbit-pin-${part.id}`}
                        onClick={() => handleToolkitPartClick(idx)}
                        style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'w-11 h-11 sm:w-12 sm:h-12 bg-blue-600 text-white border-2 border-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.8)] scale-110'
                            : 'w-8 h-8 sm:w-9 sm:h-9 bg-slate-900/90 text-slate-400 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105'
                        }`}
                        title={part.label}
                      >
                        {/* Ping radar wave when active */}
                        {isActive && (
                          <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping pointer-events-none" />
                        )}
                        <PartIcon className={`relative z-10 ${isActive ? 'h-5 w-5 text-cyan-200' : 'h-4 w-4'}`} />
                        
                        {/* Step number badge */}
                        <span className={`absolute -top-1.5 -right-1.5 text-[9px] font-mono font-bold px-1 rounded-full border ${
                          isActive 
                            ? 'bg-cyan-400 text-slate-950 border-cyan-200' 
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}>
                          {part.stepNum}
                        </span>
                      </button>
                    );
                  })}

                  {/* THE MIDDLE IMAGE VIEWPORT (ROUND / CIRCULAR PORTAL) */}
                  <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full overflow-hidden border-4 border-cyan-400/70 shadow-[0_0_50px_rgba(6,182,212,0.4)] bg-slate-950 group">
                    
                    {/* Dynamic Image tailored to currently active part */}
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={toolkitParts[activeToolkitIndex].image}
                        src={toolkitParts[activeToolkitIndex].image}
                        alt={toolkitParts[activeToolkitIndex].label}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.35 }}
                        className="w-full h-full object-cover object-center select-none"
                      />
                    </AnimatePresence>

                    {/* Subtle bottom-only gradient so image is clear and fully visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20 pointer-events-none" />

                    {/* Clean HUD Overlays without any center reticle or marks */}
                    <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-between items-center text-center text-white select-none pointer-events-none">
                      
                      {/* Top HUD Tag */}
                      <div className="pt-0.5">
                        <span className={`inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-md backdrop-blur-md ${toolkitParts[activeToolkitIndex].badgeColor}`}>
                          <Sparkles className="h-2.5 w-2.5" />
                          {toolkitParts[activeToolkitIndex].badge}
                        </span>
                      </div>

                      {/* Bottom Clean Capsule Caption */}
                      <div className="pb-1 max-w-[92%]">
                        <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 shadow-lg">
                          <span className="text-[9px] font-mono text-cyan-300 block font-bold uppercase tracking-wider">
                            STAGE {toolkitParts[activeToolkitIndex].stepNum} • {toolkitParts[activeToolkitIndex].shortLabel}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-white leading-tight truncate">
                            {toolkitParts[activeToolkitIndex].headline}
                          </h4>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT COLUMN: Satellite Cards 04, 05, 06 (3 cols) */}
              <div className="lg:col-span-3 flex flex-col gap-3 order-3">
                {toolkitParts.slice(3, 6).map((item, relIdx) => {
                  const idx = relIdx + 3;
                  const Icon = item.icon;
                  const isActive = activeToolkitIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleToolkitPartClick(idx)}
                      className={`relative text-left p-3.5 rounded-2xl border transition-all cursor-pointer group ${
                        isActive
                          ? 'bg-blue-600/90 text-white border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.3)] scale-[1.02] ring-1 ring-cyan-300'
                          : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        {/* Left Pointer Indicator toward center circle */}
                        <div className={`hidden lg:flex items-center justify-center h-6 w-6 rounded-full transition-transform ${
                          isActive ? 'text-cyan-300 -translate-x-1' : 'text-slate-600 opacity-40'
                        }`}>
                          <ChevronRight className="h-4 w-4 rotate-180" />
                        </div>

                        <div className="flex items-center gap-2.5 flex-1">
                          <div className={`p-2 rounded-xl transition-colors ${
                            isActive ? 'bg-white/20 text-white' : 'bg-slate-900 text-cyan-400 group-hover:bg-slate-800'
                          }`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-white/10 text-cyan-200">
                                {item.stepNum}
                              </span>
                              <span className="font-bold text-xs tracking-tight block">
                                {item.label}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                              {item.tag}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Micro Progress Bar on Active Item */}
                      {isActive && (
                        <div className="mt-2 w-full bg-white/20 h-1 rounded-full overflow-hidden">
                          <motion.div 
                            className="bg-cyan-300 h-full rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: isToolkitPaused ? 5 : 2.8, ease: 'linear' }}
                            key={`${activeToolkitIndex}-${isToolkitPaused}`}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* DETAILED ACTIVE STAGE TELEMETRY CONSOLE (Full Width Readout Below Circle) */}
            <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-4 sm:p-5 font-mono text-xs space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40 font-bold text-[11px]">
                    STAGE {toolkitParts[activeToolkitIndex].stepNum} OF 06
                  </span>
                  <span className="text-white font-bold text-sm">
                    {toolkitParts[activeToolkitIndex].headline}
                  </span>
                </div>
                <span className="text-slate-400 text-[11px]">
                  {toolkitParts[activeToolkitIndex].subline}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                
                {/* Metric 1 */}
                <div className="md:col-span-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[9px] uppercase tracking-wider">
                    {toolkitParts[activeToolkitIndex].primaryStat.label}:
                  </span>
                  <strong className="text-emerald-400 text-xs sm:text-sm font-bold block mt-0.5">
                    {toolkitParts[activeToolkitIndex].primaryStat.val}
                  </strong>
                </div>

                {/* Metric 2 */}
                <div className="md:col-span-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[9px] uppercase tracking-wider">
                    {toolkitParts[activeToolkitIndex].secondaryStat.label}:
                  </span>
                  <strong className="text-white text-xs sm:text-sm font-bold block mt-0.5">
                    {toolkitParts[activeToolkitIndex].secondaryStat.val}
                  </strong>
                </div>

                {/* Narrative Detail */}
                <div className="md:col-span-6 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between">
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {toolkitParts[activeToolkitIndex].detailText}
                  </p>
                  
                  {/* Interactive Sign-off feature if Stage 6 */}
                  {activeToolkitIndex === 5 && (
                    <div 
                      onClick={() => setSignatureDrawn(!signatureDrawn)}
                      className="mt-2 p-2 rounded-lg bg-slate-950 border border-dashed border-cyan-500/40 flex items-center justify-center text-slate-400 cursor-pointer hover:border-cyan-400 hover:text-cyan-300 transition-colors text-center"
                    >
                      {signatureDrawn ? (
                        <span className="text-emerald-400 font-serif italic text-sm">
                          ✓ Signed: K. Schneider (Facility Director) • 11:15 AM
                        </span>
                      ) : (
                        <span className="text-cyan-300 text-[11px]">
                          ✍ Click to simulate on-glass customer digital signature
                        </span>
                      )}
                    </div>
                  )}

                  <div className="pt-2 text-[10px] text-cyan-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-cyan-400 shrink-0" />
                    <span>{toolkitParts[activeToolkitIndex].actionNote}</span>
                  </div>
                </div>

              </div>

            </div>

            {/* QUICK-NAV STAGE SELECTOR DOTS & PLAY/PAUSE HINT */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs font-mono text-slate-400">
              <span className="text-[11px] text-slate-500">
                Click any part to inspect in detail • Auto-rotation resumes automatically in 5 seconds
              </span>

              <div className="flex items-center gap-1.5">
                {toolkitParts.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    onClick={() => handleToolkitPartClick(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeToolkitIndex === idx 
                        ? 'w-6 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]' 
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    title={`Stage 0${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 5: CONNECTED ASSETS & SERVICE (PROACTIVE DIGITAL TWIN BAY)
          ===================================================================== */}
      <section className="py-14 sm:py-16 bg-slate-50 dark:bg-[#050B17] border-b border-slate-200/80 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Header */}
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
              <Activity className="h-3.5 w-3.5" />
              <span>THE DIGITAL ASSET &amp; PREDICTIVE MAINTENANCE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">
              Turn Field Service Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Proactive Service.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Connect technicians, assets and service history to identify issues earlier and reduce unnecessary downtime. Information appears directly around the physical equipment.
            </p>
          </div>

          {/* Interactive 4-Step Proactive Story: Asset Signal -> Service Requirement -> Work Order -> Technician -> Resolution */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'nominal', step: '01', title: 'Normal Operation', desc: 'IoT Sensors Monitoring' },
              { id: 'anomaly', step: '02', title: 'Signal Anomaly', desc: 'Harmonic Spike Detected' },
              { id: 'dispatched', step: '03', title: 'Auto-Dispatched', desc: 'Tech Assigned with Part' },
              { id: 'repaired', step: '04', title: 'Zero Downtime', desc: 'Restored Before Failure' }
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setAssetSimState(st.id as any)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  assetSimState === st.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white dark:bg-[#070E1E] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-mono text-[9px] font-bold opacity-80">STEP {st.step}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </div>
                <h4 className="text-xs font-bold truncate">{st.title}</h4>
                <p className="text-[10px] opacity-75 truncate">{st.desc}</p>
              </button>
            ))}
          </div>

          {/* THE DIGITAL ASSET DIAGNOSTIC CHAMBER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            
            {/* Left Column (8 cols): Industrial Machine Visual Frame with Telemetry Probes */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-cyan-500/30 shadow-xl bg-slate-950 h-full flex flex-col justify-between">
                
                <div className="px-4 py-2.5 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-bold uppercase text-[11px]">
                    Main Line 2 Turbine Pump #EQ-88319
                  </span>
                  <span className="text-emerald-400 font-bold text-[10px]">
                    Live Telemetry Bus
                  </span>
                </div>

                <div className="relative overflow-hidden flex-1 flex items-center bg-slate-950">
                  <img 
                    src="/images/fsm_service_journey.jpg" 
                    alt="Connected Industrial Equipment"
                    className="w-full h-full object-cover max-h-[380px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* 4 Contextual Probe Badges Directly Around the Machine */}
                  <div className="absolute top-4 left-4 p-2 rounded-lg bg-slate-950/90 border border-cyan-500/40 text-white text-[10px] font-mono shadow-lg">
                    <span className="text-slate-400 block text-[8px] uppercase">Rotor Vibration Sensor</span>
                    <span className={`font-bold text-xs ${assetSimState === 'anomaly' ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}`}>
                      {assetSimState === 'anomaly' ? '2.8 mm/s [ANOMALY DETECTED]' : '0.8 mm/s [NOMINAL]'}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950/90 border border-cyan-500/40 text-white text-[10px] font-mono shadow-lg text-right">
                    <span className="text-slate-400 block text-[8px] uppercase">Bearing Temperature</span>
                    <span className="text-cyan-400 font-bold text-xs">71.4&deg;C (Safe Limit: 85&deg;C)</span>
                  </div>

                  <div className="absolute bottom-4 left-4 p-2 rounded-lg bg-slate-950/90 border border-cyan-500/40 text-white text-[10px] font-mono shadow-lg">
                    <span className="text-slate-400 block text-[8px] uppercase">Asset Runtime</span>
                    <span className="text-white font-bold text-xs">14,892 Operating Hours</span>
                  </div>

                  <div className="absolute bottom-4 right-4 p-2 rounded-lg bg-slate-950/90 border border-cyan-500/40 text-white text-[10px] font-mono shadow-lg text-right">
                    <span className="text-slate-400 block text-[8px] uppercase">Maintenance Coverage</span>
                    <span className="text-emerald-400 font-bold text-xs">Proactive SLA Active</span>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">SAP Predictive Asset Insights</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="h-3 w-3" /> Zero Unplanned Downtime Guaranteed
                  </span>
                </div>

              </div>
            </div>

            {/* Right Column (4 cols): Predictive Chain Reaction Simulator */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
              <div className="rounded-2xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 p-5 space-y-3.5 shadow-md flex-1 flex flex-col justify-between">
                
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                    PROACTIVE VALUE IMPACT
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Proactive vs. Break-Fix
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    By catching harmonic vibration anomalies 80 hours ahead, maintenance is performed during planned shift changes without stopping the production line.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Mode:</span>
                    <strong className="text-cyan-600 dark:text-cyan-400 uppercase">{assetSimState}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Unplanned Outage:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">0 Hours (Prevented)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Emergency Cost:</span>
                    <strong className="text-blue-600 dark:text-cyan-300">Saved $42,000</strong>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    onClick={() => setAssetSimState('anomaly')}
                    className="w-full py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer transition-colors"
                  >
                    Simulate Anomaly Spike
                  </button>
                  <button
                    onClick={() => setAssetSimState('repaired')}
                    className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer transition-colors"
                  >
                    Simulate Zero-Downtime Fix
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 6: CAPABILITIES & BUSINESS IMPACT (THE SERVICE ECOSYSTEM HUB)
          ===================================================================== */}
      <section className="py-14 sm:py-16 bg-white dark:bg-[#030712] border-b border-slate-200/80 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Header */}
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
              <Layers className="h-3.5 w-3.5" />
              <span>THE SERVICE ECOSYSTEM</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-display">
              Built to Keep Service{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Moving.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Connect people, processes, assets and service operations through one intelligent field service ecosystem.
            </p>
          </div>

          {/* DUAL-QUADRANT ECOSYSTEM HUB (FLEET OPERATIONS VS ENTERPRISE CORE) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Quadrant (6 cols): Fleet & Mobile Operations */}
            <div className="lg:col-span-6 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 p-5 space-y-3 shadow-md flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                  QUADRANT 01 • FIELD &amp; MOBILITY
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Mobile Field Enablement
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <Navigation className="h-4 w-4 text-cyan-500" />
                    <span>Intelligent Scheduling &amp; Routing</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    Dynamic multi-stop dispatch algorithm minimizing transit time and optimizing daily job completions.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <Smartphone className="h-4 w-4 text-blue-500" />
                    <span>Offline-First Rugged Mobile App</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    Empowers technicians on site with complete schematics, digital checklists, and on-glass customer signatures.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <QrCode className="h-4 w-4 text-purple-500" />
                    <span>Truck Consignment &amp; Part Barcode Scan</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    Real-time vehicle inventory tracking that automatically commits consumed parts to SAP S/4HANA stock.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                <span>Outcome: +2.4 Jobs Completed Per Day</span>
                <span>92.8% First-Time Fix</span>
              </div>
            </div>

            {/* Right Quadrant (6 cols): Enterprise Core Integration */}
            <div className="lg:col-span-6 rounded-2xl bg-slate-50 dark:bg-[#070E1E] border border-slate-200 dark:border-white/10 p-5 space-y-3 shadow-md flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                  QUADRANT 02 • SAP ENTERPRISE CORE
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Automated Enterprise Accounting
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <Cpu className="h-4 w-4 text-indigo-500" />
                    <span>Asset Digital Twin &amp; History</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    Maintains full functional locations, warranty terms, and lifecycle MTTR records in SAP Plant Maintenance.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <Globe className="h-4 w-4 text-emerald-500" />
                    <span>Automated Customer Communication</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    Sends automated geofenced ETA alerts, technician arrival notices, and signed digital service reports.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span>ACDOCA General Ledger Auto-Posting</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    Reconciles labor hours, vehicle mileage, and parts consumed into SAP Universal Journal for instant billing.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                <span>Outcome: 0 Manual Invoicing Delays</span>
                <span>98.6% Customer CSAT</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          SECTION 7: FINAL CTA — "THE SERVICE LOOP"
          ===================================================================== */}
      <section className="py-14 sm:py-16 bg-gradient-to-b from-slate-50 to-blue-50/50 dark:from-[#050B17] dark:to-[#02050B] border-b border-slate-200/80 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-white dark:bg-[#070E1E] border border-slate-200 dark:border-cyan-500/30 p-8 sm:p-12 shadow-2xl text-center space-y-6 relative overflow-hidden">
            
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="max-w-3xl mx-auto space-y-3 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-400/25 text-xs font-mono text-blue-700 dark:text-cyan-300">
                <RotateCcw className="h-3.5 w-3.5" />
                <span>CONTINUOUS SERVICE EXCELLENCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
                Turn Every Service Call Into a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Better Customer Experience.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Connect your field teams, assets and service operations with intelligent field service management. Close the loop between service execution, financial recognition, and customer loyalty.
              </p>
            </div>

            {/* CUSTOM DIMENSIONAL SERVICE LOOP ORBIT */}
            <div className="py-3 max-w-4xl mx-auto relative z-10">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0B1528] border border-slate-200 dark:border-white/10 shadow-inner">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-3">
                  The Continuous Dimensional Service Loop
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#070E1E] border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
                    <strong className="block text-[11px]">1. Request</strong>
                    <span className="text-[9px] text-slate-500">Incident Detected</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#070E1E] border border-blue-500/30 text-blue-700 dark:text-blue-300">
                    <strong className="block text-[11px]">2. Dispatch</strong>
                    <span className="text-[9px] text-slate-500">AI Resource Match</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#070E1E] border border-indigo-500/30 text-indigo-700 dark:text-indigo-300">
                    <strong className="block text-[11px]">3. Technician</strong>
                    <span className="text-[9px] text-slate-500">Mobile Telematics</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#070E1E] border border-purple-500/30 text-purple-700 dark:text-purple-300">
                    <strong className="block text-[11px]">4. On-Site</strong>
                    <span className="text-[9px] text-slate-500">Digital Toolkit</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#070E1E] border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                    <strong className="block text-[11px]">5. Resolution</strong>
                    <span className="text-[9px] text-slate-500">First-Time Fix</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#070E1E] border border-amber-500/30 text-amber-700 dark:text-amber-300">
                    <strong className="block text-[11px]">6. Satisfaction</strong>
                    <span className="text-[9px] text-slate-500">&rarr; Returns to Loop</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
              <button
                onClick={() => onOpenContact('Field Service Management Implementation')}
                className="btn-primary-gradient px-8 py-4 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:shadow-cyan-500/25 transition-all"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#journey"
                className="px-7 py-4 rounded-xl border border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-display text-xs font-bold uppercase tracking-wider transition-all"
              >
                Explore the Solution
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
