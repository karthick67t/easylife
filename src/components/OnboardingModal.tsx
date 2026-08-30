import React, { useState } from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { HeartHandshake, CheckCircle2, Sparkles, Volume2, BookOpen, ShieldCheck } from 'lucide-react';
import { Language, TextSize } from '../types';

export const OnboardingModal: React.FC = () => {
  const { isOnboardingOpen, setIsOnboardingOpen } = useApp();
  const { textSize, setTextSize, language, setLanguage, setReadAloud, setSimplifiedInterface } = useAccessibility();
  const { t } = useLanguage();

  const [step, setStep] = useState(1);
  const [infoPref, setInfoPref] = useState<'Reading' | 'Listening' | 'Both'>('Both');
  const [helpPref, setHelpPref] = useState<'Guide me' | 'I\'ll do it myself'>('Guide me');

  if (!isOnboardingOpen) return null;

  const handleFinish = () => {
    if (infoPref === 'Listening' || infoPref === 'Both') {
      setReadAloud(true);
    }
    if (helpPref === 'Guide me') {
      setSimplifiedInterface(true);
    }
    setIsOnboardingOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-amber-50 text-slate-900 border-4 border-amber-500 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Header Header */}
        <div className="flex items-center gap-4 border-b-2 border-amber-200 pb-4 mb-6">
          <div className="w-14 h-14 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center shadow-md">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {t('onboardingTitle')}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-medium">
              {t('onboardingSub')}
            </p>
          </div>
        </div>

        {/* Question 1: How would you like information? */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-sm font-extrabold">1</span>
              {t('q1')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: 'Reading', label: 'Reading', icon: BookOpen, desc: 'Clear readable text' },
                { id: 'Listening', label: 'Listening', icon: Volume2, desc: 'Voice read aloud' },
                { id: 'Both', label: 'Both', icon: Sparkles, desc: 'Text + Voice together' },
              ].map((opt) => {
                const Icon = opt.icon;
                const isSelected = infoPref === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setInfoPref(opt.id as any)}
                    className={`p-5 rounded-2xl border-3 text-left transition-all flex flex-col justify-between touch-target ${
                      isSelected
                        ? 'bg-amber-400 border-amber-600 text-slate-950 ring-4 ring-amber-300 shadow-lg'
                        : 'bg-white border-slate-300 text-slate-800 hover:border-amber-400'
                    }`}
                  >
                    <Icon className="w-8 h-8 mb-3 text-amber-900" />
                    <div>
                      <div className="font-extrabold text-lg">{opt.label}</div>
                      <div className="text-xs text-slate-600 font-medium">{opt.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-md border-2 border-amber-400 touch-target"
              >
                Next Step →
              </button>
            </div>
          </div>
        )}

        {/* Question 2: How much help would you like? */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-sm font-extrabold">2</span>
              {t('q2')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: 'Guide me', label: 'Guide me', desc: 'Show me step-by-step instructions' },
                { id: 'I\'ll do it myself', label: 'I\'ll do it myself', desc: 'Standard direct interface' },
              ].map((opt) => {
                const isSelected = helpPref === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setHelpPref(opt.id as any)}
                    className={`p-6 rounded-2xl border-3 text-left transition-all touch-target ${
                      isSelected
                        ? 'bg-amber-400 border-amber-600 text-slate-950 ring-4 ring-amber-300 shadow-lg'
                        : 'bg-white border-slate-300 text-slate-800 hover:border-amber-400'
                    }`}
                  >
                    <div className="font-extrabold text-xl mb-1">{opt.label}</div>
                    <div className="text-sm text-slate-700">{opt.desc}</div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-3.5 rounded-2xl touch-target"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-md touch-target"
              >
                Next Step →
              </button>
            </div>
          </div>
        )}

        {/* Question 3: What text size is comfortable? */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-sm font-extrabold">3</span>
              {t('q3')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: 'normal', label: 'Normal', sample: 'Sample text size' },
                { id: 'large', label: 'Large', sample: 'Sample text size' },
                { id: 'extra-large', label: 'Extra Large', sample: 'Sample text size' },
              ].map((opt) => {
                const isSelected = textSize === opt.id || (opt.id === 'large' && textSize === 'Large' as any);
                return (
                  <button
                    key={opt.id}
                    onClick={() => setTextSize(opt.id as TextSize)}
                    className={`p-5 rounded-2xl border-3 text-center transition-all touch-target ${
                      isSelected
                        ? 'bg-amber-400 border-amber-600 text-slate-950 ring-4 ring-amber-300 shadow-lg'
                        : 'bg-white border-slate-300 text-slate-800 hover:border-amber-400'
                    }`}
                  >
                    <div className="font-extrabold text-lg mb-2">{opt.label}</div>
                    <div className={`font-bold ${opt.id === 'extra-large' ? 'text-xl' : opt.id === 'large' ? 'text-lg' : 'text-base'}`}>
                      {opt.sample}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-3.5 rounded-2xl touch-target"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-md touch-target"
              >
                Next Step →
              </button>
            </div>
          </div>
        )}

        {/* Question 4: Language Selection */}
        {step === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-sm font-extrabold">4</span>
              {t('q4')}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { lang: 'English', native: 'English' },
                { lang: 'Tamil', native: 'தமிழ்' },
                { lang: 'Hindi', native: 'हिंदी' },
                { lang: 'Malayalam', native: 'മലയാളം' },
                { lang: 'Telugu', native: 'తెలుగు' },
              ].map((opt) => {
                const isSelected = language === opt.lang;
                return (
                  <button
                    key={opt.lang}
                    onClick={() => setLanguage(opt.lang as Language)}
                    className={`p-5 rounded-2xl border-3 text-center transition-all touch-target ${
                      isSelected
                        ? 'bg-amber-400 border-amber-600 text-slate-950 ring-4 ring-amber-300 shadow-lg'
                        : 'bg-white border-slate-300 text-slate-800 hover:border-amber-400'
                    }`}
                  >
                    <div className="font-extrabold text-xl">{opt.native}</div>
                    <div className="text-xs text-slate-600 font-semibold">{opt.lang}</div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setStep(3)}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-3.5 rounded-2xl touch-target"
              >
                ← Back
              </button>
              <button
                onClick={handleFinish}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-4 rounded-2xl text-xl shadow-xl border-2 border-emerald-400 flex items-center gap-2 touch-target"
              >
                <CheckCircle2 className="w-6 h-6" />
                <span>{t('savePreferences')}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
