import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomTextInput from './CustomTextInput';
import ThemedButton from './ThemedButton';

export default function ProfileForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <Controller
              control={control}
              name="name"
              rules={{ required: 'Name is required' }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomTextInput
                  label="Name"
                  onChangeText={onChange}
                  value={value}
                  error={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{ required: 'Email is required' }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomTextInput
                  label="Email"
                  type="email"
                  onChangeText={onChange}
                  value={value}
                  error={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{ required: 'Password is required' }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomTextInput
                  label="Password"
                  type="password"
                  onChangeText={onChange}
                  value={value}
                  error={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  label="Date of Birth"
                  type="date"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  label="Phone Number"
                  type="tel"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="currency"
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  label="Amount"
                  type="currency"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="textarea"
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  label="Description"
                  type="textarea"
                  onChangeText={onChange}
                  value={value}
                  multiline
                  numberOfLines={4}
                />
              )}
            />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <ThemedButton title="Submit" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100, // Extra padding so content doesn't overlap with the button
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
