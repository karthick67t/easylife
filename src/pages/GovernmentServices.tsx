import React from 'react';
import { Landmark, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const GovernmentServices: React.FC = () => {
  const { setExplainModalText, startShowMeGuide } = useApp();

  const handleExplainAadhaar = () => {
    setExplainModalText({
      title: "Government Aadhaar & Pension Identification Document",
      complex: "Applicants must submit proof of identity along with supporting documentation.",
      simple: "You need to show an ID document. You can use Aadhaar, a passport, or a driving licence.",
    });
  };

  const handleStartGovtApp = () => {
    startShowMeGuide("Senior Pension Scheme Application", [
      "Select your preferred language (Tamil or English)",
      "Provide your 12-digit Aadhaar Card number",
      "Upload or take a photo of your bank passbook front page",
      "Press the green 'Submit Scheme Application' button",
    ]);
  };

  return (
    <div className="space-y-8 pb-12 text-[#101814]">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black shadow-sm">
            <Landmark className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#101814]">Government Services</h1>
            <p className="text-base sm:text-lg text-[#5F6B64] font-bold">
              Get help with government services and applications.
            </p>
          </div>
        </div>
      </div>

      {/* Schemes */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-[#CFE8DA] pb-4">
          <h2 className="text-2xl font-black text-[#101814]">Senior Citizen Schemes</h2>
          <button
            onClick={handleExplainAadhaar}
            className="bg-[#E8F5EE] hover:bg-[#CFE8DA] text-[#16834B] border border-[#CFE8DA] font-extrabold px-4 py-2 rounded-xl text-sm flex items-center gap-1.5 touch-target"
          >
            <Sparkles className="w-4 h-4 text-[#16834B]" />
            <span>Explain Official Terms</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F8FAF8] p-6 rounded-3xl border-2 border-[#CFE8DA] space-y-4">
            <div className="font-black text-2xl text-[#101814]">Old Age Pension (OAP) Scheme</div>
            <p className="text-base font-bold text-[#5F6B64]">
              Monthly assistance of ₹1,000 provided directly to bank accounts of senior citizens.
            </p>
            <button
              onClick={handleStartGovtApp}
              className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-6 py-3.5 rounded-2xl text-lg shadow-sm flex items-center gap-2 touch-target"
            >
              <span>Apply Step-by-Step</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-[#F8FAF8] p-6 rounded-3xl border-2 border-[#CFE8DA] space-y-4">
            <div className="font-black text-2xl text-[#101814]">Senior Bus & Travel Pass</div>
            <p className="text-base font-bold text-[#5F6B64]">
              Free 10 monthly bus tokens for senior citizens aged 60+ across state buses.
            </p>
            <button
              onClick={handleExplainAadhaar}
              className="bg-white hover:bg-[#E8F5EE] text-[#16834B] border-2 border-[#16834B] font-extrabold px-6 py-3.5 rounded-2xl text-lg shadow-xs flex items-center gap-2 touch-target"
            >
              <span>Check Eligibility</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
