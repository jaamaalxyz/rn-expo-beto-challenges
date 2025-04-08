import ThemedButton from '@/components/ThemedButton';
import { useAuth } from '@/context/AuthProvider';
import { Redirect, useRouter } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

export default function SignIn() {
  const { user, isLoading, signIn } = useAuth();

  const router = useRouter();

  const onSignIn = () => {
    signIn({
      name: 'John Doe',
      email: '4M8yT@example.com',
    });

    router.push('/(app)/(tabs)');
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size={'large'} color={'#fff'} />
      </View>
    );
  }

  if (user) {
    <Redirect href="/(app)/(tabs)" />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
    >
      <ThemedButton onPress={onSignIn} title="Sign In" />
    </View>
  );
}
