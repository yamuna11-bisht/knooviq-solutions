import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Award, 
  Users, 
  CheckCircle2,
  ArrowRight, 
  Briefcase, 
  Sparkles,
  Compass,
  GraduationCap,
  Lightbulb,
  Layers,
  Search,
  Target,
  ShieldCheck,
  Code,
  Database,
  Building2,
  ChevronRight,
  Clock,
  MapPin,
  X,
  Upload,
  FileText,
  AlertCircle,
  Loader2,
  ChevronDown,
  Send,
  Network
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AboutSubnav } from '../../components/AboutSubnav';
import { PhoneInput } from '../../components/PhoneInput';
import { submitJobApplication } from '../../lib/supabase';
import { validateResumeFile, JobApplicationSchema, validatePhone, validateEmail } from '../../lib/validation';
import { RateLimiter } from '../../lib/rateLimiter';

// SECTION 1: Why Grow With Knooviq? (Editorial 4 Aspects)
const GROWTH_ASPECTS = [
  {
    id: 'learning',
    title: 'Learning & Development',
    tagline: 'Continuous Knowledge Acceleration',
    description: 'Encourage continuous learning and development.',
    detail: 'From specialized technology workshops to architectural masterclasses, we create dedicated space for skills evolution and intellectual growth.',
    icon: GraduationCap,
    accent: '#0052CC',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'opportunities',
    title: 'Diverse Opportunities',
    tagline: 'Multi-Disciplinary Pathways',
    description: 'Explore opportunities across technology, SAP, business, and support functions.',
    detail: 'Work across complex enterprise landscapes, specialized advisory engagements, and modern cloud ecosystems that broaden your professional perspective.',
    icon: Layers,
    accent: '#00A3E0',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    tagline: 'A Culture of Purposeful Ideation',
    description: 'Work in an environment where ideas and new approaches are encouraged.',
    detail: 'Challenge conventions and craft modern solutions. We celebrate initiative, fresh methodologies, and engineers who build with lasting purpose.',
    icon: Lightbulb,
    accent: '#6366F1',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'growth',
    title: 'Professional Growth',
    tagline: 'Merit-Driven Advancement',
    description: 'Develop skills, take on new challenges, and grow professionally.',
    detail: 'Embrace meaningful ownership. Our progression models recognize impact, architectural depth, and leadership capability at every career stage.',
    icon: TrendingUp,
    accent: '#10B981',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
  }
];

// SECTION 2: Growth Journey Milestones (5 Stages - Vibrant Colorful Edition)
const JOURNEY_STAGES = [
  {
    step: '01',
    title: 'Discover',
    tag: 'EXPLORE POTENTIAL',
    description: 'Explore your interests, strengths, and opportunities.',
    icon: Search,
    highlight: 'Identify your strengths and align with high-impact initiatives.',
    colorHex: '#8B5CF6',
    gradient: 'from-violet-500 to-indigo-600',
    iconBg: 'bg-gradient-to-tr from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-500/30',
    inactiveIconBg: 'bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-300',
    badgeClass: 'bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border-violet-300 dark:border-violet-700',
    activeBorder: 'border-violet-500 dark:border-violet-400',
    accentLine: 'bg-gradient-to-r from-violet-500 to-indigo-500',
    activeGlow: 'shadow-[0_8px_30px_rgba(139,92,246,0.25)]',
    cardActiveBg: 'bg-violet-50/40 dark:bg-violet-950/20'
  },
  {
    step: '02',
    title: 'Learn',
    tag: 'DEEPEN EXPERTISE',
    description: 'Build knowledge through continuous learning and experience.',
    icon: GraduationCap,
    highlight: 'Expand domain knowledge and master advanced enterprise architectures.',
    colorHex: '#00A3E0',
    gradient: 'from-cyan-400 to-sky-500',
    iconBg: 'bg-gradient-to-tr from-cyan-500 to-sky-500 text-white shadow-md shadow-sky-500/30',
    inactiveIconBg: 'bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-300',
    badgeClass: 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-700',
    activeBorder: 'border-sky-500 dark:border-sky-400',
    accentLine: 'bg-gradient-to-r from-cyan-400 to-sky-500',
    activeGlow: 'shadow-[0_8px_30px_rgba(0,163,224,0.25)]',
    cardActiveBg: 'bg-sky-50/40 dark:bg-sky-950/20'
  },
  {
    step: '03',
    title: 'Contribute',
    tag: 'CREATE VALUE',
    description: 'Apply your skills and create meaningful impact.',
    icon: Target,
    highlight: 'Deliver mission-critical outcomes across client and organizational initiatives.',
    colorHex: '#10B981',
    gradient: 'from-emerald-400 to-teal-500',
    iconBg: 'bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/30',
    inactiveIconBg: 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-300',
    badgeClass: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
    activeBorder: 'border-emerald-500 dark:border-emerald-400',
    accentLine: 'bg-gradient-to-r from-emerald-400 to-teal-500',
    activeGlow: 'shadow-[0_8px_30px_rgba(16,185,129,0.25)]',
    cardActiveBg: 'bg-emerald-50/40 dark:bg-emerald-950/20'
  },
  {
    step: '04',
    title: 'Lead',
    tag: 'TAKE OWNERSHIP',
    description: 'Take ownership and embrace greater responsibilities.',
    icon: ShieldCheck,
    highlight: 'Guide teams, shape technical vision, and champion engineering standards.',
    colorHex: '#F59E0B',
    gradient: 'from-amber-400 to-orange-500',
    iconBg: 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30',
    inactiveIconBg: 'bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-300',
    badgeClass: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700',
    activeBorder: 'border-amber-500 dark:border-amber-400',
    accentLine: 'bg-gradient-to-r from-amber-400 to-orange-500',
    activeGlow: 'shadow-[0_8px_30px_rgba(245,158,11,0.25)]',
    cardActiveBg: 'bg-amber-50/40 dark:bg-amber-950/20'
  },
  {
    step: '05',
    title: 'Grow',
    tag: 'ENDURING IMPACT',
    description: 'Build a long-term and rewarding professional journey.',
    icon: Award,
    highlight: 'Realize your professional potential as an influential enterprise leader.',
    colorHex: '#EC4899',
    gradient: 'from-blue-600 via-purple-600 to-pink-500',
    iconBg: 'bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-md shadow-pink-500/30',
    inactiveIconBg: 'bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-300',
    badgeClass: 'bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border-pink-300 dark:border-pink-700',
    activeBorder: 'border-pink-500 dark:border-pink-400',
    accentLine: 'bg-gradient-to-r from-purple-500 to-pink-500',
    activeGlow: 'shadow-[0_8px_30px_rgba(236,72,153,0.25)]',
    cardActiveBg: 'bg-pink-50/40 dark:bg-pink-950/20'
  }
];

// SECTION 3: Vacancy Data Model & Listings (Explore Career Opportunities)
export interface VacancyItem {
  id: string;
  title: string;
  category: 'delivery' | 'sales' | 'marketing';
  specialization?: 'sap' | 'network' | 'software';
  experience?: string;
  minYears?: number;
  location: string;
}

