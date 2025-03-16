import { Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeProvider';
import ThemedText from './ThemedText';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function ThemedButton({ title, onPress }: ButtonProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: theme.colors.primary }]}
    >
      <ThemedText text={title} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 20,
    borderRadius: 4,
    elevation: 3,
  },
});
