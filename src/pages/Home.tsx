import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { useVoiceInput } from '../hooks/useVoiceInput';
import { useAccessibility } from '../context/AccessibilityContext';
import {
  Hospital,
  WalletCards,
  Bus,
  Landmark,
  Siren,
  Users,
  Mic,
  Volume2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  FileCheck2,
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const { userName, setIsOnboardingOpen } = useApp();
  const { speak } = useTextToSpeech();
  const { language } = useAccessibility();
  const { isListening, startListening } = useVoiceInput();
  const [voiceQuery, setVoiceQuery] = useState('');

  const handleReadPage = () => {
    speak(`${t('heroTitle')}. ${t('heroSubtitle')}. ${t('greeting')} ${userName}. ${t('mainQuestion')}`, language);
  };

  const handleVoiceTrigger = () => {
    startListening((resText) => {
      setVoiceQuery(resText);
    });
  };

  const serviceCards = [
    {
      to: '/healthcare',
      icon: Hospital,
      title: t('healthcareTitle'),
      desc: t('healthcareDesc'),
      color: 'bg-emerald-100 text-emerald-950 border-emerald-400 hover:border-emerald-600',
      badge: 'Find Doctors & Appointments',
    },
    {
      to: '/money',
      icon: WalletCards,
      title: t('moneyTitle'),
      desc: t('moneyDesc'),
      color: 'bg-blue-100 text-blue-950 border-blue-400 hover:border-blue-600',
      badge: 'Safe Payments & Pension',
    },
    {
      to: '/travel',
      icon: Bus,
      title: t('travelTitle'),
      desc: t('travelDesc'),
      color: 'bg-amber-100 text-amber-950 border-amber-400 hover:border-amber-600',
      badge: 'Bus & Train Directions',
    },
    {
      to: '/government',
      icon: Landmark,
      title: t('govtTitle'),
      desc: t('govtDesc'),
      color: 'bg-purple-100 text-purple-950 border-purple-400 hover:border-purple-600',
      badge: 'Plain Jargon Guidance',
    },
    {
      to: '/emergency',
      icon: Siren,
      title: t('emergencyTitle'),
      desc: t('emergencyDesc'),
      color: 'bg-red-100 text-red-950 border-red-400 hover:border-red-600',
      badge: 'Instant One-Touch Help',
    },
    {
      to: '/family',
      icon: Users,
      title: t('familyTitle'),
      desc: t('familyDesc'),
      color: 'bg-teal-100 text-teal-950 border-teal-400 hover:border-teal-600',
      badge: 'Priya & Arun',
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Card Banner */}
      <section className="bg-amber-500 text-slate-950 rounded-3xl p-6 sm:p-10 shadow-xl border-4 border-amber-300 relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <span className="bg-slate-950 text-amber-300 font-extrabold px-3 py-1 rounded-full text-xs sm:text-sm inline-flex items-center gap-1.5 uppercase tracking-wide">
            <Sparkles className="w-4 h-4 fill-amber-300" />
            Designed for 60+ Adults & Low Digital Literacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-slate-950">
            {t('heroTitle')}
          </h1>
          <p className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
            {t('heroSubtitle')}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => setIsOnboardingOpen(true)}
              className="bg-slate-950 hover:bg-slate-800 text-amber-400 font-extrabold px-8 py-4 rounded-2xl text-xl shadow-lg border-2 border-slate-900 flex items-center gap-3 touch-target"
            >
              <span>{t('startHere')}</span>
              <ArrowRight className="w-6 h-6" />
            </button>

            <button
              onClick={handleReadPage}
              className="bg-amber-200 hover:bg-amber-300 text-slate-950 font-extrabold px-6 py-4 rounded-2xl text-lg flex items-center gap-2 border-2 border-amber-600 touch-target"
            >
              <Volume2 className="w-6 h-6 text-slate-950" />
              <span>{t('readPageAloud')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Greeting & Interactive Voice Action */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-3 border-slate-300 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t('greeting')}, {userName} 👋
            </h2>
            <p className="text-xl font-bold text-emerald-800 mt-1">
              {t('mainQuestion')}
            </p>
          </div>

          {/* Voice Input Container */}
          <button
            onClick={handleVoiceTrigger}
            className={`px-6 py-4 rounded-2xl font-extrabold text-lg flex items-center gap-3 shadow-lg border-3 transition-all touch-target ${
              isListening
                ? 'bg-purple-600 text-white border-purple-300 animate-pulse'
                : 'bg-purple-900 hover:bg-purple-800 text-purple-100 border-purple-700'
            }`}
            aria-label="Tell EasyLife what you need using speech"
          >
            <Mic className="w-7 h-7 text-amber-300" />
            <span>{isListening ? 'Listening now...' : t('tellEasyLife')}</span>
          </button>
        </div>

        {voiceQuery && (
          <div className="bg-purple-50 p-4 rounded-2xl border-2 border-purple-300 text-purple-950 font-bold text-lg">
            EasyLife understood: "{voiceQuery}" — Showing relevant healthcare options below!
          </div>
        )}
      </section>

      {/* 6 Primary Service Cards Grid */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 px-1">
          Everyday Services — Simple & Safe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.to}
                to={card.to}
                className={`p-6 rounded-3xl border-4 transition-all shadow-md flex flex-col justify-between space-y-4 touch-target ${card.color} focus:ring-4 focus:ring-amber-500`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md border-2 border-current">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="bg-white/80 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide border border-current">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold leading-tight">{card.title}</h3>
                  <p className="text-base font-semibold leading-relaxed opacity-90">{card.desc}</p>
                </div>

                <div className="pt-2 flex items-center font-black text-lg gap-2">
                  <span>Open {card.title}</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Additional Informational Cards: What makes EasyLife different? & You are in control */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Section 1 */}
        <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 border-4 border-emerald-700 shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-amber-400" />
            <h3 className="text-2xl font-extrabold text-white">{t('whatMakesDifferent')}</h3>
          </div>

          <ul className="space-y-3">
            {[t('diff1'), t('diff2'), t('diff3'), t('diff4'), t('diff5')].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 font-semibold text-lg text-emerald-100">
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-amber-50 text-slate-900 rounded-3xl p-6 sm:p-8 border-4 border-amber-400 shadow-lg space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-700" />
            <h3 className="text-2xl font-extrabold text-slate-900">{t('youAreInControl')}</h3>
          </div>

          <ul className="space-y-3">
            {[t('ctrl1'), t('ctrl2'), t('ctrl3'), t('ctrl4'), t('ctrl5')].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 font-semibold text-lg text-slate-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quick Footer Documentation Links */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 border-3 border-slate-700 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-extrabold text-amber-400">Hackathon & Design Transparency</h4>
          <p className="text-sm text-slate-300 font-medium">Explore why we built EasyLife and our WCAG compliance checklist.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/why-we-built"
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm border border-slate-600 flex items-center gap-1.5 touch-target"
          >
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>Why We Built</span>
          </Link>
          <Link
            to="/design-principles"
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2.5 rounded-xl text-sm border border-slate-600 flex items-center gap-1.5 touch-target"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Design Principles</span>
          </Link>
          <Link
            to="/accessibility-audit"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-4 py-2.5 rounded-xl text-sm border border-amber-300 flex items-center gap-1.5 touch-target"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Accessibility Audit (20 Checks)</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
