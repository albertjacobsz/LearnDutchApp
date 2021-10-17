import * as React from 'react';
import { View, StyleSheet, Pressable, Text, Vibration } from 'react-native';
import InputComponent from './InputComponent';
import styles from './../../MainStyleSheet';

import ForgotPasswordComponent from './ForgotPasswordComponent';
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
const UserInputComponent = (props) => {
  const onClick = () => {
    const data = JSON.stringify({ email, password });
    props.onClick(data);
  };
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [colorRed, isColorRed] = React.useState(false);
  const getPasswordHandler = (password) => {
    setPassword(password);
  };
  const getEmailHandler = (email) => {
    setEmail(email);
  };

  return (
    <View>
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
      <ForgotPasswordComponent />
      <Pressable
        style={[btnStyles.view, styles.rounded_corners, btnStyles.shadows]}
        onPress={onClick}
      >
        <Text
          style={[
            {
              color: 'white',
              marginLeft: '35%',
              fontSize: 20,

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
export default UserInputComponent;
