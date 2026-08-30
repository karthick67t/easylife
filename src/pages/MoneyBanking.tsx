import React, { useState } from 'react';
import { WalletCards, ShieldAlert, ArrowLeft, CheckCircle2, Lock, HelpCircle, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MoneyBanking: React.FC = () => {
  const { setExplainModalText } = useApp();
  const [payStep, setPayStep] = useState<'idle' | 'confirm' | 'success'>('idle');

  const handleExplainPension = () => {
    setExplainModalText({
      title: "Senior Pension Scheme Direct Benefit Transfer",
      complex: "Disbursement of monthly annuity proceeds is processed automatically via National Automated Clearing House.",
      simple: "Your monthly pension money will automatically enter your bank account on the 1st day of every month.",
    });
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-blue-950 text-white rounded-3xl p-6 sm:p-8 border-4 border-blue-700 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-blue-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <WalletCards className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Money, Banking & Pension Safety</h1>
            <p className="text-base sm:text-lg text-blue-200 font-medium">
              Understand simple banking terms, check pension benefits, and practice safe online payments without fear.
            </p>
          </div>
        </div>
      </div>

      {/* Signature Feature: Safe Payment Simulator */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <div className="border-b-2 border-slate-200 pb-4">
          <span className="bg-blue-100 text-blue-900 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">
            Interactive Safety Feature: Safe Payment Demo
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Practice Safe Bill Payment
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Learn how to verify payments before sending money online.
          </p>
        </div>

        {payStep === 'idle' && (
          <div className="bg-blue-50 p-6 rounded-3xl border-3 border-blue-300 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Electricity Bill Payment Request</h3>
                <p className="text-sm text-slate-600">Tamil Nadu Electricity Board (TNEB)</p>
              </div>
              <div className="text-2xl font-black text-blue-900">₹5,000</div>
            </div>

            <button
              onClick={() => setPayStep('confirm')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-md touch-target"
            >
              Test Safe Payment Flow →
            </button>
          </div>
        )}

        {payStep === 'confirm' && (
          <div className="bg-amber-50 p-6 rounded-3xl border-4 border-amber-400 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Before you pay</h3>

            <div className="bg-white p-5 rounded-2xl border-2 border-slate-300 space-y-2 text-lg">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Amount:</span>
                <span className="text-2xl font-black text-blue-900">₹5,000</span>
              </div>
              <div className="flex justify-between font-bold text-slate-800">
                <span>Recipient:</span>
                <span>Ravi Kumar (Utility Collector)</span>
              </div>
              <div className="flex justify-between font-bold text-slate-800">
                <span>Purpose:</span>
                <span>Electricity Bill Payment</span>
              </div>
            </div>

            {/* Critical Safety Warning */}
            <div className="bg-red-100 p-4 rounded-2xl border-2 border-red-400 text-red-950 font-extrabold text-base flex items-center gap-3">
              <Lock className="w-6 h-6 text-red-700 shrink-0" />
              <span>EasyLife Safety Rule: EasyLife will NEVER ask for your OTP, ATM PIN, or UPI Password.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setPayStep('success')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 px-6 rounded-2xl text-xl shadow-xl border-2 border-emerald-400 flex items-center justify-center gap-2 touch-target"
              >
                <CheckCircle2 className="w-6 h-6" />
                <span>Yes, I want to pay</span>
              </button>

              <button
                onClick={() => setPayStep('idle')}
                className="bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-4 px-6 rounded-2xl text-lg flex items-center justify-center gap-2 touch-target"
              >
                <ArrowLeft className="w-6 h-6" />
                <span>No, go back</span>
              </button>
            </div>
          </div>
        )}

        {payStep === 'success' && (
          <div className="bg-emerald-100 p-8 rounded-3xl border-4 border-emerald-500 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-700 mx-auto" />
            <h3 className="text-3xl font-black text-emerald-950">Payment Demonstration Complete!</h3>
            <p className="text-lg font-bold text-slate-800">
              You successfully verified the ₹5,000 electricity payment safely.
            </p>
            <button
              onClick={() => setPayStep('idle')}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg touch-target"
            >
              Reset Demo
            </button>
          </div>
        )}
      </section>

      {/* Pension & Government Financial Benefits Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <FileText className="w-7 h-7 text-blue-700" />
          <span>Pension & Senior Benefits Guidance</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-3xl border-2 border-blue-300 space-y-3">
            <h3 className="text-xl font-bold text-slate-900">National Social Assistance Pension</h3>
            <p className="text-sm text-slate-700 font-medium">Monthly financial support for seniors aged 60 and above.</p>
            <button
              onClick={handleExplainPension}
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-4 py-2.5 rounded-xl text-sm flex items-center gap-1.5 touch-target"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Explain Pension Terms</span>
            </button>
          </div>

          <div className="bg-amber-50 p-6 rounded-3xl border-2 border-amber-300 space-y-3">
            <h3 className="text-xl font-bold text-slate-900">Senior Citizen Fixed Deposit Interest</h3>
            <p className="text-sm text-slate-700 font-medium">Extra 0.50% interest rate benefit at public sector banks for older adults.</p>
            <div className="text-xs font-bold text-amber-900 bg-amber-200 p-2 rounded-lg">
              Visit your local branch with your Aadhaar card to apply.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
