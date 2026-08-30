import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { useAccessibility } from '../context/AccessibilityContext';
import { HelpCircle, FileText, Footprints, PhoneCall, ArrowLeft, RefreshCw, X } from 'lucide-react';

export const ImStuckModal: React.FC = () => {
  const { isStuckOpen, setIsStuckOpen, trustedContacts, startShowMeGuide, setExplainModalText } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const { speak } = useTextToSpeech();
  const { language } = useAccessibility();

  if (!isStuckOpen) return null;

  const handleExplainPage = () => {
    setIsStuckOpen(false);
    setExplainModalText({
      title: `Page Overview: ${location.pathname}`,
      complex: "This digital portal facilitates service discovery and workflow execution.",
      simple: "This page lets you easily find services, book appointments, or get help with everyday tasks in 1 simple step.",
    });
  };

  const handleShowMeStepByStep = () => {
    setIsStuckOpen(false);
    startShowMeGuide("Guided Navigation Tour", [
      "Press any large service card on the homepage (like Healthcare or Travel)",
      "Read the simple options displayed in large text",
      "Press the green confirm button when ready",
      "If you get confused at any point, press 'I'm Stuck' again",
    ]);
  };

  const handleCallTrusted = (phone: string, name: string) => {
    setIsStuckOpen(false);
    alert(`Calling your trusted person ${name} at ${phone}... (Simulated Hackathon Action)`);
  };

  const handleGoBack = () => {
    setIsStuckOpen(false);
    navigate(-1);
  };

  const handleStartAgain = () => {
    setIsStuckOpen(false);
    navigate('/');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-amber-50 text-slate-950 border-4 border-amber-500 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={() => setIsStuckOpen(false)}
          className="absolute top-4 right-4 bg-amber-200 hover:bg-amber-300 text-slate-900 rounded-full p-2 touch-target focus:ring-4 focus:ring-amber-500"
          aria-label="Close Help Dialog"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Don't worry, we're here to help!
            </h2>
            <p className="text-base text-slate-700 font-semibold">
              Choose what you would like to do right now:
            </p>
          </div>
        </div>

        {/* 5 Primary Options */}
        <div className="space-y-3">
          {/* Option 1: Explain this page */}
          <button
            onClick={handleExplainPage}
            className="w-full bg-white hover:bg-amber-100 border-3 border-amber-400 p-4 rounded-2xl flex items-center gap-4 text-left transition-all shadow-sm touch-target"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl text-slate-900">Explain this page</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Tell me in simple words what this page is for</div>
            </div>
          </button>

          {/* Option 2: Show me step by step */}
          <button
            onClick={handleShowMeStepByStep}
            className="w-full bg-white hover:bg-amber-100 border-3 border-amber-400 p-4 rounded-2xl flex items-center gap-4 text-left transition-all shadow-sm touch-target"
          >
            <div className="w-12 h-12 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center shrink-0">
              <Footprints className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl text-slate-900">Show me step by step</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Guide me through what to click next</div>
            </div>
          </button>

          {/* Option 3: Call my trusted person */}
          <div className="bg-emerald-100 border-3 border-emerald-400 p-4 rounded-2xl space-y-2">
            <div className="font-extrabold text-lg text-emerald-950 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-emerald-700" />
              <span>Call my trusted person</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {trustedContacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => handleCallTrusted(contact.phone, contact.name)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-2.5 px-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow touch-target"
                >
                  <span>Call {contact.name} ({contact.relationship})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Option 4: Go back */}
          <button
            onClick={handleGoBack}
            className="w-full bg-white hover:bg-amber-100 border-3 border-slate-300 p-4 rounded-2xl flex items-center gap-4 text-left transition-all touch-target"
          >
            <div className="w-12 h-12 bg-slate-200 text-slate-800 rounded-xl flex items-center justify-center shrink-0">
              <ArrowLeft className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-lg text-slate-900">Go back</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Return to the previous screen</div>
            </div>
          </button>

          {/* Option 5: Start again */}
          <button
            onClick={handleStartAgain}
            className="w-full bg-white hover:bg-amber-100 border-3 border-slate-300 p-4 rounded-2xl flex items-center gap-4 text-left transition-all touch-target"
          >
            <div className="w-12 h-12 bg-amber-200 text-amber-900 rounded-xl flex items-center justify-center shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-lg text-slate-900">Start again</div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Go back to the EasyLife home screen</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
