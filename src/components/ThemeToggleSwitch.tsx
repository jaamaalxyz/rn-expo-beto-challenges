import { Switch } from 'react-native';
import { useTheme } from '@/context/ThemeProvider';

export default function ThemeToggleSwitch() {
  const { isDarkMode, toggleTheme } = useTheme();

  return <Switch value={isDarkMode} onValueChange={toggleTheme} />;
}
