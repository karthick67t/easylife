import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const DesignPrinciples: React.FC = () => {
  const principles = [
    {
      num: "01",
      title: "Simplicity First",
      desc: "Remove unnecessary choices, dense sidebars, and confusing visual clutter.",
      example: "Real EasyLife Example: Only 6 large service cards on the main homepage with 18px+ readable text.",
    },
    {
      num: "02",
      title: "Accessibility by Default",
      desc: "Accessibility features belong in the core experience rather than hidden in submenus.",
      example: "Real EasyLife Example: Built-in Read Aloud, High Contrast, and Text Scaling available on every screen.",
    },
    {
      num: "03",
      title: "User Control",
      desc: "Users should always understand what is happening and confirm important actions.",
      example: "Real EasyLife Example: Post-appointment Confidence Check modal asking 'Do you understand what happens next?'.",
    },
    {
      num: "04",
      title: "Forgiving Design",
      desc: "Mistakes should be easy to recover from without fear or paralysis.",
      example: "Real EasyLife Example: Persistent 'I'm Stuck' button and one-tap Back/Start Again controls.",
    },
    {
      num: "05",
      title: "Plain Language",
      desc: "Use language people naturally understand in everyday public service life.",
      example: "Real EasyLife Example: 'Explain This' tool transforming official jargon into 1 simple sentence.",
    },
    {
      num: "06",
      title: "Multiple Ways to Interact",
      desc: "Support touch targets (52px+), keyboard focus, scalable text, and optional voice input.",
      example: "Real EasyLife Example: Users can click buttons, use Tab keys, or speak directly to EasyTalk.",
    },
    {
      num: "07",
      title: "Trust & Safety",
      desc: "Clearly explain sensitive actions, analyze scams, and protect user independence.",
      example: "Real EasyLife Example: Interactive Scam Shield message checker & default caregiver restrictions on banking info.",
    },
  ];

  return (
    <div className="space-y-8 pb-12 text-[#101814]">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black shadow-sm">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#101814]">Our Design Principles</h1>
            <p className="text-base sm:text-lg text-[#5F6B64] font-bold">
              Seven core accessibility principles guiding every interaction in EasyLife.
            </p>
          </div>
        </div>
      </div>

      {/* 7 Large Numbered Principle Cards */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item) => (
            <div key={item.num} className="bg-white p-6 rounded-3xl border-2 border-[#CFE8DA] space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E8F5EE] text-[#16834B] rounded-2xl flex items-center justify-center font-black text-xl border border-[#CFE8DA]">
                  {item.num}
                </div>
                <h2 className="text-2xl font-black text-[#101814]">{item.title}</h2>
              </div>

              <p className="text-base font-bold text-[#5F6B64] leading-relaxed">
                {item.desc}
              </p>

              <div className="bg-[#F8FAF8] p-4 rounded-2xl border border-[#CFE8DA] text-sm font-extrabold text-[#16834B] flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{item.example}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
