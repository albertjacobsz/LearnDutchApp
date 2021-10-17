import React from 'react';
import { Pressable, Text } from 'react-native';
import mainStyles from './../../MainStyleSheet';
const QuizButton = (props) => {
  const onClick = () => {
    props.onClick(props.value);
  };
  return (
    <Pressable
      style={[
        mainStyles.rounded_corners,
        mainStyles.shadows,
        {
          padding: 20,
          textAlign: 'center',
          backgroundColor: 'white',
          margin: 10,
          flexWrap: 'nowrap',
        },
      ]}
      onPress={onClick}
    >
      <Text>{props.text}</Text>
    </Pressable>
  );
};
export default QuizButton;
