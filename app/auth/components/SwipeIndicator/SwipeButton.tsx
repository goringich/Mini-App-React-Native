import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const SwipeButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Swipe</Text>
      <View style={styles.circleContainer}>
        <Svg height="37" width="37">
          <Circle cx={17} cy={17} r={17} stroke="rgba(255,255,255,0.85)" strokeWidth={1} fill="transparent" />
          <Circle cx={17} cy={17} r={14} stroke="rgba(255,255,255,0.7)" strokeWidth={1} fill="transparent" />
          <Circle cx={17} cy={17} r={10} stroke="rgba(255,255,255,0.5)" strokeWidth={1} fill="rgba(255,255,255,0.7)" />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 22,
    marginRight: 8,
  },
  circleContainer: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SwipeButton;
