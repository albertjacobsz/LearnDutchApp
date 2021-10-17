import React from 'react';
import { Text, Pressable } from 'react-native';
const MenuText = (props) => {
  const onChange = () => {
    props.levelHandler(props.name);
  };
  return (
    <Pressable style={{ margin: '2%' }} onPress={onChange}>
      <Text
        style={
          props.current
            ? { textDecorationLine: 'underline', textDecorationColor: 'green' }
            : {}
        }
      >
        {props.name}
      </Text>
    </Pressable>
  );
};
export default MenuText;
