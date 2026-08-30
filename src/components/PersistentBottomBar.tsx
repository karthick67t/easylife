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
      // Extract main visible text from main container
      const mainEl = document.querySelector('main');
      const textToRead = mainEl ? mainEl.innerText.slice(0, 500) : "Welcome to EasyLife";
      speak(textToRead, language);
    }
  };

  const handleVoiceInput = () => {
    startListening((recognizedText) => {
      alert(`EasyTalk recognized: "${recognizedText}". Redirecting to Healthcare...`);
      window.location.hash = '#/healthcare';
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white border-t-4 border-amber-500 shadow-2xl px-2 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1 sm:gap-2">
        {/* Home Button */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center min-w-[64px] min-h-[52px] px-2 py-1 rounded-xl transition-all font-bold text-xs sm:text-sm ${
            location.pathname === '/' ? 'bg-amber-400 text-slate-950 shadow-md' : 'text-slate-200 hover:bg-slate-800'
          }`}
          aria-label="Go to Home"
        >
          <Home className="w-6 h-6 mb-0.5" />
          <span>{t('home')}</span>
        </Link>

        {/* Emergency Help Button */}
        <button
          onClick={() => setIsEmergencyOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-3 py-2 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1.5 shadow-lg border-2 border-red-400 transition-all text-xs sm:text-sm touch-target"
          aria-label="Emergency Help - Immediate Assistance"
        >
          <AlertCircle className="w-6 h-6 animate-pulse" />
          <span className="leading-tight text-center sm:text-left">{t('emergencyHelp')}</span>
        </button>

        {/* I'm Stuck Helper Button */}
        <button
          onClick={() => setIsStuckOpen(true)}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-3 py-2 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1.5 shadow-lg border-2 border-amber-300 transition-all text-xs sm:text-sm touch-target"
          aria-label="I am Stuck - Request Plain Guidance"
        >
          <HelpCircle className="w-6 h-6" />
          <span className="leading-tight text-center sm:text-left">{t('imStuck')}</span>
        </button>

        {/* Read Aloud Button */}
        <button
          onClick={handleReadAloud}
          className={`px-3 py-2 rounded-xl flex flex-col items-center justify-center font-bold text-xs sm:text-sm transition-all border-2 touch-target ${
            isSpeaking
              ? 'bg-emerald-500 text-slate-950 border-emerald-300 animate-bounce'
              : 'bg-slate-800 text-emerald-300 border-emerald-600 hover:bg-slate-700'
          }`}
          aria-label="Read Page Aloud"
        >
          <Volume2 className="w-6 h-6 mb-0.5" />
          <span>{isSpeaking ? 'Stop' : t('readAloud')}</span>
        </button>

        {/* EasyTalk Voice Command Button */}
        <button
          onClick={handleVoiceInput}
          className={`px-3 py-2 rounded-xl flex flex-col items-center justify-center font-bold text-xs sm:text-sm transition-all border-2 touch-target hidden md:flex ${
            isListening
              ? 'bg-purple-600 text-white border-purple-300 animate-pulse'
              : 'bg-purple-900 text-purple-200 border-purple-700 hover:bg-purple-800'
          }`}
          aria-label="Speak to EasyTalk"
        >
          <Mic className="w-6 h-6 mb-0.5" />
          <span>{isListening ? 'Listening...' : 'EasyTalk'}</span>
        </button>
      </div>
    </div>
  );
};
