import React, { useState } from 'react';
import { Code, Sparkles, Volume2, ArrowRight, CheckCircle2, User, ShieldCheck } from 'lucide-react';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

export const PromptLab: React.FC = () => {
  const { speak } = useTextToSpeech();
  const [inputText, setInputText] = useState(
    "Applicants must submit proof of identity along with supporting documentation prior to direct benefit disbursement."
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-2 text-[#101814]">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black shadow-sm">
            <Code className="w-8 h-8" />
          </div>
          <div>
            <span className="bg-[#E8F5EE] text-[#16834B] font-extrabold px-3 py-1 rounded-full text-xs uppercase border border-[#CFE8DA]">
              Prompt Engineering Showcase Page
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#101814] mt-1">EasyLife Prompt Lab</h1>
            <p className="text-base sm:text-lg text-[#5F6B64] font-bold">
              See how EasyLife turns complicated information into accessible guidance using structured prompts.
            </p>
          </div>
        </div>
      </div>

      {/* 3-Stage Visual Showcase Architecture */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-8">
        <h2 className="text-2xl font-black text-[#101814] border-b border-[#CFE8DA] pb-4">
          Structured 3-Stage Prompt Pipeline
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Stage 1: User Context */}
          <div className="bg-[#F8FAF8] p-6 rounded-3xl border-2 border-[#CFE8DA] space-y-3 relative">
            <div className="w-10 h-10 bg-[#16834B] text-white rounded-full flex items-center justify-center font-black text-lg">
              01
            </div>
            <h3 className="text-xl font-black text-[#101814] uppercase tracking-wide">USER CONTEXT</h3>
            <div className="space-y-2 text-base font-bold text-[#5F6B64]">
              <div className="bg-white p-3 rounded-xl border border-[#CFE8DA]">• Older adult (60+)</div>
              <div className="bg-white p-3 rounded-xl border border-[#CFE8DA]">• Limited digital literacy</div>
              <div className="bg-white p-3 rounded-xl border border-[#CFE8DA]">• Tamil preference</div>
              <div className="bg-white p-3 rounded-xl border border-[#CFE8DA]">• Large text enabled</div>
              <div className="bg-white p-3 rounded-xl border border-[#CFE8DA]">• Needs step-by-step guidance</div>
            </div>
          </div>

          {/* Stage 2: Accessibility Prompt */}
          <div className="bg-[#E8F5EE] p-6 rounded-3xl border-2 border-[#16834B] space-y-3 relative">
            <div className="w-10 h-10 bg-[#0B3D2A] text-white rounded-full flex items-center justify-center font-black text-lg">
              02
            </div>
            <h3 className="text-xl font-black text-[#0B3D2A] uppercase tracking-wide">ACCESSIBILITY PROMPT</h3>
            <p className="text-xs font-bold text-[#0B3D2A] italic">
              "You are an accessibility-first assistant helping an adult aged 60+..."
            </p>

            <div className="space-y-1.5 text-sm font-bold text-[#0B3D2A]">
              <div className="flex items-center gap-1.5">✓ Plain language</div>
              <div className="flex items-center gap-1.5">✓ Short sentences</div>
              <div className="flex items-center gap-1.5">✓ One action at a time</div>
              <div className="flex items-center gap-1.5">✓ Explain unfamiliar terms</div>
              <div className="flex items-center gap-1.5">✓ Offer read aloud</div>
              <div className="flex items-center gap-1.5">✓ Never request sensitive info</div>
              <div className="flex items-center gap-1.5">✓ Confirm important actions</div>
            </div>
          </div>

          {/* Stage 3: Accessible Result */}
          <div className="bg-[#F8FAF8] p-6 rounded-3xl border-2 border-[#CFE8DA] space-y-3 relative">
            <div className="w-10 h-10 bg-[#16834B] text-white rounded-full flex items-center justify-center font-black text-lg">
              03
            </div>
            <h3 className="text-xl font-black text-[#101814] uppercase tracking-wide">ACCESSIBLE RESULT</h3>
            <div className="bg-white p-4 rounded-2xl border-2 border-[#16834B] space-y-3">
              <p className="text-lg font-black text-[#101814]">
                "You need to show an ID document."
              </p>
              <div className="text-sm font-extrabold text-[#16834B] flex items-center gap-1">
                <ArrowRight className="w-4 h-4" />
                <span>Here is what to do next...</span>
              </div>
              <button
                onClick={() => speak("You need to show an ID document.", "Tamil")}
                className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-4 py-2 rounded-xl text-sm flex items-center gap-2 shadow-xs touch-target"
              >
                <Volume2 className="w-4 h-4" />
                <span>Read Aloud</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
