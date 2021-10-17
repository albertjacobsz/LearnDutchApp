import React from 'react';
import { Pressable, Text } from 'react-native';
import mainStyles from './../../MainStyleSheet';
const DisplayUnitButton = (props) => {
  const onClick = () => {
    props.switchScreen(props.screen, props.data);
  };
  return (
    <Pressable
      style={[
        mainStyles.rounded_corners,
        mainStyles.shadows,
        mainStyles.component_container,
        { padding: '5%' },
      ]}
      onPress={onClick}
    >
      <Text style={{ textAlign: 'center' }}>{props.text}</Text>
    </Pressable>
  );
};
export default DisplayUnitButton;
