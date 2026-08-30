import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Ambulance, ShieldAlert, Flame, Users, MapPin, X, Phone, CheckCircle, AlertTriangle } from 'lucide-react';

export const EmergencyModal: React.FC = () => {
  const { isEmergencyOpen, setIsEmergencyOpen, trustedContacts } = useApp();
  const [activeConfirmation, setActiveConfirmation] = useState<{
    title: string;
    number: string;
    description: string;
  } | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isEmergencyOpen) return null;

  const handleClose = () => {
    setActiveConfirmation(null);
    setSuccessMessage(null);
    setIsEmergencyOpen(false);
  };

  const handleConfirmAction = () => {
    if (!activeConfirmation) return;
    setSuccessMessage(`SIMULATED EMERGENCY ACTION: Successfully called ${activeConfirmation.title} (${activeConfirmation.number}) and notified your family contacts.`);
    setActiveConfirmation(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-red-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 text-white border-4 border-red-500 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full p-2.5 touch-target focus:ring-4 focus:ring-red-400"
          aria-label="Close Emergency Dialog"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Success Alert Banner */}
        {successMessage ? (
          <div className="space-y-6 text-center py-6">
            <div className="w-20 h-20 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-xl border-4 border-white animate-bounce">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-extrabold text-emerald-400">Emergency Call Initiated</h2>
            <div className="bg-slate-800 border-2 border-emerald-500 p-4 rounded-2xl text-lg text-emerald-100 font-medium">
              {successMessage}
            </div>
            <p className="text-xs text-slate-400 font-mono">
              [Hackathon Demo Mode: No real emergency services were dialled]
            </p>
            <button
              onClick={handleClose}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-2xl text-xl w-full touch-target"
            >
              Done & Return
            </button>
          </div>
        ) : activeConfirmation ? (
          /* Confirmation Screen */
          <div className="space-y-6">
            <div className="flex items-center gap-3 bg-red-900/60 border-2 border-red-400 p-4 rounded-2xl text-red-200 font-bold text-lg">
              <AlertTriangle className="w-8 h-8 text-amber-400 shrink-0" />
              <span>Are you sure you want to call emergency services?</span>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border-2 border-slate-700 space-y-2">
              <h3 className="text-2xl font-extrabold text-amber-400">{activeConfirmation.title}</h3>
              <p className="text-lg text-white font-semibold">Service Number: {activeConfirmation.number}</p>
              <p className="text-base text-slate-300">{activeConfirmation.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                onClick={handleConfirmAction}
                className="bg-red-600 hover:bg-red-500 text-white font-extrabold py-4 px-6 rounded-2xl text-xl border-2 border-red-300 shadow-xl flex items-center justify-center gap-2 touch-target"
              >
                <Phone className="w-6 h-6 animate-pulse" />
                <span>Yes, Call Now</span>
              </button>
              <button
                onClick={() => setActiveConfirmation(null)}
                className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-4 px-6 rounded-2xl text-lg border-2 border-slate-500 touch-target"
              >
                No, Go Back
              </button>
            </div>
          </div>
        ) : (
          /* Main Emergency Selection */
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center font-bold shadow-lg animate-pulse">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  🔴 EMERGENCY HELP
                </h2>
                <p className="text-base text-red-300 font-medium">
                  What kind of help do you need right now?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call Ambulance */}
              <button
                onClick={() =>
                  setActiveConfirmation({
                    title: 'Ambulance Medical Emergency',
                    number: '108',
                    description: 'Dispatches emergency medical responders and ambulance to your location.',
                  })
                }
                className="bg-slate-800 hover:bg-red-900/40 border-3 border-red-500 p-5 rounded-2xl text-left transition-all flex items-start gap-4 touch-target group"
              >
                <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow">
                  <Ambulance className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-extrabold text-xl text-white group-hover:text-red-300">Call Ambulance</div>
                  <div className="text-sm text-slate-300 font-medium">Emergency medical services (108)</div>
                </div>
              </button>

              {/* Call Police */}
              <button
                onClick={() =>
                  setActiveConfirmation({
                    title: 'Police Emergency Assistance',
                    number: '100',
                    description: 'Connects to emergency police response team for safety or urgent help.',
                  })
                }
                className="bg-slate-800 hover:bg-blue-900/40 border-3 border-blue-500 p-5 rounded-2xl text-left transition-all flex items-start gap-4 touch-target group"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow">
                  <ShieldAlert className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-extrabold text-xl text-white group-hover:text-blue-300">Call Police</div>
                  <div className="text-sm text-slate-300 font-medium">Emergency police services (100)</div>
                </div>
              </button>

              {/* Call Fire */}
              <button
                onClick={() =>
                  setActiveConfirmation({
                    title: 'Fire Emergency Services',
                    number: '101',
                    description: 'Dispatches fire brigade and emergency personnel.',
                  })
                }
                className="bg-slate-800 hover:bg-amber-900/40 border-3 border-amber-500 p-5 rounded-2xl text-left transition-all flex items-start gap-4 touch-target group"
              >
                <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center shrink-0 shadow">
                  <Flame className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-extrabold text-xl text-white group-hover:text-amber-300">Call Fire</div>
                  <div className="text-sm text-slate-300 font-medium">Fire department emergency (101)</div>
                </div>
              </button>

              {/* Share My Location */}
              <button
                onClick={() => {
                  setSuccessMessage("Your current location (Simulated: Chennai, Tamil Nadu) has been shared via SMS with Priya and Arun.");
                }}
                className="bg-slate-800 hover:bg-emerald-900/40 border-3 border-emerald-500 p-5 rounded-2xl text-left transition-all flex items-start gap-4 touch-target group"
              >
                <div className="w-12 h-12 bg-emerald-500 text-slate-950 rounded-xl flex items-center justify-center shrink-0 shadow">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-extrabold text-xl text-white group-hover:text-emerald-300">Share My Location</div>
                  <div className="text-sm text-slate-300 font-medium">Send GPS location to family</div>
                </div>
              </button>
            </div>

            {/* Trusted Family Contacts Quick Dial */}
            <div className="bg-slate-800 p-4 rounded-2xl border-2 border-slate-700 space-y-3">
              <div className="font-extrabold text-lg text-amber-400 flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Call Trusted Family Contact</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {trustedContacts.map((contact) => (
                  <button
                    key={contact.id}
                    onClick={() =>
                      setActiveConfirmation({
                        title: `Call ${contact.name} (${contact.relationship})`,
                        number: contact.phone,
                        description: `Calls your trusted contact ${contact.name} directly.`,
                      })
                    }
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3 px-4 rounded-xl text-base flex items-center justify-center gap-2 shadow touch-target"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{contact.name} ({contact.relationship})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
