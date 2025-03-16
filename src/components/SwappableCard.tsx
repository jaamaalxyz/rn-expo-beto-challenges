import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

export default function SwappableCard() {
  const translateX = useSharedValue(0);
  const swipeGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
    })
    .onEnd(() => {
      translateX.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <GestureDetector gesture={swipeGesture}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text style={styles.text}>Swipe Me!</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 100,
    backgroundColor: '#ff7675',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