export const VACANCIES: VacancyItem[] = [
  // =========================================================================
  // 1. DELIVERY & TECHNOLOGY — SAP & Enterprise Solutions (14 Roles)
  // Mandatory: Minimum 4 years of relevant professional experience
  // =========================================================================
  { id: 'sap-1', title: 'SAP RCO Consultant', category: 'delivery', specialization: 'sap', experience: '4 Years', minYears: 4, location: 'India' },
  { id: 'sap-2', title: 'SAP RCO Consultant', category: 'delivery', specialization: 'sap', experience: '5 Years', minYears: 5, location: 'India' },
  { id: 'sap-3', title: 'SAP RCO Public Cloud Consultant', category: 'delivery', specialization: 'sap', experience: '8 Years', minYears: 8, location: 'India' },
  { id: 'sap-4', title: 'SAP SD Public Cloud Consultant', category: 'delivery', specialization: 'sap', experience: '7 Years', minYears: 7, location: 'India' },
  { id: 'sap-5', title: 'SAP PPQM MM SME', category: 'delivery', specialization: 'sap', experience: '10 Years', minYears: 10, location: 'India' },
  { id: 'sap-6', title: 'SAP Project Manager', category: 'delivery', specialization: 'sap', experience: '12 Years', minYears: 12, location: 'India' },
  { id: 'sap-7', title: 'SAP Pre Sales Delivery', category: 'delivery', specialization: 'sap', experience: '15 Years', minYears: 15, location: 'India' },
  { id: 'sap-8', title: 'SAP ABAP BTP Lead', category: 'delivery', specialization: 'sap', experience: '8 Years', minYears: 8, location: 'India' },
  { id: 'sap-9', title: 'SAP SF Deliver Manager', category: 'delivery', specialization: 'sap', experience: '10 Years', minYears: 10, location: 'India' },
  { id: 'sap-10', title: 'Project Coordinator Arabic Speaking', category: 'delivery', specialization: 'sap', experience: '4 Years', minYears: 4, location: 'India' },
  { id: 'sap-11', title: 'AI Engineer', category: 'delivery', specialization: 'sap', experience: '4 Years', minYears: 4, location: 'India' },
  { id: 'sap-12', title: 'SAP FPA Consultant', category: 'delivery', specialization: 'sap', experience: '4 Years', minYears: 4, location: 'India' },
  { id: 'sap-13', title: 'SAP Project Coordinator', category: 'delivery', specialization: 'sap', experience: '4 Years', minYears: 4, location: 'India' },
  { id: 'sap-14', title: 'SAP MMIS Retail Consultant', category: 'delivery', specialization: 'sap', experience: '8 Years', minYears: 8, location: 'India' },

  // =========================================================================
  // 1. DELIVERY & TECHNOLOGY — Network Engineering (11 Roles)
  // =========================================================================
  { id: 'net-1', title: 'Network Engineer', category: 'delivery', specialization: 'network', location: 'India' },
  { id: 'net-2', title: 'Network Support Engineer', category: 'delivery', specialization: 'network', location: 'India' },
  { id: 'net-3', title: 'Network Administrator', category: 'delivery', specialization: 'network', location: 'India' },
  { id: 'net-4', title: 'Network Security Engineer', category: 'delivery', specialization: 'network', location: 'India' },
  { id: 'net-5', title: 'Cloud Network Engineer', category: 'delivery', specialization: 'network', location: 'India' },
  { id: 'net-6', title: 'NOC Engineer (Network Operations Center)', category: 'delivery', specialization: 'network', location: 'India' },
  { id: 'net-7', title: 'Routing & Switching Engineer', category: 'delivery', specialization: 'network', location: 'India' },
  { id: 'net-8', title: 'Wireless Network Engineer', category: 'delivery', specialization: 'network', location: 'India' },
  { id: 'net-9', title: 'Network Infrastructure Engineer', category: 'delivery', specialization: 'network', location: 'India' },
  { id: 'net-10', title: 'Network Architect', category: 'delivery', specialization: 'network', location: 'India' },
  { id: 'net-11', title: 'Firewall Engineer', category: 'delivery', specialization: 'network', location: 'India' },

  // =========================================================================
  // 1. DELIVERY & TECHNOLOGY — Software Development (Exactly 1 Role)
  // =========================================================================
  { id: 'dev-1', title: 'Software Developer', category: 'delivery', specialization: 'software', location: 'India' },

  // =========================================================================
  // 2. SALES — 4 Entries
  // =========================================================================
  { id: 'sales-1', title: 'Sales Manager', category: 'sales', experience: '4 Years', minYears: 4, location: 'India' },
  { id: 'sales-2', title: 'Sales Development Representative', category: 'sales', location: 'India' },
  { id: 'sales-3', title: 'Business Development Representative', category: 'sales', location: 'India' },
  { id: 'sales-4', title: 'Sales Executive', category: 'sales', location: 'India' },

  // =========================================================================
  // 3. MARKETING — 4 Entries
  // =========================================================================
  { id: 'mkt-1', title: 'Growth Marketing', category: 'marketing', experience: '2 Years', minYears: 2, location: 'India' },
  { id: 'mkt-2', title: 'Digital Marketing Executive', category: 'marketing', location: 'India' },
  { id: 'mkt-3', title: 'SEO (Search Engine Optimization) Specialist', category: 'marketing', location: 'India' },
  { id: 'mkt-4', title: 'Social Media Manager', category: 'marketing', location: 'India' }
];

