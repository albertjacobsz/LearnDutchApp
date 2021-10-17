import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './../../MainStyleSheet';
const WordEnglishComponent = (props) => {
  return (
    <View
      style={[
        styles.rounded_corners,
        styles.component_container,
        styles.shadows,
        {
          justifyContent: 'center',
          alignSelf: 'center',
          paddingHorizontal: '10%',
        },
      ]}
    >
      <Text style={{ fontSize: 20 }}>{props.text}</Text>
    </View>
  );
};
export default WordEnglishComponent;
