import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Key, 
  Mail, 
  AlertCircle, 
  ArrowRight
} from 'lucide-react';
import {
  adminLogin,
  getAdminSession,
  getAdminLockoutStatus,
  formatLockoutRemaining
} from '../lib/supabase';

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [lockoutRemainingMs, setLockoutRemainingMs] = useState<number>(() => {
    const status = getAdminLockoutStatus();
    return status.isLocked ? status.remainingMs : 0;
  });

  const navigate = useNavigate();
  const isLocked = lockoutRemainingMs > 0;

  // If already logged in, redirect to admin
  useEffect(() => {
    const session = getAdminSession();
    if (session) {
      navigate('/admin');
    }
  }, [navigate]);

  // Live 45-hour lockout countdown timer
  useEffect(() => {
    if (!isLocked) return;

    const tick = () => {
      const status = getAdminLockoutStatus();
      setLockoutRemainingMs(status.isLocked ? status.remainingMs : 0);
      if (!status.isLocked) {
        setErrorMsg(null);
      }
    };

    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [isLocked]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentStatus = getAdminLockoutStatus();
    if (currentStatus.isLocked) {
      setLockoutRemainingMs(currentStatus.remainingMs);
      return;
    }

    if (!email.trim() || !passcode) {
      setErrorMsg('Please enter your authorized corporate email and security passcode.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    const res = await adminLogin(email, passcode);
    setLoading(false);

    if (res.success && res.profile) {
      setLockoutRemainingMs(0);
      navigate('/admin');
    } else {
      const updatedStatus = getAdminLockoutStatus();
      if (updatedStatus.isLocked) {
        setLockoutRemainingMs(updatedStatus.remainingMs);
        setErrorMsg(null);
      } else {
        setErrorMsg(res.error || 'Invalid credentials or unauthorized administrator account.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#040813] text-white flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* High-tech background glow & mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#00d2ff0d_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-80" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-md w-full rounded-3xl border border-cyan-400/30 bg-[#0B1528]/95 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl text-center"
      >
        {/* Brand Shield Header */}
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/20 border border-sky-400/30 text-cyan-300 shadow-lg shadow-sky-500/20">
            <ShieldCheck className="h-8 w-8" />
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-md bg-sky-500/15 px-2.5 py-0.5 text-[10px] font-mono font-bold text-cyan-300 border border-sky-400/30 mb-3">
          KNOOVIQ INTERNAL PLATFORM
        </div>

        <h1 className="font-display text-2xl font-bold text-white mb-8">
          Administrator Security Console
        </h1>

        {(isLocked || errorMsg) && (
          <div className="mb-6 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-300 flex items-start gap-2 text-left">
            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <span>
              {isLocked
                ? `Maximum 3 failed attempts exceeded. Next attempt allowed after 45 hours (${formatLockoutRemaining(lockoutRemainingMs)} remaining).`
                : errorMsg}
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Authorized Administrator Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || isLocked}
                required
                className="w-full rounded-xl border border-sky-500/25 bg-[#050B17] pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Security Passcode / Secret Key
            </label>
            <div className="relative">
              <Key className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                disabled={loading || isLocked}
                required
                className="w-full rounded-xl border border-sky-500/25 bg-[#050B17] pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || isLocked}
            className="glow-btn w-full rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>
              {isLocked
                ? `Locked (${formatLockoutRemaining(lockoutRemainingMs)})`
                : loading
                ? 'Verifying Security Clearances...'
                : 'Authenticate Admin Session'}
            </span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

      </motion.div>
    </div>
  );
};
