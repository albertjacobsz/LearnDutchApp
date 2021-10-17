import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './../../MainStyleSheet';
import * as Speech from 'expo-speech';
const WordDutchComponent = (props) => {
  return (
    <Pressable
      style={[
        styles.rounded_corners,
        styles.component_container,
        styles.shadows,
        {
          justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: '20%',
        },
      ]}
      onPress={() => {
        Speech.speak(props.text, {
          language: 'nl-NL',
        });
      }}
    >
      <Text style={{ fontSize: 30 }}>{props.text}</Text>
    </Pressable>
  );
};
export default WordDutchComponent;
