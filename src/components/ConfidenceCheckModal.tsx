import React from 'react';
import { useApp } from '../context/AppContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { useAccessibility } from '../context/AccessibilityContext';
import { CheckCircle2, Volume2, Users, HelpCircle, X, ThumbsUp } from 'lucide-react';

export const ConfidenceCheckModal: React.FC = () => {
  const { confidenceCheck, setConfidenceCheck, setExplainModalText, trustedContacts } = useApp();
  const { speak } = useTextToSpeech();
  const { language } = useAccessibility();

  if (!confidenceCheck) return null;

  const handleReadAloud = () => {
    speak(`${confidenceCheck.title}. ${confidenceCheck.message}. Do you understand what happens next?`, language);
  };

  const handleExplainAgain = () => {
    setExplainModalText({
      title: "Appointment Details",
      complex: "Prior to arrival, ensure patient identification documentation is retained.",
      simple: "Please reach the hospital 15 minutes before your time. Bring your ID card and previous doctor prescriptions.",
    });
  };

  const handleTellFamily = () => {
    alert(`SMS notification sent to ${trustedContacts[0].name} (${trustedContacts[0].relationship}): "Lakshmi's appointment confirmed at City Hospital at 10:30 AM."`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-emerald-50 text-slate-900 border-4 border-emerald-500 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-center">
        <button
          onClick={() => setConfidenceCheck(null)}
          className="absolute top-4 right-4 bg-emerald-200 hover:bg-emerald-300 text-slate-900 rounded-full p-2 touch-target"
          aria-label="Close Confirmation Dialog"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="w-20 h-20 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl border-4 border-white animate-bounce">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <h2 className="text-3xl font-black text-emerald-950 mb-2">
          {confidenceCheck.title}
        </h2>
        <p className="text-xl font-bold text-slate-800 mb-6 bg-white p-4 rounded-2xl border-2 border-emerald-300">
          {confidenceCheck.message}
        </p>

        <div className="bg-amber-100 p-4 rounded-2xl border-2 border-amber-400 mb-6">
          <h3 className="text-lg font-extrabold text-amber-950 flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-800" />
            Do you understand what happens next?
          </h3>
        </div>

        {/* 4 Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => setConfidenceCheck(null)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold p-4 rounded-2xl text-lg flex items-center justify-center gap-2 shadow touch-target"
          >
            <ThumbsUp className="w-5 h-5" />
            <span>Yes, I Understand</span>
          </button>

          <button
            onClick={handleExplainAgain}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold p-4 rounded-2xl text-lg flex items-center justify-center gap-2 shadow touch-target"
          >
            <HelpCircle className="w-5 h-5" />
            <span>Explain It Again</span>
          </button>

          <button
            onClick={handleReadAloud}
            className="bg-white hover:bg-slate-100 text-slate-900 border-2 border-slate-400 font-bold p-3.5 rounded-2xl text-base flex items-center justify-center gap-2 touch-target"
          >
            <Volume2 className="w-5 h-5 text-emerald-700" />
            <span>Read It Aloud</span>
          </button>

          <button
            onClick={handleTellFamily}
            className="bg-white hover:bg-slate-100 text-slate-900 border-2 border-slate-400 font-bold p-3.5 rounded-2xl text-base flex items-center justify-center gap-2 touch-target"
          >
            <Users className="w-5 h-5 text-blue-700" />
            <span>Tell My Family</span>
          </button>
        </div>
      </div>
    </div>
  );
};
