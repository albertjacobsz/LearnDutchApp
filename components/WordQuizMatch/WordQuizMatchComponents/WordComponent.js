import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './../../MainStyleSheet';
const WordComponent = (props) => {
  return (
    <Pressable
      style={[
        styles.component_container,
        styles.shadows,
        styles.rounded_corners,
        { marginHorizontal: '5%', padding: '6%' },
      ]}
    >
      <Text>{props.text}</Text>
    </Pressable>
  );
};
export default WordComponent;
