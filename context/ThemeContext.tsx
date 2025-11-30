import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { TimePhase, ThemeColors } from '../types';
import { THEMES } from '../constants';

interface ThemeContextType {
  phase: TimePhase;
  colors: ThemeColors;
  setManualPhase: (phase: TimePhase | null) => void;
  isManual: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  const [phase, setPhase] = useState<TimePhase>('morning');
  const [manualOverride, setManualOverride] = useState<TimePhase | null>(null);

  useEffect(() => {
    const checkTime = () => {
      if (manualOverride) return;

      const hour = new Date().getHours();
      if (hour >= 6 && hour < 11) setPhase('morning');
      else if (hour >= 11 && hour < 17) setPhase('day');
      else if (hour >= 17 && hour < 22) setPhase('evening');
      else setPhase('night');
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [manualOverride]);

  useEffect(() => {
    if (manualOverride) {
      setPhase(manualOverride);
    }
  }, [manualOverride]);

  const value = {
    phase,
    colors: THEMES[phase],
    setManualPhase: setManualOverride,
    isManual: !!manualOverride
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={`transition-colors duration-1000 ease-in-out min-h-screen ${THEMES[phase].background} ${THEMES[phase].text}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};