import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useAccessibility } from '../context/AccessibilityContext';
import { Play, ArrowRight, ArrowLeft, X, Sparkles, CheckCircle } from 'lucide-react';

export const HackathonDemoBar: React.FC = () => {
  const { demoStep, setDemoStep, setIsOnboardingOpen, setExplainModalText, startShowMeGuide, setIsStuckOpen } = useApp();
  const { setTextSize, setContrastMode, setLanguage } = useAccessibility();
  const navigate = useNavigate();

  if (demoStep === null) return null;

  const demoStepsList = [
    {
      step: 1,
      title: "Step 1: Open EasyLife",
      action: "Welcome to EasyLife! Technology doesn't have to be difficult.",
      onTrigger: () => {
        navigate('/');
      },
    },
    {
      step: 2,
      title: "Step 2: Adaptive Accessibility",
      action: "Enabling Extra Large Text, High Contrast, and Tamil language.",
      onTrigger: () => {
        setTextSize('extra-large');
        setContrastMode('high-contrast');
        setLanguage('Tamil');
        navigate('/');
      },
    },
    {
      step: 3,
      title: "Step 3: Plain-Language Transformation ('Explain This')",
      action: "Opening government services with simplified official jargon.",
      onTrigger: () => {
        navigate('/government');
        setExplainModalText({
          title: "Government Aadhaar & Pension Document Rule",
          complex: "Applicants must submit proof of identity along with supporting documentation.",
          simple: "You need to show an ID document. You can use Aadhaar, a passport, or a driving licence.",
        });
      },
    },
    {
      step: 4,
      title: "Step 4: Cognitive Accessibility ('Show Me')",
      action: "Guided step-by-step healthcare appointment booking.",
      onTrigger: () => {
        navigate('/healthcare');
        startShowMeGuide("Healthcare Appointment Flow", [
          "Choose a nearby hospital (like City Hospital)",
          "Select Dr. S. Ramesh",
          "Pick today's time slot 10:30 AM",
          "Press Confirm Appointment",
        ]);
      },
    },
    {
      step: 5,
      title: "Step 5: Safety & Fraud Protection ('Scam Shield')",
      action: "Analyzing a suspicious bank message for scam indicators.",
      onTrigger: () => {
        navigate('/scam-shield');
      },
    },
    {
      step: 6,
      title: "Step 6: Error Recovery & Assistance ('I\'m Stuck')",
      action: "Opening instant plain-language recovery options.",
      onTrigger: () => {
        setIsStuckOpen(true);
      },
    },
    {
      step: 7,
      title: "Step 7: Memory-Friendly Assistance ('My Day')",
      action: "Viewing daily appointment reminders and medicine schedule.",
      onTrigger: () => {
        setIsStuckOpen(false);
        navigate('/my-day');
      },
    },
  ];

  const current = demoStepsList[demoStep - 1];

  const handleNext = () => {
    if (demoStep < 7) {
      const nextNum = demoStep + 1;
      setDemoStep(nextNum);
      demoStepsList[nextNum - 1].onTrigger();
    } else {
      setDemoStep(null);
    }
  };

  const handlePrev = () => {
    if (demoStep > 1) {
      const prevNum = demoStep - 1;
      setDemoStep(prevNum);
      demoStepsList[prevNum - 1].onTrigger();
    }
  };

  return (
    <div className="bg-amber-400 text-slate-950 px-4 py-3 border-b-4 border-slate-900 shadow-xl flex flex-wrap items-center justify-between gap-3 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-slate-900 text-amber-400 rounded-full flex items-center justify-center font-black text-sm">
          {demoStep}/7
        </div>
        <div>
          <div className="font-extrabold text-sm sm:text-base flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>{current.title}</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900">
            {current.action}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={demoStep === 1}
          className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1 ${
            demoStep === 1 ? 'opacity-40 bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

        <button
          onClick={handleNext}
          className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-4 py-1.5 rounded-lg text-xs sm:text-sm flex items-center gap-1 shadow"
        >
          <span>{demoStep === 7 ? 'Finish Demo' : 'Next Step'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setDemoStep(null)}
          className="p-1 rounded hover:bg-amber-300 text-slate-900"
          title="Close Demo Bar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
