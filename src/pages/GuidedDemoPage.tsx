import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, Footprints, ShieldCheck, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAccessibility } from '../context/AccessibilityContext';

export const GuidedDemoPage: React.FC = () => {
  const navigate = useNavigate();
  const { demoStep, setDemoStep, setExplainModalText, startShowMeGuide, setIsStuckOpen } = useApp();
  const { setTextSize, setContrastMode, setLanguage } = useAccessibility();

  const steps = [
    {
      num: 1,
      title: "Step 1: Meet Lakshmi (Age 68)",
      desc: "Lakshmi struggles with tiny text, complex government forms, and fears making mistakes online.",
      actionLabel: "Start Demo Flow",
      onExecute: () => {
        setDemoStep(1);
        navigate('/');
      },
    },
    {
      num: 2,
      title: "Step 2: Adapt EasyLife Interface",
      desc: "Enable Extra Large Text, High Contrast, and Tamil language dynamically.",
      actionLabel: "Apply Adaptations",
      onExecute: () => {
        setTextSize('extra-large');
        setContrastMode('high-contrast');
        setLanguage('Tamil');
        setDemoStep(2);
        navigate('/');
      },
    },
    {
      num: 3,
      title: "Step 3: Explain This Jargon Transformer",
      desc: "Transform complicated government pension instructions into 1-sentence plain language.",
      actionLabel: "Try Explain This",
      onExecute: () => {
        setDemoStep(3);
        navigate('/government');
        setExplainModalText({
          title: "Government Pension Document Rule",
          complex: "Applicants must submit proof of identity along with supporting documentation.",
          simple: "You need to show an ID document. You can use Aadhaar, a passport, or a driving licence.",
        });
      },
    },
    {
      num: 4,
      title: "Step 4: Show Me Visual Guidance",
      desc: "Visually guide Lakshmi step by step through a doctor appointment booking.",
      actionLabel: "Launch Show Me",
      onExecute: () => {
        setDemoStep(4);
        navigate('/healthcare');
        startShowMeGuide("Healthcare Appointment Flow", [
          "Choose a hospital (City Hospital)",
          "Select Dr. S. Ramesh",
          "Choose time slot 10:30 AM",
          "Press Confirm Appointment",
        ]);
      },
    },
    {
      num: 5,
      title: "Step 5: Scam Shield Safety Analyzer",
      desc: "Identify warning signs in a suspicious banking SMS asking to click a link.",
      actionLabel: "Analyze Suspicious SMS",
      onExecute: () => {
        setDemoStep(5);
        navigate('/scam-shield');
      },
    },
    {
      num: 6,
      title: "Step 6: I'm Stuck & Family Support",
      desc: "Demonstrate non-judgmental recovery and 1-tap calls to trusted daughter Priya.",
      actionLabel: "Open I'm Stuck Panel",
      onExecute: () => {
        setDemoStep(6);
        setIsStuckOpen(true);
      },
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-[#101A2E] text-white rounded-3xl p-6 sm:p-8 border-4 border-[#35D6C5] shadow-2xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#35D6C5] text-[#070B16] rounded-2xl flex items-center justify-center font-black shadow-lg">
            <Play className="w-8 h-8 fill-current" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#F4F7FB]">Experience EasyLife (Judge Presentation Mode)</h1>
            <p className="text-base sm:text-lg text-[#B8C4D8] font-medium">
              Cinematic step-by-step showcase demonstrating the 6 core innovations for hackathon judges.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Timeline Grid */}
      <section className="bg-[#101A2E] rounded-3xl p-6 sm:p-8 border-2 border-[#1C2B49] shadow-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`p-6 rounded-3xl border-3 transition-all flex flex-col justify-between space-y-4 ${
                demoStep === step.num
                  ? 'bg-[#0b1f1c] border-[#35D6C5] shadow-xl ring-4 ring-[#35D6C5]/30'
                  : 'bg-[#0B1222] border-[#2B3E68]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#35D6C5] text-[#070B16] rounded-full flex items-center justify-center font-black">
                    {step.num}
                  </div>
                  {demoStep === step.num && (
                    <span className="bg-[#35D6C5] text-[#070B16] font-extrabold px-2.5 py-0.5 rounded-full text-xs uppercase">
                      Active Step
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-[#F4F7FB]">{step.title}</h3>
                <p className="text-sm font-semibold text-[#B8C4D8] leading-relaxed">{step.desc}</p>
              </div>

              <button
                onClick={step.onExecute}
                className="bg-[#35D6C5] hover:bg-[#2cb5a6] text-[#070B16] font-extrabold px-5 py-3 rounded-2xl text-base flex items-center justify-center gap-2 shadow touch-target"
              >
                <span>{step.actionLabel}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
