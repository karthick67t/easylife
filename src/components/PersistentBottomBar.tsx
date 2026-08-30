import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, AlertCircle, HelpCircle, Volume2, Mic } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { useVoiceInput } from '../hooks/useVoiceInput';
import { useAccessibility } from '../context/AccessibilityContext';

export const PersistentBottomBar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const { setIsStuckOpen, setIsEmergencyOpen } = useApp();
  const { speak, isSpeaking, stop } = useTextToSpeech();
  const { language } = useAccessibility();
  const { isListening, startListening } = useVoiceInput();

  const handleReadAloud = () => {
    if (isSpeaking) {
      stop();
    } else {
      const mainEl = document.querySelector('main');
      const textToRead = mainEl ? mainEl.innerText.slice(0, 500) : "Welcome to EasyLife";
      speak(textToRead, language);
    }
  };

  const handleVoiceInput = () => {
    startListening((recognizedText) => {
      alert(`EasyTalk recognized: "${recognizedText}". Displaying healthcare assistance...`);
      window.location.hash = '#/healthcare';
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#070B16] text-[#F4F7FB] border-t-4 border-[#35D6C5] shadow-2xl px-2 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1 sm:gap-2">
        {/* Home Button */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center min-w-[64px] min-h-[52px] px-2 py-1 rounded-2xl transition-all font-extrabold text-xs sm:text-sm ${
            location.pathname === '/'
              ? 'bg-[#35D6C5] text-[#070B16] shadow-lg'
              : 'text-[#B8C4D8] hover:bg-[#101A2E]'
          }`}
          aria-label="Go to Home"
        >
          <Home className="w-6 h-6 mb-0.5" />
          <span>{t('home')}</span>
        </Link>

        {/* Emergency Help Button */}
        <button
          onClick={() => setIsEmergencyOpen(true)}
          className="bg-[#FF5C67] hover:bg-[#e04a55] text-white font-extrabold px-3 py-2 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-1.5 shadow-xl border-2 border-red-300 transition-all text-xs sm:text-sm touch-target"
          aria-label="Emergency Help - Immediate Assistance"
        >
          <AlertCircle className="w-6 h-6 animate-pulse" />
          <span className="leading-tight text-center sm:text-left">🔴 EMERGENCY</span>
        </button>

        {/* I'm Stuck Helper Button */}
        <button
          onClick={() => setIsStuckOpen(true)}
          className="bg-[#FFC857] hover:bg-[#e6b44c] text-[#070B16] font-extrabold px-3 py-2 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-1.5 shadow-xl border-2 border-amber-200 transition-all text-xs sm:text-sm touch-target"
          aria-label="I am Stuck - Request Guidance"
        >
          <HelpCircle className="w-6 h-6" />
          <span className="leading-tight text-center sm:text-left">🟠 I'M STUCK</span>
        </button>

        {/* Read Aloud Button */}
        <button
          onClick={handleReadAloud}
          className={`px-3 py-2 rounded-2xl flex flex-col items-center justify-center font-extrabold text-xs sm:text-sm transition-all border-2 touch-target ${
            isSpeaking
              ? 'bg-[#45D483] text-[#070B16] border-emerald-300 animate-bounce'
              : 'bg-[#101A2E] text-[#35D6C5] border-[#2B3E68] hover:bg-[#142039]'
          }`}
          aria-label="Read Page Aloud"
        >
          <Volume2 className="w-6 h-6 mb-0.5" />
          <span>{isSpeaking ? 'Stop' : '🔊 Read Aloud'}</span>
        </button>

        {/* EasyTalk Voice Command Button */}
        <button
          onClick={handleVoiceInput}
          className={`px-3 py-2 rounded-2xl flex flex-col items-center justify-center font-extrabold text-xs sm:text-sm transition-all border-2 touch-target hidden md:flex ${
            isListening
              ? 'bg-purple-600 text-white border-purple-300 animate-pulse'
              : 'bg-[#101A2E] text-purple-300 border-purple-800 hover:bg-[#142039]'
          }`}
          aria-label="Speak to EasyTalk"
        >
          <Mic className="w-6 h-6 mb-0.5 text-[#35D6C5]" />
          <span>{isListening ? 'Listening...' : 'EasyTalk'}</span>
        </button>
      </div>
    </div>
  );
};
