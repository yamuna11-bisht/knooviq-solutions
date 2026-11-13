import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Trash2,
  Volume2,
  VolumeX,
  ArrowRight,
  AlertCircle,
  Calendar,
  ChevronRight,
  ChevronDown,
  MapPin,
  FileText,
  Briefcase,
  GraduationCap,
  Headphones,
  Lightbulb,
  Mic,
  Bot,
  User,
  Loader2,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import {
  generateBotResponse,
  ChatMessage,
  WELCOME_GREETING,
  WELCOME_SUBTITLE,
  SUGGESTED_QUESTIONS,
  NavLink
} from './ChatbotKnowledge';
import confetti from 'canvas-confetti';
import { submitEnquiry } from '../../lib/supabase';
import { validateEmail, validatePhone, sanitizePhoneInput } from '../../lib/validation';
import { RateLimiter } from '../../lib/rateLimiter';

interface ChatbotWidgetProps {
  onOpenContact: (defaultService?: string) => void;
}

const STORAGE_KEY = 'knooviq_ai_assistant_history_v3';

const PROMINENT_ACTION_CARDS = [
  {
    id: 'services',
    title: "Tell me about KNOOVIQ's services",
    icon: FileText,
    query: "Tell me about KNOOVIQ's services"
  },
  {
    id: 'business',
    title: "How can KNOOVIQ help my business?",
    icon: Briefcase,
    query: "How can KNOOVIQ help my business?"
  },
  {
    id: 'careers',
    title: "I'm interested in a career at KNOOVIQ",
    icon: GraduationCap,
    query: "I'm interested in a career at KNOOVIQ"
  },
  {
    id: 'expert',
    title: "Connect me with an expert",
    icon: Headphones,
    query: "Connect me with an expert"
  }
];

const SERVICE_OPTIONS = [
  'SAP Consulting & Outsourcing',
  'SAP S/4HANA Migration & Upgrades',
  'SAP Application Management (AMS)',
  'SAP Support Services',
  'SAP Integration & BTP Solutions',
  'SAP Mobility & Fiori UX',
  'SAP Corporate Training',
  'General Enterprise Consultation',
  'Other'
];

/**
 * Format markdown text (bolding, bullet points, line breaks) cleanly
 */
function renderFormattedMessage(text: string, isUser = false) {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    const trimmed = line.trim();
    const isBullet = trimmed.startsWith('•') || trimmed.startsWith('- ') || /^\d+\.\s/.test(trimmed);

    // Parse bold text **example**
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const formattedParts = parts.map((part, partIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={partIdx}
            className={`font-semibold ${isUser ? 'text-white' : 'text-slate-900'}`}
          >
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });

    if (trimmed === '') {
      return <div key={lineIdx} className="h-1.5" />;
    }

    if (isBullet) {
      return (
        <div key={lineIdx} className="flex items-start gap-2 pl-1 my-0.5">
          <span className={`${isUser ? 'text-sky-200' : 'text-[#0070C0]'} font-bold select-none text-xs leading-5`}>•</span>
          <span className={`flex-1 leading-relaxed text-[13.5px] ${isUser ? 'text-white font-medium' : 'text-slate-700'}`}>
            {formattedParts}
          </span>
        </div>
      );
    }

    return (
      <p
        key={lineIdx}
        className={`my-0.5 leading-relaxed text-[13.5px] ${
          isUser ? 'text-white font-medium tracking-normal' : 'text-slate-700'
        }`}
      >
        {formattedParts}
      </p>
    );
  });
}

/**
 * Helper to determine clean human-readable current page name
 */
