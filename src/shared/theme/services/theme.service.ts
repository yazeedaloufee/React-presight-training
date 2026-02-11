import type { ThemeState } from '../types/theme.types';

const storageKey = 'nmo-theme';

export const applyTheme = (theme: ThemeState): void => {
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  localStorage.setItem(storageKey, JSON.stringify(theme));
};

export const loadTheme = (): ThemeState | null => {
  const stored = localStorage.getItem(storageKey);
  return stored ? JSON.parse(stored) : null;
};

export const resetTheme = (): void => {
  document.documentElement.removeAttribute('style');
  localStorage.removeItem(storageKey);
};
