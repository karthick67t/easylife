import React from 'react';
import { HeartHandshake, User, CheckCircle2, AlertCircle } from 'lucide-react';

export const WhyWeBuilt: React.FC = () => {
  const personas = [
    {
      name: "Lakshmi",
      age: 68,
      location: "Chennai, Tamil Nadu",
      needs: [
        "Uses a smartphone mainly for calls",
        "Finds government websites confusing",
        "Has difficulty reading small secondary text",
        "Prefers Tamil interface and speech",
        "Needs simple step-by-step instructions",
      ],
    },
    {
      name: "Rajan",
      age: 74,
      location: "Coimbatore, Tamil Nadu",
      needs: [
        "Has difficulty remembering complex passwords",
        "Wants easy healthcare and doctor appointment access",
        "Prefers voice instructions and plain explanations",
        "Needs large touch buttons and high visibility",
      ],
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 border-4 border-emerald-700 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-emerald-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Why We Built EasyLife</h1>
            <p className="text-base sm:text-lg text-emerald-200 font-medium">
              Don't learn the interface. Let the interface learn you.
            </p>
          </div>
        </div>
      </div>

      {/* Problem Statement Card */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-900">The Problem in Modern Digital Design</h2>
        <p className="text-lg font-semibold text-slate-700 leading-relaxed">
          Modern websites and digital portals are overwhelmingly designed for tech-savvy young adults. Elderly adults (60+) face small typography, dense dashboards, confusing icons, hidden hamburger menus, and fear of making financial or administrative mistakes.
        </p>
        <div className="bg-amber-100 p-5 rounded-2xl border-2 border-amber-400 font-bold text-amber-950 text-lg">
          EasyLife flips this paradigm: Technology shouldn't require training — technology should adapt to the user's preferred way of interacting.
        </div>
      </section>

      {/* User Personas */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Design Validation Personas</h2>
          <span className="bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Representative Personas for Testing
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona) => (
            <div key={persona.name} className="bg-emerald-50 p-6 rounded-3xl border-3 border-emerald-400 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl">
                  {persona.name[0]}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">{persona.name}, Age {persona.age}</h3>
                  <p className="text-sm font-semibold text-emerald-800">{persona.location}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Key Accessibility Needs:</div>
                <ul className="space-y-2">
                  {persona.needs.map((need, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-bold text-slate-800 text-base">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-100 p-4 rounded-2xl border border-slate-300 text-xs font-semibold text-slate-600">
          Note: These personas are representative archetypes used strictly for design validation and accessibility heuristic evaluation.
        </div>
      </section>
    </div>
  );
};
