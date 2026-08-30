import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, PhoneCall, ArrowLeft, RefreshCw, Volume2, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { useAccessibility } from '../context/AccessibilityContext';

export const HelpCenter: React.FC = () => {
  const navigate = useNavigate();
  const { setExplainModalText, startShowMeGuide, trustedContacts } = useApp();
  const { speak } = useTextToSpeech();
  const { language } = useAccessibility();

  const options = [
    {
      title: "I don't understand this page",
      desc: "Get a short, simple explanation of what you are viewing.",
      action: () => {
        setExplainModalText({
          title: "EasyLife Portal Help",
          complex: "Comprehensive user navigation support interface.",
          simple: "This screen helps you quickly find what you need without technical confusion.",
        });
      },
    },
    {
      title: "Help me fill this form",
      desc: "Step-by-step assistance for filling forms or booking appointments.",
      action: () => {
        startShowMeGuide("Form Filling Guide", [
          "Tap on the text box where you want to type",
          "Speak or type your name clearly",
          "Press the green confirm button at the bottom",
        ]);
      },
    },
    {
      title: "Read this page aloud",
      desc: "Listen to the main information read clearly in your preferred language.",
      action: () => {
        speak("How can we help? Choose an option below to get assistance.", language);
      },
    },
    {
      title: "Call someone I trust",
      desc: "Directly call Priya or Arun for personal family guidance.",
      action: () => {
        alert(`Calling ${trustedContacts[0].name} (${trustedContacts[0].relationship})...`);
      },
    },
    {
      title: "Go back",
      desc: "Return to the previous screen.",
      action: () => navigate(-1),
    },
    {
      title: "Start over",
      desc: "Go back to the EasyLife home screen.",
      action: () => navigate('/'),
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-amber-950 text-white rounded-3xl p-6 sm:p-8 border-4 border-amber-700 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">How can we help?</h1>
            <p className="text-base sm:text-lg text-amber-200 font-medium">
              We never want technology to feel frustrating. Choose an option below:
            </p>
          </div>
        </div>
      </div>

      {/* 6 Help Options Grid */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((opt) => (
            <button
              key={opt.title}
              onClick={opt.action}
              className="p-6 rounded-3xl border-3 border-amber-300 bg-amber-50 hover:bg-amber-100 text-left transition-all shadow-md touch-target flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="font-extrabold text-2xl text-slate-900">{opt.title}</div>
                <div className="text-base font-semibold text-slate-700">{opt.desc}</div>
              </div>
              <div className="pt-4 font-black text-amber-950 text-lg flex items-center gap-2">
                <span>Select Action →</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
