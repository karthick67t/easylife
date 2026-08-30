import React from 'react';
import { Landmark, FileText, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
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
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-purple-950 text-white rounded-3xl p-6 sm:p-8 border-4 border-purple-700 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-purple-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <Landmark className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Government Services & Pensions</h1>
            <p className="text-base sm:text-lg text-purple-200 font-medium">
              Simplified government applications with plain-language explanations for official jargon.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Government Schemes */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <FileText className="w-7 h-7 text-purple-700" />
            <span>Senior Citizen Schemes</span>
          </h2>
          <button
            onClick={handleExplainAadhaar}
            className="bg-purple-100 hover:bg-purple-200 text-purple-950 border-2 border-purple-400 font-extrabold px-4 py-2 rounded-xl text-sm flex items-center gap-1.5 touch-target"
          >
            <Sparkles className="w-4 h-4 text-purple-700" />
            <span>Explain Official Terms</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Scheme 1 */}
          <div className="bg-purple-50 p-6 rounded-3xl border-3 border-purple-300 space-y-4">
            <div className="font-extrabold text-2xl text-slate-900">Old Age Pension (OAP) Scheme</div>
            <p className="text-base text-slate-700 font-medium">
              Monthly assistance of ₹1,000 provided directly to bank accounts of senior citizens.
            </p>
            <div className="bg-white p-3 rounded-xl border border-purple-200 text-sm font-semibold text-purple-950">
              Required Document: Aadhaar Card or Voter ID Card.
            </div>
            <button
              onClick={handleStartGovtApp}
              className="bg-purple-700 hover:bg-purple-800 text-white font-extrabold px-6 py-3.5 rounded-2xl text-lg shadow flex items-center gap-2 touch-target"
            >
              <span>Apply Step-by-Step</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scheme 2 */}
          <div className="bg-amber-50 p-6 rounded-3xl border-3 border-amber-300 space-y-4">
            <div className="font-extrabold text-2xl text-slate-900">Senior Bus & Travel Concession Pass</div>
            <p className="text-base text-slate-700 font-medium">
              Free 10 monthly bus tokens for senior citizens aged 60+ across state buses.
            </p>
            <div className="bg-white p-3 rounded-xl border border-amber-200 text-sm font-semibold text-amber-950">
              Required Document: Age Proof (Birth Certificate or Passport).
            </div>
            <button
              onClick={handleExplainAadhaar}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-6 py-3.5 rounded-2xl text-lg shadow flex items-center gap-2 touch-target"
            >
              <span>Check Eligibility</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
