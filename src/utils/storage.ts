import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  USER_THEME: 'USER_THEME',
};

export const getUserTheme = async () => {
  try {
    const theme = await AsyncStorage.getItem(STORAGE_KEYS.USER_THEME);
    return theme;
  } catch (error) {
    return null;
  }
};

export const setUserTheme = async (theme: string) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.USER_THEME, theme);
  } catch (error) {
    return null;
  }
};

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    return null;
  }
};
