import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Users, Phone, MessageSquare, ShieldCheck, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

export const TrustedCircle: React.FC = () => {
  const { trustedContacts } = useApp();

  const [permissions, setPermissions] = useState({
    viewAppointments: true,
    receiveEmergencyAlerts: true,
    changeAccessibilitySettings: true,
    accessBankingInfo: false, // Strict default rule from requirements
  });

  const togglePermission = (key: keyof typeof permissions) => {
    if (key === 'accessBankingInfo') {
      alert("Security Rule: Caregivers are restricted from accessing banking information by default to protect your privacy.");
      return;
    }
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-teal-950 text-white rounded-3xl p-6 sm:p-8 border-4 border-teal-700 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-teal-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">My Trusted People (Family Circle)</h1>
            <p className="text-base sm:text-lg text-teal-200 font-medium">
              Quickly call or message family members while maintaining full control over your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Trusted Family Contacts Cards */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Your Trusted Contacts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustedContacts.map((contact) => (
            <div key={contact.id} className="bg-teal-50 p-6 rounded-3xl border-3 border-teal-300 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">{contact.name}</h3>
                  <div className="text-base font-bold text-teal-800">{contact.relationship}</div>
                  <div className="text-sm font-semibold text-slate-600">{contact.phone}</div>
                </div>
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {contact.name[0]}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => alert(`Calling ${contact.name}...`)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold p-3 rounded-2xl text-base flex items-center justify-center gap-2 shadow touch-target"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call</span>
                </button>

                <button
                  onClick={() => alert(`Opening SMS message to ${contact.name}...`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold p-3 rounded-2xl text-base flex items-center justify-center gap-2 shadow touch-target"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Message</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Caregiver Privacy & Control Center */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-slate-200 pb-4">
          <ShieldCheck className="w-8 h-8 text-teal-700" />
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Privacy & Caregiver Permissions</h2>
            <p className="text-sm text-slate-600 font-semibold">You remain in full control of what information your family can see.</p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            {
              key: 'viewAppointments',
              label: 'View My Doctor Appointments',
              desc: 'Allows Priya & Arun to see upcoming hospital visit times.',
            },
            {
              key: 'receiveEmergencyAlerts',
              label: 'Receive Emergency SOS Alerts',
              desc: 'Automatically notifies family if you press Emergency Help.',
            },
            {
              key: 'changeAccessibilitySettings',
              label: 'Help Adjust Accessibility Settings',
              desc: 'Allows family to help set text sizes and voice settings.',
            },
            {
              key: 'accessBankingInfo',
              label: 'Access Banking & Financial Info (Disabled by Default)',
              desc: 'Strictly restricted to protect user independence.',
            },
          ].map((item) => {
            const isChecked = permissions[item.key as keyof typeof permissions];
            return (
              <div
                key={item.key}
                onClick={() => togglePermission(item.key as any)}
                className={`p-5 rounded-2xl border-3 flex items-center justify-between cursor-pointer transition-all touch-target ${
                  isChecked
                    ? 'bg-teal-50 border-teal-500 text-slate-950'
                    : 'bg-slate-100 border-slate-300 text-slate-700'
                }`}
              >
                <div className="space-y-1">
                  <div className="font-extrabold text-xl flex items-center gap-2">
                    {item.key === 'accessBankingInfo' && <Lock className="w-5 h-5 text-red-600" />}
                    <span>{item.label}</span>
                  </div>
                  <div className="text-sm font-medium text-slate-600">{item.desc}</div>
                </div>

                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-white ${isChecked ? 'bg-teal-600' : 'bg-slate-400'}`}>
                  {isChecked ? '✓' : '✕'}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
