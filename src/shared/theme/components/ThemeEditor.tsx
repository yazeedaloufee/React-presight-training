import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { THEME_VARIABLES } from '../variables/theme.variables';
import styles from './ThemeEditor.module.css';

export const ThemeEditor = () => {
  const { theme, updateVariable, resetTheme } = useTheme();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.editor}>
      <button
        className={styles.toggle}
        onClick={() => setCollapsed((prev) => !prev)}
      >
        🎨 Theme Editor {collapsed ? '▼' : '▲'}
      </button>

      {!collapsed && (
        <div className={styles.content}>
          {THEME_VARIABLES.map((variable) => {
            const rawValue = theme[variable.name] ?? '';

            const displayValue =
              variable.type === 'number' && variable.unit
                ? rawValue.replace(variable.unit, '')
                : rawValue;

            return (
              <div key={variable.name} className={styles.field}>
                <label>{variable.label}</label>

                <input
                  type={variable.type === 'color' ? 'color' : 'text'}
                  value={displayValue}
                  onChange={(e) =>
                    updateVariable(
                      variable.name,
                      variable.unit
                        ? `${e.target.value}${variable.unit}`
                        : e.target.value
                    )
                  }
                />
              </div>
            );
          })}

          <button className={styles.reset} onClick={resetTheme}>
            Reset Theme
          </button>
        </div>
      )}
    </div>
  );
};
