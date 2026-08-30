import React from 'react';
import { BusFront, Train, Footprints } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Travel: React.FC = () => {
  const { startShowMeGuide } = useApp();

  const destinations = [
    { name: 'City Hospital', busNo: 'Bus 21G / 11H', walk: '3 mins walk from bus stop', freq: 'Every 10 minutes' },
    { name: 'Central Market', busNo: 'Bus 45B / 12C', walk: 'Direct stop in front of gate', freq: 'Every 5 minutes' },
    { name: 'Railway Station', busNo: 'Local Train / Bus 17', walk: 'Platform 1 has elevator access', freq: 'Every 15 minutes' },
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
    <div className="space-y-8 pb-12 text-[#101814]">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black shadow-sm">
            <BusFront className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#101814]">Travel & Directions</h1>
            <p className="text-base sm:text-lg text-[#5F6B64] font-bold">
              Find buses, trains and simple directions.
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-6">
        <h2 className="text-2xl font-black text-[#101814]">Select Your Destination</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="bg-[#F8FAF8] p-6 rounded-3xl border-2 border-[#CFE8DA] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#E8F5EE] text-[#16834B] rounded-2xl flex items-center justify-center font-bold">
                  <BusFront className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-[#101814]">{dest.name}</h3>
                <div className="text-base font-extrabold text-[#16834B] bg-[#E8F5EE] px-3 py-1 rounded-xl inline-block border border-[#CFE8DA]">
                  {dest.busNo}
                </div>
                <div className="text-sm font-bold text-[#5F6B64]">{dest.walk}</div>
                <div className="text-xs text-[#7A857F] font-bold">{dest.freq}</div>
              </div>

              <button
                onClick={() => handleStartDirectionGuide(dest.name)}
                className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-4 py-3 rounded-2xl text-base flex items-center justify-center gap-2 shadow-sm touch-target"
              >
                <Footprints className="w-5 h-5" />
                <span>Show Step-by-Step Directions</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
