import React from 'react';
import { useApp } from '../context/AppContext';
import { Siren, Ambulance, ShieldAlert, Flame, Users, MapPin, AlertCircle } from 'lucide-react';

export const EmergencyPage: React.FC = () => {
  const { setIsEmergencyOpen, trustedContacts } = useApp();

  return (
    <div className="space-y-8 pb-12 text-[#101814]">
      {/* Red Emergency Header Banner */}
      <div className="bg-[#C62828] text-white rounded-3xl p-6 sm:p-8 border-4 border-red-400 shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white text-[#C62828] rounded-2xl flex items-center justify-center font-bold shadow-md animate-pulse">
            <Siren className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Emergency Assistance Portal</h1>
            <p className="text-base sm:text-lg text-red-100 font-bold">
              Get urgent help quickly.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsEmergencyOpen(true)}
          className="bg-white hover:bg-red-50 text-[#C62828] font-black text-2xl px-8 py-4 rounded-2xl border-4 border-white shadow-2xl flex items-center gap-3 touch-target"
        >
          <AlertCircle className="w-8 h-8" />
          <span>EMERGENCY HELP</span>
        </button>
      </div>

      {/* Emergency Cards */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-6">
        <h2 className="text-2xl font-black text-[#101814]">Direct Emergency Helplines</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-6 rounded-3xl border-2 border-red-300 space-y-3">
            <div className="flex items-center gap-3">
              <Ambulance className="w-8 h-8 text-[#C62828]" />
              <div>
                <h3 className="text-2xl font-black text-[#101814]">Ambulance (108)</h3>
                <div className="text-sm font-bold text-red-800">Free 24/7 Medical Emergency Response</div>
              </div>
            </div>
            <button
              onClick={() => setIsEmergencyOpen(true)}
              className="bg-[#C62828] hover:bg-[#b02323] text-white font-extrabold px-6 py-3 rounded-2xl text-lg shadow w-full touch-target"
            >
              Call Ambulance Now
            </button>
          </div>

          <div className="bg-red-50 p-6 rounded-3xl border-2 border-red-300 space-y-3">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-[#C62828]" />
              <div>
                <h3 className="text-2xl font-black text-[#101814]">Police Control Room (100)</h3>
                <div className="text-sm font-bold text-red-800">Urgent Safety & Protection</div>
              </div>
            </div>
            <button
              onClick={() => setIsEmergencyOpen(true)}
              className="bg-[#C62828] hover:bg-[#b02323] text-white font-extrabold px-6 py-3 rounded-2xl text-lg shadow w-full touch-target"
            >
              Call Police Control Room
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
