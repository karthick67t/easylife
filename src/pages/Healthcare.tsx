import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HeartPulse, UserCheck, Calendar, Clock, CheckCircle2, Pill, AlertCircle, ArrowRight } from 'lucide-react';

export const Healthcare: React.FC = () => {
  const { addAppointment, setConfidenceCheck } = useApp();

  const [bookingStep, setBookingStep] = useState(1);
  const [selectedHospital, setSelectedHospital] = useState('City Hospital');
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. S. Ramesh (General Physician)');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');

  const hospitals = [
    { name: 'City Hospital', distance: '1.2 km away', specialty: 'General & Cardiology' },
    { name: 'Kauvery Community Clinic', distance: '2.5 km away', specialty: 'Geriatric Care & Orthopedics' },
    { name: 'Apollo Health Center', distance: '3.8 km away', specialty: 'Multi-Specialty & Diagnostics' },
  ];

  const doctors = [
    { name: 'Dr. S. Ramesh', title: 'General Physician', exp: '24 years experience' },
    { name: 'Dr. Priya Sharma', title: 'Senior Geriatric Specialist', exp: '18 years experience' },
    { name: 'Dr. K. Arumugam', title: 'Eye & Vision Specialist', exp: '15 years experience' },
  ];

  const timeSlots = ['10:30 AM', '11:45 AM', '02:30 PM', '04:00 PM'];

  const handleConfirmBooking = () => {
    addAppointment({
      hospital: selectedHospital,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
    });

    setBookingStep(5);
    setConfidenceCheck({
      title: "Your appointment is booked!",
      message: `Confirmed with ${selectedDoctor} at ${selectedHospital} for ${selectedTime} (${selectedDate}).`,
    });
  };

  return (
    <div className="space-y-8 pb-12 text-[#101814]">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black shadow-sm">
            <HeartPulse className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#101814]">Healthcare & Doctor Booking</h1>
            <p className="text-base sm:text-lg text-[#5F6B64] font-bold">
              Find care, doctors and appointments step by step.
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Wizard Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between border-b border-[#CFE8DA] pb-4 gap-2">
          <h2 className="text-2xl font-black text-[#101814] flex items-center gap-2">
            <Calendar className="w-7 h-7 text-[#16834B]" />
            <span>Book a Doctor Appointment</span>
          </h2>

          <div className="flex items-center gap-2 bg-[#E8F5EE] px-4 py-2 rounded-2xl border border-[#CFE8DA]">
            <span className="text-xs font-black text-[#16834B]">Step {Math.min(bookingStep, 4)} of 4:</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                    bookingStep >= step ? 'bg-[#16834B] text-white' : 'bg-[#CFE8DA] text-[#5F6B64]'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step 1: Choose Hospital */}
        {bookingStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#101814]">Step 1: Choose a Hospital or Clinic</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hospitals.map((h) => {
                const isSelected = selectedHospital === h.name;
                return (
                  <button
                    key={h.name}
                    onClick={() => setSelectedHospital(h.name)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all touch-target ${
                      isSelected
                        ? 'bg-[#E8F5EE] border-[#16834B] text-[#101814] ring-4 ring-[#16834B]/20 shadow-sm'
                        : 'bg-white border-[#CFE8DA] hover:border-[#16834B]'
                    }`}
                  >
                    <div className="font-black text-xl text-[#101814] mb-1">{h.name}</div>
                    <div className="text-sm font-black text-[#16834B]">{h.distance}</div>
                    <div className="text-xs font-bold text-[#5F6B64] mt-2">{h.specialty}</div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setBookingStep(2)}
                className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-sm flex items-center gap-2 touch-target"
              >
                <span>Next: Choose Doctor</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Choose Doctor */}
        {bookingStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#101814]">Step 2: Choose a Doctor at {selectedHospital}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {doctors.map((doc) => {
                const fullDocName = `${doc.name} (${doc.title})`;
                const isSelected = selectedDoctor === fullDocName || selectedDoctor.includes(doc.name);
                return (
                  <button
                    key={doc.name}
                    onClick={() => setSelectedDoctor(fullDocName)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all touch-target ${
                      isSelected
                        ? 'bg-[#E8F5EE] border-[#16834B] text-[#101814] ring-4 ring-[#16834B]/20 shadow-sm'
                        : 'bg-white border-[#CFE8DA] hover:border-[#16834B]'
                    }`}
                  >
                    <div className="w-10 h-10 bg-[#E8F5EE] text-[#16834B] rounded-full flex items-center justify-center font-bold mb-2">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div className="font-black text-xl text-[#101814]">{doc.name}</div>
                    <div className="text-sm font-bold text-[#5F6B64]">{doc.title}</div>
                    <div className="text-xs text-[#7A857F] font-bold mt-1">{doc.exp}</div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setBookingStep(1)}
                className="bg-[#F8FAF8] hover:bg-[#E8F5EE] text-[#101814] border border-[#CFE8DA] font-bold px-6 py-3.5 rounded-2xl touch-target"
              >
                ← Back
              </button>
              <button
                onClick={() => setBookingStep(3)}
                className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-sm flex items-center gap-2 touch-target"
              >
                <span>Next: Choose Date & Time</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Choose Date & Time */}
        {bookingStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-black text-[#101814]">Step 3: Choose Date & Time</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-extrabold text-[#5F6B64] mb-2">Select Date:</label>
                <div className="flex gap-3">
                  {['Today', 'Tomorrow', 'Day After Tomorrow'].map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`px-5 py-3 rounded-2xl border-2 font-extrabold touch-target ${
                        selectedDate === d
                          ? 'bg-[#16834B] text-white border-[#16834B] shadow-sm'
                          : 'bg-white text-[#101814] border-[#CFE8DA] hover:border-[#16834B]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-extrabold text-[#5F6B64] mb-2">Available Time Slots:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-4 rounded-2xl border-2 text-center font-black text-lg touch-target ${
                        selectedTime === slot
                          ? 'bg-[#16834B] text-white border-[#16834B] shadow-sm'
                          : 'bg-white text-[#101814] border-[#CFE8DA] hover:border-[#16834B]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setBookingStep(2)}
                className="bg-[#F8FAF8] hover:bg-[#E8F5EE] text-[#101814] border border-[#CFE8DA] font-bold px-6 py-3.5 rounded-2xl touch-target"
              >
                ← Back
              </button>
              <button
                onClick={() => setBookingStep(4)}
                className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-sm flex items-center gap-2 touch-target"
              >
                <span>Review & Confirm</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirm */}
        {bookingStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-[#101814]">Step 4: Confirm Your Appointment</h3>

            <div className="bg-[#E8F5EE] p-6 rounded-3xl border-2 border-[#CFE8DA] space-y-3">
              <div className="text-sm font-extrabold text-[#16834B] uppercase">Appointment Summary:</div>
              <div className="text-2xl font-black text-[#101814]">{selectedDoctor}</div>
              <div className="text-lg font-bold text-[#5F6B64]">Hospital: {selectedHospital}</div>
              <div className="text-lg font-black text-[#16834B] flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Time: {selectedTime} ({selectedDate})</span>
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setBookingStep(3)}
                className="bg-[#F8FAF8] hover:bg-[#E8F5EE] text-[#101814] border border-[#CFE8DA] font-bold px-6 py-3.5 rounded-2xl touch-target"
              >
                ← Back
              </button>
              <button
                onClick={handleConfirmBooking}
                className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-black px-10 py-4 rounded-2xl text-xl shadow-md border-2 border-[#16834B] flex items-center gap-2 touch-target"
              >
                <CheckCircle2 className="w-7 h-7" />
                <span>Confirm Appointment</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Success Display */}
        {bookingStep === 5 && (
          <div className="bg-[#E8F5EE] p-8 rounded-3xl border-2 border-[#16834B] text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#16834B] mx-auto animate-bounce" />
            <h3 className="text-3xl font-black text-[#0B3D2A]">Your appointment is booked!</h3>
            <p className="text-lg font-bold text-[#5F6B64]">
              {selectedDoctor} at {selectedHospital} — {selectedTime} ({selectedDate})
            </p>
            <button
              onClick={() => setBookingStep(1)}
              className="bg-[#16834B] hover:bg-[#0B3D2A] text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-sm touch-target"
            >
              Book Another Appointment
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
