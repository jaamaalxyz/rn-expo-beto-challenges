import ThemedButton from '@/components/ThemedButton';
import { useAuth } from '@/context/AuthProvider';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function SignIn() {
  const { signIn } = useAuth();

  const router = useRouter();

  const onSignIn = () => {
    signIn({
      name: 'John Doe',
      email: '4M8yT@example.com',
    });

    router.push('/(app)/(tabs)');
  };

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
