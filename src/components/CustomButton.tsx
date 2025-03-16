import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
}

export default function CustomButton({
  title,
  onPress,
  bgColor = 'blue',
  textColor = 'white',
  disabled = false,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[{ backgroundColor: bgColor }, styles.button]}
      disabled={disabled}
    >
      <Text style={[{ color: textColor }, styles.buttonText]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
