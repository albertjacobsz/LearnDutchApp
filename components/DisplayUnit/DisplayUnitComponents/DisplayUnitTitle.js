import React from 'react';
import { View, Text } from 'react-native';
import mainStyles from './../../MainStyleSheet';
const DisplayUnitTitle = (props) => {
  return (
    <View
      style={[
        mainStyles.rounded_corners,
        mainStyles.shadows,
        mainStyles.component_container,
        { padding: '5%' },
      ]}
    >
      <Text>{props.title}</Text>
    </View>
  );
};
export default DisplayUnitTitle;
