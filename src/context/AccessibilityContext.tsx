import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AccessibilitySettings, TextSize, ContrastMode, Language } from '../types';

const DEFAULT_SETTINGS: AccessibilitySettings = {
  textSize: 'large',
  contrastMode: 'standard',
  readAloud: true,
  reducedMotion: false,
  simplifiedInterface: true,
  language: 'English',
};

interface AccessibilityContextType extends AccessibilitySettings {
  setTextSize: (size: TextSize) => void;
  setContrastMode: (mode: ContrastMode) => void;
  setReadAloud: (enabled: boolean) => void;
  setReducedMotion: (enabled: boolean) => void;
  setSimplifiedInterface: (enabled: boolean) => void;
  setLanguage: (lang: Language) => void;
  resetAccessibilitySettings: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem('easylife_accessibility_settings');
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Error loading accessibility settings from localStorage', e);
    }
    return DEFAULT_SETTINGS;
  });

  // Save to localStorage and apply DOM classes whenever settings change
  useEffect(() => {
    try {
      localStorage.setItem('easylife_accessibility_settings', JSON.stringify(settings));
    } catch (e) {
      console.error('Error saving settings', e);
    }

    // Apply global root classes
    const root = document.documentElement;
    
    // Text size classes
    root.classList.remove('text-size-normal', 'text-size-large', 'text-size-extra-large');
    if (settings.textSize === 'extra-large') {
      root.classList.add('text-size-extra-large');
    } else if (settings.textSize === 'large' || settings.textSize === 'Large' as any) {
      root.classList.add('text-size-large');
    } else {
      root.classList.add('text-size-normal');
    }

    // Contrast class
    if (settings.contrastMode === 'high-contrast') {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Motion class
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

    // Simplified UI class
    if (settings.simplifiedInterface) {
      root.classList.add('simplified-ui');
    } else {
      root.classList.remove('simplified-ui');
    }
  }, [settings]);

  const setTextSize = (textSize: TextSize) => setSettings((s) => ({ ...s, textSize }));
  const setContrastMode = (contrastMode: ContrastMode) => setSettings((s) => ({ ...s, contrastMode }));
  const setReadAloud = (readAloud: boolean) => setSettings((s) => ({ ...s, readAloud }));
  const setReducedMotion = (reducedMotion: boolean) => setSettings((s) => ({ ...s, reducedMotion }));
  const setSimplifiedInterface = (simplifiedInterface: boolean) => setSettings((s) => ({ ...s, simplifiedInterface }));
  const setLanguage = (language: Language) => setSettings((s) => ({ ...s, language }));

  const resetAccessibilitySettings = () => setSettings(DEFAULT_SETTINGS);

  return (
    <AccessibilityContext.Provider
      value={{
        ...settings,
        setTextSize,
        setContrastMode,
        setReadAloud,
        setReducedMotion,
        setSimplifiedInterface,
        setLanguage,
        resetAccessibilitySettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
