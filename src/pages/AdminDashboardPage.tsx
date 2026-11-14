import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Inbox, 
  Briefcase, 
  Users, 
  Bell, 
  Activity, 
  Lock, 
  LogOut, 
  Search, 
  Filter, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ExternalLink,
  ChevronDown,
  Database,
  UserCheck,
  AlertCircle,
  Eye,
  Edit3,
  Trash2,
  X,
  Mail,
  Phone,
  Building2,
  MapPin,
  GraduationCap,
  Calendar,
  Sparkles,
  Award
} from 'lucide-react';
import { 
  AdminProfile,
  ClientInquiry,
  InquiryFormType,
  InquiryStatus,
  JobApplicationSubmission, 
  AdminNotification, 
  ActivityLog, 
  DashboardStats,
  AdminRole
} from '../types';
import { 
  getAdminSession, 
  adminLogout, 
  fetchClientInquiries,
  fetchJobApplications, 
  fetchAdminNotifications, 
  markNotificationRead, 
  fetchActivityLogs, 
  updateClientInquiryStatus,
  deleteClientInquiry,
  updateJobApplicationStatus, 
  deleteRecord,
  getSignedResumeUrl, 
  getDashboardStats, 
  getSupabaseStatus,
  fetchAdminProfiles,
  updateAdminProfileRole
} from '../lib/supabase';

