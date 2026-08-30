import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, Lock } from 'lucide-react';

export const ScamShield: React.FC = () => {
  const [inputText, setInputText] = useState(
    "URGENT! Your bank account will be blocked today. Click this link and verify your account."
  );
  const [analyzed, setAnalyzed] = useState(true);

  const isDemoSuspicious = inputText.toLowerCase().includes('urgent') || inputText.toLowerCase().includes('bank') || inputText.toLowerCase().includes('link');

  return (
    <div className="space-y-8 pb-12 text-[#101814]">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black shadow-sm">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#101814]">Not sure about a message?</h1>
            <p className="text-base sm:text-lg text-[#5F6B64] font-bold">
              Paste the message here. EasyLife will help you understand the warning signs.
            </p>
          </div>
        </div>
      </div>

      {/* Analyzer Card */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-6">
        <div className="space-y-4">
          <textarea
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              setAnalyzed(false);
            }}
            rows={4}
            placeholder="Paste the message here..."
            className="w-full bg-[#F8FAF8] text-[#101814] p-4 rounded-2xl border-2 border-[#CFE8DA] font-bold text-lg focus:border-[#16834B] focus:ring-4 focus:ring-[#16834B]/20"
            aria-label="Paste message for safety inspection"
          />

          <button
            onClick={() => setAnalyzed(true)}
            className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-black px-8 py-4 rounded-2xl text-xl shadow-md border-2 border-[#16834B] flex items-center gap-2 touch-target"
          >
            <ShieldCheck className="w-6 h-6" />
            <span>Check Message</span>
          </button>
        </div>

        {/* Results */}
        {analyzed && (
          <div className="pt-4 space-y-6">
            {isDemoSuspicious ? (
              <div className="bg-[#E8F5EE] p-6 sm:p-8 rounded-3xl border-2 border-[#16834B] space-y-6 shadow-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#C88700] text-white rounded-2xl flex items-center justify-center font-bold">
                    <AlertTriangle className="w-9 h-9" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#101814]">⚠️ Be careful</h3>
                    <p className="text-base font-bold text-[#C88700]">
                      Warning signs detected in this message.
                    </p>
                  </div>
                </div>

                {/* Warning Signs */}
                <div className="bg-white p-5 rounded-2xl border-2 border-[#CFE8DA] space-y-2">
                  <h4 className="font-black text-lg text-[#101814]">Warning Signs:</h4>
                  <ul className="space-y-2 font-bold text-[#5F6B64]">
                    <li className="flex items-center gap-2 text-[#C62828]">
                      <span>• The message creates urgency.</span>
                    </li>
                    <li className="flex items-center gap-2 text-[#C62828]">
                      <span>• It asks for sensitive information.</span>
                    </li>
                    <li className="flex items-center gap-2 text-[#C62828]">
                      <span>• The link may be suspicious.</span>
                    </li>
                  </ul>
                </div>

                {/* What you can do */}
                <div className="bg-white p-5 rounded-2xl border-2 border-[#16834B] space-y-2">
                  <h4 className="font-black text-xl text-[#16834B]">What you can do:</h4>
                  <p className="text-lg font-extrabold text-[#101814]">
                    Don't click the link. Contact the organisation using a trusted phone number printed on your passbook or document.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-[#E8F5EE] p-6 rounded-3xl border-2 border-[#16834B] space-y-2 text-[#101814]">
                <h3 className="text-2xl font-black">✓ No Immediate Urgency Keywords Found</h3>
                <p className="text-base font-bold text-[#5F6B64]">
                  Always verify unknown senders before sharing personal information.
                </p>
              </div>
            )}

            <div className="bg-[#F8FAF8] p-4 rounded-2xl border border-[#CFE8DA] text-xs font-bold text-[#7A857F]">
              Disclaimer: EasyLife Scam Shield is an educational safety assistant designed for design evaluation, not a legal guarantee of message safety.
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
