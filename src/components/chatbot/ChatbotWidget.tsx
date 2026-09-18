import React, { useState, useEffect, useRef } from 'react';
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
  PhoneCall
} from 'lucide-react';
import { Bot3DModel } from './Bot3DModel';
import { generateBotResponse, ChatMessage } from './ChatbotKnowledge';
import { chatSounds } from './ChatSound';

interface ChatbotWidgetProps {
  onOpenContact: (defaultService?: string) => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: 'Greetings! 🌟 I am the **KNOOVIQ 3D AI Assistant**.\n\nI can help you explore our **SAP S/4HANA Migrations**, **24/7 AMS Support**, **Corporate Training**, and open career opportunities. How can I assist you today?',
    timestamp: 'Just now'
  }
];

const SUGGESTION_CHIPS = [
  '⚡ S/4HANA Migration Pathways',
  '🛡️ 24/7 Managed AMS SLAs',
  '🎓 SAP Corporate Training Courses',
  '💼 Career Openings at Mumbai HQ',
  '📍 Mumbai Headquarters Location',
  '📞 Schedule Solution Consultation'
];

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [streamingText, setStreamingText] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, streamingText, isOpen]);

  const handleToggleSound = () => {
    const newState = chatSounds.toggleSound();
    setSoundEnabled(newState);
  };

  const handleOpenWidget = () => {
    setIsOpen(true);
    chatSounds.playOpen();
  };

  const streamResponse = (fullText: string) => {
    setStreamingText('');
    setIsSpeaking(true);
    let index = 0;
    const chunkSize = 3;

    const interval = setInterval(() => {
      index += chunkSize;
      if (index >= fullText.length) {
        clearInterval(interval);
        setStreamingText(null);
        setIsSpeaking(false);
        chatSounds.playReceive();

        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: fullText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        setStreamingText(fullText.substring(0, index));
      }
    }, 20);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isThinking) return;

    chatSounds.playSend();

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsThinking(true);

    setTimeout(() => {
      setIsThinking(false);
      const response = generateBotResponse(text, onOpenContact);
      streamResponse(response.text);
    }, 700);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
    setStreamingText(null);
    setIsThinking(false);
    setIsSpeaking(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      
      {/* Floating 3D Launcher Trigger Button (When Closed) */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="relative group"
        >
          {/* Animated Neon Radial Glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#0A1931] via-[#00A3E0] to-[#0A1931] opacity-70 blur-lg group-hover:opacity-100 transition-opacity animate-pulse" />

          <button
            onClick={handleOpenWidget}
            className="relative flex items-center gap-3 rounded-full border border-sky-400/40 bg-white dark:bg-[#0B1528] py-2.5 px-4 text-slate-800 dark:text-white shadow-2xl backdrop-blur-2xl hover:scale-105 transition-all duration-300"
          >
            {/* Live 3D Bot Avatar Thumbnail */}
            <div className="relative h-12 w-12 flex-shrink-0 -my-2 -ml-2 rounded-full overflow-hidden border-2 border-[#00A3E0]/40 bg-slate-100 dark:bg-[#050B17] shadow-inner">
              <Bot3DModel className="h-full w-full" isThinking={false} isSpeaking={false} />
            </div>

            <div className="flex flex-col text-left pr-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#00A3E0] dark:text-cyan-300 flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-[#00A3E0]" />
                <span>3D AI Navigator</span>
              </span>
              <span className="text-xs font-bold text-slate-900 dark:text-white tracking-wide">
                Chat with KNOOVIQ
              </span>
            </div>
          </button>
        </motion.div>
      )}

      {/* Expanded Luxury 3D Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 25 }}
            transition={{ duration: 0.3 }}
            className="relative flex flex-col w-[360px] sm:w-[430px] h-[600px] rounded-3xl border border-slate-200 dark:border-sky-400/30 bg-white/95 dark:bg-[#0B1528]/95 shadow-2xl backdrop-blur-2xl overflow-hidden text-slate-900 dark:text-white"
          >
            
            {/* 3D Visual Header */}
            <div className="relative flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-sky-500/20 bg-slate-50 dark:bg-gradient-to-r dark:from-[#0B1528] dark:via-[#050B17] dark:to-[#0B1528]">
              
              <div className="flex items-center gap-3.5">
                {/* Interactive 3D Cyber Bot Model */}
                <div className="relative h-16 w-16 rounded-2xl border border-[#00A3E0]/40 bg-white dark:bg-[#050B17] shadow-md flex-shrink-0 overflow-hidden">
                  <Bot3DModel 
                    className="h-full w-full" 
                    isThinking={isThinking} 
                    isSpeaking={isSpeaking} 
                  />
                  {isThinking && (
                    <div className="absolute inset-0 bg-sky-400/15 backdrop-blur-[1px] flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-[#00A3E0] animate-ping" />
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    KNOOVIQ 3D AI Assistant
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
                  </h4>
                  <p className="text-[11px] text-[#00A3E0] dark:text-cyan-300 font-medium">
                    {isThinking ? '🧠 Analyzing SAP knowledge...' : isSpeaking ? '🔊 Synthesizing answer...' : '✨ Interactive 3D Advisor'}
                  </p>
                </div>
              </div>

              {/* Top Controls */}
              <div className="flex items-center gap-1">
                {/* Audio SFX Toggle */}
                <button
                  onClick={handleToggleSound}
                  title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-[#00A3E0] dark:hover:text-cyan-300 transition-colors"
                >
                  {soundEnabled ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5 text-rose-500" />}
                </button>

                {/* Reset Chat */}
                <button
                  onClick={handleResetChat}
                  title="Restart Conversation"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>

                {/* Close Drawer */}
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Conversation Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
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
                        ? 'glow-btn shadow-md' 
                        : 'bg-slate-100 dark:bg-[#050B17] border border-slate-200 dark:border-sky-400/40 text-[#00A3E0]'
                    }`}>
                      {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                    </div>

                    {/* Message Card */}
                    <div className={`max-w-[82%] rounded-2xl p-3.5 shadow-md leading-relaxed whitespace-pre-line ${
                      isUser
                        ? 'glow-btn text-white rounded-tr-none'
                        : 'bg-slate-100 dark:bg-[#050B17]/90 border border-slate-200 dark:border-sky-500/20 text-slate-800 dark:text-slate-200 rounded-tl-none backdrop-blur-md'
                    }`}>
                      {msg.text}

                      <span className={`block text-[9px] mt-1.5 ${isUser ? 'text-sky-100 text-right' : 'text-slate-400 text-left'}`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Streaming Real-Time Text Effect */}
              {streamingText !== null && (
                <div className="flex items-start gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-slate-100 dark:bg-[#050B17] border border-slate-200 dark:border-sky-400/40 text-[#00A3E0] flex-shrink-0">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="max-w-[82%] rounded-2xl rounded-tl-none p-3.5 bg-slate-100 dark:bg-[#050B17]/90 border border-slate-200 dark:border-sky-500/20 text-slate-800 dark:text-slate-200 shadow-md whitespace-pre-line">
                    {streamingText}
                    <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#00A3E0] animate-pulse" />
                  </div>
                </div>
              )}

              {/* Thinking Status Indicator */}
              {isThinking && (
                <div className="flex items-center gap-2 text-xs text-[#00A3E0] pl-9 py-1">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-[#00A3E0]" />
                  <span className="text-[11px] font-medium tracking-wide">3D Avatar is synthesizing response...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Interactive Suggestion Chips */}
            <div className="px-3 py-2 border-t border-slate-200 dark:border-sky-500/15 bg-slate-50 dark:bg-[#050B17]/70 overflow-x-auto flex gap-1.5 no-scrollbar">
              {SUGGESTION_CHIPS.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip)}
                  className="rounded-xl bg-slate-200/70 dark:bg-sky-500/10 hover:bg-[#00A3E0] hover:text-white dark:hover:bg-sky-500/20 border border-slate-200 dark:border-sky-400/25 px-3 py-1.5 text-[11px] font-semibold text-slate-700 dark:text-sky-200 whitespace-nowrap transition-all duration-200 flex-shrink-0 hover:scale-105"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input & Consultation Action Bar */}
            <div className="p-3.5 border-t border-slate-200 dark:border-sky-500/20 bg-slate-50 dark:bg-[#0B1528]/90">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about SAP, S/4HANA, AMS, Careers, Mumbai HQ..."
                  className="flex-1 rounded-xl border border-slate-200 dark:border-sky-500/25 bg-white dark:bg-[#050B17] px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#00A3E0] shadow-inner"
                />

                <button
                  type="submit"
                  disabled={!inputText.trim() || isThinking}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glow-btn text-white shadow-md disabled:opacity-40 hover:scale-105 transition-all"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              {/* Direct Human Escalation CTA */}
              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-1 pt-1 border-t border-slate-200 dark:border-white/5">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00A3E0]" />
                  KNOOVIQ Enterprise AI
                </span>
                
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContact('Direct Consultation via 3D AI Chat');
                  }}
                  className="inline-flex items-center gap-1 text-[#00A3E0] hover:underline font-bold"
                >
                  <PhoneCall className="h-3 w-3" />
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

