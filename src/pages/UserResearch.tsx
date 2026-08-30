import React from 'react';
import { UsersRound, Quote, HeartHandshake, CheckCircle2, ShieldCheck } from 'lucide-react';

export const UserResearch: React.FC = () => {
  const personas = [
    {
      name: "Lakshmi",
      age: 68,
      location: "Chennai, Tamil Nadu",
      needs: [
        "Large readable text (22px+)",
        "Tamil interface & speech synthesis",
        "Simple 1-step instructions",
        "Government service & pension guidance",
      ],
    },
    {
      name: "Rajan",
      age: 74,
      location: "Coimbatore, Tamil Nadu",
      needs: [
        "Natural voice input (EasyTalk)",
        "Large touch targets (>52px)",
        "Easy healthcare & doctor booking",
        "Memory-friendly daily reminders",
      ],
    },
  ];

  const insightCards = [
    { quote: "I don't want to make a mistake.", meaning: "Elderly users feel intense anxiety about clicking wrong buttons or causing accidental money loss." },
    { quote: "I don't understand what this website is asking me.", meaning: "Official terminology creates confusion and forces seniors to give up on digital services." },
    { quote: "I want someone to explain it simply.", meaning: "Users prefer direct 1-sentence explanations over multi-paragraph documentation." },
    { quote: "I want to know what happens next.", meaning: "Completion confidence requires explicit confirmation (like Confidence Check) after important tasks." },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-[#101A2E] text-white rounded-3xl p-6 sm:p-8 border-4 border-[#4DA3FF] shadow-2xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#4DA3FF] text-[#070B16] rounded-2xl flex items-center justify-center font-black shadow-lg">
            <UsersRound className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#F4F7FB]">What We Learned (User Insights)</h1>
            <p className="text-base sm:text-lg text-[#B8C4D8] font-medium">
              Heuristic design insights and validated user personas guiding EasyLife.
            </p>
          </div>
        </div>
      </div>

      {/* Key Insight Quotes Grid */}
      <section className="bg-[#101A2E] rounded-3xl p-6 sm:p-8 border-2 border-[#1C2B49] shadow-xl space-y-6">
        <h2 className="text-2xl font-extrabold text-[#F4F7FB]">Core User Needs & Mindset</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insightCards.map((card, idx) => (
            <div key={idx} className="bg-[#0B1222] p-6 rounded-3xl border-2 border-[#2B3E68] space-y-3">
              <Quote className="w-8 h-8 text-[#FFC857]" />
              <h3 className="text-2xl font-black text-[#FFC857] font-serif">"{card.quote}"</h3>
              <p className="text-base font-semibold text-[#B8C4D8] leading-relaxed">{card.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Persona Archetypes */}
      <section className="bg-[#101A2E] rounded-3xl p-6 sm:p-8 border-2 border-[#1C2B49] shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-[#1C2B49] pb-4">
          <h2 className="text-2xl font-extrabold text-[#F4F7FB]">Validated Design Archetypes</h2>
          <span className="bg-[#0B1222] text-[#35D6C5] border border-[#35D6C5]/40 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Representative Personas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona) => (
            <div key={persona.name} className="bg-[#0B1222] p-6 rounded-3xl border-2 border-[#2B3E68] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#35D6C5] text-[#070B16] rounded-full flex items-center justify-center font-black text-xl">
                  {persona.name[0]}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#F4F7FB]">{persona.name}, Age {persona.age}</h3>
                  <p className="text-sm font-semibold text-[#35D6C5]">{persona.location}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-[#8492A8] uppercase tracking-wide">Primary Accessibility Needs:</div>
                <ul className="space-y-2">
                  {persona.needs.map((need, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-bold text-[#B8C4D8] text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#35D6C5] shrink-0" />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0B1222] p-4 rounded-2xl border border-[#2B3E68] text-xs font-semibold text-[#8492A8]">
          Note: These personas are representative validation archetypes synthesized from accessibility guidelines and senior interaction studies.
        </div>
      </section>
    </div>
  );
};
