import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAccessibility } from '../context/AccessibilityContext';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { Settings, Eye, Volume2, Globe, HeartHandshake, Play, CheckCircle } from 'lucide-react';
import { Language, TextSize } from '../types';

export const Header: React.FC = () => {
  const location = useLocation();
  const { textSize, setTextSize, contrastMode, setContrastMode, language, setLanguage } = useAccessibility();
  const { t } = useLanguage();
  const { setIsOnboardingOpen, demoStep, setDemoStep } = useApp();

  const isHighContrast = contrastMode === 'high-contrast';

  const languages: Language[] = ['English', 'Tamil', 'Hindi', 'Malayalam', 'Telugu'];

  return (
    <header className="bg-emerald-950 text-white shadow-md border-b-4 border-amber-500 sticky top-0 z-40">
      {/* Upper Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between border-b border-emerald-800 text-sm gap-2">
        <div className="flex items-center gap-3">
          <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-xs tracking-wide uppercase">
            Adaptive Accessibility Active
          </span>
          <button
            onClick={() => setIsOnboardingOpen(true)}
            className="hover:underline flex items-center gap-1 text-amber-300 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1"
            aria-label="Re-open Onboarding Setup"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Customize My Setup</span>
          </button>
        </div>

        {/* Hackathon 90-Sec Demo Controller */}
        <div className="flex items-center gap-2">
          {demoStep === null ? (
            <button
              onClick={() => setDemoStep(1)}
              className="bg-amber-400 text-slate-950 hover:bg-amber-300 font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1.5 shadow transition-all focus:ring-2 focus:ring-white"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch 90-Sec Pitch Demo</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-amber-500 text-slate-950 px-3 py-0.5 rounded-full text-xs font-bold">
              <span>Demo Step {demoStep}/7</span>
              <button
                onClick={() => setDemoStep(null)}
                className="bg-slate-900 text-white px-2 py-0.5 rounded-full text-[10px]"
              >
                Exit Demo
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Logo & Tagline */}
        <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-amber-400 rounded-lg p-1">
          <div className="w-12 h-12 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg border-2 border-amber-300">
            E
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>{t('appName')}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-200 font-medium hidden md:block">
              {t('tagline')}
            </p>
          </div>
        </Link>

        {/* Quick Accessibility Adjusters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Text Size Control */}
          <div className="flex items-center bg-emerald-900 border border-emerald-700 rounded-lg p-1" role="group" aria-label="Text Size Selector">
            <span className="text-xs text-emerald-200 px-2 font-bold hidden lg:inline">Text:</span>
            {(['normal', 'large', 'extra-large'] as TextSize[]).map((size) => (
              <button
                key={size}
                onClick={() => setTextSize(size)}
                className={`px-2.5 py-1 rounded text-xs sm:text-sm font-bold transition-all ${
                  (textSize === size || (size === 'large' && textSize === 'Large' as any))
                    ? 'bg-amber-400 text-slate-950 shadow'
                    : 'text-emerald-100 hover:bg-emerald-800'
                }`}
                aria-label={`Set text size to ${size}`}
              >
                {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
              </button>
            ))}
          </div>

          {/* High Contrast Toggle */}
          <button
            onClick={() => setContrastMode(isHighContrast ? 'standard' : 'high-contrast')}
            className={`px-3 py-2 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all border ${
              isHighContrast
                ? 'bg-yellow-400 text-slate-950 border-white shadow-lg'
                : 'bg-emerald-900 text-emerald-100 border-emerald-700 hover:bg-emerald-800'
            }`}
            aria-label="Toggle High Contrast Mode"
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">{isHighContrast ? 'High Contrast ON' : 'Contrast'}</span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center bg-emerald-900 border border-emerald-700 rounded-lg px-2 py-1">
            <Globe className="w-4 h-4 text-emerald-300 mr-1.5" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-white text-xs sm:text-sm font-semibold focus:outline-none cursor-pointer"
              aria-label="Select Preferred Language"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-slate-900 text-white">
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Full Accessibility Settings Route */}
          <Link
            to="/accessibility"
            className={`p-2 rounded-lg border transition-all flex items-center justify-center ${
              location.pathname === '/accessibility'
                ? 'bg-amber-400 text-slate-950 border-amber-300'
                : 'bg-emerald-900 text-emerald-100 border-emerald-700 hover:bg-emerald-800'
            }`}
            aria-label="Open Full Accessibility Settings Page"
            title="Accessibility Settings"
          >
            <Settings className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};
