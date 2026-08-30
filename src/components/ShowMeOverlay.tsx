import React from 'react';
import { useApp } from '../context/AppContext';
import { Footprints, ArrowRight, ArrowLeft, X, Sparkles } from 'lucide-react';

export const ShowMeOverlay: React.FC = () => {
  const { showMeGuide, nextShowMeStep, prevShowMeStep, closeShowMeGuide } = useApp();

  if (!showMeGuide || !showMeGuide.active) return null;

  const currentStepNum = showMeGuide.currentStep + 1;
  const totalSteps = showMeGuide.steps.length;
  const currentStepText = showMeGuide.steps[showMeGuide.currentStep];

  return (
    <div className="fixed top-20 left-4 right-4 z-50 max-w-4xl mx-auto bg-purple-950 text-white border-4 border-purple-400 rounded-3xl p-5 shadow-2xl animate-in slide-in-from-top-4 duration-300">
      <div className="flex items-center justify-between border-b border-purple-800 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-500 text-slate-950 rounded-xl flex items-center justify-center font-black">
            <Footprints className="w-6 h-6" />
          </div>
          <div>
            <span className="bg-purple-400 text-slate-950 font-bold px-2 py-0.5 rounded text-xs uppercase tracking-wide">
              Guided Interactive Mode ("Show Me")
            </span>
            <h3 className="text-xl font-extrabold text-white">{showMeGuide.title}</h3>
          </div>
        </div>

        <button
          onClick={closeShowMeGuide}
          className="bg-purple-900 hover:bg-purple-800 text-purple-200 p-2 rounded-xl text-xs font-bold flex items-center gap-1 border border-purple-700 touch-target"
        >
          <X className="w-5 h-5" />
          <span className="hidden sm:inline">Exit Guide</span>
        </button>
      </div>

      {/* Step Instruction Card */}
      <div className="bg-purple-900/80 border-2 border-purple-400 p-5 rounded-2xl mb-4 space-y-2">
        <div className="flex items-center justify-between text-purple-200 text-sm font-bold">
          <span>Step {currentStepNum} of {totalSteps}</span>
          <div className="flex gap-1">
            {showMeGuide.steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-2.5 rounded-full transition-all ${
                  idx === showMeGuide.currentStep ? 'w-8 bg-purple-400' : 'w-2.5 bg-purple-800'
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-xl sm:text-2xl font-black text-amber-300 leading-snug">
          👉 {currentStepText}
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={prevShowMeStep}
          disabled={showMeGuide.currentStep === 0}
          className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 touch-target ${
            showMeGuide.currentStep === 0
              ? 'opacity-40 cursor-not-allowed bg-purple-900 text-purple-400'
              : 'bg-purple-800 hover:bg-purple-700 text-white border border-purple-600'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Previous Step</span>
        </button>

        <button
          onClick={nextShowMeStep}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-6 py-2.5 rounded-xl text-base shadow-lg flex items-center gap-2 border-2 border-amber-200 touch-target"
        >
          <span>{currentStepNum === totalSteps ? 'Finish Guide' : 'Next Step'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
