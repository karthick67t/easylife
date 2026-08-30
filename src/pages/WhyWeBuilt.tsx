import React from 'react';
import { HeartHandshake, CheckCircle2 } from 'lucide-react';

export const WhyWeBuilt: React.FC = () => {
  const personas = [
    {
      name: "Lakshmi",
      age: 68,
      location: "Chennai, Tamil Nadu",
      needs: [
        "Tamil interface & speech synthesis",
        "Large readable text (22px+)",
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
        "Large touch buttons (>52px)",
        "Easy healthcare & doctor booking",
        "Memory-friendly reminders",
      ],
    },
  ];

  return (
    <div className="space-y-8 pb-12 text-[#101814]">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black shadow-sm">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#101814]">Why We Built EasyLife</h1>
            <p className="text-base sm:text-lg text-[#5F6B64] font-bold">
              Technology made easier for older adults.
            </p>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-4">
        <h2 className="text-2xl font-black text-[#101814]">The Digital Friction Facing Older Adults</h2>
        <p className="text-lg font-bold text-[#5F6B64] leading-relaxed">
          Many older adults struggle with complicated interfaces, small text, technical language, unfamiliar workflows, memory load, digital scams, and a lack of confidence when using technology.
        </p>
        <div className="bg-[#E8F5EE] p-5 rounded-2xl border-2 border-[#16834B] font-black text-[#0B3D2A] text-lg">
          EasyLife solution: Don't learn the interface. Let the interface learn you.
        </div>
      </section>

      {/* Validation Personas */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-[#CFE8DA] pb-4">
          <h2 className="text-2xl font-black text-[#101814]">Design Validation Personas</h2>
          <span className="bg-[#E8F5EE] text-[#16834B] border border-[#CFE8DA] text-xs font-black px-3 py-1 rounded-full uppercase">
            Representative Personas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona) => (
            <div key={persona.name} className="bg-[#F8FAF8] p-6 rounded-3xl border-2 border-[#CFE8DA] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#16834B] text-white rounded-full flex items-center justify-center font-black text-xl">
                  {persona.name[0]}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#101814]">{persona.name}, Age {persona.age}</h3>
                  <p className="text-sm font-bold text-[#16834B]">{persona.location}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-black text-[#7A857F] uppercase tracking-wide">Key Accessibility Needs:</div>
                <ul className="space-y-2">
                  {persona.needs.map((need, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-extrabold text-[#5F6B64] text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#16834B] shrink-0" />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#E8F5EE] p-4 rounded-2xl border border-[#CFE8DA] text-xs font-bold text-[#16834B]">
          Representative personas used for design validation. (Not real individual research participants).
        </div>
      </section>
    </div>
  );
};
