import { StyleSheet, Text } from 'react-native';
import { useTheme } from '@/context/ThemeProvider';

interface TextProps {
  text: string;
}

export default function ThemedText({ text }: TextProps) {
  const { theme } = useTheme();

  return (
    <Text style={[styles.text, { color: theme.colors.text }]}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
