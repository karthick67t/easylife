import React, { useState } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { Settings, Eye, Volume2, Sparkles, Globe, RefreshCw, CheckCircle2 } from 'lucide-react';
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
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border-4 border-amber-500 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <Settings className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Accessibility Settings</h1>
            <p className="text-base sm:text-lg text-amber-200 font-medium">
              Customize EasyLife to match your vision, hearing, and interaction preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Immediate Confirmation Banner */}
      {confirmBanner && (
        <div className="bg-emerald-500 text-slate-950 p-4 rounded-2xl border-2 border-white font-extrabold text-lg flex items-center gap-2 shadow-lg animate-in fade-in duration-200">
          <CheckCircle2 className="w-6 h-6 fill-current" />
          <span>{confirmBanner}</span>
        </div>
      )}

      {/* Control Panels */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-8">
        
        {/* 1. Text Size Control */}
        <div className="space-y-3 border-b-2 border-slate-200 pb-6">
          <label className="text-2xl font-extrabold text-slate-900 block">1. Text Size</label>
          <p className="text-base text-slate-600 font-semibold">Choose a text size comfortable for your eyes:</p>
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
                className={`p-5 rounded-2xl border-3 font-black text-xl transition-all touch-target ${
                  (textSize === opt.id || (opt.id === 'large' && textSize === 'Large' as any))
                    ? 'bg-amber-400 text-slate-950 border-amber-600 ring-4 ring-amber-300 shadow-lg'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-amber-400'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Contrast Control */}
        <div className="space-y-3 border-b-2 border-slate-200 pb-6">
          <label className="text-2xl font-extrabold text-slate-900 block flex items-center gap-2">
            <Eye className="w-6 h-6 text-amber-600" />
            <span>2. Contrast Mode</span>
          </label>
          <p className="text-base text-slate-600 font-semibold">High contrast uses bold dark background and yellow text for maximum visibility:</p>
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
                className={`p-5 rounded-2xl border-3 font-black text-xl transition-all touch-target ${
                  contrastMode === opt.id
                    ? 'bg-amber-400 text-slate-950 border-amber-600 ring-4 ring-amber-300 shadow-lg'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-amber-400'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Read Aloud Speech */}
        <div className="space-y-3 border-b-2 border-slate-200 pb-6">
          <label className="text-2xl font-extrabold text-slate-900 block flex items-center gap-2">
            <Volume2 className="w-6 h-6 text-emerald-600" />
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
                className={`px-8 py-4 rounded-2xl border-3 font-black text-xl transition-all touch-target ${
                  readAloud === enabled
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-lg'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-emerald-500'
                }`}
              >
                {enabled ? 'ON' : 'OFF'}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Reduced Motion */}
        <div className="space-y-3 border-b-2 border-slate-200 pb-6">
          <label className="text-2xl font-extrabold text-slate-900 block">4. Reduced Motion</label>
          <p className="text-base text-slate-600 font-semibold">Disables all non-essential UI animations to prevent dizziness:</p>
          <div className="flex gap-4 pt-2">
            {[true, false].map((enabled) => (
              <button
                key={String(enabled)}
                onClick={() => {
                  setReducedMotion(enabled);
                  notifyChange(`Reduced Motion ${enabled ? 'ON' : 'OFF'}`);
                }}
                className={`px-8 py-4 rounded-2xl border-3 font-black text-xl transition-all touch-target ${
                  reducedMotion === enabled
                    ? 'bg-amber-400 text-slate-950 border-amber-600 shadow-lg'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-amber-400'
                }`}
              >
                {enabled ? 'ON' : 'OFF'}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Language Selection */}
        <div className="space-y-3 border-b-2 border-slate-200 pb-6">
          <label className="text-2xl font-extrabold text-slate-900 block flex items-center gap-2">
            <Globe className="w-6 h-6 text-purple-600" />
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
                className={`p-4 rounded-2xl border-3 font-black text-xl transition-all touch-target ${
                  language === lang
                    ? 'bg-purple-600 text-white border-purple-800 ring-4 ring-purple-300 shadow-lg'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-purple-400'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Reset Settings Button */}
        <div className="pt-4">
          <button
            onClick={() => {
              resetAccessibilitySettings();
              notifyChange("All accessibility settings reset to initial defaults.");
            }}
            className="bg-slate-200 hover:bg-slate-300 text-slate-900 font-extrabold px-8 py-4 rounded-2xl text-lg flex items-center gap-2 border-2 border-slate-400 touch-target"
          >
            <RefreshCw className="w-5 h-5 text-slate-700" />
            <span>Reset Accessibility Settings</span>
          </button>
        </div>
      </section>
    </div>
  );
};
