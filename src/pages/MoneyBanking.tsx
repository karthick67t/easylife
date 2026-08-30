import React, { useState } from 'react';
import { WalletCards, ArrowLeft, CheckCircle2, Lock, HelpCircle, FileText } from 'lucide-react';
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
    <div className="space-y-8 pb-12 text-[#101814]">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black shadow-sm">
            <WalletCards className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#101814]">Money, Banking & Pension Safety</h1>
            <p className="text-base sm:text-lg text-[#5F6B64] font-bold">
              Understand money and stay safer from scams.
            </p>
          </div>
        </div>
      </div>

      {/* Safe Payment Demo */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-6">
        <div className="border-b border-[#CFE8DA] pb-4">
          <span className="bg-[#E8F5EE] text-[#16834B] font-extrabold px-3 py-1 rounded-full text-xs uppercase tracking-wide border border-[#CFE8DA]">
            Interactive Safe Payment Demo
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#101814] mt-2">
            Practice Safe Bill Payment
          </h2>
        </div>

        {payStep === 'idle' && (
          <div className="bg-[#F8FAF8] p-6 rounded-3xl border-2 border-[#CFE8DA] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-[#101814]">Electricity Bill Payment Request</h3>
                <p className="text-sm font-bold text-[#5F6B64]">Tamil Nadu Electricity Board (TNEB)</p>
              </div>
              <div className="text-2xl font-black text-[#16834B]">₹5,000</div>
            </div>

            <button
              onClick={() => setPayStep('confirm')}
              className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-sm touch-target"
            >
              Test Safe Payment Flow →
            </button>
          </div>
        )}

        {payStep === 'confirm' && (
          <div className="bg-[#E8F5EE] p-6 rounded-3xl border-2 border-[#16834B] space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B3D2A]">Before you pay</h3>

            <div className="bg-white p-5 rounded-2xl border-2 border-[#CFE8DA] space-y-2 text-lg">
              <div className="flex justify-between font-extrabold text-[#101814]">
                <span>Amount:</span>
                <span className="text-2xl font-black text-[#16834B]">₹5,000</span>
              </div>
              <div className="flex justify-between font-bold text-[#5F6B64]">
                <span>Recipient:</span>
                <span>Ravi Kumar (Utility Collector)</span>
              </div>
              <div className="flex justify-between font-bold text-[#5F6B64]">
                <span>Purpose:</span>
                <span>Electricity Bill Payment</span>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-2xl border-2 border-red-300 text-[#C62828] font-extrabold text-base flex items-center gap-3">
              <Lock className="w-6 h-6 shrink-0" />
              <span>EasyLife Safety Rule: EasyLife will NEVER ask for your OTP, ATM PIN, or UPI Password.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setPayStep('success')}
                className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-black py-4 px-6 rounded-2xl text-xl shadow-md flex items-center justify-center gap-2 touch-target"
              >
                <CheckCircle2 className="w-6 h-6" />
                <span>Yes, I want to pay</span>
              </button>

              <button
                onClick={() => setPayStep('idle')}
                className="bg-white hover:bg-[#F8FAF8] text-[#101814] border-2 border-[#CFE8DA] font-bold py-4 px-6 rounded-2xl text-lg flex items-center justify-center gap-2 touch-target"
              >
                <ArrowLeft className="w-6 h-6" />
                <span>No, go back</span>
              </button>
            </div>
          </div>
        )}

        {payStep === 'success' && (
          <div className="bg-[#E8F5EE] p-8 rounded-3xl border-2 border-[#16834B] text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#16834B] mx-auto" />
            <h3 className="text-3xl font-black text-[#0B3D2A]">Payment Demonstration Complete!</h3>
            <p className="text-lg font-bold text-[#5F6B64]">
              You successfully verified the ₹5,000 electricity payment safely.
            </p>
            <button
              onClick={() => setPayStep('idle')}
              className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg touch-target"
            >
              Reset Demo
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
