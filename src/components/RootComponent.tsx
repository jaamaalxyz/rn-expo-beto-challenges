import { Alert, StyleSheet, View } from 'react-native';
import ThemeToggleSwitch from './ThemeToggleSwitch';
import ThemedButton from './ThemedButton';
import { useTheme } from '@/context/ThemeProvider';
import { useAuth } from '@/context/AuthProvider';

export default function HomeContainer() {
  const { theme } = useTheme();
  const { signOut } = useAuth();

  const onSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: () => {
          signOut();
        },
      },
    ]);
  };

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background,
        },
        styles.container,
      ]}
    >
      <ThemeToggleSwitch />
      <ThemedButton title="Sign Out" onPress={onSignOut} bgColor={'red'} />
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
