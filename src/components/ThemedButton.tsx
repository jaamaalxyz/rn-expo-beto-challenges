import { Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeProvider';
import ThemedText from './ThemedText';

interface ButtonProps {
  title: string;
  onPress: () => void;
  bgColor?: string | undefined;
}

export default function ThemedButton({ title, onPress, bgColor }: ButtonProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          backgroundColor: bgColor ?? theme.colors.primary,
        },
        styles.button,
      ]}
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
