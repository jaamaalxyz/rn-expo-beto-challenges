import React from 'react';
import { Alert } from 'react-native';
import { getUserData, setUserData } from '@/utils/storage';

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  signIn: (user: User) => Promise<void>;
  signOut: () => Promise<void>;
};

const defaultContextValue: AuthContextType = {
  user: null,
  isLoading: true,
  signIn: async () => {},
  signOut: async () => {},
};

const AuthContext = React.createContext<AuthContextType>(defaultContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const signIn = React.useCallback(async (userData: User) => {
    try {
      setIsLoading(true);
      await setUserData(JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while signing in');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signOut = React.useCallback(async () => {
    try {
      setIsLoading(true);
      await setUserData('');
      setUser(null);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while signing out');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const checkUser = async () => {
    try {
      const userData = await getUserData();
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error checking user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    checkUser();
  }, []);

  const contextValue = React.useMemo(
    () => ({
      user,
      isLoading,
      signIn,
      signOut,
    }),
    [user, isLoading, signIn, signOut]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
