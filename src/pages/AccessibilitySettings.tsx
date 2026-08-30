import React, { useState } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { Settings, Eye, Volume2, Globe, RefreshCw, CheckCircle2, Sliders } from 'lucide-react';
import { TextSize, ContrastMode, Language } from '../types';

export const AccessibilitySettingsPage: React.FC = () => {
  const {
    textSize,
    setTextSize,
    contrastMode,
    setContrastMode,
    readAloud,
    setReadAloud,
    reducedMotion,
    setReducedMotion,
    simplifiedInterface,
    setSimplifiedInterface,
    language,
    setLanguage,
    resetAccessibilitySettings,
  } = useAccessibility();

  const [confirmBanner, setConfirmBanner] = useState<string | null>(null);

  const notifyChange = (msg: string) => {
    setConfirmBanner(msg);
    setTimeout(() => setConfirmBanner(null), 3000);
  };

  const languages: Language[] = ['English', 'Tamil', 'Hindi', 'Malayalam', 'Telugu'];

  return (
    <div className="space-y-8 pb-12 text-[#101814]">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black shadow-sm">
            <Settings className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#101814]">Make EasyLife comfortable for you</h1>
            <p className="text-base sm:text-lg text-[#5F6B64] font-bold">
              Adjust text size, contrast, voice, and language settings.
            </p>
          </div>
        </div>
      </div>

      {/* Confirmation Banner */}
      {confirmBanner && (
        <div className="bg-[#16834B] text-white p-4 rounded-2xl border-2 border-[#16834B] font-extrabold text-lg flex items-center gap-2 shadow-sm animate-in fade-in duration-200">
          <CheckCircle2 className="w-6 h-6 fill-current" />
          <span>{confirmBanner}</span>
        </div>
      )}

      {/* Controls Container */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-8">
        
        {/* 1. Text Size */}
        <div className="space-y-3 border-b border-[#CFE8DA] pb-6">
          <label className="text-2xl font-black text-[#101814] block">1. Text Size</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { id: 'normal', label: 'Normal' },
              { id: 'large', label: 'Large' },
              { id: 'extra-large', label: 'Extra Large' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setTextSize(opt.id as TextSize);
                  notifyChange(`Text size updated to ${opt.label}`);
                }}
                className={`p-5 rounded-2xl border-2 font-black text-xl transition-all touch-target ${
                  (textSize === opt.id || (opt.id === 'large' && textSize === 'Large' as any))
                    ? 'bg-[#16834B] text-white border-[#16834B] shadow-sm'
                    : 'bg-[#F8FAF8] text-[#101814] border-[#CFE8DA] hover:border-[#16834B]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Contrast */}
        <div className="space-y-3 border-b border-[#CFE8DA] pb-6">
          <label className="text-2xl font-black text-[#101814] block flex items-center gap-2">
            <Eye className="w-6 h-6 text-[#16834B]" />
            <span>2. Contrast Mode</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              { id: 'standard', label: 'Standard Contrast' },
              { id: 'high-contrast', label: 'High Contrast' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setContrastMode(opt.id as ContrastMode);
                  notifyChange(`Contrast mode set to ${opt.label}`);
                }}
                className={`p-5 rounded-2xl border-2 font-black text-xl transition-all touch-target ${
                  contrastMode === opt.id
                    ? 'bg-[#16834B] text-white border-[#16834B] shadow-sm'
                    : 'bg-[#F8FAF8] text-[#101814] border-[#CFE8DA] hover:border-[#16834B]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Read Aloud Speech */}
        <div className="space-y-3 border-b border-[#CFE8DA] pb-6">
          <label className="text-2xl font-black text-[#101814] block flex items-center gap-2">
            <Volume2 className="w-6 h-6 text-[#16834B]" />
            <span>3. Read Aloud (Voice Speech)</span>
          </label>
          <div className="flex gap-4 pt-2">
            {[true, false].map((enabled) => (
              <button
                key={String(enabled)}
                onClick={() => {
                  setReadAloud(enabled);
                  notifyChange(`Read Aloud speech ${enabled ? 'ON' : 'OFF'}`);
                }}
                className={`px-8 py-4 rounded-2xl border-2 font-black text-xl transition-all touch-target ${
                  readAloud === enabled
                    ? 'bg-[#16834B] text-white border-[#16834B] shadow-sm'
                    : 'bg-[#F8FAF8] text-[#101814] border-[#CFE8DA] hover:border-[#16834B]'
                }`}
              >
                {enabled ? 'Read Aloud ON' : 'Read Aloud OFF'}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Reduced Motion */}
        <div className="space-y-3 border-b border-[#CFE8DA] pb-6">
          <label className="text-2xl font-black text-[#101814] block">4. Reduced Motion</label>
          <div className="flex gap-4 pt-2">
            {[true, false].map((enabled) => (
              <button
                key={String(enabled)}
                onClick={() => {
                  setReducedMotion(enabled);
                  notifyChange(`Reduced Motion ${enabled ? 'ON' : 'OFF'}`);
                }}
                className={`px-8 py-4 rounded-2xl border-2 font-black text-xl transition-all touch-target ${
                  reducedMotion === enabled
                    ? 'bg-[#16834B] text-white border-[#16834B] shadow-sm'
                    : 'bg-[#F8FAF8] text-[#101814] border-[#CFE8DA] hover:border-[#16834B]'
                }`}
              >
                {enabled ? 'Reduced Motion ON' : 'Reduced Motion OFF'}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Language */}
        <div className="space-y-3 border-b border-[#CFE8DA] pb-6">
          <label className="text-2xl font-black text-[#101814] block flex items-center gap-2">
            <Globe className="w-6 h-6 text-[#16834B]" />
            <span>5. Application Language</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  notifyChange(`Language switched to ${lang}`);
                }}
                className={`p-4 rounded-2xl border-2 font-black text-xl transition-all touch-target ${
                  language === lang
                    ? 'bg-[#16834B] text-white border-[#16834B] shadow-sm'
                    : 'bg-[#F8FAF8] text-[#101814] border-[#CFE8DA] hover:border-[#16834B]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Reset Settings */}
        <div className="pt-2">
          <button
            onClick={() => {
              resetAccessibilitySettings();
              notifyChange("All accessibility settings reset to initial defaults.");
            }}
            className="bg-[#F8FAF8] hover:bg-[#E8F5EE] text-[#101814] border-2 border-[#CFE8DA] font-extrabold px-8 py-4 rounded-2xl text-lg flex items-center gap-2 touch-target"
          >
            <RefreshCw className="w-5 h-5 text-[#5F6B64]" />
            <span>Reset Accessibility Settings</span>
          </button>
        </div>
      </section>
    </div>
  );
};
