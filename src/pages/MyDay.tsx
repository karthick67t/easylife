import React from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Hospital, Pill, Phone, CheckCircle2, Clock, Bell } from 'lucide-react';

export const MyDay: React.FC = () => {
  const { dailyTasks, toggleTaskCompleted, trustedContacts } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hospital':
        return Hospital;
      case 'Pill':
        return Pill;
      case 'Phone':
        return Phone;
      default:
        return Calendar;
    }
  };

  return (
    <div className="space-y-8 pb-12 text-[#101814]">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-black shadow-sm">
            <Calendar className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#101814]">My Day</h1>
            <p className="text-base sm:text-lg text-[#5F6B64] font-bold">
              Important things, all in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Vertical Timeline Schedule */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#CFE8DA] shadow-sm space-y-6">
        <h2 className="text-2xl font-black text-[#101814]">Today's Vertical Timeline</h2>

        <div className="space-y-4 relative border-l-4 border-[#CFE8DA] ml-4 pl-6 sm:pl-8">
          {dailyTasks.map((task) => {
            const Icon = getIcon(task.iconName);
            return (
              <div
                key={task.id}
                className={`p-6 rounded-3xl border-2 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  task.completed
                    ? 'bg-[#F8FAF8] border-[#CFE8DA] opacity-60'
                    : 'bg-[#E8F5EE] border-[#16834B] shadow-xs'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#16834B] text-white rounded-2xl flex items-center justify-center font-bold shrink-0 shadow-xs">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#16834B] font-black text-sm uppercase">
                      <Clock className="w-4 h-4" />
                      <span>{task.time}</span>
                    </div>
                    <h3 className={`text-2xl font-black ${task.completed ? 'line-through text-[#7A857F]' : 'text-[#101814]'}`}>
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className="text-base font-bold text-[#5F6B64] mt-1">{task.description}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => alert(`View details for ${task.title}`)}
                    className="bg-white hover:bg-[#E8F5EE] text-[#101814] border border-[#CFE8DA] font-extrabold px-4 py-2.5 rounded-xl text-sm touch-target"
                  >
                    View
                  </button>

                  <button
                    onClick={() => {
                      if (task.type === 'call') alert(`Calling ${trustedContacts[0].name}...`);
                      toggleTaskCompleted(task.id);
                    }}
                    className={`px-5 py-2.5 rounded-xl font-extrabold text-sm shadow-xs flex items-center gap-1.5 touch-target ${
                      task.completed
                        ? 'bg-[#16834B] text-white'
                        : 'bg-[#16834B] hover:bg-[#0B3D2A] text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{task.completed ? 'Done ✓' : 'Done'}</span>
                  </button>

                  <button
                    onClick={() => alert(`Reminder set for ${task.time}`)}
                    className="bg-white hover:bg-[#E8F5EE] text-[#16834B] border border-[#CFE8DA] font-extrabold px-4 py-2.5 rounded-xl text-sm flex items-center gap-1 touch-target"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Remind Me</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
