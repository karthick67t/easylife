import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAccessibility } from '../context/AccessibilityContext';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { Settings, Eye, Globe, HeartHandshake, Play, Code, AlertTriangle, Users, BookOpen } from 'lucide-react';
import { Language, TextSize } from '../types';

export const Header: React.FC = () => {
  const location = useLocation();
  const { textSize, setTextSize, contrastMode, setContrastMode, language, setLanguage } = useAccessibility();
  const { t } = useLanguage();
  const { setIsOnboardingOpen, demoStep, setDemoStep } = useApp();

  const isHighContrast = contrastMode === 'high-contrast';
  const languages: Language[] = ['English', 'Tamil', 'Hindi', 'Malayalam', 'Telugu'];

  return (
    <header className="bg-[#070B16] text-[#F4F7FB] border-b-4 border-[#35D6C5] sticky top-0 z-40 shadow-2xl">
      {/* Upper Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between border-b border-[#1C2B49] text-xs gap-2">
        <div className="flex items-center gap-3">
          <span className="bg-[#35D6C5] text-[#070B16] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
            Adaptive Accessibility Active
          </span>
          <button
            onClick={() => setIsOnboardingOpen(true)}
            className="hover:underline flex items-center gap-1 text-[#FFC857] font-extrabold focus:outline-none focus:ring-2 focus:ring-[#FFC857] rounded px-1"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Customize Setup</span>
          </button>
        </div>

        {/* Hackathon Judge Navigation Bar */}
        <div className="flex items-center gap-3 font-bold text-[#B8C4D8]">
          <Link to="/prompt-lab" className="hover:text-[#35D6C5] flex items-center gap-1">
            <Code className="w-3.5 h-3.5 text-[#35D6C5]" />
            <span>Prompt Lab</span>
          </Link>
          <Link to="/problem" className="hover:text-[#FF5C67] flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5 text-[#FF5C67]" />
            <span>Problem</span>
          </Link>
          <Link to="/research" className="hover:text-[#4DA3FF] flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-[#4DA3FF]" />
            <span>Research</span>
          </Link>
          <Link to="/demo" className="bg-[#35D6C5] hover:bg-[#2cb5a6] text-[#070B16] font-black px-2.5 py-0.5 rounded-full text-xs flex items-center gap-1 shadow">
            <Play className="w-3 h-3 fill-current" />
            <span>Pitch Demo</span>
          </Link>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Logo & Tagline */}
        <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-[#35D6C5] rounded-xl p-1">
          <div className="w-12 h-12 bg-[#35D6C5] text-[#070B16] rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">
            E
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#F4F7FB] flex items-center gap-2">
              <span>{t('appName')}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8492A8] font-medium hidden md:block">
              {t('tagline')}
            </p>
          </div>
        </Link>

        {/* Quick Accessibility Adjusters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Text Size Control */}
          <div className="flex items-center bg-[#101A2E] border border-[#2B3E68] rounded-xl p-1" role="group" aria-label="Text Size Selector">
            <span className="text-xs text-[#8492A8] px-2 font-bold hidden lg:inline">Text:</span>
            {(['normal', 'large', 'extra-large'] as TextSize[]).map((size) => (
              <button
                key={size}
                onClick={() => setTextSize(size)}
                className={`px-2.5 py-1 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  (textSize === size || (size === 'large' && textSize === 'Large' as any))
                    ? 'bg-[#35D6C5] text-[#070B16] shadow-md'
                    : 'text-[#B8C4D8] hover:bg-[#142039]'
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
            className={`px-3 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all border ${
              isHighContrast
                ? 'bg-[#FFC857] text-[#070B16] border-white shadow-lg'
                : 'bg-[#101A2E] text-[#B8C4D8] border-[#2B3E68] hover:bg-[#142039]'
            }`}
            aria-label="Toggle High Contrast Mode"
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">{isHighContrast ? 'High Contrast ON' : 'Contrast'}</span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center bg-[#101A2E] border border-[#2B3E68] rounded-xl px-2 py-1">
            <Globe className="w-4 h-4 text-[#35D6C5] mr-1.5" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-[#F4F7FB] text-xs sm:text-sm font-bold focus:outline-none cursor-pointer"
              aria-label="Select Preferred Language"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-[#070B16] text-[#F4F7FB]">
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Full Accessibility Settings Route */}
          <Link
            to="/accessibility"
            className={`p-2 rounded-xl border transition-all flex items-center justify-center ${
              location.pathname === '/accessibility'
                ? 'bg-[#35D6C5] text-[#070B16] border-[#35D6C5]'
                : 'bg-[#101A2E] text-[#B8C4D8] border-[#2B3E68] hover:bg-[#142039]'
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
