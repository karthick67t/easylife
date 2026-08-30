import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const DesignPrinciples: React.FC = () => {
  const principles = [
    {
      num: 1,
      title: "Simplicity First",
      desc: "Remove unnecessary choices, dense sidebars, and confusing visual clutter. Focus on one major task per screen.",
    },
    {
      num: 2,
      title: "Accessibility by Default",
      desc: "Accessibility features (large typography, contrast, speech synthesis) belong in the core experience, not hidden in submenus.",
    },
    {
      num: 3,
      title: "User Control",
      desc: "Users should always understand what is happening. Provide clear confirmation steps before executing sensitive actions.",
    },
    {
      num: 4,
      title: "Forgiving Design",
      desc: "Mistakes should be easy to recover from. Provide persistent 'I\'m Stuck', Back, and Start Over buttons on every screen.",
    },
    {
      num: 5,
      title: "Plain Language",
      desc: "Use language people naturally understand in everyday life. Convert official bureaucratic jargon into clear 1-sentence explanations.",
    },
    {
      num: 6,
      title: "Multiple Ways to Interact",
      desc: "Support touch targets, full keyboard focus rings, readable text, and optional natural voice input.",
    },
    {
      num: 7,
      title: "Trust and Safety",
      desc: "Protect elderly users from fraud. Interactively analyze suspicious messages and strictly prohibit caregiver access to banking credentials.",
    },
    {
      num: 8,
      title: "Human Help Is Always Available",
      desc: "Technology should never trap a user. Always provide direct one-tap options to call trusted family contacts or emergency services.",
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-amber-950 text-white rounded-3xl p-6 sm:p-8 border-4 border-amber-700 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Our 8 Design Principles</h1>
            <p className="text-base sm:text-lg text-amber-200 font-medium">
              Core design principles guiding every interaction in the EasyLife platform.
            </p>
          </div>
        </div>
      </div>

      {/* 8 Principles Cards Grid */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item) => (
            <div key={item.num} className="bg-amber-50 p-6 rounded-3xl border-3 border-amber-300 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center font-black text-lg">
                  {item.num}
                </div>
                <h2 className="text-2xl font-black text-slate-900">{item.title}</h2>
              </div>
              <p className="text-base font-semibold text-slate-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
