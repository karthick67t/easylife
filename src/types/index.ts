export type TextSize = 'normal' | 'large' | 'extra-large';
export type ContrastMode = 'standard' | 'high-contrast';
export type Language = 'English' | 'Tamil' | 'Hindi' | 'Malayalam' | 'Telugu';

export interface AccessibilitySettings {
  textSize: TextSize;
  contrastMode: ContrastMode;
  readAloud: boolean;
  reducedMotion: boolean;
  simplifiedInterface: boolean;
  language: Language;
}

export interface TrustedContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
}

export interface Appointment {
  id: string;
  hospital: string;
  doctor: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed';
}

export interface DailyTask {
  id: string;
  time: string;
  iconName: string;
  title: string;
  description?: string;
  actionLabel: string;
  completed: boolean;
  type: 'appointment' | 'medicine' | 'call' | 'other';
}

export interface ScamAnalysisResult {
  messageText: string;
  isSuspicious: boolean;
  title: string;
  warningSigns: string[];
  recommendations: string[];
}
