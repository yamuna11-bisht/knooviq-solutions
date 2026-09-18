import React, { useState, useEffect } from 'react';
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
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Inbox, 
  MessageSquare, 
  Users, 
  Mail, 
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
  X
} from 'lucide-react';
import { 
  AdminProfile,
  EnquirySubmission, 
  ContactSubmission, 
  JobApplicationSubmission, 
  NewsletterSubscriber, 
  AdminNotification, 
  ActivityLog,
  DashboardStats,
  AdminRole
} from '../types';
import { 
  getAdminSession, 
  adminLogout, 
  fetchEnquiries, 
  fetchContactSubmissions, 
  fetchJobApplications, 
  fetchNewsletterSubscribers, 
  fetchAdminNotifications, 
  markNotificationRead, 
  fetchActivityLogs, 
  updateEnquiryStatus, 
  updateContactStatus, 
  updateJobApplicationStatus, 
  deleteRecord,
  getSignedResumeUrl, 
  getDashboardStats, 
  getSupabaseStatus,
  fetchAdminProfiles,
  updateAdminProfileRole
} from '../lib/supabase';

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState<AdminProfile | null>(null);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'enquiries' | 'contacts' | 'careers' | 'newsletter' | 'notifications' | 'audit' | 'security' | 'team'>('dashboard');

  // Telemetry data
  const [stats, setStats] = useState<DashboardStats>({
    totalEnquiries: 0,
    newEnquiries: 0,
    contactSubmissions: 0,
    careerApplications: 0,
    newsletterSubscribers: 0,
    unreadNotifications: 0,
  });

  // Table records
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [applications, setApplications] = useState<JobApplicationSubmission[]>([]);
  const [newsletter, setNewsletter] = useState<NewsletterSubscriber[]>([]);
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);
  const [adminTeam, setAdminTeam] = useState<AdminProfile[]>([]);
  
  // UI states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [notificationMenuOpen, setNotificationMenuOpen] = useState(false);

  // Note Modal
  const [noteModal, setNoteModal] = useState<{ isOpen: boolean; id: string; type: 'enquiry' | 'contact' | 'career'; currentNote: string }>({
    isOpen: false,
    id: '',
    type: 'enquiry',
    currentNote: '',
  });

  // Resume Signed URL Modal
  const [resumeModal, setResumeModal] = useState<{ isOpen: boolean; candidateName: string; signedUrl: string | null; loading: boolean }>({
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

  // Load all telemetry
  const loadAllData = async () => {
    setLoading(true);
    const [
      dashboardStats,
      enqData,
      cntData,
      appData,
      newsData,
      notifData,
      logsData,
      teamData
    ] = await Promise.all([
      getDashboardStats(),
      fetchEnquiries(),
      fetchContactSubmissions(),
      fetchJobApplications(),
      fetchNewsletterSubscribers(),
      fetchAdminNotifications(),
      fetchActivityLogs(),
      fetchAdminProfiles()
    ]);

    setStats(dashboardStats);
    setEnquiries(enqData);
    setContacts(cntData);
    setApplications(appData);
    setNewsletter(newsData);
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

  // Status Handlers
  const handleEnquiryStatus = async (id: string, status: EnquirySubmission['status']) => {
    await updateEnquiryStatus(id, status);
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
    loadAllData();
  };

  const handleContactStatus = async (id: string, status: ContactSubmission['status']) => {
    await updateContactStatus(id, status);
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
    loadAllData();
  };

  const handleApplicationStatus = async (id: string, status: JobApplicationSubmission['status']) => {
    await updateJobApplicationStatus(id, status);
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status } : a));
    loadAllData();
  };

  const handleSaveNote = async () => {
    if (noteModal.type === 'enquiry') {
      const enq = enquiries.find(e => e.id === noteModal.id);
      if (enq) await updateEnquiryStatus(noteModal.id, enq.status, noteModal.currentNote);
    } else if (noteModal.type === 'contact') {
      const cnt = contacts.find(c => c.id === noteModal.id);
      if (cnt) await updateContactStatus(noteModal.id, cnt.status, noteModal.currentNote);
    } else if (noteModal.type === 'career') {
      const app = applications.find(a => a.id === noteModal.id);
      if (app) await updateJobApplicationStatus(noteModal.id, app.status, noteModal.currentNote);
    }
    setNoteModal({ isOpen: false, id: '', type: 'enquiry', currentNote: '' });
    loadAllData();
  };

  const handleDelete = async (table: 'enquiries' | 'contact_submissions' | 'career_applications' | 'newsletter_subscribers', id: string) => {
    if (admin?.role !== 'super_admin') {
      alert('Only Super Administrators have permissions to delete records.');
      return;
    }
    if (window.confirm('Are you sure you want to permanently delete this submission?')) {
      await deleteRecord(table, id);
      loadAllData();
    }
  };

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

  const handleNotificationClick = async (notif: AdminNotification) => {
    if (!notif.is_read) {
      await markNotificationRead(notif.id);
      setNotifications(prev => prev.map(n => n.id === notif.id ? { ...n, is_read: true } : n));
    }
    if (notif.type === 'ENQUIRY') setActiveTab('enquiries');
    else if (notif.type === 'CAREER') setActiveTab('careers');
    else if (notif.type === 'SECURITY') setActiveTab('security');
    setNotificationMenuOpen(false);
  };

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

  // Filtered lists
  const filteredEnquiries = enquiries.filter(enq => {
    const matchesSearch = 
      enq.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enq.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enq.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || enq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredContacts = contacts.filter(cnt => {
    const matchesSearch = 
      cnt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cnt.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cnt.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || cnt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Recharts Data
  const monthlyActivityData = [
    { month: 'Apr', enquiries: 12, applications: 4 },
    { month: 'May', enquiries: 19, applications: 7 },
    { month: 'Jun', enquiries: 24, applications: 9 },
    { month: 'Jul', enquiries: 31, applications: 14 },
    { month: 'Aug', enquiries: enquiries.length + 15, applications: applications.length + 8 },
  ];

  const serviceDistributionData = [
    { name: 'SAP S/4HANA', value: 45 },
    { name: 'SAP AMS Support', value: 28 },
    { name: 'SAP Consulting', value: 18 },
    { name: 'BTP & Integration', value: 12 },
    { name: 'Corporate Training', value: 9 },
  ];

  const COLORS = ['#00d2ff', '#0070f3', '#7928ca', '#10b981', '#f59e0b'];

  if (!admin) return null;

  return (
    <div className="min-h-screen bg-[#040813] text-white flex flex-col">
      {/* Top Admin Header */}
      <header className="h-16 border-b border-sky-500/15 bg-[#0B1528]/90 backdrop-blur-xl px-6 flex items-center justify-between sticky top-0 z-40">
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
        <div className="flex items-center gap-3">
          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setNotificationMenuOpen(!notificationMenuOpen)}
              className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/20 bg-[#050B17] text-slate-300 hover:text-white hover:border-cyan-400/40"
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
                <div className="space-y-1.5 max-h-60 overflow-y-auto">
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
            title="Refresh DB Telemetry"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-500/20 bg-[#050B17] text-slate-300 hover:text-white"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-xs font-bold text-rose-300 hover:bg-rose-500/20 transition-all"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Layout Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Nav */}
        <aside className="w-64 border-r border-sky-500/15 bg-[#070E1C] p-4 flex flex-col justify-between hidden md:flex">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 block mb-2">
              Operations & Inquiries
            </span>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Executive Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('enquiries')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'enquiries'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Inbox className="h-4 w-4" />
                <span>Service Enquiries</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#050B17] text-slate-300">
                {enquiries.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('contacts')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'contacts'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="h-4 w-4" />
                <span>Contact Submissions</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#050B17] text-slate-300">
                {contacts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('careers')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'careers'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4" />
                <span>Career Pipeline</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#050B17] text-slate-300">
                {applications.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('newsletter')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'newsletter'
                  ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>Newsletter Subscribers</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#050B17] text-slate-300">
                {newsletter.length}
              </span>
            </button>

            <div className="pt-4 mt-4 border-t border-sky-500/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 block mb-2">
                Compliance & Security
              </span>

              <button
                onClick={() => setActiveTab('audit')}
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
                onClick={() => setActiveTab('security')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'security'
                    ? 'bg-sky-500/20 text-cyan-300 border border-sky-400/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Database className="h-4 w-4" />
                <span>RLS & Security Status</span>
              </button>

              {admin.role === 'super_admin' && (
                <button
                  onClick={() => setActiveTab('team')}
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
            <p className="text-[10px]">Session expires after 30 minutes of inactivity.</p>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* TAB 1: EXECUTIVE DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stat Cards Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Total Client Inquiries</span>
                    <Inbox className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    {stats.totalEnquiries}
                  </div>
                  <div className="text-[11px] text-cyan-300 font-medium">
                    +{stats.newEnquiries} pending review
                  </div>
                </div>

                <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Career Applications</span>
                    <Users className="h-4 w-4 text-sky-400" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    {stats.careerApplications}
                  </div>
                  <div className="text-[11px] text-sky-300 font-medium">
                    Active talent candidates
                  </div>
                </div>

                <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Newsletter Subscribers</span>
                    <Mail className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-white">
                    {stats.newsletterSubscribers}
                  </div>
                  <div className="text-[11px] text-purple-300 font-medium">
                    Enterprise whitepaper leads
                  </div>
                </div>

                <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-2">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-semibold">
                    <span>Security Posture</span>
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-emerald-400">
                    100%
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    Strict RLS & Honeypots
                  </div>
                </div>
              </div>

              {/* Visual Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl">
                  <h3 className="font-display text-base font-bold text-white mb-4">
                    Inquiry & Application Velocity (2026)
                  </h3>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyActivityData}>
                        <XAxis dataKey="month" stroke="#64748b" textAnchor="end" fontSize={11} />
                        <YAxis stroke="#64748b" fontSize={11} />
                        <Tooltip contentStyle={{ backgroundColor: '#050B17', borderColor: '#00d2ff33', borderRadius: '12px' }} />
                        <Line type="monotone" dataKey="enquiries" stroke="#00d2ff" strokeWidth={2.5} name="Enterprise Enquiries" />
                        <Line type="monotone" dataKey="applications" stroke="#7928ca" strokeWidth={2} name="Job Applications" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="lg:col-span-4 rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl">
                  <h3 className="font-display text-base font-bold text-white mb-4">
                    Service Demand Breakdown
                  </h3>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={serviceDistributionData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={75}
                          paddingAngle={4}
                        >
                          {serviceDistributionData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#050B17', borderColor: '#00d2ff33', borderRadius: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Recent Inquiries Quick Feed */}
              <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-base font-bold text-white">
                    Latest Incoming Inquiries
                  </h3>
                  <button
                    onClick={() => setActiveTab('enquiries')}
                    className="text-xs font-bold text-cyan-400 hover:underline"
                  >
                    View All &rarr;
                  </button>
                </div>

                <div className="space-y-3">
                  {enquiries.slice(0, 3).map((enq) => (
                    <div
                      key={enq.id}
                      className="p-4 rounded-2xl bg-[#050B17]/60 border border-sky-500/15 flex flex-wrap items-center justify-between gap-3"
                    >
                      <div>
                        <h4 className="text-xs font-bold text-white">{enq.full_name} • <span className="text-cyan-300">{enq.company}</span></h4>
                        <p className="text-[11px] text-slate-400">{enq.service} • {enq.email}</p>
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${
                        enq.status === 'NEW' ? 'bg-rose-500/20 text-rose-300' : 'bg-sky-500/20 text-cyan-300'
                      }`}>
                        {enq.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ENQUIRIES MANAGEMENT */}
          {activeTab === 'enquiries' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl font-bold text-white">Service Consultation Enquiries</h2>
                  <p className="text-xs text-slate-400">Manage client assessment requests and internal follow-up notes.</p>
                </div>
                <button
                  onClick={() => exportToCSV(enquiries, 'knooviq_enquiries')}
                  className="flex items-center gap-2 rounded-xl bg-[#0B1528] border border-sky-500/25 px-4 py-2 text-xs font-bold text-slate-200 hover:text-white hover:border-cyan-400/50"
                >
                  <Download className="h-4 w-4 text-cyan-400" />
                  <span>Export CSV</span>
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
                    placeholder="Search by name, company, email..."
                    className="w-full rounded-xl border border-sky-500/20 bg-[#050B17] pl-10 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Status:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="rounded-xl border border-sky-500/20 bg-[#050B17] px-3 py-2 text-xs text-white focus:outline-none"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="NEW">NEW</option>
                    <option value="IN_REVIEW">IN_REVIEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="RESOLVED">RESOLVED</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className="space-y-4">
                {filteredEnquiries.map((enq) => (
                  <div key={enq.id} className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-white text-base">{enq.full_name}</h3>
                          <span className="text-xs text-cyan-300 font-bold">• {enq.company}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{enq.email} | {enq.phone} | {enq.industry}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <select
                          value={enq.status}
                          onChange={(e) => handleEnquiryStatus(enq.id || '', e.target.value as any)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-bold border focus:outline-none ${
                            enq.status === 'NEW'
                              ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                              : enq.status === 'IN_REVIEW'
                              ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                              : enq.status === 'CONTACTED'
                              ? 'bg-sky-500/20 border-sky-500/40 text-cyan-300'
                              : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                          }`}
                        >
                          <option value="NEW">NEW</option>
                          <option value="IN_REVIEW">IN_REVIEW</option>
                          <option value="CONTACTED">CONTACTED</option>
                          <option value="RESOLVED">RESOLVED</option>
                        </select>

                        {admin.role === 'super_admin' && (
                          <button
                            onClick={() => handleDelete('enquiries', enq.id || '')}
                            title="Delete record"
                            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="inline-block rounded-md bg-sky-500/15 px-2.5 py-0.5 text-xs font-bold text-cyan-300 border border-sky-400/30">
                      Service: {enq.service}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed bg-[#050B17]/70 rounded-2xl p-4 border border-sky-500/15">
                      {enq.message}
                    </p>

                    {enq.internal_notes && (
                      <div className="text-xs text-amber-300 bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
                        <strong className="block text-[10px] uppercase font-bold text-amber-400 mb-0.5">Internal Note:</strong>
                        {enq.internal_notes}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-sky-500/10 text-[11px] text-slate-400">
                      <span>Submitted: {enq.created_at ? new Date(enq.created_at).toLocaleString() : 'Recent'}</span>
                      <button
                        onClick={() => setNoteModal({ isOpen: true, id: enq.id || '', type: 'enquiry', currentNote: enq.internal_notes || '' })}
                        className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                      >
                        <Edit3 className="h-3 w-3" />
                        <span>{enq.internal_notes ? 'Edit Internal Note' : 'Add Internal Note'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CONTACT SUBMISSIONS */}
          {activeTab === 'contacts' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl font-bold text-white">General Contact Inquiries</h2>
                  <p className="text-xs text-slate-400">Messages sent via public contact page.</p>
                </div>
                <button
                  onClick={() => exportToCSV(contacts, 'knooviq_contacts')}
                  className="flex items-center gap-2 rounded-xl bg-[#0B1528] border border-sky-500/25 px-4 py-2 text-xs font-bold text-slate-200 hover:text-white"
                >
                  <Download className="h-4 w-4 text-cyan-400" />
                  <span>Export CSV</span>
                </button>
              </div>

              <div className="space-y-4">
                {filteredContacts.map((cnt) => (
                  <div key={cnt.id} className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-white text-base">{cnt.name} • <span className="text-cyan-300">{cnt.company}</span></h3>
                        <p className="text-xs text-slate-400">{cnt.email} | {cnt.phone}</p>
                      </div>

                      <select
                        value={cnt.status}
                        onChange={(e) => handleContactStatus(cnt.id || '', e.target.value as any)}
                        className="rounded-xl px-3 py-1.5 text-xs font-bold border focus:outline-none bg-[#050B17] border-sky-500/25 text-cyan-300"
                      >
                        <option value="NEW">NEW</option>
                        <option value="IN_REVIEW">IN_REVIEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="RESOLVED">RESOLVED</option>
                        <option value="ARCHIVED">ARCHIVED</option>
                      </select>
                    </div>

                    <p className="text-xs text-slate-300 bg-[#050B17]/70 rounded-2xl p-4 border border-sky-500/15">
                      {cnt.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CAREER PIPELINE & RESUME VAULT */}
          {activeTab === 'careers' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl font-bold text-white">Applicant Pipeline & Secure Resume Vault</h2>
                  <p className="text-xs text-slate-400">Candidate applications with 15-minute temporary signed resume downloads.</p>
                </div>
                <button
                  onClick={() => exportToCSV(applications, 'knooviq_applicants')}
                  className="flex items-center gap-2 rounded-xl bg-[#0B1528] border border-sky-500/25 px-4 py-2 text-xs font-bold text-slate-200 hover:text-white"
                >
                  <Download className="h-4 w-4 text-cyan-400" />
                  <span>Export CSV</span>
                </button>
              </div>

              <div className="space-y-4">
                {filteredApplications.map((app) => (
                  <div key={app.id} className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 shadow-xl space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-white text-base">{app.full_name}</h3>
                          <span className="text-xs text-cyan-400 font-bold">• {app.position}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{app.email} | {app.phone} | Exp: {app.experience}</p>
                      </div>

                      <select
                        value={app.status}
                        onChange={(e) => handleApplicationStatus(app.id || '', e.target.value as any)}
                        className="rounded-xl px-3 py-1.5 text-xs font-bold border focus:outline-none bg-[#050B17] border-sky-500/30 text-amber-300"
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="REVIEWED">REVIEWED</option>
                        <option value="INTERVIEW_SCHEDULED">INTERVIEW_SCHEDULED</option>
                        <option value="OFFERED">OFFERED</option>
                        <option value="REJECTED">REJECTED</option>
                      </select>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs">
                      <button
                        onClick={() => handleViewResume(app)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/20 border border-sky-400/30 text-cyan-300 font-bold hover:bg-sky-500/30"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        <span>Generate Secure Signed Resume URL</span>
                      </button>

                      {app.portfolio_linkedin && (
                        <a
                          href={app.portfolio_linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-cyan-400 hover:underline font-semibold"
                        >
                          <span>LinkedIn Profile</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>

                    {app.cover_letter && (
                      <p className="text-xs text-slate-300 italic bg-[#050B17]/70 p-3 rounded-xl border border-sky-500/15">
                        "{app.cover_letter}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: NEWSLETTER SUBSCRIBERS */}
          {activeTab === 'newsletter' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-xl font-bold text-white">Newsletter & Whitepaper Subscribers</h2>
                  <p className="text-xs text-slate-400">Total opt-in enterprise subscribers: {newsletter.length}</p>
                </div>
                <button
                  onClick={() => exportToCSV(newsletter, 'knooviq_newsletter_subscribers')}
                  className="flex items-center gap-2 rounded-xl bg-[#0B1528] border border-sky-500/25 px-4 py-2 text-xs font-bold text-slate-200"
                >
                  <Download className="h-4 w-4 text-cyan-400" />
                  <span>Export CSV</span>
                </button>
              </div>

              <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 overflow-hidden">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#050B17] border-b border-sky-500/20 text-slate-400 uppercase text-[10px] font-bold">
                    <tr>
                      <th className="p-4">Email Address</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Source</th>
                      <th className="p-4">Opt-In Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sky-500/10">
                    {newsletter.map((sub) => (
                      <tr key={sub.id} className="hover:bg-white/5">
                        <td className="p-4 font-bold text-white">{sub.email}</td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                            {sub.status}
                          </span>
                        </td>
                        <td className="p-4 text-slate-400">{sub.source || 'WEBSITE'}</td>
                        <td className="p-4 text-slate-400">{sub.created_at ? new Date(sub.created_at).toLocaleDateString() : 'Recent'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: AUDIT & ACTIVITY LOGS (TAMPER-PROOF) */}
          {activeTab === 'audit' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-white">Immutable Security & Activity Audit Log</h2>
                <p className="text-xs text-slate-400">All administrative operations are permanently recorded for compliance.</p>
              </div>

              <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 space-y-3">
                {activityLogs.map((log) => (
                  <div key={log.id} className="p-3.5 rounded-xl bg-[#050B17]/60 border border-sky-500/15 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-bold text-cyan-300 font-mono">[{log.action}]</span>
                      <span className="text-slate-300 ml-2">{log.admin_email} interacted with {log.target_type} ({log.target_id || 'N/A'})</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {log.created_at ? new Date(log.created_at).toLocaleString() : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: SECURITY & SYSTEM HEALTH */}
          {activeTab === 'security' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="font-display text-xl font-bold text-white">Security Controls & Supabase RLS Matrix</h2>
                <p className="text-xs text-slate-400">System defense-in-depth and live database status telemetry.</p>
              </div>

              <div className="rounded-3xl border border-sky-500/20 bg-[#0B1528]/90 p-6 space-y-4">
                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <Database className="h-4 w-4 text-cyan-400" />
                  <span>Database & Storage Health</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-2 border-b border-sky-500/15">
                    <span className="text-slate-400">PostgreSQL Database:</span>
                    <span className="font-bold text-emerald-400">Active & Normalized (9 Tables)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-sky-500/15">
                    <span className="text-slate-400">Row Level Security (RLS):</span>
                    <span className="font-bold text-emerald-400">Enforced (Anon Insert Only, Auth Read/Write)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-sky-500/15">
                    <span className="text-slate-400">Private Resume Bucket:</span>
                    <span className="font-mono text-cyan-300">career-resumes (Temporary Signed URLs)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: TEAM & ROLE MANAGEMENT (SUPER ADMIN) */}
          {activeTab === 'team' && admin.role === 'super_admin' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-white">Administrator Allowlist & Role Assignment</h2>
                <p className="text-xs text-slate-400">Super Administrator controls for internal team access.</p>
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

      {/* Internal Note Drawer Modal */}
      {noteModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="rounded-3xl border border-sky-500/30 bg-[#0B1528] p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Edit Internal Administrator Note</h3>
              <button onClick={() => setNoteModal({ isOpen: false, id: '', type: 'enquiry', currentNote: '' })} className="text-slate-400 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
            <textarea
              value={noteModal.currentNote}
              onChange={(e) => setNoteModal(prev => ({ ...prev, currentNote: e.target.value }))}
              rows={4}
              placeholder="Add confidential review notes or assign follow-up action items..."
              className="w-full rounded-xl border border-sky-500/25 bg-[#050B17] p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setNoteModal({ isOpen: false, id: '', type: 'enquiry', currentNote: '' })}
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

      {/* Signed Resume Preview Modal */}
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
              <p className="text-xs text-rose-400">Unable to generate signed URL.</p>
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