export type AdminTab = 'dashboard' | 'enterprise' | 'careers' | 'executive' | 'audit' | 'security' | 'team';

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState<AdminProfile | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');

  // Telemetry data
  const [stats, setStats] = useState<DashboardStats>({
    totalInquiries: 0,
    enterpriseConsultations: 0,
    executiveInquiries: 0,
    careerApplications: 0,
    totalSubmissions: 0,
    totalEnquiries: 0,
    newEnquiries: 0,
    contactSubmissions: 0,
    newsletterSubscribers: 0,
    unreadNotifications: 0,
  });

  // Table records
  const [clientInquiries, setClientInquiries] = useState<ClientInquiry[]>([]);
  const [applications, setApplications] = useState<JobApplicationSubmission[]>([]);
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);
  const [adminTeam, setAdminTeam] = useState<AdminProfile[]>([]);
  
  // UI filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);

  // Inquiry Full Details Modal (Form 1 & Form 3)
  const [inquiryDetailsModal, setInquiryDetailsModal] = useState<ClientInquiry | null>(null);

  // Candidate Full Details Modal (Form 2)
  const [candidateDetailsModal, setCandidateDetailsModal] = useState<JobApplicationSubmission | null>(null);

  // Internal Note Modal
  const [noteModal, setNoteModal] = useState<{
    isOpen: boolean;
    id: string;
    type: 'client_inquiry' | 'career';
    currentNote: string;
    targetName?: string;
  }>({
    isOpen: false,
    id: '',
    type: 'client_inquiry',
    currentNote: '',
    targetName: '',
  });

  // Resume Signed URL Modal
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
    const [
      dashboardStats,
      clientInqData,
      appData,
      notifData,
      logsData,
      teamData
    ] = await Promise.all([
      getDashboardStats(),
      fetchClientInquiries(),
      fetchJobApplications(),
      fetchAdminNotifications(),
      fetchActivityLogs(),
      fetchAdminProfiles()
    ]);

    setStats(dashboardStats);
    setClientInquiries(clientInqData);
    setApplications(appData);
    setNotifications(notifData);
    setActivityLogs(logsData);
    setAdminTeam(teamData);
    setLoading(false);
  };

  useEffect(() => {
    if (admin) {
      loadAllData();
    }
  }, [admin]);

  const handleSignOut = () => {
    adminLogout();
    navigate('/admin/login');
  };

  // Status Handlers for Client Inquiries (Enterprise Consultation & Executive Inquiry)
  const handleClientInquiryStatus = async (id: string, status: InquiryStatus | string) => {
    await updateClientInquiryStatus(id, status);
    setClientInquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
    if (inquiryDetailsModal?.id === id) {
      setInquiryDetailsModal(prev => prev ? { ...prev, status } : null);
    }
    loadAllData();
  };

  const handleDeleteClientInquiry = async (id: string) => {
    if (admin?.role !== 'super_admin') {
      alert('Only Super Administrators have permissions to delete records.');
      return;
    }
    if (window.confirm('Are you sure you want to permanently delete this inquiry record?')) {
      await deleteClientInquiry(id);
      if (inquiryDetailsModal?.id === id) {
        setInquiryDetailsModal(null);
      }
      loadAllData();
    }
  };

  // Status Handlers for Career Applications
  const handleApplicationStatus = async (id: string, status: JobApplicationSubmission['status']) => {
    await updateJobApplicationStatus(id, status);
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status } : a));
    if (candidateDetailsModal?.id === id) {
      setCandidateDetailsModal(prev => prev ? { ...prev, status } : null);
    }
    loadAllData();
  };

  const handleDeleteApplication = async (id: string) => {
    if (admin?.role !== 'super_admin') {
      alert('Only Super Administrators have permissions to delete records.');
      return;
    }
    if (window.confirm('Are you sure you want to permanently delete this applicant record?')) {
      await deleteRecord('career_applications', id);
      if (candidateDetailsModal?.id === id) {
        setCandidateDetailsModal(null);
      }
      loadAllData();
    }
  };

  // Save Note Handler
  const handleSaveNote = async () => {
    if (noteModal.type === 'client_inquiry') {
      const inq = clientInquiries.find(i => i.id === noteModal.id);
      if (inq) {
        await updateClientInquiryStatus(noteModal.id, inq.status, noteModal.currentNote);
        if (inquiryDetailsModal?.id === noteModal.id) {
          setInquiryDetailsModal(prev => prev ? { ...prev, internal_notes: noteModal.currentNote } : null);
        }
      }
    } else if (noteModal.type === 'career') {
      const app = applications.find(a => a.id === noteModal.id);
      if (app) {
        await updateJobApplicationStatus(noteModal.id, app.status, noteModal.currentNote);
        if (candidateDetailsModal?.id === noteModal.id) {
          setCandidateDetailsModal(prev => prev ? { ...prev, internal_notes: noteModal.currentNote } : null);
        }
      }
    }
    setNoteModal({ isOpen: false, id: '', type: 'client_inquiry', currentNote: '', targetName: '' });
    loadAllData();
  };

  // Secure Temporary Signed Resume Viewer
  const handleViewResume = async (app: JobApplicationSubmission) => {
    setResumeModal({
      isOpen: true,
      candidateName: app.full_name,
      signedUrl: null,
      loading: true,
    });
    const res = await getSignedResumeUrl(app.resume_storage_path);
    setResumeModal({
      isOpen: true,
      candidateName: app.full_name,
      signedUrl: res.url,
      loading: false,
    });
  };

  // Notification Handler
  const handleNotificationClick = async (notif: AdminNotification) => {
    if (!notif.is_read) {
      await markNotificationRead(notif.id);
      setNotifications(prev => prev.map(n => n.id === notif.id ? { ...n, is_read: true } : n));
    }
    if (notif.type === 'ENTERPRISE') setActiveTab('enterprise');
    else if (notif.type === 'EXECUTIVE') setActiveTab('executive');
    else if (notif.type === 'CAREER') setActiveTab('careers');
    else if (notif.type === 'SECURITY') setActiveTab('security');
    else setActiveTab('dashboard');
    setNotificationMenuOpen(false);
  };

  // Super Admin Team Role Modification
  const handleRoleChange = async (userId: string, newRole: AdminRole, isActive: boolean) => {
    if (admin?.role !== 'super_admin') {
      alert('Only Super Administrators can modify role assignments.');
      return;
    }
    await updateAdminProfileRole(userId, newRole, isActive);
    loadAllData();
  };

  // Export CSV
  const exportToCSV = (data: any[], filename: string) => {
    if (!data.length) return;
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(obj => Object.values(obj).map(val => `"${String(val || '').replace(/"/g, '""')}"`).join(','));
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${filename}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Separate records for the 3 website forms
  const enterpriseInquiries = useMemo(
    () => clientInquiries.filter(i => i.form_type === 'Enterprise Consultation'),
    [clientInquiries]
  );

  const executiveInquiries = useMemo(
    () => clientInquiries.filter(i => i.form_type === 'Executive Inquiry'),
    [clientInquiries]
  );

  // Filtered Lists for Form 1 (Enterprise Consultation)
  const filteredEnterprise = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return enterpriseInquiries.filter(inq => {
      const matchesSearch = 
        (inq.full_name || '').toLowerCase().includes(q) ||
        (inq.company_name || '').toLowerCase().includes(q) ||
        (inq.email || '').toLowerCase().includes(q) ||
        (inq.phone_number || '').includes(q) ||
        (inq.country_code || '').includes(q) ||
        (inq.service_requirement || '').toLowerCase().includes(q) ||
        (inq.requirement_details || '').toLowerCase().includes(q);
      const matchesStatus = statusFilter === 'ALL' || (inq.status || '').toLowerCase() === statusFilter.toLowerCase();
      return matchesSearch && matchesStatus;
    });
  }, [enterpriseInquiries, searchTerm, statusFilter]);

  // Filtered Lists for Form 2 (Career Application)
  const filteredApplications = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return applications.filter(app => {
      const matchesSearch = 
        (app.full_name || '').toLowerCase().includes(q) ||
        (app.position || '').toLowerCase().includes(q) ||
        (app.email || '').toLowerCase().includes(q) ||
        (app.phone || '').includes(q) ||
        (app.location || '').toLowerCase().includes(q) ||
        (app.experience || '').toLowerCase().includes(q) ||
        (app.education || '').toLowerCase().includes(q);
      const matchesStatus = statusFilter === 'ALL' || (app.status || '').toUpperCase() === statusFilter.toUpperCase();
      return matchesSearch && matchesStatus;
    });
  }, [applications, searchTerm, statusFilter]);

  // Filtered Lists for Form 3 (Executive Inquiry)
  const filteredExecutive = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return executiveInquiries.filter(inq => {
      const matchesSearch = 
        (inq.full_name || '').toLowerCase().includes(q) ||
        (inq.company_name || '').toLowerCase().includes(q) ||
        (inq.email || '').toLowerCase().includes(q) ||
        (inq.phone_number || '').includes(q) ||
        (inq.country_code || '').includes(q) ||
        (inq.enquiry_type || '').toLowerCase().includes(q) ||
        (inq.requirement_details || '').toLowerCase().includes(q);
      const matchesStatus = statusFilter === 'ALL' || (inq.status || '').toLowerCase() === statusFilter.toLowerCase();
      return matchesSearch && matchesStatus;
    });
  }, [executiveInquiries, searchTerm, statusFilter]);

  // Unified Chronological Feed for Overview (across all 3 forms)
  const unifiedRecentFeed = useMemo(() => {
    type UnifiedFeedItem = {
      id: string;
      sourceForm: 'Enterprise Consultation' | 'Career Application' | 'Executive Inquiry';
      name: string;
      secondary: string;
      detailText: string;
      email: string;
      phone: string;
      status: string;
      createdAt: string;
      originalRecord: ClientInquiry | JobApplicationSubmission;
    };

    const feed: UnifiedFeedItem[] = [
      ...enterpriseInquiries.map(e => ({
        id: e.id,
        sourceForm: 'Enterprise Consultation' as const,
        name: e.full_name,
        secondary: e.company_name || 'Independent Enterprise',
        detailText: e.service_requirement || 'Consultation',
        email: e.email,
        phone: `${e.country_code} ${e.phone_number}`,
        status: e.status,
        createdAt: e.created_at,
        originalRecord: e,
      })),
      ...executiveInquiries.map(x => ({
        id: x.id,
        sourceForm: 'Executive Inquiry' as const,
        name: x.full_name,
        secondary: x.company_name || 'Confidential Enterprise',
        detailText: x.enquiry_type || 'Executive Inquiry',
        email: x.email,
        phone: `${x.country_code} ${x.phone_number}`,
        status: x.status,
        createdAt: x.created_at,
        originalRecord: x,
      })),
      ...applications.map(a => ({
        id: a.id || 'app-id',
        sourceForm: 'Career Application' as const,
        name: a.full_name,
        secondary: a.position,
        detailText: `${a.experience} • ${a.location || 'India'}`,
        email: a.email,
        phone: a.phone || 'N/A',
        status: a.status || 'PENDING',
        createdAt: a.created_at || new Date().toISOString(),
        originalRecord: a,
      }))
    ];

    feed.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return feed;
  }, [enterpriseInquiries, executiveInquiries, applications]);

  // Aggregate stats
  const totalSubmissions = enterpriseInquiries.length + applications.length + executiveInquiries.length;
  const pendingEnterprise = enterpriseInquiries.filter(i => i.status === 'Pending' || i.status === 'NEW').length;
  const pendingExecutive = executiveInquiries.filter(i => i.status === 'Pending' || i.status === 'NEW').length;
  const pendingCareers = applications.filter(a => a.status === 'PENDING').length;

  // Chart Data
  const monthlyActivityData = [
    { month: 'Apr', enterprise: 12, careers: 4, executive: 6 },
    { month: 'May', enterprise: 18, careers: 7, executive: 9 },
    { month: 'Jun', enterprise: 24, careers: 9, executive: 14 },
    { month: 'Jul', enterprise: 31, careers: 14, executive: 19 },
    { month: 'Aug', enterprise: enterpriseInquiries.length + 10, careers: applications.length + 5, executive: executiveInquiries.length + 8 },
  ];

  const formDistributionData = [
    { name: 'Enterprise Consultations', value: Math.max(1, enterpriseInquiries.length) },
    { name: 'Career Applications', value: Math.max(1, applications.length) },
    { name: 'Executive Inquiries', value: Math.max(1, executiveInquiries.length) },
  ];

  const FORM_PIE_COLORS = ['#00d2ff', '#10b981', '#a855f7'];

  if (!admin) return null;

  return (
    <div className="min-h-screen bg-[#040813] text-white flex flex-col font-sans">
      {/* Top Admin Header */}
      <header className="h-16 border-b border-sky-500/15 bg-[#0B1528]/90 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-md">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-white tracking-tight">
                KNOOVIQ Console
              </span>
              <span className={`rounded-md px-2 py-0.5 text-[10px] font-mono font-bold uppercase ${
                admin.role === 'super_admin' 
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40'
                  : admin.role === 'admin'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
              }`}>
                {admin.role.replace('_', ' ')}
              </span>
            </div>
            <p className="text-[10px] text-slate-400">{admin.email}</p>
          </div>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setNotificationMenuOpen(!notificationMenuOpen)}
              className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/20 bg-[#050B17] text-slate-300 hover:text-white hover:border-cyan-400/40"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              {stats.unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
                  {stats.unreadNotifications}
                </span>
              )}
            </button>

            {notificationMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 rounded-2xl border border-sky-500/25 bg-[#0B1528] p-3 shadow-2xl z-50">
                <div className="flex items-center justify-between pb-2 border-b border-sky-500/15 mb-2">
                  <span className="text-xs font-bold text-white">Admin Notifications</span>
                  <span className="text-[10px] text-cyan-400 font-medium">{stats.unreadNotifications} unread</span>
                </div>
                <div className="space-y-1.5 max-h-64 overflow-y-auto">
                  {notifications.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => handleNotificationClick(n)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all ${
                        n.is_read ? 'bg-[#050B17]/40 text-slate-400' : 'bg-sky-500/10 text-slate-200 border border-sky-500/20'
                      }`}
                    >
                      <p className="text-xs font-bold text-white leading-tight">{n.title}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{n.message}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={loadAllData}
            title="Refresh Database Telemetry"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/20 bg-[#050B17] text-slate-300 hover:text-white"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-xs font-bold text-rose-300 hover:bg-rose-500/20 transition-all"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Layout Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Nav (Desktop) */}
        <aside className="w-64 border-r border-sky-500/15 bg-[#070E1C] p-4 flex flex-col justify-between hidden md:flex shrink-0">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 block mb-2">
              Website Forms & Submissions
            </span>

            {/* Overview */}
            <button
              onClick={() => { setActiveTab('dashboard'); setSearchTerm(''); setStatusFilter('ALL'); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Executive Overview</span>
            </button>

            {/* Form 1: Enterprise Consultation */}
            <button
              onClick={() => { setActiveTab('enterprise'); setSearchTerm(''); setStatusFilter('ALL'); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'enterprise'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Inbox className="h-4 w-4 text-cyan-400 shrink-0" />
                <span className="truncate">Enterprise Consultations</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#050B17] text-cyan-300 shrink-0 border border-sky-500/20">
                {enterpriseInquiries.length}
              </span>
            </button>

            {/* Form 2: Career Application */}
            <button
              onClick={() => { setActiveTab('careers'); setSearchTerm(''); setStatusFilter('ALL'); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'careers'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Users className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="truncate">Career Applications</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#050B17] text-emerald-300 shrink-0 border border-emerald-500/20">
                {applications.length}
              </span>
            </button>

            {/* Form 3: Executive Inquiry */}
            <button
              onClick={() => { setActiveTab('executive'); setSearchTerm(''); setStatusFilter('ALL'); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'executive'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Briefcase className="h-4 w-4 text-purple-400 shrink-0" />
                <span className="truncate">Executive Inquiries</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#050B17] text-purple-300 shrink-0 border border-purple-500/20">
                {executiveInquiries.length}
              </span>
            </button>

            {/* Compliance & System Section */}
            <div className="pt-4 mt-4 border-t border-sky-500/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 block mb-2">
                System & Security
              </span>

              <button
                onClick={() => { setActiveTab('audit'); setSearchTerm(''); setStatusFilter('ALL'); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'audit'
                    ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Activity className="h-4 w-4" />
                <span>Activity & Audit Logs</span>
              </button>

              <button
                onClick={() => { setActiveTab('security'); setSearchTerm(''); setStatusFilter('ALL'); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'security'
                    ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Database className="h-4 w-4" />
                <span>RLS & Security Matrix</span>
              </button>

              {admin.role === 'super_admin' && (
                <button
                  onClick={() => { setActiveTab('team'); setSearchTerm(''); setStatusFilter('ALL'); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'team'
                      ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <UserCheck className="h-4 w-4" />
                  <span>Admin Allowlist Team</span>
                </button>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-sky-500/15 bg-[#050B17] p-3 text-[11px] text-slate-400">
            <p className="font-bold text-white flex items-center gap-1.5 mb-0.5">
              <Lock className="h-3 w-3 text-emerald-400" />
              <span>Defense-In-Depth Active</span>
            </p>
            <p className="text-[10px]">Session protected with enterprise CSRF & RLS guardrails.</p>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">

          {/* Mobile Tab Navigation Pills */}
          <div className="flex md:hidden overflow-x-auto pb-2 gap-2 border-b border-sky-500/15">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                activeTab === 'dashboard' ? 'bg-cyan-500 text-black' : 'bg-[#0B1528] text-slate-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                activeTab === 'enterprise' ? 'bg-cyan-500 text-black' : 'bg-[#0B1528] text-slate-300'
              }`}
            >
              Enterprise ({enterpriseInquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('careers')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                activeTab === 'careers' ? 'bg-emerald-500 text-black' : 'bg-[#0B1528] text-slate-300'
              }`}
            >
              Careers ({applications.length})
            </button>
            <button
              onClick={() => setActiveTab('executive')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                activeTab === 'executive' ? 'bg-purple-500 text-white' : 'bg-[#0B1528] text-slate-300'
              }`}
            >
              Executive ({executiveInquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                activeTab === 'audit' ? 'bg-cyan-500 text-black' : 'bg-[#0B1528] text-slate-300'
              }`}
            >
              Audit
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap ${
                activeTab === 'security' ? 'bg-cyan-500 text-black' : 'bg-[#0B1528] text-slate-300'
              }`}
            >
              Security
            </button>
          </div>
          
          {/* =========================================================================
              TAB 1: EXECUTIVE DASHBOARD (OVERVIEW OF ALL 3 FORMS)
              ========================================================================= */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stat Cards Ribbon — Representing the 3 Website Forms + Total */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Form 1 Card */}
                <div 
                  onClick={() => setActiveTab('enterprise')}
                  className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-2 cursor-pointer hover:border-cyan-400/50 hover:bg-[#0E1A33] transition-all group"
                >
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Enterprise Consultations</span>
                    <Inbox className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    {enterpriseInquiries.length}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-cyan-300 font-medium">
                    <span>+{pendingEnterprise} pending review</span>
                    <span className="text-slate-400 font-mono text-[10px] group-hover:text-cyan-300">View Form 1 &rarr;</span>
                  </div>
                </div>

                {/* Form 2 Card */}
                <div 
                  onClick={() => setActiveTab('careers')}
                  className="rounded-3xl border border-emerald-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-2 cursor-pointer hover:border-emerald-400/50 hover:bg-[#0E1A33] transition-all group"
                >
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Career Applications</span>
                    <Users className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    {applications.length}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-emerald-300 font-medium">
                    <span>+{pendingCareers} awaiting review</span>
                    <span className="text-slate-400 font-mono text-[10px] group-hover:text-emerald-300">View Form 2 &rarr;</span>
                  </div>
                </div>

                {/* Form 3 Card */}
                <div 
                  onClick={() => setActiveTab('executive')}
                  className="rounded-3xl border border-purple-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-2 cursor-pointer hover:border-purple-400/50 hover:bg-[#0E1A33] transition-all group"
                >
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Executive Inquiries</span>
                    <Briefcase className="h-4 w-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    {executiveInquiries.length}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-purple-300 font-medium">
                    <span>+{pendingExecutive} pending review</span>
                    <span className="text-slate-400 font-mono text-[10px] group-hover:text-purple-300">View Form 3 &rarr;</span>
                  </div>
                </div>

                {/* Total Submissions Card */}
                <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Total Submissions</span>
                    <Activity className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    {totalSubmissions}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {enterpriseInquiries.length} Ent • {applications.length} Careers • {executiveInquiries.length} Exec
                  </div>
                </div>
              </div>

              {/* Visual Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-base font-bold text-white">
                      Submission Velocity Across Forms (2026)
                    </h3>
                    <div className="flex items-center gap-3 text-[10px] font-bold">
                      <span className="flex items-center gap-1 text-cyan-300">
                        <span className="h-2 w-2 rounded-full bg-[#00d2ff]" /> Ent Consultations
                      </span>
                      <span className="flex items-center gap-1 text-emerald-300">
                        <span className="h-2 w-2 rounded-full bg-[#10b981]" /> Careers
                      </span>
                      <span className="flex items-center gap-1 text-purple-300">
                        <span className="h-2 w-2 rounded-full bg-[#a855f7]" /> Exec Inquiries
                      </span>
                    </div>
                  </div>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyActivityData}>
                        <XAxis dataKey="month" stroke="#64748b" textAnchor="end" fontSize={11} />
                        <YAxis stroke="#64748b" fontSize={11} />
                        <Tooltip contentStyle={{ backgroundColor: '#050B17', borderColor: '#00d2ff33', borderRadius: '12px' }} />
                        <Line type="monotone" dataKey="enterprise" stroke="#00d2ff" strokeWidth={2.5} name="Enterprise Consultations" />
                        <Line type="monotone" dataKey="careers" stroke="#10b981" strokeWidth={2} name="Career Applications" />
                        <Line type="monotone" dataKey="executive" stroke="#a855f7" strokeWidth={2} name="Executive Inquiries" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="lg:col-span-4 rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl">
                  <h3 className="font-display text-base font-bold text-white mb-4">
                    Form Volume Breakdown
                  </h3>
                  <div className="h-56 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={formDistributionData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={75}
                          paddingAngle={5}
                        >
                          {formDistributionData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={FORM_PIE_COLORS[index % FORM_PIE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#050B17', borderColor: '#00d2ff33', borderRadius: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-1.5 pt-2 border-t border-sky-500/15 text-[11px]">
                    <div className="flex items-center justify-between text-cyan-300">
                      <span>Enterprise Consultations:</span>
                      <span className="font-bold font-mono">{enterpriseInquiries.length}</span>
                    </div>
                    <div className="flex items-center justify-between text-emerald-300">
                      <span>Career Applications:</span>
                      <span className="font-bold font-mono">{applications.length}</span>
                    </div>
                    <div className="flex items-center justify-between text-purple-300">
                      <span>Executive Inquiries:</span>
                      <span className="font-bold font-mono">{executiveInquiries.length}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Inquiries Quick Feed (Unified across all 3 forms) */}
              <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-white">
                      Live Submissions Stream
                    </h3>
                    <p className="text-xs text-slate-400">
                      Recent records submitted via Enterprise Consultation, Career Application, and Executive Inquiry forms.
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    Showing latest {Math.min(8, unifiedRecentFeed.length)} of {unifiedRecentFeed.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {unifiedRecentFeed.slice(0, 8).map((item) => {
                    const isEnt = item.sourceForm === 'Enterprise Consultation';
                    const isCareer = item.sourceForm === 'Career Application';
                    const isExec = item.sourceForm === 'Executive Inquiry';
                    const formattedDate = item.createdAt ? new Date(item.createdAt).toLocaleDateString(undefined, { 
                      month: 'short', 
                      day: 'numeric', 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    }) : 'Recent';

                    return (
                      <div
                        key={`${item.sourceForm}-${item.id}`}
                        className="p-4 rounded-2xl bg-[#050B17]/60 border border-sky-500/15 flex flex-wrap items-center justify-between gap-3 hover:border-cyan-400/30 transition-colors"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase shrink-0 mt-0.5 ${
                            isEnt
                              ? 'bg-sky-500/20 text-cyan-300 border border-sky-500/30'
                              : isCareer
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          }`}>
                            {item.sourceForm}
                          </span>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-white flex items-center gap-1.5 flex-wrap">
                              <span>{item.name}</span>
                              {item.secondary && (
                                <>
                                  <span className="text-slate-500 font-normal">•</span>
                                  <span className={`font-medium ${isEnt ? 'text-cyan-300' : isCareer ? 'text-emerald-300' : 'text-purple-300'}`}>
                                    {item.secondary}
                                  </span>
                                </>
                              )}
                            </h4>
                            <p className="text-[11px] text-slate-400 flex items-center gap-2 flex-wrap mt-0.5">
                              <span className="text-slate-300 font-medium">{item.detailText}</span>
                              <span className="text-slate-600">•</span>
                              <span className="text-slate-300">{item.email}</span>
                              <span className="text-slate-600">•</span>
                              <span>{item.phone}</span>
                              <span className="text-slate-600">•</span>
                              <span className="text-slate-500 font-mono text-[10px]">{formattedDate}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 shrink-0">
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${
                            item.status === 'Pending' || item.status === 'PENDING' || item.status === 'NEW'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : item.status === 'In Review' || item.status === 'REVIEWED'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : item.status === 'Contacted' || item.status === 'INTERVIEW_SCHEDULED'
                              ? 'bg-sky-500/20 text-cyan-300 border border-sky-500/30'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}>
                            {item.status}
                          </span>
                          
                          <button
                            onClick={() => {
                              if (isCareer) {
                                setCandidateDetailsModal(item.originalRecord as JobApplicationSubmission);
                              } else {
                                setInquiryDetailsModal(item.originalRecord as ClientInquiry);
                              }
                            }}
                            className="text-xs font-semibold text-slate-400 hover:text-cyan-300 p-1.5 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1"
                            title="View Complete Submission Details"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline text-[11px]">Details</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 2: ENTERPRISE CONSULTATIONS (FORM 1)
              ========================================================================= */}
          {activeTab === 'enterprise' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500/20 text-cyan-300 border border-sky-500/30">
                      FORM 1
                    </span>
                    <h2 className="font-display text-xl font-bold text-white">Enterprise Consultations</h2>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct incoming inquiries submitted via Enterprise Consultation modal & AI chatbot.
                  </p>
                </div>
                <button
                  onClick={() => exportToCSV(filteredEnterprise, 'knooviq_enterprise_consultations')}
                  className="flex items-center gap-2 rounded-xl bg-[#0B1528] border border-sky-500/25 px-4 py-2 text-xs font-bold text-slate-200 hover:text-white hover:border-cyan-400/50 transition-colors"
                >
                  <Download className="h-4 w-4 text-cyan-400" />
                  <span>Export CSV ({filteredEnterprise.length})</span>
                </button>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-[#0B1528]/80 border border-sky-500/15">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by full name, company, email, phone, service requirement..."
                    className="w-full rounded-xl border border-sky-500/20 bg-[#050B17] pl-10 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Status:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="rounded-xl border border-sky-500/20 bg-[#050B17] px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="In Review">In Review</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Records List */}
              <div className="space-y-4">
                {filteredEnterprise.length === 0 ? (
                  <div className="text-center py-12 rounded-3xl border border-sky-500/15 bg-[#0B1528]/50 p-8 space-y-3">
                    <div className="h-12 w-12 rounded-full bg-sky-500/10 text-cyan-400 mx-auto flex items-center justify-center">
                      <Inbox className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-bold text-white">No Enterprise Consultations Found</h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      No records match the current search or filters. Try clearing the search query or resetting status.
                    </p>
                  </div>
                ) : (
                  filteredEnterprise.map((inq) => {
                    const wordCount = inq.requirement_details?.trim() ? inq.requirement_details.trim().split(/\s+/).filter(Boolean).length : 0;
                    const formattedDate = inq.created_at ? new Date(inq.created_at).toLocaleString() : 'Recent';

                    return (
                      <div key={inq.id} className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-4 hover:border-cyan-400/30 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2.5 flex-wrap">
                              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-sky-500/20 text-cyan-300 border border-sky-500/40">
                                Enterprise Consultation
                              </span>
                              <h3 className="font-bold text-white text-base">{inq.full_name}</h3>
                              {inq.company_name ? (
                                <span className="text-xs text-cyan-300 font-bold">• {inq.company_name}</span>
                              ) : (
                                <span className="text-xs text-slate-500 font-medium italic">• Independent / Not specified</span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-2 flex-wrap">
                              <a href={`mailto:${inq.email}`} className="text-slate-300 hover:text-cyan-300 transition-colors">
                                {inq.email}
                              </a>
                              <span>•</span>
                              <a href={`tel:${inq.country_code}${inq.phone_number}`} className="text-slate-300 hover:text-cyan-300 transition-colors">
                                {inq.country_code} {inq.phone_number}
                              </a>
                            </p>
                          </div>

                          <div className="flex items-center gap-2.5 flex-wrap">
                            <select
                              value={inq.status}
                              onChange={(e) => handleClientInquiryStatus(inq.id, e.target.value as InquiryStatus)}
                              className={`rounded-xl px-3 py-1.5 text-xs font-bold border focus:outline-none transition-colors ${
                                inq.status === 'Pending'
                                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                                  : inq.status === 'In Review'
                                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                                  : inq.status === 'Contacted'
                                  ? 'bg-sky-500/20 border-sky-500/40 text-cyan-300'
                                  : inq.status === 'Resolved'
                                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                                  : 'bg-slate-500/20 border-slate-500/40 text-slate-300'
                              }`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="In Review">In Review</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Resolved">Resolved</option>
                              <option value="Archived">Archived</option>
                            </select>

                            <button
                              onClick={() => setInquiryDetailsModal(inq)}
                              className="px-3 py-1.5 rounded-xl border border-sky-500/25 bg-[#050B17] text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors flex items-center gap-1.5"
                              title="View complete details"
                            >
                              <Eye className="h-3.5 w-3.5 text-cyan-400" />
                              <span>View Details</span>
                            </button>

                            {admin.role === 'super_admin' && (
                              <button
                                onClick={() => handleDeleteClientInquiry(inq.id)}
                                title="Delete record"
                                className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Service Requirement Badge */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-block rounded-md bg-sky-500/15 px-2.5 py-0.5 text-xs font-bold text-cyan-300 border border-sky-400/30">
                            Service Requirement: {inq.service_requirement || 'SAP Consulting'}
                          </span>
                        </div>

                        {/* Requirement Details Box */}
                        {inq.requirement_details ? (
                          <div className="bg-[#050B17]/70 rounded-2xl p-4 border border-sky-500/15 space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-slate-400">
                              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[10px]">Requirement Details</span>
                              <span className="font-mono">{wordCount} / 500 words</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                              {inq.requirement_details}
                            </p>
                            {wordCount > 35 && (
                              <button
                                onClick={() => setInquiryDetailsModal(inq)}
                                className="text-[11px] text-cyan-400 hover:underline font-semibold"
                              >
                                Read full requirement &rarr;
                              </button>
                            )}
                          </div>
                        ) : (
                          <p className="text-xs text-slate-500 italic py-1">
                            No requirement details submitted with this inquiry.
                          </p>
                        )}

                        {inq.internal_notes && (
                          <div className="text-xs text-amber-300 bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
                            <strong className="block text-[10px] uppercase font-bold text-amber-400 mb-0.5">Internal Note:</strong>
                            {inq.internal_notes}
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-2 border-t border-sky-500/10 text-[11px] text-slate-400">
                          <span>Submitted: {formattedDate}</span>
                          <button
                            onClick={() => setNoteModal({
                              isOpen: true,
                              id: inq.id,
                              type: 'client_inquiry',
                              currentNote: inq.internal_notes || '',
                              targetName: inq.full_name,
                            })}
                            className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                          >
                            <Edit3 className="h-3 w-3" />
                            <span>{inq.internal_notes ? 'Edit Internal Note' : 'Add Internal Note'}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 3: CAREER APPLICATIONS (FORM 2)
              ========================================================================= */}
          {activeTab === 'careers' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      FORM 2
                    </span>
                    <h2 className="font-display text-xl font-bold text-white">Career Applications & Talent Pipeline</h2>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Candidate submissions from "Submit Your Application" form with secure 15-minute temporary signed resume downloads.
                  </p>
                </div>
                <button
                  onClick={() => exportToCSV(filteredApplications, 'knooviq_career_applications')}
                  className="flex items-center gap-2 rounded-xl bg-[#0B1528] border border-sky-500/25 px-4 py-2 text-xs font-bold text-slate-200 hover:text-white hover:border-emerald-400/50 transition-colors"
                >
                  <Download className="h-4 w-4 text-emerald-400" />
                  <span>Export CSV ({filteredApplications.length})</span>
                </button>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-[#0B1528]/80 border border-sky-500/15">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search candidate by name, position, location, experience, qualification..."
                    className="w-full rounded-xl border border-sky-500/20 bg-[#050B17] pl-10 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Application Status:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="rounded-xl border border-sky-500/20 bg-[#050B17] px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="PENDING">PENDING</option>
                    <option value="REVIEWED">REVIEWED</option>
                    <option value="INTERVIEW_SCHEDULED">INTERVIEW_SCHEDULED</option>
                    <option value="OFFERED">OFFERED</option>
                    <option value="REJECTED">REJECTED</option>
                  </select>
                </div>
              </div>

              {/* Records List */}
              <div className="space-y-4">
                {filteredApplications.length === 0 ? (
                  <div className="text-center py-12 rounded-3xl border border-sky-500/15 bg-[#0B1528]/50 p-8 space-y-3">
                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                      <Users className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-bold text-white">No Career Applications Found</h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      No candidate submissions match your query. Try clearing search keywords or resetting the status filter.
                    </p>
                  </div>
                ) : (
                  filteredApplications.map((app) => {
                    const formattedDate = app.created_at ? new Date(app.created_at).toLocaleString() : 'Recent';

                    return (
                      <div key={app.id || app.email} className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-4 hover:border-emerald-400/30 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2.5 flex-wrap">
                              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                                Career Application
                              </span>
                              <h3 className="font-bold text-white text-base">{app.full_name}</h3>
                              <span className="text-xs text-emerald-300 font-bold">• {app.position}</span>
                            </div>

                            <div className="text-xs text-slate-400 mt-1.5 flex items-center gap-2 flex-wrap">
                              <a href={`mailto:${app.email}`} className="text-slate-300 hover:text-emerald-300 transition-colors">
                                {app.email}
                              </a>
                              <span>•</span>
                              <a href={`tel:${app.phone}`} className="text-slate-300 hover:text-emerald-300 transition-colors">
                                {app.phone}
                              </a>
                              {app.location && (
                                <>
                                  <span>•</span>
                                  <span className="flex items-center gap-1 text-slate-400">
                                    <MapPin className="h-3 w-3 text-emerald-400" />
                                    {app.location}
                                  </span>
                                </>
                              )}
                              {app.education && (
                                <>
                                  <span>•</span>
                                  <span className="flex items-center gap-1 text-slate-400">
                                    <GraduationCap className="h-3 w-3 text-cyan-400" />
                                    {app.education}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5 flex-wrap">
                            <select
                              value={app.status || 'PENDING'}
                              onChange={(e) => handleApplicationStatus(app.id || '', e.target.value as any)}
                              className={`rounded-xl px-3 py-1.5 text-xs font-bold border focus:outline-none transition-colors ${
                                app.status === 'PENDING'
                                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                                  : app.status === 'REVIEWED'
                                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                                  : app.status === 'INTERVIEW_SCHEDULED'
                                  ? 'bg-sky-500/20 border-sky-500/40 text-cyan-300'
                                  : app.status === 'OFFERED'
                                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                                  : 'bg-slate-500/20 border-slate-500/40 text-slate-300'
                              }`}
                            >
                              <option value="PENDING">PENDING</option>
                              <option value="REVIEWED">REVIEWED</option>
                              <option value="INTERVIEW_SCHEDULED">INTERVIEW_SCHEDULED</option>
                              <option value="OFFERED">OFFERED</option>
                              <option value="REJECTED">REJECTED</option>
                            </select>

                            <button
                              onClick={() => setCandidateDetailsModal(app)}
                              className="px-3 py-1.5 rounded-xl border border-sky-500/25 bg-[#050B17] text-xs font-semibold text-slate-300 hover:text-white hover:border-emerald-400/50 transition-colors flex items-center gap-1.5"
                              title="View full candidate details"
                            >
                              <Eye className="h-3.5 w-3.5 text-emerald-400" />
                              <span>View Details</span>
                            </button>

                            {admin.role === 'super_admin' && app.id && (
                              <button
                                onClick={() => handleDeleteApplication(app.id!)}
                                title="Delete record"
                                className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Experience & Professional Details Ribbon */}
                        <div className="flex items-center gap-2 flex-wrap text-xs">
                          <span className="inline-block rounded-md bg-emerald-500/15 px-2.5 py-0.5 font-bold text-emerald-300 border border-emerald-400/30">
                            Experience: {app.experience}
                          </span>
                        </div>

                        {/* Action Buttons: Resume & LinkedIn */}
                        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                          <button
                            onClick={() => handleViewResume(app)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/20 border border-sky-400/30 text-cyan-300 font-bold hover:bg-sky-500/30 transition-colors"
                          >
                            <FileText className="h-3.5 w-3.5" />
                            <span>Generate Secure Signed Resume URL</span>
                          </button>

                          {app.portfolio_linkedin && (
                            <a
                              href={app.portfolio_linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#050B17] border border-sky-500/20 text-cyan-400 hover:border-cyan-400/50 hover:underline font-semibold transition-colors"
                            >
                              <span>LinkedIn Profile</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>

                        {/* Cover Letter / Candidate Message */}
                        {app.cover_letter && (
                          <div className="bg-[#050B17]/70 rounded-2xl p-4 border border-sky-500/15 space-y-1.5">
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Candidate Message & Professional Notes</span>
                            <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed line-clamp-4">
                              {app.cover_letter}
                            </p>
                          </div>
                        )}

                        {app.internal_notes && (
                          <div className="text-xs text-amber-300 bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
                            <strong className="block text-[10px] uppercase font-bold text-amber-400 mb-0.5">Internal Review Note:</strong>
                            {app.internal_notes}
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-2 border-t border-sky-500/10 text-[11px] text-slate-400">
                          <span>Submitted: {formattedDate}</span>
                          <button
                            onClick={() => setNoteModal({
                              isOpen: true,
                              id: app.id || '',
                              type: 'career',
                              currentNote: app.internal_notes || '',
                              targetName: app.full_name,
                            })}
                            className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                          >
                            <Edit3 className="h-3 w-3" />
                            <span>{app.internal_notes ? 'Edit Internal Note' : 'Add Internal Note'}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 4: EXECUTIVE INQUIRIES (FORM 3)
              ========================================================================= */}
          {activeTab === 'executive' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      FORM 3
                    </span>
                    <h2 className="font-display text-xl font-bold text-white">Executive Inquiries</h2>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Confidential high-level enterprise inquiries submitted via Knooviq Connect page under NDA.
                  </p>
                </div>
                <button
                  onClick={() => exportToCSV(filteredExecutive, 'knooviq_executive_inquiries')}
                  className="flex items-center gap-2 rounded-xl bg-[#0B1528] border border-purple-500/25 px-4 py-2 text-xs font-bold text-slate-200 hover:text-white hover:border-purple-400/50 transition-colors"
                >
                  <Download className="h-4 w-4 text-purple-400" />
                  <span>Export CSV ({filteredExecutive.length})</span>
                </button>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-[#0B1528]/80 border border-purple-500/20">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by full name, company, work email, phone, enquiry type..."
                    className="w-full rounded-xl border border-sky-500/20 bg-[#050B17] pl-10 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                  />
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Status:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="rounded-xl border border-sky-500/20 bg-[#050B17] px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="In Review">In Review</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>
              </div>

              {/* Records List */}
              <div className="space-y-4">
                {filteredExecutive.length === 0 ? (
                  <div className="text-center py-12 rounded-3xl border border-purple-500/20 bg-[#0B1528]/50 p-8 space-y-3">
                    <div className="h-12 w-12 rounded-full bg-purple-500/10 text-purple-400 mx-auto flex items-center justify-center">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-bold text-white">No Executive Inquiries Found</h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      No records match the current search or filters. Try adjusting your query or resetting status.
                    </p>
                  </div>
                ) : (
                  filteredExecutive.map((inq) => {
                    const wordCount = inq.requirement_details?.trim() ? inq.requirement_details.trim().split(/\s+/).filter(Boolean).length : 0;
                    const formattedDate = inq.created_at ? new Date(inq.created_at).toLocaleString() : 'Recent';

                    return (
                      <div key={inq.id} className="rounded-3xl border border-purple-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-4 hover:border-purple-400/40 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2.5 flex-wrap">
                              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40">
                                Executive Inquiry
                              </span>
                              <h3 className="font-bold text-white text-base">{inq.full_name}</h3>
                              {inq.company_name ? (
                                <span className="text-xs text-purple-300 font-bold">• {inq.company_name}</span>
                              ) : (
                                <span className="text-xs text-slate-500 font-medium italic">• Independent / Not specified</span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-2 flex-wrap">
                              <a href={`mailto:${inq.email}`} className="text-slate-300 hover:text-purple-300 transition-colors">
                                {inq.email}
                              </a>
                              <span>•</span>
                              <a href={`tel:${inq.country_code}${inq.phone_number}`} className="text-slate-300 hover:text-purple-300 transition-colors">
                                {inq.country_code} {inq.phone_number}
                              </a>
                            </p>
                          </div>

                          <div className="flex items-center gap-2.5 flex-wrap">
                            <select
                              value={inq.status}
                              onChange={(e) => handleClientInquiryStatus(inq.id, e.target.value as InquiryStatus)}
                              className={`rounded-xl px-3 py-1.5 text-xs font-bold border focus:outline-none transition-colors ${
                                inq.status === 'Pending'
                                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                                  : inq.status === 'In Review'
                                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                                  : inq.status === 'Contacted'
                                  ? 'bg-sky-500/20 border-sky-500/40 text-cyan-300'
                                  : inq.status === 'Resolved'
                                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                                  : 'bg-slate-500/20 border-slate-500/40 text-slate-300'
                              }`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="In Review">In Review</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Resolved">Resolved</option>
                              <option value="Archived">Archived</option>
                            </select>

                            <button
                              onClick={() => setInquiryDetailsModal(inq)}
                              className="px-3 py-1.5 rounded-xl border border-purple-500/25 bg-[#050B17] text-xs font-semibold text-slate-300 hover:text-white hover:border-purple-400/50 transition-colors flex items-center gap-1.5"
                              title="View complete details"
                            >
                              <Eye className="h-3.5 w-3.5 text-purple-400" />
                              <span>View Details</span>
                            </button>

                            {admin.role === 'super_admin' && (
                              <button
                                onClick={() => handleDeleteClientInquiry(inq.id)}
                                title="Delete record"
                                className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Enquiry Type Badge */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-block rounded-md bg-purple-500/15 px-2.5 py-0.5 text-xs font-bold text-purple-300 border border-purple-400/30">
                            Enquiry Type: {inq.enquiry_type || 'Business Enquiry'}
                          </span>
                        </div>

                        {/* Requirement Details Box */}
                        {inq.requirement_details ? (
                          <div className="bg-[#050B17]/70 rounded-2xl p-4 border border-purple-500/20 space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-slate-400">
                              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[10px]">Requirement Details</span>
                              <span className="font-mono">{wordCount} / 500 words</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                              {inq.requirement_details}
                            </p>
                            {wordCount > 35 && (
                              <button
                                onClick={() => setInquiryDetailsModal(inq)}
                                className="text-[11px] text-purple-400 hover:underline font-semibold"
                              >
                                Read full requirement &rarr;
                              </button>
                            )}
                          </div>
                        ) : (
                          <p className="text-xs text-slate-500 italic py-1">
                            No requirement details submitted with this inquiry.
                          </p>
                        )}

                        {inq.internal_notes && (
                          <div className="text-xs text-amber-300 bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
                            <strong className="block text-[10px] uppercase font-bold text-amber-400 mb-0.5">Internal Note:</strong>
                            {inq.internal_notes}
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-2 border-t border-purple-500/15 text-[11px] text-slate-400">
                          <span>Submitted: {formattedDate}</span>
                          <button
                            onClick={() => setNoteModal({
                              isOpen: true,
                              id: inq.id,
                              type: 'client_inquiry',
                              currentNote: inq.internal_notes || '',
                              targetName: inq.full_name,
                            })}
                            className="text-purple-400 hover:underline flex items-center gap-1 font-semibold"
                          >
                            <Edit3 className="h-3 w-3" />
                            <span>{inq.internal_notes ? 'Edit Internal Note' : 'Add Internal Note'}</span>
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 5: AUDIT & ACTIVITY LOGS
              ========================================================================= */}
          {activeTab === 'audit' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-white">Security & Activity Audit Log</h2>
                <p className="text-xs text-slate-400">All administrative operations are permanently logged for compliance.</p>
              </div>

              <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 space-y-3">
                {activityLogs.length === 0 ? (
                  <p className="text-xs text-slate-400 italic">No activity logs recorded yet.</p>
                ) : (
                  activityLogs.map((log) => (
                    <div key={log.id} className="p-3.5 rounded-xl bg-[#050B17]/60 border border-sky-500/15 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="font-bold text-cyan-300 font-mono">[{log.action}]</span>
                        <span className="text-slate-300 ml-2">{log.admin_email} interacted with {log.target_type} ({log.target_id || 'N/A'})</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {log.created_at ? new Date(log.created_at).toLocaleString() : ''}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 6: SECURITY & SYSTEM HEALTH
              ========================================================================= */}
          {activeTab === 'security' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="font-display text-xl font-bold text-white">Security Controls & Supabase Matrix</h2>
                <p className="text-xs text-slate-400">System defense-in-depth and live database status telemetry.</p>
              </div>

              <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 space-y-4">
                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <Database className="h-4 w-4 text-cyan-400" />
                  <span>Website Database Forms & Schema Matrix</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-2 border-b border-sky-500/15">
                    <span className="text-slate-400">Form 1 (Enterprise Consultation):</span>
                    <span className="font-bold text-cyan-300">Table: client_inquiries (form_type = &apos;Enterprise Consultation&apos;)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-sky-500/15">
                    <span className="text-slate-400">Form 2 (Career Application):</span>
                    <span className="font-bold text-emerald-300">Table: career_applications + Bucket: career-resumes</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-sky-500/15">
                    <span className="text-slate-400">Form 3 (Executive Inquiry):</span>
                    <span className="font-bold text-purple-300">Table: client_inquiries (form_type = &apos;Executive Inquiry&apos;)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-sky-500/15">
                    <span className="text-slate-400">Row Level Security (RLS):</span>
                    <span className="font-bold text-emerald-400">Enforced (Anonymous Insert-Only, Admin Authenticated Read/Write)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-sky-500/15">
                    <span className="text-slate-400">Private Resume Vault:</span>
                    <span className="font-mono text-cyan-300">career-resumes (15-min cryptographic signed URLs)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              TAB 7: TEAM & ROLE MANAGEMENT (SUPER ADMIN ONLY)
              ========================================================================= */}
          {activeTab === 'team' && admin.role === 'super_admin' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-white">Administrator Allowlist & Role Assignment</h2>
                <p className="text-xs text-slate-400">Super Administrator controls for internal KNOOVIQ team access.</p>
              </div>

              <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 overflow-hidden">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#050B17] border-b border-sky-500/20 text-slate-400 uppercase text-[10px] font-bold">
                    <tr>
                      <th className="p-4">Admin Name</th>
                      <th className="p-4">Corporate Email</th>
                      <th className="p-4">Assigned Role</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sky-500/10">
                    {adminTeam.map((member) => (
                      <tr key={member.id}>
                        <td className="p-4 font-bold text-white">{member.full_name}</td>
                        <td className="p-4 text-slate-300">{member.email}</td>
                        <td className="p-4">
                          <select
                            value={member.role}
                            onChange={(e) => handleRoleChange(member.id, e.target.value as AdminRole, member.is_active)}
                            className="rounded-lg bg-[#050B17] border border-sky-500/30 px-2.5 py-1 text-xs text-cyan-300 focus:outline-none"
                          >
                            <option value="super_admin">super_admin</option>
                            <option value="admin">admin</option>
                            <option value="editor">editor</option>
                          </select>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            member.is_active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                          }`}>
                            {member.is_active ? 'ACTIVE' : 'DEACTIVATED'}
                          </span>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => handleRoleChange(member.id, member.role, !member.is_active)}
                            className="text-xs font-semibold text-cyan-400 hover:underline"
                          >
                            {member.is_active ? 'Deactivate' : 'Activate'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* =========================================================================
          MODAL 1: CLIENT INQUIRY FULL DETAILS (FORM 1 & FORM 3)
          ========================================================================= */}
      {inquiryDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="rounded-3xl border border-sky-500/30 bg-[#0B1528] p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-sky-500/20 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase ${
                    inquiryDetailsModal.form_type === 'Executive Inquiry'
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                      : 'bg-sky-500/20 text-cyan-300 border border-sky-500/40'
                  }`}>
                    {inquiryDetailsModal.form_type}
                  </span>
                  <span className="text-xs font-mono text-slate-500">ID: {inquiryDetailsModal.id}</span>
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  {inquiryDetailsModal.full_name}
                </h3>
                <p className="text-xs text-cyan-300 font-medium">
                  {inquiryDetailsModal.company_name || 'Independent / Not specified'}
                </p>
              </div>

              <button
                onClick={() => setInquiryDetailsModal(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="rounded-2xl bg-[#050B17]/70 p-3.5 border border-sky-500/15 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Email Address</span>
                <a href={`mailto:${inquiryDetailsModal.email}`} className="text-sm font-semibold text-cyan-300 hover:underline break-all">
                  {inquiryDetailsModal.email}
                </a>
              </div>

              <div className="rounded-2xl bg-[#050B17]/70 p-3.5 border border-sky-500/15 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Phone Number (with Country Code)</span>
                <a href={`tel:${inquiryDetailsModal.country_code}${inquiryDetailsModal.phone_number}`} className="text-sm font-semibold text-white hover:underline">
                  {inquiryDetailsModal.country_code} {inquiryDetailsModal.phone_number}
                </a>
              </div>

              <div className="rounded-2xl bg-[#050B17]/70 p-3.5 border border-sky-500/15 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                  {inquiryDetailsModal.form_type === 'Enterprise Consultation' ? 'Service Requirement' : 'Enquiry Type'}
                </span>
                <span className="text-sm font-semibold text-white block">
                  {inquiryDetailsModal.service_requirement || inquiryDetailsModal.enquiry_type || 'General Consultation'}
                </span>
              </div>

              <div className="rounded-2xl bg-[#050B17]/70 p-3.5 border border-sky-500/15 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Current Status</span>
                <div className="flex items-center gap-2 pt-0.5">
                  <select
                    value={inquiryDetailsModal.status}
                    onChange={(e) => handleClientInquiryStatus(inquiryDetailsModal.id, e.target.value as InquiryStatus)}
                    className="rounded-lg bg-[#0B1528] border border-sky-500/30 px-2.5 py-1 text-xs font-bold text-cyan-300 focus:outline-none"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Review">In Review</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Requirement Details (Max 500 words) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Requirement Details</span>
                <span className="text-slate-500 font-mono text-[11px]">
                  {inquiryDetailsModal.requirement_details?.trim() ? inquiryDetailsModal.requirement_details.trim().split(/\s+/).filter(Boolean).length : 0} / 500 words
                </span>
              </div>
              <div className="rounded-2xl bg-[#050B17] border border-sky-500/20 p-4 max-h-48 overflow-y-auto">
                <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-wrap font-sans">
                  {inquiryDetailsModal.requirement_details || (
                    <span className="text-slate-500 italic">No additional requirement details were submitted with this inquiry.</span>
                  )}
                </p>
              </div>
            </div>

            {/* Internal Administrator Note */}
            <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Internal Administrator Note</span>
                <button
                  onClick={() => {
                    setNoteModal({
                      isOpen: true,
                      id: inquiryDetailsModal.id,
                      type: 'client_inquiry',
                      currentNote: inquiryDetailsModal.internal_notes || '',
                      targetName: inquiryDetailsModal.full_name,
                    });
                  }}
                  className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Edit3 className="h-3 w-3" />
                  <span>{inquiryDetailsModal.internal_notes ? 'Edit' : 'Add Note'}</span>
                </button>
              </div>
              <p className="text-xs text-slate-300">
                {inquiryDetailsModal.internal_notes || <span className="text-slate-500 italic">No internal notes added yet.</span>}
              </p>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-sky-500/20 text-xs text-slate-400">
              <span>Submitted: {inquiryDetailsModal.created_at ? new Date(inquiryDetailsModal.created_at).toLocaleString() : 'Recent'}</span>

              <div className="flex items-center gap-2">
                {admin.role === 'super_admin' && (
                  <button
                    onClick={() => handleDeleteClientInquiry(inquiryDetailsModal.id)}
                    className="px-3 py-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Delete Record</span>
                  </button>
                )}
                <button
                  onClick={() => setInquiryDetailsModal(null)}
                  className="px-5 py-2 rounded-xl bg-sky-500 text-white hover:bg-sky-600 font-bold text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: CANDIDATE APPLICATION FULL DETAILS (FORM 2)
          ========================================================================= */}
      {candidateDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="rounded-3xl border border-emerald-500/30 bg-[#0B1528] p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-sky-500/20 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Career Application
                  </span>
                  <span className="text-xs font-mono text-slate-500">ID: {candidateDetailsModal.id || 'N/A'}</span>
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  {candidateDetailsModal.full_name}
                </h3>
                <p className="text-xs text-emerald-300 font-medium">
                  {candidateDetailsModal.position}
                </p>
              </div>

              <button
                onClick={() => setCandidateDetailsModal(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Candidate Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="rounded-2xl bg-[#050B17]/70 p-3.5 border border-sky-500/15 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Candidate Email</span>
                <a href={`mailto:${candidateDetailsModal.email}`} className="text-sm font-semibold text-emerald-300 hover:underline break-all">
                  {candidateDetailsModal.email}
                </a>
              </div>

              <div className="rounded-2xl bg-[#050B17]/70 p-3.5 border border-sky-500/15 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Phone Number</span>
                <a href={`tel:${candidateDetailsModal.phone}`} className="text-sm font-semibold text-white hover:underline">
                  {candidateDetailsModal.phone || 'Not specified'}
                </a>
              </div>

              <div className="rounded-2xl bg-[#050B17]/70 p-3.5 border border-sky-500/15 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Experience & Qualification</span>
                <span className="text-sm font-semibold text-white block">
                  {candidateDetailsModal.experience} • {candidateDetailsModal.education || 'Graduate'}
                </span>
              </div>

              <div className="rounded-2xl bg-[#050B17]/70 p-3.5 border border-sky-500/15 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">Current Location</span>
                <span className="text-sm font-semibold text-white block">
                  {candidateDetailsModal.location || 'India (Remote / Hybrid)'}
                </span>
              </div>
            </div>

            {/* Resume & LinkedIn Section */}
            <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-[#050B17] border border-sky-500/20 text-xs">
              <button
                onClick={() => handleViewResume(candidateDetailsModal)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500/20 border border-sky-400/30 text-cyan-300 font-bold hover:bg-sky-500/30 transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>Generate Secure Signed Resume URL</span>
              </button>

              {candidateDetailsModal.portfolio_linkedin && (
                <a
                  href={candidateDetailsModal.portfolio_linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-cyan-300 hover:text-white font-semibold transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            {/* Full Cover Letter / Message */}
            <div className="space-y-2">
              <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider block">Cover Letter & Application Notes</span>
              <div className="rounded-2xl bg-[#050B17] border border-sky-500/20 p-4 max-h-48 overflow-y-auto">
                <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-wrap font-sans">
                  {candidateDetailsModal.cover_letter || candidateDetailsModal.cover_note || (
                    <span className="text-slate-500 italic">No cover letter submitted.</span>
                  )}
                </p>
              </div>
            </div>

            {/* Status Selector */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#050B17] border border-sky-500/20 text-xs">
              <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Candidate Status:</span>
              <select
                value={candidateDetailsModal.status || 'PENDING'}
                onChange={(e) => handleApplicationStatus(candidateDetailsModal.id || '', e.target.value as any)}
                className="rounded-xl px-3 py-1.5 text-xs font-bold border focus:outline-none bg-[#0B1528] border-emerald-500/40 text-emerald-300"
              >
                <option value="PENDING">PENDING</option>
                <option value="REVIEWED">REVIEWED</option>
                <option value="INTERVIEW_SCHEDULED">INTERVIEW_SCHEDULED</option>
                <option value="OFFERED">OFFERED</option>
                <option value="REJECTED">REJECTED</option>
              </select>
            </div>

            {/* Internal Notes */}
            <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Internal Review Note</span>
                <button
                  onClick={() => {
                    setNoteModal({
                      isOpen: true,
                      id: candidateDetailsModal.id || '',
                      type: 'career',
                      currentNote: candidateDetailsModal.internal_notes || '',
                      targetName: candidateDetailsModal.full_name,
                    });
                  }}
                  className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <Edit3 className="h-3 w-3" />
                  <span>{candidateDetailsModal.internal_notes ? 'Edit' : 'Add Note'}</span>
                </button>
              </div>
              <p className="text-xs text-slate-300">
                {candidateDetailsModal.internal_notes || <span className="text-slate-500 italic">No internal review notes added yet.</span>}
              </p>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-sky-500/20 text-xs text-slate-400">
              <span>Applied: {candidateDetailsModal.created_at ? new Date(candidateDetailsModal.created_at).toLocaleString() : 'Recent'}</span>

              <div className="flex items-center gap-2">
                {admin.role === 'super_admin' && candidateDetailsModal.id && (
                  <button
                    onClick={() => handleDeleteApplication(candidateDetailsModal.id!)}
                    className="px-3 py-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Delete Record</span>
                  </button>
                )}
                <button
                  onClick={() => setCandidateDetailsModal(null)}
                  className="px-5 py-2 rounded-xl bg-emerald-500 text-black hover:bg-emerald-400 font-bold text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: INTERNAL NOTE DRAWER MODAL
          ========================================================================= */}
      {noteModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="rounded-3xl border border-sky-500/30 bg-[#0B1528] p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Edit Internal Administrator Note</h3>
                {noteModal.targetName && (
                  <p className="text-xs text-cyan-300 mt-0.5">Regarding: {noteModal.targetName}</p>
                )}
              </div>
              <button 
                onClick={() => setNoteModal({ isOpen: false, id: '', type: 'client_inquiry', currentNote: '', targetName: '' })} 
                className="text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <textarea
              value={noteModal.currentNote}
              onChange={(e) => setNoteModal(prev => ({ ...prev, currentNote: e.target.value }))}
              rows={4}
              placeholder="Add confidential review notes, assessment criteria, or follow-up action items..."
              className="w-full rounded-xl border border-sky-500/25 bg-[#050B17] p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setNoteModal({ isOpen: false, id: '', type: 'client_inquiry', currentNote: '', targetName: '' })}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNote}
                className="glow-btn px-5 py-2 rounded-xl text-xs font-bold text-white"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 4: SIGNED RESUME PREVIEW MODAL
          ========================================================================= */}
      {resumeModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="rounded-3xl border border-sky-500/30 bg-[#0B1528] p-6 max-w-md w-full shadow-2xl text-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-cyan-300 mx-auto">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold text-white">Temporary Signed Resume Token</h3>
            <p className="text-xs text-slate-400">
              Generated a temporary 15-minute authorized URL for applicant: <strong className="text-white">{resumeModal.candidateName}</strong>
            </p>

            {resumeModal.loading ? (
              <div className="py-4 text-xs text-cyan-300 animate-pulse">Generating cryptographic signature...</div>
            ) : resumeModal.signedUrl ? (
              <div className="space-y-4 pt-2">
                <a
                  href={resumeModal.signedUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-btn block w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white"
                >
                  Open Signed Resume Document
                </a>
                <span className="text-[10px] text-slate-500 block">Token valid for 900 seconds.</span>
              </div>
            ) : (
              <p className="text-xs text-rose-400">Unable to generate signed URL. File may not exist in storage.</p>
            )}

            <button
              onClick={() => setResumeModal({ isOpen: false, candidateName: '', signedUrl: null, loading: false })}
              className="text-xs text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
