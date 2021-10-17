import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './MainStyleSheet.js';
import backgroundColor from './BackgroundColors.js';

const CircleComponent = (props) => {
  return (
    <View
      style={[
        styles.circle_container,
        props.circleColor === 'red'
          ? backgroundColor.red
          : backgroundColor.blue,
      ]}
    ></View>
  );
};
export default CircleComponent;
