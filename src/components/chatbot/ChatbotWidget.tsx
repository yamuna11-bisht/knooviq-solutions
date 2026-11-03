import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Loader2,
  Volume2,
  VolumeX,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Building2,
  Cpu,
  Layers,
  Box,
  Calendar,
  Mail,
  ChevronRight,
  Minus
} from 'lucide-react';
import {
  generateBotResponse,
  ChatMessage,
  WELCOME_GREETING,
  WELCOME_SUBTITLE,
  QUICK_ACTIONS,
  NavLink
} from './ChatbotKnowledge';
import { chatSounds } from './ChatSound';
import { submitEnquiry } from '../../lib/supabase';

interface ChatbotWidgetProps {
  onOpenContact: (defaultService?: string) => void;
}

const STORAGE_KEY = 'knooviq_ai_assistant_history_v2';
const TOOLTIP_DISMISSED_KEY = 'knooviq_ai_tooltip_dismissed';

const SERVICE_OPTIONS = [
  'SAP S/4HANA & Enterprise Transformation',
  'SAP Application Management (AMS)',
  'Digital Intelligence & AI Studio',
  'Global Trade & Compliance (EXIM)',
  'E-Invoicing & E-Way Bill Solutions',
  'Accelerated GST & Tax Solutions',
  'Cloud Infrastructure & Cybersecurity',
  'General Corporate Consultation'
];

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenContact }) => {
  const navigate = useNavigate();

  // Widget Open / Minimize State
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [confirmClearOpen, setConfirmClearOpen] = useState(false);

  // In-Chat Lead Generation Form State
  const [activeEnquiryForm, setActiveEnquiryForm] = useState<boolean>(false);
  const [enquiryData, setEnquiryData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmittingEnquiry, setIsSubmittingEnquiry] = useState(false);
  const [enquirySubmittedSuccess, setEnquirySubmittedSuccess] = useState<string | null>(null);
  const [enquirySubmitError, setEnquirySubmitError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Restore messages from sessionStorage or start fresh
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {
      // Ignore parse errors
    }

    // Show tooltip once after 3.5s if not dismissed
    const dismissed = sessionStorage.getItem(TOOLTIP_DISMISSED_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Persist messages in sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // quota exceeded fallback
      }
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // focus input when opened on non-touch devices
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 250);
      }
    }
  }, [isOpen, messages, isTyping, scrollToBottom]);

  // Handle open / toggle
  const handleOpen = () => {
    setIsOpen(true);
    setShowTooltip(false);
    sessionStorage.setItem(TOOLTIP_DISMISSED_KEY, 'true');
    chatSounds.playOpen();
  };

  const handleClose = () => {
    setIsOpen(false);
    setConfirmClearOpen(false);
  };

  const handleToggleSound = () => {
    const newState = chatSounds.toggleSound();
    setSoundEnabled(newState);
  };

  // Clear conversation with confirmation
  const handleClearChat = () => {
    setMessages([]);
    setActiveEnquiryForm(false);
    setEnquirySubmittedSuccess(null);
    setEnquirySubmitError(null);
    sessionStorage.removeItem(STORAGE_KEY);
    setConfirmClearOpen(false);
  };

  // Navigate to internal route from chat
  const handleNavigate = (path: string) => {
    navigate(path);
    // On small mobile screens, minimize panel so user can see destination page
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  // Send message handler
  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    chatSounds.playSend();

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate enterprise response generation
    const responseDelay = Math.min(1100, Math.max(500, text.length * 15));

    setTimeout(() => {
      setIsTyping(false);
      chatSounds.playReceive();

      const botResponse = generateBotResponse(text);

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponse.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        navLinks: botResponse.navLinks,
        followUps: botResponse.followUps,
        showEnquiryForm: botResponse.showEnquiryForm,
        defaultService: botResponse.defaultService
      };

      setMessages((prev) => [...prev, botMsg]);

      if (botResponse.showEnquiryForm) {
        setActiveEnquiryForm(true);
        if (botResponse.defaultService) {
          setEnquiryData((prev) => ({ ...prev, service: botResponse.defaultService || SERVICE_OPTIONS[0] }));
        }
      }
    }, responseDelay);
  };

  // Handle Quick Action card clicks
  const handleQuickAction = (actionQuery: string, actionId: string) => {
    if (actionId === 'consultation') {
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const userMsg: ChatMessage = {
        id: `usr-${Date.now()}`,
        sender: 'user',
        text: 'I would like to request an enterprise consultation',
        timestamp: now,
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        chatSounds.playReceive();
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `We would be delighted to arrange a technical consultation with our solution architects.\n\nPlease share your details below:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          showEnquiryForm: true,
          defaultService: SERVICE_OPTIONS[0]
        };
        setMessages((prev) => [...prev, botMsg]);
        setActiveEnquiryForm(true);
      }, 500);
      return;
    }

    handleSendMessage(actionQuery);
  };

  // Form Validation & Submission
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!enquiryData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!enquiryData.email.trim()) {
      errors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiryData.email.trim())) {
      errors.email = 'Please provide a valid email address';
    }
    if (!enquiryData.company.trim()) errors.company = 'Company name is required';
    if (!enquiryData.message.trim()) errors.message = 'Please briefly outline your requirements';
    return errors;
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmittingEnquiry(true);
    setEnquirySubmitError(null);

    try {
      const result = await submitEnquiry({
        full_name: enquiryData.fullName.trim(),
        email: enquiryData.email.trim(),
        company: enquiryData.company.trim(),
        phone: enquiryData.phone.trim() || undefined,
        service: enquiryData.service,
        industry: 'Enterprise Technology',
        country: 'India',
        message: enquiryData.message.trim(),
        source: 'CHATBOT_AI_ASSISTANT'
      });

      if (result.success) {
        chatSounds.playReceive();
        const refId = `KNV-${Math.floor(100000 + Math.random() * 900000)}`;
        setEnquirySubmittedSuccess(refId);
        setActiveEnquiryForm(false);

        // Append confirmation to chat
        const confirmationMsg: ChatMessage = {
          id: `bot-conf-${Date.now()}`,
          sender: 'bot',
          text: `Thank you, **${enquiryData.fullName}**! Your consultation enquiry has been registered under reference **${refId}**.\n\nOur enterprise architecture team will review your requirements for **${enquiryData.service}** and contact you at **${enquiryData.email}** within one business day.\n\nIs there anything else I can assist you with in the meantime?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          navLinks: [
            { label: 'Explore SAP S/4HANA', path: '/transformation/sap-s4hana' },
            { label: 'View Our Global Presence', path: '/about/global-presence' }
          ],
          followUps: [
            'Where is Knooviq Mumbai HQ located?',
            'Explore Knooviq Products & Solutions',
            'Download Corporate Overview'
          ]
        };
        setMessages((prev) => [...prev, confirmationMsg]);
      } else {
        setEnquirySubmitError(result.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch {
      setEnquirySubmitError('Network or server error. Please try again or email contact@knooviq.com.');
    } finally {
      setIsSubmittingEnquiry(false);
    }
  };

  // Helper icon for quick actions
  const getActionIcon = (id: string) => {
    switch (id) {
      case 'sap-solutions':
        return <Layers className="w-4 h-4 text-[#0070C0]" />;
      case 'digital-ai':
        return <Cpu className="w-4 h-4 text-[#0070C0]" />;
      case 'products':
        return <Box className="w-4 h-4 text-[#0070C0]" />;
      case 'industries':
        return <Building2 className="w-4 h-4 text-[#0070C0]" />;
      case 'consultation':
        return <Calendar className="w-4 h-4 text-[#0070C0]" />;
      case 'contact':
        return <Mail className="w-4 h-4 text-[#0070C0]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#0070C0]" />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 select-none print:hidden">
      
      {/* -------------------------------------------------------------------- */}
      {/* 1. FLOATING LAUNCHER TRIGGER (When Chat Panel is Closed)              */}
      {/* -------------------------------------------------------------------- */}
      <AnimatePresence>
        {!isOpen && (
          <div className="relative flex items-center justify-end">
            
            {/* Optional Welcome Tooltip */}
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute right-16 sm:right-20 top-1/2 -translate-y-1/2 bg-white dark:bg-[#0A1931] border border-slate-200 dark:border-sky-500/30 text-slate-800 dark:text-slate-100 px-4 py-2.5 rounded-2xl shadow-xl shadow-blue-900/10 flex items-center gap-3 whitespace-nowrap text-xs font-semibold z-10"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0070C0] animate-pulse" />
                  <span>Need help exploring Knooviq?</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTooltip(false);
                    sessionStorage.setItem(TOOLTIP_DISMISSED_KEY, 'true');
                  }}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-0.5"
                  title="Dismiss"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                {/* Pointer Arrow */}
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-[#0A1931] border-t border-r border-slate-200 dark:border-sky-500/30 rotate-45" />
              </motion.div>
            )}

            {/* Launcher Button */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="relative group"
            >
              {/* Subtle animated blue gradient ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0070C0] via-cyan-400 to-[#0070C0] opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

              <button
                onClick={handleOpen}
                aria-label="Open Knooviq AI Assistant"
                className="relative flex items-center gap-3 rounded-full bg-white dark:bg-[#0A1931] border border-slate-200/90 dark:border-sky-500/30 p-2 sm:py-2.5 sm:px-4 shadow-2xl backdrop-blur-xl text-slate-800 dark:text-white transition-all duration-200"
              >
                {/* Circular Assistant Avatar with Online Indicator */}
                <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-[#0070C0] to-[#00A3E0] text-white shadow-md flex-shrink-0">
                  <Bot className="w-5 h-5 drop-shadow" />
                  {/* Small Tasteful Online Status Indicator */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0A1931] shadow-[0_0_6px_#10B981]" />
                </div>

                {/* Text Label on desktop */}
                <div className="hidden sm:flex flex-col text-left pr-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0070C0] dark:text-sky-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>AI Assistant</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-900 dark:text-white">
                    Explore Knooviq
                  </span>
                </div>
              </button>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

      {/* -------------------------------------------------------------------- */}
      {/* 2. CHATBOT WINDOW (DESKTOP & RESPONSIVE MOBILE SHEET)                 */}
      {/* -------------------------------------------------------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="relative flex flex-col w-[calc(100vw-2rem)] sm:w-[410px] md:w-[420px] h-[82vh] max-h-[640px] rounded-3xl border border-slate-200/90 dark:border-sky-500/30 bg-white/95 dark:bg-[#0A1931]/95 shadow-2xl shadow-blue-950/20 backdrop-blur-2xl overflow-hidden text-slate-900 dark:text-slate-100"
            role="dialog"
            aria-label="Knooviq AI Assistant"
          >
            
            {/* ---------------------------------------------------------------- */}
            {/* Header: Avatar, Title, Subtitle, Controls                        */}
            {/* ---------------------------------------------------------------- */}
            <div className="relative flex items-center justify-between px-5 py-3.5 border-b border-slate-200/80 dark:border-sky-500/20 bg-gradient-to-r from-slate-50 via-white to-sky-50/50 dark:from-[#0A1931] dark:via-[#0E2244] dark:to-[#0A1931]">
              <div className="flex items-center gap-3">
                {/* Assistant Avatar */}
                <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0070C0] to-[#00A3E0] text-white shadow-md flex-shrink-0">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0A1931] shadow-[0_0_6px_#10B981]" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    Knooviq AI Assistant
                    <span className="inline-flex items-center text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 px-1.5 py-0.2 rounded-full">
                      Online
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-sky-300/80 font-medium leading-none mt-0.5">
                    Your guide to enterprise solutions
                  </p>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                {/* Audio SFX Toggle */}
                <button
                  onClick={handleToggleSound}
                  title={soundEnabled ? 'Mute sound effects' : 'Unmute sound effects'}
                  aria-label="Toggle chat sounds"
                  className="p-1.5 rounded-lg hover:bg-slate-200/70 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-[#0070C0] dark:text-sky-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
                </button>

                {/* Reset Conversation */}
                <button
                  onClick={() => setConfirmClearOpen(true)}
                  title="Clear conversation"
                  aria-label="Clear conversation"
                  className="p-1.5 rounded-lg hover:bg-slate-200/70 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Minimize / Close */}
                <button
                  onClick={handleClose}
                  title="Close assistant"
                  aria-label="Close assistant"
                  className="p-1.5 rounded-lg hover:bg-slate-200/70 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  title="Close assistant"
                  aria-label="Close assistant"
                  className="p-1.5 rounded-lg hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Clear Conversation Confirmation Modal / Dropdown                 */}
            {/* ---------------------------------------------------------------- */}
            {confirmClearOpen && (
              <div className="px-4 py-3 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between">
                <span>Clear all messages & restart conversation?</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleClearChat}
                    className="px-2.5 py-1 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => setConfirmClearOpen(false)}
                    className="px-2.5 py-1 bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-200 font-medium rounded-lg hover:bg-slate-300 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* Scrollable Conversation Stream / Welcome Screen                  */}
            {/* ---------------------------------------------------------------- */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-xs scroll-smooth">
              
              {/* Fresh Welcome Screen when conversation is empty */}
              {messages.length === 0 && (
                <div className="py-2 space-y-4">
                  {/* Greeting Box */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 via-sky-50/40 to-slate-50 dark:from-[#0E2244]/80 dark:to-[#0A1931]/80 border border-slate-200/80 dark:border-sky-500/20 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#0070C0]/10 dark:bg-[#0070C0]/30 flex items-center justify-center text-[#0070C0] dark:text-sky-400 flex-shrink-0">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {WELCOME_GREETING}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          {WELCOME_SUBTITLE}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 6 Compact Quick Action Cards */}
                  <div>
                    <span className="block text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-1">
                      Quick Topics
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {QUICK_ACTIONS.map((action) => (
                        <button
                          key={action.id}
                          onClick={() => handleQuickAction(action.query, action.id)}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200/90 dark:border-sky-500/20 bg-white dark:bg-[#0E2244]/40 hover:bg-sky-50/70 dark:hover:bg-sky-950/40 hover:border-[#0070C0]/50 dark:hover:border-sky-400/50 text-left transition-all duration-200 group shadow-sm"
                        >
                          <div className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            {getActionIcon(action.id)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#0070C0] dark:group-hover:text-sky-300 transition-colors truncate">
                              {action.title}
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                              {action.description}
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0070C0] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Message List */}
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {/* User / Bot Icon */}
                    <div className={`flex h-7 w-7 items-center justify-center rounded-xl flex-shrink-0 text-white ${
                      isUser
                        ? 'bg-gradient-to-tr from-[#0070C0] to-[#005fa3] shadow-sm'
                        : 'bg-white dark:bg-[#0E2244] border border-slate-200 dark:border-sky-500/30 text-[#0070C0] dark:text-sky-400 shadow-sm'
                    }`}>
                      {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    {/* Bubble Content */}
                    <div className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm leading-relaxed whitespace-pre-line ${
                      isUser
                        ? 'bg-gradient-to-r from-[#0070C0] to-[#005fa3] text-white rounded-tr-none'
                        : 'bg-white dark:bg-[#0E2244]/90 border border-slate-200/90 dark:border-sky-500/20 text-slate-800 dark:text-slate-100 rounded-tl-none backdrop-blur-md'
                    }`}>
                      {/* Formatted Text */}
                      <div className="text-xs space-y-1">
                        {msg.text}
                      </div>

                      {/* Navigation Pills (When Assistant provides direct internal links) */}
                      {msg.navLinks && msg.navLinks.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-sky-500/20 flex flex-wrap gap-1.5">
                          {msg.navLinks.map((link, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleNavigate(link.path)}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all ${
                                link.primary
                                  ? 'bg-[#0070C0] hover:bg-[#005fa3] text-white shadow-sm'
                                  : 'bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10'
                              }`}
                            >
                              <span>{link.label}</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Timestamp */}
                      <span className={`block text-[9px] mt-1.5 ${isUser ? 'text-sky-100 text-right' : 'text-slate-400 text-left'}`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* -------------------------------------------------------------- */}
              {/* In-Chat Conversational Enquiry Form (Lead Generation)           */}
              {/* -------------------------------------------------------------- */}
              {activeEnquiryForm && !enquirySubmittedSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-white dark:bg-[#0E2244]/95 border border-[#0070C0]/30 dark:border-sky-400/30 shadow-md space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0070C0] dark:text-sky-400" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        Request Enterprise Consultation
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400">Step 1 of 1</span>
                  </div>

                  <form onSubmit={handleEnquirySubmit} className="space-y-2.5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-0.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={enquiryData.fullName}
                        onChange={(e) => setEnquiryData({ ...enquiryData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0070C0]"
                      />
                      {formErrors.fullName && (
                        <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.fullName}</p>
                      )}
                    </div>

                    {/* Email & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-0.5">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          value={enquiryData.email}
                          onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                          placeholder="r.sharma@enterprise.com"
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0070C0]"
                        />
                        {formErrors.email && (
                          <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-0.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          value={enquiryData.company}
                          onChange={(e) => setEnquiryData({ ...enquiryData, company: e.target.value })}
                          placeholder="Enterprise Ltd"
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0070C0]"
                        />
                        {formErrors.company && (
                          <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.company}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-0.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={enquiryData.phone}
                          onChange={(e) => setEnquiryData({ ...enquiryData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0070C0]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-0.5">
                          Area of Interest
                        </label>
                        <select
                          value={enquiryData.service}
                          onChange={(e) => setEnquiryData({ ...enquiryData, service: e.target.value })}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#0070C0]"
                        >
                          {SERVICE_OPTIONS.map((srv, idx) => (
                            <option key={idx} value={srv} className="bg-white dark:bg-[#0A1931]">
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-0.5">
                        Project Requirements / Scope *
                      </label>
                      <textarea
                        rows={2}
                        value={enquiryData.message}
                        onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })}
                        placeholder="Briefly describe your ERP landscape, current challenges or desired outcomes..."
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0070C0] resize-none"
                      />
                      {formErrors.message && (
                        <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.message}</p>
                      )}
                    </div>

                    {/* Submit Error */}
                    {enquirySubmitError && (
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-300 text-[11px]">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{enquirySubmitError}</span>
                      </div>
                    )}

                    {/* Submit / Cancel Buttons */}
                    <div className="flex items-center justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setActiveEnquiryForm(false)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmittingEnquiry}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#0070C0] hover:bg-[#005fa3] text-white text-xs font-semibold shadow-md transition disabled:opacity-50"
                      >
                        {isSubmittingEnquiry ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Submit Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 pl-9 py-1">
                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#0E2244] px-3 py-2 rounded-2xl rounded-tl-none border border-slate-200 dark:border-sky-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070C0] animate-bounce" />
                  </div>
                  <span className="text-[10px] text-slate-400">Assistant is typing...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Suggested Follow-Up Question Chips (Below latest bot message)    */}
            {/* ---------------------------------------------------------------- */}
            {messages.length > 0 && messages[messages.length - 1].sender === 'bot' && (
              <div className="px-3 py-2 border-t border-slate-200/80 dark:border-sky-500/15 bg-slate-50/80 dark:bg-[#0E2244]/40 overflow-x-auto flex gap-1.5 no-scrollbar">
                {(messages[messages.length - 1].followUps || [
                  'Explore SAP S/4HANA',
                  'Tell me about EXIM',
                  'Request a Consultation'
                ]).map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(chip)}
                    className="rounded-xl bg-white dark:bg-white/5 hover:bg-[#0070C0] hover:text-white dark:hover:bg-[#0070C0] border border-slate-200 dark:border-sky-500/20 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-sky-200 whitespace-nowrap transition-all duration-200 flex-shrink-0 shadow-2xs"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* Input Bar & Escalation CTA                                       */}
            {/* ---------------------------------------------------------------- */}
            <div className="p-3 border-t border-slate-200/80 dark:border-sky-500/20 bg-white dark:bg-[#0A1931]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Ask me anything about Knooviq..."
                  className="flex-1 rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#0E2244]/60 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#0070C0] dark:focus:border-sky-400 transition"
                />

                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  aria-label="Send message"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0070C0] hover:bg-[#005fa3] text-white shadow-sm disabled:opacity-40 transition-all hover:scale-105 active:scale-95 flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Direct Human Specialist CTA */}
              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-1 pt-1.5 border-t border-slate-100 dark:border-white/5">
                <span className="flex items-center gap-1.5 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Knooviq Enterprise AI</span>
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContact('Direct Consultation via Knooviq AI Chatbot');
                  }}
                  className="inline-flex items-center gap-1 text-[#0070C0] dark:text-sky-400 hover:underline font-semibold text-[11px]"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Talk to Human Expert</span>
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
