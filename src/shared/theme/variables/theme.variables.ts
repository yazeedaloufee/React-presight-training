export type CssVariableType = 'color' | 'number' | 'text';

export type CssVariableConfig = {
  name: string;
  label: string;
  type: CssVariableType;
  unit?: string;
};

export const THEME_VARIABLES: CssVariableConfig[] = [
  { name: '--nmo-primary', label: 'Primary Color', type: 'color' },
  { name: '--nmo-secondary', label: 'Secondary Color', type: 'color' },
  { name: '--nmo-bg', label: 'Background', type: 'color' },
  { name: '--nmo-text-primary', label: 'Text Primary', type: 'color' },
  { name: '--nmo-radius-md', label: 'Border Radius', type: 'number', unit: 'px' },
  { name: '--nmo-space-md', label: 'Spacing', type: 'number', unit: 'px' }
];
