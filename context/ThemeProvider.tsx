import React from 'react';
import { useColorScheme } from 'react-native';
import { Theme } from '@react-navigation/native';
import { DarkTheme, LightTheme } from '@/constants/theme';
import { getUserTheme, setUserTheme } from '@/utils/storage';

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemColorScheme = useColorScheme(); // Detects system light/dark mode
  const [isDarkMode, setIsDarkMode] = React.useState(
    systemColorScheme === 'dark'
  );

  const loadTheme = async () => {
    const savedTheme = await getUserTheme();
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(systemColorScheme === 'dark');
    }
  };

  React.useEffect(() => {
    loadTheme();
  }, [systemColorScheme]); // Sync with system setting

  const toggleTheme = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    await setUserTheme(newTheme ? 'dark' : 'light');
  };

  const theme = isDarkMode ? DarkTheme : LightTheme; // React Navigation themes

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
