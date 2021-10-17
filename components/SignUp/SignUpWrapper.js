import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import InputComponent from './../Login/userInputComponents/InputComponent';

import styles from './../MainStyleSheet';
const SignUpWrapper = (props) => {
  const [colorRed, isColorRed] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const getPasswordHandler = (passwordin) => {
    setPassword(passwordin);
  };
  const getEmailHandler = (emailin) => {
    setEmail(emailin);
  };
  const getUsernameHandler = (usernamein) => {
    setUsername(usernamein);
  };
  const getConfirmPasswordHandler = (confirmPasswordin) => {
    setConfirmPassword(confirmPasswordin);
  };
  const onClick = () => {
    const data = JSON.stringify({
      username,
      email,
      password,
      passwordConfirm: confirmPassword,
    });
    //console.log(data);
    props.onClick(data);
  };
  const btnStyles = StyleSheet.create({
    view: {
      marginTop: '5%',
      backgroundColor: 'transparent',
      marginLeft: '20%',
      marginRight: '20%',
      borderWidth: 4,
      borderColor: 'white',
      color: 'white',
    },
    shadows: {
      elevation: 10,
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    btn: { color: 'white', marginLeft: '40%' },
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FF9B00',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 30, color: 'white' }}>Sign Up!</Text>
      <InputComponent
        text="username"
        circleColor="blue"
        handler={getUsernameHandler}
        color={colorRed}
        autoType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        secureTextEntry={false}
      />
      <InputComponent
        text="e-mail"
        circleColor="blue"
        handler={getEmailHandler}
        color={colorRed}
        autoType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        secureTextEntry={false}
      />
      <InputComponent
        text="password"
        circleColor="blue"
        handler={getPasswordHandler}
        color={colorRed}
        autoType="password"
        keyboardType="default"
        textContentType="password"
        secureTextEntry={true}
      />
      <InputComponent
        text="verify password"
        circleColor="blue"
        handler={getConfirmPasswordHandler}
        color={colorRed}
        autoType="password"
        keyboardType="default"
        textContentType="password"
        secureTextEntry={true}
      />
      <Pressable
        style={[btnStyles.view, styles.rounded_corners, btnStyles.shadows]}
        onPress={onClick}
      >
        <Text
          style={[
            {
              color: 'white',
              padding: '5%',
              fontSize: 20,
              textAlign: 'center',
              textAlignVertical: 'center',
            },
          ]}
        >
          Submit
        </Text>
      </Pressable>
    </View>
  );
};
export default SignUpWrapper;
