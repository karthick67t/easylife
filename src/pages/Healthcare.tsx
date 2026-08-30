import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Hospital, UserCheck, Calendar, Clock, CheckCircle2, Pill, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const Healthcare: React.FC = () => {
  const { addAppointment, setConfidenceCheck, appointments } = useApp();

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

    setBookingStep(5); // Success confirmation step

    // Launch Signature Feature: Confidence Check
    setConfidenceCheck({
      title: "Your appointment is booked!",
      message: `Confirmed with ${selectedDoctor} at ${selectedHospital} for ${selectedTime} (${selectedDate}).`,
    });
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 border-4 border-emerald-700 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-emerald-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <Hospital className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Healthcare & Doctor Booking</h1>
            <p className="text-base sm:text-lg text-emerald-200 font-medium">
              Find nearby hospitals, book appointments step by step, and manage medicine reminders.
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Booking Wizard Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-200 pb-4 gap-2">
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Calendar className="w-7 h-7 text-emerald-700" />
            <span>Book a Doctor Appointment</span>
          </h2>

          {/* 4-Step Visual Progress Bar */}
          <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-2xl border border-slate-300">
            <span className="text-xs font-bold text-slate-700">Step {Math.min(bookingStep, 4)} of 4:</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    bookingStep >= step ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-600'
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
            <h3 className="text-xl font-extrabold text-slate-900">Step 1: Choose a Hospital or Clinic</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hospitals.map((h) => {
                const isSelected = selectedHospital === h.name;
                return (
                  <button
                    key={h.name}
                    onClick={() => setSelectedHospital(h.name)}
                    className={`p-5 rounded-2xl border-3 text-left transition-all touch-target ${
                      isSelected
                        ? 'bg-emerald-100 border-emerald-600 text-slate-950 ring-4 ring-emerald-300 shadow-md'
                        : 'bg-white border-slate-300 hover:border-emerald-400'
                    }`}
                  >
                    <div className="font-black text-xl text-slate-900 mb-1">{h.name}</div>
                    <div className="text-sm font-bold text-emerald-800">{h.distance}</div>
                    <div className="text-xs text-slate-600 mt-2">{h.specialty}</div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setBookingStep(2)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-md flex items-center gap-2 touch-target"
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
            <h3 className="text-xl font-extrabold text-slate-900">Step 2: Choose a Doctor at {selectedHospital}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {doctors.map((doc) => {
                const fullDocName = `${doc.name} (${doc.title})`;
                const isSelected = selectedDoctor === fullDocName || selectedDoctor.includes(doc.name);
                return (
                  <button
                    key={doc.name}
                    onClick={() => setSelectedDoctor(fullDocName)}
                    className={`p-5 rounded-2xl border-3 text-left transition-all touch-target ${
                      isSelected
                        ? 'bg-emerald-100 border-emerald-600 text-slate-950 ring-4 ring-emerald-300 shadow-md'
                        : 'bg-white border-slate-300 hover:border-emerald-400'
                    }`}
                  >
                    <div className="w-10 h-10 bg-emerald-200 text-emerald-900 rounded-full flex items-center justify-center font-bold mb-2">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div className="font-black text-xl text-slate-900">{doc.name}</div>
                    <div className="text-sm font-bold text-slate-700">{doc.title}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">{doc.exp}</div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setBookingStep(1)}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-3.5 rounded-2xl touch-target"
              >
                ← Back
              </button>
              <button
                onClick={() => setBookingStep(3)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-md flex items-center gap-2 touch-target"
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
            <h3 className="text-xl font-extrabold text-slate-900">Step 3: Choose Date & Time</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Select Date:</label>
                <div className="flex gap-3">
                  {['Today', 'Tomorrow', 'Day After Tomorrow'].map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`px-5 py-3 rounded-2xl border-2 font-extrabold touch-target ${
                        selectedDate === d
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                          : 'bg-white text-slate-800 border-slate-300 hover:border-emerald-400'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Available Time Slots:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-4 rounded-2xl border-2 text-center font-black text-lg touch-target ${
                        selectedTime === slot
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                          : 'bg-white text-slate-800 border-slate-300 hover:border-emerald-400'
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
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-3.5 rounded-2xl touch-target"
              >
                ← Back
              </button>
              <button
                onClick={() => setBookingStep(4)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-3.5 rounded-2xl text-lg shadow-md flex items-center gap-2 touch-target"
              >
                <span>Review & Confirm</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirm Appointment */}
        {bookingStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900">Step 4: Confirm Your Appointment</h3>

            <div className="bg-amber-50 p-6 rounded-3xl border-3 border-amber-400 space-y-3">
              <div className="text-sm font-bold text-amber-900 uppercase">Appointment Summary:</div>
              <div className="text-2xl font-black text-slate-900">{selectedDoctor}</div>
              <div className="text-lg font-bold text-slate-800">Hospital: {selectedHospital}</div>
              <div className="text-lg font-bold text-emerald-800 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Time: {selectedTime} ({selectedDate})</span>
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setBookingStep(3)}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-3.5 rounded-2xl touch-target"
              >
                ← Back
              </button>
              <button
                onClick={handleConfirmBooking}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-10 py-4 rounded-2xl text-xl shadow-xl border-2 border-emerald-400 flex items-center gap-2 touch-target"
              >
                <CheckCircle2 className="w-7 h-7" />
                <span>Confirm Appointment</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Success Display */}
        {bookingStep === 5 && (
          <div className="bg-emerald-100 p-8 rounded-3xl border-4 border-emerald-500 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-700 mx-auto animate-bounce" />
            <h3 className="text-3xl font-black text-emerald-950">Your appointment is booked!</h3>
            <p className="text-lg font-bold text-slate-800">
              {selectedDoctor} at {selectedHospital} — {selectedTime} ({selectedDate})
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setBookingStep(1)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-6 py-3 rounded-2xl text-base touch-target"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Additional Features: Medication Reminders & Emergency Health Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 border-3 border-slate-300 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-100 text-amber-900 rounded-2xl flex items-center justify-center font-bold">
              <Pill className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Medication Reminders</h3>
          </div>
          <div className="bg-amber-50 p-4 rounded-2xl border-2 border-amber-300 space-y-2">
            <div className="font-bold text-slate-900 text-lg">Daily BP Medicine (Amlodipine 5mg)</div>
            <div className="text-sm text-slate-700 font-semibold">Scheduled time: 2:00 PM every day</div>
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm touch-target">
              Mark 2:00 PM Dose as Taken
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border-3 border-slate-300 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 text-red-900 rounded-2xl flex items-center justify-center font-bold">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Emergency Health Card</h3>
          </div>
          <div className="bg-red-50 p-4 rounded-2xl border-2 border-red-300 space-y-1 text-slate-800">
            <div className="font-bold text-lg">Name: Lakshmi (Age 68)</div>
            <div className="text-sm font-semibold">Blood Group: O Positive (O+)</div>
            <div className="text-sm font-semibold">Known Allergies: Penicillin</div>
            <div className="text-sm font-semibold">Emergency Contact: Daughter Priya (+91 98765 43210)</div>
          </div>
        </div>
      </section>
    </div>
  );
};