export const GrowWithUsPage: React.FC<{ onOpenContact: (topic?: string) => void }> = ({ onOpenContact }) => {
  const [activeStage, setActiveStage] = useState(0);

  // Vacancy Category & Specialization Filter States
  const [selectedCategory, setSelectedCategory] = useState<'delivery' | 'sales' | 'marketing'>('delivery');
  const [selectedSpecialization, setSelectedSpecialization] = useState<'sap' | 'network' | 'software'>('sap');
  const [selectedVacancy, setSelectedVacancy] = useState<VacancyItem | null>(null);

  // Comprehensive Apply Now Form State (All 13 fields)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    experienceLevel: 'Experienced' as 'Fresher' | 'Experienced',
    totalExperience: '',
    education: '',
    noticePeriod: '',
    portfolioLinkedin: '',
    coverLetter: '',
    privacyConsent: false,
    honeypot: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{ name: string; position: string } | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const modalCardRef = React.useRef<HTMLDivElement>(null);

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
    if (submitStatus === 'success') {
      setSubmitStatus('idle');
      setSuccessInfo(null);
    }
  };

  // Lock body scroll & pause Lenis smooth scroll while modal is active
  React.useEffect(() => {
    const lenis = (window as any).__lenis;
    if (isApplyModalOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) {
        try { lenis.stop(); } catch (_) {}
      }
      if (modalCardRef.current) {
        modalCardRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
      if (lenis) {
        try { lenis.start(); } catch (_) {}
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (lenis) {
        try { lenis.start(); } catch (_) {}
      }
    };
  }, [isApplyModalOpen]);

  // Comprehensive Mouse Wheel & Mobile Touch Scrolling for Laptop and Mobile
  React.useEffect(() => {
    if (!isApplyModalOpen) return;

    const card = modalCardRef.current;
    if (!card) return;

    // Direct wheel handler: intercept wheel events anywhere over modal card or backdrop
    // and smoothly scroll the modal card down or up
    const handleWheel = (e: WheelEvent) => {
      // Allow native scroll inside textarea if it has room to scroll in this direction
      if (e.target instanceof HTMLTextAreaElement) {
        const atTop = e.target.scrollTop <= 0 && e.deltaY < 0;
        const atBottom = e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight && e.deltaY > 0;
        if (!atTop && !atBottom) {
          return;
        }
      }

      // Normalize delta across Windows wheel, Mac trackpad, and browsers
      const delta = e.deltaMode === 1 ? e.deltaY * 24 : e.deltaMode === 2 ? e.deltaY * 400 : e.deltaY;
      
      // Stop background page jitter
      if (e.cancelable) {
        e.preventDefault();
      }
      
      // Scroll the modal card directly
      card.scrollTop += delta;
    };

    // Attach with passive: false so e.preventDefault() works cleanly
    card.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Touch handler for mobile: allows touch swipe anywhere on backdrop or margins to scroll modal
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!card.contains(e.target as Node)) {
        if (e.touches && e.touches.length > 0) {
          const currentY = e.touches[0].clientY;
          const diff = touchStartY - currentY;
          card.scrollTop += diff;
          touchStartY = currentY;
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      card.removeEventListener('wheel', handleWheel);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isApplyModalOpen]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isApplyModalOpen) {
        handleCloseApplyModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isApplyModalOpen]);

  // Dynamically calculated vacancy counts
  const counts = useMemo(() => {
    return {
      delivery: VACANCIES.filter((v) => v.category === 'delivery').length,
      sales: VACANCIES.filter((v) => v.category === 'sales').length,
      marketing: VACANCIES.filter((v) => v.category === 'marketing').length,
      sap: VACANCIES.filter((v) => v.category === 'delivery' && v.specialization === 'sap').length,
      network: VACANCIES.filter((v) => v.category === 'delivery' && v.specialization === 'network').length,
      software: VACANCIES.filter((v) => v.category === 'delivery' && v.specialization === 'software').length,
      total: VACANCIES.length,
    };
  }, []);

  // Filtered vacancies based on active category & specialization
  const displayedVacancies = useMemo(() => {
    if (selectedCategory === 'delivery') {
      return VACANCIES.filter(
        (v) => v.category === 'delivery' && v.specialization === selectedSpecialization
      );
    }
    return VACANCIES.filter((v) => v.category === selectedCategory);
  }, [selectedCategory, selectedSpecialization]);

  // When user clicks 'Apply Now' on any vacancy card in Section 3
  const handleApplyFromCard = (vacancy: VacancyItem) => {
    setSelectedVacancy(vacancy);
    setFormData((prev) => ({
      ...prev,
      position: vacancy.title,
      experienceLevel: vacancy.specialization === 'sap' ? 'Experienced' : (prev.experienceLevel || 'Experienced'),
      totalExperience: vacancy.experience || prev.totalExperience,
    }));
    setFormErrors((prev) => {
      const next = { ...prev };
      delete next.position;
      return next;
    });
    setSubmitStatus('idle');
    setErrorMessage(null);
    setIsApplyModalOpen(true);
  };

  const handlePositionSelect = (posTitle: string) => {
    const isSap = VACANCIES.some(v => v.specialization === 'sap' && v.title === posTitle);
    const matchedVac = VACANCIES.find(v => v.title === posTitle);
    
    setFormData((prev) => ({
      ...prev,
      position: posTitle,
      experienceLevel: isSap ? 'Experienced' : prev.experienceLevel,
      totalExperience: isSap && matchedVac?.experience ? matchedVac.experience : prev.totalExperience,
    }));

    setFormErrors((prev) => {
      const next = { ...prev };
      delete next.position;
      return next;
    });
  };

  const handleFileSelect = (file: File) => {
    const validation = validateResumeFile(file);
    if (!validation.isValid) {
      setFormErrors((prev) => ({
        ...prev,
        resumeFile: validation.error || 'Invalid file format or size.',
      }));
      setResumeFile(null);
    } else {
      setResumeFile(file);
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next.resumeFile;
        return next;
      });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    setErrorMessage(null);

    // 1. Prevent duplicate submissions
    if (isSubmitting) return;

    // 2. Validate all 13 fields
    const errors: Record<string, string> = {};

    // 1. Full Name
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters.';
    } else if (formData.fullName.trim().length > 100) {
      errors.fullName = 'Full name cannot exceed 100 characters.';
    }

    // 2. Email Address
    const emailErr = validateEmail(formData.email.trim());
    if (emailErr) {
      errors.email = emailErr;
    }

    // 3. Phone Number with country code
    const phoneErr = validatePhone(formData.phone.trim());
    if (phoneErr) {
      errors.phone = phoneErr;
    }

    // 4. Current Location
    if (!formData.location.trim() || formData.location.trim().length < 2) {
      errors.location = 'Please specify your current location (City, State / Country).';
    }

    // 5. Position Applying For
    if (!formData.position.trim()) {
      errors.position = 'Please select the position you are applying for.';
    }

    // 6. Experience Level
    if (!formData.experienceLevel) {
      errors.experienceLevel = 'Please select your experience level (Fresher or Experienced).';
    }

    // 7. Total Experience
    if (formData.experienceLevel === 'Experienced' && !formData.totalExperience.trim()) {
      errors.totalExperience = 'Please specify your total years of professional experience.';
    }

    // SAP Specific Rule: Minimum 4 years for SAP roles
    const isSapRole = VACANCIES.some(v => v.specialization === 'sap' && v.title === formData.position);
    if (isSapRole) {
      if (formData.experienceLevel === 'Fresher') {
        errors.experienceLevel = 'A minimum of 4 years of experience is mandatory for SAP & Enterprise Solutions roles.';
      } else if (formData.totalExperience) {
        const match = formData.totalExperience.match(/\d+/);
        const years = match ? parseInt(match[0], 10) : 0;
        if (years < 4 && !['4 - 6 Years', '6 - 8 Years', '8 - 10 Years', '10 - 12 Years', '12 - 15 Years', '15+ Years'].includes(formData.totalExperience)) {
          errors.totalExperience = 'SAP positions require a minimum of 4 years of relevant professional experience.';
        }
      }
    }

    // 8. Highest Qualification
    if (!formData.education.trim()) {
      errors.education = 'Please select your highest educational qualification.';
    }

    // 10. Resume / CV Upload
    if (!resumeFile) {
      errors.resumeFile = 'Please attach your resume (.PDF, .DOC, or .DOCX format, max 5 MB).';
    } else {
      const fileValidation = validateResumeFile(resumeFile);
      if (!fileValidation.isValid) {
        errors.resumeFile = fileValidation.error || 'Invalid resume file format or size.';
      }
    }

    // 11. LinkedIn Profile (optional)
    if (formData.portfolioLinkedin.trim()) {
      try {
        const url = new URL(formData.portfolioLinkedin.trim());
        if (!url.protocol.startsWith('http')) {
          errors.portfolioLinkedin = 'Please enter a valid URL starting with http:// or https://';
        }
      } catch {
        errors.portfolioLinkedin = 'Please enter a valid URL (e.g. https://linkedin.com/in/username).';
      }
    }

    // 13. Privacy Policy Consent
    if (!formData.privacyConsent) {
      errors.privacyConsent = 'You must accept the privacy policy to submit your application.';
    }

    // Anti-bot honeypot
    if (formData.honeypot && formData.honeypot.length > 0) {
      setErrorMessage('Automated bot submission detected.');
      return;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstField = Object.keys(errors)[0];
      const el = document.getElementById(`field-${firstField}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Rate Limiter Check
    const rateCheck = RateLimiter.checkRateLimit('job_application', { maxAttempts: 3, windowMs: 60000 });
    if (!rateCheck.allowed) {
      setErrorMessage(`Too many submission attempts. Please wait ${rateCheck.remainingWaitSec}s before retrying.`);
      return;
    }

    setIsSubmitting(true);

    try {
      const expString = formData.experienceLevel === 'Fresher'
        ? 'Fresher (0 - 1 Year)'
        : formData.totalExperience;

      const formattedNotes = [
        `Experience Level: ${formData.experienceLevel}`,
        formData.noticePeriod ? `Notice Period: ${formData.noticePeriod}` : null,
        formData.coverLetter ? `\nCover Letter / Message:\n${formData.coverLetter}` : null
      ].filter(Boolean).join('\n');

      const submittedName = formData.fullName.trim();
      const submittedPosition = formData.position.trim();

      const res = await submitJobApplication(
        {
          full_name: submittedName,
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          position: submittedPosition,
          experience: expString,
          education: formData.education.trim(),
          location: formData.location.trim(),
          portfolio_linkedin: formData.portfolioLinkedin.trim() || undefined,
          cover_letter: formattedNotes || undefined,
          cover_note: formattedNotes || undefined,
        },
        resumeFile || undefined
      );

      if (res.success) {
        setSuccessInfo({ name: submittedName, position: submittedPosition });
        setSubmitStatus('success');
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.6 }
        });

        // Clear the form after successful submission only!
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          position: '',
          experienceLevel: 'Experienced',
          totalExperience: '',
          education: '',
          noticePeriod: '',
          portfolioLinkedin: '',
          coverLetter: '',
          privacyConsent: false,
          honeypot: '',
        });
        setResumeFile(null);
        setFormErrors({});
      } else {
        setSubmitStatus('error');
        setErrorMessage(res.error || 'Failed to submit application. Please check your connection and try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred while transmitting your application.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-0 bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden font-sans">
      
      {/* Background Aurora */}
      <div className="aurora-sphere-1 top-20 left-1/4 bg-[#00A3E0]/15 dark:bg-[#00F0FF]/15 pointer-events-none" />
      <div className="aurora-sphere-2 top-96 right-10 bg-[#6366F1]/15 dark:bg-[#8B5CF6]/20 pointer-events-none" />

      {/* =========================================================================
          HERO SECTION — EXACT SAME LAYOUT, ONLY HERO IMAGE REPLACED
          Concept: CAREER GROWTH + PEOPLE + LEARNING + OPPORTUNITY
          Replaced with modern corporate visual of diverse professionals collaborating
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-20 min-h-[540px] lg:h-[580px] lg:min-h-[580px] flex items-center overflow-hidden">
        {/* Clean Background Image with Directional Left Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/grow_with_us_hero.jpg" 
            alt="Careers and Professional Growth at KNOOVIQ"
            className="w-full h-full object-cover object-[center_28%]"
          />
          {/* Mild Contrast Scrim: Clear professional culture visual with soft text shading */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide bg-slate-900/90 border border-emerald-400/40 text-emerald-300 mb-5 backdrop-blur-md shadow-2xl"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
              <span className="font-mono uppercase text-xs tracking-wider font-bold">Engineering Talent & High-Velocity Careers</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-[1.15] mb-6"
            >
              Grow <span className="hero-gradient-cyan font-black">With Us</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] leading-relaxed font-sans mb-8 max-w-3xl"
            >
              Where elite enterprise architects and ambitious technologists solve mission-critical challenges. We nurture continuous learning, foster architectural leadership, and champion merit-driven career progression.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>100% Sponsored Certifications</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Global Multi-Entity Engagements</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-white/20 shadow-xl backdrop-blur-md text-xs font-bold text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>High-Trust Autonomous Culture</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shared Sub-Navigation Bar */}
      <AboutSubnav activeTabTitle="Grow With Us" />

      {/* =========================================================================
          SECTION 1 — WHY GROW WITH KNOOVIQ? (COMPACT 4-COLUMN EDITION)
          Heading: “Why Grow With Knooviq?”
          Supporting: “Create opportunities to learn, contribute, innovate, and build a meaningful professional journey with Knooviq.”
          Compact, elegant 4-column layout for optimal vertical space
          ========================================================================= */}
      <section className="py-14 sm:py-16 relative bg-white dark:bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200 dark:border-white/10 shadow-xs mb-3.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Career Foundation</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Why Grow With Knooviq?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed"
            >
              Create opportunities to learn, contribute, innovate, and build a meaningful professional journey with Knooviq.
            </motion.p>
          </div>

          {/* Compact 4-Column Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GROWTH_ASPECTS.map((aspect, idx) => {
              const IconComponent = aspect.icon;
              return (
                <motion.div
                  key={aspect.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.02] p-6 flex flex-col justify-between hover:border-[#0052CC]/50 dark:hover:border-cyan-400/50 hover:bg-white dark:hover:bg-white/[0.04] transition-all duration-300 shadow-xs hover:shadow-lg group relative overflow-hidden"
                >
                  {/* Top Glowing Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0052CC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-11 w-11 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-[#0052CC] dark:text-cyan-400 flex items-center justify-center shadow-xs group-hover:bg-[#0052CC] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-2.5 py-0.5 rounded-full">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0052CC] dark:text-cyan-400 block mb-1.5">
                      {aspect.tagline}
                    </span>

                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                      {aspect.title}
                    </h3>

                    <p className="text-xs text-slate-700 dark:text-slate-200 font-semibold mb-2 leading-snug">
                      {aspect.description}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                      {aspect.detail}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#0A2540] dark:text-cyan-400">
                    <span>Growth Pillar</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — YOUR GROWTH JOURNEY (VIBRANT COLORFUL INTERACTIVE TIMELINE)
          Heading: “Your Growth Journey”
          Stages: DISCOVER ↓ LEARN ↓ CONTRIBUTE ↓ LEAD ↓ GROW
          Design: Multi-color gradient timeline with distinct vibrant color palettes per milestone
          ========================================================================= */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-[#FAFBFD] dark:bg-[#060D1A] border-y border-slate-200/90 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200/90 dark:border-white/10 shadow-xs mb-4"
            >
              <TrendingUp className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>Career Trajectory</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Your Growth Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              A purposeful roadmap designed to cultivate your skills, expand your technical depth, and empower your leadership.
            </motion.p>
          </div>

          {/* Interactive Multi-Color Timeline Track (Desktop Horizontal / Mobile Vertical) */}
          <div className="relative mt-8">
            
            {/* Desktop Connecting Multi-Color Gradient Rail */}
            <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[4px] rounded-full bg-slate-200/90 dark:bg-slate-800 z-0 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 via-sky-400 via-emerald-400 via-amber-400 to-pink-500 transition-all duration-500 relative"
                style={{ width: `${(activeStage / (JOURNEY_STAGES.length - 1)) * 100}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_12px_#00F0FF]" />
              </div>
            </div>

            {/* 5 Distinctly Colorful Milestone Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
              {JOURNEY_STAGES.map((stage, idx) => {
                const IconComponent = stage.icon;
                const isActive = activeStage === idx;
                const isPassed = activeStage >= idx;

                return (
                  <motion.div
                    key={stage.step}
                    onMouseEnter={() => setActiveStage(idx)}
                    onClick={() => setActiveStage(idx)}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer border relative overflow-hidden ${
                      isActive
                        ? `bg-white dark:bg-slate-900 ${stage.activeBorder} ${stage.activeGlow} ${stage.cardActiveBg}`
                        : isPassed
                        ? 'bg-white/95 dark:bg-slate-900/70 border-slate-200 dark:border-white/15 shadow-xs'
                        : 'bg-white/60 dark:bg-slate-900/40 border-slate-200/60 dark:border-white/5 opacity-80'
                    }`}
                  >
                    {/* Top Vibrant Gradient Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-[3px] ${stage.accentLine} transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`} />

                    <div>
                      {/* Milestone Number & Colorful Icon Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? stage.iconBg
                            : stage.inactiveIconBg
                        }`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${
                          isActive
                            ? stage.badgeClass
                            : 'bg-slate-50 dark:bg-white/5 text-slate-400 border-slate-200/60 dark:border-white/5'
                        }`}>
                          {stage.step}
                        </span>
                      </div>

                      <span 
                        className="font-mono text-[10px] font-bold uppercase tracking-wider block mb-1"
                        style={{ color: stage.colorHex }}
                      >
                        {stage.tag}
                      </span>

                      <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                        {stage.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold mb-2 leading-snug">
                        {stage.description}
                      </p>

                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                        {stage.highlight}
                      </p>
                    </div>

                    <div 
                      className="pt-4 mt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono font-bold"
                      style={{ color: isActive ? stage.colorHex : undefined }}
                    >
                      <span className={isActive ? '' : 'text-slate-400'}>Phase {stage.step}</span>
                      <span className={isActive ? 'opacity-100' : 'opacity-0'}>Active ✓</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — EXPLORE CAREER OPPORTUNITIES
          Section Label: CAREER OPPORTUNITIES
          Heading: “Explore Career Opportunities”
          Subtitle: “Find the right opportunity to showcase your expertise, contribute to meaningful projects, and grow with Knooviq.”
          ========================================================================= */}
      <section className="py-20 sm:py-24 relative bg-white dark:bg-[#030712] border-t border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-slate-100 dark:bg-white/10 text-[#0A2540] dark:text-cyan-300 border border-slate-200 dark:border-white/10 shadow-xs mb-4"
            >
              <Briefcase className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400" />
              <span>CAREER OPPORTUNITIES</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Explore Career Opportunities
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Find the right opportunity to showcase your expertise, contribute to meaningful projects, and grow with Knooviq.
            </motion.p>
          </div>

          {/* Main Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('delivery')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-display font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                selectedCategory === 'delivery'
                  ? 'bg-[#0A2540] dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md shadow-[#0A2540]/20'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10'
              }`}
            >
              <span>Delivery & Technology</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                selectedCategory === 'delivery'
                  ? 'bg-white/20 dark:bg-slate-950/20 text-white dark:text-slate-950'
                  : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'
              }`}>
                {counts.delivery}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory('sales')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-display font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                selectedCategory === 'sales'
                  ? 'bg-[#0A2540] dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md shadow-[#0A2540]/20'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10'
              }`}
            >
              <span>Sales</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                selectedCategory === 'sales'
                  ? 'bg-white/20 dark:bg-slate-950/20 text-white dark:text-slate-950'
                  : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'
              }`}>
                {counts.sales}
              </span>
            </button>

            <button
              onClick={() => setSelectedCategory('marketing')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-display font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                selectedCategory === 'marketing'
                  ? 'bg-[#0A2540] dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md shadow-[#0A2540]/20'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10'
              }`}
            >
              <span>Marketing</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                selectedCategory === 'marketing'
                  ? 'bg-white/20 dark:bg-slate-950/20 text-white dark:text-slate-950'
                  : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'
              }`}>
                {counts.marketing}
              </span>
            </button>
          </div>

          {/* Delivery & Technology Specialization Sub-Filters */}
          {selectedCategory === 'delivery' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 pb-2"
            >
              <button
                onClick={() => setSelectedSpecialization('sap')}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-display font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  selectedSpecialization === 'sap'
                    ? 'bg-[#0052CC] text-white shadow-xs'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-slate-300'
                }`}
              >
                <Database className="h-3.5 w-3.5" />
                <span>SAP & Enterprise Solutions</span>
                <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono font-bold ${
                  selectedSpecialization === 'sap' ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-500'
                }`}>
                  {counts.sap}
                </span>
              </button>

              <button
                onClick={() => setSelectedSpecialization('network')}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-display font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  selectedSpecialization === 'network'
                    ? 'bg-[#0052CC] text-white shadow-xs'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-slate-300'
                }`}
              >
                <Network className="h-3.5 w-3.5" />
                <span>Network Engineering</span>
                <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono font-bold ${
                  selectedSpecialization === 'network' ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-500'
                }`}>
                  {counts.network}
                </span>
              </button>

              <button
                onClick={() => setSelectedSpecialization('software')}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-display font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  selectedSpecialization === 'software'
                    ? 'bg-[#0052CC] text-white shadow-xs'
                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-slate-300'
                }`}
              >
                <Code className="h-3.5 w-3.5" />
                <span>Software Development</span>
                <span className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono font-bold ${
                  selectedSpecialization === 'software' ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-500'
                }`}>
                  {counts.software}
                </span>
              </button>
            </motion.div>
          )}

          {/* SAP Mandatory Minimum 4 Years Requirement Advisory Banner */}
          {selectedCategory === 'delivery' && selectedSpecialization === 'sap' && (
            <div className="max-w-4xl mx-auto mb-8 rounded-2xl bg-blue-50/70 dark:bg-white/[0.03] border border-blue-200/80 dark:border-white/10 p-4 sm:p-5 flex items-start gap-3.5 text-left">
              <ShieldCheck className="h-5 w-5 text-[#0052CC] dark:text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white font-display block mb-0.5">
                  Minimum Experience Requirement: 4+ Years Mandatory
                </span>
                A minimum of 4 years of relevant professional experience is mandatory for every vacancy in the SAP &amp; Enterprise Solutions category. Candidates must meet or exceed the specified requirement for each role.
              </div>
            </div>
          )}

          {/* Vacancy Card Listings */}
          <div className="max-w-4xl mx-auto space-y-3.5">
            {displayedVacancies.map((vacancy) => (
              <motion.div
                key={vacancy.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900/80 hover:border-[#0052CC]/50 dark:hover:border-cyan-400/50 p-5 sm:p-6 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group"
              >
                <div className="space-y-1.5 text-left">
                  <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#0052CC] dark:group-hover:text-cyan-300 transition-colors">
                    {vacancy.title}
                  </h4>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#0052CC] dark:text-cyan-400 shrink-0" />
                      <span>{vacancy.location}</span>
                    </div>

                    {vacancy.experience && (
                      <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                        <Clock className="h-3.5 w-3.5 text-[#00A3E0] dark:text-cyan-400 shrink-0" />
                        <span>Experience: {vacancy.experience}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center sm:justify-end shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200/80 dark:border-white/10">
                  <button
                    onClick={() => handleApplyFromCard(vacancy)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl btn-primary-gradient shimmer-sweep text-white text-xs font-display font-bold uppercase tracking-wider shadow-sm hover:shadow-md cursor-pointer transition-all"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>



      {/* =========================================================================
          FINAL CTA
          Same structure, design, font, and style as Digital & SAP Excellence
          ========================================================================= */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#0A192F] via-[#0A2540] to-[#071324] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-white/10 text-cyan-300 border border-white/20 shadow-sm mb-4 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Next Steps</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]"
          >
            Ready to Build Your Career with Knooviq?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Join a collaborative culture committed to mentorship, technical mastery, and impactful global transformations across enterprise ecosystems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <button
              onClick={() => onOpenContact('Careers & Talent Engagement')}
              className="w-full sm:w-auto btn-primary-gradient shimmer-sweep px-8 py-3.5 rounded-xl text-white font-display text-xs font-bold uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>


      {/* =========================================================================
          APPLY NOW POPUP MODAL (Opens when clicking "Apply Now" on any vacancy card)
          Native Mouse Wheel & Trackpad Scrolling Enabled on Full-Height Overlay
          ========================================================================= */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div 
            id="apply-modal-backdrop"
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            onClick={handleCloseApplyModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md"
          >
            {/* Modal Card */}
            <motion.div
              ref={modalCardRef}
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#071324] shadow-[0_25px_70px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.85)] z-10 max-h-[92dvh] sm:max-h-[88vh] overflow-y-auto overscroll-contain text-slate-900 dark:text-white"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#0052CC #F1F5F9',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y',
              }}
            >
              {/* Top Brand Gradient Line */}
              <div className="sticky top-0 z-40 h-1.5 w-full bg-gradient-to-r from-[#0052CC] via-[#00A3E0] to-cyan-400 shrink-0" />

              {/* Pinned/Sticky Header Bar */}
              <div className="sticky top-1.5 z-30 px-4 py-3.5 sm:px-8 sm:py-5 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-4 bg-white/95 dark:bg-[#071324]/95 backdrop-blur-md">
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0052CC]/10 text-[#0052CC] dark:bg-cyan-500/15 dark:text-cyan-300 border border-[#0052CC]/20 dark:border-cyan-500/30 mb-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC] dark:bg-cyan-400 animate-pulse" />
                      <span>CAREER APPLICATION</span>
                    </div>
                    <h2 className="font-display text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight truncate">
                      Submit Your Application
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans truncate">
                      Direct confidential submission to Knooviq&apos;s Talent Acquisition team.
                    </p>
                  </div>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={handleCloseApplyModal}
                    aria-label="Close application form"
                    className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-all cursor-pointer shadow-xs"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Form Content Body */}
                <div className="px-4 py-5 sm:px-8 sm:py-8 pb-8 sm:pb-10" data-lenis-prevent="true">
            {submitStatus === 'success' ? (
              /* Success State Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 sm:py-14 px-4"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-500 dark:text-emerald-400 mb-6 shadow-xl shadow-emerald-500/10">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                  Application Submitted Successfully!
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-6 font-sans">
                  Thank you, <strong className="text-slate-900 dark:text-white">{successInfo?.name}</strong>. Your application for <strong className="text-[#0052CC] dark:text-cyan-300">{successInfo?.position}</strong> has been securely registered in our talent pipeline.
                </p>

                <div className="max-w-md mx-auto mb-8 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 text-left space-y-2 font-sans">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white font-display mb-1.5">
                    <Clock className="h-4 w-4 text-[#0052CC] dark:text-cyan-400" />
                    <span>What Happens Next?</span>
                  </div>
                  <p>1. Our technical recruiters and enterprise practice leaders will review your profile within 48 business hours.</p>
                  <p>2. If shortlisted, our team will reach out via email or phone for an initial introductory discussion.</p>
                  <p>3. You can explore our client transformation stories and enterprise capabilities in the meantime.</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleCloseApplyModal}
                    className="btn-primary-gradient px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white font-display cursor-pointer shadow-md hover:shadow-lg transition-all"
                  >
                    Done
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus('idle');
                      setSuccessInfo(null);
                    }}
                    className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 font-display cursor-pointer border border-slate-200 dark:border-white/10 transition-all"
                  >
                    Submit Another Application
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Two-Column Desktop / Single-Column Mobile Form */
              <form data-lenis-prevent="true" onSubmit={handleFormSubmit} noValidate>
                
                {/* Error Banner */}
                {errorMessage && (
                  <div className="mb-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 p-4 text-xs sm:text-sm text-rose-600 dark:text-rose-300 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <div className="font-sans">
                      <span className="font-bold font-display block mb-0.5">Application Submission Error</span>
                      {errorMessage}
                    </div>
                  </div>
                )}

                {/* Honeypot field for bot prevention */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website_applicant_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />
                </div>

                {/* =========================================================================
                    SECTION A: PERSONAL INFORMATION (2-Column Desktop, 1-Column Mobile)
                    ========================================================================= */}
                <div className="mb-8">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center justify-center h-6 w-6 rounded-md bg-[#0052CC]/10 dark:bg-cyan-500/10 text-[#0052CC] dark:text-cyan-400 font-mono text-xs font-bold border border-[#0052CC]/20 dark:border-cyan-500/20">
                        01
                      </span>
                      <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                        Personal Information
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Step 1 of 3</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {/* 1. Full Name * */}
                    <div id="field-fullName">
                      <label htmlFor="apply-fullName" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        Full Name <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        id="apply-fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (formErrors.fullName) {
                            setFormErrors(prev => { const n = { ...prev }; delete n.fullName; return n; });
                          }
                        }}
                        placeholder="e.g. Aditi Sharma"
                        className={`w-full h-11 rounded-xl border ${
                          formErrors.fullName
                            ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
                            : 'border-slate-200 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/25 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20'
                        } bg-slate-50/60 dark:bg-[#0A1222] px-3.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#0A1222] focus:outline-hidden transition-all font-medium`}
                      />
                      {formErrors.fullName && (
                        <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* 2. Email Address * */}
                    <div id="field-email">
                      <label htmlFor="apply-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        Email Address <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        id="apply-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) {
                            setFormErrors(prev => { const n = { ...prev }; delete n.email; return n; });
                          }
                        }}
                        placeholder="aditi.sharma@example.com"
                        className={`w-full h-11 rounded-xl border ${
                          formErrors.email
                            ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
                            : 'border-slate-200 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/25 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20'
                        } bg-slate-50/60 dark:bg-[#0A1222] px-3.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#0A1222] focus:outline-hidden transition-all font-medium`}
                      />
                      {formErrors.email && (
                        <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* 3. Phone Number with country code * */}
                    <div id="field-phone">
                      <label htmlFor="apply-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        Phone Number with country code <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <PhoneInput
                        id="apply-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(fullNumber) => {
                          setFormData({ ...formData, phone: fullNumber });
                          if (formErrors.phone) {
                            setFormErrors(prev => { const n = { ...prev }; delete n.phone; return n; });
                          }
                        }}
                        onBlur={() => {
                          const err = validatePhone(formData.phone);
                          setFormErrors((prev) => {
                            const next = { ...prev };
                            if (err) next.phone = err;
                            else delete next.phone;
                            return next;
                          });
                        }}
                        error={formErrors.phone}
                      />
                    </div>

                    {/* 4. Current Location * */}
                    <div id="field-location">
                      <label htmlFor="apply-location" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        Current Location <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="apply-location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => {
                            setFormData({ ...formData, location: e.target.value });
                            if (formErrors.location) {
                              setFormErrors(prev => { const n = { ...prev }; delete n.location; return n; });
                            }
                          }}
                          placeholder="e.g. Mumbai, Bengaluru, Pune, Delhi NCR, Remote"
                          className={`w-full h-11 rounded-xl border ${
                            formErrors.location
                              ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
                              : 'border-slate-200 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/25 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20'
                          } bg-slate-50/60 dark:bg-[#0A1222] px-3.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#0A1222] focus:outline-hidden transition-all font-medium`}
                        />
                        <MapPin className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      {formErrors.location && (
                        <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.location}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* =========================================================================
                    SECTION B: PROFESSIONAL DETAILS (2-Column Desktop, 1-Column Mobile)
                    ========================================================================= */}
                <div className="mb-8 pt-6 border-t border-slate-200/80 dark:border-white/10">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center justify-center h-6 w-6 rounded-md bg-[#0052CC]/10 dark:bg-cyan-500/10 text-[#0052CC] dark:text-cyan-400 font-mono text-xs font-bold border border-[#0052CC]/20 dark:border-cyan-500/20">
                        02
                      </span>
                      <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                        Professional Details
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Step 2 of 3</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {/* 5. Position Applying For * (Dynamic dropdown using existing careers/vacancies data) */}
                    <div id="field-position" className="md:col-span-2">
                      <label htmlFor="apply-position" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        Position Applying For <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="apply-position"
                          required
                          value={formData.position}
                          onChange={(e) => handlePositionSelect(e.target.value)}
                          className={`w-full h-11 appearance-none rounded-xl border ${
                            formErrors.position
                              ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
                              : 'border-slate-200 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/25 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20'
                          } bg-slate-50/60 dark:bg-[#0A1222] px-3.5 pr-10 text-xs sm:text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-[#0A1222] focus:outline-hidden font-medium cursor-pointer transition-all`}
                        >
                          <option value="">Select a position from open vacancies...</option>
                          
                          <optgroup label="SAP & Enterprise Solutions (14 Roles - Min 4+ Yrs)">
                            {VACANCIES.filter(v => v.specialization === 'sap').map(v => (
                              <option key={v.id} value={v.title}>
                                {v.title} — {v.experience} Exp.
                              </option>
                            ))}
                          </optgroup>

                          <optgroup label="Network Engineering (11 Roles)">
                            {VACANCIES.filter(v => v.specialization === 'network').map(v => (
                              <option key={v.id} value={v.title}>
                                {v.title}
                              </option>
                            ))}
                          </optgroup>

                          <optgroup label="Software Development (1 Role)">
                            {VACANCIES.filter(v => v.specialization === 'software').map(v => (
                              <option key={v.id} value={v.title}>
                                {v.title}
                              </option>
                            ))}
                          </optgroup>

                          <optgroup label={`Sales (${counts.sales} Roles)`}>
                            {VACANCIES.filter(v => v.category === 'sales').map(v => (
                              <option key={v.id} value={v.title}>
                                {v.title}{v.experience ? ` — ${v.experience} Exp.` : ''}
                              </option>
                            ))}
                          </optgroup>

                          <optgroup label={`Marketing (${counts.marketing} Roles)`}>
                            {VACANCIES.filter(v => v.category === 'marketing').map(v => (
                              <option key={v.id} value={v.title}>
                                {v.title}{v.experience ? ` — ${v.experience} Exp.` : ''}
                              </option>
                            ))}
                          </optgroup>

                          <optgroup label="General Applications">
                            <option value="General Enterprise Architect Application">General Enterprise Architect Application</option>
                            <option value="General Engineering & Cloud Application">General Engineering & Cloud Application</option>
                            <option value="Other / Open Speculative Application">Other / Open Speculative Application</option>
                          </optgroup>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>

                      {/* SAP 4-year eligibility reminder */}
                      {VACANCIES.some(v => v.specialization === 'sap' && v.title === formData.position) && (
                        <div className="mt-2.5 px-3 py-2 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/40 flex items-center gap-2.5 text-xs text-blue-900 dark:text-blue-200 font-medium">
                          <div className="h-5 w-5 rounded-full bg-blue-500/15 text-[#0052CC] dark:text-cyan-400 flex items-center justify-center shrink-0">
                            <ShieldCheck className="h-3.5 w-3.5" />
                          </div>
                          <span>Note: A minimum of 4 years of relevant professional experience is mandatory for SAP &amp; Enterprise Solutions roles.</span>
                        </div>
                      )}

                      {formErrors.position && (
                        <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.position}</span>
                        </p>
                      )}
                    </div>

                    {/* 6. Experience Level * (Fresher/Experienced Segmented Control) */}
                    <div id="field-experienceLevel">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        Experience Level <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10">
                        <button
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              experienceLevel: 'Fresher',
                              totalExperience: 'Fresher (0 - 1 Year)'
                            }));
                            setFormErrors(prev => {
                              const next = { ...prev };
                              delete next.experienceLevel;
                              delete next.totalExperience;
                              return next;
                            });
                          }}
                          className={`h-9 rounded-lg text-xs font-display font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                            formData.experienceLevel === 'Fresher'
                              ? 'bg-white dark:bg-[#0052CC] text-[#0052CC] dark:text-white shadow-xs font-bold border border-slate-200/60 dark:border-transparent'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          <GraduationCap className="h-3.5 w-3.5 shrink-0" />
                          <span>Fresher</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              experienceLevel: 'Experienced',
                              totalExperience: prev.totalExperience === 'Fresher (0 - 1 Year)' ? '' : prev.totalExperience
                            }));
                            setFormErrors(prev => {
                              const next = { ...prev };
                              delete next.experienceLevel;
                              return next;
                            });
                          }}
                          className={`h-9 rounded-lg text-xs font-display font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                            formData.experienceLevel === 'Experienced'
                              ? 'bg-white dark:bg-[#0052CC] text-[#0052CC] dark:text-white shadow-xs font-bold border border-slate-200/60 dark:border-transparent'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          <Briefcase className="h-3.5 w-3.5 shrink-0" />
                          <span>Experienced</span>
                        </button>
                      </div>
                      {formErrors.experienceLevel && (
                        <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.experienceLevel}</span>
                        </p>
                      )}
                    </div>

                    {/* 7. Total Experience */}
                    <div id="field-totalExperience">
                      <label htmlFor="apply-totalExperience" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        Total Experience {formData.experienceLevel === 'Experienced' && <span className="text-rose-500 font-bold">*</span>}
                      </label>
                      <div className="relative">
                        <select
                          id="apply-totalExperience"
                          disabled={formData.experienceLevel === 'Fresher'}
                          value={formData.totalExperience}
                          onChange={(e) => {
                            setFormData({ ...formData, totalExperience: e.target.value });
                            if (formErrors.totalExperience) {
                              setFormErrors(prev => { const n = { ...prev }; delete n.totalExperience; return n; });
                            }
                          }}
                          className={`w-full h-11 appearance-none rounded-xl border ${
                            formErrors.totalExperience
                              ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
                              : 'border-slate-200 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/25 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20'
                          } bg-slate-50/60 dark:bg-[#0A1222] px-3.5 pr-10 text-xs sm:text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-[#0A1222] focus:outline-hidden font-medium cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
                        >
                          {formData.experienceLevel === 'Fresher' ? (
                            <option value="Fresher (0 - 1 Year)">Fresher (0 - 1 Year)</option>
                          ) : (
                            <>
                              <option value="">Select total experience...</option>
                              <option value="1 - 2 Years">1 - 2 Years</option>
                              <option value="2 - 4 Years">2 - 4 Years</option>
                              <option value="4 - 6 Years">4 - 6 Years</option>
                              <option value="6 - 8 Years">6 - 8 Years</option>
                              <option value="8 - 10 Years">8 - 10 Years</option>
                              <option value="10 - 12 Years">10 - 12 Years</option>
                              <option value="12 - 15 Years">12 - 15 Years</option>
                              <option value="15+ Years">15+ Years</option>
                            </>
                          )}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      {formErrors.totalExperience && (
                        <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.totalExperience}</span>
                        </p>
                      )}
                    </div>

                    {/* 8. Highest Qualification * */}
                    <div id="field-education">
                      <label htmlFor="apply-education" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        Highest Qualification <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="apply-education"
                          required
                          value={formData.education}
                          onChange={(e) => {
                            setFormData({ ...formData, education: e.target.value });
                            if (formErrors.education) {
                              setFormErrors(prev => { const n = { ...prev }; delete n.education; return n; });
                            }
                          }}
                          className={`w-full h-11 appearance-none rounded-xl border ${
                            formErrors.education
                              ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
                              : 'border-slate-200 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/25 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20'
                          } bg-slate-50/60 dark:bg-[#0A1222] px-3.5 pr-10 text-xs sm:text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-[#0A1222] focus:outline-hidden font-medium cursor-pointer transition-all`}
                        >
                          <option value="">Select highest qualification...</option>
                          <option value="B.Tech / B.E. (Engineering / Technology)">B.Tech / B.E. (Engineering / Technology)</option>
                          <option value="M.Tech / M.E. / MS">M.Tech / M.E. / MS</option>
                          <option value="MCA / M.Sc (Computer Science / IT)">MCA / M.Sc (Computer Science / IT)</option>
                          <option value="BCA / B.Sc (Computer Science / IT)">BCA / B.Sc (Computer Science / IT)</option>
                          <option value="MBA / PGDM">MBA / PGDM</option>
                          <option value="B.Com / M.Com / Chartered Accountant (CA / ICWA)">B.Com / M.Com / CA / ICWA</option>
                          <option value="Diploma in Engineering / IT">Diploma in Engineering / IT</option>
                          <option value="Doctorate / Ph.D.">Doctorate / Ph.D.</option>
                          <option value="Other Bachelor Degree">Other Bachelor&apos;s Degree</option>
                          <option value="Other Master Degree">Other Master&apos;s Degree</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      {formErrors.education && (
                        <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.education}</span>
                        </p>
                      )}
                    </div>

                    {/* 9. Notice Period */}
                    <div id="field-noticePeriod">
                      <label htmlFor="apply-noticePeriod" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        Notice Period <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <div className="relative">
                        <select
                          id="apply-noticePeriod"
                          value={formData.noticePeriod}
                          onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                          className="w-full h-11 appearance-none rounded-xl border border-slate-200 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/25 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20 bg-slate-50/60 dark:bg-[#0A1222] px-3.5 pr-10 text-xs sm:text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-[#0A1222] focus:outline-hidden font-medium cursor-pointer transition-all"
                        >
                          <option value="">Select notice period...</option>
                          <option value="Immediate Joiner (0 Days / Currently Serving Notice)">Immediate Joiner (0 Days / Serving Notice)</option>
                          <option value="15 Days">15 Days</option>
                          <option value="30 Days (1 Month)">30 Days (1 Month)</option>
                          <option value="60 Days (2 Months)">60 Days (2 Months)</option>
                          <option value="90 Days (3 Months)">90 Days (3 Months)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* =========================================================================
                    SECTION C: RESUME & ADDITIONAL DETAILS
                    ========================================================================= */}
                <div className="mb-8 pt-6 border-t border-slate-200/80 dark:border-white/10">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center justify-center h-6 w-6 rounded-md bg-[#0052CC]/10 dark:bg-cyan-500/10 text-[#0052CC] dark:text-cyan-400 font-mono text-xs font-bold border border-[#0052CC]/20 dark:border-cyan-500/20">
                        03
                      </span>
                      <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                        Resume &amp; Additional Details
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Step 3 of 3</span>
                  </div>

                  <div className="space-y-5">
                    {/* 10. Resume/CV Upload * (PDF/DOCX, maximum 5 MB) */}
                    <div id="field-resumeFile">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        Resume / CV Upload <span className="text-rose-500 font-bold">*</span> <span className="text-slate-400 text-xs font-normal lowercase">(PDF, DOC, DOCX — max 5 MB)</span>
                      </label>
                      <div 
                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onDrop={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                            handleFileSelect(e.dataTransfer.files[0]);
                          }
                        }}
                        className={`relative border-2 border-dashed ${
                          formErrors.resumeFile
                            ? 'border-rose-400 bg-rose-500/[0.02]'
                            : resumeFile
                            ? 'border-emerald-400 bg-emerald-500/[0.03]'
                            : 'border-slate-300 dark:border-white/20 hover:border-[#0052CC] dark:hover:border-cyan-400 bg-slate-50/70 hover:bg-blue-50/20 dark:bg-[#0A1222]/60'
                        } rounded-2xl p-6 text-center transition-all cursor-pointer group`}
                      >
                        <input
                          type="file"
                          id="apply-resume"
                          accept=".pdf,.docx,.doc"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              handleFileSelect(e.target.files[0]);
                            }
                          }}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />

                        {resumeFile ? (
                          <div className="flex items-center justify-between gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-xl border border-emerald-300 dark:border-emerald-500/40 shadow-xs">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="h-5 w-5" />
                              </div>
                              <div className="text-left min-w-0">
                                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                                  {resumeFile.name}
                                </p>
                                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                                  {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Verified and ready
                                </p>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setResumeFile(null);
                                setFormErrors(prev => { const n = { ...prev }; delete n.resumeFile; return n; });
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors z-10 cursor-pointer"
                              title="Remove file"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-2 pointer-events-none">
                            <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#0052CC]/10 to-[#00A3E0]/15 dark:from-cyan-500/10 dark:to-blue-500/15 text-[#0052CC] dark:text-cyan-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                              <Upload className="h-6 w-6" />
                            </div>
                            <div>
                              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 block">
                                Click to browse or drag and drop your resume
                              </span>
                              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                                Supported formats: PDF, DOC, DOCX (Up to 5 MB)
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {formErrors.resumeFile && (
                        <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.resumeFile}</span>
                        </p>
                      )}
                    </div>

                    {/* 11. LinkedIn Profile (optional) */}
                    <div id="field-portfolioLinkedin">
                      <label htmlFor="apply-linkedin" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-display uppercase tracking-wider">
                        LinkedIn Profile URL <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="apply-linkedin"
                        type="url"
                        value={formData.portfolioLinkedin}
                        onChange={(e) => {
                          setFormData({ ...formData, portfolioLinkedin: e.target.value });
                          if (formErrors.portfolioLinkedin) {
                            setFormErrors(prev => { const n = { ...prev }; delete n.portfolioLinkedin; return n; });
                          }
                        }}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className={`w-full h-11 rounded-xl border ${
                          formErrors.portfolioLinkedin
                            ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
                            : 'border-slate-200 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/25 focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20'
                        } bg-slate-50/60 dark:bg-[#0A1222] px-3.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#0A1222] focus:outline-hidden transition-all font-medium`}
                      />
                      {formErrors.portfolioLinkedin && (
                        <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.portfolioLinkedin}</span>
                        </p>
                      )}
                    </div>

                    {/* 12. Cover Letter/Message (optional) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="apply-coverLetter" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 font-display uppercase tracking-wider">
                          Cover Letter / Message <span className="text-slate-400 font-normal lowercase">(optional)</span>
                        </label>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {formData.coverLetter.length} / 1500 chars
                        </span>
                      </div>
                      <textarea
                        id="apply-coverLetter"
                        rows={4}
                        maxLength={1500}
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        placeholder="Share a brief note about your enterprise background, technical projects, certifications, or why you want to grow with Knooviq..."
                        className="w-full rounded-xl border border-slate-200 dark:border-white/15 hover:border-slate-300 dark:hover:border-white/25 bg-slate-50/60 dark:bg-[#0A1222] px-3.5 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#0A1222] focus:border-[#0052CC] dark:focus:border-cyan-400 focus:ring-2 focus:ring-[#0052CC]/15 dark:focus:ring-cyan-400/20 focus:outline-hidden font-medium transition-all resize-none"
                      />
                    </div>

                    {/* 13. Privacy Policy Consent * */}
                    <div id="field-privacyConsent" className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          id="apply-privacyConsent"
                          checked={formData.privacyConsent}
                          onChange={(e) => {
                            setFormData({ ...formData, privacyConsent: e.target.checked });
                            if (formErrors.privacyConsent) {
                              setFormErrors(prev => { const n = { ...prev }; delete n.privacyConsent; return n; });
                            }
                          }}
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0052CC] focus:ring-[#0052CC] dark:border-white/20 dark:bg-slate-900"
                        />
                        <span className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                          I consent to Knooviq Industries collecting and securely storing my personal details and resume for recruitment, talent evaluation, and background verification in accordance with Knooviq&apos;s <span className="text-[#0052CC] dark:text-cyan-400 font-semibold underline">Privacy Policy</span>. <span className="text-rose-500 font-bold">*</span>
                        </span>
                      </label>
                      {formErrors.privacyConsent && (
                        <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{formErrors.privacyConsent}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* =========================================================================
                    SUBMIT APPLICATION BUTTON & SECURITY INDICATORS
                    ========================================================================= */}
                <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium font-sans">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Encrypted &amp; confidential candidate pipeline</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto btn-primary-gradient shimmer-sweep rounded-xl px-9 py-3.5 text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
                </div>
              </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

