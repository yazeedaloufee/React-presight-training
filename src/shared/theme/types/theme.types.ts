export type ThemeState = Record<string, string>;

export type ThemePreset = {
  name: string;
  values: ThemeState;
};