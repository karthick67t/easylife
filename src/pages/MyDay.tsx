import React from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Hospital, Pill, Phone, CheckCircle2, Clock } from 'lucide-react';

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
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-amber-950 text-white rounded-3xl p-6 sm:p-8 border-4 border-amber-700 shadow-xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold">
            <Calendar className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">My Day (Daily Schedule)</h1>
            <p className="text-base sm:text-lg text-amber-200 font-medium">
              Memory-friendly daily overview keeping your appointments, medicines, and calls clear.
            </p>
          </div>
        </div>
      </div>

      {/* Task List */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-300 shadow-lg space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Today's Schedule & Reminders</h2>

        <div className="space-y-4">
          {dailyTasks.map((task) => {
            const Icon = getIcon(task.iconName);
            return (
              <div
                key={task.id}
                className={`p-6 rounded-3xl border-4 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  task.completed
                    ? 'bg-slate-100 border-slate-300 opacity-60'
                    : 'bg-amber-50 border-amber-300 shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center font-bold shrink-0 shadow">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm uppercase">
                      <Clock className="w-4 h-4" />
                      <span>{task.time}</span>
                    </div>
                    <h3 className={`text-2xl font-black ${task.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className="text-base font-semibold text-slate-700 mt-1">{task.description}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (task.type === 'call') alert(`Calling ${trustedContacts[0].name}...`);
                      toggleTaskCompleted(task.id);
                    }}
                    className={`px-6 py-3.5 rounded-2xl font-extrabold text-base shadow flex items-center gap-2 touch-target ${
                      task.completed
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-500 hover:bg-amber-600 text-slate-950 border-2 border-amber-400'
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{task.completed ? 'Completed ✓' : task.actionLabel}</span>
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
