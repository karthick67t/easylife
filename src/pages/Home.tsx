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
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const { userName, setIsOnboardingOpen } = useApp();
  const { speak } = useTextToSpeech();
  const { language, textSize } = useAccessibility();
  const { isListening, startListening } = useVoiceInput();
  const [voiceQuery, setVoiceQuery] = useState('');

  const handleReadPage = () => {
    speak(`${t('heroTitlePart1')} ${t('heroTitleHighlight')}. ${t('heroSubtitle')}. ${t('noTechRequired')}`, language);
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
      title: t('healthcareTitle'),
      desc: t('healthcareDesc'),
    },
    {
      to: '/money',
      icon: WalletCards,
      title: t('moneyTitle'),
      desc: t('moneyDesc'),
    },
    {
      to: '/travel',
      icon: BusFront,
      title: t('travelTitle'),
      desc: t('travelDesc'),
    },
    {
      to: '/government',
      icon: Landmark,
      title: t('govtTitle'),
      desc: t('govtDesc'),
    },
    {
      to: '/emergency',
      icon: Siren,
      title: t('emergencyTitle'),
      desc: t('emergencyDesc'),
    },
    {
      to: '/family',
      icon: UsersRound,
      title: t('familyTitle'),
      desc: t('familyDesc'),
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
            <span>{t('designedForSeniors')}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight text-[#101814]">
            {t('heroTitlePart1')}<span className="text-[#16834B]">{t('heroTitleHighlight')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-bold text-[#5F6B64] leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsOnboardingOpen(true)}
              className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-9 py-4 rounded-2xl text-xl shadow-md border-2 border-[#16834B] flex items-center gap-3 touch-target transition-all hover:-translate-y-0.5"
            >
              <span>{t('startHere')}</span>
            </button>

            <button
              onClick={handleReadPage}
              className="bg-white hover:bg-[#E8F5EE] text-[#0B3D2A] font-extrabold px-7 py-4 rounded-2xl text-lg flex items-center gap-2 border-2 border-[#0B3D2A] touch-target transition-all"
            >
              <Volume2 className="w-6 h-6 text-[#16834B]" />
              <span>{t('readPageAloud')}</span>
            </button>
          </div>

          {/* Reassurance */}
          <p className="text-sm font-bold text-[#7A857F] flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#16834B]" />
            <span>{t('noTechRequired')}</span>
          </p>
        </div>
      </section>

      {/* Adaptive Experience Card */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between border-b border-[#CFE8DA] pb-4 gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black text-[#101814]">
              {t('adaptiveReadyTitle')}
            </h2>
            <p className="text-base font-bold text-[#5F6B64]">
              {t('adaptiveReadySub')}
            </p>
          </div>

          <button
            onClick={() => setIsOnboardingOpen(true)}
            className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-6 py-3 rounded-2xl text-base shadow-sm touch-target"
          >
            {t('customizeExperience')}
          </button>
        </div>

        {/* Preference Chips */}
        <div className="flex flex-wrap gap-3 pt-1">
          {[
            t('largeTextChip'),
            `${t('languageChip')} (${language})`,
            t('readAloudChip'),
            t('simpleModeChip'),
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
          {t('tellEasyLife')}
        </h2>
        <p className="text-base font-bold text-[#5F6B64]">
          {t('speakNaturally')}
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
            {isListening ? t('listeningNow') : t('talkToEasyLife')}
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
          <h2 className="text-3xl sm:text-4xl font-black text-[#101814]">{t('whatDoYouNeedToday')}</h2>
          <p className="text-lg font-bold text-[#5F6B64]">{t('chooseOneGuide')}</p>
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
                  <span>{t('open')} {card.title}</span>
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
            {t('signatureHelpTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: t('explainThisTitle'), desc: t('explainThisDesc'), icon: Sparkles },
            { title: t('showMeTitle'), desc: t('showMeDesc'), icon: Footprints },
            { title: t('scamShieldTitle'), desc: t('scamShieldDesc'), icon: ShieldCheck },
            { title: t('imStuckTitle'), desc: t('imStuckDesc'), icon: CircleHelp },
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
    </div>
  );
};
