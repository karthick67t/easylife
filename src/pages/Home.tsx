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
  Footprints,
  CircleHelp,
  Code,
  AlertTriangle,
  Users,
  ShieldAlert,
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const { userName, setIsOnboardingOpen } = useApp();
  const { speak } = useTextToSpeech();
  const { language, textSize } = useAccessibility();
  const { isListening, startListening } = useVoiceInput();
  const [voiceQuery, setVoiceQuery] = useState('');

  const handleReadPage = () => {
    speak(`Technology doesn't have to be difficult. Simple tools for everyday life — designed to be easy to read, easy to understand, and easy to use. No technical knowledge required.`, language);
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
      desc: 'Find hospitals, doctors and appointments.',
    },
    {
      to: '/money',
      icon: WalletCards,
      title: 'Money & Banking',
      desc: 'Understand money and stay safer from scams.',
    },
    {
      to: '/travel',
      icon: BusFront,
      title: 'Travel',
      desc: 'Find buses, trains and simple directions.',
    },
    {
      to: '/government',
      icon: Landmark,
      title: 'Government Services',
      desc: 'Get help with government services and applications.',
    },
    {
      to: '/emergency',
      icon: Siren,
      title: 'Emergency',
      desc: 'Get urgent help quickly.',
    },
    {
      to: '/family',
      icon: UsersRound,
      title: 'Contact Family',
      desc: 'Call or message someone you trust.',
    },
  ];

  return (
    <div className="space-y-10 pb-12">
      {/* Clean White Hero Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#CFE8DA] shadow-sm relative overflow-hidden text-[#101814]">
        <div className="max-w-3xl space-y-6">
          {/* Small Green Pill */}
          <div className="inline-flex items-center gap-2 bg-[#E8F5EE] text-[#16834B] font-extrabold px-4 py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-wide border border-[#CFE8DA]">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>DESIGNED FOR 60+ ADULTS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight text-[#101814]">
            Technology <span className="text-[#16834B]">doesn't have to be difficult.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-bold text-[#5F6B64] leading-relaxed">
            Simple tools for everyday life — designed to be easy to read, easy to understand, and easy to use.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsOnboardingOpen(true)}
              className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-9 py-4 rounded-2xl text-xl shadow-md border-2 border-[#16834B] flex items-center gap-3 touch-target transition-all hover:-translate-y-0.5"
            >
              <span>Start Here →</span>
            </button>

            <button
              onClick={handleReadPage}
              className="bg-white hover:bg-[#E8F5EE] text-[#0B3D2A] font-extrabold px-7 py-4 rounded-2xl text-lg flex items-center gap-2 border-2 border-[#0B3D2A] touch-target transition-all"
            >
              <Volume2 className="w-6 h-6 text-[#16834B]" />
              <span>🔊 Read This Page Aloud</span>
            </button>
          </div>

          {/* Small Reassurance */}
          <p className="text-sm font-bold text-[#7A857F] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16834B]" />
            <span>No technical knowledge required.</span>
          </p>
        </div>
      </section>

      {/* Adaptive Experience Card */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between border-b border-[#CFE8DA] pb-4 gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-[#101814]">
              Your EasyLife is ready for you
            </h2>
            <p className="text-base font-bold text-[#5F6B64]">
              We've made the experience comfortable for you.
            </p>
          </div>

          <button
            onClick={() => setIsOnboardingOpen(true)}
            className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-6 py-3 rounded-2xl text-base shadow-sm touch-target"
          >
            Customize My Experience
          </button>
        </div>

        {/* Preference Chips */}
        <div className="flex flex-wrap gap-3 pt-1">
          {[
            `✓ Large Text (${textSize})`,
            `✓ Tamil (${language})`,
            `✓ Read Aloud Active`,
            `✓ Simple Mode Active`,
          ].map((chip, idx) => (
            <span
              key={idx}
              className="bg-[#E8F5EE] text-[#16834B] border border-[#CFE8DA] font-black px-4 py-2 rounded-xl text-base shadow-xs"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* Voice Interaction Section */}
      <section className="bg-[#E8F5EE] rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-[#101814]">
          Tell EasyLife what you need
        </h2>
        <p className="text-base font-bold text-[#5F6B64]">
          You can speak naturally or choose an option.
        </p>

        <div className="pt-2">
          <button
            onClick={handleVoiceTrigger}
            className={`w-28 h-28 rounded-full mx-auto flex items-center justify-center transition-all shadow-md touch-target ${
              isListening
                ? 'bg-[#16834B] text-white ring-8 ring-[#16834B]/30 animate-pulse'
                : 'bg-white text-[#16834B] border-4 border-[#16834B] hover:bg-[#E8F5EE]'
            }`}
            aria-label="Talk to EasyLife"
          >
            <Mic className="w-12 h-12" />
          </button>
          <div className="mt-3 font-extrabold text-xl text-[#0B3D2A]">
            {isListening ? 'Listening now...' : '🎙️ Talk to EasyLife'}
          </div>
        </div>

        {voiceQuery && (
          <div className="bg-white p-4 rounded-2xl border-2 border-[#16834B] text-[#101814] font-bold text-lg max-w-xl mx-auto">
            EasyLife understood: "{voiceQuery}" — Displaying care options below!
          </div>
        )}
      </section>

      {/* Main Service Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#101814]">What do you need today?</h2>
          <p className="text-lg font-bold text-[#5F6B64]">Choose one. We'll guide you step by step.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.to}
                to={card.to}
                className="p-8 rounded-3xl bg-white border-2 border-[#CFE8DA] hover:border-[#16834B] transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex flex-col justify-between space-y-6 touch-target focus:ring-4 focus:ring-[#16834B]"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-[#E8F5EE] text-[#16834B] rounded-2xl flex items-center justify-center border border-[#CFE8DA]">
                    <Icon className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#101814]">{card.title}</h3>
                  <p className="text-base sm:text-lg font-bold text-[#5F6B64] leading-relaxed">{card.desc}</p>
                </div>

                <div className="pt-2 flex items-center font-black text-xl text-[#16834B] gap-2">
                  <span>Open {card.title}</span>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Signature Features */}
      <section className="bg-white rounded-3xl p-8 border-2 border-[#CFE8DA] shadow-sm space-y-6">
        <div>
          <h2 className="text-3xl font-black text-[#101814]">
            EasyLife helps you understand what to do next.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: '1. Explain This', desc: 'Turn complicated digital language into simple words.', icon: Sparkles },
            { title: '2. Show Me', desc: 'Follow one clear step at a time.', icon: Footprints },
            { title: '3. Scam Shield', desc: 'Understand warning signs in suspicious messages.', icon: ShieldCheck },
            { title: '4. I\'m Stuck', desc: 'Get help when you don\'t know what to do next.', icon: CircleHelp },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#F8FAF8] p-6 rounded-2xl border-2 border-[#CFE8DA] space-y-3">
                <div className="w-12 h-12 bg-[#E8F5EE] text-[#16834B] rounded-xl flex items-center justify-center font-bold">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-[#101814]">{item.title}</h3>
                <p className="text-base font-bold text-[#5F6B64] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hackathon Judge Portals Header Bar */}
      <section className="bg-[#E8F5EE] rounded-3xl p-6 border-2 border-[#CFE8DA] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-black text-[#0B3D2A]">Hackathon Showcase Portals</h4>
          <p className="text-sm font-bold text-[#5F6B64]">Inspect prompt engineering, visual problem research, and design principles.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/prompt-lab"
            className="bg-white hover:bg-[#E8F5EE] text-[#16834B] font-extrabold px-4 py-2.5 rounded-xl text-sm border-2 border-[#16834B] flex items-center gap-1.5 touch-target shadow-xs"
          >
            <Code className="w-4 h-4" />
            <span>Prompt Lab</span>
          </Link>
          <Link
            to="/problem"
            className="bg-white hover:bg-[#E8F5EE] text-[#101814] font-extrabold px-4 py-2.5 rounded-xl text-sm border-2 border-[#CFE8DA] flex items-center gap-1.5 touch-target shadow-xs"
          >
            <AlertTriangle className="w-4 h-4 text-[#C88700]" />
            <span>The Problem</span>
          </Link>
          <Link
            to="/research"
            className="bg-white hover:bg-[#E8F5EE] text-[#101814] font-extrabold px-4 py-2.5 rounded-xl text-sm border-2 border-[#CFE8DA] flex items-center gap-1.5 touch-target shadow-xs"
          >
            <Users className="w-4 h-4 text-[#16834B]" />
            <span>Research</span>
          </Link>
          <Link
            to="/demo"
            className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-4 py-2.5 rounded-xl text-sm flex items-center gap-1.5 touch-target shadow"
          >
            <Sparkles className="w-4 h-4" />
            <span>Guided Demo Mode</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
