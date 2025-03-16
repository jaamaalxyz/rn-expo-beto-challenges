import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
