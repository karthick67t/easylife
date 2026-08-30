import React, { useState } from 'react';
import { Bus, Train, Navigation, MapPin, ArrowRight, Footprints } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Travel: React.FC = () => {
  const { startShowMeGuide } = useApp();
  const [destination, setDestination] = useState('City Hospital');

  const destinations = [
    { name: 'City Hospital', busNo: 'Bus 21G / 11H', walk: '3 mins walk from bus stop', freq: 'Every 10 minutes' },
    { name: 'Central Market & Shops', busNo: 'Bus 45B / 12C', walk: 'Direct stop in front of gate', freq: 'Every 5 minutes' },
    { name: 'Railway Station', busNo: 'Local Train / Bus 17', walk: 'Platform 1 has escalator access', freq: 'Every 15 minutes' },
  ];

  const handleStartDirectionGuide = (destName: string) => {
    startShowMeGuide(`Directions to ${destName}`, [
      "Walk 200 meters to your nearest bus stop at Main Street",
      `Board Bus 21G or 11H going towards ${destName}`,
      "Get down at the 4th bus stop (City Hospital Gate)",
      "Look for the large green hospital entrance sign",
    ]);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-amber-950 text-white rounded-3xl p-6 sm:p-8 border-4 border-amber-700 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <Bus className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Travel & Transport Directions</h1>
            <p className="text-base sm:text-lg text-amber-200 font-medium">
              Simple text-first directions without confusing interactive map screens.
            </p>
          </div>
        </div>
      </div>

      {/* Primary Destinations Cards */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <Navigation className="w-7 h-7 text-amber-700" />
          <span>Select Your Destination</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="bg-amber-50 p-6 rounded-3xl border-3 border-amber-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
                  <Bus className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{dest.name}</h3>
                <div className="text-base font-extrabold text-amber-900 bg-amber-200 px-3 py-1 rounded-xl inline-block">
                  {dest.busNo}
                </div>
                <div className="text-sm font-semibold text-slate-700">{dest.walk}</div>
                <div className="text-xs text-slate-500 font-medium">{dest.freq}</div>
              </div>

              <button
                onClick={() => handleStartDirectionGuide(dest.name)}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-4 py-3 rounded-2xl text-base flex items-center justify-center gap-2 shadow touch-target"
              >
                <Footprints className="w-5 h-5" />
                <span>Show Step-by-Step Directions</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bus vs Train Quick Help */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border-3 border-slate-300 space-y-3">
          <div className="flex items-center gap-3">
            <Bus className="w-8 h-8 text-amber-600" />
            <h3 className="text-xl font-bold text-slate-900">Nearby Bus Stops</h3>
          </div>
          <p className="text-base text-slate-700 font-medium">
            Main Road Bus Stop is 3 minutes away. Low-floor senior-accessible buses run every 10 minutes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border-3 border-slate-300 space-y-3">
          <div className="flex items-center gap-3">
            <Train className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900">Nearby Suburban Train</h3>
          </div>
          <p className="text-base text-slate-700 font-medium">
            Guindy Railway Station is 1.5 km away. Elevator and ramp facilities are available at Platform 1.
          </p>
        </div>
      </section>
    </div>
  );
};
