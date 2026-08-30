import React from 'react';
import { useApp } from '../context/AppContext';
import { Siren, Ambulance, ShieldAlert, Flame, Users, MapPin, AlertCircle } from 'lucide-react';

export const EmergencyPage: React.FC = () => {
  const { setIsEmergencyOpen, trustedContacts } = useApp();

  return (
    <div className="space-y-8 pb-12">
      {/* Emergency Header Banner */}
      <div className="bg-red-950 text-white rounded-3xl p-6 sm:p-8 border-4 border-red-600 shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center font-bold shadow-lg animate-pulse">
            <Siren className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Emergency Assistance Portal</h1>
            <p className="text-base sm:text-lg text-red-200 font-medium">
              Get immediate medical, police, fire, or family assistance in one tap.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsEmergencyOpen(true)}
          className="bg-red-600 hover:bg-red-500 text-white font-black text-2xl px-8 py-4 rounded-2xl border-4 border-white shadow-2xl flex items-center gap-3 touch-target"
        >
          <AlertCircle className="w-8 h-8" />
          <span>Launch One-Touch Emergency Panel</span>
        </button>
      </div>

      {/* Direct Contact Cards */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Direct Emergency Helplines</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-6 rounded-3xl border-3 border-red-400 space-y-3">
            <div className="flex items-center gap-3">
              <Ambulance className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-2xl font-black text-slate-900">Ambulance (108)</h3>
                <div className="text-sm font-bold text-red-800">Free 24/7 Medical Emergency Response</div>
              </div>
            </div>
            <button
              onClick={() => setIsEmergencyOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3 rounded-2xl text-lg shadow w-full touch-target"
            >
              Call Ambulance Now
            </button>
          </div>

          <div className="bg-blue-50 p-6 rounded-3xl border-3 border-blue-400 space-y-3">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-2xl font-black text-slate-900">Police Control Room (100)</h3>
                <div className="text-sm font-bold text-blue-800">Urgent Safety & Protection</div>
              </div>
            </div>
            <button
              onClick={() => setIsEmergencyOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-6 py-3 rounded-2xl text-lg shadow w-full touch-target"
            >
              Call Police Control Room
            </button>
          </div>
        </div>
      </section>

      {/* Trusted Family Contacts Emergency Cards */}
      <section className="bg-amber-50 rounded-3xl p-6 sm:p-8 border-4 border-amber-400 shadow-lg space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <Users className="w-7 h-7 text-amber-800" />
          <span>My Emergency Contacts (Family)</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trustedContacts.map((contact) => (
            <div key={contact.id} className="bg-white p-5 rounded-2xl border-2 border-amber-300 flex items-center justify-between">
              <div>
                <div className="font-extrabold text-xl text-slate-900">{contact.name}</div>
                <div className="text-sm font-semibold text-slate-600">{contact.relationship} • {contact.phone}</div>
              </div>
              <button
                onClick={() => alert(`Dialling ${contact.name} (${contact.phone})...`)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-sm touch-target"
              >
                Call Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
