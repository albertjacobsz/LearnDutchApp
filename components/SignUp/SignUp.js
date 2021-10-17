import React, { useState } from 'react';
import SignUpWrapper from './SignUpWrapper';
import SignUpHandler from './SignUpPost';

import LoadingScreen from './../LoadingScreen/LoadingScreen';

const SignUp = ({ navigation }) => {
  const onClick = (data) => {
    SignUpHandler(data, navigation);
  };
  return <SignUpWrapper onClick={onClick} />;
};
export default SignUp;
