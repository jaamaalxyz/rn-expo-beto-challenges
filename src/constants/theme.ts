import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native';

export const LightTheme = {
  ...NavigationLightTheme,
  colors: {
    ...NavigationLightTheme.colors,
    primary: '#007BFF',
    secondary: '#34D399',
    background: '#FFFFFF',
  },
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: '#1E90FF',
    secondary: '#10B981',
    background: '#121212',
  },
};
