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
  Loader2
} from 'lucide-react';
import {
  generateBotResponse,
  ChatMessage,
  WELCOME_GREETING,
  WELCOME_SUBTITLE,
  SUGGESTED_QUESTIONS,
  NavLink
} from './ChatbotKnowledge';
import { submitEnquiry } from '../../lib/supabase';

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
  'SAP S/4HANA & Enterprise Transformation',
  'SAP Application Management (AMS)',
  'Digital Intelligence & AI Studio',
  'Global Trade & Compliance (EXIM)',
  'E-Invoicing & E-Way Bill Solutions',
  'Accelerated GST & Tax Solutions',
  'Cloud Infrastructure & Cybersecurity',
  'General Corporate Consultation'
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
        setTimeout(() => inputRef.current?.focus(), 250);
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
    if (!enquiryData.email.trim()) {
      errors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiryData.email.trim())) {
      errors.email = 'Please provide a valid business email';
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
        const refId = `KNV-${Math.floor(100000 + Math.random() * 900000)}`;
        setEnquirySubmittedSuccess(refId);
        setActiveEnquiryForm(false);

        const confirmationMsg: ChatMessage = {
          id: `bot-conf-${Date.now()}`,
          sender: 'bot',
          text: `Thank you, **${enquiryData.fullName}**! Your consultation enquiry has been registered under reference **${refId}**.\n\nOur enterprise architecture team will review your requirements for **${enquiryData.service}** and contact you at **${enquiryData.email}** within one business day.\n\nHow else can I assist you today?`,
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
        setEnquirySubmitError(result.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch {
      setEnquirySubmitError('Network or server error. Please try again or email contact@knooviq.com.');
    } finally {
      setIsSubmittingEnquiry(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none print:hidden">
      
      {/* -------------------------------------------------------------------- */}
      {/* Vibration & Pulse Keyframes (Matching Dais World Widget Animation)   */}
      {/* -------------------------------------------------------------------- */}
      <style>{`
        @keyframes daisworld-vibrate {
          0% {
            transform: scale(1) rotate(0deg);
          }
          4% {
            transform: scale(1.08) rotate(-14deg);
          }
          8% {
            transform: scale(1.08) rotate(14deg);
          }
          12% {
            transform: scale(1.08) rotate(-14deg);
          }
          16% {
            transform: scale(1.08) rotate(14deg);
          }
          20% {
            transform: scale(1.04) rotate(-8deg);
          }
          24% {
            transform: scale(1.04) rotate(8deg);
          }
          28% {
            transform: scale(1) rotate(0deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes daisworld-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 112, 192, 0.6), 0 4px 14px rgba(0, 43, 102, 0.4);
          }
          65% {
            box-shadow: 0 0 0 16px rgba(0, 112, 192, 0), 0 4px 14px rgba(0, 43, 102, 0.4);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 112, 192, 0), 0 4px 14px rgba(0, 43, 102, 0.4);
          }
        }
        .animate-daisworld {
          animation: daisworld-vibrate 2.4s infinite ease-in-out, daisworld-pulse 2.4s infinite ease-in-out;
        }
        .animate-daisworld:hover {
          animation-play-state: paused;
          transform: scale(1.08);
        }
      `}</style>

      {/* -------------------------------------------------------------------- */}
      {/* 1. SOLID STATIC LAUNCHER TRIGGER (DAISWORLD STYLE VIBRATION & GLOW)  */}
      {/* -------------------------------------------------------------------- */}
      {!isOpen && (
        <div className="relative flex items-center justify-center">
          <button
            onClick={handleOpen}
            aria-label="Open KNOOVIQ AI Assistant"
            className="animate-daisworld relative flex items-center justify-center w-14 h-14 rounded-full bg-[#002B66] hover:bg-[#003882] text-white border-2 border-white/20 transition-all duration-200 cursor-pointer"
          >
            {/* White Outline Chat Speech Bubble Icon matching Image 1 */}
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
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* 2. OPEN CHATBOT WINDOW (STATIONARY FIXED POSITION - MATCHING IMAGE 2) */}
      {/* -------------------------------------------------------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            data-lenis-prevent="true"
            className="relative flex flex-col w-[calc(100vw-2.5rem)] sm:w-[390px] md:w-[410px] h-[84vh] max-h-[660px] rounded-3xl border border-slate-200/90 bg-[#F8FAFC] shadow-2xl shadow-blue-950/30 overflow-hidden text-slate-900"
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
              {/* In-Chat Consultation Form                                       */}
              {/* -------------------------------------------------------------- */}
              {activeEnquiryForm && !enquirySubmittedSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-white border border-[#002B66]/30 shadow-md space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#002B66]" />
                      <span className="text-xs font-bold text-slate-900">
                        Connect with KNOOVIQ Expert
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400">Consultation Scope</span>
                  </div>

                  <form onSubmit={handleEnquirySubmit} className="space-y-2.5">
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-0.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={enquiryData.fullName}
                        onChange={(e) => setEnquiryData({ ...enquiryData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#002B66]"
                      />
                      {formErrors.fullName && (
                        <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-0.5">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          value={enquiryData.email}
                          onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                          placeholder="r.sharma@enterprise.com"
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#002B66]"
                        />
                        {formErrors.email && (
                          <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-0.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          value={enquiryData.company}
                          onChange={(e) => setEnquiryData({ ...enquiryData, company: e.target.value })}
                          placeholder="Enterprise Ltd"
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#002B66]"
                        />
                        {formErrors.company && (
                          <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.company}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-0.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={enquiryData.phone}
                          onChange={(e) => setEnquiryData({ ...enquiryData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#002B66]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-0.5">
                          Area of Interest
                        </label>
                        <select
                          value={enquiryData.service}
                          onChange={(e) => setEnquiryData({ ...enquiryData, service: e.target.value })}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:border-[#002B66]"
                        >
                          {SERVICE_OPTIONS.map((srv, idx) => (
                            <option key={idx} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-slate-600 uppercase tracking-wider mb-0.5">
                        Requirements Scope *
                      </label>
                      <textarea
                        rows={2}
                        value={enquiryData.message}
                        onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })}
                        placeholder="Briefly describe your ERP landscape or objectives..."
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#002B66] resize-none"
                      />
                      {formErrors.message && (
                        <p className="text-[10px] text-rose-500 mt-0.5">{formErrors.message}</p>
                      )}
                    </div>

                    {enquirySubmitError && (
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-rose-50 text-rose-600 text-[11px]">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{enquirySubmitError}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setActiveEnquiryForm(false)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 hover:bg-slate-100 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmittingEnquiry}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#002B66] hover:bg-[#003882] text-white text-xs font-semibold shadow-sm transition disabled:opacity-50"
                      >
                        {isSubmittingEnquiry ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Submit Request</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
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

    </div>
  );
};
