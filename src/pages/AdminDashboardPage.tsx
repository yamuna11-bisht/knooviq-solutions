import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Inbox, 
  Mail, 
  Eye, 
  Phone, 
  CheckCircle2, 
  Search, 
  Filter, 
  Download, 
  ExternalLink,
  ChevronDown,
  Trash2,
  X,
  Copy,
  MessageCircle,
  LogOut,
  MapPin,
  Briefcase,
  FileText,
  Clock,
  Edit3,
  Check
} from 'lucide-react';
import { 
  AdminProfile,
  ClientInquiry,
  JobApplicationSubmission, 
  AdminNotification,
  InquiryStatus,
} from '../types';
import { 
  getAdminSession, 
  adminLogout, 
  fetchClientInquiries,
  fetchJobApplications, 
  updateClientInquiryStatus,
  deleteClientInquiry,
  updateJobApplicationStatus, 
  deleteRecord,
  getSignedResumeUrl, 
} from '../lib/supabase';

// Unified format for submissions table matching the user's dashboard structure
interface UnifiedSubmission {
  id: string;
  sourceForm: 'Enterprise Consultation' | 'Career Application' | 'Executive Inquiry';
  fullName: string;
  companyName?: string | null;
  email: string;
  countryCode: string;
  phoneNumber: string;
  typeOrPosition: string;
  country: string;
  status: 'New' | 'Reviewed' | 'Contacted' | 'Hired / Partnered' | 'Rejected';
  rawStatus: string;
  createdDate: Date;
  dateFormatted: { dayMonth: string; year: string };
  details?: string | null;
  resumeStoragePath?: string | null;
  linkedinUrl?: string | null;
  internalNotes?: string | null;
  experience?: string | null;
  education?: string | null;
  rawRecord: ClientInquiry | JobApplicationSubmission;
}

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState<AdminProfile | null>(null);

  // Raw data from DB
  const [clientInquiries, setClientInquiries] = useState<ClientInquiry[]>([]);
  const [applications, setApplications] = useState<JobApplicationSubmission[]>([]);
  const [loading, setLoading] = useState(false);

  // Filter States
  const [activeStatCard, setActiveStatCard] = useState<'TOTAL' | 'NEW' | 'REVIEWED' | 'CONTACTED' | 'HIRED'>('TOTAL');
  const [activeFormPill, setActiveFormPill] = useState<'ALL' | 'CAREER' | 'B2B'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [selectedPosition, setSelectedPosition] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');

  // Modals & Feedback
  const [detailsModalItem, setDetailsModalItem] = useState<UnifiedSubmission | null>(null);
  const [resumeModal, setResumeModal] = useState<{
    isOpen: boolean;
    candidateName: string;
    signedUrl: string | null;
    loading: boolean;
  }>({
    isOpen: false,
    candidateName: '',
    signedUrl: null,
    loading: false,
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [internalNoteText, setInternalNoteText] = useState('');
  const [isEditingNote, setIsEditingNote] = useState(false);

  // Check auth session
  useEffect(() => {
    const currentSession = getAdminSession();
    if (!currentSession) {
      navigate('/admin/login');
    } else {
      setAdmin(currentSession);
    }
  }, [navigate]);

  // Load telemetry and records
  const loadAllData = async () => {
    setLoading(true);
    const [clientInqData, appData] = await Promise.all([
      fetchClientInquiries(),
      fetchJobApplications(),
    ]);
    setClientInquiries(clientInqData);
    setApplications(appData);
    setLoading(false);
  };

  useEffect(() => {
    if (admin) {
      loadAllData();
    }
  }, [admin]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleSignOut = () => {
    adminLogout();
    navigate('/admin/login');
  };

  // Convert raw status string to normalized 5 dashboard statuses
  const normalizeStatus = (raw: string): 'New' | 'Reviewed' | 'Contacted' | 'Hired / Partnered' | 'Rejected' => {
    const upper = (raw || '').toUpperCase();
    if (upper === 'NEW' || upper === 'PENDING') return 'New';
    if (upper === 'REVIEWED' || upper === 'IN_REVIEW' || upper === 'IN REVIEW') return 'Reviewed';
    if (upper === 'CONTACTED' || upper === 'INTERVIEW_SCHEDULED') return 'Contacted';
    if (upper === 'HIRED' || upper === 'RESOLVED' || upper === 'OFFERED' || upper === 'PARTNERED') return 'Hired / Partnered';
    if (upper === 'REJECTED' || upper === 'ARCHIVED') return 'Rejected';
    return 'New';
  };

  // Helper to deduce country name
  const deduceCountry = (countryCode?: string, location?: string): string => {
    if (location && location.trim().length > 0) {
      if (location.toLowerCase().includes('india')) return 'India';
      if (location.toLowerCase().includes('netherlands')) return 'Netherlands';
      if (location.toLowerCase().includes('usa') || location.toLowerCase().includes('united states')) return 'United States';
      if (location.toLowerCase().includes('uk') || location.toLowerCase().includes('united kingdom')) return 'United Kingdom';
      if (location.toLowerCase().includes('germany')) return 'Germany';
      if (location.toLowerCase().includes('uae') || location.toLowerCase().includes('dubai')) return 'UAE';
      return location.split(',').pop()?.trim() || location;
    }
    if (!countryCode) return 'India';
    if (countryCode === '+91') return 'India';
    if (countryCode === '+1') return 'United States';
    if (countryCode === '+44') return 'United Kingdom';
    if (countryCode === '+31') return 'Netherlands';
    if (countryCode === '+49') return 'Germany';
    if (countryCode === '+971') return 'UAE';
    if (countryCode === '+65') return 'Singapore';
    return 'India';
  };

  // Transform all records into unified list matching user screenshot
  const unifiedSubmissions: UnifiedSubmission[] = useMemo(() => {
    const list: UnifiedSubmission[] = [];

    // 1. Enterprise Consultations (Form 1)
    clientInquiries
      .filter(i => i.form_type === 'Enterprise Consultation')
      .forEach(inq => {
        const d = inq.created_at ? new Date(inq.created_at) : new Date();
        const dayMonth = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
        const year = String(d.getFullYear());

        list.push({
          id: inq.id,
          sourceForm: 'Enterprise Consultation',
          fullName: inq.full_name,
          companyName: inq.company_name,
          email: inq.email,
          countryCode: inq.country_code,
          phoneNumber: inq.phone_number,
          typeOrPosition: inq.service_requirement || 'SAP Consulting & Outsourcing',
          country: deduceCountry(inq.country_code),
          status: normalizeStatus(inq.status),
          rawStatus: inq.status,
          createdDate: d,
          dateFormatted: { dayMonth, year },
          details: inq.requirement_details,
          internalNotes: inq.internal_notes,
          rawRecord: inq,
        });
      });

    // 2. Career Applications (Form 2)
    applications.forEach(app => {
      const d = app.created_at ? new Date(app.created_at) : new Date();
      const dayMonth = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
      const year = String(d.getFullYear());

      list.push({
        id: app.id || `app-${app.email}`,
        sourceForm: 'Career Application',
        fullName: app.full_name,
        email: app.email,
        countryCode: '+91',
        phoneNumber: app.phone || '',
        typeOrPosition: app.position || 'SAP Specialist',
        country: deduceCountry(undefined, app.location),
        status: normalizeStatus(app.status || 'PENDING'),
        rawStatus: app.status || 'PENDING',
        createdDate: d,
        dateFormatted: { dayMonth, year },
        details: app.cover_letter || app.cover_note,
        resumeStoragePath: app.resume_storage_path,
        linkedinUrl: app.portfolio_linkedin,
        internalNotes: app.internal_notes,
        experience: app.experience,
        education: app.education,
        rawRecord: app,
      });
    });

    // 3. Executive Inquiries (Form 3)
    clientInquiries
      .filter(i => i.form_type === 'Executive Inquiry')
      .forEach(inq => {
        const d = inq.created_at ? new Date(inq.created_at) : new Date();
        const dayMonth = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
        const year = String(d.getFullYear());

        list.push({
          id: inq.id,
          sourceForm: 'Executive Inquiry',
          fullName: inq.full_name,
          companyName: inq.company_name,
          email: inq.email,
          countryCode: inq.country_code,
          phoneNumber: inq.phone_number,
          typeOrPosition: inq.enquiry_type || 'Business Enquiry',
          country: deduceCountry(inq.country_code),
          status: normalizeStatus(inq.status),
          rawStatus: inq.status,
          createdDate: d,
          dateFormatted: { dayMonth, year },
          details: inq.requirement_details,
          internalNotes: inq.internal_notes,
          rawRecord: inq,
        });
      });

    // Sort newest first
    list.sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());
    return list;
  }, [clientInquiries, applications]);

  // Overall Counts for 5 Stat Cards
  const totalCount = unifiedSubmissions.length;
  const newCount = unifiedSubmissions.filter(s => s.status === 'New').length;
  const reviewedCount = unifiedSubmissions.filter(s => s.status === 'Reviewed').length;
  const contactedCount = unifiedSubmissions.filter(s => s.status === 'Contacted').length;
  const hiredCount = unifiedSubmissions.filter(s => s.status === 'Hired / Partnered').length;

  // Counts for Form Tabs (Candidates vs B2B Partnerships / Inquiries)
  const candidateCount = unifiedSubmissions.filter(s => s.sourceForm === 'Career Application').length;
  const b2bCount = unifiedSubmissions.filter(s => s.sourceForm === 'Enterprise Consultation' || s.sourceForm === 'Executive Inquiry').length;

  // Distinct Lists for Dropdown Filters
  const distinctCountries = useMemo(() => {
    const set = new Set<string>();
    unifiedSubmissions.forEach(s => { if (s.country) set.add(s.country); });
    return Array.from(set).sort();
  }, [unifiedSubmissions]);

  const distinctPositions = useMemo(() => {
    const set = new Set<string>();
    unifiedSubmissions.forEach(s => { if (s.typeOrPosition) set.add(s.typeOrPosition); });
    return Array.from(set).sort();
  }, [unifiedSubmissions]);

  // Filtered List for Table
  const filteredSubmissions = useMemo(() => {
    return unifiedSubmissions.filter(item => {
      // 1. Stat Card Filter (if user clicked a top card)
      if (activeStatCard === 'NEW' && item.status !== 'New') return false;
      if (activeStatCard === 'REVIEWED' && item.status !== 'Reviewed') return false;
      if (activeStatCard === 'CONTACTED' && item.status !== 'Contacted') return false;
      if (activeStatCard === 'HIRED' && item.status !== 'Hired / Partnered') return false;

      // 2. Form Pill Filter
      if (activeFormPill === 'CAREER' && item.sourceForm !== 'Career Application') return false;
      if (activeFormPill === 'B2B' && (item.sourceForm !== 'Enterprise Consultation' && item.sourceForm !== 'Executive Inquiry')) return false;

      // 3. Search query
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.fullName.toLowerCase().includes(q);
        const matchesEmail = item.email.toLowerCase().includes(q);
        const matchesPhone = item.phoneNumber.includes(q) || item.countryCode.includes(q);
        const matchesType = item.typeOrPosition.toLowerCase().includes(q);
        const matchesCompany = (item.companyName || '').toLowerCase().includes(q);
        const matchesDetails = (item.details || '').toLowerCase().includes(q);
        const matchesCountry = item.country.toLowerCase().includes(q);

        if (!matchesName && !matchesEmail && !matchesPhone && !matchesType && !matchesCompany && !matchesDetails && !matchesCountry) {
          return false;
        }
      }

      // 4. Country Filter
      if (selectedCountry !== 'ALL' && item.country !== selectedCountry) {
        return false;
      }

      // 5. Position Filter
      if (selectedPosition !== 'ALL' && item.typeOrPosition !== selectedPosition) {
        return false;
      }

      // 6. Status Filter Dropdown
      if (selectedStatus !== 'ALL' && item.status !== selectedStatus) {
        return false;
      }

      return true;
    });
  }, [unifiedSubmissions, activeStatCard, activeFormPill, searchQuery, selectedCountry, selectedPosition, selectedStatus]);

  // Actions
  const handleCopyLink = () => {
    const url = `${window.location.origin}/about/connect`;
    navigator.clipboard.writeText(url);
    showToast('Form link copied to clipboard!');
  };

  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/919820145678?text=Hello%20Knooviq%20Industries%20Executive%20Desk', '_blank');
  };

  const handleViewForm = () => {
    window.open('/about/connect', '_blank');
  };

  const handleViewResume = async (item: UnifiedSubmission) => {
    if (!item.resumeStoragePath) {
      alert('No resume attached for this candidate.');
      return;
    }
    setResumeModal({
      isOpen: true,
      candidateName: item.fullName,
      signedUrl: null,
      loading: true,
    });
    const res = await getSignedResumeUrl(item.resumeStoragePath);
    setResumeModal({
      isOpen: true,
      candidateName: item.fullName,
      signedUrl: res.url,
      loading: false,
    });
  };

  const handleDeleteItem = async (item: UnifiedSubmission) => {
    if (admin?.role !== 'super_admin') {
      alert('Only Super Administrators can delete submission records.');
      return;
    }
    if (window.confirm(`Are you sure you want to delete the submission from "${item.fullName}"?`)) {
      if (item.sourceForm === 'Career Application') {
        await deleteRecord('career_applications', item.id);
      } else {
        await deleteClientInquiry(item.id);
      }
      if (detailsModalItem?.id === item.id) {
        setDetailsModalItem(null);
      }
      showToast('Record deleted successfully.');
      loadAllData();
    }
  };

  const handleUpdateStatus = async (item: UnifiedSubmission, newStatus: string) => {
    if (item.sourceForm === 'Career Application') {
      let careerStatus: JobApplicationSubmission['status'] = 'PENDING';
      if (newStatus === 'New') careerStatus = 'PENDING';
      else if (newStatus === 'Reviewed') careerStatus = 'REVIEWED';
      else if (newStatus === 'Contacted') careerStatus = 'INTERVIEW_SCHEDULED';
      else if (newStatus === 'Hired / Partnered') careerStatus = 'OFFERED';
      else if (newStatus === 'Rejected') careerStatus = 'REJECTED';
      
      await updateJobApplicationStatus(item.id, careerStatus);
    } else {
      let inqStatus: InquiryStatus = 'Pending';
      if (newStatus === 'New') inqStatus = 'Pending';
      else if (newStatus === 'Reviewed') inqStatus = 'In Review';
      else if (newStatus === 'Contacted') inqStatus = 'Contacted';
      else if (newStatus === 'Hired / Partnered') inqStatus = 'Resolved';
      else if (newStatus === 'Rejected') inqStatus = 'Archived';

      await updateClientInquiryStatus(item.id, inqStatus);
    }

    // Update in local state
    loadAllData();
    if (detailsModalItem && detailsModalItem.id === item.id) {
      setDetailsModalItem(prev => prev ? { ...prev, status: newStatus as any } : null);
    }
    showToast(`Status updated to "${newStatus}"`);
  };

  const handleSaveInternalNote = async () => {
    if (!detailsModalItem) return;
    if (detailsModalItem.sourceForm === 'Career Application') {
      const app = applications.find(a => a.id === detailsModalItem.id);
      await updateJobApplicationStatus(detailsModalItem.id, app?.status || 'PENDING', internalNoteText);
    } else {
      const inq = clientInquiries.find(i => i.id === detailsModalItem.id);
      await updateClientInquiryStatus(detailsModalItem.id, inq?.status || 'Pending', internalNoteText);
    }
    setDetailsModalItem(prev => prev ? { ...prev, internalNotes: internalNoteText } : null);
    setIsEditingNote(false);
    loadAllData();
    showToast('Note updated successfully.');
  };

  // Open modal
  const openDetailsModal = (item: UnifiedSubmission) => {
    setDetailsModalItem(item);
    setInternalNoteText(item.internalNotes || '');
    setIsEditingNote(false);
  };

  if (!admin) return null;

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-slate-800 font-sans flex flex-col antialiased">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl border border-white/10 animate-fade-in">
          <Check className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =========================================================================
          TOP NAV HEADER (NAVY SLATE WITH ROUNDED CORNERS & CLEAN BUTTONS)
          ========================================================================= */}
      <header className="bg-[#0A1226] text-white px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 shadow-md sticky top-0 z-30">
        {/* Left Brand / Console Identity */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white shadow-md">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-display text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
              Admin Dashboard
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-400">
              Dais World Endeavor — Candidate & B2B Portal
            </p>
          </div>
        </div>

        {/* Right Header Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {/* View Form (/form) */}
          <button
            onClick={handleViewForm}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1E40AF] hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
          >
            <span>View Form (/form)</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1E293B] hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700"
          >
            <Copy className="h-3.5 w-3.5 text-slate-300" />
            <span>Copy Link</span>
          </button>

          {/* WhatsApp Link */}
          <button
            onClick={handleOpenWhatsApp}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#059669] hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp Link</span>
          </button>

          {/* Logout */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#DC2626] hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-xs"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* =========================================================================
          MAIN DASHBOARD BODY
          ========================================================================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">

        {/* =======================================================================
            SECTION 1: THE 5 STAT CARDS
            ======================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          
          {/* Card 1: TOTAL INQUIRIES */}
          <div
            onClick={() => setActiveStatCard('TOTAL')}
            className={`rounded-2xl p-5 bg-white shadow-xs cursor-pointer transition-all border ${
              activeStatCard === 'TOTAL'
                ? 'border-2 border-blue-500 shadow-md ring-2 ring-blue-500/10'
                : 'border-slate-200/90 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="h-9 w-9 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-xs">
                <Inbox className="h-5 w-5" />
              </div>
              {activeStatCard === 'TOTAL' && (
                <span className="px-2 py-0.5 rounded-full bg-[#1E40AF] text-white font-mono text-[9px] font-bold tracking-wider uppercase">
                  ACTIVE
                </span>
              )}
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-900 leading-tight">
              {totalCount}
            </div>
            <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mt-1">
              TOTAL INQUIRIES
            </p>
          </div>

          {/* Card 2: NEW / UNREAD */}
          <div
            onClick={() => setActiveStatCard('NEW')}
            className={`rounded-2xl p-5 bg-white shadow-xs cursor-pointer transition-all border ${
              activeStatCard === 'NEW'
                ? 'border-2 border-sky-500 shadow-md ring-2 ring-sky-500/10'
                : 'border-slate-200/90 hover:border-sky-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="h-9 w-9 rounded-xl bg-[#0EA5E9] text-white flex items-center justify-center shadow-xs">
                <Mail className="h-5 w-5" />
              </div>
              {activeStatCard === 'NEW' && (
                <span className="px-2 py-0.5 rounded-full bg-[#0284C7] text-white font-mono text-[9px] font-bold tracking-wider uppercase">
                  ACTIVE
                </span>
              )}
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-900 leading-tight">
              {newCount}
            </div>
            <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mt-1">
              NEW / UNREAD
            </p>
          </div>

          {/* Card 3: REVIEWED */}
          <div
            onClick={() => setActiveStatCard('REVIEWED')}
            className={`rounded-2xl p-5 bg-white shadow-xs cursor-pointer transition-all border ${
              activeStatCard === 'REVIEWED'
                ? 'border-2 border-amber-500 shadow-md ring-2 ring-amber-500/10'
                : 'border-slate-200/90 hover:border-amber-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="h-9 w-9 rounded-xl bg-[#F59E0B] text-white flex items-center justify-center shadow-xs">
                <Eye className="h-5 w-5" />
              </div>
              {activeStatCard === 'REVIEWED' && (
                <span className="px-2 py-0.5 rounded-full bg-[#D97706] text-white font-mono text-[9px] font-bold tracking-wider uppercase">
                  ACTIVE
                </span>
              )}
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-900 leading-tight">
              {reviewedCount}
            </div>
            <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mt-1">
              REVIEWED
            </p>
          </div>

          {/* Card 4: CONTACTED */}
          <div
            onClick={() => setActiveStatCard('CONTACTED')}
            className={`rounded-2xl p-5 bg-white shadow-xs cursor-pointer transition-all border ${
              activeStatCard === 'CONTACTED'
                ? 'border-2 border-purple-500 shadow-md ring-2 ring-purple-500/10'
                : 'border-slate-200/90 hover:border-purple-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="h-9 w-9 rounded-xl bg-[#8B5CF6] text-white flex items-center justify-center shadow-xs">
                <Phone className="h-5 w-5" />
              </div>
              {activeStatCard === 'CONTACTED' && (
                <span className="px-2 py-0.5 rounded-full bg-[#7C3AED] text-white font-mono text-[9px] font-bold tracking-wider uppercase">
                  ACTIVE
                </span>
              )}
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-900 leading-tight">
              {contactedCount}
            </div>
            <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mt-1">
              CONTACTED
            </p>
          </div>

          {/* Card 5: HIRED / PARTNERED */}
          <div
            onClick={() => setActiveStatCard('HIRED')}
            className={`rounded-2xl p-5 bg-white shadow-xs cursor-pointer transition-all border col-span-2 sm:col-span-1 ${
              activeStatCard === 'HIRED'
                ? 'border-2 border-emerald-500 shadow-md ring-2 ring-emerald-500/10'
                : 'border-slate-200/90 hover:border-emerald-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="h-9 w-9 rounded-xl bg-[#10B981] text-white flex items-center justify-center shadow-xs">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              {activeStatCard === 'HIRED' && (
                <span className="px-2 py-0.5 rounded-full bg-[#059669] text-white font-mono text-[9px] font-bold tracking-wider uppercase">
                  ACTIVE
                </span>
              )}
            </div>
            <div className="font-display text-3xl font-extrabold text-slate-900 leading-tight">
              {hiredCount}
            </div>
            <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mt-1">
              HIRED / PARTNERED
            </p>
          </div>

        </div>

        {/* =======================================================================
            SECTION 2: SUBMISSIONS PILL TABS
            ======================================================================= */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* All Submissions */}
          <button
            onClick={() => setActiveFormPill('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${
              activeFormPill === 'ALL'
                ? 'bg-[#2563EB] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90'
            }`}
          >
            <span>All Submissions ({totalCount})</span>
          </button>

          {/* Candidates / Job Seekers (Form 2) */}
          <button
            onClick={() => setActiveFormPill('CAREER')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${
              activeFormPill === 'CAREER'
                ? 'bg-[#2563EB] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90'
            }`}
          >
            <span>🧑‍💼 Candidates / Job Seekers</span>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
              activeFormPill === 'CAREER' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {candidateCount}
            </span>
          </button>

          {/* B2B & Housing Partnerships (Form 1 & Form 3) */}
          <button
            onClick={() => setActiveFormPill('B2B')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${
              activeFormPill === 'B2B'
                ? 'bg-[#2563EB] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90'
            }`}
          >
            <span>🏢 B2B & Housing Partnerships</span>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
              activeFormPill === 'B2B' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {b2bCount}
            </span>
          </button>

          {/* Reset Filters Quick Button if active */}
          {(activeStatCard !== 'TOTAL' || activeFormPill !== 'ALL' || searchQuery || selectedCountry !== 'ALL' || selectedPosition !== 'ALL' || selectedStatus !== 'ALL') && (
            <button
              onClick={() => {
                setActiveStatCard('TOTAL');
                setActiveFormPill('ALL');
                setSearchQuery('');
                setSelectedCountry('ALL');
                setSelectedPosition('ALL');
                setSelectedStatus('ALL');
              }}
              className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline px-2 py-1"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* =======================================================================
            SECTION 3: SEARCH BAR AND 3 DROPDOWNS
            ======================================================================= */}
        <div className="space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input Box */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, email, phone, details..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Dropdown 1: All Countries */}
            <div className="md:col-span-2.5 relative">
              <div className="relative">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full appearance-none pl-8 pr-8 py-2.5 rounded-xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 focus:outline-none focus:border-blue-500 shadow-xs cursor-pointer truncate"
                >
                  <option value="ALL">📍 🌍 All Countries ({distinctCountries.length || totalCount})</option>
                  {distinctCountries.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <MapPin className="absolute left-2.5 top-3 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                <ChevronDown className="absolute right-2.5 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Dropdown 2: All Positions */}
            <div className="md:col-span-2.5 relative">
              <div className="relative">
                <select
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="w-full appearance-none pl-8 pr-8 py-2.5 rounded-xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 focus:outline-none focus:border-blue-500 shadow-xs cursor-pointer truncate"
                >
                  <option value="ALL">💼 All Positions ({distinctPositions.length || totalCount})</option>
                  {distinctPositions.map(pos => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
                <Briefcase className="absolute left-2.5 top-3 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                <ChevronDown className="absolute right-2.5 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Dropdown 3: All Status */}
            <div className="md:col-span-2 relative">
              <div className="relative">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full appearance-none pl-8 pr-8 py-2.5 rounded-xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 focus:outline-none focus:border-blue-500 shadow-xs cursor-pointer truncate"
                >
                  <option value="ALL">All Status</option>
                  <option value="New">New</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Hired / Partnered">Hired / Partnered</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <Filter className="absolute left-2.5 top-3 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                <ChevronDown className="absolute right-2.5 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Showing Subtext */}
          <div className="text-[11px] font-semibold text-slate-400 px-1">
            Showing {filteredSubmissions.length} of {totalCount} submissions
          </div>
        </div>

        {/* =======================================================================
            SECTION 4: SUBMISSIONS TABLE
            ======================================================================= */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-slate-200/90 bg-[#FAFBFD] text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">COMPANY / APPLICANT</th>
                  <th className="py-3.5 px-4 sm:px-6">TYPE / POSITION</th>
                  <th className="py-3.5 px-4 sm:px-6">COUNTRY</th>
                  <th className="py-3.5 px-4 sm:px-6">STATUS</th>
                  <th className="py-3.5 px-4 sm:px-6">DATE</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center">ACTIONS</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-slate-400">
                      <div className="max-w-xs mx-auto space-y-2">
                        <Inbox className="h-8 w-8 text-slate-300 mx-auto" />
                        <p className="font-bold text-slate-600 text-sm">No Submissions Found</p>
                        <p className="text-xs text-slate-400">No records match your selected filters. Try adjusting search query or clearing filters.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map((sub) => {
                    // Avatar initial
                    const initial = (sub.fullName || 'U').trim().charAt(0).toUpperCase();

                    return (
                      <tr 
                        key={`${sub.sourceForm}-${sub.id}`}
                        className="hover:bg-slate-50/80 transition-colors group"
                      >
                        {/* 1. COMPANY / APPLICANT */}
                        <td className="py-4 px-4 sm:px-6">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-[#0EA5E9] text-white flex items-center justify-center font-display font-extrabold text-sm shrink-0 shadow-xs">
                              {initial}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-bold text-slate-900 text-sm leading-snug">
                                  {sub.fullName}
                                </span>
                                {sub.companyName && (
                                  <span className="text-xs text-slate-500 font-medium">
                                    • {sub.companyName}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-400 font-sans mt-0.5 truncate">
                                {sub.email} • {sub.phoneNumber ? `${sub.countryCode} ${sub.phoneNumber}` : 'No phone'}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* 2. TYPE / POSITION */}
                        <td className="py-4 px-4 sm:px-6">
                          <p className="font-bold text-slate-800 text-sm leading-snug">
                            {sub.typeOrPosition}
                          </p>
                          <span className={`inline-block mt-0.5 text-[10px] font-bold tracking-wider uppercase ${
                            sub.sourceForm === 'Enterprise Consultation' 
                              ? 'text-sky-600' 
                              : sub.sourceForm === 'Career Application' 
                              ? 'text-emerald-600' 
                              : 'text-purple-600'
                          }`}>
                            {sub.sourceForm}
                          </span>
                        </td>

                        {/* 3. COUNTRY */}
                        <td className="py-4 px-4 sm:px-6">
                          <span className="text-slate-700 font-medium text-xs sm:text-sm">
                            {sub.country}
                          </span>
                        </td>

                        {/* 4. STATUS */}
                        <td className="py-4 px-4 sm:px-6">
                          <span className={`inline-flex items-center px-3 py-1 rounded-xl text-xs font-bold leading-none ${
                            sub.status === 'New'
                              ? 'bg-[#EBF5FF] text-[#1E40AF]'
                              : sub.status === 'Reviewed'
                              ? 'bg-[#FEF3C7] text-[#B45309]'
                              : sub.status === 'Contacted'
                              ? 'bg-[#F3E8FF] text-[#7E22CE]'
                              : sub.status === 'Hired / Partnered'
                              ? 'bg-[#D1FAE5] text-[#065F46]'
                              : 'bg-[#FFE4E6] text-[#BE123C]'
                          }`}>
                            {sub.status}
                          </span>
                        </td>

                        {/* 5. DATE */}
                        <td className="py-4 px-4 sm:px-6 whitespace-nowrap text-xs text-slate-500 font-medium leading-tight">
                          <div>{sub.dateFormatted.dayMonth}</div>
                          <div className="text-[11px] text-slate-400">{sub.dateFormatted.year}</div>
                        </td>

                        {/* 6. ACTIONS (3 Round Action Buttons: Download, View Eye, Delete Trash) */}
                        <td className="py-4 px-4 sm:px-6">
                          <div className="flex items-center justify-center gap-2">
                            {/* Download Action (Green) */}
                            <button
                              onClick={() => {
                                if (sub.sourceForm === 'Career Application') {
                                  handleViewResume(sub);
                                } else {
                                  openDetailsModal(sub);
                                }
                              }}
                              title={sub.sourceForm === 'Career Application' ? 'Download Secure Signed Resume' : 'View Submission Details'}
                              className="h-8 w-8 rounded-lg bg-[#ECFDF5] text-[#059669] hover:bg-emerald-100 border border-emerald-200/60 flex items-center justify-center transition-colors shadow-2xs"
                            >
                              <Download className="h-4 w-4" />
                            </button>

                            {/* View Action (Blue Eye) */}
                            <button
                              onClick={() => openDetailsModal(sub)}
                              title="View Complete Submission Details"
                              className="h-8 w-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] hover:bg-blue-100 border border-blue-200/60 flex items-center justify-center transition-colors shadow-2xs"
                            >
                              <Eye className="h-4 w-4" />
                            </button>

                            {/* Delete Action (Red Trash) */}
                            {admin.role === 'super_admin' && (
                              <button
                                onClick={() => handleDeleteItem(sub)}
                                title="Delete record"
                                className="h-8 w-8 rounded-lg bg-[#FEF2F2] text-[#DC2626] hover:bg-rose-100 border border-rose-200/60 flex items-center justify-center transition-colors shadow-2xs"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* =========================================================================
          MODAL: SUBMISSION COMPLETE DETAILS (EYE BUTTON)
          ========================================================================= */}
      {detailsModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="rounded-3xl bg-white border border-slate-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto text-slate-800">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase ${
                    detailsModalItem.sourceForm === 'Career Application'
                      ? 'bg-emerald-100 text-emerald-800'
                      : detailsModalItem.sourceForm === 'Enterprise Consultation'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {detailsModalItem.sourceForm}
                  </span>
                  <span className="text-xs font-mono text-slate-400">ID: {detailsModalItem.id}</span>
                </div>
                <h2 className="font-display text-xl font-bold text-slate-900">
                  {detailsModalItem.fullName}
                </h2>
                {detailsModalItem.companyName && (
                  <p className="text-xs text-blue-600 font-bold">{detailsModalItem.companyName}</p>
                )}
              </div>

              <button
                onClick={() => setDetailsModalItem(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-200/80 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Email Address</span>
                <a href={`mailto:${detailsModalItem.email}`} className="text-sm font-bold text-blue-600 hover:underline break-all">
                  {detailsModalItem.email}
                </a>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-200/80 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Phone Number</span>
                <a href={`tel:${detailsModalItem.countryCode}${detailsModalItem.phoneNumber}`} className="text-sm font-bold text-slate-900 hover:underline">
                  {detailsModalItem.countryCode} {detailsModalItem.phoneNumber}
                </a>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-200/80 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Requirement / Position</span>
                <span className="text-sm font-bold text-slate-900 block">
                  {detailsModalItem.typeOrPosition}
                </span>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-200/80 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Country & Location</span>
                <span className="text-sm font-bold text-slate-900 block">
                  {detailsModalItem.country}
                </span>
              </div>
            </div>

            {/* Resume & LinkedIn (if Career Application) */}
            {detailsModalItem.sourceForm === 'Career Application' && (
              <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 text-xs">
                <button
                  onClick={() => handleViewResume(detailsModalItem)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Secure Signed Resume</span>
                </button>

                {detailsModalItem.linkedinUrl && (
                  <a
                    href={detailsModalItem.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            )}

            {/* Status Change Selector */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
              <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">Update Inquiry Status:</span>
              <select
                value={detailsModalItem.status}
                onChange={(e) => handleUpdateStatus(detailsModalItem, e.target.value)}
                className="rounded-xl px-3 py-1.5 text-xs font-bold border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-blue-500 shadow-2xs"
              >
                <option value="New">New</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Contacted">Contacted</option>
                <option value="Hired / Partnered">Hired / Partnered</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Requirement Details / Cover Letter */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                {detailsModalItem.sourceForm === 'Career Application' ? 'Cover Letter / Candidate Message' : 'Requirement Details'}
              </span>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80 max-h-48 overflow-y-auto">
                <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">
                  {detailsModalItem.details || <span className="text-slate-400 italic">No requirement details provided with this submission.</span>}
                </p>
              </div>
            </div>

            {/* Internal Administrator Note */}
            <div className="rounded-2xl bg-amber-50/60 border border-amber-200 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">Internal Administrator Review Note</span>
                <button
                  onClick={() => setIsEditingNote(!isEditingNote)}
                  className="text-xs text-amber-700 hover:text-amber-900 font-bold underline"
                >
                  {isEditingNote ? 'Cancel' : detailsModalItem.internalNotes ? 'Edit Note' : 'Add Note'}
                </button>
              </div>

              {isEditingNote ? (
                <div className="space-y-2 pt-1">
                  <textarea
                    value={internalNoteText}
                    onChange={(e) => setInternalNoteText(e.target.value)}
                    rows={3}
                    placeholder="Add confidential notes or action items..."
                    className="w-full rounded-xl border border-amber-300 bg-white p-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveInternalNote}
                      className="px-4 py-1.5 rounded-xl bg-amber-600 text-white font-bold text-xs hover:bg-amber-700 shadow-2xs"
                    >
                      Save Note
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-600">
                  {detailsModalItem.internalNotes || <span className="text-slate-400 italic">No internal note added yet.</span>}
                </p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
              <span>Submitted: {detailsModalItem.createdDate.toLocaleString()}</span>
              <div className="flex items-center gap-2">
                {admin.role === 'super_admin' && (
                  <button
                    onClick={() => handleDeleteItem(detailsModalItem)}
                    className="px-3 py-1.5 rounded-xl border border-rose-300 bg-rose-50 text-rose-600 hover:bg-rose-100 text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Delete</span>
                  </button>
                )}
                <button
                  onClick={() => setDetailsModalItem(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: SIGNED RESUME PREVIEW
          ========================================================================= */}
      {resumeModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 max-w-md w-full shadow-2xl text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mx-auto">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Candidate Resume Download</h3>
            <p className="text-xs text-slate-500">
              Generating a 15-minute temporary authorized token for candidate: <strong className="text-slate-800">{resumeModal.candidateName}</strong>
            </p>

            {resumeModal.loading ? (
              <div className="py-4 text-xs text-blue-600 animate-pulse font-semibold">Generating temporary cryptographic signature...</div>
            ) : resumeModal.signedUrl ? (
              <div className="space-y-3 pt-2">
                <a
                  href={resumeModal.signedUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  Open Signed Resume
                </a>
                <span className="text-[10px] text-slate-400 block">Token valid for 900 seconds.</span>
              </div>
            ) : (
              <p className="text-xs text-rose-500">Unable to generate token. File may not exist in storage.</p>
            )}

            <button
              onClick={() => setResumeModal({ isOpen: false, candidateName: '', signedUrl: null, loading: false })}
              className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
