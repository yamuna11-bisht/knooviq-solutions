import React, { useEffect, useState, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'zh-CN', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
];

interface LanguageTranslatorProps {
  isMobile?: boolean;
  isTransparentHeader?: boolean;
}

export const LanguageTranslator: React.FC<LanguageTranslatorProps> = ({ isMobile = false, isTransparentHeader = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Read active language from cookie or localStorage
  useEffect(() => {
    const getActiveLang = () => {
      const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
      if (match && match[1]) {
        return match[1];
      }
      return localStorage.getItem('knooviq_selected_lang') || 'en';
    };

    setSelectedLang(getActiveLang());
  }, []);

  // Initialize Google Translate Script
  useEffect(() => {
    const scriptId = 'google-translate-script';

    // If script not present, add it
    if (!document.getElementById(scriptId)) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              autoDisplay: false,
              layout: window.google.translate.TranslateElement.InlineLayout?.SIMPLE,
            },
            'google_translate_element'
          );
        }
      };

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Close on outside click
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleSelectLanguage = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);
    localStorage.setItem('knooviq_selected_lang', langCode);

    if (langCode === 'en') {
      // Clear cookie for original language
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
    } else {
      const cookieValue = `/en/${langCode}`;
      document.cookie = `googtrans=${cookieValue}; path=/;`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname};`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${window.location.hostname};`;
    }

    // Attempt to trigger the select without full reload if element is ready
    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  };

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === selectedLang) || SUPPORTED_LANGUAGES[0];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hidden container for Google Translate element */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={
          isMobile
            ? 'flex h-10 px-2.5 items-center gap-1.5 rounded-xl border border-slate-300 dark:border-sky-500/20 bg-slate-100 dark:bg-[#0B1528] text-slate-800 dark:text-slate-200 text-xs font-semibold'
            : isTransparentHeader
            ? 'flex items-center gap-1 px-2.5 py-2 rounded-xl transition-all text-white hover:text-cyan-300 hover:bg-white/10 select-none font-semibold whitespace-nowrap shrink-0'
            : 'flex items-center gap-1 px-2.5 py-2 rounded-xl transition-all text-slate-800 dark:text-slate-200 hover:text-[#00A3E0] dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5 select-none font-semibold whitespace-nowrap shrink-0'
        }
        title="Change Language"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className={`h-3.5 w-3.5 ${isTransparentHeader ? 'text-cyan-400' : 'text-[#00A3E0]'} shrink-0`} />
        <span className="uppercase text-[11px] font-bold tracking-wider">{currentLangObj.code}</span>
        <ChevronDown className={`h-3 w-3 ${isTransparentHeader ? 'text-white/70' : 'text-slate-400'} transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Language Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl border-2 border-slate-200 dark:border-[#00A3E0]/30 bg-white dark:bg-[#070E1C] p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150 max-h-72 overflow-y-auto">
          <div className="px-2 py-1 mb-1 border-b border-slate-100 dark:border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
            Select Language
          </div>
          <div className="space-y-0.5">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = selectedLang === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`flex items-center justify-between w-full px-2.5 py-1.5 rounded-lg text-xs transition-colors text-left ${
                    isSelected
                      ? 'bg-[#00A3E0]/10 dark:bg-[#00A3E0]/20 text-[#00A3E0] dark:text-cyan-300 font-bold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">{lang.flag}</span>
                    <span>{lang.name}</span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-400">({lang.nativeName})</span>
                  </span>
                  {isSelected && <Check className="h-3.5 w-3.5 text-[#00A3E0] dark:text-cyan-300 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

