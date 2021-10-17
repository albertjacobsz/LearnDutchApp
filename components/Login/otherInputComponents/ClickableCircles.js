import React from 'react';
import { Pressable, Image, View } from 'react-native';

import styles from './../../MainStyleSheet.js';
import backgroundColor from './../../BackgroundColors.js';
const ClickableCircles = (props) => {
  return (
    <Pressable onPress={props.onClick}>
      <View
        style={[
          styles.circle_container,
          props.circleColor === 'red'
            ? backgroundColor.red
            : backgroundColor.white,
        ]}
      >
        <Image
          source={props.image}
          style={{ width: 25, height: 25, margin: '22%' }}
        />
      </View>
    </Pressable>
  );
};
export default ClickableCircles;
