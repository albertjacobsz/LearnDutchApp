import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircleComponent from './../../CircleComponent.js';
import TextInputComponent from './TextInputComponent';
import styles from './../../MainStyleSheet.js';

const InputComponent = (props) => {
  const getData = (text) => {
    props.handler(text);
  };
  const otherStyles = StyleSheet.create({
    redBorder: {
      borderColor: 'red',
      borderWidth: 1,
    },
  });
  return (
    <View
      style={[
        styles.component_container,
        styles.rounded_corners,
        styles.side_margins,
        styles.shadows,
        props.color ? otherStyles.redBorder : '',
      ]}
    >
      <CircleComponent circleColor={props.color ? 'red' : props.circleColor} />
      <TextInputComponent
        text={props.text}
        color={props.color}
        autoCompleteType={props.autoType}
        keyboardType={props.keyboardType}
        textContentType={props.textContentType}
        secureTextEntry={props.secureTextEntry}
        handler={getData}
      />
    </View>
  );
};
export default InputComponent;
