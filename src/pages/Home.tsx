import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { useVoiceInput } from '../hooks/useVoiceInput';
import { useAccessibility } from '../context/AccessibilityContext';
import {
  HeartPulse,
  WalletCards,
  BusFront,
  Landmark,
  Siren,
  UsersRound,
  Mic,
  Volume2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  FileCheck2,
  Footprints,
  CircleHelp,
  Code,
  AlertTriangle,
  Users,
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const { userName, setIsOnboardingOpen } = useApp();
  const { speak } = useTextToSpeech();
  const { language, textSize } = useAccessibility();
  const { isListening, startListening } = useVoiceInput();
  const [voiceQuery, setVoiceQuery] = useState('');

  const handleReadPage = () => {
    speak(`Technology should adapt to you. EasyLife makes everyday digital tasks easier to understand, safer to complete, and more comfortable to use.`, language);
  };

  const handleVoiceTrigger = () => {
    startListening((resText) => {
      setVoiceQuery(resText);
    });
  };

  const serviceCards = [
    {
      to: '/healthcare',
      icon: HeartPulse,
      title: 'Healthcare',
      desc: 'Find care, doctors and appointments.',
      accent: 'border-[#35D6C5] hover:border-[#35D6C5]',
      badge: 'Doctors & Appointments',
    },
    {
      to: '/money',
      icon: WalletCards,
      title: 'Money & Banking',
      desc: 'Understand money and stay safe from scams.',
      accent: 'border-[#4DA3FF] hover:border-[#4DA3FF]',
      badge: 'Safe Payments & Pension',
    },
    {
      to: '/travel',
      icon: BusFront,
      title: 'Travel',
      desc: 'Find simple routes and transport information.',
      accent: 'border-[#FFC857] hover:border-[#FFC857]',
      badge: 'Bus & Train Directions',
    },
    {
      to: '/government',
      icon: Landmark,
      title: 'Government',
      desc: 'Get help with government services.',
      accent: 'border-[#35D6C5] hover:border-[#35D6C5]',
      badge: 'Plain Language Guides',
    },
    {
      to: '/emergency',
      icon: Siren,
      title: 'Emergency',
      desc: 'Get urgent help quickly.',
      accent: 'border-[#FF5C67] hover:border-[#FF5C67]',
      badge: 'One-Touch Help',
    },
    {
      to: '/family',
      icon: UsersRound,
      title: 'My Family',
      desc: 'Contact someone you trust.',
      accent: 'border-[#4DA3FF] hover:border-[#4DA3FF]',
      badge: 'Priya & Arun',
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner Section */}
      <section className="bg-[#101A2E] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-[#35D6C5] relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <span className="bg-[#35D6C5]/20 text-[#35D6C5] font-extrabold px-3 py-1 rounded-full text-xs sm:text-sm inline-flex items-center gap-1.5 uppercase tracking-wide border border-[#35D6C5]/40">
            <Sparkles className="w-4 h-4 fill-current" />
            ADAPTIVE ACCESSIBILITY PLATFORM
          </span>

          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-[#F4F7FB]">
            Technology should adapt to you.
          </h1>

          <p className="text-lg sm:text-2xl font-bold text-[#B8C4D8] leading-snug">
            EasyLife makes everyday digital tasks easier to understand, safer to complete, and more comfortable to use.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => setIsOnboardingOpen(true)}
              className="bg-[#35D6C5] hover:bg-[#2cb5a6] text-[#070B16] font-extrabold px-8 py-4 rounded-2xl text-xl shadow-xl border-2 border-[#35D6C5] flex items-center gap-3 touch-target"
            >
              <span>Start My EasyLife</span>
              <ArrowRight className="w-6 h-6" />
            </button>

            <button
              onClick={handleReadPage}
              className="bg-[#142039] hover:bg-[#1C2B49] text-[#F4F7FB] font-extrabold px-6 py-4 rounded-2xl text-lg flex items-center gap-2 border-2 border-[#2B3E68] touch-target"
            >
              <Volume2 className="w-6 h-6 text-[#35D6C5]" />
              <span>🔊 Read This Page Aloud</span>
            </button>
          </div>
        </div>
      </section>

      {/* Adaptive Status Card Banner */}
      <section className="bg-[#101A2E] rounded-3xl p-6 border-2 border-[#1C2B49] shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="text-xs font-extrabold text-[#35D6C5] uppercase tracking-wide">Adaptive Experience Engine</div>
          <h2 className="text-2xl font-black text-[#F4F7FB]">Your EasyLife is adapted</h2>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="bg-[#0B1222] text-[#F4F7FB] border border-[#2B3E68] font-bold px-3 py-1 rounded-xl text-sm flex items-center gap-1.5">
              👀 Text: {textSize}
            </span>
            <span className="bg-[#0B1222] text-[#F4F7FB] border border-[#2B3E68] font-bold px-3 py-1 rounded-xl text-sm flex items-center gap-1.5">
              🌐 Language: {language}
            </span>
            <span className="bg-[#0B1222] text-[#35D6C5] border border-[#35D6C5]/40 font-bold px-3 py-1 rounded-xl text-sm flex items-center gap-1.5">
              🔊 Voice Assistance Active
            </span>
            <span className="bg-[#0B1222] text-[#FFC857] border border-[#FFC857]/40 font-bold px-3 py-1 rounded-xl text-sm flex items-center gap-1.5">
              👣 Guided Mode Active
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsOnboardingOpen(true)}
          className="bg-[#142039] hover:bg-[#1C2B49] text-[#35D6C5] font-extrabold px-6 py-3 rounded-2xl text-base border-2 border-[#35D6C5]/40 touch-target"
        >
          Customize My Experience
        </button>
      </section>

      {/* Interactive Voice Microphone Circular Widget */}
      <section className="bg-[#101A2E] rounded-3xl p-6 sm:p-8 border-2 border-[#1C2B49] shadow-xl text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FB]">
          Tell EasyLife what you need
        </h2>
        <p className="text-base text-[#B8C4D8] font-semibold">
          You can speak naturally or choose an option below.
        </p>

        <div className="pt-2">
          <button
            onClick={handleVoiceTrigger}
            className={`w-28 h-28 rounded-full mx-auto flex items-center justify-center transition-all shadow-2xl touch-target ${
              isListening
                ? 'bg-[#35D6C5] text-[#070B16] ring-8 ring-[#35D6C5]/40 animate-pulse'
                : 'bg-[#142039] hover:bg-[#1C2B49] text-[#35D6C5] border-4 border-[#35D6C5]'
            }`}
            aria-label="Talk to EasyLife"
          >
            <Mic className="w-12 h-12" />
          </button>
          <div className="mt-3 font-extrabold text-lg text-[#35D6C5]">
            {isListening ? 'Listening now...' : '🎙️ Talk to EasyLife'}
          </div>
        </div>

        {voiceQuery && (
          <div className="bg-[#0B1222] p-4 rounded-2xl border-2 border-[#35D6C5] text-[#F4F7FB] font-bold text-lg max-w-xl mx-auto">
            EasyLife understood: "{voiceQuery}" — Displaying relevant care options!
          </div>
        )}
      </section>

      {/* 6 Primary Service Cards */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FB]">What do you need today?</h2>
          <p className="text-base font-semibold text-[#8492A8]">Choose one. We'll guide you from there.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.to}
                to={card.to}
                className={`p-6 rounded-3xl bg-[#101A2E] border-3 transition-all shadow-lg flex flex-col justify-between space-y-4 touch-target ${card.accent} focus:ring-4 focus:ring-[#35D6C5]`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-[#0B1222] text-[#35D6C5] rounded-2xl flex items-center justify-center border border-[#2B3E68] shadow">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="bg-[#0B1222] text-[#B8C4D8] font-bold px-3 py-1 rounded-full text-xs uppercase border border-[#2B3E68]">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#F4F7FB]">{card.title}</h3>
                  <p className="text-base font-semibold text-[#B8C4D8] leading-relaxed">{card.desc}</p>
                </div>

                <div className="pt-2 flex items-center font-black text-lg text-[#35D6C5] gap-2">
                  <span>Open {card.title}</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Signature Features Highlight Section */}
      <section className="bg-[#101A2E] rounded-3xl p-6 sm:p-8 border-2 border-[#1C2B49] shadow-xl space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FB]">
            EasyLife doesn't just show you information.
          </h2>
          <p className="text-base text-[#B8C4D8] font-semibold">
            It helps you understand what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Explain This', desc: 'Turns difficult digital language into simple language.', icon: Sparkles, color: 'text-[#35D6C5]' },
            { title: 'Show Me', desc: 'Guides you visually through one step at a time.', icon: Footprints, color: 'text-[#4DA3FF]' },
            { title: 'Scam Shield', desc: 'Helps identify warning signs in suspicious messages.', icon: ShieldCheck, color: 'text-[#FFC857]' },
            { title: 'I\'m Stuck', desc: 'Provides immediate recovery options.', icon: CircleHelp, color: 'text-[#FF5C67]' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#0B1222] p-5 rounded-2xl border border-[#2B3E68] space-y-2">
                <Icon className={`w-8 h-8 ${item.color}`} />
                <h3 className="text-xl font-extrabold text-[#F4F7FB]">{item.title}</h3>
                <p className="text-sm font-semibold text-[#8492A8]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Navigation Portal Links for Judges */}
      <section className="bg-[#0B1222] rounded-3xl p-6 border-2 border-[#2B3E68] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-extrabold text-[#FFC857]">Hackathon Judge Showcase Links</h4>
          <p className="text-sm text-[#8492A8] font-medium">Explore prompt engineering, visual problem breakdowns, and user research.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/prompt-lab"
            className="bg-[#101A2E] hover:bg-[#142039] text-[#35D6C5] font-extrabold px-4 py-2.5 rounded-xl text-sm border border-[#35D6C5]/40 flex items-center gap-1.5 touch-target"
          >
            <Code className="w-4 h-4" />
            <span>Prompt Lab</span>
          </Link>
          <Link
            to="/problem"
            className="bg-[#101A2E] hover:bg-[#142039] text-[#FF5C67] font-extrabold px-4 py-2.5 rounded-xl text-sm border border-[#FF5C67]/40 flex items-center gap-1.5 touch-target"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>The Problem</span>
          </Link>
          <Link
            to="/research"
            className="bg-[#101A2E] hover:bg-[#142039] text-[#4DA3FF] font-extrabold px-4 py-2.5 rounded-xl text-sm border border-[#4DA3FF]/40 flex items-center gap-1.5 touch-target"
          >
            <Users className="w-4 h-4" />
            <span>User Research</span>
          </Link>
          <Link
            to="/demo"
            className="bg-[#35D6C5] hover:bg-[#2cb5a6] text-[#070B16] font-extrabold px-4 py-2.5 rounded-xl text-sm flex items-center gap-1.5 touch-target shadow"
          >
            <Sparkles className="w-4 h-4" />
            <span>Guided Demo Mode</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
