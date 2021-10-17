import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
const textColor = StyleSheet.create({
  blackColor: {
    color: 'black',
  },
  redColor: { color: 'red' },
});
import styles from './../../MainStyleSheet.js';

const TextInputComponent = (props) => {
  return (
    <TextInput
      style={[
        styles.component_text,
        props.color ? textColor.redColor : textColor.blackColor,
      ]}
      placeholder={props.text}
      onChangeText={(text) => props.handler(text)}
      autoCompleteType={props.autoType}
      keyboardType={props.keyboardType}
      textContentType={props.textContentType}
      secureTextEntry={props.secureTextEntry}
    ></TextInput>
  );
};
export default TextInputComponent;
