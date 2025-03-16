import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

type InputType =
  | 'text'
  | 'textarea'
  | 'email'
  | 'password'
  | 'date'
  | 'time'
  | 'tel'
  | 'currency';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  type?: InputType;
  error?: string;
  onChangeText?: (text: string | Date) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  type = 'text',
  error,
  onChangeText,
  ...props
}) => {
  const [secureText, setSecureText] = useState(type === 'password');
  const [value, setValue] = useState<string | Date>('');

  const [showPicker, setShowPicker] = useState(false);

  // Handle value change
  const handleChange = (text: string) => {
    let formattedText = text;

    if (type === 'currency') {
      formattedText = formatCurrency(text);
    } else if (type === 'tel') {
      formattedText = formatPhoneNumber(text);
    }

    setValue(formattedText);
    onChangeText?.(formattedText);
  };

  // Handle date/time change
  const handleDateChange = (_: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setValue(selectedDate);
      onChangeText?.(selectedDate);
    }
  };

  // Get display text for date/time
  const getDateTimeText = () => {
    if (!value) return `Select ${type === 'date' ? 'Date' : 'Time'}`;
    return type === 'date'
      ? (value as Date).toLocaleDateString()
      : (value as Date).toLocaleTimeString();
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.inputContainer, error && styles.errorBorder]}>
        {type === 'date' || type === 'time' ? (
          <TouchableOpacity
            style={styles.dateTimeInput}
            onPress={() => setShowPicker(true)}
          >
            <Text style={value ? styles.dateTimeText : styles.placeholder}>
              {getDateTimeText()}
            </Text>
          </TouchableOpacity>
        ) : (
          <TextInput
            style={[styles.input, type === 'textarea' && styles.textarea]}
            secureTextEntry={secureText}
            keyboardType={getKeyboardType(type)}
            onChangeText={handleChange}
            value={typeof value === 'string' ? value : ''}
            {...props}
          />
        )}

        {/* Password visibility toggle */}
        {type === 'password' && (
          <TouchableOpacity
            onPress={() => setSecureText(!secureText)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={secureText ? 'eye-off' : 'eye'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>

      {showPicker && (
        <DateTimePicker
          value={value instanceof Date ? value : new Date()}
          mode={type === 'date' ? 'date' : 'time'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

/**
 * Get the appropriate keyboard type based on input type
 */
const getKeyboardType = (type: InputType): TextInputProps['keyboardType'] => {
  switch (type) {
    case 'email':
      return 'email-address';
    case 'tel':
      return 'phone-pad';
    case 'currency':
      return 'numeric';
    case 'date':
    case 'time':
      return 'default'; // Handled separately
    default:
      return 'default';
  }
};

/**
 * Format phone numbers (e.g., (123) 456-7890)
 */
const formatPhoneNumber = (text: string): string => {
  const digits = text.replace(/\D/g, '');
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

/**
 * Format currency input (e.g., $1,234.56)
 */
const formatCurrency = (text: string): string => {
  const digits = text.replace(/\D/g, '');
  const num = parseFloat(digits) / 100;
  return `$${num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#333',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
  eyeIcon: {
    marginLeft: 8,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  placeholder: {
    color: '#888',
  },
  dateTimeInput: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
  },
  dateTimeText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomTextInput;
