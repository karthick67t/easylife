import React, { useState } from 'react';
import { Cpu, Sparkles, CheckCircle2, ShieldCheck, Volume2, ArrowRight, Code, FileText, Lock } from 'lucide-react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

export const PromptLab: React.FC = () => {
  const { speak } = useTextToSpeech();
  const [inputText, setInputText] = useState(
    "Applicants must submit proof of identity along with supporting documentation prior to direct benefit disbursement."
  );
  const [selectedLanguage, setSelectedLanguage] = useState("Tamil");

  const simulatedOutput = {
    simple: "You need to show an ID document (Aadhaar or Passport) before receiving your monthly pension money.",
    nextAction: "Press 'Show Me' to see which document to upload.",
    readAloudText: "You need to show an ID document before receiving your monthly pension money.",
  };

  const systemPromptArchitecture = [
    { key: "Role", value: "You are EasyLife, an adaptive accessibility-first AI companion." },
    { key: "User Context", value: "Older adult (aged 60+) with limited digital literacy and reduced vision." },
    { key: "Task", value: "Convert complex digital, legal, or official text into 1-sentence plain language." },
    { key: "Accessibility Constraints", value: "Maximum 2 short sentences, 18px+ font size, no technical jargon, active voice." },
    { key: "Safety Rules", value: "Never ask for OTPs, ATM PINs, or banking credentials. Confirm before sensitive actions." },
    { key: "Language Preference", value: `${selectedLanguage} + English fallback.` },
    { key: "Output Structure", value: "JSON: { simpleText, nextStepAction, audioTranscript }" },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-[#101A2E] text-white rounded-3xl p-6 sm:p-8 border-4 border-[#35D6C5] shadow-2xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#35D6C5] text-[#070B16] rounded-2xl flex items-center justify-center font-black shadow-lg">
            <Cpu className="w-8 h-8" />
          </div>
          <div>
            <span className="bg-[#35D6C5]/20 text-[#35D6C5] font-extrabold px-3 py-1 rounded-full text-xs uppercase tracking-wide border border-[#35D6C5]/40">
              Prompt Engineering Showcase Page
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#F4F7FB] mt-1">EasyLife Prompt Lab</h1>
            <p className="text-base sm:text-lg text-[#B8C4D8] font-medium">
              See how structured prompt engineering turns complex digital jargon into safe, accessible guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Structured Prompt Architecture Breakdown */}
      <section className="bg-[#101A2E] rounded-3xl p-6 sm:p-8 border-2 border-[#1C2B49] shadow-xl space-y-6">
        <div className="flex items-center gap-3 border-b border-[#1C2B49] pb-4">
          <Code className="w-7 h-7 text-[#35D6C5]" />
          <div>
            <h2 className="text-2xl font-extrabold text-[#F4F7FB]">Structured Prompt Architecture</h2>
            <p className="text-sm font-semibold text-[#8492A8]">How EasyLife guarantees reliable, non-hallucinating accessibility outputs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {systemPromptArchitecture.map((item, idx) => (
            <div key={idx} className="bg-[#0B1222] p-4 rounded-2xl border border-[#2B3E68] space-y-1">
              <div className="text-xs font-bold text-[#35D6C5] uppercase tracking-wide">{item.key}</div>
              <div className="text-base font-semibold text-[#F4F7FB]">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Prompt Transformation Demo */}
      <section className="bg-[#101A2E] rounded-3xl p-6 sm:p-8 border-2 border-[#1C2B49] shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between border-b border-[#1C2B49] pb-4 gap-4">
          <h2 className="text-2xl font-extrabold text-[#F4F7FB] flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-[#FFC857]" />
            <span>Live Prompt Transformation Engine</span>
          </h2>

          {/* Language Selector */}
          <div className="flex items-center gap-2 bg-[#0B1222] px-3 py-1.5 rounded-xl border border-[#2B3E68]">
            <span className="text-xs text-[#8492A8] font-bold">Target Context:</span>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-transparent text-[#35D6C5] font-bold text-sm focus:outline-none cursor-pointer"
            >
              {['Tamil', 'English', 'Hindi', 'Malayalam', 'Telugu'].map((l) => (
                <option key={l} value={l} className="bg-[#070B16] text-white">{l}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Complex Jargon */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-[#B8C4D8] uppercase tracking-wide block">
              1. Original Complex Jargon:
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={4}
              className="w-full bg-[#0B1222] text-[#F4F7FB] p-4 rounded-2xl border-2 border-[#2B3E68] font-medium text-base focus:border-[#35D6C5] focus:ring-4 focus:ring-[#35D6C5]/20"
            />
          </div>

          {/* Output Transformed Result */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-[#35D6C5] uppercase tracking-wide block flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              2. EasyLife Accessible Output ({selectedLanguage}):
            </label>
            <div className="bg-[#0B1222] p-5 rounded-2xl border-2 border-[#35D6C5] space-y-4 shadow-lg">
              <p className="text-xl font-bold text-[#F4F7FB] leading-snug">
                "{simulatedOutput.simple}"
              </p>
              <div className="bg-[#101A2E] p-3 rounded-xl border border-[#2B3E68] text-sm text-[#FFC857] font-semibold flex items-center gap-2">
                <ArrowRight className="w-4 h-4 shrink-0" />
                <span>Next Action: {simulatedOutput.nextAction}</span>
              </div>
              <button
                onClick={() => speak(simulatedOutput.readAloudText, selectedLanguage)}
                className="bg-[#35D6C5] hover:bg-[#2cb5a6] text-[#070B16] font-extrabold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 shadow touch-target"
              >
                <Volume2 className="w-5 h-5" />
                <span>Test Read Aloud Engine</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7 AI Accessibility Rules */}
      <section className="bg-[#101A2E] rounded-3xl p-6 sm:p-8 border-2 border-[#1C2B49] shadow-xl space-y-4">
        <h2 className="text-2xl font-extrabold text-[#F4F7FB]">Enforced AI Accessibility Rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Use plain language without jargon",
            "Keep sentences short and active",
            "Offer one clear action at a time",
            "Never assume technical knowledge",
            "Provide optional read-aloud version",
            "Always offer human help / trusted call",
            "Require double confirmation for sensitive actions",
          ].map((rule, idx) => (
            <div key={idx} className="bg-[#0B1222] p-4 rounded-2xl border border-[#2B3E68] flex items-center gap-3 font-semibold text-[#B8C4D8]">
              <CheckCircle2 className="w-5 h-5 text-[#35D6C5] shrink-0" />
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
