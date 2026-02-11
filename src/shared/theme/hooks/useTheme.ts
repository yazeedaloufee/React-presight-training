import { useState, useCallback } from 'react';
import { applyTheme, loadTheme, resetTheme } from '../services/theme.service';
import { THEME_VARIABLES } from '../variables/theme.variables';
import type { ThemeState } from '../types/theme.types';

const getCurrentThemeFromDOM = (): ThemeState => {
  const theme: ThemeState = {};

  THEME_VARIABLES.forEach((name) => {
    theme[name] = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
  });

  return theme;
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeState>(() => {
    const saved = loadTheme();

    if (saved) {
      applyTheme(saved);
      return saved;
    }

    return getCurrentThemeFromDOM();
  });

  const updateVariable = useCallback(
    (name: string, value: string) => {
      const updated = { ...theme, [name]: value };
      setTheme(updated);
      applyTheme(updated);
    },
    [theme]
  );

  const reset = useCallback(() => {
    resetTheme();
    const current = getCurrentThemeFromDOM();
    setTheme(current);
  }, []);

  return {
    theme,
    updateVariable,
    resetTheme: reset
  };
};
