import { Alert, StyleSheet, View } from 'react-native';
import SwappableCard from '@/components/SwappableCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ThemedText from '@/components/ThemedText';
import { ThemeProvider } from '@/context/ThemeProvider';
import ThemedButton from '@/components/ThemedButton';
import ThemeToggleSwitch from '@/components/ThemeToggleSwitch';
import RootComponent from '@/components/RootComponent';

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <RootComponent />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
