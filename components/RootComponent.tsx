import { Alert, StyleSheet, View } from 'react-native';
import ThemedText from './ThemedText';
import SwappableCard from './SwappableCard';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import ThemedButton from './ThemedButton';
import { useTheme } from '@/context/ThemeProvider';

export default function RootComponent() {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background,
        },
        styles.container,
      ]}
    >
      <ThemedText text="Hello, world!" />
      <SwappableCard />
      <ThemeToggleSwitch />
      <ThemedButton
        title="Click Me!"
        onPress={() => {
          Alert.alert('Hello, world!', 'This is an alert');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
