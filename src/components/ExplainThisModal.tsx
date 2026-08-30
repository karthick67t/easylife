import React from 'react';
import { useApp } from '../context/AppContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { useAccessibility } from '../context/AccessibilityContext';
import { Sparkles, Volume2, ArrowRight, X, HelpCircle } from 'lucide-react';

export const ExplainThisModal: React.FC = () => {
  const { explainModalText, setExplainModalText, startShowMeGuide } = useApp();
  const { speak } = useTextToSpeech();
  const { language } = useAccessibility();

  if (!explainModalText) return null;

  const handleReadAloud = () => {
    speak(`${explainModalText.title}. Simple explanation: ${explainModalText.simple}`, language);
  };

  const handleShowNext = () => {
    setExplainModalText(null);
    startShowMeGuide("What to do next", [
      "Check your required document (Aadhaar or Passport)",
      "Press the green confirm button on the application form",
      "Ask Priya or Arun for help if you feel unsure",
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-emerald-50 text-slate-900 border-4 border-emerald-500 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={() => setExplainModalText(null)}
          className="absolute top-4 right-4 bg-emerald-200 hover:bg-emerald-300 text-slate-900 rounded-full p-2 touch-target"
          aria-label="Close Plain Language Explanation"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold">
            <Sparkles className="w-7 h-7" />
          </div>
          <div>
            <span className="bg-emerald-200 text-emerald-900 font-extrabold px-2 py-0.5 rounded text-xs uppercase">
              Signature Feature: Explain This
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {explainModalText.title}
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {/* Complex Technical Terms Container */}
          <div className="bg-white p-4 rounded-2xl border-2 border-slate-300 space-y-1">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Complex Official Language:</div>
            <p className="text-base text-slate-600 line-through decoration-red-400 font-medium italic">
              "{explainModalText.complex}"
            </p>
          </div>

          {/* EasyLife Plain Language Solution */}
          <div className="bg-emerald-100 p-5 rounded-2xl border-3 border-emerald-500 space-y-2 shadow-md">
            <div className="text-xs font-extrabold text-emerald-900 uppercase tracking-wide flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              EasyLife Simple Language:
            </div>
            <p className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {explainModalText.simple}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
          <button
            onClick={handleReadAloud}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold p-3.5 rounded-2xl text-base flex items-center justify-center gap-2 shadow touch-target"
          >
            <Volume2 className="w-5 h-5" />
            <span>Read Aloud</span>
          </button>

          <button
            onClick={handleShowNext}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold p-3.5 rounded-2xl text-base flex items-center justify-center gap-2 shadow touch-target"
          >
            <span>Show me what to do next</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
