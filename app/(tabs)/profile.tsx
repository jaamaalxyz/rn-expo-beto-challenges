import React from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

export default function Profile() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const handleSubmit = () => {
    Alert.alert('Welcome', `${firstName} ${lastName}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>{`My first name: ${firstName}`}</Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter first name"
        placeholderTextColor={'gray'}
        style={styles.input}
      />
      <Text>{`My last name: ${lastName}`}</Text>
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Enter last name"
        placeholderTextColor={'gray'}
        style={styles.input}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={!firstName || !lastName}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});
