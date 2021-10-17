import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './../../../MainStyleSheet';
const UnitTextComponent = (props) => {
  const switchScreen = () => {
    const data = props.data;
    props.navigation.navigate('Display', { data });
  };
  return (
    <Pressable
      style={[
        styles.shadows,
        styles.rounded_corners,
        { marginTop: '5%', backgroundColor: 'white', padding: '1.5%' },
      ]}
      onPress={switchScreen}
    >
      <Text>L1-{props.text}</Text>
    </Pressable>
  );
};
export default UnitTextComponent;
