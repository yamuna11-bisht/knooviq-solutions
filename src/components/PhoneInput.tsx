import React, { useState, useEffect, useId } from 'react';
import { Check, AlertCircle, ChevronDown } from 'lucide-react';
import { COUNTRY_CODES, CountryCodeOption, validatePhone } from '../lib/validation';

export interface PhoneInputProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (fullNumber: string, rawDigits: string, countryCode: string) => void;
  onBlur?: () => void;
  error?: string | null;
  onErrorChange?: (error: string | null) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  defaultCountry?: string;
  autoFocus?: boolean;
  ariaLabel?: string;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  id,
  name = 'phone',
  value = '',
  onChange,
  onBlur,
  error,
  onErrorChange,
  required = true,
  disabled = false,
  className = '',
  placeholder,
  defaultCountry = '+91',
  autoFocus = false,
  ariaLabel = 'Phone Number',
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  // Parse initial country code and digits from value
  const parseValue = (val: string) => {
    const trimmed = (val || '').trim();
    if (trimmed.startsWith('+')) {
      const matched = COUNTRY_CODES.find((c) => trimmed.startsWith(c.code));
      if (matched) {
        const remaining = trimmed.slice(matched.code.length).replace(/\D/g, '');
        return { code: matched.code, digits: remaining };
      }
    }
    return { code: defaultCountry, digits: trimmed.replace(/\D/g, '') };
  };

  const initial = parseValue(value);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(initial.code);
  const [digits, setDigits] = useState<string>(initial.digits);
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [internalError, setInternalError] = useState<string | null>(null);

  // Synchronize when external value changes
  useEffect(() => {
    const parsed = parseValue(value);
    if (parsed.digits !== digits || parsed.code !== selectedCountryCode) {
      setSelectedCountryCode(parsed.code);
      setDigits(parsed.digits);
    }
  }, [value]);

  const currentCountry: CountryCodeOption =
    COUNTRY_CODES.find((c) => c.code === selectedCountryCode) || COUNTRY_CODES[0];

  // Effective error (prop takes precedence, then internal real-time validation)
  const displayError = error !== undefined ? error : isTouched ? internalError : null;

  // Real-time validation computation
  const computeValidation = (phoneDigits: string, countryCode: string, touchedState = isTouched) => {
    if (!phoneDigits) {
      if (required && touchedState) {
        return 'Phone number is required.';
      }
      return null;
    }

    if (countryCode === '+91') {
      const first = phoneDigits.charAt(0);
      if (!['6', '7', '8', '9'].includes(first)) {
        return 'Enter a valid Indian mobile number starting with 6, 7, 8, or 9.';
      }
      if (phoneDigits.length !== 10) {
        return 'Phone number must contain exactly 10 digits.';
      }
      return null;
    } else {
      if (phoneDigits.length < 7 || phoneDigits.length > 15) {
        return 'Phone number must be between 7 and 15 digits.';
      }
      return null;
    }
  };

  // Determine if input is valid
  const isValid = Boolean(
    digits &&
    !displayError &&
    (selectedCountryCode === '+91'
      ? digits.length === 10 && ['6', '7', '8', '9'].includes(digits.charAt(0))
      : digits.length >= 7 && digits.length <= 15)
  );

  const isInvalid = Boolean(displayError);

  // Prevent alphabets and special characters on keydown
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow control and navigation keys
    if (
      e.key === 'Backspace' ||
      e.key === 'Delete' ||
      e.key === 'Tab' ||
      e.key === 'Escape' ||
      e.key === 'Enter' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'ArrowUp' ||
      e.key === 'ArrowDown' ||
      e.key === 'Home' ||
      e.key === 'End' ||
      ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x', 'z', 'A', 'C', 'V', 'X', 'Z'].includes(e.key))
    ) {
      return;
    }

    // Only allow numeric digits 0-9
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    // Disallow more than 10 digits for Indian mobile numbers
    if (selectedCountryCode === '+91' && digits.length >= 10 && !window.getSelection()?.toString()) {
      e.preventDefault();
    }
  };

  // Handle input changes
  const handleDigitsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true);
    let raw = e.target.value;

    // Handle pasted content with country code prefix
    let targetCountry = selectedCountryCode;
    if (raw.startsWith('+91')) {
      targetCountry = '+91';
      setSelectedCountryCode('+91');
      raw = raw.slice(3);
    } else if (raw.startsWith('+')) {
      const matched = COUNTRY_CODES.find((c) => raw.startsWith(c.code));
      if (matched) {
        targetCountry = matched.code;
        setSelectedCountryCode(matched.code);
        raw = raw.slice(matched.code.length);
      }
    }

    // Keep only numeric digits
    let cleanedDigits = raw.replace(/\D/g, '');

    // Strip leading trunk zero for Indian mobile numbers if 11 digits
    if (targetCountry === '+91' && cleanedDigits.length === 11 && cleanedDigits.startsWith('0')) {
      cleanedDigits = cleanedDigits.slice(1);
    }

    // Max 10 digits for India, max 15 for international
    if (targetCountry === '+91') {
      cleanedDigits = cleanedDigits.slice(0, 10);
    } else {
      cleanedDigits = cleanedDigits.slice(0, 15);
    }

    setDigits(cleanedDigits);

    const fullNumber = cleanedDigits ? `${targetCountry} ${cleanedDigits}` : '';
    onChange(fullNumber, cleanedDigits, targetCountry);

    // Immediate real-time validation
    const err = computeValidation(cleanedDigits, targetCountry, true);
    setInternalError(err);
    if (onErrorChange) {
      onErrorChange(err);
    }
  };

  // Handle country dropdown selection
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = e.target.value;
    setSelectedCountryCode(newCode);

    let updatedDigits = digits;
    if (newCode === '+91' && updatedDigits.length > 10) {
      updatedDigits = updatedDigits.slice(0, 10);
      setDigits(updatedDigits);
    }

    const fullNumber = updatedDigits ? `${newCode} ${updatedDigits}` : '';
    onChange(fullNumber, updatedDigits, newCode);

    const err = computeValidation(updatedDigits, newCode, isTouched);
    setInternalError(err);
    if (onErrorChange) {
      onErrorChange(err);
    }
  };

  const handleBlur = () => {
    setIsTouched(true);
    const err = computeValidation(digits, selectedCountryCode, true);
    setInternalError(err);
    if (onErrorChange) {
      onErrorChange(err);
    }
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative flex items-stretch rounded-xl border transition-all duration-200 ${
          isInvalid
            ? 'border-rose-500 ring-1 ring-rose-500/50 bg-rose-500/[0.02]'
            : isValid
            ? 'border-emerald-500 ring-1 ring-emerald-500/50 bg-emerald-500/[0.02]'
            : 'border-slate-300 dark:border-white/20 hover:border-slate-400 dark:hover:border-white/30 focus-within:border-[#0052CC] dark:focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-[#0052CC]/40 dark:focus-within:ring-cyan-400/40'
        } bg-white dark:bg-[#050B17] overflow-hidden`}
      >
        {/* Country Code Selector Box (compact width to save space for phone digits) */}
        <div className="relative flex items-center bg-[#F1F5F9] dark:bg-white/[0.08] border-r border-slate-200 dark:border-white/15 px-2 py-2.5 shrink-0 select-none cursor-pointer">
          <div className="flex items-center gap-1 text-xs text-slate-800 dark:text-slate-100 pointer-events-none whitespace-nowrap">
            <span className="font-extrabold tracking-tight">{currentCountry.iso || 'IN'}</span>
            <span className="font-bold">{currentCountry.code}</span>
            <ChevronDown className="w-3 h-3 text-slate-700 dark:text-slate-300 stroke-[2.5]" />
          </div>

          {/* Transparent overlay native select */}
          <select
            value={selectedCountryCode}
            onChange={handleCountryChange}
            disabled={disabled}
            aria-label="Country Code"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-sm"
          >
            {COUNTRY_CODES.map((c) => (
              <option
                key={c.code}
                value={c.code}
                className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                {c.iso} {c.code} ({c.country})
              </option>
            ))}
          </select>
        </div>

        {/* Numeric Digits Input (increased space & breathing room for full number) */}
        <div className="relative flex-1 min-w-0 flex items-center">
          <input
            id={inputId}
            name={name}
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            disabled={disabled}
            autoFocus={autoFocus}
            required={required}
            maxLength={selectedCountryCode === '+91' ? 10 : 15}
            value={digits}
            onKeyDown={handleKeyDown}
            onChange={handleDigitsChange}
            onBlur={handleBlur}
            placeholder={placeholder || (selectedCountryCode === '+91' ? '10-digit number' : currentCountry.placeholder)}
            aria-label={ariaLabel}
            aria-invalid={isInvalid}
            aria-describedby={isInvalid ? `${inputId}-error` : undefined}
            className="w-full h-full bg-transparent pl-2.5 pr-7 py-2.5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs sm:text-sm font-sans focus:outline-hidden disabled:opacity-50 tracking-normal"
          />

          {/* Validation Feedback Icon */}
          <div className="absolute right-2 flex items-center pointer-events-none">
            {isValid && (
              <div className="h-4 w-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400 stroke-[2.5]" />
              </div>
            )}
            {isInvalid && (
              <div className="h-4 w-4 rounded-full bg-rose-500/10 flex items-center justify-center">
                <AlertCircle className="w-3 h-3 text-rose-500 stroke-[2.5]" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Real-time Error Display */}
      {isInvalid && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium font-sans animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{displayError}</span>
        </p>
      )}
    </div>
  );
};

