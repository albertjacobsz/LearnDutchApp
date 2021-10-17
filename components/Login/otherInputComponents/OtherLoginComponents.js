import React from 'react';
import { View } from 'react-native';
import ClickableCircles from './ClickableCircles';
import styles from './OtherLoginComponentsStyleSheet';

const OtherLoginComponents = (props) => {
  return (
    <View style={styles.container}>
      <ClickableCircles
        onClick={() => {
          console.log('welcome to the google API');
        }}
        image={props.gLogo}
      />
      <ClickableCircles
        onClick={() => {
          console.log('welcome to the facebook API');
        }}
        image={props.fLogo}
      />
      <ClickableCircles
        onClick={() => {
          console.log('welcome to the apple API');
        }}
        image={props.aLogo}
      />
    </View>
  );
};
export default OtherLoginComponents;
