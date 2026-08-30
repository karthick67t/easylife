import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAccessibility } from '../context/AccessibilityContext';
import { useLanguage } from '../context/LanguageContext';
import { Settings, Eye, Globe, AlertCircle, HeartHandshake, Code, Play } from 'lucide-react';
import { Language, TextSize } from '../types';

export const Header: React.FC = () => {
  const location = useLocation();
  const { textSize, setTextSize, contrastMode, setContrastMode, language, setLanguage } = useAccessibility();
  const { t } = useLanguage();

  const isHighContrast = contrastMode === 'high-contrast';
  const languages: Language[] = ['English', 'Tamil', 'Hindi', 'Malayalam', 'Telugu'];

  return (
    <header className="bg-white text-[#101814] border-b-2 border-[#CFE8DA] sticky top-0 z-40 shadow-sm">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between border-b border-[#E8F5EE] text-xs gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-[#E8F5EE] text-[#16834B] font-extrabold px-2.5 py-0.5 rounded-full uppercase border border-[#CFE8DA]">
            {t('adaptiveActive')}
          </span>
          <span className="text-[#5F6B64] font-medium hidden sm:inline">{t('designedForSeniors')}</span>
        </div>

        <div className="flex items-center gap-3 font-bold text-[#5F6B64]">
          <Link to="/prompt-lab" className="hover:text-[#16834B] flex items-center gap-1">
            <Code className="w-3.5 h-3.5 text-[#16834B]" />
            <span>{t('promptLab')}</span>
          </Link>
          <Link to="/problem" className="hover:text-[#16834B] flex items-center gap-1">
            <span>{t('problem')}</span>
          </Link>
          <Link to="/research" className="hover:text-[#16834B] flex items-center gap-1">
            <span>{t('research')}</span>
          </Link>
          <Link to="/demo" className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-2.5 py-0.5 rounded-full text-xs flex items-center gap-1 shadow-sm">
            <Play className="w-3 h-3 fill-current" />
            <span>{t('guidedDemo')}</span>
          </Link>
        </div>
      </div>

      {/* Main White Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-[#16834B] rounded-xl p-1">
          <div className="w-12 h-12 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-md border-2 border-[#16834B]">
            E
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#101814]">
              {t('appName')}
            </div>
            <p className="text-xs text-[#5F6B64] font-semibold">
              {t('tagline')}
            </p>
          </div>
        </Link>

        {/* Primary Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F8FAF8] p-1.5 rounded-2xl border border-[#CFE8DA]" aria-label="Main Navigation">
          {[
            { to: '/', label: t('home') },
            { to: '/healthcare', label: t('healthcare') },
            { to: '/government', label: t('services') },
            { to: '/my-day', label: t('myDay') },
            { to: '/help', label: t('help') },
          ].map((nav) => (
            <Link
              key={nav.to}
              to={nav.to}
              className={`px-4 py-2 rounded-xl text-base font-extrabold transition-all ${
                location.pathname === nav.to
                  ? 'bg-[#16834B] text-white shadow-sm'
                  : 'text-[#5F6B64] hover:bg-[#E8F5EE] hover:text-[#101814]'
              }`}
            >
              {nav.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Text Size Control */}
          <div className="flex items-center bg-[#F8FAF8] border border-[#CFE8DA] rounded-xl p-1" role="group" aria-label="Text Size Selector">
            {(['normal', 'large', 'extra-large'] as TextSize[]).map((size) => (
              <button
                key={size}
                onClick={() => setTextSize(size)}
                className={`px-2.5 py-1 rounded-lg text-xs sm:text-sm font-extrabold transition-all ${
                  (textSize === size || (size === 'large' && textSize === 'Large' as any))
                    ? 'bg-[#16834B] text-white shadow-sm'
                    : 'text-[#5F6B64] hover:bg-[#E8F5EE]'
                }`}
                aria-label={`Set text size to ${size}`}
              >
                {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
              </button>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center bg-[#F8FAF8] border border-[#CFE8DA] rounded-xl px-2 py-1.5">
            <Globe className="w-4 h-4 text-[#16834B] mr-1.5" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-[#101814] text-xs sm:text-sm font-extrabold focus:outline-none cursor-pointer"
              aria-label="Select Preferred Language"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-white text-[#101814]">
                  {lang}
                </option>
              ))}
            </select>
          </div>

          {/* Accessibility Settings Route Button */}
          <Link
            to="/accessibility"
            className={`p-2.5 rounded-xl border transition-all flex items-center justify-center ${
              location.pathname === '/accessibility'
                ? 'bg-[#16834B] text-white border-[#16834B]'
                : 'bg-[#F8FAF8] text-[#5F6B64] border-[#CFE8DA] hover:bg-[#E8F5EE]'
            }`}
            aria-label="Open Full Accessibility Settings"
            title={t('accessibility')}
          >
            <Settings className="w-5 h-5" />
          </Link>

          {/* Red Emergency Button */}
          <Link
            to="/emergency"
            className="bg-[#C62828] hover:bg-[#b02323] text-white font-extrabold px-3 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shadow border-2 border-red-400 touch-target"
            aria-label="Go to Emergency Help"
          >
            <AlertCircle className="w-4 h-4 animate-pulse" />
            <span className="hidden sm:inline">{t('emergency')}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
