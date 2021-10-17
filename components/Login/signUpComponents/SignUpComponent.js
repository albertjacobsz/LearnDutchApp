import React from 'react';
import { View, Text } from 'react-native';
import styles from './SignUpComponentStyleSheet.js';
const SignUpComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text>Don't have and account yet? </Text>
      <Text
        style={{ textDecorationLine: 'underline' }}
        onPress={() => {
          props.navigation.navigate('SignUp');
        }}
      >
        Sign up now!
      </Text>
    </View>
  );
};
export default SignUpComponent;
