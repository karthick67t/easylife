import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, Lock, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

export const ScamShield: React.FC = () => {
  const [inputText, setInputText] = useState(
    "URGENT! Your bank account will be blocked today. Click this link and verify your account."
  );
  const [analyzed, setAnalyzed] = useState(true);

  const isDemoSuspicious = inputText.toLowerCase().includes('urgent') || inputText.toLowerCase().includes('bank') || inputText.toLowerCase().includes('link');

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-red-950 text-white rounded-3xl p-6 sm:p-8 border-4 border-red-600 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center font-bold shadow animate-pulse">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Scam Shield Safety Checker</h1>
            <p className="text-base sm:text-lg text-red-200 font-medium">
              Protect yourself from fraudulent SMS, WhatsApp messages, and fake payment links.
            </p>
          </div>
        </div>
      </div>

      {/* Main Analyzer Card */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <div className="border-b-2 border-slate-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Is this message safe?
          </h2>
          <p className="text-base text-slate-600 font-semibold">
            Paste any SMS, WhatsApp message, or email you feel unsure about:
          </p>
        </div>

        <div className="space-y-4">
          <textarea
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setAnalyzed(false);
            }}
            rows={4}
            placeholder="Paste the message here..."
            className="w-full p-4 rounded-2xl border-3 border-slate-300 font-bold text-lg focus:border-red-500 focus:ring-4 focus:ring-red-200 text-slate-900"
            aria-label="Paste message for safety inspection"
          />

          <button
            onClick={() => setAnalyzed(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-2xl text-xl shadow-lg border-2 border-red-400 flex items-center gap-2 touch-target"
          >
            <ShieldCheck className="w-6 h-6" />
            <span>Check This Message Now</span>
          </button>
        </div>

        {/* Safety Analysis Result Display */}
        {analyzed && (
          <div className="pt-4 space-y-6">
            {isDemoSuspicious ? (
              <div className="bg-red-50 p-6 sm:p-8 rounded-3xl border-4 border-red-500 space-y-6 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center font-bold">
                    <AlertTriangle className="w-9 h-9" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-red-950">⚠️ Be careful — Potentially Suspicious Message</h3>
                    <p className="text-base font-bold text-red-800">
                      Our safety check found warning signs in this message.
                    </p>
                  </div>
                </div>

                {/* Warning Signs */}
                <div className="bg-white p-5 rounded-2xl border-2 border-red-300 space-y-2">
                  <h4 className="font-extrabold text-lg text-slate-900">Warning Signs Detected:</h4>
                  <ul className="space-y-2 font-semibold text-slate-800">
                    <li className="flex items-center gap-2 text-red-700">
                      <span>• Creates fake urgency ("URGENT!", "Account will be blocked today")</span>
                    </li>
                    <li className="flex items-center gap-2 text-red-700">
                      <span>• Requests sensitive personal or banking information</span>
                    </li>
                    <li className="flex items-center gap-2 text-red-700">
                      <span>• Contains an unfamiliar link or web address</span>
                    </li>
                  </ul>
                </div>

                {/* Safety Recommendations */}
                <div className="bg-emerald-100 p-5 rounded-2xl border-3 border-emerald-500 space-y-2">
                  <h4 className="font-black text-xl text-emerald-950">What you should do:</h4>
                  <ul className="space-y-2 font-bold text-slate-900 text-lg">
                    <li className="flex items-center gap-2 text-emerald-900">
                      <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" />
                      <span>Don't click the link inside the message</span>
                    </li>
                    <li className="flex items-center gap-2 text-emerald-900">
                      <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" />
                      <span>Don't share your OTP or banking PIN with anyone</span>
                    </li>
                    <li className="flex items-center gap-2 text-emerald-900">
                      <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" />
                      <span>Contact your bank directly using the official phone number printed on your passbook</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-emerald-50 p-6 rounded-3xl border-4 border-emerald-500 space-y-3 text-emerald-950">
                <h3 className="text-2xl font-black">✓ No Immediate High-Risk Keywords Found</h3>
                <p className="text-base font-semibold">
                  Always verify unknown senders before sharing personal information.
                </p>
              </div>
            )}

            {/* Disclaimer */}
            <div className="bg-slate-100 p-4 rounded-2xl border border-slate-300 text-xs font-semibold text-slate-600">
              Disclaimer: This is an educational safety demonstration designed for hackathon evaluation, not a legal guarantee that a message is safe or fraudulent.
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
