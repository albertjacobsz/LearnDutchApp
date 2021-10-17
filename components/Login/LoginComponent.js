import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useQuery } from 'react-query';
import { AuthContext } from './../../hooks/AuthContext';
import UserInputComponent from './userInputComponents/UserInputComponent';
import StraightLineComponent from './userInputComponents/StraightLineComponent';
import OtherLoginComponents from './otherInputComponents/OtherLoginComponents';
import SignUpComponent from './signUpComponents/SignUpComponent';
const userLogin = async (userData) => {
  let res = await fetch(
    'https://learn-dutch-api.herokuapp.com/api/v1/users/login',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: userData,
    }
  );
  res = res.json();
  return res;
};
const styles = StyleSheet.create({
  container_inner: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  center_align: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

const LoginComponent = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [data, setData] = useState({});
  if (isPressed) {
    const { res, isSuccess, isLoading } = useQuery('user', userLogin(data));
    signIn(res);
  }
  const { signIn } = React.useContext(AuthContext);
  const switchScreen = (data) => {
    setIsPressed(true);
    setData(data);
    //navigation.navigate('main', { screen: 'MainScreen' });
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#FF9B00' }}>
      <View style={styles.container_inner}>
        <UserInputComponent
          style={{ flex: 1, alignSelf: 'center' }}
          onClick={switchScreen}
        />
        <StraightLineComponent />
        <OtherLoginComponents
          fLogo={require('./../../assets/logos/facebookLogo.png')}
          gLogo={require('./../../assets/logos/googleLogo.png')}
          aLogo={require('./../../assets/logos/appleLogo.png')}
        />
        <SignUpComponent
          style={(styles.center_align, { color: '#FFF' })}
          navigation={navigation}
        />
      </View>
    </View>
  );
};
export default LoginComponent;
