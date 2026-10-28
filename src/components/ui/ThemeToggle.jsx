import { Moon, Sun } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <Sun className={`${styles.icon} ${isDark ? styles.hidden : ''}`} size={18} aria-hidden="true" />
      <Moon className={`${styles.icon} ${isDark ? '' : styles.hidden}`} size={18} aria-hidden="true" />
    </button>
  );
}
