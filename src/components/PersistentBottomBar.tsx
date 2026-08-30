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
      alert(`EasyTalk recognized: "${recognizedText}". Displaying healthcare options...`);
      window.location.hash = '#/healthcare';
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white text-[#101814] border-t-2 border-[#CFE8DA] shadow-2xl px-2 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1 sm:gap-2">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center min-w-[64px] min-h-[52px] px-2 py-1 rounded-2xl transition-all font-black text-xs sm:text-sm ${
            location.pathname === '/'
              ? 'bg-[#16834B] text-white shadow-sm'
              : 'text-[#5F6B64] hover:bg-[#E8F5EE]'
          }`}
          aria-label="Go to Home"
        >
          <Home className="w-6 h-6 mb-0.5" />
          <span>Home</span>
        </Link>

        {/* Emergency Help Button (Red Only Here) */}
        <button
          onClick={() => setIsEmergencyOpen(true)}
          className="bg-[#C62828] hover:bg-[#b02323] text-white font-black px-3 py-2 rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-1.5 shadow border-2 border-red-300 transition-all text-xs sm:text-sm touch-target"
          aria-label="Emergency Help"
        >
          <AlertCircle className="w-6 h-6 animate-pulse" />
          <span className="leading-tight text-center sm:text-left">EMERGENCY</span>
        </button>

        {/* I'm Stuck Button (Persistent Green/Mint) */}
        <button
          onClick={() => setIsStuckOpen(true)}
          className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-black px-3.5 py-2.5 rounded-2xl flex items-center justify-center gap-1.5 shadow border-2 border-[#16834B] transition-all text-xs sm:text-base touch-target"
          aria-label="I'm Stuck — Help Me"
        >
          <HelpCircle className="w-6 h-6" />
          <span className="leading-tight text-center sm:text-left">🟠 I'm Stuck — Help Me</span>
        </button>

        {/* Read Aloud Button */}
        <button
          onClick={handleReadAloud}
          className={`px-3 py-2 rounded-2xl flex flex-col items-center justify-center font-extrabold text-xs sm:text-sm transition-all border-2 touch-target ${
            isSpeaking
              ? 'bg-[#16834B] text-white border-[#16834B] animate-bounce'
              : 'bg-[#F8FAF8] text-[#16834B] border-[#CFE8DA] hover:bg-[#E8F5EE]'
          }`}
          aria-label="Read Page Aloud"
        >
          <Volume2 className="w-6 h-6 mb-0.5" />
          <span>{isSpeaking ? 'Stop' : '🔊 Read Aloud'}</span>
        </button>

        {/* EasyTalk Voice Button */}
        <button
          onClick={handleVoiceInput}
          className={`px-3 py-2 rounded-2xl flex flex-col items-center justify-center font-extrabold text-xs sm:text-sm transition-all border-2 touch-target hidden md:flex ${
            isListening
              ? 'bg-[#16834B] text-white border-[#16834B] animate-pulse'
              : 'bg-[#F8FAF8] text-[#0B3D2A] border-[#CFE8DA] hover:bg-[#E8F5EE]'
          }`}
          aria-label="Speak to EasyTalk"
        >
          <Mic className="w-6 h-6 mb-0.5 text-[#16834B]" />
          <span>{isListening ? 'Listening...' : 'EasyTalk'}</span>
        </button>
      </div>
    </div>
  );
};