function getPageTitle(pathname: string): string {
  if (pathname === '/' || pathname === '') return 'SAP Enterprise Overview';
  if (pathname.includes('consumer-products')) return 'SAP for Consumer Products';
  if (pathname.includes('ai-powered-automation')) return 'AI-Powered Automation';
  if (pathname.includes('artificial-intelligence')) return 'Artificial Intelligence';
  if (pathname.includes('sap-s4hana')) return 'SAP S/4HANA Transformation';
  if (pathname.includes('exim')) return 'Global Trade & Compliance (EXIM)';
  if (pathname.includes('e-invoice')) return 'E-Invoicing Solutions';
  if (pathname.includes('eway-bill')) return 'E-Way Bill Solutions';
  if (pathname.includes('gst')) return 'Accelerated GST & Tax';
  if (pathname.includes('careers')) return 'Careers at KNOOVIQ';
  if (pathname.includes('contact')) return 'Contact & Consultation';
  if (pathname.includes('global-presence')) return 'Global Presence & Mumbai HQ';
  if (pathname.includes('the-knooviq-story')) return 'The KNOOVIQ Story';
  if (pathname.includes('industries')) return 'Industry Solutions';
  if (pathname.includes('products')) return 'Enterprise Products';
  if (pathname.includes('services') || pathname.includes('advisory')) return 'Advisory & Managed Services';
  if (pathname.includes('cloud')) return 'Cloud & Operations';
  
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    const last = segments[segments.length - 1];
    return last
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');
  }
  return 'Enterprise Solutions';
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenContact }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Widget Open State (Fixed, stationary position)
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showSuggestedQuestions, setShowSuggestedQuestions] = useState(false);

  // In-Chat Lead Generation Form State
  const [activeEnquiryForm, setActiveEnquiryForm] = useState<boolean>(false);
  const [enquiryData, setEnquiryData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    message: ''
  });
  const [otherServiceText, setOtherServiceText] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmittingEnquiry, setIsSubmittingEnquiry] = useState(false);
  const [enquirySubmittedSuccess, setEnquirySubmittedSuccess] = useState<string | null>(null);
  const [enquirySubmitError, setEnquirySubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    const words = val.trim() ? val.trim().split(/\s+/).filter(Boolean) : [];
    if (words.length > 500) {
      const truncated = val.trim().split(/\s+/).slice(0, 500).join(' ');
      setEnquiryData((prev) => ({ ...prev, message: truncated }));
    } else {
      setEnquiryData((prev) => ({ ...prev, message: val }));
    }
  };

  const wordCount = enquiryData.message.trim() ? enquiryData.message.trim().split(/\s+/).filter(Boolean).length : 0;

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentPageTitle = getPageTitle(location.pathname);

  // Auto scroll chat messages smoothly to bottom without affecting window/document scroll
  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, []);

  // Restore messages from sessionStorage
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
  }, []);

  // Persist messages in sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // storage quota safe
      }
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 250);
      }
    }
  }, [isOpen, messages, isTyping, scrollToBottom]);

  // Open & Close
  const handleOpen = () => {
    setIsOpen(true);
    if (typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator) {
      try {
        navigator.vibrate?.([40, 20, 40]);
      } catch {
        // vibration safe
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Delete / Reset conversation directly
  const handleDeleteChat = () => {
    setMessages([]);
    setActiveEnquiryForm(false);
    setEnquirySubmittedSuccess(null);
    setEnquirySubmitError(null);
    setEnquiryData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: SERVICE_OPTIONS[0],
      message: ''
    });
    setOtherServiceText('');
    setHoneypot('');
    setFormErrors({});
    sessionStorage.removeItem(STORAGE_KEY);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Text-To-Speech (Read aloud)
  const handleReadAloud = (textToRead?: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = textToRead || "Hello! I'm KNOOVIQ AI Assistant. How can I help you today?";
    const cleanText = text.replace(/[*#•_-]/g, ' ');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Voice speech-to-text input
  const handleVoiceInput = () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition =
      (window as unknown as { SpeechRecognition?: any }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Voice input is not supported by your current browser. Please type your message.');
      return;
    }

    try {
      if (isListening) {
        setIsListening(false);
        return;
      }
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputText(transcript);
        }
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  // Navigate to internal route from chat
  const handleNavigate = (path: string) => {
    navigate(path);
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  // Send message handler
  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

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

    const responseDelay = Math.min(900, Math.max(450, text.length * 12));

    setTimeout(() => {
      setIsTyping(false);

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

  // Handle Card Click
  const handleCardClick = (actionQuery: string, cardId: string) => {
    if (cardId === 'expert') {
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const userMsg: ChatMessage = {
        id: `usr-${Date.now()}`,
        sender: 'user',
        text: 'Connect me with an expert',
        timestamp: now,
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `We would be delighted to arrange a direct technical consultation with our senior solution architects.\n\nPlease share your details below:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          showEnquiryForm: true,
          defaultService: SERVICE_OPTIONS[0]
        };
        setMessages((prev) => [...prev, botMsg]);
        setActiveEnquiryForm(true);
      }, 450);
      return;
    }

    handleSendMessage(actionQuery);
  };

  // Form Validation & Submission
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!enquiryData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!enquiryData.company.trim()) errors.company = 'Company name is required';
    const emailErr = validateEmail(enquiryData.email);
    if (emailErr) errors.email = emailErr;
    const phoneErr = validatePhone(enquiryData.phone);
    if (phoneErr) errors.phone = phoneErr;
    if (enquiryData.service === 'Other' && !otherServiceText.trim()) {
      errors.service = 'Please specify your other requirement';
    }
    return errors;
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitError(null);

    // Rate Limit Security Check
    const rateCheck = RateLimiter.checkRateLimit('chatbot_enquiry', { maxAttempts: 4, windowMs: 60000 });
    if (!rateCheck.allowed) {
      setEnquirySubmitError(`Please wait ${rateCheck.remainingWaitSec}s before submitting again.`);
      return;
    }

    // Anti-Bot Honeypot Defense
    if (honeypot && honeypot.length > 0) {
      setEnquirySubmitError('Bot submission detected.');
      return;
    }

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmittingEnquiry(true);

    const effectiveService = enquiryData.service === 'Other' && otherServiceText.trim()
      ? `Other: ${otherServiceText.trim()}`
      : enquiryData.service;

    try {
      const result = await submitEnquiry({
        full_name: enquiryData.fullName.trim(),
        email: enquiryData.email.trim(),
        company: enquiryData.company.trim(),
        phone: enquiryData.phone.trim(),
        service: effectiveService,
        industry: 'Enterprise Technology',
        country: 'India',
        message: enquiryData.message.trim() || '',
        source: 'CHATBOT_AI_ASSISTANT'
      });

      if (result.success) {
        try {
          confetti({
            particleCount: 60,
            spread: 55,
            origin: { y: 0.6 }
          });
        } catch {
          // confetti safe
        }

        const refId = `KNV-${Math.floor(100000 + Math.random() * 900000)}`;
        setEnquirySubmittedSuccess(refId);
        setActiveEnquiryForm(false);

        const confirmationMsg: ChatMessage = {
          id: `bot-conf-${Date.now()}`,
          sender: 'bot',
          text: `Thank you, **${enquiryData.fullName}**! Your inquiry has been registered under reference **${refId}**.\n\nOur enterprise solution experts will review your request for **${effectiveService}** and get in touch with you at **${enquiryData.email}** shortly.\n\nHow else can I assist you today?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          navLinks: [
            { label: 'Explore SAP S/4HANA', path: '/transformation/sap-s4hana', primary: true },
            { label: 'View Our Global Presence', path: '/about/global-presence' }
          ],
          followUps: [
            "Tell me about KNOOVIQ's services",
            'Where is KNOOVIQ Mumbai HQ located?',
            'Explore Enterprise Products'
          ]
        };
        setMessages((prev) => [...prev, confirmationMsg]);
      } else {
        setEnquirySubmitError(result.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setEnquirySubmitError('Network or server error. Please try again or email contact@knooviq.com.');
    } finally {
      setIsSubmittingEnquiry(false);
    }
  };

  return (
    <>
      {/* -------------------------------------------------------------------- */}
      {/* 1. SOLID STATIC LAUNCHER TRIGGER (LOCKED FIXED POSITION, NO MOVEMENT) */}
      {/* -------------------------------------------------------------------- */}
      {!isOpen && (
        <button
          type="button"
          onClick={handleOpen}
          aria-label="Open KNOOVIQ AI Assistant"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#002B66] hover:bg-[#003882] text-white shadow-xl shadow-blue-950/40 border-2 border-white/20 transition-colors duration-200 cursor-pointer select-none print:hidden"
        >
          {/* White Outline Chat Speech Bubble Icon */}
          <svg
            className="w-7 h-7 text-white pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 21a9 9 0 1 0-9-9c0 1.5.38 2.92 1.05 4.15L3 21l4.9-1.02c1.2.66 2.58 1.02 4.1 1.02z" />
          </svg>
        </button>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* 2. OPEN CHATBOT WINDOW (STATIONARY FIXED POSITION - LOCKED AT BOTTOM-6 RIGHT-6) */}
      {/* -------------------------------------------------------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            data-lenis-prevent="true"
            className="fixed bottom-6 right-6 z-50 flex flex-col w-[calc(100vw-2.5rem)] sm:w-[390px] md:w-[410px] h-[84vh] max-h-[660px] rounded-3xl border border-slate-200/90 bg-[#F8FAFC] shadow-2xl shadow-blue-950/30 overflow-hidden text-slate-900 select-none print:hidden"
            role="dialog"
            aria-label="KNOOVIQ AI Assistant"
          >
            
            {/* ---------------------------------------------------------------- */}
            {/* Header: Official KNOOVIQ "K" Logo, Title, Online Status,         */}
            {/* ONLY Delete & Cancel Buttons (No Language Icon)                  */}
            {/* ---------------------------------------------------------------- */}
            <div className="relative flex items-center justify-between px-4 py-3 bg-[#002B66] text-white">
              <div className="flex items-center gap-3">
                {/* Official KNOOVIQ "K" Logo Emblem */}
                <div className="w-10 h-10 rounded-full bg-white p-1.5 flex items-center justify-center shadow-md flex-shrink-0 border border-white/20">
                  <img
                    src="/knooviq-k-logo.png"
                    alt="KNOOVIQ Logo"
                    className="w-full h-full object-contain select-none"
                    draggable={false}
                  />
                </div>

                <div>
                  <h3 className="font-bold text-white text-[15px] leading-tight">
                    KNOOVIQ AI Assistant
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-sky-100 font-medium mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    <span>Online</span>
                  </div>
                </div>
              </div>

              {/* Header Right Controls: ONLY Delete & Cancel Buttons */}
              <div className="flex items-center gap-2 text-white">
                {/* Delete / Clear Conversation Button (Direct Delete) */}
                <button
                  type="button"
                  onClick={handleDeleteChat}
                  title="Clear conversation"
                  aria-label="Clear conversation"
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition cursor-pointer"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

                {/* Cancel / Close Window Button */}
                <button
                  type="button"
                  onClick={handleClose}
                  title="Cancel"
                  aria-label="Cancel"
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Sub-Header Context Bar: "You're viewing: <Current Page Title>"    */}
            {/* ---------------------------------------------------------------- */}
            <div className="px-4 py-2 bg-white border-b border-slate-200/80 flex items-center gap-2 text-xs">
              <MapPin className="w-4 h-4 text-[#00A3E0] flex-shrink-0" />
              <span className="text-slate-500">You're viewing:</span>
              <span className="font-semibold text-slate-800 truncate">{currentPageTitle}</span>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Scrollable Conversation Stream / Cards Container                 */}
            {/* ---------------------------------------------------------------- */}
            <div
              ref={chatContainerRef}
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-3.5 text-xs scroll-smooth"
            >
              
              {/* Initial Welcome Greeting (Exact to Image 2) */}
              <div className="space-y-1">
                <div className="flex items-start gap-2.5">
                  {/* Bot Avatar Icon in Dark Blue Circle */}
                  <div className="w-8 h-8 rounded-full bg-[#004B87] text-white flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>

                  {/* Greeting Bubble */}
                  <div className="max-w-[85%] rounded-2xl rounded-tl-none p-4 bg-white border border-slate-200/90 shadow-xs text-slate-800">
                    <div className="font-semibold text-slate-900 text-sm">{WELCOME_GREETING}</div>
                    <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                      {WELCOME_SUBTITLE}
                    </div>
                  </div>
                </div>

                {/* Read Aloud Button */}
                <button
                  type="button"
                  onClick={() => handleReadAloud()}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#0070C0] ml-11 transition font-medium"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isSpeaking ? 'Speaking...' : 'Read aloud'}</span>
                </button>
              </div>

              {/* 4 Prominent Action Cards (When conversation is fresh) */}
              {messages.length === 0 && (
                <div className="space-y-2.5 pt-1">
                  {PROMINENT_ACTION_CARDS.map((card) => {
                    const Icon = card.icon;
                    return (
                      <button
                        key={card.id}
                        onClick={() => handleCardClick(card.query, card.id)}
                        className="w-full p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 flex items-center justify-between text-left transition-all duration-200 shadow-xs hover:shadow-sm group cursor-pointer"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-[#EDF3FB] text-[#003882] flex items-center justify-center flex-shrink-0 group-hover:bg-[#002B66] group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-[#002B66] transition-colors truncate">
                            {card.title}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Message List (When user interacts) */}
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {/* User / Bot Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-xs mt-0.5 ${
                      isUser
                        ? 'bg-[#0070C0]'
                        : 'bg-[#004B87]'
                    }`}>
                      {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>

                    {/* Bubble Content */}
                    <div className={`max-w-[85%] rounded-2xl shadow-xs leading-relaxed ${
                      isUser
                        ? 'bg-[#0070C0] text-white rounded-tr-xs px-4 py-2.5 shadow-sm border border-[#005B99]/30'
                        : 'bg-white border border-slate-200/90 text-slate-800 rounded-tl-xs p-3.5'
                    }`}>
                      {/* Formatted Content */}
                      <div>
                        {renderFormattedMessage(msg.text, isUser)}
                      </div>

                      {/* Navigation Pills */}
                      {!isUser && msg.navLinks && msg.navLinks.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                          {msg.navLinks.map((link, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleNavigate(link.path)}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all group ${
                                link.primary
                                  ? 'bg-[#002B66] hover:bg-[#003882] text-white shadow-xs'
                                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                              }`}
                            >
                              <span>{link.label}</span>
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Timestamp */}
                      <span className={`block text-[10px] mt-1.5 ${isUser ? 'text-sky-100/90 text-right font-normal' : 'text-slate-400 text-left'}`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* -------------------------------------------------------------- */}
              {/* In-Chat Consultation Form (Exact Match to ContactModal)         */}
              {/* -------------------------------------------------------------- */}
              {activeEnquiryForm && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative p-5 sm:p-7 rounded-3xl bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-sky-500/30 shadow-2xl space-y-4 text-slate-900 dark:text-white"
                >
                  {/* Top-Right Circular Action Buttons (Expand & Close) */}
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 z-10">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveEnquiryForm(false);
                        onOpenContact(enquiryData.service);
                      }}
                      title="Open in full screen modal"
                      aria-label="Open full consultation modal"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveEnquiryForm(false);
                        setEnquirySubmittedSuccess(null);
                      }}
                      aria-label="Close consultation form"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {enquirySubmittedSuccess ? (
                    <div className="text-center py-6">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-500 dark:text-emerald-400 mb-3">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A1931] dark:text-white mb-2">Inquiry Submitted!</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed mb-1">
                        Our enterprise solution experts will review your request and get in touch with you shortly.
                      </p>
                      <p className="text-xs text-slate-400 font-mono mb-5">
                        Ref: <span className="font-bold text-[#00A3E0]">{enquirySubmittedSuccess}</span>
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveEnquiryForm(false);
                          setEnquirySubmittedSuccess(null);
                        }}
                        className="glow-btn rounded-xl px-6 py-2.5 text-xs font-bold text-white cursor-pointer"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Header */}
                      <div className="pr-16">
                        <span className="text-xs font-bold text-[#00A3E0] uppercase tracking-wider font-mono">
                          Talk to Our Experts
                        </span>
                        <h3 className="text-xl font-bold text-[#0A1931] dark:text-white mt-1">
                          Enterprise Consultation
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                          Connect with KNOOVIQ's certified SAP leadership team.
                        </p>
                      </div>

                      {enquirySubmitError && (
                        <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 p-2.5 text-xs text-rose-600 dark:text-rose-300 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 flex-shrink-0" />
                          <span>{enquirySubmitError}</span>
                        </div>
                      )}

                      <form onSubmit={handleEnquirySubmit} noValidate className="space-y-3.5 text-xs">
                        {/* Honeypot Bot Trap */}
                        <div className="hidden" aria-hidden="true">
                          <input
                            type="text"
                            name="cb_enq_hp"
                            tabIndex={-1}
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                            autoComplete="off"
                          />
                        </div>

                        {/* Row 1: Full Name & Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                              Full Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={enquiryData.fullName}
                              onChange={(e) => setEnquiryData({ ...enquiryData, fullName: e.target.value })}
                              placeholder="Your Name"
                              className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                            />
                            {formErrors.fullName && (
                              <p className="text-rose-500 text-[11px] mt-1">{formErrors.fullName}</p>
                            )}
                          </div>

                          <div>
                            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                              Company <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={enquiryData.company}
                              onChange={(e) => setEnquiryData({ ...enquiryData, company: e.target.value })}
                              placeholder="Company Name"
                              className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none"
                            />
                            {formErrors.company && (
                              <p className="text-rose-500 text-[11px] mt-1">{formErrors.company}</p>
                            )}
                          </div>
                        </div>

                        {/* Row 2: Email Address & Phone Number */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                              Email Address <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={enquiryData.email}
                              onChange={(e) => {
                                const val = e.target.value;
                                setEnquiryData({ ...enquiryData, email: val });
                                if (formErrors.email) {
                                  const err = validateEmail(val);
                                  setFormErrors((prev) => {
                                    const next = { ...prev };
                                    if (err) next.email = err;
                                    else delete next.email;
                                    return next;
                                  });
                                }
                              }}
                              onBlur={() => {
                                const err = validateEmail(enquiryData.email);
                                setFormErrors((prev) => {
                                  const next = { ...prev };
                                  if (err) next.email = err;
                                  else delete next.email;
                                  return next;
                                });
                              }}
                              placeholder="name@company.com"
                              className={`w-full rounded-xl border ${
                                formErrors.email
                                  ? 'border-rose-500 focus:border-rose-500'
                                  : 'border-slate-200 dark:border-sky-500/25 focus:border-[#00A3E0]'
                              } bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none`}
                            />
                            {formErrors.email && (
                              <p className="text-rose-500 text-[11px] mt-1">{formErrors.email}</p>
                            )}
                          </div>

                          <div>
                            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                              Phone Number <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              maxLength={20}
                              value={enquiryData.phone}
                              onChange={(e) => {
                                const sanitized = sanitizePhoneInput(e.target.value);
                                setEnquiryData({ ...enquiryData, phone: sanitized });
                                if (formErrors.phone) {
                                  const err = validatePhone(sanitized);
                                  setFormErrors((prev) => {
                                    const next = { ...prev };
                                    if (err) next.phone = err;
                                    else delete next.phone;
                                    return next;
                                  });
                                }
                              }}
                              onBlur={() => {
                                const err = validatePhone(enquiryData.phone);
                                setFormErrors((prev) => {
                                  const next = { ...prev };
                                  if (err) next.phone = err;
                                  else delete next.phone;
                                  return next;
                                });
                              }}
                              placeholder="+91 98000 00000"
                              className={`w-full rounded-xl border ${
                                formErrors.phone
                                  ? 'border-rose-500 focus:border-rose-500'
                                  : 'border-slate-200 dark:border-sky-500/25 focus:border-[#00A3E0]'
                              } bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none`}
                            />
                            {formErrors.phone && (
                              <p className="text-rose-500 text-[11px] mt-1">{formErrors.phone}</p>
                            )}
                          </div>
                        </div>

                        {/* Row 3: Service Requirement Dropdown */}
                        <div>
                          <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Service Requirement <span className="text-rose-500">*</span>
                          </label>
                          <select
                            required
                            value={enquiryData.service}
                            onChange={(e) => setEnquiryData({ ...enquiryData, service: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2.5 text-slate-900 dark:text-white focus:border-[#00A3E0] focus:outline-none font-medium cursor-pointer"
                          >
                            {SERVICE_OPTIONS.map((srv, idx) => (
                              <option key={idx} value={srv}>
                                {srv}
                              </option>
                            ))}
                          </select>

                          {enquiryData.service === 'Other' && (
                            <div className="mt-2">
                              <input
                                type="text"
                                value={otherServiceText}
                                onChange={(e) => setOtherServiceText(e.target.value)}
                                placeholder="Please specify your other requirement..."
                                className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none text-xs"
                              />
                              {formErrors.service && (
                                <p className="text-rose-500 text-[11px] mt-1">{formErrors.service}</p>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Row 4: Requirement Details (Optional, max 500 words, NO asterisk) */}
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="block font-bold text-slate-700 dark:text-slate-300">
                              Requirement Details
                            </label>
                            <span className={`text-[11px] font-mono ${wordCount >= 490 ? 'text-amber-500 font-bold' : 'text-slate-400 dark:text-slate-500'}`}>
                              {wordCount} / 500 words
                            </span>
                          </div>
                          <textarea
                            rows={3}
                            value={enquiryData.message}
                            onChange={handleMessageChange}
                            placeholder="Describe your current ERP systems and objectives (optional, max 500 words)..."
                            className="w-full rounded-xl border border-slate-200 dark:border-sky-500/25 bg-slate-50 dark:bg-[#050B17] px-3.5 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-[#00A3E0] focus:outline-none resize-none"
                          />
                          {formErrors.message && (
                            <p className="text-rose-500 text-[11px] mt-1">{formErrors.message}</p>
                          )}
                        </div>

                        {/* Footer buttons: Cancel & Submit Inquiry */}
                        <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-sky-500/15">
                          <button
                            type="button"
                            onClick={() => setActiveEnquiryForm(false)}
                            className="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmittingEnquiry}
                            className="glow-btn inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-xs font-bold text-white disabled:opacity-50 cursor-pointer shadow-md"
                          >
                            {isSubmittingEnquiry ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send className="h-3.5 w-3.5" />
                                <span>Submit Inquiry</span>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </motion.div>
              )}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 pl-10 py-1">
                  <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-2xl rounded-tl-none border border-slate-200 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#002B66] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#002B66] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#002B66] animate-bounce" />
                  </div>
                  <span className="text-[10px] text-slate-400">Assistant is typing...</span>
                </div>
              )}
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Suggested Questions Collapsible Bar (Exact to Image 2)           */}
            {/* ---------------------------------------------------------------- */}
            <div className="border-t border-slate-200/80 bg-white">
              <button
                type="button"
                onClick={() => setShowSuggestedQuestions(!showSuggestedQuestions)}
                className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-[#0070C0] hover:bg-slate-50 transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#00A3E0]" />
                  <span>Suggested Questions</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#0070C0] transition-transform duration-200 ${showSuggestedQuestions ? 'rotate-180' : ''}`} />
              </button>

              {showSuggestedQuestions && (
                <div className="px-4 pb-3 pt-1 flex flex-wrap gap-1.5 bg-[#F8FAFC]">
                  {SUGGESTED_QUESTIONS.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleSendMessage(question);
                        setShowSuggestedQuestions(false);
                      }}
                      className="text-[11px] font-medium text-slate-700 bg-white hover:bg-[#EDF5FD] hover:text-[#0070C0] hover:border-[#0070C0]/50 border border-slate-200 rounded-xl px-3 py-1.5 shadow-2xs transition text-left cursor-pointer"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Input Bar & Footer (Exact to Image 2)                            */}
            {/* ---------------------------------------------------------------- */}
            <div className="p-3 bg-white border-t border-slate-200/80">
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
                  placeholder="Type your message..."
                  className="flex-1 bg-[#F8FAFC] border border-slate-200/90 rounded-full px-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0070C0] focus:bg-white transition"
                />

                {/* Microphone Button */}
                <button
                  type="button"
                  onClick={handleVoiceInput}
                  title={isListening ? 'Listening...' : 'Voice input'}
                  aria-label="Voice input"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition flex-shrink-0 cursor-pointer ${
                    isListening
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  <Mic className="w-4 h-4" />
                </button>

                {/* Circular Send Button */}
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  aria-label="Send"
                  className="w-10 h-10 rounded-full bg-[#8EA9D2] hover:bg-[#002B66] text-white flex items-center justify-center transition shadow-sm flex-shrink-0 disabled:opacity-40 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Footer Branding from Image 2 */}
              <div className="text-center text-[11px] text-slate-400 pt-2 pb-0.5">
                KNOOVIQ Intelligence. <span className="text-[#00A3E0] font-semibold">Trusted Partnership.</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
