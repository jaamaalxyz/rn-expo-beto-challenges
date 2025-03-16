import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from '@/context/ThemeProvider';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <Stack screenOptions={{ headerShown: false }} />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
