import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TrustedContact, Appointment, DailyTask } from '../types';

interface AppContextType {
  userName: string;
  userAge: number;
  trustedContacts: TrustedContact[];
  appointments: Appointment[];
  dailyTasks: DailyTask[];
  
  // Modal states
  isStuckOpen: boolean;
  setIsStuckOpen: (open: boolean) => void;
  isEmergencyOpen: boolean;
  setIsEmergencyOpen: (open: boolean) => void;
  isOnboardingOpen: boolean;
  setIsOnboardingOpen: (open: boolean) => void;
  
  // Signature Feature Modals
  explainModalText: { title: string; complex: string; simple: string } | null;
  setExplainModalText: (content: { title: string; complex: string; simple: string } | null) => void;
  
  showMeGuide: { active: boolean; title: string; currentStep: number; steps: string[] } | null;
  startShowMeGuide: (title: string, steps: string[]) => void;
  nextShowMeStep: () => void;
  prevShowMeStep: () => void;
  closeShowMeGuide: () => void;

  confidenceCheck: { title: string; message: string } | null;
  setConfidenceCheck: (data: { title: string; message: string } | null) => void;

  // Actions
  addAppointment: (appointment: Omit<Appointment, 'id' | 'status'>) => void;
  toggleTaskCompleted: (id: string) => void;
  
  // Hackathon Demo Mode
  demoStep: number | null;
  setDemoStep: (step: number | null) => void;
}

const INITIAL_CONTACTS: TrustedContact[] = [
  { id: '1', name: 'Priya', relationship: 'Daughter', phone: '+91 98765 43210' },
  { id: '2', name: 'Arun', relationship: 'Son', phone: '+91 98765 12345' },
];

const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'app-1',
    hospital: 'City Hospital',
    doctor: 'Dr. S. Ramesh (General Physician)',
    date: 'Today',
    time: '10:30 AM',
    status: 'confirmed',
  },
];

const INITIAL_TASKS: DailyTask[] = [
  {
    id: 'task-1',
    time: '10:30 AM',
    iconName: 'Hospital',
    title: 'Doctor appointment',
    description: 'City Hospital - Dr. S. Ramesh',
    actionLabel: 'View Appointment',
    completed: false,
    type: 'appointment',
  },
  {
    id: 'task-2',
    time: '2:00 PM',
    iconName: 'Pill',
    title: 'Take your medicine',
    description: 'Blood pressure medicine (1 tablet with water)',
    actionLabel: 'Mark as Done',
    completed: false,
    type: 'medicine',
  },
  {
    id: 'task-3',
    time: '6:00 PM',
    iconName: 'Phone',
    title: 'Call Priya',
    description: 'Evening family check-in call',
    actionLabel: 'Call Now',
    completed: false,
    type: 'call',
  },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userName] = useState('Lakshmi');
  const [userAge] = useState(68);
  const [trustedContacts] = useState<TrustedContact[]>(INITIAL_CONTACTS);
  const [appointments, setAppointments] = useState<Appointment[]>(INITIAL_APPOINTMENTS);
  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>(INITIAL_TASKS);

  const [isStuckOpen, setIsStuckOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  const [explainModalText, setExplainModalText] = useState<{ title: string; complex: string; simple: string } | null>(null);

  const [showMeGuide, setShowMeGuide] = useState<{ active: boolean; title: string; currentStep: number; steps: string[] } | null>(null);
  
  const [confidenceCheck, setConfidenceCheck] = useState<{ title: string; message: string } | null>(null);

  const [demoStep, setDemoStep] = useState<number | null>(null);

  const startShowMeGuide = (title: string, steps: string[]) => {
    setShowMeGuide({ active: true, title, currentStep: 0, steps });
  };

  const nextShowMeStep = () => {
    if (!showMeGuide) return;
    if (showMeGuide.currentStep < showMeGuide.steps.length - 1) {
      setShowMeGuide({ ...showMeGuide, currentStep: showMeGuide.currentStep + 1 });
    } else {
      setShowMeGuide(null);
    }
  };

  const prevShowMeStep = () => {
    if (!showMeGuide) return;
    if (showMeGuide.currentStep > 0) {
      setShowMeGuide({ ...showMeGuide, currentStep: showMeGuide.currentStep - 1 });
    }
  };

  const closeShowMeGuide = () => {
    setShowMeGuide(null);
  };

  const addAppointment = (newApp: Omit<Appointment, 'id' | 'status'>) => {
    const created: Appointment = {
      ...newApp,
      id: `app-${Date.now()}`,
      status: 'confirmed',
    };
    setAppointments((prev) => [created, ...prev]);

    // Also add to My Day tasks
    const newTask: DailyTask = {
      id: `task-${Date.now()}`,
      time: newApp.time,
      iconName: 'Hospital',
      title: `Doctor appointment: ${newApp.doctor}`,
      description: newApp.hospital,
      actionLabel: 'View Appointment',
      completed: false,
      type: 'appointment',
    };
    setDailyTasks((prev) => [newTask, ...prev]);
  };

  const toggleTaskCompleted = (id: string) => {
    setDailyTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <AppContext.Provider
      value={{
        userName,
        userAge,
        trustedContacts,
        appointments,
        dailyTasks,
        isStuckOpen,
        setIsStuckOpen,
        isEmergencyOpen,
        setIsEmergencyOpen,
        isOnboardingOpen,
        setIsOnboardingOpen,
        explainModalText,
        setExplainModalText,
        showMeGuide,
        startShowMeGuide,
        nextShowMeStep,
        prevShowMeStep,
        closeShowMeGuide,
        confidenceCheck,
        setConfidenceCheck,
        addAppointment,
        toggleTaskCompleted,
        demoStep,
        setDemoStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
