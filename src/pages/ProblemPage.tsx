import React from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const ProblemPage: React.FC = () => {
  const problemComparisons = [
    {
      title: "1. Small Typography vs Scalable Text",
      problem: "Tiny 12px secondary text and gray body copy causing eye strain for elderly users.",
      solution: "18px minimum base text with 1-click scaling up to 26px Extra Large typography globally.",
    },
    {
      title: "2. Technical Jargon vs Plain Language ('Explain This')",
      problem: "Official portals using confusing terms like 'disbursement', 'annuity', and 'supporting documentation'.",
      solution: "1-Sentence everyday explanations converting complex terms into plain speech.",
    },
    {
      title: "3. Memory Load vs Daily Schedule ('My Day')",
      problem: "Older adults forced to remember multiple medicine times, hospital dates, and passwords.",
      solution: "Calm, memory-friendly timeline organizing daily tasks, medicines, and appointments in one place.",
    },
    {
      title: "4. Fear of Making Mistakes vs Forgiving Design",
      problem: "Fear of clicking the wrong button resulting in anxiety, paralysis, or accidental transactions.",
      solution: "Persistent 'I'm Stuck' button, clear confirmation dialogs, and instant undo/cancel features.",
    },
    {
      title: "5. Digital Scams & Fraud vs Scam Shield",
      problem: "Elderly targeted by urgent SMS links, fake bank warnings, and OTP theft.",
      solution: "Interactive Scam Shield message analyzer highlighting red flags, urgency, and link risks.",
    },
    {
      title: "6. Hidden Menus vs Persistent Controls",
      problem: "Critical actions hidden behind multi-level hamburger menus and small icons.",
      solution: "Persistent bottom bar with Emergency Help, I'm Stuck, Home, and Read Aloud always visible.",
    },
    {
      title: "7. Language Barriers vs Multi-Language Support",
      problem: "Government and banking portals defaulting strictly to complex English.",
      solution: "Seamless dictionary translations for Tamil, English, Hindi, Malayalam, and Telugu.",
    },
    {
      title: "8. Robotic Chatbots vs Trusted Circle Support",
      problem: "Generic AI chatbots that fail to understand elderly needs or trap users in loops.",
      solution: "Direct 1-tap connection to trusted family contacts (Priya & Arun) while preserving user control.",
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-[#101A2E] text-white rounded-3xl p-6 sm:p-8 border-4 border-[#FF5C67] shadow-2xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#FF5C67] text-[#070B16] rounded-2xl flex items-center justify-center font-black shadow-lg">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#F4F7FB]">The Problem We're Solving</h1>
            <p className="text-base sm:text-lg text-[#B8C4D8] font-medium">
              Why conventional digital interfaces fail older adults — and how EasyLife transforms the experience.
            </p>
          </div>
        </div>
      </div>

      {/* 8 Before vs After Comparison Cards */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          {problemComparisons.map((item, idx) => (
            <div key={idx} className="bg-[#101A2E] rounded-3xl p-6 border-2 border-[#1C2B49] shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-[#F4F7FB]">{item.title}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Traditional Problem Card */}
                <div className="bg-[#1a1215] border-2 border-[#FF5C67]/40 p-5 rounded-2xl space-y-2">
                  <div className="text-xs font-bold text-[#FF5C67] uppercase tracking-wide flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" />
                    Traditional Interface Friction:
                  </div>
                  <p className="text-base font-semibold text-[#B8C4D8] leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* EasyLife Solution Card */}
                <div className="bg-[#0b1f1c] border-2 border-[#35D6C5]/40 p-5 rounded-2xl space-y-2">
                  <div className="text-xs font-bold text-[#35D6C5] uppercase tracking-wide flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    EasyLife Adaptive Solution:
                  </div>
                  <p className="text-base font-semibold text-[#F4F7FB] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
