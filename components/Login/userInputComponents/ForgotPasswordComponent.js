import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
const ForgotPasswordComponent = () => {
  const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontStyle: 'italic',
      textDecorationLine: 'underline',
    },
    text_outer: { marginLeft: '54%', marginTop: '2%' },
  });
  return (
    <Pressable
      style={styles.text_outer}
      onPress={() => {
        console.log('hello you forgot your password?');
      }}
    >
      <Text style={styles.text}>Forgot Password?</Text>
    </Pressable>
  );
};
export default ForgotPasswordComponent;
